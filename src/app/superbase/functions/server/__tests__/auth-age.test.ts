import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest';
import { getLatestEligibleBirthdate } from '../../../../../lib/ageRestriction';

vi.mock('../kv_store.ts', () => {
  const store = new Map<string, unknown>();

  return {
    get: vi.fn(async (key: string) => (store.has(key) ? store.get(key)! : null)),
    set: vi.fn(async (key: string, value: unknown) => {
      store.set(key, value);
    }),
    del: vi.fn(async (key: string) => {
      store.delete(key);
    }),
    mget: vi.fn(async () => []),
    mset: vi.fn(async () => undefined),
    getByPrefix: vi.fn(async (prefix: string) =>
      Array.from(store.entries())
        .filter(([key]) => key.startsWith(prefix))
        .map(([, value]) => value),
    ),
    __store: store,
    __reset: () => store.clear(),
  };
});

const jsonHeaders = { 'content-type': 'application/json' };

type MockedKvModule = typeof import('../kv_store.ts') & {
  __store: Map<string, unknown>;
  __reset: () => void;
};

const addOneDay = (dateOnly: string) => {
  const date = new Date(`${dateOnly}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
};

describe('auth age restrictions', () => {
  beforeEach(async () => {
    const kv = (await import('../kv_store.ts')) as MockedKvModule;
    kv.__reset();
    (kv.get as unknown as Mock).mockClear();
    (kv.set as unknown as Mock).mockClear();
    (kv.del as unknown as Mock).mockClear();
    (kv.getByPrefix as unknown as Mock).mockClear();
  });

  it('rejects registration for users younger than 16', async () => {
    const { default: app } = await import('../index.tsx');
    const underageBirthdate = addOneDay(getLatestEligibleBirthdate());

    const response = await app.request('/make-server-a14c7986/auth/register', {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify({
        name: 'Young User',
        email: 'young@example.com',
        password: 'password123',
        birthdate: underageBirthdate,
      }),
    });

    expect(response.status).toBe(403);
    const body = await response.json();
    expect(body.error).toContain('16 and older');
  });

  it('stores normalized birthdate for eligible registrations', async () => {
    const kv = (await import('../kv_store.ts')) as MockedKvModule;
    const { default: app } = await import('../index.tsx');
    const eligibleBirthdate = getLatestEligibleBirthdate();

    const response = await app.request('/make-server-a14c7986/auth/register', {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify({
        name: 'Eligible User',
        email: 'eligible@example.com',
        password: 'password123',
        birthdate: eligibleBirthdate,
      }),
    });

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.user.birthdate).toBe(eligibleBirthdate);

    const storedUsers = Array.from(kv.__store.values());
    expect(storedUsers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'eligible@example.com',
          birthdate: eligibleBirthdate,
        }),
      ]),
    );
  });

  it('rejects login when a stored birthdate is underage', async () => {
    const kv = (await import('../kv_store.ts')) as MockedKvModule;
    const { default: app } = await import('../index.tsx');
    const underageBirthdate = addOneDay(getLatestEligibleBirthdate());

    await kv.set('user:user-underage', {
      id: 'user-underage',
      name: 'Young User',
      username: '@young',
      email: 'young@example.com',
      password: 'password123',
      birthdate: underageBirthdate,
    });

    const response = await app.request('/make-server-a14c7986/auth/login', {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify({
        email: 'young@example.com',
        password: 'password123',
      }),
    });

    expect(response.status).toBe(403);
    const body = await response.json();
    expect(body.error).toContain('16 and older');
  });
});
