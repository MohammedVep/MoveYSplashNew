import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Profile } from '../Profile';
import type { Achievement, UserData, UserPost, UserSettings, UserContextType } from '../../utils/userContext';

const toast = vi.hoisted(() => ({
  success: vi.fn(),
  error: vi.fn(),
}));

vi.mock('sonner', () => ({
  toast,
}));

const mockUseUser = vi.hoisted(() => vi.fn());

vi.mock('../../utils/userContext', () => ({
  useUser: () => mockUseUser(),
}));

const createSettings = (): UserSettings => ({
  profileVisibility: 'public',
  whoCanMessage: 'everyone',
  whoCanCall: 'friends',
  showOnlineStatus: true,
  showReadReceipts: true,
  allowTagging: true,
  pushNotifications: true,
  emailNotifications: true,
  smsNotifications: false,
  notifyLikes: true,
  notifyComments: true,
  notifyMessages: true,
  notifyFriendRequests: true,
  notifyStories: false,
  soundEnabled: true,
  soundVolume: 75,
  theme: 'dark',
  language: 'en',
  fontSize: 'medium',
  autoPlayVideos: true,
  reduceAnimations: false,
  phoneNumber: '',
});

const createPost = (overrides: Partial<UserPost> = {}): UserPost => ({
  id: 'post-1',
  userId: 'user-1',
  text: 'Hello world',
  media: [],
  likes: 3,
  comments: 1,
  shares: 0,
  timestamp: new Date(Date.now() - 5 * 60 * 1000),
  liked: false,
  likedBy: [],
  ...overrides,
});

const createAchievements = (): Achievement[] => [
  {
    id: 'ach-1',
    name: 'Trailblazer',
    description: 'Completed your profile',
    earnedAt: new Date('2024-01-02T00:00:00Z'),
    icon: 'Award',
    color: 'from-purple-500 to-pink-500',
  },
];

const createUser = (overrides: Partial<UserData> = {}): UserData => ({
  id: 'user-1',
  name: 'Jane Doe',
  username: '@janedoe',
  email: 'jane@example.com',
  avatar: 'https://example.com/avatar.png',
  ablyClientId: 'user-1',
  bio: 'Bio text',
  location: 'New York',
  website: 'janedoe.com',
  joinedAt: new Date('2024-01-01T00:00:00Z'),
  friendIds: [],
  blockedIds: [],
  savedPostIds: [],
  posts: [createPost()],
  achievements: createAchievements(),
  settings: createSettings(),
  ...overrides,
});

const renderWithUser = (ctxOverrides: Partial<UserContextType> = {}) => {
  const updateUser = vi.fn().mockResolvedValue(true);
  const addPost = vi.fn().mockResolvedValue(undefined);
  const deletePost = vi.fn().mockResolvedValue(undefined);
  const likePost = vi.fn().mockResolvedValue(undefined);
  const sharePost = vi.fn().mockResolvedValue(1);
  const fetchComments = vi.fn().mockResolvedValue([]);
  const addComment = vi.fn().mockResolvedValue(null);
  const toggleSavePost = vi.fn().mockResolvedValue(true);
  const blockUser = vi.fn().mockResolvedValue(true);
  const unblockUser = vi.fn().mockResolvedValue(true);
  const refreshAllUsers = vi.fn().mockResolvedValue(undefined);
  const loadUserData = vi.fn().mockResolvedValue(true);
  const loadProfileUser = vi.fn().mockResolvedValue(true);
  const getUserStats = vi.fn(() => ({
    totalPosts: 5,
    totalFriends: 10,
    totalLikes: 1200,
    rank: 7,
  }));
  const getAchievements = vi.fn(() => createAchievements());

  const user = createUser();

  const baseContext: UserContextType = {
    currentUser: user,
    profileUser: user,
    profileUserId: user.id,
    allUsers: new Map<string, UserData>([[user.id, user]]),
    updateUser,
    updateSettings: vi.fn(),
    changePassword: vi.fn().mockResolvedValue({ success: true }),
    addPost,
    deletePost,
    likePost,
    sharePost,
    fetchComments,
    addComment,
    toggleSavePost,
    blockUser,
    unblockUser,
    refreshAllUsers,
    addFriend: vi.fn(),
    removeFriend: vi.fn(),
    getUserStats,
    getAchievements,
    login: vi.fn(),
    signup: vi.fn(),
    logout: vi.fn(),
    loadUserData,
    loadProfileUser,
  };

  const contextValue: UserContextType = {
    ...baseContext,
    ...(ctxOverrides as Partial<UserContextType>),
  };

  if (!('profileUser' in ctxOverrides)) {
    contextValue.profileUser = contextValue.currentUser;
  }
  if (!('profileUserId' in ctxOverrides)) {
    contextValue.profileUserId = contextValue.profileUser?.id ?? null;
  }
  if (!contextValue.allUsers.has(contextValue.profileUser?.id ?? '')) {
    const mappedUser = contextValue.profileUser;
    if (mappedUser) {
      contextValue.allUsers.set(mappedUser.id, mappedUser);
    }
  }

  mockUseUser.mockReturnValue(contextValue);
  return {
    renderResult: render(<Profile />),
    updateUser,
    addPost,
    deletePost,
    likePost,
    loadUserData,
    loadProfileUser,
    getUserStats,
    getAchievements,
    contextValue,
  };
};

beforeEach(() => {
  mockUseUser.mockReset();
  toast.success.mockReset();
  toast.error.mockReset();
});

describe('Profile component', () => {
  it('renders a login prompt when no user is available', () => {
    mockUseUser.mockReturnValue({
      currentUser: null,
      profileUser: null,
      profileUserId: null,
      allUsers: new Map<string, UserData>(),
      updateUser: vi.fn(),
      updateSettings: vi.fn(),
      changePassword: vi.fn().mockResolvedValue({ success: false, error: 'missing user' }),
      addPost: vi.fn(),
      deletePost: vi.fn(),
      likePost: vi.fn(),
      sharePost: vi.fn(),
      fetchComments: vi.fn(),
      addComment: vi.fn(),
      toggleSavePost: vi.fn(),
      blockUser: vi.fn(),
      unblockUser: vi.fn(),
      refreshAllUsers: vi.fn(),
      addFriend: vi.fn(),
      removeFriend: vi.fn(),
      getUserStats: vi.fn(() => ({
        totalPosts: 0,
        totalFriends: 0,
        totalLikes: 0,
        rank: 0,
      })),
      getAchievements: vi.fn(() => []),
      login: vi.fn(),
      signup: vi.fn(),
      logout: vi.fn(),
      loadUserData: vi.fn(),
      loadProfileUser: vi.fn(),
    });

    render(<Profile />);

    expect(screen.getByText(/Please log in to view your profile/i)).toBeInTheDocument();
  });

  it('allows editing and saving profile details successfully', async () => {
    const { updateUser, loadUserData, loadProfileUser } = renderWithUser();
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /edit profile/i }));

    const nameInput = screen.getByDisplayValue('Jane Doe');
    const bioInput = screen.getByDisplayValue('Bio text');
    const locationInput = screen.getByDisplayValue('New York');
    const websiteInput = screen.getByDisplayValue('janedoe.com');

    await user.clear(nameInput);
    await user.type(nameInput, 'Janet Tester');
    await user.clear(bioInput);
    await user.type(bioInput, 'Testing bio updates');
    await user.clear(locationInput);
    await user.type(locationInput, 'San Francisco');
    await user.clear(websiteInput);
    await user.type(websiteInput, 'janet.dev');

    await user.click(screen.getByRole('button', { name: /^Save$/i }));

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledWith({
        name: 'Janet Tester',
        bio: 'Testing bio updates',
        location: 'San Francisco',
        website: 'janet.dev',
      });
    });

    expect(loadUserData).toHaveBeenCalledWith('user-1');
    expect(loadProfileUser).toHaveBeenCalledWith('user-1');
    expect(toast.success).toHaveBeenCalledWith('Profile updated! ✨');

    await waitFor(() => {
      expect(screen.queryByDisplayValue('Testing bio updates')).not.toBeInTheDocument();
    });

    expect(screen.getByText('1.2K')).toBeInTheDocument();
  });

  it('shows an error toast when profile save fails and keeps edit mode open', async () => {
    const updateUser = vi.fn().mockResolvedValue(false);
    const loadUserData = vi.fn();
    const loadProfileUser = vi.fn();
    const contextUser = createUser();

    renderWithUser({
      currentUser: contextUser,
      updateUser,
      loadUserData,
      loadProfileUser,
    });

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /edit profile/i }));
    await user.click(screen.getByRole('button', { name: /^Save$/i }));

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalled();
    });

    expect(loadUserData).not.toHaveBeenCalled();
    expect(loadProfileUser).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith('Unable to update profile right now. Please try again.');
    expect(screen.getByRole('button', { name: /^Cancel$/i })).toBeInTheDocument();
  });

  it('creates a new post and clears the composer', async () => {
    const { addPost } = renderWithUser();
    const user = userEvent.setup();

    const composer = screen.getByPlaceholderText("What's on your mind?");
    await user.type(composer, 'Hello from tests');

    const postButton = screen.getByRole('button', { name: /^Post$/i });
    expect(postButton).toBeEnabled();

    await user.click(postButton);

    await waitFor(() => {
      expect(addPost).toHaveBeenCalledWith({
        text: 'Hello from tests',
        media: undefined,
      });
    });

    expect(toast.success).toHaveBeenCalledWith('Post created! 🎉');
    await waitFor(() => {
      expect(composer).toHaveValue('');
      expect(postButton).toBeDisabled();
    });
  });

  it('invokes likePost with the correct identifiers', async () => {
    const likePost = vi.fn().mockResolvedValue(undefined);
    const userData = createUser({
      posts: [
        createPost({
          id: 'post-123',
          likes: 4,
          likedBy: [],
        }),
      ],
    });

    renderWithUser({
      currentUser: userData,
      likePost,
    });

    const user = userEvent.setup();
    const likeButton = screen.getByRole('button', { name: /Like post/i });
    await user.click(likeButton);

    expect(likePost).toHaveBeenCalledWith('post-123', 'user-1');
  });
});
