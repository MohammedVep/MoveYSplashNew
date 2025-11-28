'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { projectId, publicAnonKey } from './supabase/info';
import { normalizeThemePreference, resolveThemePreference } from '../components/settings-theme';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-a14c7986`;

export interface UserPost {
  id: string;
  userId: string;
  text?: string;
  media?: Array<{type: 'image' | 'video', url: string}>;
  likes: number;
  comments: number;
  shares: number;
  timestamp: Date;
  liked?: boolean;
  likedBy: string[];
}

export interface PostComment {
  id: string;
  postId: string;
  postOwnerId: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  earnedAt: Date;
  icon: string;
  color: string;
}

export interface UserSettings {
  // Privacy
  profileVisibility: string;
  whoCanMessage: string;
  whoCanCall: string;
  showOnlineStatus: boolean;
  showReadReceipts: boolean;
  allowTagging: boolean;
  
  // Notifications
  pushNotifications: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  notifyLikes: boolean;
  notifyComments: boolean;
  notifyMessages: boolean;
  notifyFriendRequests: boolean;
  notifyStories: boolean;
  soundEnabled: boolean;
  soundVolume: number;
  
  // Appearance
  theme: string;
  language: string;
  fontSize: string;
  autoPlayVideos: boolean;
  reduceAnimations: boolean;
  
  // Account
  phoneNumber: string;
}

export interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  ablyClientId: string;
  bio: string;
  location: string;
  website: string;
  joinedAt: Date;
  friendIds: string[];
  blockedIds: string[];
  savedPostIds: string[];
  posts: UserPost[];
  achievements: Achievement[];
  settings: UserSettings;
}

export interface UserContextType {
  currentUser: UserData | null;
  profileUser: UserData | null;
  profileUserId: string | null;
  allUsers: Map<string, UserData>;
  updateUser: (userData: Partial<UserData>) => Promise<boolean>;
  updatePost: (postId: string, text: string) => Promise<void>;
  updateSettings: (settings: Partial<UserSettings>) => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  addPost: (post: Omit<UserPost, 'id' | 'userId' | 'timestamp' | 'likes' | 'comments' | 'shares' | 'likedBy'>) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  likePost: (postId: string, userId: string) => Promise<void>;
  sharePost: (
    postOwnerId: string,
    postId: string,
    options: {
      platform: string;
      sharerUserId?: string;
      message?: string;
    }
  ) => Promise<number | null>;
  toggleSavePost: (postOwnerId: string, postId: string) => Promise<boolean>;
  fetchComments: (postOwnerId: string, postId: string) => Promise<PostComment[]>;
  addComment: (
    postOwnerId: string,
    postId: string,
    content: string
  ) => Promise<{ comment: PostComment; totalComments: number } | null>;
  addFriend: (friendId: string) => Promise<boolean>;
  removeFriend: (friendId: string) => Promise<boolean>;
  blockUser: (userId: string) => Promise<boolean>;
  unblockUser: (userId: string) => Promise<boolean>;
  refreshAllUsers: () => Promise<void>;
  getUserStats: () => {
    totalPosts: number;
    totalFriends: number;
    totalLikes: number;
    rank: number;
  };
  getAchievements: () => Achievement[];
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string, birthdate: string) => Promise<boolean>;
  logout: () => void;
  loadUserData: (userId: string) => Promise<boolean>;
  loadProfileUser: (userId: string | null) => Promise<boolean>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Default settings
export const defaultSettings: UserSettings = {
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
  phoneNumber: ''
};

const FONT_SIZE_SCALE: Record<'small' | 'medium' | 'large', string> = {
  small: '14px',
  medium: '16px',
  large: '18px'
};

export const resolveFontSizePreference = (value?: string): 'small' | 'medium' | 'large' => {
  if (value === 'small') {
    return 'small';
  }
  if (value === 'medium') {
    return 'medium';
  }
  return 'large';
};

const sanitizeSettings = (settings: Partial<UserSettings>): Partial<UserSettings> => {
  const sanitized: Partial<UserSettings> = { ...settings };

  if (sanitized.theme) {
    sanitized.theme = normalizeThemePreference(sanitized.theme);
  }

  if (sanitized.fontSize) {
    sanitized.fontSize = resolveFontSizePreference(sanitized.fontSize);
  }

  if (sanitized.language) {
    sanitized.language = 'en';
  }

  return sanitized;
};

const mergeWithDefaultSettings = (settings?: Partial<UserSettings>): UserSettings => ({
  ...defaultSettings,
  ...sanitizeSettings(settings ?? {})
});

interface ServerUser {
  id: string;
  ablyClientId?: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bio?: string;
  location?: string;
  website?: string;
  joinedAt?: string;
  friendIds?: string[];
  blockedIds?: string[];
  savedPostIds?: string[];
}

const normalizeServerUser = (user: ServerUser): UserData => {
  const joinedAt = user.joinedAt ? new Date(user.joinedAt) : new Date();

  return {
    id: user.id,
    ablyClientId: user.ablyClientId ?? user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
    bio: user.bio ?? '',
    location: user.location ?? '',
    website: user.website ?? '',
    joinedAt,
    friendIds: Array.isArray(user.friendIds) ? user.friendIds : [],
    blockedIds: Array.isArray(user.blockedIds) ? user.blockedIds : [],
    savedPostIds: Array.isArray(user.savedPostIds)
      ? user.savedPostIds.filter((value): value is string => typeof value === 'string')
      : [],
    posts: [],
    achievements: [],
    settings: mergeWithDefaultSettings()
  };
};

const mergeServerUser = (server: ServerUser, fallback?: UserData | null): UserData => {
  const normalized = normalizeServerUser(server);
  return {
    ...normalized,
    posts: fallback?.posts ?? normalized.posts,
    achievements: fallback?.achievements ?? normalized.achievements,
    settings: fallback?.settings ?? normalized.settings,
  };
};

const normalizeComment = (value: unknown, fallbackPostOwnerId: string): PostComment | null => {
  if (typeof value !== 'object' || value === null) {
    return null;
  }

  const record = value as Record<string, unknown>;
  const idValue = record['id'];
  const postIdValue = record['postId'];
  const postOwnerValue = record['postOwnerId'] ?? record['postOwner'] ?? fallbackPostOwnerId;
  const authorIdValue = record['authorId'];

  if (
    typeof idValue !== 'string' ||
    idValue.trim().length === 0 ||
    typeof postIdValue !== 'string' ||
    postIdValue.trim().length === 0 ||
    typeof postOwnerValue !== 'string' ||
    postOwnerValue.trim().length === 0 ||
    typeof authorIdValue !== 'string' ||
    authorIdValue.trim().length === 0
  ) {
    return null;
  }

  const createdAtRaw = record['createdAt'];
  const createdAt =
    typeof createdAtRaw === 'string' && createdAtRaw
      ? new Date(createdAtRaw)
      : new Date();

  return {
    id: idValue,
    postId: postIdValue,
    postOwnerId: postOwnerValue,
    authorId: authorIdValue,
    authorName:
      typeof record['authorName'] === 'string' && record['authorName']
        ? record['authorName']
        : 'Unknown user',
    authorAvatar:
      typeof record['authorAvatar'] === 'string' ? record['authorAvatar'] ?? '' : '',
    content: typeof record['content'] === 'string' ? record['content'] : '',
    createdAt,
  };
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [allUsers, setAllUsers] = useState<Map<string, UserData>>(new Map());
  const [profileUserId, setProfileUserId] = useState<string | null>(null);
  const [profileUser, setProfileUser] = useState<UserData | null>(null);
  const { setTheme } = useTheme();

  // Load user directory from Supabase so all profile data reflects persisted state
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        });

        if (!response.ok) {
          console.error('Failed to load users from Supabase');
          return;
        }

        const { users: serverUsers } = await response.json() as { users: ServerUser[] };

        setAllUsers(prev => {
          const updated = new Map(prev);

          serverUsers.forEach(serverUser => {
            const normalized = normalizeServerUser(serverUser);
            const existing = prev.get(serverUser.id) ?? (normalized.ablyClientId ? prev.get(normalized.ablyClientId) : undefined);
            const mergedUser = existing
              ? {
                  ...normalized,
                  posts: existing.posts,
                  achievements: existing.achievements,
                  settings: mergeWithDefaultSettings(existing.settings)
                }
              : normalized;

            updated.set(mergedUser.id, mergedUser);
            if (mergedUser.ablyClientId && mergedUser.ablyClientId !== mergedUser.id) {
              updated.set(mergedUser.ablyClientId, mergedUser);
            }
          });

          return updated;
        });
      } catch (error) {
        console.error('Error loading users from Supabase:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const preference = normalizeThemePreference(currentUser?.settings?.theme ?? defaultSettings.theme);
    const applyTheme = () => {
      setTheme(resolveThemePreference(preference));
    };

    applyTheme();

    if (preference === 'dynamic') {
      const interval = setInterval(applyTheme, 10 * 60 * 1000);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [currentUser?.settings?.theme, setTheme]);

  useEffect(() => {
    const resolvedPreference = resolveFontSizePreference(currentUser?.settings?.fontSize ?? defaultSettings.fontSize);
    const root = typeof document !== 'undefined' ? document.documentElement : null;

    if (root) {
      root.style.setProperty('--font-size', FONT_SIZE_SCALE[resolvedPreference]);
    }
  }, [currentUser?.settings?.fontSize]);

  useEffect(() => {
    if (!currentUser) {
      setProfileUserId(null);
      setProfileUser(null);
      return;
    }

    if (!profileUserId || profileUserId === currentUser.id) {
      setProfileUserId(currentUser.id);
      setProfileUser(currentUser);
    }
  }, [currentUser, profileUserId]);

  // Calculate achievements based on merit
  const calculateAchievements = useCallback((user: UserData): Achievement[] => {
    const achievements: Achievement[] = [];
    const now = new Date();
    const accountAge = now.getTime() - user.joinedAt.getTime();
    const daysOld = accountAge / (1000 * 60 * 60 * 24);

    // Early Adopter - joined within first 3 months
    const firstUsers = Array.from(allUsers.values()).sort((a, b) => 
      a.joinedAt.getTime() - b.joinedAt.getTime()
    ).slice(0, 100);
    if (firstUsers.some(u => u.id === user.id)) {
      achievements.push({
        id: 'early-adopter',
        name: 'Early Adopter',
        description: 'One of the first 100 users on MoveSplash',
        earnedAt: user.joinedAt,
        icon: 'Award',
        color: 'from-purple-500 to-pink-500'
      });
    }

    // Top Contributor - 50+ posts
    if (user.posts.length >= 50) {
      achievements.push({
        id: 'top-contributor',
        name: 'Top Contributor',
        description: 'Created over 50 posts',
        earnedAt: user.posts[49]?.timestamp || now,
        icon: 'TrendingUp',
        color: 'from-orange-500 to-yellow-500'
      });
    }

    // Story Master - 30+ posts with media
    const postsWithMedia = user.posts.filter(p => p.media && p.media.length > 0);
    if (postsWithMedia.length >= 30) {
      achievements.push({
        id: 'story-master',
        name: 'Story Master',
        description: 'Shared 30+ posts with photos or videos',
        earnedAt: postsWithMedia[29]?.timestamp || now,
        icon: 'Camera',
        color: 'from-blue-500 to-cyan-500'
      });
    }

    // Super Friend - 100+ friends
    if (user.friendIds.length >= 100) {
      achievements.push({
        id: 'super-friend',
        name: 'Super Friend',
        description: 'Connected with over 100 friends',
        earnedAt: now,
        icon: 'Users',
        color: 'from-green-500 to-emerald-500'
      });
    }

    // Rising Star - 1000+ total likes
    const totalLikes = user.posts.reduce((sum, post) => sum + post.likes, 0);
    if (totalLikes >= 1000) {
      achievements.push({
        id: 'rising-star',
        name: 'Rising Star',
        description: 'Received over 1000 likes',
        earnedAt: now,
        icon: 'Star',
        color: 'from-yellow-500 to-orange-500'
      });
    }

    // Conversation Starter - 500+ total comments
    const totalComments = user.posts.reduce((sum, post) => sum + post.comments, 0);
    if (totalComments >= 500) {
      achievements.push({
        id: 'conversation-starter',
        name: 'Conversation Starter',
        description: 'Generated over 500 comments',
        earnedAt: now,
        icon: 'MessageCircle',
        color: 'from-cyan-500 to-blue-500'
      });
    }

    // Viral Creator - any post with 500+ likes
    if (user.posts.some(p => p.likes >= 500)) {
      achievements.push({
        id: 'viral-creator',
        name: 'Viral Creator',
        description: 'Created a post with 500+ likes',
        earnedAt: user.posts.find(p => p.likes >= 500)?.timestamp || now,
        icon: 'Zap',
        color: 'from-pink-500 to-purple-500'
      });
    }

    // Consistent Creator - posted for 30+ days
    if (daysOld >= 30 && user.posts.length >= 30) {
      achievements.push({
        id: 'consistent-creator',
        name: 'Consistent Creator',
        description: 'Posted consistently for 30+ days',
        earnedAt: now,
        icon: 'Calendar',
        color: 'from-indigo-500 to-purple-500'
      });
    }

    return achievements;
  }, [allUsers]);

  // Update achievements for current user
  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const achievements = calculateAchievements(currentUser);
    const existing = currentUser.achievements;
    const isSame =
      existing.length === achievements.length &&
      existing.every((achievement, index) => achievement.id === achievements[index]?.id);

    if (isSame) {
      return;
    }

    setCurrentUser(prev => (prev ? { ...prev, achievements } : null));
    setAllUsers(prev => {
      const newMap = new Map(prev);
      const entry = newMap.get(currentUser.id);
      if (entry) {
        const updatedEntry = { ...entry, achievements };
        newMap.set(currentUser.id, updatedEntry);
        if (entry.ablyClientId && entry.ablyClientId !== entry.id) {
          newMap.set(entry.ablyClientId, updatedEntry);
        }
      }
      return newMap;
    });
  }, [currentUser, calculateAchievements]);

  const updateUser = async (userData: Partial<UserData>) => {
    if (!currentUser) {
      return false;
    }

    const previousUser = currentUser;
    const updated = { ...currentUser, ...userData };

    setCurrentUser(updated);
    setAllUsers(prev => {
      const newMap = new Map(prev);
      newMap.set(updated.id, updated);
      if (updated.ablyClientId && updated.ablyClientId !== updated.id) {
        newMap.set(updated.ablyClientId, updated);
      }
      return newMap;
    });

    try {
      const response = await fetch(`${API_BASE_URL}/users/${updated.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          name: updated.name,
          username: updated.username,
          email: updated.email,
          avatar: updated.avatar,
          bio: updated.bio,
          location: updated.location,
          website: updated.website,
          joinedAt: updated.joinedAt.toISOString(),
          friendIds: updated.friendIds,
          blockedIds: updated.blockedIds
        })
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.user) {
        console.error('Failed to sync user data to server');
        setCurrentUser(previousUser);
        setAllUsers(prev => {
          const newMap = new Map(prev);
          newMap.set(previousUser.id, previousUser);
          if (previousUser.ablyClientId && previousUser.ablyClientId !== previousUser.id) {
            newMap.set(previousUser.ablyClientId, previousUser);
          }
          return newMap;
        });
        return false;
      }

      const serverUser = payload.user as ServerUser & { joinedAt?: string };
      const normalized = normalizeServerUser(serverUser);
      const mergedUser: UserData = {
        ...updated,
        name: normalized.name,
        username: normalized.username,
        email: normalized.email,
        avatar: normalized.avatar,
        bio: normalized.bio,
        location: normalized.location,
        website: normalized.website,
        joinedAt: normalized.joinedAt,
        friendIds: normalized.friendIds,
        blockedIds: normalized.blockedIds
      };

      setCurrentUser(mergedUser);
      setAllUsers(prev => {
        const newMap = new Map(prev);
        newMap.set(mergedUser.id, mergedUser);
        if (mergedUser.ablyClientId && mergedUser.ablyClientId !== mergedUser.id) {
          newMap.set(mergedUser.ablyClientId, mergedUser);
        }
        return newMap;
      });

      return true;
    } catch (error) {
      console.error('Error syncing user data:', error);
      setCurrentUser(previousUser);
      setAllUsers(prev => {
        const newMap = new Map(prev);
        newMap.set(previousUser.id, previousUser);
        if (previousUser.ablyClientId && previousUser.ablyClientId !== previousUser.id) {
          newMap.set(previousUser.ablyClientId, previousUser);
        }
        return newMap;
      });
      return false;
    }
  };

  const updateSettings = async (settings: Partial<UserSettings>) => {
    if (currentUser) {
      const sanitized = sanitizeSettings(settings);
      const updatedSettings = { ...currentUser.settings, ...sanitized };
      const updated = { ...currentUser, settings: updatedSettings };
      setCurrentUser(updated);
      setAllUsers(prev => {
        const newMap = new Map(prev);
        newMap.set(updated.id, updated);
        return newMap;
      });

      // Sync to Supabase
      try {
        const response = await fetch(`${API_BASE_URL}/users/${currentUser.id}/settings`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(updatedSettings)
        });

        if (!response.ok) {
          console.error('Failed to sync settings to server');
        }
      } catch (error) {
        console.error('Error syncing settings:', error);
      }
    }
  };

  const changePassword = async (
    oldPassword: string,
    newPassword: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!currentUser) {
      return { success: false, error: 'No user is signed in' };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          userId: currentUser.id,
          oldPassword,
          newPassword
        })
      });

      const payload = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string };

      if (!response.ok || payload?.success !== true) {
        const errorMessage =
          typeof payload?.error === 'string' && payload.error.trim().length > 0
            ? payload.error
            : 'Unable to change password right now';
        return { success: false, error: errorMessage };
      }

      return { success: true };
    } catch (error) {
      console.error('Error changing password:', error);
      return { success: false, error: 'Unexpected error while updating password' };
    }
  };

  const addPost = async (post: Omit<UserPost, 'id' | 'userId' | 'timestamp' | 'likes' | 'comments' | 'shares' | 'likedBy'>) => {
    if (currentUser) {
      const newPost: UserPost = {
        ...post,
        id: `${currentUser.id}-post-${Date.now()}`,
        userId: currentUser.id,
        timestamp: new Date(),
        likes: 0,
        comments: 0,
        shares: 0,
        likedBy: []
      };

      const updatedUser = {
        ...currentUser,
        posts: [newPost, ...currentUser.posts]
      };

      setCurrentUser(updatedUser);
      setAllUsers(prev => {
        const newMap = new Map(prev);
        newMap.set(updatedUser.id, updatedUser);
        return newMap;
      });

      // Sync to Supabase
      try {
        await fetch(`${API_BASE_URL}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            userId: currentUser.id,
            text: post.text,
            media: post.media
          })
        });
      } catch (error) {
        console.error('Error syncing post:', error);
      }
    }
  };

  const deletePost = async (postId: string) => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        posts: currentUser.posts.filter(p => p.id !== postId)
      };

      setCurrentUser(updatedUser);
      setAllUsers(prev => {
        const newMap = new Map(prev);
        newMap.set(updatedUser.id, updatedUser);
        return newMap;
      });

      // Sync to Supabase
      try {
        await fetch(`${API_BASE_URL}/posts/${currentUser.id}/${postId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        });
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const updatePost = async (postId: string, text: string) => {
    if (!currentUser) {
      return;
    }
    const trimmed = text.trim();
    setAllUsers(prev => {
      const next = new Map(prev);
      next.forEach((user, id) => {
        const postIndex = user.posts.findIndex(p => p.id === postId);
        if (postIndex !== -1) {
          const updatedPosts = [...user.posts];
          updatedPosts[postIndex] = { ...updatedPosts[postIndex], text: trimmed };
          const updatedUser = { ...user, posts: updatedPosts };
          next.set(id, updatedUser);
          if (currentUser && id === currentUser.id) {
            setCurrentUser(updatedUser);
          }
          if (profileUserId && (id === profileUserId || user.ablyClientId === profileUserId)) {
            setProfileUser(updatedUser);
          }
        }
      });
      return next;
    });

    try {
      await fetch(`${API_BASE_URL}/posts/${currentUser.id}/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ text: trimmed })
      });
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const likePost = async (postId: string, userId: string) => {
    let nextProfileUser: UserData | null = null;

    setAllUsers(prev => {
      const newMap = new Map(prev);
      newMap.forEach((user, id) => {
        const postIndex = user.posts.findIndex(p => p.id === postId);
        if (postIndex !== -1) {
          const post = user.posts[postIndex];
          const hasLiked = post.likedBy.includes(userId);
          
          const updatedPost = {
            ...post,
            likes: hasLiked ? post.likes - 1 : post.likes + 1,
            likedBy: hasLiked 
              ? post.likedBy.filter(id => id !== userId)
              : [...post.likedBy, userId]
          };

          const updatedPosts = [...user.posts];
          updatedPosts[postIndex] = updatedPost;

          const updatedUser = { ...user, posts: updatedPosts };
          newMap.set(id, updatedUser);

          if (currentUser && id === currentUser.id) {
            setCurrentUser(updatedUser);
          }

          if (profileUserId && (id === profileUserId || user.ablyClientId === profileUserId)) {
            nextProfileUser = updatedUser;
          }

          // Sync to Supabase
          fetch(`${API_BASE_URL}/posts/${user.id}/${postId}/like`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify({ likerUserId: userId })
          }).catch(error => console.error('Error syncing like:', error));
        }
      });
      return newMap;
    });

    if (nextProfileUser) {
      setProfileUser(nextProfileUser);
    }
  };

  const sharePost = async (
    postOwnerId: string,
    postId: string,
    options: { platform: string; sharerUserId?: string; message?: string }
  ): Promise<number | null> => {
    const payloadBody = {
      platform: options.platform,
      sharerUserId: options.sharerUserId ?? currentUser?.id ?? '',
      message: options.message ?? ''
    };

    try {
      const response = await fetch(`${API_BASE_URL}/posts/${postOwnerId}/${postId}/share`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(payloadBody)
      });

      let payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.post) {
        if (response.status !== 404) {
          const errorMessage = payload?.error ?? `status ${response.status}`;
          console.error('Error recording share:', errorMessage);
          return null;
        }

        // Fallback to legacy dynamic route
        const fallbackResponse = await fetch(`${API_BASE_URL}/shares`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            ...payloadBody,
            postOwnerId,
            postId
          })
        });

        payload = await fallbackResponse.json().catch(() => null);

        if (!fallbackResponse.ok || !payload?.post) {
          const errorMessage = payload?.error ?? `status ${fallbackResponse.status}`;
          console.error('Error recording share (fallback):', errorMessage);
          return null;
        }
      }

      const postRecord = payload.post as Record<string, unknown>;
      const totalSharesValue = postRecord?.['shares'];
      const totalShares =
        typeof totalSharesValue === 'number' && Number.isFinite(totalSharesValue)
          ? totalSharesValue
          : null;

      let resolvedShares = totalShares;
      let updatedOwnerSnapshot: UserData | null = null;
      let nextProfileUser: UserData | null = null;

      setAllUsers(prev => {
        const newMap = new Map(prev);
        const owner = newMap.get(postOwnerId);
        if (!owner) {
          return prev;
        }

        const postIndex = owner.posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
          return prev;
        }

        const updatedPosts = [...owner.posts];
        const existingPost = updatedPosts[postIndex];
        const nextShares = totalShares ?? existingPost.shares + 1;
        resolvedShares = nextShares;
        updatedPosts[postIndex] = {
          ...existingPost,
          shares: nextShares
        };

        const updatedOwner = { ...owner, posts: updatedPosts };
        updatedOwnerSnapshot = updatedOwner;

        newMap.set(updatedOwner.id, updatedOwner);
        if (updatedOwner.ablyClientId && updatedOwner.ablyClientId !== updatedOwner.id) {
          newMap.set(updatedOwner.ablyClientId, updatedOwner);
        }

        if (
          profileUserId &&
          (updatedOwner.id === profileUserId || updatedOwner.ablyClientId === profileUserId)
        ) {
          nextProfileUser = updatedOwner;
        }

        return newMap;
      });

      const ownerSnapshot = updatedOwnerSnapshot as UserData | null;
      const ownerId = ownerSnapshot ? ownerSnapshot.id : null;
      if (ownerSnapshot && ownerId && currentUser && currentUser.id === ownerId) {
        setCurrentUser(ownerSnapshot);
      }

      if (nextProfileUser) {
        setProfileUser(nextProfileUser);
      }

      return resolvedShares ?? totalShares ?? null;
    } catch (error) {
      console.error('Error sharing post:', error);
      return null;
    }
  };

  const toggleSavePost = async (postOwnerId: string, postId: string): Promise<boolean> => {
    if (!currentUser) {
      console.warn('toggleSavePost requires a logged-in user');
      throw new Error('User must be signed in to save posts');
    }

    const activeUser = currentUser;
    const userId = activeUser.id;
    const bookmarkKey = `${postOwnerId}:${postId}`;
    const previousSaved = Array.isArray(activeUser.savedPostIds) ? activeUser.savedPostIds : [];
    const hasSaved = previousSaved.includes(bookmarkKey);
    const optimisticSaved = hasSaved
      ? previousSaved.filter((value) => value !== bookmarkKey)
      : [...previousSaved, bookmarkKey];

    const applySavedPostIds = (savedPostIds: string[]) => {
      setCurrentUser((prev) => (prev && prev.id === userId ? { ...prev, savedPostIds } : prev));

      setAllUsers((prev) => {
        const next = new Map(prev);
        const base = next.get(userId) ?? (activeUser && activeUser.id === userId ? activeUser : null);
        if (base) {
          const updated = { ...base, savedPostIds };
          next.set(base.id, updated);
          if (base.ablyClientId && base.ablyClientId !== base.id) {
            next.set(base.ablyClientId, updated);
          }
        }
        return next;
      });

      setProfileUser((prev) => {
        if (!prev) {
          return prev;
        }
        if (prev.id === userId || prev.ablyClientId === userId) {
          return { ...prev, savedPostIds };
        }
        return prev;
      });
    };

    applySavedPostIds(optimisticSaved);

    type BookmarkResponse = {
      success?: boolean;
      error?: string;
      savedPostIds?: unknown;
    };

    const parseSavedIds = (value: unknown): string[] =>
      Array.isArray(value)
        ? value.filter((entry): entry is string => typeof entry === 'string')
        : optimisticSaved;

    const sendBookmarkRequest = async (
      endpoint: string,
      body: Record<string, unknown>,
    ): Promise<string[]> => {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(body),
      });

      const payload = (await response.json().catch(() => null)) as BookmarkResponse | null;
      if (!response.ok || !payload?.success) {
        const error = new Error(payload?.error ?? `status ${response.status}`) as Error & {
          status?: number;
        };
        error.status = response.status;
        throw error;
      }

      return parseSavedIds(payload.savedPostIds);
    };

    const persistSavedPostIds = async (savedPostIds: string[]): Promise<string[]> => {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ savedPostIds }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string; user?: { savedPostIds?: unknown } }
        | null;

      if (!response.ok || !payload?.user) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        const error = new Error(errorMessage) as Error & { status?: number };
        error.status = response.status;
        throw error;
      }

      return parseSavedIds(payload.user.savedPostIds);
    };

    try {
      const savedIds = await sendBookmarkRequest(
        `${API_BASE_URL}/posts/${postOwnerId}/${postId}/bookmark`,
        { userId },
      );
      applySavedPostIds(savedIds);
      return savedIds.includes(bookmarkKey);
    } catch (primaryError) {
      const withStatus = primaryError as Error & { status?: number };
      if (withStatus.status === 404 || withStatus.status === 405) {
        try {
          const savedIds = await sendBookmarkRequest(`${API_BASE_URL}/bookmarks`, {
            userId,
            postOwnerId,
            postId,
          });
          applySavedPostIds(savedIds);
          return savedIds.includes(bookmarkKey);
        } catch (fallbackError) {
          const fallbackWithStatus = fallbackError as Error & { status?: number };
          if (fallbackWithStatus.status === 404 || fallbackWithStatus.status === 405) {
            try {
              const savedIds = await persistSavedPostIds(optimisticSaved);
              applySavedPostIds(savedIds);
              return savedIds.includes(bookmarkKey);
            } catch (persistError) {
              applySavedPostIds(previousSaved);
              console.error('Error persisting saved posts via user update:', persistError);
              throw persistError instanceof Error ? persistError : new Error(String(persistError));
            }
          }

          applySavedPostIds(previousSaved);
          console.error('Error toggling saved post (fallback):', fallbackError);
          throw fallbackError instanceof Error ? fallbackError : new Error(String(fallbackError));
        }
      }

      applySavedPostIds(previousSaved);
      console.error('Error toggling saved post:', primaryError);
      throw primaryError instanceof Error ? primaryError : new Error(String(primaryError));
    }
  };

  const fetchComments = async (postOwnerId: string, postId: string): Promise<PostComment[]> => {
    const headers = {
      'Authorization': `Bearer ${publicAnonKey}`
    };

    const parseResponse = async (response: Response): Promise<PostComment[]> => {
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        throw new Error(errorMessage);
      }

      const rawComments = Array.isArray(payload?.comments) ? payload.comments : [];

      return rawComments
        .map((comment: unknown) => normalizeComment(comment, postOwnerId))
        .filter(
          (comment: PostComment | null): comment is PostComment => Boolean(comment)
        )
        .sort(
          (a: PostComment, b: PostComment) =>
            a.createdAt.getTime() - b.createdAt.getTime()
        );
    };

    try {
      const primaryQuery = new URLSearchParams({
        ownerId: postOwnerId,
        postId
      });

      const primaryResponse = await fetch(`${API_BASE_URL}/comments?${primaryQuery.toString()}`, {
        headers
      });

      try {
        return await parseResponse(primaryResponse);
      } catch (primaryError) {
        if (primaryResponse.status !== 404) {
          throw primaryError instanceof Error ? primaryError : new Error(String(primaryError));
        }
        // Fallback to legacy dynamic route
        const fallbackResponse = await fetch(`${API_BASE_URL}/posts/${postOwnerId}/${postId}/comments`, {
          headers
        });
        return await parseResponse(fallbackResponse);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  };

  const addComment = async (
    postOwnerId: string,
    postId: string,
    content: string
  ): Promise<{ comment: PostComment; totalComments: number } | null> => {
    if (!currentUser) {
      console.warn('addComment requires a logged-in user');
      return null;
    }

    const trimmed = content.trim();
    if (!trimmed) {
      return null;
    }

    try {
      const primaryResponse = await fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          postOwnerId,
          postId,
          authorId: currentUser.id,
          content: trimmed
        })
      });

      let payload = await primaryResponse.json().catch(() => null);

      if (!primaryResponse.ok || !payload?.comment) {
        if (primaryResponse.status !== 404) {
          const errorMessage = payload?.error ?? `status ${primaryResponse.status}`;
          console.error('Error creating comment:', errorMessage);
          return null;
        }

        // Fallback to legacy dynamic route
        const fallbackResponse = await fetch(`${API_BASE_URL}/posts/${postOwnerId}/${postId}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            authorId: currentUser.id,
            content: trimmed
          })
        });

        payload = await fallbackResponse.json().catch(() => null);

        if (!fallbackResponse.ok || !payload?.comment) {
          const errorMessage = payload?.error ?? `status ${fallbackResponse.status}`;
          console.error('Error creating comment (fallback):', errorMessage);
          return null;
        }
      }

      const normalizedComment = normalizeComment(payload.comment, postOwnerId);
      if (!normalizedComment) {
        return null;
      }

      const postRecord = payload.post as Record<string, unknown> | undefined;
      const totalCommentsValue = postRecord?.['comments'];
      const totalComments =
        typeof totalCommentsValue === 'number' && Number.isFinite(totalCommentsValue)
          ? totalCommentsValue
          : null;

      let resolvedComments = totalComments;
      let updatedUserSnapshot: UserData | null = null;
      let nextProfileUser: UserData | null = null;

      setAllUsers(prev => {
        const newMap = new Map(prev);
        const owner = newMap.get(postOwnerId);
        if (!owner) {
          return prev;
        }

        const postIndex = owner.posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
          return prev;
        }

        const updatedPosts = [...owner.posts];
        const existingPost = updatedPosts[postIndex];
        const nextComments = totalComments ?? existingPost.comments + 1;
        resolvedComments = nextComments;
        updatedPosts[postIndex] = {
          ...existingPost,
          comments: nextComments
        };

        const updatedUser = { ...owner, posts: updatedPosts };
        updatedUserSnapshot = updatedUser;

        newMap.set(updatedUser.id, updatedUser);
        if (updatedUser.ablyClientId && updatedUser.ablyClientId !== updatedUser.id) {
          newMap.set(updatedUser.ablyClientId, updatedUser);
        }

        if (profileUserId && (updatedUser.id === profileUserId || updatedUser.ablyClientId === profileUserId)) {
          nextProfileUser = updatedUser;
        }

        return newMap;
      });

      const nextSnapshot = updatedUserSnapshot as UserData | null;
      const nextId = nextSnapshot ? nextSnapshot.id : null;
      if (nextSnapshot && nextId && currentUser.id === nextId) {
        setCurrentUser(nextSnapshot);
      }

      if (nextProfileUser) {
        setProfileUser(nextProfileUser);
      }

      const finalCount =
        resolvedComments !== null && resolvedComments !== undefined
          ? resolvedComments
          : (totalComments !== null && totalComments !== undefined ? totalComments : 1);

      return {
        comment: normalizedComment,
        totalComments: finalCount
      };
    } catch (error) {
      console.error('Error adding comment:', error);
      return null;
    }
  };

  const addFriend = async (friendId: string): Promise<boolean> => {
    if (!currentUser || friendId === currentUser.id) {
      console.warn('addFriend requires a different logged-in user');
      return false;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/friends/${currentUser.id}/${friendId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          actorName: currentUser.name,
          actorAvatar: currentUser.avatar
        })
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.currentUser) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        console.error('Error adding friend:', errorMessage);
        return false;
      }

      const mergedCurrent = mergeServerUser(payload.currentUser as ServerUser, currentUser);
      setCurrentUser(mergedCurrent);
      setAllUsers(prev => {
        const next = new Map(prev);
        next.set(mergedCurrent.id, mergedCurrent);
        const targetPayload = payload.targetUser as ServerUser | undefined;
        if (targetPayload) {
          const existingTarget = prev.get(targetPayload.id);
          const mergedTarget = mergeServerUser(targetPayload, existingTarget);
          next.set(mergedTarget.id, mergedTarget);
        }
        return next;
      });

      void refreshAllUsers();
      return true;
    } catch (error) {
      console.error('Error adding friend:', error);
      return false;
    }
  };

  const removeFriend = async (friendId: string): Promise<boolean> => {
    if (!currentUser || friendId === currentUser.id) {
      return false;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/friends/${currentUser.id}/${friendId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.currentUser) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        console.error('Error removing friend:', errorMessage);
        return false;
      }

      const mergedCurrent = mergeServerUser(payload.currentUser as ServerUser, currentUser);
      setCurrentUser(mergedCurrent);
      setAllUsers(prev => {
        const next = new Map(prev);
        next.set(mergedCurrent.id, mergedCurrent);
        const targetPayload = payload.targetUser as ServerUser | undefined;
        if (targetPayload) {
          const existingTarget = prev.get(targetPayload.id);
          const mergedTarget = mergeServerUser(targetPayload, existingTarget);
          next.set(mergedTarget.id, mergedTarget);
        }
        return next;
      });

      void refreshAllUsers();
      return true;
    } catch (error) {
      console.error('Error removing friend:', error);
      return false;
    }
  };

  const blockUser = async (userId: string): Promise<boolean> => {
    if (!currentUser || userId === currentUser.id) {
      return false;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/blocks/${currentUser.id}/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({})
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.currentUser) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        console.error('Error blocking user:', errorMessage);
        return false;
      }

      const mergedCurrent = mergeServerUser(payload.currentUser as ServerUser, currentUser);
      setCurrentUser(mergedCurrent);
      setAllUsers(prev => {
        const next = new Map(prev);
        next.set(mergedCurrent.id, mergedCurrent);
        const targetPayload = payload.targetUser as ServerUser | undefined;
        if (targetPayload) {
          const existingTarget = prev.get(targetPayload.id);
          const mergedTarget = mergeServerUser(targetPayload, existingTarget);
          next.set(mergedTarget.id, mergedTarget);
        }
        return next;
      });

      void refreshAllUsers();
      return true;
    } catch (error) {
      console.error('Error blocking user:', error);
      return false;
    }
  };

  const unblockUser = async (userId: string): Promise<boolean> => {
    if (!currentUser || userId === currentUser.id) {
      return false;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/blocks/${currentUser.id}/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.currentUser) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        console.error('Error unblocking user:', errorMessage);
        return false;
      }

      const mergedCurrent = mergeServerUser(payload.currentUser as ServerUser, currentUser);
      setCurrentUser(mergedCurrent);
      setAllUsers(prev => {
        const next = new Map(prev);
        next.set(mergedCurrent.id, mergedCurrent);
        return next;
      });

      void refreshAllUsers();
      return true;
    } catch (error) {
      console.error('Error unblocking user:', error);
      return false;
    }
  };

  const getUserStats = () => {
    if (!currentUser) {
      return { totalPosts: 0, totalFriends: 0, totalLikes: 0, rank: 0 };
    }

    const totalPosts = currentUser.posts.length;
    const totalFriends = currentUser.friendIds.length;
    const totalLikes = currentUser.posts.reduce((sum, post) => sum + post.likes, 0);

    // Calculate rank based on total engagement
    const allUsersArray = Array.from(allUsers.values());
    const rankedUsers = allUsersArray
      .map(user => ({
        id: user.id,
        score: user.posts.length * 10 + 
               user.posts.reduce((sum, post) => sum + post.likes, 0) +
               user.friendIds.length * 5
      }))
      .sort((a, b) => b.score - a.score);

    const rank = rankedUsers.findIndex(u => u.id === currentUser.id) + 1;

    return { totalPosts, totalFriends, totalLikes, rank };
  };

  const getAchievements = () => {
    if (!currentUser) return [];
    return calculateAchievements(currentUser);
  };

  const fetchUserSnapshot = useCallback(async (userId: string): Promise<UserData | null> => {
    try {
      const userResponse = await fetch(`${API_BASE_URL}/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      if (!userResponse.ok) {
        return null;
      }

      const { user: userData } = await userResponse.json() as { user: ServerUser };

      const settingsResponse = await fetch(`${API_BASE_URL}/users/${userId}/settings`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      let settings = mergeWithDefaultSettings();
      if (settingsResponse.ok) {
        const { settings: savedSettings } = await settingsResponse.json();
        settings = mergeWithDefaultSettings(savedSettings);
      }

      const postsResponse = await fetch(`${API_BASE_URL}/users/${userId}/posts`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      let posts: UserPost[] = [];
      if (postsResponse.ok) {
        const { posts: savedPosts } = await postsResponse.json() as {
          posts: Array<Omit<UserPost, 'timestamp'> & { timestamp: string }>;
        };
        posts = savedPosts.map((savedPost) => ({
          ...savedPost,
          timestamp: new Date(savedPost.timestamp)
        }));
      }

      return {
        ...userData,
        ablyClientId: userData.ablyClientId ?? userData.id,
        bio: userData.bio ?? '',
        location: userData.location ?? '',
        website: userData.website ?? '',
        joinedAt: new Date(userData.joinedAt ?? new Date().toISOString()),
        friendIds: Array.isArray(userData.friendIds) ? userData.friendIds : [],
        blockedIds: Array.isArray(userData.blockedIds) ? userData.blockedIds : [],
        savedPostIds: Array.isArray(userData.savedPostIds)
          ? userData.savedPostIds.filter((value): value is string => typeof value === 'string')
          : [],
        posts,
        settings,
        achievements: []
      };
    } catch (error) {
      console.error('Error fetching user snapshot:', error);
      return null;
    }
  }, []);

  const loadUserData = async (userId: string) => {
    try {
      const user = await fetchUserSnapshot(userId);
      if (!user) {
        return false;
      }

      setCurrentUser(user);
      setAllUsers(prev => {
        const newMap = new Map(prev);
        newMap.set(user.id, user);
        if (user.ablyClientId && user.ablyClientId !== user.id) {
          newMap.set(user.ablyClientId, user);
        }
        return newMap;
      });

      if (!profileUserId || profileUserId === user.id) {
        setProfileUserId(user.id);
        setProfileUser(user);
      }

      return true;
    } catch (error) {
      console.error('Error loading user data:', error);
      return false;
    }
  };

  const loadProfileUser = useCallback(async (userId: string | null): Promise<boolean> => {
    if (!userId) {
      if (currentUser) {
        setProfileUserId(currentUser.id);
        setProfileUser(currentUser);
        return true;
      }
      setProfileUserId(null);
      setProfileUser(null);
      return false;
    }

    if (currentUser && userId === currentUser.id) {
      setProfileUserId(currentUser.id);
      setProfileUser(currentUser);
      return true;
    }

    const snapshot = await fetchUserSnapshot(userId);
    if (!snapshot) {
      return false;
    }

    setProfileUserId(snapshot.id);
    setProfileUser(snapshot);
    setAllUsers(prev => {
      const next = new Map(prev);
      next.set(snapshot.id, snapshot);
      if (snapshot.ablyClientId && snapshot.ablyClientId !== snapshot.id) {
        next.set(snapshot.ablyClientId, snapshot);
      }
      return next;
    });

    return true;
  }, [currentUser, fetchUserSnapshot]);

  const refreshAllUsers = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }

      const payload = await response.json().catch(() => null);
      const rawUsers = Array.isArray(payload?.users) ? payload.users : [];

      setAllUsers(prev => {
        const next = new Map<string, UserData>();
        rawUsers.forEach((rawUser: unknown) => {
          if (typeof rawUser !== 'object' || rawUser === null) {
            return;
          }
          const serverUser = rawUser as ServerUser;
          const existing = prev.get(serverUser.id);
          const merged = mergeServerUser(serverUser, existing);
          next.set(merged.id, merged);
          if (merged.ablyClientId && merged.ablyClientId !== merged.id) {
            next.set(merged.ablyClientId, merged);
          }
        });
        prev.forEach((value, key) => {
          if (!next.has(key)) {
            next.set(key, value);
          }
        });
        return next;
      });

      setCurrentUser(prev => {
        if (!prev) {
          return prev;
        }
        const serverEntry = rawUsers.find((candidate: unknown) => {
          return typeof candidate === 'object' && candidate !== null && (candidate as { id?: unknown }).id === prev.id;
        }) as ServerUser | undefined;

        if (!serverEntry) {
          return prev;
        }

        const merged = mergeServerUser(serverEntry, prev);
        const prevFriendsSorted = [...prev.friendIds].sort();
        const mergedFriendsSorted = [...merged.friendIds].sort();
        const sameFriends =
          prevFriendsSorted.length === mergedFriendsSorted.length &&
          prevFriendsSorted.every((value, index) => value === mergedFriendsSorted[index]);
        const prevBlockedSorted = [...prev.blockedIds].sort();
        const mergedBlockedSorted = [...merged.blockedIds].sort();
        const sameBlocked =
          prevBlockedSorted.length === mergedBlockedSorted.length &&
          prevBlockedSorted.every((value, index) => value === mergedBlockedSorted[index]);

        if (sameFriends && sameBlocked) {
          return prev;
        }

        return merged;
      });
    } catch (error) {
      console.error('Error refreshing users:', error);
    }
  }, []);

  useEffect(() => {
    void refreshAllUsers();
  }, [refreshAllUsers]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('[Login] Attempting login for:', email);

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ email, password })
      });

      const payload = await response.json().catch(() => null);
      console.log('[Login] Server response status:', response.status);

      if (!response.ok || !payload?.user) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        console.log('[Login] ❌ Server login failed:', errorMessage);
        return false;
      }

      const userData = payload.user as ServerUser;
      console.log('[Login] ✅ Server login successful for:', userData.name);

      const loaded = await loadUserData(userData.id);
      if (!loaded) {
        console.warn('[Login] ⚠️ Using normalized login payload while Supabase details load');
        const fallbackUser = normalizeServerUser(userData);
        setCurrentUser(fallbackUser);
        setAllUsers(prev => {
          const newMap = new Map(prev);
          newMap.set(fallbackUser.id, fallbackUser);
          if (fallbackUser.ablyClientId && fallbackUser.ablyClientId !== fallbackUser.id) {
            newMap.set(fallbackUser.ablyClientId, fallbackUser);
          }
          return newMap;
        });
      }

      return true;
    } catch (error) {
      console.error('[Login] Error during login:', error);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string, birthdate: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ name, email, password, birthdate })
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.user) {
        const errorMessage = payload?.error ?? `status ${response.status}`;
        console.error('Registration failed:', errorMessage);
        return false;
      }

      const userData = payload.user as ServerUser;
      const settingsFromResponse = payload.settings as Partial<UserSettings> | undefined;

      const loaded = await loadUserData(userData.id);
      if (!loaded) {
        const fallbackUser = {
          ...normalizeServerUser(userData),
          settings: mergeWithDefaultSettings(settingsFromResponse)
        };

        setCurrentUser(fallbackUser);
        setAllUsers(prev => {
          const newMap = new Map(prev);
          newMap.set(fallbackUser.id, fallbackUser);
          if (fallbackUser.ablyClientId && fallbackUser.ablyClientId !== fallbackUser.id) {
            newMap.set(fallbackUser.ablyClientId, fallbackUser);
          }
          return newMap;
        });
      }

      console.log('User registered successfully:', userData.email);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        profileUser,
        profileUserId,
        allUsers,
        updateUser,
        updateSettings,
        changePassword,
        addPost,
        deletePost,
      likePost,
      sharePost,
      toggleSavePost,
      fetchComments,
      addComment,
      updatePost,
      addFriend,
        removeFriend,
        blockUser,
        unblockUser,
        refreshAllUsers,
        getUserStats,
        getAchievements,
        login,
        signup,
        logout,
        loadUserData,
        loadProfileUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
