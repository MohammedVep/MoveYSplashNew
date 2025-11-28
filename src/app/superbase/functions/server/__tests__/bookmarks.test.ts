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

  return {
    get,
    set,
    del,
    mget: vi.fn(async () => []),
    mset: vi.fn(async () => undefined),
    getByPrefix: vi.fn(async () => []),
    __store: store,
    __reset: () => store.clear(),
  };
});

describe('toggleBookmarkForUser', () => {
  beforeEach(async () => {
    const kv = await import('../kv_store.ts');
    (kv.__reset as () => void)();
    (kv.get as unknown as ReturnType<typeof vi.fn>).mockClear();
    (kv.set as unknown as ReturnType<typeof vi.fn>).mockClear();
  });

  it('creates a minimal record when the user does not exist', async () => {
    const kv = await import('../kv_store.ts');
    const { __testables } = await import('../index.tsx');
    const result = await __testables.toggleBookmarkForUser('missing', 'owner', 'post');
    expect(result).not.toBeNull();
    expect(result?.savedPostIds).toEqual(['owner:post']);
    expect(result?.saved).toBe(true);

    const stored = await kv.get('user:missing');
    expect(stored).toMatchObject({ id: 'missing', savedPostIds: ['owner:post'] });
  });

  it('adds a bookmark when none exists', async () => {
    const kv = await import('../kv_store.ts');
    await kv.set('user:user-1', { id: 'user-1', savedPostIds: [] });

    const { __testables } = await import('../index.tsx');
    const result = await __testables.toggleBookmarkForUser('user-1', 'owner-1', 'post-1');

    expect(result).not.toBeNull();
    expect(result?.savedPostIds).toEqual(['owner-1:post-1']);
    expect(result?.saved).toBe(true);

    const storedUser = await kv.get('user:user-1');
    expect(storedUser).toBeDefined();
    expect((storedUser as { savedPostIds: string[] }).savedPostIds).toEqual(['owner-1:post-1']);
  });

  it('removes a bookmark when one already exists', async () => {
    const kv = await import('../kv_store.ts');
    await kv.set('user:user-1', { id: 'user-1', savedPostIds: ['owner-1:post-1'] });

    const { __testables } = await import('../index.tsx');
    const result = await __testables.toggleBookmarkForUser('user-1', 'owner-1', 'post-1');

    expect(result).not.toBeNull();
    expect(result?.savedPostIds).toEqual([]);
    expect(result?.saved).toBe(false);
  });
});
