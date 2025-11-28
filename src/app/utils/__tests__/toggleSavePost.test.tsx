import React, { type ReactNode } from 'react';
import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { UserProvider, useUser } from '../userContext';
import { projectId } from '../supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-a14c7986`;

const resolveResponse = (body: unknown, status = 200) =>
  Promise.resolve(
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    }),
  );

describe('toggleSavePost', () => {
  const originalFetch = global.fetch;
  let fetchMock: ReturnType<typeof vi.fn>;

  const Wrapper = ({ children }: { children: ReactNode }) => <UserProvider>{children}</UserProvider>;
  const renderUserHook = () => renderHook(() => useUser(), { wrapper: Wrapper });

  beforeEach(() => {
    fetchMock = vi.fn();
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  const serverUser = (overrides: Partial<Record<string, unknown>> = {}) => ({
    id: 'user-1',
    ablyClientId: 'user-1',
    name: 'Test User',
    username: '@testuser',
    email: 'test@example.com',
    avatar: 'https://example.com/avatar.png',
    joinedAt: new Date('2024-01-01T00:00:00Z').toISOString(),
    friendIds: [],
    blockedIds: [],
    savedPostIds: [],
    ...overrides,
  });

  const queueInitialLoadResponses = (userOverrides?: Partial<Record<string, unknown>>) => {
    fetchMock
      .mockImplementationOnce(() => resolveResponse({ users: [] }))
      .mockImplementationOnce(() => resolveResponse({ users: [] }))
      .mockImplementationOnce(() => resolveResponse({ user: serverUser(userOverrides) }))
      .mockImplementationOnce(() => resolveResponse({ settings: {} }))
      .mockImplementationOnce(() => resolveResponse({ posts: [] }));
  };

  it('saves a post when the primary endpoint succeeds', async () => {
    queueInitialLoadResponses();
    fetchMock.mockImplementationOnce(() => resolveResponse({ success: true, savedPostIds: ['owner-1:post-1'] }));

    const { result } = renderUserHook();

    await act(async () => {
      const loaded = await result.current.loadUserData('user-1');
      expect(loaded).toBe(true);
    });

    await act(async () => {
      const saved = await result.current.toggleSavePost('owner-1', 'post-1');
      expect(saved).toBe(true);
    });

    expect(result.current.currentUser?.savedPostIds).toEqual(['owner-1:post-1']);
    expect(fetchMock).toHaveBeenNthCalledWith(
      6,
      `${API_BASE_URL}/posts/owner-1/post-1/bookmark`,
      expect.objectContaining({ method: 'PUT' }),
    );
  });

  it('falls back to the legacy endpoint when the primary endpoint fails with 404', async () => {
    queueInitialLoadResponses();
    fetchMock
      .mockImplementationOnce(() => resolveResponse({ error: 'Post not found' }, 404))
      .mockImplementationOnce(() => resolveResponse({ success: true, savedPostIds: ['owner-1:post-1'] }));

    const { result } = renderUserHook();

    await act(async () => {
      await result.current.loadUserData('user-1');
    });

    await act(async () => {
      const saved = await result.current.toggleSavePost('owner-1', 'post-1');
      expect(saved).toBe(true);
    });

    expect(result.current.currentUser?.savedPostIds).toEqual(['owner-1:post-1']);
    expect(fetchMock).toHaveBeenNthCalledWith(
      6,
      `${API_BASE_URL}/posts/owner-1/post-1/bookmark`,
      expect.objectContaining({ method: 'PUT' }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      7,
      `${API_BASE_URL}/bookmarks`,
      expect.objectContaining({ method: 'PUT' }),
    );
  });


  it('persists via user update when both endpoints return 404', async () => {
    queueInitialLoadResponses();
    fetchMock
      .mockImplementationOnce(() => resolveResponse({ error: 'Primary missing' }, 404))
      .mockImplementationOnce(() => resolveResponse({ error: 'Legacy missing' }, 404))
      .mockImplementationOnce(() =>
        resolveResponse({
          success: true,
          user: serverUser({ savedPostIds: ['owner-1:post-1'] }),
        }),
      );

    const { result } = renderUserHook();

    await act(async () => {
      await result.current.loadUserData('user-1');
    });

    await act(async () => {
      const saved = await result.current.toggleSavePost('owner-1', 'post-1');
      expect(saved).toBe(true);
    });

    expect(result.current.currentUser?.savedPostIds).toEqual(['owner-1:post-1']);
    expect(fetchMock).toHaveBeenNthCalledWith(
      6,
      `${API_BASE_URL}/posts/owner-1/post-1/bookmark`,
      expect.objectContaining({ method: 'PUT' }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      7,
      `${API_BASE_URL}/bookmarks`,
      expect.objectContaining({ method: 'PUT' }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      8,
      `${API_BASE_URL}/users/user-1`,
      expect.objectContaining({ method: 'PUT' }),
    );
  });

  it('rolls back optimistic updates if both endpoints fail', async () => {
    queueInitialLoadResponses({ savedPostIds: ['owner-1:post-1'] });
    fetchMock
      .mockImplementationOnce(() => resolveResponse({ error: 'Primary failure' }, 500))
      .mockImplementationOnce(() => resolveResponse({ error: 'Fallback failure' }, 500));

    const { result } = renderUserHook();

    await act(async () => {
      await result.current.loadUserData('user-1');
    });

    let caught: unknown;
    await act(async () => {
      try {
        await result.current.toggleSavePost('owner-1', 'post-1');
      } catch (error) {
        caught = error;
      }
    });

    expect(caught).toBeInstanceOf(Error);
    expect(result.current.currentUser?.savedPostIds).toEqual(['owner-1:post-1']);
  });
});
