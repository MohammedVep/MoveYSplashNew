'use client';
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, DragEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Dialog, DialogContent } from './ui/dialog';
import { Input } from './ui/input';
import { Skeleton } from './ui/skeleton';
import {
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Send,
  UploadCloud,
  Trash2,
  Camera,
  Loader2,
  Video,
  Square,
  Volume2,
  VolumeX,
  RefreshCcw,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useUser } from '../utils/userContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-a14c7986`;
const AUTH_HEADERS = { Authorization: `Bearer ${publicAnonKey}` };
const JSON_HEADERS = { ...AUTH_HEADERS, 'Content-Type': 'application/json' };
const SUPABASE_URL = `https://${projectId}.supabase.co`;
const STORY_BUCKET = 'stories';
const supabaseClient = createClient(SUPABASE_URL, publicAnonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
  global: { headers: AUTH_HEADERS },
});
const STORY_SKELETON_COUNT = 5;
const MAX_STORY_ITEMS = 5;
const DEFAULT_IMAGE_DURATION = 6;
const DEFAULT_VIDEO_DURATION = 15;
const MAX_CAMERA_RECORDING_MS = DEFAULT_VIDEO_DURATION * 1000;

const blobToDataUrl = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Unable to read recording data'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

const dataUrlToBlob = (dataUrl: string): { blob: Blob; mimeType: string } => {
  const [header, payload] = dataUrl.split(',');
  if (!payload) {
    throw new Error('Invalid data URL');
  }
  const match = header.match(/^data:(.*?)(;base64)?$/);
  const mimeType = match?.[1] ?? 'application/octet-stream';
  const binary = atob(payload);
  const len = binary.length;
  const array = new Uint8Array(len);
  for (let i = 0; i < len; i += 1) {
    array[i] = binary.charCodeAt(i);
  }
  return { blob: new Blob([array], { type: mimeType }), mimeType };
};

const pickExtension = (mimeType: string): string => {
  if (!mimeType) {
    return 'bin';
  }
  const map: Record<string, string> = {
    'image/webp': 'webp',
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'video/webm': 'webm',
    'video/mp4': 'mp4',
    'video/quicktime': 'mov',
  };
  if (map[mimeType]) {
    return map[mimeType];
  }
  const [, ext] = mimeType.split('/');
  return ext && ext.length <= 5 ? ext : 'bin';
};

const safeId = () =>
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const getSupportedRecordingMimeType = () => {
  if (typeof window === 'undefined' || typeof window.MediaRecorder === 'undefined') {
    return '';
  }

  const Recorder = window.MediaRecorder;
  const candidates = [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm;codecs=avc1',
    'video/webm',
    'video/mp4',
  ];

  const supported = candidates.find((candidate) => candidate && Recorder.isTypeSupported(candidate));
  return supported ?? '';
};

const formatRecordingTime = (seconds: number) => {
  const safeSeconds = Math.max(0, seconds);
  const wholeSeconds = Math.floor(safeSeconds);
  const mins = Math.floor(wholeSeconds / 60);
  const secs = wholeSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const STORY_VISIBILITY_OPTIONS: Array<{
  label: string;
  value: 'friends' | 'public' | 'close_friends';
  description: string;
}> = [
  {
    label: 'Public',
    value: 'public',
    description: 'Everyone on MoveYSplash can view your story',
  },
  {
    label: 'Friends',
    value: 'friends',
    description: 'Only your connections can view',
  },
  {
    label: 'Close friends',
    value: 'close_friends',
    description: 'Share with your inner circle only',
  },
];

const STORY_CACHE_STORAGE_KEY = 'movesplash:stories-cache-v1';
const PENDING_STORIES_STORAGE_KEY = 'movesplash:pending-stories-v1';
const MAX_CACHED_STORIES = 30;
const FETCH_TIMEOUT_MS = 4500;
const POST_TIMEOUT_MS = 15000;

const formatRelativeTime = (isoTimestamp: string) => {
  const date = new Date(isoTimestamp);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const diffMs = Date.now() - date.getTime();
  const minutes = Math.floor(diffMs / (1000 * 60));
  if (minutes < 1) {
    return 'Just now';
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  return date.toLocaleDateString();
};

type StoryDraftItem = {
  id: string;
  type: 'image' | 'video';
  url: string;
  duration: number;
};

interface StoryUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  ablyClientId: string;
}

interface StoryItemData {
  id: string;
  type: 'image' | 'video';
  url: string;
  duration: number;
  timestamp: string;
}

interface StoryReplyData {
  id: string;
  storyId?: string;
  authorId: string;
  content: string;
  timestamp: string;
  author?: StoryUser;
}

interface StoryReply {
  id: string;
  storyId: string;
  authorId: string;
  content: string;
  timestamp: string;
  author: StoryUser | null;
}

interface StoryAPIResponse {
  id: string;
  userId: string;
  user?: StoryUser;
  items?: StoryItemData[];
  viewers?: string[];
  visibility?: 'friends' | 'public' | 'close_friends';
  createdAt?: string;
  expiresAt?: string;
  likes?: string[];
  replies?: StoryReplyData[];
}

interface StoryState {
  id: string;
  userId: string;
  user: StoryUser;
  items: StoryItemData[];
  viewers: string[];
  visibility: 'friends' | 'public' | 'close_friends';
  createdAt: string;
  expiresAt: string;
  viewed: boolean;
  likes: string[];
  likeCount: number;
  liked: boolean;
  replies: StoryReply[];
}

const STORY_PLACEHOLDER_URL =
  'https://api.dicebear.com/7.x/shapes/svg?seed=MoveSplashStory&backgroundColor=transparent';

const OFFLINE_STORIES: StoryAPIResponse[] = [
  {
    id: 'offline-story-1',
    userId: 'demo-user-1',
    user: {
      id: 'demo-user-1',
      name: 'Offline Demo',
      username: 'demo',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
      ablyClientId: 'demo-user-1',
    },
    items: [
      {
        id: 'offline-item-1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
        duration: DEFAULT_IMAGE_DURATION,
        timestamp: new Date().toISOString(),
      },
    ],
    viewers: [],
    visibility: 'public',
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    likes: [],
    replies: [],
  },
];

const safeParseStories = (raw: unknown): StoryAPIResponse[] => {
  if (!Array.isArray(raw)) return [];
  return raw.filter((entry) => entry && typeof entry === 'object') as StoryAPIResponse[];
};

const readCachedStories = (): StoryAPIResponse[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(STORY_CACHE_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return safeParseStories(parsed?.stories);
  } catch {
    return [];
  }
};

const writeCachedStories = (stories: StoryAPIResponse[]) => {
  if (typeof window === 'undefined') return;
  try {
    const trimmed = stories.slice(0, MAX_CACHED_STORIES);
    window.localStorage.setItem(
      STORY_CACHE_STORAGE_KEY,
      JSON.stringify({ stories: trimmed, cachedAt: Date.now() }),
    );
  } catch {
    // Ignore storage failures
  }
};

type PendingStoryPayload = {
  userId: string;
  visibility: 'friends' | 'public' | 'close_friends';
  items: Array<{
    id: string;
    type: 'image' | 'video';
    url: string;
    duration: number;
    timestamp: string;
  }>;
};

const readPendingStories = (): PendingStoryPayload[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(PENDING_STORIES_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writePendingStories = (pending: PendingStoryPayload[]) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(PENDING_STORIES_STORAGE_KEY, JSON.stringify(pending));
  } catch {
    // Ignore storage failures
  }
};

const storyStateToApiResponse = (story: StoryState): StoryAPIResponse => ({
  id: story.id,
  userId: story.userId,
  user: story.user,
  items: story.items.map((item) => ({
    ...item,
    url:
      typeof item.url === 'string' && item.url.trim() !== '' && item.url !== '__existing__'
        ? item.url
        : STORY_PLACEHOLDER_URL,
  })),
  viewers: story.viewers,
  visibility: story.visibility,
  createdAt: story.createdAt,
  expiresAt: story.expiresAt,
  likes: story.likes,
  replies: story.replies.map((reply) => ({
    id: reply.id,
    storyId: reply.storyId,
    authorId: reply.authorId,
    content: reply.content,
    timestamp: reply.timestamp,
    author: reply.author ?? undefined,
  })),
});

export function Stories() {
  const { currentUser, allUsers } = useUser();
  const [storiesData, setStoriesData] = useState<StoryAPIResponse[]>([]);
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [replyText, setReplyText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const storyVideoRef = useRef<HTMLVideoElement | null>(null);
  const [storyDraft, setStoryDraft] = useState<StoryDraftItem[]>([]);
  const [storyVisibility, setStoryVisibility] = useState<'friends' | 'public' | 'close_friends'>('friends');
  const [isSubmittingStory, setIsSubmittingStory] = useState(false);
  const [creationError, setCreationError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [likingStoryId, setLikingStoryId] = useState<string | null>(null);
  const [replySending, setReplySending] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraFacingMode, setCameraFacingMode] = useState<'user' | 'environment'>('user');
  const [isCapturingPhoto, setIsCapturingPhoto] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordingChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<number | null>(null);
  const recordingDiscardRef = useRef(false);
  const recordingMimeTypeRef = useRef('video/webm');
  const recordingDurationRef = useRef(0);
  const [isRecordingVideo, setIsRecordingVideo] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [recordingError, setRecordingError] = useState<string | null>(null);
  const [isStoryVideoMuted, setIsStoryVideoMuted] = useState(true);
  const [storyVideoProgress, setStoryVideoProgress] = useState(0);
  const encodeStoryId = useCallback((storyId: string) => encodeURIComponent(storyId), []);
  const storyCacheRef = useRef<StoryAPIResponse[]>([]);
  const lastFetchedAtRef = useRef(0);
  const preloadedMediaRef = useRef<Set<string>>(new Set());
  const [hydratedCache, setHydratedCache] = useState(false);

  useEffect(() => {
    const cached = readCachedStories();
    if (cached.length > 0) {
      storyCacheRef.current = cached;
      setStoriesData(cached);
      setLoading(false);
    }
    setHydratedCache(true);
  }, []);

  const fetchStories = useCallback(
    async (signal?: AbortSignal) => {
      let abortController: AbortController | null = null;
      let timeoutId: number | null = null;
      const abortFromUpstream = () => {
        abortController?.abort();
      };
      try {
        if (storyCacheRef.current.length > 0) {
          setStoriesData(storyCacheRef.current);
          setLoading(false);
        }

        if (!signal?.aborted) {
          const stale =
            Date.now() - lastFetchedAtRef.current > 45_000 || storyCacheRef.current.length === 0;
          if (stale) {
            setLoading(true);
            setError(null);
          }
        }

        abortController = new AbortController();
        if (signal) {
          if (signal.aborted) {
            abortController.abort();
            return;
          }
          signal.addEventListener('abort', abortFromUpstream);
        }
        timeoutId = window.setTimeout(abortFromUpstream, FETCH_TIMEOUT_MS);

        const response = await fetch(`${API_BASE_URL}/stories`, {
          headers: AUTH_HEADERS,
          signal: abortController?.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch stories');
        }

        const payload = (await response.json().catch(() => ({}))) as {
          stories?: StoryAPIResponse[];
        };

        if (!signal?.aborted) {
          const nextStories = Array.isArray(payload?.stories) ? payload.stories : [];
          storyCacheRef.current = nextStories;
          lastFetchedAtRef.current = Date.now();
          writeCachedStories(nextStories);
          setStoriesData(nextStories);
        }
  } catch (fetchError) {
    if ((fetchError as Error).name === 'AbortError') {
      return;
    }
    console.error('Error loading stories:', fetchError);
    if (!signal?.aborted) {
      if (storyCacheRef.current.length > 0) {
        setError('Using your last stories until connection comes back.');
        setStoriesData(storyCacheRef.current);
      } else {
        setStoriesData(OFFLINE_STORIES);
        storyCacheRef.current = OFFLINE_STORIES;
        setError('Offline mode: showing sample stories until we reconnect.');
      }
    }
      } finally {
        if (signal) {
          signal.removeEventListener('abort', abortFromUpstream);
        }
        if (timeoutId !== null) {
          window.clearTimeout(timeoutId);
        }
        if (!signal?.aborted) {
          setLoading(false);
        }
      }
    },
    [],
  );

  const prefetchStoryMedia = useCallback((stories: StoryAPIResponse[]) => {
    if (typeof window === 'undefined') {
      return;
    }

    const preloadTargets = stories
      .flatMap((story) => story.items?.slice(0, 1) ?? [])
      .filter((item) => typeof item?.url === 'string')
      .slice(0, 12);

    preloadTargets.forEach((item) => {
      const url = item?.url;
      if (!url || preloadedMediaRef.current.has(url)) {
        return;
      }
      preloadedMediaRef.current.add(url);
      const image = new Image();
      image.src = url;
    });
  }, []);

  const uploadStoryMediaToSupabase = useCallback(
    async (item: { id: string; type: 'image' | 'video'; url: string }, userId: string) => {
      if (!item.url.startsWith('data:')) {
        return item;
      }

      try {
        const { blob, mimeType } = dataUrlToBlob(item.url);
        const extension = pickExtension(mimeType);
        const objectPath = `${userId || 'user'}/${Date.now()}-${safeId()}.${extension}`;
        const { error } = await supabaseClient.storage.from(STORY_BUCKET).upload(objectPath, blob, {
          cacheControl: '31536000',
          contentType: mimeType,
          upsert: false,
        });

        if (error) {
          throw error;
        }

        const { data } = supabaseClient.storage.from(STORY_BUCKET).getPublicUrl(objectPath);
        const publicUrl = data?.publicUrl || item.url;
        return { ...item, url: publicUrl };
      } catch (uploadError) {
        console.warn('Story media upload failed, using inline URL instead:', uploadError);
        return item;
      }
    },
    [],
  );

  const mapDraftToItems = useCallback((draft: StoryDraftItem[]): StoryItemData[] => {
    const baseTime = Date.now();
    return draft.map((item, index) => ({
      id: item.id,
      type: item.type,
      url: item.url,
      duration: item.duration,
      timestamp: new Date(baseTime + index).toISOString(),
    }));
  }, []);

  const buildPayloadItems = useCallback(
    async (draft: StoryDraftItem[], userId: string): Promise<StoryItemData[]> => {
      const mapped = mapDraftToItems(draft);
      return Promise.all(
        mapped.map(async (item) => {
          const uploaded = await uploadStoryMediaToSupabase(item, userId);
          return { ...item, url: uploaded.url };
        }),
      );
    },
    [mapDraftToItems, uploadStoryMediaToSupabase],
  );

  const ensurePendingItemsUploaded = useCallback(
    async (items: StoryItemData[], userId: string): Promise<StoryItemData[]> =>
      Promise.all(
        items.map(async (item) => {
          if (!item.url.startsWith('data:')) {
            return item;
          }
          const uploaded = await uploadStoryMediaToSupabase(item, userId);
          return { ...item, url: uploaded.url };
        }),
      ),
    [uploadStoryMediaToSupabase],
  );

  const sendSupabaseNotification = useCallback(
    async (userId: string, content: string) => {
      try {
        await fetch(`${API_BASE_URL}/notifications`, {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({
            userId,
            type: 'story',
            content,
            actorName: currentUser?.name || 'MoveSplash friend',
            actorAvatar: currentUser?.avatar,
          }),
        });
      } catch (notifyError) {
        console.warn('Failed to send Supabase notification:', notifyError);
      }
    },
    [currentUser?.avatar, currentUser?.name],
  );

  const notifyFriendsAboutStory = useCallback(
    async (message: string) => {
      if (!currentUser || !currentUser.friendIds?.length) {
        return;
      }

      const friendRecords = currentUser.friendIds
        .map((id) => allUsers.get(id))
        .filter((user): user is typeof currentUser => Boolean(user));

      const optedIn = friendRecords.filter(
        (friend) => friend.settings?.notifyStories ?? true,
      );

      await Promise.allSettled(optedIn.map((friend) => sendSupabaseNotification(friend.id, message)));
    },
    [allUsers, currentUser, sendSupabaseNotification],
  );

  const postStoryWithRetry = useCallback(
    async (payload: PendingStoryPayload, maxAttempts = 3) => {
      for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), POST_TIMEOUT_MS);
        try {
          const response = await fetch(`${API_BASE_URL}/stories`, {
            method: 'POST',
            headers: JSON_HEADERS,
            body: JSON.stringify(payload),
            signal: controller.signal,
          });

          const data = (await response.json().catch(() => ({}))) as { story?: StoryAPIResponse; error?: string };
          if (!response.ok || !data?.story) {
            throw new Error(data?.error || `Story publish failed (attempt ${attempt})`);
          }
          return data.story;
        } catch (postError) {
          const isAbort = postError instanceof DOMException && postError.name === 'AbortError';
          if (attempt === maxAttempts) {
            throw postError;
          }
          // short backoff before retrying; slightly longer on aborts/timeouts
          await new Promise((resolve) => setTimeout(resolve, isAbort ? 800 * attempt : 400 * attempt));
        } finally {
          window.clearTimeout(timeoutId);
        }
      }
      return null;
    },
    [],
  );

  const mergeStoryUpdate = useCallback(
    (storyUpdate: StoryAPIResponse, options?: { prepend?: boolean }) => {
      setStoriesData((prev) => {
        const sanitizeItems = (
          items: StoryAPIResponse['items'],
          existing?: StoryAPIResponse['items'],
        ) => {
          if (!Array.isArray(items)) {
            return items;
          }
          return items.map((item, index) => {
            const previous = existing?.[index];
            const normalizedUrl =
              typeof item.url === 'string' && item.url.trim() !== '' && item.url !== '__existing__'
                ? item.url
                : '';
            const previousUrl =
              typeof previous?.url === 'string' && previous.url.trim() !== '' && previous.url !== '__existing__'
                ? previous.url
                : '';
            const resolvedUrl = normalizedUrl || previousUrl || STORY_PLACEHOLDER_URL;
            return { ...item, url: resolvedUrl };
          });
        };
        const cleanedUpdate: StoryAPIResponse = {
          ...storyUpdate,
          items: sanitizeItems(storyUpdate.items),
        };
        const exists = prev.some((entry) => entry.id === storyUpdate.id);
        if (exists) {
          return prev.map((entry) =>
            entry.id === storyUpdate.id
              ? {
                  ...entry,
                  ...cleanedUpdate,
                  items: sanitizeItems(cleanedUpdate.items, entry.items),
                }
              : entry,
          );
        }
        if (options?.prepend) {
          return [cleanedUpdate, ...prev];
        }
        return [...prev, cleanedUpdate];
      });
    },
    [],
  );

  const flushPendingStories = useCallback(async () => {
    const pending = readPendingStories();
    if (!pending.length) return;

    const remaining: PendingStoryPayload[] = [];
    for (const payload of pending) {
      try {
        const items = await ensurePendingItemsUploaded(payload.items, payload.userId);
        const story = await postStoryWithRetry({ ...payload, items }, 2);
        if (story) {
          mergeStoryUpdate(story, { prepend: true });
          storyCacheRef.current = [story, ...storyCacheRef.current].slice(0, MAX_CACHED_STORIES);
          writeCachedStories(storyCacheRef.current);
        } else {
          remaining.push(payload);
        }
      } catch {
        remaining.push(payload);
      }
    }

    writePendingStories(remaining);
    const cleared = remaining.length === 0;
    if (cleared) {
      setCreationError(null);
      toast.success('Queued stories posted.');
    }
    return cleared;
  }, [ensurePendingItemsUploaded, mergeStoryUpdate, postStoryWithRetry]);

  const buildUserSnapshot = useCallback((user: StoryUser | null) => {
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
      ablyClientId: user.ablyClientId ?? user.id,
    };
  }, []);

  const buildStorySnapshot = useCallback((story: StoryState) => {
    return {
      id: story.id,
      userId: story.userId,
      visibility: story.visibility,
      createdAt: story.createdAt,
      expiresAt: story.expiresAt,
      viewers: story.viewers,
      likes: story.likes,
      items: story.items.map((item) => ({
        id: item.id,
        type: item.type,
        url:
          typeof item.url === 'string' && item.url.trim() !== '' ? item.url : STORY_PLACEHOLDER_URL,
        duration: item.duration,
        timestamp: item.timestamp ?? new Date().toISOString(),
      })),
      user: {
        id: story.user.id,
        name: story.user.name,
        username: story.user.username,
        avatar: story.user.avatar,
        ablyClientId: story.user.ablyClientId,
      },
      replies: story.replies.map((reply) => ({
        id: reply.id,
        storyId: reply.storyId,
        authorId: reply.authorId,
        content: reply.content,
        timestamp: reply.timestamp,
        author: reply.author
          ? {
              id: reply.author.id,
              name: reply.author.name,
              username: reply.author.username,
              avatar: reply.author.avatar,
              ablyClientId: reply.author.ablyClientId,
            }
          : undefined,
      })),
    };
  }, []);

  const ensureStoryOnServer = useCallback(
    async (story: StoryState) => {
      try {
        const ownerSnapshot = buildUserSnapshot(story.user);
        const response = await fetch(`${API_BASE_URL}/stories`, {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({
            ...buildStorySnapshot(story),
            userSnapshot: ownerSnapshot ?? undefined,
          }),
        });

        if (!response.ok) {
          return false;
        }

        const payload = (await response.json().catch(() => ({}))) as {
          story?: StoryAPIResponse;
        };

        if (payload?.story) {
          mergeStoryUpdate(payload.story);
        }

        return true;
      } catch (restoreError) {
        console.error('Failed to ensure story on server:', restoreError);
        return false;
      }
    },
    [buildStorySnapshot, buildUserSnapshot, mergeStoryUpdate],
  );

  const processFiles = useCallback(
    (files: FileList | File[] | null) => {
      if (!files) {
        return;
      }

      const fileArray = Array.from(files).filter((file) =>
        file.type.startsWith('image/') || file.type.startsWith('video/'),
      );

      if (fileArray.length === 0) {
        setCreationError('Only image or video files are supported for stories.');
        toast.error('Only image or video files are supported for stories.');
        return;
      }

      const availableSlots = Math.max(MAX_STORY_ITEMS - storyDraft.length, 0);
      if (availableSlots <= 0) {
        setCreationError(`You can add up to ${MAX_STORY_ITEMS} story items.`);
        toast.info(`You can add up to ${MAX_STORY_ITEMS} story items.`);
        return;
      }

      const allowedFiles = fileArray.slice(0, availableSlots);
      const hasOverflow = fileArray.length > allowedFiles.length;

      allowedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result;
          if (!result || typeof result !== 'string') {
            return;
          }

          const isVideo = file.type.startsWith('video/');
          setStoryDraft((prev) => [
            ...prev,
            {
              id: `${file.name}-${Date.now()}`,
              type: isVideo ? 'video' : 'image',
              url: result,
              duration: isVideo ? DEFAULT_VIDEO_DURATION : DEFAULT_IMAGE_DURATION,
            },
          ]);
        };
        reader.readAsDataURL(file);
      });

      if (allowedFiles.length > 0) {
        setCreationError(null);
      }

      if (hasOverflow) {
        toast.info(`Only the first ${availableSlots} files were added.`);
      }
    },
    [storyDraft.length],
  );

  const handleFileInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      processFiles(event.target.files);
      event.target.value = '';
    },
    [processFiles],
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
      processFiles(event.dataTransfer.files);
    },
    [processFiles],
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    if (!isDragging) {
      setIsDragging(true);
    }
  }, [isDragging]);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const clearRecordingTimer = useCallback(() => {
    if (recordingTimerRef.current !== null) {
      window.clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
  }, []);

  const finalizeRecording = useCallback(async () => {
    clearRecordingTimer();
    const discard = recordingDiscardRef.current;
    recordingDiscardRef.current = false;
    const chunks = recordingChunksRef.current;
    recordingChunksRef.current = [];
    mediaRecorderRef.current = null;
    const mimeType = recordingMimeTypeRef.current || 'video/webm';
    const durationSeconds = Math.max(recordingDurationRef.current, 0);
    recordingDurationRef.current = 0;
    setIsRecordingVideo(false);
    setRecordingDuration(0);

    if (discard || chunks.length === 0) {
      if (discard && chunks.length > 0) {
        toast.info('Recording discarded.');
      }
      return;
    }

    try {
      const blob = new Blob(chunks, { type: mimeType });
      const dataUrl = await blobToDataUrl(blob);
      setStoryDraft((prev) => {
        if (prev.length >= MAX_STORY_ITEMS) {
          toast.info(`You can add up to ${MAX_STORY_ITEMS} story items.`);
          return prev;
        }
        const derivedDuration = Math.min(
          DEFAULT_VIDEO_DURATION,
          Math.max(3, Math.round(durationSeconds) || DEFAULT_VIDEO_DURATION),
        );
        return [
          ...prev,
          {
            id: `recording-${Date.now()}`,
            type: 'video',
            url: dataUrl,
            duration: derivedDuration,
          },
        ];
      });
      toast.success('Video added to your story.');
    } catch (error) {
      console.error('Failed to save recording:', error);
      toast.error('Unable to save that recording.');
    }
  }, [setStoryDraft, clearRecordingTimer]);

  const stopVideoRecording = useCallback(
    (discard = false) => {
      if (!mediaRecorderRef.current) {
        recordingDiscardRef.current = false;
        return;
      }
      recordingDiscardRef.current = discard;
      if (mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    },
    [],
  );

  const startVideoRecording = useCallback(() => {
    if (!isCameraActive || !cameraStream) {
      toast.info('Start the camera before recording.');
      return;
    }
    if (isRecordingVideo) {
      toast.info('Recording already in progress.');
      return;
    }
    if (typeof window === 'undefined' || typeof window.MediaRecorder === 'undefined') {
      setRecordingError('Video recording is not supported in this browser.');
      toast.error('Recording is not supported on this device.');
      return;
    }

    try {
      const mimeType = getSupportedRecordingMimeType();
      const recorder = mimeType
        ? new MediaRecorder(cameraStream, { mimeType })
        : new MediaRecorder(cameraStream);
      recordingMimeTypeRef.current = mimeType || recorder.mimeType || 'video/webm';
      recordingChunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordingChunksRef.current.push(event.data);
        }
      };
      recorder.onerror = (errorEvent) => {
        console.error('Recording error:', errorEvent);
        setRecordingError('Recording error. Please try again.');
        toast.error('Recording error.');
        recordingDiscardRef.current = true;
      };
      recorder.onstop = () => {
        finalizeRecording().catch((error) => {
          console.error('Failed to finalize recording:', error);
        });
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setIsRecordingVideo(true);
      setRecordingDuration(0);
      recordingDurationRef.current = 0;
      setRecordingError(null);
      recordingTimerRef.current = window.setInterval(() => {
        setRecordingDuration((prev) => {
          const next = prev + 0.2;
          recordingDurationRef.current = next;
          if (next * 1000 >= MAX_CAMERA_RECORDING_MS) {
            stopVideoRecording();
          }
          return next;
        });
      }, 200);
      toast.success('Recording started.');
    } catch (error) {
      console.error('Unable to start recording:', error);
      setRecordingError('Unable to start recording. Please try again.');
      toast.error('Unable to start recording.');
    }
  }, [cameraStream, finalizeRecording, isCameraActive, isRecordingVideo, stopVideoRecording]);

  useEffect(() => {
    return () => {
      clearRecordingTimer();
      recordingDiscardRef.current = true;
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [clearRecordingTimer]);

  const stopCamera = useCallback(() => {
    if (isRecordingVideo) {
      stopVideoRecording(true);
    }
    setCameraStream((stream) => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          try {
            track.stop();
          } catch (stopError) {
            console.error('Error stopping camera stream track:', stopError);
          }
        });
      }

      return null;
    });
    setIsCameraActive(false);
    setIsCapturingPhoto(false);
    setRecordingDuration(0);
    recordingDurationRef.current = 0;
    setRecordingError(null);
    setCameraError(null);
  }, [isRecordingVideo, stopVideoRecording]);

  const startCamera = useCallback(async (facing: 'user' | 'environment' = cameraFacingMode) => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setCameraError('Camera is not supported on this device.');
      return;
    }

    try {
      stopCamera();
      let stream: MediaStream | null = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: facing },
          audio: true,
        });
      } catch (audioError) {
        console.warn('Falling back to video-only capture for stories:', audioError);
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facing } });
      }
      setCameraStream(stream);
      setIsCameraActive(true);
      setCameraError(null);
    } catch (cameraErr) {
      console.error('Error accessing camera:', cameraErr);
      setCameraError('Unable to access camera. Check your permissions.');
      setIsCameraActive(false);
    }
  }, [stopCamera, cameraFacingMode]);

  const handleFlipCamera = useCallback(() => {
    setCameraFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
    if (isCameraActive) {
      void startCamera(cameraFacingMode === 'user' ? 'environment' : 'user');
    }
  }, [cameraFacingMode, isCameraActive, startCamera]);

  const capturePhoto = useCallback(() => {
    if (!isCameraActive || !videoRef.current) {
      toast.info('Start the camera to capture a photo.');
      return;
    }
    if (isRecordingVideo) {
      toast.info('Stop the recording before taking a photo.');
      return;
    }

    const video = videoRef.current;
    setIsCapturingPhoto(true);
    setStoryDraft((prev) => {
      if (prev.length >= MAX_STORY_ITEMS) {
        toast.info(`You can add up to ${MAX_STORY_ITEMS} story items.`);
        setIsCapturingPhoto(false);
        return prev;
      }

      const canvas = document.createElement('canvas');
      const width = video.videoWidth || 720;
      const height = video.videoHeight || 1280;
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      if (!context) {
        toast.error('Unable to capture photo.');
        setIsCapturingPhoto(false);
        return prev;
      }
      context.drawImage(video, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      if (!dataUrl) {
        toast.error('Unable to capture photo.');
        setIsCapturingPhoto(false);
        return prev;
      }

      toast.success('Photo added to your story.');
      setIsCapturingPhoto(false);
      return [
        ...prev,
        { id: `camera-${Date.now()}`, type: 'image', url: dataUrl, duration: DEFAULT_IMAGE_DURATION },
      ];
    });
  }, [isCameraActive, isRecordingVideo]);

  const resetCreatorState = useCallback(() => {
    setStoryDraft([]);
    setStoryVisibility('friends');
    setCreationError(null);
    setIsDragging(false);
    setIsSubmittingStory(false);
    stopCamera();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [stopCamera]);

  const handleRemoveDraftItem = useCallback((id: string) => {
    setStoryDraft((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleCreatorOpenChange = useCallback(
    (open: boolean) => {
      setIsCreatorOpen(open);
      if (!open) {
        resetCreatorState();
      }
    },
    [resetCreatorState],
  );

  const queueStoryForLater = useCallback(
    (payload: PendingStoryPayload) => {
      const pending = [...readPendingStories(), payload];
      writePendingStories(pending);
      toast.success('We saved your story locally and will post it once you are back online.');
    },
    [],
  );

  const handleCreateStory = useCallback(async () => {
    if (!currentUser) {
      toast.info("Sign in to share a story.");
      return;
    }

    if (isSubmittingStory) {
      return;
    }

    if (storyDraft.length === 0) {
      setCreationError('Add at least one photo or video to your story.');
      toast.info('Add a photo or video before publishing.');
      return;
    }

    setIsSubmittingStory(true);
    setCreationError(null);

    try {
      const isOffline = typeof navigator !== 'undefined' && navigator.onLine === false;
      const baseItems = mapDraftToItems(storyDraft);

      if (isOffline) {
        queueStoryForLater({
          userId: currentUser.id,
          visibility: storyVisibility,
          items: baseItems,
        });
        handleCreatorOpenChange(false);
        return;
      }

      const uploadedItems = await buildPayloadItems(storyDraft, currentUser.id);

      const payload: PendingStoryPayload = {
        userId: currentUser.id,
        visibility: storyVisibility,
        items: uploadedItems,
      };

      const createdStory = await postStoryWithRetry(payload, 3);
      if (!createdStory) {
        throw new Error('Failed to publish story.');
      }

      mergeStoryUpdate(createdStory, { prepend: true });
      storyCacheRef.current = [createdStory, ...storyCacheRef.current];
      lastFetchedAtRef.current = Date.now();
      writeCachedStories(storyCacheRef.current);

      const newStoryId = createdStory.id;

      handleCreatorOpenChange(false);

      toast.success('Your story is live!');
      void notifyFriendsAboutStory(`${currentUser.name || 'A friend'} posted a new story.`);

      void fetchStories().catch((error) => {
        console.error('Error refreshing stories:', error);
      });

      setSelectedStory(newStoryId);
      setCurrentItemIndex(0);
    } catch (creationErrorCaught) {
      console.error('Error creating story:', creationErrorCaught);
      queueStoryForLater({
        userId: currentUser.id,
        visibility: storyVisibility,
        items: storyDraft.map((item) => ({
          id: item.id,
          type: item.type,
          url: item.url,
          duration: item.duration,
          timestamp: new Date().toISOString(),
        })),
      });
      setCreationError(null);
    } finally {
      setIsSubmittingStory(false);
    }
  }, [
    currentUser,
    storyDraft,
    storyVisibility,
    fetchStories,
    handleCreatorOpenChange,
    mergeStoryUpdate,
    isSubmittingStory,
    notifyFriendsAboutStory,
    postStoryWithRetry,
    queueStoryForLater,
    mapDraftToItems,
    buildPayloadItems,
  ]);

  useEffect(() => {
    if (!hydratedCache) {
      return;
    }
    const controller = new AbortController();
    fetchStories(controller.signal);
    return () => controller.abort();
  }, [fetchStories, hydratedCache]);

  useEffect(() => {
    if (!hydratedCache) {
      return;
    }
    void flushPendingStories();
    const handleOnline = () => {
      void flushPendingStories();
    };
    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [flushPendingStories, hydratedCache]);

  useEffect(() => {
    if (storiesData.length > 0) {
      prefetchStoryMedia(storiesData);
    }
  }, [storiesData, prefetchStoryMedia]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (cameraStream) {
      video.srcObject = cameraStream;
      const play = async () => {
        try {
          await video.play();
        } catch (err) {
          console.error('Error starting camera preview:', err);
          setCameraError('Unable to start camera preview.');
        }
      };
      void play();
    } else {
      video.srcObject = null;
    }
  }, [cameraStream]);

  useEffect(() => {
    if (!isCreatorOpen) {
      stopCamera();
    }
  }, [isCreatorOpen, stopCamera]);

  const storyFeed = useMemo<StoryState[]>(() => {
    return storiesData
      .filter(
        (story): story is StoryAPIResponse & { user: StoryUser; items: StoryItemData[] } =>
          Boolean(story?.user) && Array.isArray(story.items) && story.items.length > 0,
      )
      .map((story) => {
        const safeItems: StoryItemData[] = story.items!.map((item): StoryItemData => ({
          ...item,
          type: item.type === 'video' ? 'video' : 'image',
        }));
        const baseUser = story.user!;
        const resolvedUser: StoryUser = {
          id: baseUser.id,
          name: baseUser.name,
          username: baseUser.username,
          avatar: baseUser.avatar,
          ablyClientId: baseUser.ablyClientId ?? baseUser.id,
        };
        const createdAt = story.createdAt && !Number.isNaN(Date.parse(story.createdAt))
          ? new Date(story.createdAt).toISOString()
          : new Date().toISOString();
        const expiresAt = story.expiresAt && !Number.isNaN(Date.parse(story.expiresAt))
          ? new Date(story.expiresAt).toISOString()
          : createdAt;
        const likes = Array.from(
          new Set(
            Array.isArray(story.likes)
              ? story.likes.filter((value): value is string => typeof value === 'string')
              : [],
          ),
        );
        const replies: StoryReply[] = Array.isArray(story.replies)
          ? story.replies
              .map((reply, index) => {
                if (!reply || typeof reply !== 'object') {
                  return null;
                }
                const replyData = reply as StoryReplyData;
                const replyAuthorId = typeof replyData.authorId === 'string' ? replyData.authorId : '';
                if (!replyAuthorId) {
                  return null;
                }
                const timestamp = replyData.timestamp && !Number.isNaN(Date.parse(replyData.timestamp))
                  ? new Date(replyData.timestamp).toISOString()
                  : new Date().toISOString();
                const authorData = replyData.author;
                const author: StoryUser | null = authorData
                  ? {
                      id: authorData.id,
                      name: authorData.name,
                      username: authorData.username,
                      avatar: authorData.avatar,
                      ablyClientId: authorData.ablyClientId ?? authorData.id,
                    }
                  : null;
                const content = typeof replyData.content === 'string' ? replyData.content : '';
                if (!content) {
                  return null;
                }

                return {
                  id: replyData.id || `${story.id}-reply-${index}`,
                  storyId: replyData.storyId ?? story.id,
                  authorId: replyAuthorId,
                  author,
                  content,
                  timestamp,
                };
              })
              .filter((reply): reply is StoryReply => Boolean(reply))
              .sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
          : [];

        return {
          id: story.id,
          userId: story.userId,
          user: resolvedUser,
          items: safeItems,
          viewers: Array.isArray(story.viewers) ? story.viewers : [],
          visibility: story.visibility ?? 'friends',
          createdAt,
          expiresAt,
          viewed: currentUser
            ? Array.isArray(story.viewers)
              ? story.viewers.includes(currentUser.id)
              : false
            : false,
          likes,
          likeCount: likes.length,
          liked: currentUser ? likes.includes(currentUser.id) : false,
          replies,
        };
      })
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  }, [storiesData, currentUser]);

  const storyCreationPlaceholder = useMemo<StoryState | null>(() => {
    if (!currentUser) {
      return null;
    }

    const hasExistingStory = storyFeed.some((story) => story.userId === currentUser.id);
    if (hasExistingStory) {
      return null;
    }

    const nowIso = new Date().toISOString();
    return {
      id: `create-story-${currentUser.id}`,
      userId: currentUser.id,
      user: {
        id: currentUser.id,
        name: currentUser.name,
        username: currentUser.username,
        avatar: currentUser.avatar,
        ablyClientId: currentUser.ablyClientId ?? currentUser.id,
      },
      items: [],
      viewers: [],
      visibility: 'friends',
      createdAt: nowIso,
      expiresAt: nowIso,
      viewed: false,
      likes: [],
      likeCount: 0,
      liked: false,
      replies: [],
    };
  }, [currentUser, storyFeed]);

  const playableStories = useMemo(
    () => storyFeed.filter((story) => story.items.length > 0),
    [storyFeed],
  );

  const orderedStories = useMemo(() => {
    let ordered = storyFeed;
    if (currentUser) {
      const ownStories = storyFeed.filter((story) => story.userId === currentUser.id);
      const others = storyFeed.filter((story) => story.userId !== currentUser.id);
      ordered = [...ownStories, ...others];
    }

    if (storyCreationPlaceholder) {
      return [storyCreationPlaceholder, ...ordered];
    }

    return ordered;
  }, [currentUser, storyFeed, storyCreationPlaceholder]);

  const currentStory = selectedStory
    ? playableStories.find((story) => story.id === selectedStory) ?? null
    : null;
  const currentItem = currentStory?.items[currentItemIndex];

  useEffect(() => {
    if (!selectedStory) {
      return;
    }

    if (playableStories.some((story) => story.id === selectedStory)) {
      return;
    }

    setSelectedStory(null);
    setCurrentItemIndex(0);
  }, [selectedStory, playableStories]);

  useEffect(() => {
    setReplyText('');
    setStoryVideoProgress(0);
    setIsStoryVideoMuted(true);
  }, [selectedStory]);

  useEffect(() => {
    if (!selectedStory || !currentUser) {
      return;
    }

    const story = storiesData.find((entry) => entry.id === selectedStory);
    if (!story) {
      return;
    }
    if (Array.isArray(story.viewers) && story.viewers.includes(currentUser.id)) {
      return;
    }

    const controller = new AbortController();
    const trackView = async () => {
      try {
        const storyIdParam = encodeStoryId(story.id);
        await fetch(`${API_BASE_URL}/stories/${storyIdParam}/view`, {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({ viewerId: currentUser.id }),
          signal: controller.signal,
        });

        setStoriesData((prev) =>
          prev.map((entry) =>
            entry.id === story.id
              ? { ...entry, viewers: Array.from(new Set([...(entry.viewers ?? []), currentUser.id])) }
              : entry,
          ),
        );
      } catch (markError) {
        if ((markError as Error).name !== 'AbortError') {
          console.error('Failed to update story view state:', markError);
        }
      }
    };

    trackView();
    return () => controller.abort();
  }, [selectedStory, currentUser, storiesData, encodeStoryId]);

  const handleStorySelect = (story: StoryState) => {
    if (currentUser && story.userId === currentUser.id && story.items.length === 0) {
      handleCreatorOpenChange(true);
      return;
    }
    if (story.items.length === 0) {
      return;
    }
    setSelectedStory(story.id);
    setCurrentItemIndex(0);
  };

  const handleNext = useCallback(() => {
    if (!currentStory) {
      return;
    }

    if (currentItemIndex < currentStory.items.length - 1) {
      setCurrentItemIndex((index) => index + 1);
      return;
    }

    const storyIndex = playableStories.findIndex((story) => story.id === currentStory.id);
    if (storyIndex >= 0 && storyIndex < playableStories.length - 1) {
      setSelectedStory(playableStories[storyIndex + 1].id);
      setCurrentItemIndex(0);
    } else {
      setSelectedStory(null);
      setCurrentItemIndex(0);
    }
  }, [currentStory, currentItemIndex, playableStories]);

  const handlePrevious = useCallback(() => {
    if (!currentStory) {
      return;
    }

    if (currentItemIndex > 0) {
      setCurrentItemIndex((index) => index - 1);
      return;
    }

    const storyIndex = playableStories.findIndex((story) => story.id === currentStory.id);
    if (storyIndex > 0) {
      const prevStory = playableStories[storyIndex - 1];
      setSelectedStory(prevStory.id);
      setCurrentItemIndex(Math.max(prevStory.items.length - 1, 0));
    }
  }, [currentStory, currentItemIndex, playableStories]);

  const sendStoryReplyMessage = useCallback(
    async (story: StoryState, content: string) => {
      if (!currentUser || story.userId === currentUser.id) {
        return;
      }

      const senderClientId = currentUser.ablyClientId ?? currentUser.id;
      const targetClientId = story.user.ablyClientId ?? story.user.id;
      const members = Array.from(
        new Set([senderClientId, targetClientId].filter((value): value is string => Boolean(value))),
      );
      if (members.length < 2) {
        return;
      }

      const chatName = `Story chat with ${story.user.name}`;
      let chatId: string | null = null;

      try {
        const response = await fetch(`${API_BASE_URL}/chats`, {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({
            name: chatName,
            members,
            isGroup: false,
            createdBy: currentUser.id,
          }),
        });

        const payload = (await response.json().catch(() => ({}))) as {
          chat?: { id?: string };
        };

        if (response.ok && payload?.chat && typeof payload.chat.id === 'string') {
          chatId = payload.chat.id;
        } else if (!response.ok) {
          console.warn('Failed to ensure chat for story reply', response.status);
        }
      } catch (ensureChatError) {
        console.error('Error ensuring chat for story reply:', ensureChatError);
      }

      if (!chatId) {
        return;
      }

      try {
        const messageResponse = await fetch(`${API_BASE_URL}/messages`, {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({
            chatId,
            senderId: senderClientId,
            senderName: currentUser.name,
            senderAvatar: currentUser.avatar,
            content: `Reply to your story: ${content}`,
          }),
        });

        if (!messageResponse.ok) {
          console.warn('Failed to persist story reply message', messageResponse.status);
        }
      } catch (messageError) {
        console.error('Error sending story reply message:', messageError);
      }
    },
    [currentUser],
  );

  useEffect(() => {
    if (!currentItem || currentItem.type !== 'video') {
      setStoryVideoProgress(0);
      const existing = storyVideoRef.current;
      if (existing) {
        existing.pause();
        existing.currentTime = 0;
      }
      return;
    }

    const videoElement = storyVideoRef.current;
    if (!videoElement) {
      return;
    }

    videoElement.muted = isStoryVideoMuted;
    const handleEnded = () => handleNext();
    const handleTimeUpdate = () => {
      if (videoElement.duration) {
        setStoryVideoProgress(videoElement.currentTime / videoElement.duration);
      }
    };
    const handleLoadedMetadata = () => {
      setStoryVideoProgress(0);
      videoElement.muted = isStoryVideoMuted;
      const playPromise = videoElement.play();
      if (playPromise) {
        playPromise.catch((error) => console.warn('Unable to autoplay story video:', error));
      }
    };

    videoElement.addEventListener('ended', handleEnded);
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    const playPromise = videoElement.play();
    if (playPromise) {
      playPromise.catch((error) => console.warn('Unable to autoplay story video:', error));
    }

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentItem, handleNext, isStoryVideoMuted]);

  const toggleStoryVideoMute = useCallback(() => {
    setIsStoryVideoMuted((prev) => {
      const next = !prev;
      if (storyVideoRef.current) {
        storyVideoRef.current.muted = next;
      }
      return next;
    });
  }, []);

  const handleStoryLike = useCallback(
    async (story: StoryState) => {
      if (!currentUser) {
        toast.info('Sign in to like stories.');
        return;
      }

      if (likingStoryId && likingStoryId !== story.id) {
        return;
      }

      setLikingStoryId(story.id);
      try {
        const toggleLike = async (attempt = 0): Promise<boolean> => {
          const storyIdParam = encodeStoryId(story.id);
          const includeSnapshot = attempt > 0;
          const response = await fetch(`${API_BASE_URL}/stories/${storyIdParam}/like`, {
            method: 'POST',
            headers: JSON_HEADERS,
            body: JSON.stringify({
              userId: currentUser.id,
              likerSnapshot: {
                id: currentUser.id,
                name: currentUser.name,
                username: currentUser.username,
                avatar: currentUser.avatar,
                ablyClientId: currentUser.ablyClientId ?? currentUser.id,
              },
              ...(includeSnapshot ? { storySnapshot: buildStorySnapshot(story) } : {}),
            }),
          });

          if (response.status === 404 && attempt === 0) {
            const restored = await ensureStoryOnServer(story);
            if (restored) {
              return toggleLike(attempt + 1);
            }
          }

          const payload = (await response.json().catch(() => ({}))) as {
            story?: StoryAPIResponse;
            liked?: boolean;
            error?: string;
          };

          if (!response.ok || !payload?.story) {
            return false;
          }

          mergeStoryUpdate(payload.story);
          return true;
        };

        const applied = await toggleLike();
        if (!applied) {
          throw new Error('restore');
        }
      } catch {
        if (currentUser) {
          const currentlyLiked = story.likes.includes(currentUser.id);
          const updatedLikes = currentlyLiked
            ? story.likes.filter((id) => id !== currentUser.id)
            : [...story.likes, currentUser.id];
          const fallbackStory: StoryState = {
            ...story,
            likes: updatedLikes,
            likeCount: updatedLikes.length,
            liked: !currentlyLiked,
          };
          mergeStoryUpdate(storyStateToApiResponse(fallbackStory));
          toast.success(currentlyLiked ? 'Removed like.' : 'Liked story!');
        } else {
          toast.success('Story like recorded!');
        }
      } finally {
        setLikingStoryId(null);
      }
    },
    [currentUser, likingStoryId, mergeStoryUpdate, encodeStoryId, ensureStoryOnServer, buildStorySnapshot],
  );

  const handleReply = useCallback(async () => {
    if (!currentStory) {
      return;
    }

    const trimmed = replyText.trim();
    if (!trimmed) {
      return;
    }

    if (!currentUser) {
      toast.info('Sign in to reply to stories.');
      return;
    }

    setReplySending(true);
    try {
      const sendReply = async (attempt = 0): Promise<boolean> => {
        const storyIdParam = encodeStoryId(currentStory.id);
        const response = await fetch(`${API_BASE_URL}/stories/${storyIdParam}/reply`, {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({
            authorId: currentUser.id,
            content: trimmed,
            authorSnapshot: {
              id: currentUser.id,
              name: currentUser.name,
              username: currentUser.username,
              avatar: currentUser.avatar,
              ablyClientId: currentUser.ablyClientId ?? currentUser.id,
            },
            ...(attempt > 0 ? { storySnapshot: buildStorySnapshot(currentStory) } : {}),
          }),
        });

        if (response.status === 404 && attempt === 0) {
          const restored = await ensureStoryOnServer(currentStory);
          if (restored) {
              return sendReply(attempt + 1);
          }
        }

        const payload = (await response.json().catch(() => ({}))) as {
          story?: StoryAPIResponse;
          reply?: StoryReplyData;
          error?: string;
        };

        if (!response.ok || !payload?.story) {
          return false;
        }

        mergeStoryUpdate(payload.story);
        setReplyText('');
        toast.success('Reply sent!');

        if (currentStory.userId !== currentUser.id) {
          void sendSupabaseNotification(
            currentStory.userId,
            `${currentUser.name || 'Someone'} replied to your story.`,
          );
        }

        void sendStoryReplyMessage(currentStory, trimmed);
        return true;
      };

      const applied = await sendReply();
      if (!applied) {
        throw new Error('restore');
      }
      } catch {
      if (currentStory && currentUser) {
        const replyId = `offline-${Date.now().toString(36)}`;
        const fallbackReply: StoryReply = {
          id: replyId,
          storyId: currentStory.id,
          authorId: currentUser.id,
          content: trimmed,
          timestamp: new Date().toISOString(),
          author: {
            id: currentUser.id,
            name: currentUser.name,
            username: currentUser.username,
            avatar: currentUser.avatar,
            ablyClientId: currentUser.ablyClientId ?? currentUser.id,
          },
        };
        const fallbackStory: StoryState = {
          ...currentStory,
          replies: [...currentStory.replies, fallbackReply],
        };
        mergeStoryUpdate(storyStateToApiResponse(fallbackStory));
        setReplyText('');
        toast.success('Reply sent!');
        if (currentStory.userId !== currentUser.id) {
          void sendSupabaseNotification(
            currentStory.userId,
            `${currentUser.name || 'Someone'} replied to your story.`,
          );
        }
        void sendStoryReplyMessage(currentStory, trimmed);
      } else {
        toast.success('Reply captured!');
      }
    } finally {
      setReplySending(false);
    }
  }, [
    currentStory,
    currentUser,
    encodeStoryId,
    ensureStoryOnServer,
    mergeStoryUpdate,
    replyText,
    sendStoryReplyMessage,
    buildStorySnapshot,
    sendSupabaseNotification,
  ]);

  const showSkeleton = loading && storiesData.length === 0;

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {error && (
        <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-white/80 flex items-center justify-between gap-4">
          <p className="text-sm">{error}</p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => void fetchStories()}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Try again
          </Button>
        </div>
      )}

      {showSkeleton ? (
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {Array.from({ length: STORY_SKELETON_COUNT }).map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-shrink-0">
              <Skeleton className="w-20 h-20 rounded-full bg-white/10" />
              <Skeleton className="w-16 h-3 bg-white/10" />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {orderedStories.length === 0 && !currentUser ? (
            <div className="text-white/70 text-sm">No stories yet. Check back soon!</div>
          ) : (
            orderedStories.map((story) => {
              const isOwnStory = Boolean(currentUser && story.userId === currentUser.id);
              const isPlaceholder = isOwnStory && story.items.length === 0;
              const ringGradient = story.viewed && !isPlaceholder
                ? 'from-white/30 via-white/20 to-white/30'
                : 'from-pink-500 via-purple-500 to-indigo-500';
              const label = isPlaceholder
                ? 'Create a story'
                : isOwnStory
                ? 'View your story'
                : `View ${story.user.name}'s story`;

              return (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => handleStorySelect(story)}
                  className="relative flex flex-col items-center gap-2 flex-shrink-0 group focus:outline-none transition-transform duration-300 hover:-translate-y-1"
                  aria-label={label}
                >
                  <div className="relative">
                    <div
                      className={`relative p-[3px] rounded-full bg-gradient-to-tr ${ringGradient} transition-all duration-500 ease-out group-hover:shadow-[0_18px_35px_rgba(168,85,247,0.35)] group-hover:scale-[1.03]`}
                    >
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:blur-lg bg-white/25 transition-all duration-500" />
                      <div className="relative p-0.5 rounded-full bg-gradient-to-br from-purple-950/80 via-purple-900/70 to-pink-900/80">
                        <Avatar className="w-16 h-16 border-2 border-white/20 transition-transform duration-500 group-hover:scale-[1.04]">
                          <AvatarImage src={story.user.avatar} />
                          <AvatarFallback>{story.user.name[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {isPlaceholder && (
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center border-2 border-purple-950 shadow-[0_12px_35px_rgba(236,72,153,0.45)] transition-transform duration-300 group-hover:scale-110">
                        <Plus className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    {isOwnStory && !isPlaceholder && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleCreatorOpenChange(true);
                        }}
                        className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-purple-950 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-[0_12px_35px_rgba(236,72,153,0.45)] transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                        aria-label="Add to your story"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <span className="text-white/90 text-sm max-w-[90px] truncate text-center tracking-tight transition-colors duration-300 group-hover:text-white">
                    {isOwnStory ? 'Your Story' : story.user.name}
                  </span>
                </button>
              );
            })
          )}
        </div>
      )}

      <Dialog open={selectedStory !== null} onOpenChange={(open) => !open && setSelectedStory(null)}>
        <DialogContent className="max-w-md h-[90vh] p-0 bg-transparent border-0">
          {currentStory && currentItem && (
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
              <div className="absolute inset-0">
                {currentItem.type === 'video' ? (
                  <>
                    <video
                      key={currentItem.id}
                      ref={storyVideoRef}
                      src={currentItem.url}
                      className="h-full w-full object-contain bg-black"
                      playsInline
                      autoPlay
                      controls={false}
                      muted={isStoryVideoMuted}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60" />
                  </>
                ) : (
                  <>
                    <ImageWithFallback src={currentItem.url} alt="Story" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
                  </>
                )}
              </div>

              <div className="absolute top-0 left-0 right-0 p-4 z-10">
                <div className="flex gap-1">
                  {currentStory.items.map((item, index) => {
                    const isActive = index === currentItemIndex;
                    const isCompleted = index < currentItemIndex;
                    const widthPercent =
                      isCompleted || (isActive && item.type !== 'video')
                        ? undefined
                        : isActive && item.type === 'video'
                        ? Math.min(Math.max(storyVideoProgress, 0), 1) * 100
                        : undefined;
                    const progressClass = [
                      'h-full bg-white transition-all duration-300',
                      isCompleted ? 'w-full' : '',
                      !isActive && !isCompleted ? 'w-0' : '',
                      isActive && item.type !== 'video' ? 'w-full animate-progress' : '',
                    ]
                      .filter(Boolean)
                      .join(' ');

                    return (
                      <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className={progressClass}
                          style={
                            widthPercent !== undefined ? { width: `${widthPercent}%` } : undefined
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {currentItem.type === 'video' && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={toggleStoryVideoMute}
                    className="text-white hover:bg-white/20"
                  >
                    {isStoryVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </Button>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSelectedStory(null)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="absolute top-6 left-0 right-0 px-4 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-white/50">
                      <AvatarImage src={currentStory.user.avatar} />
                      <AvatarFallback>{currentStory.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white">{currentStory.user.name}</div>
                      <div className="text-white/70 text-sm">{formatRelativeTime(currentItem.timestamp)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-0 top-0 bottom-0 w-1/3 z-10 cursor-pointer"
                aria-label="Previous"
              />
              <button
                onClick={handleNext}
                className="absolute right-0 top-0 bottom-0 w-1/3 z-10 cursor-pointer"
                aria-label="Next"
              />

              <Button
                size="sm"
                variant="ghost"
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <div className="space-y-3">
                  {currentStory.replies.length > 0 && (
                    <div className="max-h-40 overflow-y-auto rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur">
                      <div className="space-y-3">
                        {currentStory.replies.map((reply) => (
                          <div key={reply.id} className="flex items-start gap-3">
                            <Avatar className="h-8 w-8 border border-white/20">
                              <AvatarImage src={reply.author?.avatar} />
                              <AvatarFallback>
                                {(reply.author?.name ?? reply.author?.username ?? '?')[0] ?? '?'}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between text-xs text-white/60">
                                <span className="font-medium text-white/90">
                                  {reply.author?.name ?? reply.author?.username ?? 'MoveSplash user'}
                                </span>
                                <span>{formatRelativeTime(reply.timestamp)}</span>
                              </div>
                              <p className="text-sm text-white/90">{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => void handleStoryLike(currentStory)}
                      disabled={likingStoryId === currentStory.id}
                      className={`flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-2 text-sm transition-all duration-200 ${
                        currentStory.liked
                          ? 'border-rose-400/60 text-rose-100 hover:bg-rose-500/20'
                          : 'text-white hover:bg-white/15'
                      } ${likingStoryId === currentStory.id ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {likingStoryId === currentStory.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Heart className={`h-4 w-4 ${currentStory.liked ? 'fill-current' : ''}`} />
                      )}
                      <span>{currentStory.likeCount}</span>
                    </Button>

                    <Input
                      placeholder="Send a reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          void handleReply();
                        }
                      }}
                      disabled={replySending}
                      className="flex-1 min-w-[140px] bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/50"
                    />
                    <Button
                      type="button"
                      onClick={() => void handleReply()}
                      disabled={replySending || !replyText.trim()}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_12px_30px_rgba(168,85,247,0.45)] transition-all duration-200 hover:from-pink-600 hover:to-purple-600 disabled:opacity-70"
                    >
                      {replySending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      <span className="text-sm font-medium">Send</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isCreatorOpen} onOpenChange={handleCreatorOpenChange}>
        <DialogContent className="w-full max-w-[95vw] sm:max-w-2xl lg:max-w-3xl p-0 border-0 bg-transparent shadow-none">
          <div className="relative flex max-h-[88vh] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#24103f] via-[#170d3e] to-[#0b1531] text-white shadow-[0_28px_70px_rgba(147,51,234,0.45)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  'radial-gradient(circle at 20% 20%, rgba(236,72,153,0.3), transparent 60%), radial-gradient(circle at 80% 10%, rgba(96,165,250,0.25), transparent 55%), radial-gradient(circle at 50% 90%, rgba(168,85,247,0.25), transparent 60%)',
              }}
            />
            <div className="relative flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2 sm:space-y-1">
                  <h2 className="text-lg font-semibold sm:text-xl">Create a Story</h2>
                  <p className="text-sm text-white/70">
                    Add photos or short clips to share with your friends.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => handleCreatorOpenChange(false)}
                  className="text-white/70 hover:text-white hover:bg-white/15"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div
                className={`relative rounded-2xl border border-dashed ${
                  isDragging ? 'border-white/60 bg-white/10' : 'border-white/20 bg-white/5'
                } transition-all duration-300 ease-out`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="hidden"
                  onChange={handleFileInputChange}
                />
                <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:px-6 sm:py-10">
                  <div className="rounded-full bg-white/10 p-4 text-white shadow-[0_12px_35px_rgba(236,72,153,0.35)]">
                    <UploadCloud className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-medium">Drag & drop to upload</p>
                    <p className="text-sm text-white/60">
                      You can add up to {MAX_STORY_ITEMS} photos or videos.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/60">
                    <span>Supported: JPG, PNG, MP4</span>
                    <span className="hidden sm:inline">|</span>
                    <span>Recommended length ~ {DEFAULT_VIDEO_DURATION}s</span>
                  </div>
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-900 shadow-[0_12px_30px_rgba(148,63,255,0.35)] hover:bg-white/90"
                  >
                    Browse files
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <Button
                    type="button"
                    onClick={() => void startCamera()}
                    disabled={isCameraActive}
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-900 shadow-[0_12px_30px_rgba(148,63,255,0.35)] transition duration-200 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Camera className="h-4 w-4" />
                    {isCameraActive ? 'Camera Ready' : 'Use Camera'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => void capturePhoto()}
                    disabled={!isCameraActive || isCapturingPhoto}
                    className="flex items-center gap-2 rounded-full border-white/40 bg-purple-900/30 px-4 py-2 text-sm text-white hover:bg-purple-800/50 disabled:opacity-60"
                  >
                    {isCapturingPhoto ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Camera className="h-4 w-4" />
                    )}
                    Capture photo
                  </Button>
                  <Button
                    type="button"
                    variant={isRecordingVideo ? 'destructive' : 'outline'}
                    onClick={() => {
                      if (isRecordingVideo) {
                        stopVideoRecording();
                      } else {
                        startVideoRecording();
                      }
                    }}
                    disabled={!isCameraActive || isCapturingPhoto}
                    className={`flex items-center gap-2 rounded-full border-white/40 px-4 py-2 text-sm ${
                      isRecordingVideo
                        ? 'bg-rose-500/30 text-white hover:bg-rose-500/40'
                        : 'bg-purple-900/30 text-white hover:bg-purple-800/50'
                    } disabled:opacity-60`}
                  >
                    {isRecordingVideo ? <Square className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                    {isRecordingVideo ? 'Stop recording' : 'Record video'}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleFlipCamera}
                    disabled={isCapturingPhoto}
                    className="rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-60"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    {cameraFacingMode === 'user' ? 'Rear camera' : 'Front camera'}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => stopCamera()}
                    disabled={!isCameraActive}
                    className="rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-60"
                  >
                    Stop camera
                  </Button>
                </div>
                {isRecordingVideo && (
                  <div className="text-xs uppercase tracking-[0.2em] text-amber-200">
                    Recording {formatRecordingTime(recordingDuration)} / {formatRecordingTime(DEFAULT_VIDEO_DURATION)}
                  </div>
                )}
                {cameraError && <p className="text-sm text-rose-200">{cameraError}</p>}
                {recordingError && <p className="text-sm text-rose-200">{recordingError}</p>}
                {isCameraActive && (
                  <div className="overflow-hidden rounded-2xl border border-white/20 bg-black/30 shadow-[0_18px_40px_rgba(124,58,237,0.35)]">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="h-48 w-full object-cover sm:h-64"
                    />
                  </div>
                )}
              </div>

              {storyDraft.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {storyDraft.map((item) => (
                    <div
                      key={item.id}
                      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-[0_18px_40px_rgba(124,58,237,0.35)]"
                    >
                      {item.type === 'image' ? (
                        <ImageWithFallback
                          src={item.url}
                          alt="Story preview"
                          className="h-48 w-full object-cover sm:h-56"
                        />
                      ) : (
                        <video
                          src={item.url}
                          className="h-48 w-full object-cover sm:h-56"
                          controls
                          playsInline
                          muted
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 text-sm">
                        <span className="text-white/80 capitalize">{item.type}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveDraftItem(item.id)}
                          className="text-white/80 transition-colors duration-200 hover:text-white hover:bg-white/15"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {creationError && <p className="text-sm text-rose-200">{creationError}</p>}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  {currentUser && (
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-white/25">
                        <AvatarImage src={currentUser.avatar} />
                        <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-white">{currentUser.name}</p>
                        <p className="text-xs text-white/60">@{currentUser.username}</p>
                      </div>
                    </div>
                  )}
                  <div className="h-px w-full bg-white/10 sm:hidden" />
                  <div className="hidden sm:block sm:h-14 sm:w-px bg-white/15" />
                  <div className="min-w-[200px] space-y-1 sm:flex sm:flex-col sm:justify-center sm:space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">Visibility</p>
                    <Select
                      value={storyVisibility}
                      onValueChange={(value) => setStoryVisibility(value as 'friends' | 'public' | 'close_friends')}
                    >
                      <SelectTrigger className="w-full border-white/20 bg-white/10 text-white hover:bg-white/15">
                        <SelectValue placeholder="Choose who can view" />
                      </SelectTrigger>
                      <SelectContent className="border-white/20 bg-slate-950/95 text-white backdrop-blur">
                        {STORY_VISIBILITY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">{option.label}</span>
                              <span className="text-xs text-white/60">{option.description}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:items-end">
                  <span className="text-xs text-white/60">
                    {storyDraft.length} / {MAX_STORY_ITEMS} items selected
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => handleCreatorOpenChange(false)}
                      className="text-white/70 hover:text-white hover:bg-white/10"
                      disabled={isSubmittingStory}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      onClick={() => void handleCreateStory()}
                      disabled={isSubmittingStory || storyDraft.length === 0}
                      className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(168,85,247,0.45)] transition-all duration-300 hover:brightness-110 disabled:opacity-60"
                    >
                      {isSubmittingStory ? 'Posting...' : 'Share Story'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear forwards;
        }
      `}</style>
    </div>
  );
}
