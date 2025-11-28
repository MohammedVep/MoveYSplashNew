import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Settings, type SettingsProps } from '../Settings';
import type { UserData } from '../../utils/userContext';
import { defaultSettings } from '../../utils/userContext';

const setThemeMock = vi.hoisted(() => vi.fn());
const updateUserMock = vi.hoisted(() => vi.fn<[], Promise<boolean>>());
const updateSettingsMock = vi.hoisted(() => vi.fn<[Record<string, unknown>], Promise<void>>());
const changePasswordMock = vi.hoisted(
  () =>
    vi.fn<(oldPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>>()
);
const toastSuccessMock = vi.hoisted(() => vi.fn());
const toastErrorMock = vi.hoisted(() => vi.fn());

let mockCurrentUser: UserData | null = null;

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: setThemeMock
  })
}));

vi.mock('../../utils/notifications', () => ({
  notificationManager: { showSimple: vi.fn() },
  requestNotificationPermission: vi.fn(),
  isNotificationSupported: vi.fn(() => false),
  getNotificationPermission: vi.fn(() => 'default')
}));

vi.mock('sonner', () => ({
  toast: {
    success: toastSuccessMock,
    error: toastErrorMock
  }
}));

vi.mock('../../utils/userContext', async () => {
  const actual = await vi.importActual<typeof import('../../utils/userContext')>(
    '../../utils/userContext'
  );

  return {
    ...actual,
    useUser: () => ({
      currentUser: mockCurrentUser,
      updateUser: updateUserMock,
      updateSettings: updateSettingsMock,
      changePassword: changePasswordMock
    })
  };
});

function buildUser(overrides: Partial<UserData> = {}): UserData {
  return {
    id: 'user-123',
    ablyClientId: 'client-123',
    name: 'Alex Example',
    username: '@alex',
    email: 'alex@example.com',
    avatar: 'https://example.com/avatar.svg',
    bio: 'Tech enthusiast',
    location: 'New York',
    website: 'https://example.com',
    joinedAt: new Date('2024-01-01T12:00:00'),
    friendIds: [],
    blockedIds: [],
    savedPostIds: [],
    posts: [],
    achievements: [],
    settings: {
      ...defaultSettings,
      theme: 'dynamic',
      autoPlayVideos: true,
      pushNotifications: true
    },
    ...overrides
  };
}

function renderWithUser(
  overrides: Partial<UserData> = {},
  props: Partial<SettingsProps> = {}
) {
  mockCurrentUser = buildUser(overrides);
  return render(<Settings {...props} />);
}

describe('Settings component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-06-01T12:00:00'));
    mockCurrentUser = buildUser();
    setThemeMock.mockClear();
    updateUserMock.mockReset().mockResolvedValue(true);
    updateSettingsMock.mockReset().mockResolvedValue();
    changePasswordMock.mockReset().mockResolvedValue({ success: true });
    toastSuccessMock.mockReset();
    toastErrorMock.mockReset();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('applies theme preference from Supabase settings on mount', async () => {
    renderWithUser({
      settings: {
        ...defaultSettings,
        theme: 'dynamic'
      }
    });

    expect(setThemeMock).toHaveBeenCalledWith('light');

    expect(screen.getByDisplayValue('Alex Example')).toBeInTheDocument();
    expect(screen.getByDisplayValue('alex@example.com')).toBeInTheDocument();
  });

  it('persists toggle changes through updateSettings', async () => {
    renderWithUser({}, { initialTab: 'appearance' });

    updateSettingsMock.mockClear();

    const autoPlaySwitch = screen.getByTestId('toggle-auto-play');
    fireEvent.click(autoPlaySwitch);

    expect(updateSettingsMock).toHaveBeenCalledWith({ autoPlayVideos: false });
  });

  it('saves account changes via updateUser and syncs phone number to Supabase', async () => {
    renderWithUser();

    updateUserMock.mockClear();
    updateSettingsMock.mockClear();

    const phoneInput = screen.getByLabelText(/phone number/i) as HTMLInputElement;
    fireEvent.change(phoneInput, { target: { value: '+1 (222) 333-4444' } });

    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Alex Updated' } });

    const saveButton = screen.getByRole('button', { name: /save changes/i });
    await act(async () => {
      fireEvent.click(saveButton);
      await Promise.resolve();
    });

    expect(updateUserMock).toHaveBeenCalledWith({
      name: 'Alex Updated',
      email: 'alex@example.com',
      location: 'New York',
      bio: 'Tech enthusiast'
    });

    expect(updateSettingsMock).toHaveBeenCalledWith({
      phoneNumber: '+1 (222) 333-4444'
    });
  });

  it('validates password confirmation before attempting a change', () => {
    renderWithUser();

    const changePasswordButton = screen.getByRole('button', { name: /change password/i });
    fireEvent.click(changePasswordButton);

    fireEvent.change(screen.getByLabelText(/current password/i), {
      target: { value: 'OldPassword1!' }
    });
    fireEvent.change(screen.getByLabelText(/^new password$/i), {
      target: { value: 'NewPassword1!' }
    });
    fireEvent.change(screen.getByLabelText(/confirm new password/i), {
      target: { value: 'DifferentPassword1!' }
    });

    const updateButton = screen.getByRole('button', { name: /update password/i });
    fireEvent.click(updateButton);

    expect(changePasswordMock).not.toHaveBeenCalled();
    expect(toastErrorMock).toHaveBeenCalledWith('New password and confirmation do not match');
  });

  it('submits password change when form is valid', async () => {
    renderWithUser();

    const changePasswordButton = screen.getByRole('button', { name: /change password/i });
    fireEvent.click(changePasswordButton);

    fireEvent.change(screen.getByLabelText(/current password/i), {
      target: { value: 'OldPassword1!' }
    });
    fireEvent.change(screen.getByLabelText(/^new password$/i), {
      target: { value: 'BrandNewPass123' }
    });
    fireEvent.change(screen.getByLabelText(/confirm new password/i), {
      target: { value: 'BrandNewPass123' }
    });

    const updateButton = screen.getByRole('button', { name: /update password/i });
    await act(async () => {
      fireEvent.click(updateButton);
      await Promise.resolve();
    });

    expect(changePasswordMock).toHaveBeenCalledWith('OldPassword1!', 'BrandNewPass123');
    expect(toastSuccessMock).toHaveBeenCalledWith('Password updated successfully');
  });
});
