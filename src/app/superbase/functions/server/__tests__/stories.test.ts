import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../kv_store.ts', () => {
  const store = new Map<string, unknown>();

  const get = vi.fn(async (key: string) => (store.has(key) ? store.get(key)! : null));
  const set = vi.fn(async (key: string, value: unknown) => {
    store.set(key, value);
  });
  const del = vi.fn(async (key: string) => {
    store.delete(key);
  });
  const getByPrefix = vi.fn(async (prefix: string) => {
    return Array.from(store.entries())
      .filter(([key]) => key.startsWith(prefix))
      .map(([, value]) => value)
      .filter((value) => value !== undefined);
  });

  return {
    get,
    set,
    del,
    mget: vi.fn(async () => []),
    mset: vi.fn(async () => undefined),
    getByPrefix,
    __store: store,
    __reset: () => store.clear(),
  };
});

const buildStoryRecord = () => ({
  id: 'story-1',
  userId: 'owner-1',
  items: [
    {
      id: 'item-1',
      type: 'image',
      url: 'https://example.com/photo.jpg',
      duration: 5,
      timestamp: new Date().toISOString(),
    },
  ],
  createdAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
  viewers: [],
  visibility: 'friends',
  likes: [],
  replies: [],
});

describe('story helpers', () => {
  beforeEach(async () => {
    const kv = await import('../kv_store.ts');
    (kv.__reset as () => void)();
    const getMock = kv.get as unknown as vi.Mock;
    const setMock = kv.set as unknown as vi.Mock;
    const delMock = kv.del as unknown as vi.Mock;
    const getByPrefixMock = kv.getByPrefix as unknown as vi.Mock;
    getMock.mockClear();
    setMock.mockClear();
    delMock.mockClear();
    getByPrefixMock.mockClear();
    const storeRef = kv.__store as Map<string, unknown>;
    getByPrefixMock.mockImplementation(async (prefix: string) => {
      return Array.from(storeRef.entries())
        .filter(([key]) => key.startsWith(prefix))
        .map(([, value]) => value)
        .filter((value) => value !== undefined);
    });
  });

  it('toggles story likes', async () => {
    const kv = await import('../kv_store.ts');
    await kv.set('story:story-1', buildStoryRecord());

    const { __testables } = await import('../index.tsx');

    const first = await __testables.toggleStoryLike('story-1', 'user-1');
    expect(first).not.toBeNull();
    expect(first?.story.likes).toEqual(['user-1']);
    expect(first?.liked).toBe(true);

    const second = await __testables.toggleStoryLike('story-1', 'user-1');
    expect(second).not.toBeNull();
    expect(second?.story.likes).toEqual([]);
    expect(second?.liked).toBe(false);
  });

  it('appends story replies', async () => {
    const kv = await import('../kv_store.ts');
    await kv.set('story:story-1', buildStoryRecord());
    await kv.set('user:author-1', { id: 'author-1', name: 'Author', username: '@author' });

    const { __testables } = await import('../index.tsx');
    const result = await __testables.addStoryReply('story-1', 'author-1', 'Great story!');
    expect(result).not.toBeNull();
    expect(result?.story.replies).toHaveLength(1);
    expect(result?.story.replies[0]).toMatchObject({
      authorId: 'author-1',
      content: 'Great story!',
    });
  });

  it('trims and limits reply content length', async () => {
    const kv = await import('../kv_store.ts');
    await kv.set('story:story-1', buildStoryRecord());
    await kv.set('user:author-1', { id: 'author-1', name: 'Author', username: '@author' });

    const { __testables } = await import('../index.tsx');
    const longContent = `${'  \n' + 'a'.repeat(1100)}   `;
    const result = await __testables.addStoryReply('story-1', 'author-1', longContent);
    expect(result).not.toBeNull();
    const storedContent = result?.story.replies[0].content ?? '';
    expect(storedContent.startsWith('a')).toBe(true);
    expect(storedContent.endsWith('a')).toBe(true);
    expect(storedContent.length).toBeLessThanOrEqual(1000);
    expect(result?.reply.content).toBe(storedContent);
  });

  it('returns null when story is missing', async () => {
    const { __testables } = await import('../index.tsx');
    const likeResult = await __testables.toggleStoryLike('unknown-story', 'user-1');
    expect(likeResult).toBeNull();

    const replyResult = await __testables.addStoryReply('unknown-story', 'author-1', 'Hi');
    expect(replyResult).toBeNull();
  });

  it('handles legacy story keys when toggling likes', async () => {
    const kv = await import('../kv_store.ts');
    await kv.set('story-story-1', buildStoryRecord());

    const { __testables } = await import('../index.tsx');
    const result = await __testables.toggleStoryLike('story-1', 'user-legacy');

    expect(result).not.toBeNull();
    expect(result?.story.likes).toContain('user-legacy');
    const setMock = kv.set as unknown as vi.Mock;
    expect(setMock.mock.calls.some(([key]) => key === 'story:story-1')).toBe(true);
  });

  it('recovers stories via prefix scan when direct lookup fails', async () => {
    const kv = await import('../kv_store.ts');
    await kv.set('legacy|story-1', buildStoryRecord());

    const { __testables } = await import('../index.tsx');
    const result = await __testables.toggleStoryLike('story-1', 'user-fallback');

    expect(result).not.toBeNull();
    expect(result?.story.likes).toContain('user-fallback');
    const getByPrefixMock = kv.getByPrefix as unknown as vi.Mock;
    expect(getByPrefixMock.mock.calls.some(([prefix]) => prefix === '')).toBe(true);
  });

  it('restores story from client snapshot when missing', async () => {
    const kv = await import('../kv_store.ts');
    const snapshot = {
      id: 'story-snapshot',
      userId: 'owner-1',
      visibility: 'friends',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 60_000).toISOString(),
      viewers: [],
      likes: [],
      items: [
        {
          id: 'item-1',
          type: 'image',
          url: 'https://example.com/photo.jpg',
          duration: 5,
          timestamp: new Date().toISOString(),
        },
      ],
      user: {
        id: 'owner-1',
        name: 'Owner',
        username: '@owner',
        avatar: 'https://example.com/avatar.jpg',
        ablyClientId: 'owner-1',
      },
      replies: [],
    };

    const { __testables } = await import('../index.tsx');
    const restored = await __testables.restoreStoryFromSnapshot(snapshot);
    expect(restored).not.toBeNull();

    const stored = await kv.get('story:story-snapshot');
    expect(stored).not.toBeNull();
  });
});
