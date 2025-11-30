/* Mohammed Vepari
ID: 5145543
Tuesday November 11th 2025
*/

'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as Ably from 'ably';
import { ChatClient, OrderBy, ChatMessageEventType } from '@ably/chat';
import type {
  ChatMessageEvent,
  ConnectionStatusChange,
  Message as AblyChatMessage,
  Room,
  RoomStatusChange,
} from '@ably/chat';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { 
  Send, 
  Image as ImageIcon, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  Search,
  Plus,
  Paperclip,
  Timer,
  Camera,
  Star,
  File,
  Download,
  Play,
  Pause,
  Check,
  X,
} from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageInspiration } from './MessageInspiration';
import { VoiceRecorder } from './VoiceRecorder';
import { useUser } from '../utils/userContext';
import type { UserData } from '../utils/userContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  timestamp: string;
  senderName?: string;
  senderAvatar?: string;
  image?: string;
  file?: {
    name: string;
    url: string;
    type: string;
    size: number;
  };
  voice?: {
    url: string;
    duration: number;
    mimeType?: string;
    id?: string;
  };
  isSnapStyle?: boolean;
  expiresIn?: number;
  isStarred?: boolean;
}

interface Chat {
  identity: string;
  chatName: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  members: string[];
  isGroup: boolean;
}

type VoicePlayerEntry = {
  audio: HTMLAudioElement;
  source: string;
  objectUrl?: string;
};

type FriendOption = {
  id: string;
  clientId: string;
  name: string;
  username: string;
  avatar: string;
};

interface ChatInterfaceProps {
  onStartCall?: (type: 'audio' | 'video') => void;
  shareDraft?: string | null;
  onShareDraftConsumed?: () => void;
  focusUserId?: string | null;
  onFocusUserConsumed?: () => void;
}

const ABLY_KEY =
  process.env.NEXT_PUBLIC_ABLY_KEY ??
  'TWe31g.j0F01A:-j8adkUcs-AeusvKPMgSFCJKlMb8zCh1pGbt5Zo3CxI';
const DEFAULT_ROOM_ID = 'getting-started';
const VOICE_UPLOAD_ENDPOINT = '/api/voice';
const SUPABASE_FUNCTION_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a14c7986`;
const AUTH_HEADER = `Bearer ${publicAnonKey}`;
const JSON_AUTH_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: AUTH_HEADER,
};

const avatarForId = (id: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(id || 'user')}`;

const dataUrlToBlob = (dataUrl: string): Blob => {
  const [header, base64] = dataUrl.split(',');
  if (!base64) {
    throw new Error('Error: cannot load data');
  }

  const mimeMatch = header.match(/^data:(.*?)(;base64)?$/);
  const mimeType = mimeMatch?.[1] ?? 'application/octet-stream';
  const binary = atob(base64);
  const numberOfBinary = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    numberOfBinary[i] = binary.charCodeAt(i);
  }
  return new Blob([numberOfBinary], { type: mimeType });
};

export function ChatInterface({ onStartCall, shareDraft, onShareDraftConsumed, focusUserId = null, onFocusUserConsumed }: ChatInterfaceProps) {
  const { currentUser, allUsers } = useUser();
  const fallbackClientIdRef = useRef<string>('');
  if (!fallbackClientIdRef.current) {
    fallbackClientIdRef.current = `guest-${Math.random().toString(36).slice(2, 10)}`;
  }
  const fallbackClientId = fallbackClientIdRef.current!;
  const ablyClientId = currentUser?.ablyClientId ?? fallbackClientId;
  const appUserId = currentUser?.id ?? ablyClientId;

  const ablyClientRef = useRef<Ably.Realtime | null>(null);
  const chatClientRef = useRef<ChatClient | null>(null);
  const activeRoomRef = useRef<Room | null>(null);
  const messageSubscriptionRef = useRef<(() => void) | null>(null);
  const connectionStatusUnsubRef = useRef<(() => void) | null>(null);
  const roomStatusUnsubRef = useRef<(() => void) | null>(null);
  const snapTimeoutsRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const persistedMessageIdsRef = useRef<Set<string>>(new Set());

  const clearSnapTimeouts = useCallback(() => {
    snapTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    snapTimeoutsRef.current.clear();
  }, []);

  const mapStoredChatRecord = useCallback((record: unknown): Chat => {
    const data =
      typeof record === 'object' && record !== null ? (record as Record<string, unknown>) : {};

    const idValue = data['id'];
    const identity =
      typeof idValue === 'string' && idValue.trim().length > 0 ? idValue : DEFAULT_ROOM_ID;

    const nameValue = data['name'];
    const avatarValue = data['avatar'];
    const lastMessageValue = data['lastMessage'];
    const lastMessageTimeValue = data['lastMessageTime'];
    const membersValue = data['members'];
    const isGroupValue = data['isGroup'];

    return {
      identity,
      chatName:
        typeof nameValue === 'string' && nameValue.trim().length > 0 ? nameValue : 'Chat',
      avatar:
        typeof avatarValue === 'string' && avatarValue.trim().length > 0
          ? avatarValue
          : avatarForId(identity),
      lastMessage:
        typeof lastMessageValue === 'string' ? lastMessageValue : '',
      lastMessageTime:
        typeof lastMessageTimeValue === 'string' ? lastMessageTimeValue : '',
      members: Array.isArray(membersValue)
        ? membersValue.filter((member): member is string => typeof member === 'string')
        : [],
      isGroup: Boolean(isGroupValue),
    };
  }, []);

  const mapStoredMessageRecord = useCallback((record: unknown, roomId: string): Message => {
    const data =
      typeof record === 'object' && record !== null ? (record as Record<string, unknown>) : {};

    const idValue = data['identity'];
    const timestampValue = data['timestamp'];
    const senderIdValue = data['senderId'];
    const senderNameValue = data['senderName'];
    const senderAvatarValue = data['senderAvatar'];
    const contentValue = data['content'];
    const imageValue = data['image'];
    const fileValue = data['file'];
    const voiceValue = data['voice'];
    const isSnapValue = data['isSnapStyle'];
    const expiresRaw = data['expiresIn'];
    const isStarredValue = data['isStarred'];

    const baseId =
      typeof idValue === 'string' && idValue.trim().length > 0
        ? idValue
        : `${roomId}-${timestampValue ?? Date.now()}`;

    let expiresIn: number | undefined;
    if (typeof expiresRaw === 'number') {
      expiresIn = expiresRaw;
    } else if (typeof expiresRaw === 'string' && expiresRaw.trim().length > 0) {
      const parsed = Number(expiresRaw);
      if (!Number.isNaN(parsed)) {
        expiresIn = parsed;
      }
    }

    const timestamp =
      typeof timestampValue === 'string' && timestampValue
        ? timestampValue
        : new Date().toISOString();

    const image =
      typeof imageValue === 'string' && imageValue.trim().length > 0 ? imageValue : undefined;

    const file =
      fileValue && typeof fileValue === 'object' && fileValue !== null
        ? ({
            name:
              typeof (fileValue as Record<string, unknown>)['name'] === 'string'
                ? ((fileValue as Record<string, unknown>)['name'] as string)
                : 'file',
            url:
              typeof (fileValue as Record<string, unknown>)['url'] === 'string'
                ? ((fileValue as Record<string, unknown>)['url'] as string)
                : '',
            type:
              typeof (fileValue as Record<string, unknown>)['type'] === 'string'
                ? ((fileValue as Record<string, unknown>)['type'] as string)
                : '',
            size: Number((fileValue as Record<string, unknown>)['size'] ?? 0),
          } satisfies Message['file'])
        : undefined;

    const voice =
      voiceValue && typeof voiceValue === 'object' && voiceValue !== null
        ? ({
            url:
              typeof (voiceValue as Record<string, unknown>)['url'] === 'string'
                ? ((voiceValue as Record<string, unknown>)['url'] as string)
                : '',
            duration: Number((voiceValue as Record<string, unknown>)['duration'] ?? 0),
            mimeType:
              typeof (voiceValue as Record<string, unknown>)['mimeType'] === 'string'
                ? ((voiceValue as Record<string, unknown>)['mimeType'] as string)
                : undefined,
            id:
              typeof (voiceValue as Record<string, unknown>)['id'] === 'string'
                ? ((voiceValue as Record<string, unknown>)['id'] as string)
                : undefined,
          } satisfies Message['voice'])
        : undefined;

    return {
      id: baseId,
      chatId: roomId,
      senderId:
        typeof senderIdValue === 'string' && senderIdValue.trim().length > 0
          ? senderIdValue
          : 'unknown',
      senderName:
        typeof senderNameValue === 'string' && senderNameValue.trim().length > 0
          ? senderNameValue
          : undefined,
      senderAvatar:
        typeof senderAvatarValue === 'string' && senderAvatarValue.trim().length > 0
          ? senderAvatarValue
          : undefined,
      content: typeof contentValue === 'string' ? contentValue : '',
      timestamp,
      image,
      file,
      voice,
      isSnapStyle: Boolean(isSnapValue),
      expiresIn,
      isStarred: Boolean(isStarredValue),
    };
  }, []);

  const userDirectory = useMemo(() => {
    const directory = new Map<string, UserData>();
    allUsers.forEach((user) => {
      const key = user.ablyClientId ?? user.id;
      directory.set(key, user);
    });
    return directory;
  }, [allUsers]);

  const defaultChat = useMemo<Chat>(
    () => ({
      identity: DEFAULT_ROOM_ID,
      chatName: 'Getting Started',
      avatar: avatarForId(DEFAULT_ROOM_ID),
      lastMessage: '',
      lastMessageTime: '',
      members: [ablyClientId],
      isGroup: true,
    }),
    [ablyClientId],
  );

  const summarizeMessage = useCallback((message: Message) => {
    if (message.content && message.content.trim().length > 0) {
      return message.content.trim();
    }
    if (message.image) {
      return '📸 Photo';
    }
    if (message.file) {
      return `📎 ${message.file.name}`;
    }
    if (message.voice) {
      return '🎤 Voice message';
    }
    return '';
  }, []);

  const [selectedChat, setSelectedChat] = useState<string | null>(defaultChat.identity);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSnapMode, setIsSnapMode] = useState(false);
  const [snapTimer, setSnapTimer] = useState<number>(10);
  const [showNewChatDialog, setShowNewChatDialog] = useState(false);
  const [newChatName, setNewChatName] = useState('');
  const [newChatMembers, setNewChatMembers] = useState('');
  const [selectedFriendIds, setSelectedFriendIds] = useState<string[]>([]);
  const [friendSearchQuery, setFriendSearchQuery] = useState('');
  const [friendPickerOpen, setFriendPickerOpen] = useState(false);
  const [isGroupChat, setIsGroupChat] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioPlayers = useRef<Record<string, VoicePlayerEntry>>({});
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const [starredMessages, setStarredMessages] = useState<Set<string>>(new Set());
  const [messages, setMessages] = useState<Message[]>([]);
  const [chats, setChats] = useState<Chat[]>([defaultChat]);
  const chatsRef = useRef(chats);

  useEffect(() => {
    chatsRef.current = chats;
  }, [chats]);

  const registeredFriends = useMemo<FriendOption[]>(() => {
    if (!currentUser) {
      return [];
    }

    const unique = new Set<string>();
    const options: FriendOption[] = [];

    currentUser.friendIds.forEach((friendId) => {
      const user = allUsers.get(friendId);
      if (!user) {
        return;
      }

      const canonicalId = user.id;
      if (unique.has(canonicalId)) {
        return;
      }
      unique.add(canonicalId);

      options.push({
        id: canonicalId,
        clientId: user.ablyClientId ?? canonicalId,
        name: user.name,
        username: user.username.startsWith('@') ? user.username : `@${user.username}`,
        avatar: user.avatar ?? avatarForId(user.ablyClientId ?? canonicalId),
      });
    });

    return options.sort((a, b) => a.name.localeCompare(b.name));
  }, [allUsers, currentUser]);

  useEffect(() => {
    setSelectedFriendIds((prev) =>
      prev.filter((id) => registeredFriends.some((friend) => friend.id === id)),
    );
  }, [registeredFriends]);

  const filteredRegisteredFriends = useMemo(
    () =>
      registeredFriends.filter((friend) => {
        const query = friendSearchQuery.trim().toLowerCase();
        if (!query) {
          return true;
        }
        return (
          friend.name.toLowerCase().includes(query) || friend.username.toLowerCase().includes(query)
        );
      }),
    [registeredFriends, friendSearchQuery],
  );

  const selectedFriendDetails = useMemo(
    () =>
      selectedFriendIds
        .map((id) => registeredFriends.find((friend) => friend.id === id))
        .filter((friend): friend is FriendOption => Boolean(friend)),
    [registeredFriends, selectedFriendIds],
  );

  const toggleFriendSelection = useCallback((userId: string) => {
    setSelectedFriendIds((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId],
    );
  }, []);

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [ablyError, setAblyError] = useState<string | null>(null);
  const [chatReady, setChatReady] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<string>('connecting');
  const [roomStatus, setRoomStatus] = useState<string>('idle');

  const ensureDirectChat = useCallback(
    async (targetUserId: string): Promise<string | null> => {
      const friend = allUsers.get(targetUserId) ?? null;
      const targetClientId = friend?.ablyClientId ?? targetUserId;
      if (!targetClientId) {
        toast.error('Unable to open conversation for that user.');
        return null;
      }

      const memberIds = Array.from(new Set([ablyClientId, targetClientId].filter(Boolean))) as string[];

      const existing = chatsRef.current.find(
        (chat) =>
          !chat.isGroup && memberIds.every((member) => chat.members.includes(member)),
      );
      if (existing) {
        return existing.identity;
      }

      const displayName = friend?.name ?? friend?.username ?? `Chat with ${targetUserId.slice(0, 6)}`;

      let persistedChat: Chat | null = null;
      let savedToServer = false;

      try {
        const response = await fetch(`${SUPABASE_FUNCTION_BASE}/chats`, {
          method: 'POST',
          headers: { ...JSON_AUTH_HEADERS },
          body: JSON.stringify({
            name: displayName,
            members: memberIds,
            isGroup: false,
            createdBy: appUserId ?? ablyClientId,
          }),
        });

        if (response.ok) {
          const payload = (await response.json()) as Record<string, unknown>;
          const chatRecord = payload['chat'];
          if (chatRecord) {
            persistedChat = mapStoredChatRecord(chatRecord);
            savedToServer = true;
          }
        } else if (response.status !== 409) {
          throw new Error(`Failed to persist chat (status ${response.status})`);
        }
      } catch (error) {
        console.warn('Unable to persist direct chat', error);
      }

      if (!persistedChat) {
        const sortedKey = memberIds.slice().sort().join('-');
        const fallbackId = chatsRef.current.some((chat) => chat.identity === sortedKey)
          ? `${sortedKey}-${Date.now().toString(36)}`
          : sortedKey;

        persistedChat = {
          identity: fallbackId,
          chatName: displayName,
          avatar: friend?.avatar ?? avatarForId(targetClientId),
          lastMessage: '',
          lastMessageTime: '',
          members: memberIds,
          isGroup: false,
        };
      }

      setChats((prev) => {
        const map = new Map(prev.map((chat) => [chat.identity, chat]));
        map.set(persistedChat!.identity, persistedChat!);
        const next = Array.from(map.values());
        next.sort((a, b) => {
          const aTime = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
          const bTime = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
          return bTime - aTime;
        });
        return next;
      });

      const client = chatClientRef.current;
      if (client) {
        client.rooms.get(persistedChat.identity).catch((error) => {
          console.warn('Unable to ensure Ably room exists', error);
        });
      }

      if (savedToServer) {
        toast.success(`Chat created with ${friend?.name ?? 'friend'}!`);
      }

      return persistedChat.identity;
    },
    [allUsers, ablyClientId, appUserId, mapStoredChatRecord],
  );

  const ensureDirectChatRef = useRef(ensureDirectChat);
  useEffect(() => {
    ensureDirectChatRef.current = ensureDirectChat;
  }, [ensureDirectChat]);

  useEffect(() => {
    if (!focusUserId) {
      return;
    }
    if (!chatReady) {
      return;
    }

    let cancelled = false;

    const openChat = async () => {
      try {
        const chatId = await ensureDirectChatRef.current?.(focusUserId);
        if (!chatId || cancelled) {
          return;
        }
        setSelectedChat(chatId);
        onFocusUserConsumed?.();
      } catch (error) {
        console.error('Error:', error);
        toast.error('Unable to connect, try again later.');
      }
    };

    void openChat();

    return () => {
      cancelled = true;
    };
  }, [focusUserId, chatReady, onFocusUserConsumed]);

  const getSenderProfile = useCallback(
    () => ({
      id: ablyClientId ?? 'guest',
      name: currentUser?.name ?? currentUser?.username ?? appUserId ?? 'Guest',
      username: currentUser?.username,
      avatar:
        currentUser?.avatar ?? (ablyClientId ? avatarForId(ablyClientId) : undefined),
    }),
    [ablyClientId, appUserId, currentUser?.name, currentUser?.username, currentUser?.avatar],
  );

  const buildMetadata = useCallback(
    (extra: Record<string, unknown> = {}) => {
      const senderProfile = getSenderProfile();
      const metadata: Record<string, unknown> = {
        ...extra,
        sender: {
          id: senderProfile.id,
          name: senderProfile.name,
          username: senderProfile.username,
          avatar: senderProfile.avatar,
        },
      };

      if (isSnapMode) {
        metadata.isSnapStyle = true;
        metadata.expiresIn = snapTimer;
      }

      return metadata;
    },
    [getSenderProfile, isSnapMode, snapTimer],
  );

  const uploadVoiceClip = useCallback(async (dataUrl: string, mimeType?: string, duration?: number) => {
    try {
      const response = await fetch(VOICE_UPLOAD_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dataUrl,
          mimeType,
          duration,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Cannot upload audio: (${response.status}): ${errorBody}`);
      }

      const payload: {
        id: string;
        url: string;
        mimeType?: string;
        duration?: number | null;
      } = await response.json();

      return payload;
    } catch (error) {
      console.error('Error uploading voice clip:', error);
      toast.error('Failed to upload voice message');
      return null;
    }
  }, []);

  useEffect(() => {
    if (!shareDraft) {
      return;
    }
    setNewMessage(shareDraft);
    setShowEmojiPicker(false);
    onShareDraftConsumed?.();
    messageInputRef.current?.focus();
  }, [shareDraft, onShareDraftConsumed]);

  useEffect(() => {
    setChats((prevChats) => {
      if (prevChats.some((chat) => chat.identity === defaultChat.identity)) {
        return prevChats.map((chat) =>
          chat.identity === defaultChat.identity ? { ...chat, members: defaultChat.members } : chat,
        );
      }
      return [defaultChat, ...prevChats];
    });
  }, [defaultChat]);

  useEffect(() => {
    let cancelled = false;

    const fetchPersistedChats = async () => {
      if (!appUserId) {
        return;
      }

      try {
        const response = await fetch(
          `${SUPABASE_FUNCTION_BASE}/chats/${encodeURIComponent(appUserId)}`,
          {
            headers: {
              Authorization: AUTH_HEADER,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Failed to load chats (${response.status})`);
        }

        const payload = (await response.json()) as Record<string, unknown>;
        const chatsRaw = payload['chats'];
        if (cancelled) {
          return;
        }
        const serverChats = Array.isArray(chatsRaw) ? chatsRaw : [];
        if (serverChats.length === 0) {
          return;
        }

        setChats((prev) => {
          const byId = new Map(prev.map((chat) => [chat.identity, chat]));
          serverChats.forEach((record) => {
            const mapped = mapStoredChatRecord(record);
            byId.set(mapped.identity, mapped);
          });
          if (!byId.has(defaultChat.identity)) {
            byId.set(defaultChat.identity, defaultChat);
          }
          return Array.from(byId.values()).sort((a, b) => {
            const aTime = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
            const bTime = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
            return bTime - aTime;
          });
        });
      } catch (error) {
        console.warn('Failed to load saved chats', error);
      }
    };

    void fetchPersistedChats();

    return () => {
      cancelled = true;
    };
  }, [appUserId, defaultChat, mapStoredChatRecord]);

  const mapAblyMessage = useCallback(
    (source: AblyChatMessage, roomId: string): Message => {
      const metadata = (source.metadata ?? {}) as Record<string, unknown>;

      const imageValue = metadata['image'];
      const image = typeof imageValue === 'string' ? imageValue : undefined;

      const rawFile = metadata['file'];
      const file =
        rawFile && typeof rawFile === 'object'
          ? {
              name:
                typeof (rawFile as Record<string, unknown>).name === 'string'
                  ? ((rawFile as Record<string, unknown>).name as string)
                  : 'file',
              url:
                typeof (rawFile as Record<string, unknown>).url === 'string'
                  ? ((rawFile as Record<string, unknown>).url as string)
                  : '',
              type:
                typeof (rawFile as Record<string, unknown>).type === 'string'
                  ? ((rawFile as Record<string, unknown>).type as string)
                  : '',
              size: Number((rawFile as Record<string, unknown>).size ?? 0),
            }
          : undefined;

      const rawVoice = metadata['voice'];
      const voice =
        rawVoice && typeof rawVoice === 'object'
          ? {
              url:
                typeof (rawVoice as Record<string, unknown>).url === 'string'
                  ? ((rawVoice as Record<string, unknown>).url as string)
                  : '',
              duration: Number((rawVoice as Record<string, unknown>).duration ?? 0),
              mimeType:
                typeof (rawVoice as Record<string, unknown>).mimeType === 'string'
                  ? ((rawVoice as Record<string, unknown>).mimeType as string)
                  : undefined,
              id:
                typeof (rawVoice as Record<string, unknown>).id === 'string'
                  ? ((rawVoice as Record<string, unknown>).id as string)
                  : undefined,
            }
          : undefined;

      const expiresInRaw = metadata['expiresIn'];
      const expiresIn =
        typeof expiresInRaw === 'number'
          ? expiresInRaw
          : typeof expiresInRaw === 'string'
          ? Number(expiresInRaw)
          : undefined;

      const senderMeta = metadata['sender'];
      const senderNameMeta =
        senderMeta && typeof senderMeta === 'object'
          ? (senderMeta as Record<string, unknown>).name
          : undefined;
      const senderAvatarMeta =
        senderMeta && typeof senderMeta === 'object'
          ? (senderMeta as Record<string, unknown>).avatar
          : undefined;

      const directoryMatch = userDirectory.get(source.clientId);

      return {
        id: source.serial,
        chatId: roomId,
        senderId: source.clientId,
        content: source.text,
        timestamp: source.timestamp.toISOString(),
        image,
        file,
        voice,
        isSnapStyle: Boolean(metadata['isSnapStyle']),
        expiresIn: expiresIn && Number.isFinite(expiresIn) ? expiresIn : undefined,
        isStarred: Boolean(metadata['isStarred']),
        senderName:
          (typeof senderNameMeta === 'string' && senderNameMeta.trim().length > 0
            ? senderNameMeta
            : directoryMatch?.name ?? directoryMatch?.username ?? source.clientId) ?? source.clientId,
        senderAvatar:
          (typeof senderAvatarMeta === 'string' && senderAvatarMeta.trim().length > 0
            ? senderAvatarMeta
            : directoryMatch?.avatar) ?? undefined,
      };
    },
    [userDirectory],
  );

  const persistMessage = useCallback(
    async (message: Message, options?: { force?: boolean }) => {
      const messageId = message.id;
      if (!messageId) {
        return;
      }
      if (persistedMessageIdsRef.current.has(messageId) && !options?.force) {
        return;
      }

      persistedMessageIdsRef.current.add(messageId);

      try {
        await fetch(`${SUPABASE_FUNCTION_BASE}/messages`, {
          method: 'POST',
          headers: { ...JSON_AUTH_HEADERS },
          body: JSON.stringify({
            id: messageId,
            chatId: message.chatId,
            senderId: message.senderId,
            senderName: message.senderName ?? null,
            senderAvatar: message.senderAvatar ?? null,
            content: message.content ?? '',
            image: message.image ?? null,
            file: message.file ?? null,
            voice: message.voice ?? null,
            timestamp: message.timestamp,
            isSnapStyle: message.isSnapStyle ?? false,
            expiresIn:
              typeof message.expiresIn === 'number' && Number.isFinite(message.expiresIn)
                ? message.expiresIn
                : null,
            isStarred: message.isStarred ?? false,
          }),
        });
      } catch (error) {
        console.warn('Failed to persist message', error);
        persistedMessageIdsRef.current.delete(messageId);
      }
    },
    [],
  );

  const removePersistedMessage = useCallback(async (chatId: string, messageId: string) => {
    if (!messageId) {
      return;
    }

    try {
      await fetch(
        `${SUPABASE_FUNCTION_BASE}/messages/${encodeURIComponent(chatId)}/${encodeURIComponent(messageId)}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: AUTH_HEADER,
          },
        },
      );
    } catch (error) {
      console.warn('Failed to delete persisted message', error);
    } finally {
      persistedMessageIdsRef.current.delete(messageId);
    }
  }, []);

  const handleIncomingMessage = useCallback(
    (event: ChatMessageEvent, roomId: string) => {
      if (event.type === ChatMessageEventType.Deleted) {
        const timeout = snapTimeoutsRef.current.get(event.message.serial);
        if (timeout) {
          clearTimeout(timeout);
          snapTimeoutsRef.current.delete(event.message.serial);
        }
        setMessages((prev) => prev.filter((message) => message.id !== event.message.serial));
        void removePersistedMessage(roomId, event.message.serial);
        return;
      }

      const mapped = mapAblyMessage(event.message, roomId);

      if (mapped.isSnapStyle && mapped.expiresIn) {
        const existingTimeout = snapTimeoutsRef.current.get(mapped.id);
        if (existingTimeout) {
          clearTimeout(existingTimeout);
        }
        const timeout = setTimeout(async () => {
          const room = activeRoomRef.current;
          if (!room) {
            return;
          }

          try {
            await room.messages.delete(event.message.serial);
          } catch (error) {
            console.warn('Failed to auto-delete snap message', error);
          } finally {
            snapTimeoutsRef.current.delete(mapped.id);
          }
        }, mapped.expiresIn * 1000);
        snapTimeoutsRef.current.set(mapped.id, timeout);
      }

      setMessages((prev) => {
        const others = prev.filter((message) => message.id !== mapped.id);
        const next = [...others, mapped];
        next.sort(
          (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
        );
        return next;
      });

      const summary = summarizeMessage(mapped);
      const lastMessageText = summary
        ? (mapped.senderName ? `${mapped.senderName}: ` : '') + summary
        : mapped.senderName ?? '';

      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.identity === roomId
            ? {
                ...chat,
                lastMessage: lastMessageText,
                lastMessageTime: event.message.timestamp.toISOString(),
              }
            : chat,
        ),
      );

      void persistMessage(mapped);
    },
    [mapAblyMessage, summarizeMessage, persistMessage, removePersistedMessage],
  );

  useEffect(() => {
    if (!ABLY_KEY) {
      setAblyError('Missing Ably configuration');
      return;
    }

    setChatReady(false);
    setAblyError(null);

    const realtime = new Ably.Realtime({ key: ABLY_KEY, clientId: ablyClientId });
    ablyClientRef.current = realtime;

    const client = new ChatClient(realtime);
    chatClientRef.current = client;
    setChatReady(true);

    const { off } = client.connection.onStatusChange((change: ConnectionStatusChange) => {
      setConnectionStatus(change.current);
    });
    connectionStatusUnsubRef.current = off;

    return () => {
      connectionStatusUnsubRef.current?.();
      connectionStatusUnsubRef.current = null;

      messageSubscriptionRef.current?.();
      messageSubscriptionRef.current = null;

      roomStatusUnsubRef.current?.();
      roomStatusUnsubRef.current = null;

      const shutdown = async () => {
        clearSnapTimeouts();
        try {
          if (activeRoomRef.current) {
            await client.rooms.release(activeRoomRef.current.name);
            activeRoomRef.current = null;
          }
        } catch (error) {
          console.warn('Failed to release Ably room', error);
        }

        try {
          await realtime.close();
        } catch (error) {
          console.warn('Failed to close Ably Realtime client', error);
        }

        if (ablyClientRef.current === realtime) {
          ablyClientRef.current = null;
        }
        if (chatClientRef.current === client) {
          chatClientRef.current = null;
        }
      };

      void shutdown();
    };
  }, [ablyClientId, clearSnapTimeouts]);

  useEffect(() => {
    if (!chatReady || !selectedChat) {
      return;
    }

    let cancelled = false;
    const joinRoom = async () => {
      const client = chatClientRef.current;
      if (!client) {
        return;
      }

      setLoading(true);
      setAblyError(null);
      setMessages([]);
      persistedMessageIdsRef.current = new Set();

      messageSubscriptionRef.current?.();
      messageSubscriptionRef.current = null;
      roomStatusUnsubRef.current?.();
      roomStatusUnsubRef.current = null;

      if (activeRoomRef.current && activeRoomRef.current.name !== selectedChat) {
        try {
          await client.rooms.release(activeRoomRef.current.name);
        } catch (error) {
          console.warn('Failed to release previous Ably room', error);
        }
        activeRoomRef.current = null;
        clearSnapTimeouts();
      }

      try {
        const room = await client.rooms.get(selectedChat);
        activeRoomRef.current = room;
        clearSnapTimeouts();

        const { off } = room.onStatusChange((change: RoomStatusChange) => {
          setRoomStatus(change.current);
        });
        roomStatusUnsubRef.current = off;

        const storedById = new Map<string, Message>();
        try {
          const response = await fetch(
            `${SUPABASE_FUNCTION_BASE}/messages/${encodeURIComponent(selectedChat)}`,
            {
              headers: {
                Authorization: AUTH_HEADER,
              },
            },
          );

          if (response.ok) {
            const payload = (await response.json()) as Record<string, unknown>;
            const storedRecordsRaw = payload['messages'];
            const storedRecords = Array.isArray(storedRecordsRaw) ? storedRecordsRaw : [];
            storedRecords
              .map((record) => mapStoredMessageRecord(record, selectedChat))
              .forEach((message) => storedById.set(message.id, message));
          }
        } catch (error) {
          console.warn('Failed to load stored messages', error);
        }

        const history = await room.messages.history({
          orderBy: OrderBy.OldestFirst,
          limit: 50,
        });

        const newHistoryMessages: Message[] = [];
        history.items
          .filter((item) => !item.isDeleted)
          .map((item) => mapAblyMessage(item, selectedChat))
          .forEach((message) => {
            const existing = storedById.get(message.id);
            if (existing) {
              storedById.set(message.id, { ...existing, ...message });
            } else {
              storedById.set(message.id, message);
              newHistoryMessages.push(message);
            }
          });

        const combinedMessages = Array.from(storedById.values()).sort(
          (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
        );

        persistedMessageIdsRef.current = new Set(storedById.keys());

        if (!cancelled) {
          setMessages(combinedMessages);
          if (combinedMessages.length > 0) {
            const last = combinedMessages[combinedMessages.length - 1];
            const summary = summarizeMessage(last);
            const text = summary
              ? (last.senderName ? `${last.senderName}: ` : '') + summary
              : last.senderName ?? '';
            setChats((prevChats) =>
              prevChats.map((chat) =>
                chat.identity === selectedChat
                  ? {
                      ...chat,
                      lastMessage: text,
                      lastMessageTime: last.timestamp,
                    }
                  : chat,
              ),
            );
          }
        }

        newHistoryMessages.forEach((message) => {
          void persistMessage(message, { force: true });
        });

        const { unsubscribe } = room.messages.subscribe((event: ChatMessageEvent) => {
          handleIncomingMessage(event, selectedChat);
        });
        messageSubscriptionRef.current = unsubscribe;

        await room.attach();
        if (!cancelled) {
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to join Ably room', error);
        if (!cancelled) {
          setAblyError('Failed to join chat room. Please try again.');
          setLoading(false);
        }
      }
    };

    void joinRoom();

    return () => {
      cancelled = true;
    };
  }, [
    chatReady,
    selectedChat,
    handleIncomingMessage,
    mapAblyMessage,
    summarizeMessage,
    clearSnapTimeouts,
    mapStoredMessageRecord,
    persistMessage,
  ]);

  const emojiCategories = {
    'Smileys': ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙'],
    'Gestures': ['👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '👇', '☝️', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✊'],
    'Hearts': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️'],
    'Celebration': ['🎉', '🎊', '🎈', '🎁', '🎀', '🎂', '🍰', '🧁', '🥳', '🎆', '🎇', '✨', '🎃', '🎄', '🎋', '🎍', '🎎', '🎏', '🎐', '🎑'],
    'Activities': ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🎮', '🕹️', '🎲', '🎯']
  };

  useEffect(() => {
    return () => {
      Object.values(audioPlayers.current).forEach(({ audio, objectUrl }) => {
        audio.pause();
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
      });
      audioPlayers.current = {};
      clearSnapTimeouts();
    };
  }, [clearSnapTimeouts]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (ablyError) {
      toast.error(ablyError);
    }
  }, [ablyError]);

  useEffect(() => {
    let cancelled = false;

    const syncPlayers = async () => {
      const voiceMessages = messages.filter((msg) => msg.voice?.url);
      const currentIds = new Set(voiceMessages.map((msg) => msg.id));

      Object.entries(audioPlayers.current).forEach(([id, entry]) => {
        if (!currentIds.has(id)) {
          entry.audio.pause();
          entry.audio.onended = null;
          entry.audio.onerror = null;
          if (entry.objectUrl) {
            URL.revokeObjectURL(entry.objectUrl);
          }
          delete audioPlayers.current[id];
        }
      });

      for (const msg of voiceMessages) {
        if (cancelled || !msg.voice?.url) {
          continue;
        }

        const existing = audioPlayers.current[msg.id];
        if (existing && existing.source === msg.voice.url) {
          continue;
        }

        if (existing) {
          existing.audio.pause();
          existing.audio.onended = null;
          existing.audio.onerror = null;
          if (existing.objectUrl) {
            URL.revokeObjectURL(existing.objectUrl);
          }
          delete audioPlayers.current[msg.id];
        }

        try {
          let blob: Blob | null = null;

          if (msg.voice.url.startsWith('data:')) {
            blob = dataUrlToBlob(msg.voice.url);
          } else {
            const response = await fetch(msg.voice.url);
            if (!response.ok) {
              throw new Error(`Failed to load voice audio (${response.status})`);
            }
            const contentType = response.headers.get('content-type') ?? '';
            if (contentType.includes('application/json')) {
              const payload = await response.json();
              if (payload?.dataUrl) {
                blob = dataUrlToBlob(payload.dataUrl as string);
              } else {
                throw new Error('Voice payload missing dataUrl');
              }
            } else {
              blob = await response.blob();
            }
          }

          if (!blob) {
            throw new Error('Unable to resolve voice blob');
          }
          if (cancelled) {
            return;
          }

          const objectUrl = URL.createObjectURL(blob);
          if (cancelled) {
            URL.revokeObjectURL(objectUrl);
            return;
          }

          const audio = new Audio(objectUrl);
          audio.preload = 'auto';
          audio.volume = 1;
          audio.onended = () => {
            setPlayingVoice((prev) => (prev === msg.id ? null : prev));
          };
          audio.onerror = (event) => {
            console.warn('Unable to play voice message', event);
          };

          audioPlayers.current[msg.id] = {
            audio,
            source: msg.voice.url,
            objectUrl,
          };

          if (playingVoice === msg.id) {
            audio.currentTime = 0;
            const playPromise = audio.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch((error) => {
                console.warn('Audio playback prevented:', error);
              });
            }
          }
        } catch (error) {
          if (cancelled) {
            continue;
          }
          console.error('Failed to prepare voice message audio', error);
        }
      }
    };

    syncPlayers();

    return () => {
      cancelled = true;
    };
  }, [messages, playingVoice]);

  useEffect(() => {
    Object.entries(audioPlayers.current).forEach(([id, entry]) => {
      const { audio } = entry;
      if (id !== playingVoice) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (!playingVoice) {
      return;
    }

    const activeEntry = audioPlayers.current[playingVoice];
    if (!activeEntry) {
      return;
    }

    const { audio } = activeEntry;
    if (audio.paused) {
      audio.currentTime = 0;
    }
    const playAudio = () => {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((error) => {
          console.warn('Audio playback prevented:', error);
        });
      }
    };

    if (audio.readyState >= 2) {
      playAudio();
    } else {
      const handleCanPlay = () => {
        audio.removeEventListener('canplay', handleCanPlay);
        playAudio();
      };
      audio.addEventListener('canplay', handleCanPlay, { once: true });
      audio.load();
    }

    return () => {
      audio.pause();
    };
  }, [playingVoice]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedChat || sending) {
      return;
    }

    const room = activeRoomRef.current;
    if (!room) {
      toast.error('Chat is still connecting. Please try again.');
      return;
    }

    setSending(true);
    try {
      const metadata = buildMetadata();

      await room.messages.send({
        text: newMessage,
        metadata,
      });

      setNewMessage('');

      if (isSnapMode) {
        toast.success(`Snap sent! Disappears in ${snapTimer}s ⏱️`);
      } else {
        toast.success('Message sent! 📤');
      }
    } catch (error) {
      console.error('Error sending message via Ably:', error);
      toast.error('Failed to send message');
    } finally {
      setSending(false);
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setNewMessage(newMessage + emoji);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedChat || sending) return;

    const file = event.target.files?.[0];
    const room = activeRoomRef.current;
    if (!file) {
      return;
    }
    if (!room) {
      toast.error('Chat is still connecting. Please try again.');
      return;
    }

    setSending(true);
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
      const metadata = buildMetadata({
        image: e.target?.result as string,
      });

      await room.messages.send({
        text: '',
        metadata,
      });

        toast.success('Photo sent! 📸');
      } catch (error) {
        console.error('Error sending image via Ably:', error);
        toast.error('Failed to send image');
      } finally {
        setSending(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    };
    reader.onerror = () => {
      toast.error('Failed to read image file');
      setSending(false);
    };
    reader.readAsDataURL(file);
  };

  const handleCreateChat = async () => {
    const pickedMemberIds = selectedFriendDetails.map((friend) => friend.clientId);
    const manualMembers = newChatMembers
      .split(',')
      .map((member) => member.trim())
      .filter((member) => member.length > 0);

    const allMembers = Array.from(
      new Set([ablyClientId, ...pickedMemberIds, ...manualMembers].filter(Boolean)),
    ) as string[];

    if (allMembers.length <= 1) {
      toast.error('Pick at least one registered friend or add another member ID.');
      return;
    }

    const trimmedName = newChatName.trim();
    const fallbackName =
      selectedFriendDetails.length === 1
        ? selectedFriendDetails[0].name
        : selectedFriendDetails.length > 1
        ? `${selectedFriendDetails[0].name.split(' ')[0]} + ${selectedFriendDetails.length - 1} more`
        : 'New Chat';
    const chatNameToUse = trimmedName || fallbackName;

    try {
      const createdBy = appUserId ?? ablyClientId;

      let persistedChat: Chat | null = null;
      let isDuplicate = false;
      let savedToServer = false;

      if (createdBy) {
        try {
          const response = await fetch(`${SUPABASE_FUNCTION_BASE}/chats`, {
            method: 'POST',
            headers: { ...JSON_AUTH_HEADERS },
            body: JSON.stringify({
              name: chatNameToUse,
              members: allMembers,
              isGroup: isGroupChat || allMembers.length > 2,
              createdBy,
            }),
          });

          if (response.ok) {
            const payload = (await response.json()) as Record<string, unknown>;
            const chatRecord = payload['chat'];
            if (chatRecord !== undefined) {
              persistedChat = mapStoredChatRecord(chatRecord);
              isDuplicate = Boolean(payload['isDuplicate']);
              savedToServer = true;
            }
          } else {
            throw new Error(`Failed to persist chat (${response.status})`);
          }
        } catch (error) {
          console.warn('Unable to persist chat, falling back to local state', error);
        }
      }

      if (!persistedChat) {
        const slugBase = chatNameToUse
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
        const fallbackId = `${slugBase || 'chat'}-${Date.now().toString(36)}`;
        const roomId = chats.some((chat) => chat.identity === fallbackId)
          ? `${fallbackId}-${Math.random().toString(36).slice(2, 8)}`
          : fallbackId;

        const primaryAvatar =
          selectedFriendDetails[0]?.avatar ??
          (pickedMemberIds[0] ? avatarForId(pickedMemberIds[0]) : avatarForId(roomId));

        persistedChat = {
          identity: roomId,
          chatName: chatNameToUse,
          avatar: primaryAvatar,
          lastMessage: '',
          lastMessageTime: '',
          members: allMembers,
          isGroup: isGroupChat || allMembers.length > 2,
        };
      }

      setChats((prev) => {
        const byId = new Map(prev.map((chat) => [chat.identity, chat]));
        byId.set(persistedChat!.identity, persistedChat!);
        return Array.from(byId.values()).sort((a, b) => {
          const aTime = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
          const bTime = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
          return bTime - aTime;
        });
      });

      setSelectedChat(persistedChat.identity);
      setShowNewChatDialog(false);
      setNewChatName('');
      setNewChatMembers('');
      setSelectedFriendIds([]);
      setFriendSearchQuery('');
      setFriendPickerOpen(false);
      setIsGroupChat(false);

      if (isDuplicate) {
        toast.success('Chat already exists. Opening it now!');
      } else if (savedToServer) {
        toast.success('Chat created and saved! 🎉');
      } else {
        toast.success('Chat created! 🎉');
      }

      const client = chatClientRef.current;
      if (client) {
        client.rooms.get(persistedChat.identity).catch((error) => {
          console.warn('Unable to start chat room', error);
        });
      }
    } catch (error) {
      console.error('Error creating chat:', error);
      toast.error('Chat has not been created');
    }
  };

  const handleCall = (type: 'audio' | 'video') => {
    const currentChat = chats.find(chat => chat.identity === selectedChat);
    toast.success(`Starting ${type} call with ${currentChat?.chatName}...`);
    if (onStartCall) {
      onStartCall(type);
    }
  };

  const handleDocumentUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedChat || sending) return;

    const file = event.target.files?.[0];
    const room = activeRoomRef.current;
    if (!file) {
      return;
    }
    if (!room) {
      toast.error('Chat is still connecting. Please try again.');
      return;
    }

    setSending(true);
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const metadata = buildMetadata({
          file: {
            name: file.name,
            url: e.target?.result as string,
            type: file.type,
            size: file.size,
          },
        });

        await room.messages.send({
          text: '',
          metadata,
        });

        toast.success('File sent! 📎');
      } catch (error) {
        console.error('Error sending file via Ably:', error);
        toast.error('Failed to send file');
      } finally {
        setSending(false);
        if (documentInputRef.current) {
          documentInputRef.current.value = '';
        }
      }
    };
    reader.onerror = () => {
      toast.error('Failed to read file');
      setSending(false);
    };
    reader.readAsDataURL(file);
  };

  const handleVoiceSend = async (audioData: string, duration: number, mimeType?: string) => {
    if (!selectedChat || sending) return;

    const room = activeRoomRef.current;
    if (!room) {
      toast.error('Chat is still connecting. Please try again.');
      return;
    }

    setSending(true);
    try {
      const uploadResult = await uploadVoiceClip(audioData, mimeType, duration);
      if (!uploadResult) {
        return;
      }

      const voiceMetadata: Record<string, unknown> = {
        url: uploadResult.url,
        duration,
      };
      if (uploadResult.mimeType || mimeType) {
        voiceMetadata.mimeType = uploadResult.mimeType ?? mimeType;
      }
      if (uploadResult.id) {
        voiceMetadata.id = uploadResult.id;
      }

      const metadata = buildMetadata({
        voice: voiceMetadata,
      });

      await room.messages.send({
        text: '',
        metadata,
      });

      toast.success('Voice message sent! 🎤');
    } catch (error) {
      console.error('Error sending voice message via Ably:', error);
      toast.error('Failed to send voice message');
    } finally {
      setSending(false);
    }
  };

  const handleToggleStar = async (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (!message) return;

    const newStarred = new Set(starredMessages);
    const willBeStarred = !newStarred.has(messageId);
    
    if (willBeStarred) {
      newStarred.add(messageId);
      toast.success('Message starred! ⭐');
    } else {
      newStarred.delete(messageId);
      toast.success('Message unstarred');
    }
    setStarredMessages(newStarred);
    
    // Update message starred status locally
    setMessages((msgs) => msgs.map(msg => 
      msg.id === messageId ? { ...msg, isStarred: willBeStarred } : msg
    ));

    try {
      await fetch(
        `${SUPABASE_FUNCTION_BASE}/messages/${encodeURIComponent(message.chatId)}/${encodeURIComponent(messageId)}/star`,
        {
          method: 'PUT',
          headers: { ...JSON_AUTH_HEADERS },
          body: JSON.stringify({ isStarred: willBeStarred }),
        },
      );
    } catch (error) {
      console.warn('Failed to persist starring change', error);
    }
  };

  const handlePlayVoice = (messageId: string) => {
    if (playingVoice === messageId) {
      setPlayingVoice(null);
      return;
    }

    const entry = audioPlayers.current[messageId];
    if (!entry) {
      setPlayingVoice(messageId);
      return;
    }

    Object.entries(audioPlayers.current).forEach(([id, other]) => {
      if (id !== messageId) {
        other.audio.pause();
        other.audio.currentTime = 0;
      }
    });
    entry.audio.currentTime = 0;
    const playPromise = entry.audio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch((error) => {
        console.warn('Audio playback prevented:', error);
      });
    }
    setPlayingVoice(messageId);
  };

  const connectionHealthy =
    connectionStatus === 'connected' && roomStatus === 'attached';
  const connectionSummary = connectionHealthy
    ? 'Live'
    : `Status: ${connectionStatus} / ${roomStatus}`;

  const currentChat = chats.find(chat => chat.identity === selectedChat);
  const quickEmojis = ['😊', '❤️', '🔥', '👍', '😂', '🎉', '✨', '💯'];

  const filteredChats = chats.filter(chat =>
    chat.chatName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-white text-xl">Loading messages... 💬</div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-80px)] min-h-0 flex gap-6 max-w-7xl mx-auto">
      {/* Chat List Sidebar */}
      <Card className="w-96 min-h-0 backdrop-blur-xl bg-white/10 border-white/20 flex flex-col overflow-hidden">
        {/* Search Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl">Messages</h2>
            <Button 
              size="sm"
              onClick={() => setShowNewChatDialog(!showNewChatDialog)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* New Chat Dialog */}
          {showNewChatDialog && (
            <div className="mb-4 p-4 bg-white/10 rounded-lg space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Chat name (optional)..."
                  value={newChatName}
                  onChange={(e) => setNewChatName(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
                <p className="text-xs text-white/60">
                  Leave blank and we will use your registered friend selections to name the chat.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/70">Pick friends registered on MoveY Splash</p>
                  <span className="text-xs text-white/50">
                    {registeredFriends.length} available
                  </span>
                </div>
                <Popover open={friendPickerOpen} onOpenChange={setFriendPickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 border-white/20 text-white justify-between"
                    >
                      <span className="text-sm">
                        {selectedFriendIds.length > 0
                          ? `Selected ${selectedFriendIds.length} friend${selectedFriendIds.length > 1 ? 's' : ''}`
                          : 'Search registered friends'}
                      </span>
                      <Search className="w-4 h-4 opacity-70" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full max-w-sm p-0 backdrop-blur-xl bg-white/10 border-white/20">
                    <div className="p-3 space-y-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                        <Input
                          autoFocus
                          value={friendSearchQuery}
                          onChange={(e) => setFriendSearchQuery(e.target.value)}
                          placeholder="Search registered friends..."
                          className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <ScrollArea className="max-h-64">
                        <div className="space-y-2 pr-1">
                          {filteredRegisteredFriends.length === 0 ? (
                            <div className="text-white/60 text-sm px-2 py-3">
                              No registered friends found.
                            </div>
                          ) : (
                            filteredRegisteredFriends.map((friend) => {
                              const isSelected = selectedFriendIds.includes(friend.id);
                              return (
                                <button
                                  key={friend.id}
                                  onClick={() => toggleFriendSelection(friend.id)}
                                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                                    isSelected ? 'bg-white/15' : 'hover:bg-white/10'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <Avatar className="w-10 h-10 border-2 border-white/10">
                                      <AvatarImage src={friend.avatar} />
                                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-left">
                                      <div className="text-white">{friend.name}</div>
                                      <div className="text-white/60 text-xs">{friend.username}</div>
                                    </div>
                                  </div>
                                  <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                      isSelected
                                        ? 'bg-green-400 text-black'
                                        : 'border border-white/30 text-white/70'
                                    }`}
                                  >
                                    {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                  </div>
                                </button>
                              );
                            })
                          )}
                        </div>
                      </ScrollArea>
                    </div>
                  </PopoverContent>
                </Popover>

                {selectedFriendDetails.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedFriendDetails.map((friend) => (
                      <div
                        key={friend.id}
                        className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1"
                      >
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={friend.avatar} />
                          <AvatarFallback>{friend.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-white text-sm">{friend.name}</span>
                        <button
                          onClick={() => toggleFriendSelection(friend.id)}
                          className="text-white/60 hover:text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {registeredFriends.length === 0 && (
                  <p className="text-xs text-white/60">
                    No friends have registered yet. Add friends from the Friends tab first.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  placeholder="Add by user ID (optional)..."
                  value={newChatMembers}
                  onChange={(e) => setNewChatMembers(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
                <p className="text-xs text-white/60">
                  Use this if you need to invite someone who is registered but not in your friends list yet.
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleCreateChat}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
                >
                  Create
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setShowNewChatDialog(false);
                    setSelectedFriendIds([]);
                    setFriendSearchQuery('');
                    setNewChatName('');
                    setNewChatMembers('');
                  }}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Chats List */}
        <ScrollArea className="flex-1 h-full overflow-y-auto">
          {filteredChats.length === 0 ? (
            <div className="p-8 text-center text-white/50">
              <p className="mb-2">No chats yet</p>
              <p className="text-sm">Click + to start a new conversation</p>
            </div>
          ) : (
            <div className="p-2">
              {filteredChats.map((chat) => (
                <button
                  key={chat.identity}
                  onClick={() => setSelectedChat(chat.identity)}
                  className={`w-full p-3 rounded-xl mb-2 transition-all ${
                    selectedChat === chat.identity
                      ? 'bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-xl'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-white/20">
                      <AvatarImage src={chat.avatar} />
                      <AvatarFallback>{chat.chatName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white truncate">{chat.chatName}</h3>
                        <span className="text-white/40 text-xs">
                          {chat.lastMessageTime
                            ? new Date(chat.lastMessageTime).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })
                            : '--:--'}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm truncate">
                        {chat.lastMessage || 'No messages yet'}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </Card>

      {/* Main Chat Area */}
      <Card className="flex-1 min-h-0 backdrop-blur-xl bg-white/10 border-white/20 flex flex-col overflow-hidden">
        {!selectedChat || !currentChat ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-2xl mb-2">Select a chat to start messaging</h3>
              <p className="text-white/60">Choose a conversation or create a new one</p>
            </div>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border-2 border-white/20">
                  <AvatarImage src={currentChat.avatar} />
                  <AvatarFallback>{currentChat.chatName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white">{currentChat.chatName}</h3>
                  {currentChat.isGroup && (
                    <p className="text-white/60 text-sm">{currentChat.members.length} members</p>
                  )}
                  <p
                    className={`text-sm ${
                      connectionHealthy ? 'text-emerald-300' : 'text-white/60'
                    }`}
                  >
                    {connectionSummary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCall('audio')}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCall('video')}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Video className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 h-full overflow-y-auto p-6">
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-white/50 py-8">
                    <p>No messages yet. Start the conversation! 💬</p>
                  </div>
                ) : (
                  messages.map((message) => {
                    const isMe = message.senderId === ablyClientId;
                    const isStarred = starredMessages.has(message.id) || message.isStarred;
                    return (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${isMe ? 'flex-row-reverse' : 'flex-row'} group`}
                      >
                        {!isMe && (
                          <Avatar className="w-8 h-8 border-2 border-white/20 flex-shrink-0">
                            <AvatarImage src={message.senderAvatar ?? avatarForId(message.senderId)} />
                            <AvatarFallback>
                              {(message.senderName ?? message.senderId ?? 'U')[0] ?? 'U'}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div className={`flex-1 max-w-[70%] ${isMe ? 'flex flex-col items-end' : ''}`}>
                          {!isMe && message.senderName && (
                            <p className="text-xs text-white/50 mb-1">{message.senderName}</p>
                          )}
                          {/* Image Message */}
                          {message.image && (
                            <div className={`rounded-2xl overflow-hidden mb-2 relative ${
                              message.isSnapStyle 
                                ? 'border-4 border-yellow-400' 
                                : ''
                            }`}>
                              <ImageWithFallback
                                src={message.image}
                                alt="Shared image"
                                className="w-full max-w-md rounded-xl"
                              />
                              {message.isSnapStyle && message.expiresIn && (
                                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                                  <Timer className="w-3 h-3" />
                                  {message.expiresIn}s
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* File Message */}
                          {message.file && (
                            <div className={`rounded-2xl px-4 py-3 mb-2 ${
                              isMe
                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                : 'bg-white/10 backdrop-blur-xl text-white'
                            }`}>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                  <File className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="truncate">{message.file.name}</p>
                                  <p className="text-xs opacity-70">
                                    {(message.file.size / 1024).toFixed(2)} KB
                                  </p>
                                </div>
                                <a
                                  href={message.file.url}
                                  download={message.file.name}
                                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                                >
                                  <Download className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          )}

                          {/* Voice Message */}
                          {message.voice && (
                            <div className={`rounded-2xl px-4 py-3 mb-2 min-w-[200px] ${
                              isMe
                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                : 'bg-white/10 backdrop-blur-xl text-white'
                            }`}>
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => handlePlayVoice(message.id)}
                                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                >
                                  {playingVoice === message.id ? (
                                    <Pause className="w-5 h-5" />
                                  ) : (
                                    <Play className="w-5 h-5 ml-0.5" />
                                  )}
                                </button>
                                <div className="flex-1">
                                  <div className="flex items-center gap-1 h-6">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                      <div
                                        key={i}
                                        className={`w-1 bg-white/50 rounded-full ${
                                          playingVoice === message.id ? 'animate-pulse' : ''
                                        }`}
                                        style={{
                                          height: `${Math.random() * 60 + 40}%`,
                                          animationDelay: `${i * 50}ms`
                                        }}
                                      ></div>
                                    ))}
                                  </div>
                                  <p className="text-xs opacity-70 mt-1">
                                    {Math.floor(message.voice.duration / 60)}:{(message.voice.duration % 60).toString().padStart(2, '0')}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Text Message */}
                          {message.content && (
                            <div className={`rounded-2xl px-4 py-3 relative ${
                              isMe
                                ? message.isSnapStyle
                                  ? 'bg-yellow-400 text-black'
                                  : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                : 'bg-white/10 backdrop-blur-xl text-white'
                            } ${message.isSnapStyle ? 'border-2 border-yellow-400' : ''}`}>
                              <p className="break-words">{message.content}</p>
                              {message.isSnapStyle && message.expiresIn && (
                                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                                  <Timer className="w-3 h-3" />
                                  {message.expiresIn}s
                                </div>
                              )}
                            </div>
                          )}

                          {/* Message Footer with Star */}
                          <div className="flex items-center gap-2 mt-1">
                            <div className="text-white/40 text-xs">
                              {new Date(message.timestamp).toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </div>
                            <button
                              onClick={() => handleToggleStar(message.id)}
                              className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:scale-125 ${
                                isStarred ? 'opacity-100' : ''
                              }`}
                            >
                              <Star
                                className={`w-4 h-4 ${
                                  isStarred 
                                    ? 'fill-yellow-400 text-yellow-400' 
                                    : 'text-white/40 hover:text-white/60'
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Snap Mode Toggle */}
            <div className="px-6 py-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSnapMode(!isSnapMode)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                      isSnapMode 
                        ? 'bg-yellow-400 text-black' 
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">Snap Mode</span>
                    {isSnapMode && <Timer className="w-4 h-4" />}
                  </button>
                  
                  {isSnapMode && (
                    <div className="flex items-center gap-2">
                      <span className="text-white/70 text-sm">Timer:</span>
                      {[5, 10, 15, 30].map((seconds) => (
                        <button
                          key={seconds}
                          onClick={() => setSnapTimer(seconds)}
                          className={`px-2 py-1 rounded-lg text-xs ${
                            snapTimer === seconds
                              ? 'bg-yellow-400 text-black'
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                          }`}
                        >
                          {seconds}s
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Quick Emoji Reactions */}
                <div className="flex gap-2">
                  {quickEmojis.map((emoji, index) => (
                    <button
                      key={index}
                      onClick={() => handleEmojiSelect(emoji)}
                      className="text-xl hover:scale-125 transition-transform"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Input Box - Redesigned with cleaner box at bottom */}
            <div className="p-4">
              <div className="backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-2xl p-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <input
                  ref={documentInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.zip,.rar"
                  onChange={handleDocumentUpload}
                  className="hidden"
                />
                
                {/* Main input row */}
                <div className="flex items-center gap-3 mb-3">
                  <Input
                    ref={messageInputRef}
                    placeholder={isSnapMode ? "Send a disappearing message..." : "Type a message..."}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={sending}
                    className={`flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12 text-base ${
                      isSnapMode ? 'border-yellow-400 border-2' : ''
                    }`}
                  />
                  
                  <Button 
                    onClick={handleSendMessage}
                    disabled={sending || !newMessage.trim()}
                    className={`h-12 px-6 ${
                      isSnapMode
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                        : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'
                    } border-0`}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                
                {/* Action buttons row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm"
                      variant="ghost"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={sending}
                      className="text-white/70 hover:text-white hover:bg-white/10 h-9"
                    >
                      <ImageIcon className="w-5 h-5 mr-1" />
                      <span className="text-sm">Photo</span>
                    </Button>
                    
                    <Button 
                      size="sm"
                      variant="ghost"
                      onClick={() => documentInputRef.current?.click()}
                      disabled={sending}
                      className="text-white/70 hover:text-white hover:bg-white/10 h-9"
                    >
                      <Paperclip className="w-5 h-5 mr-1" />
                      <span className="text-sm">File</span>
                    </Button>
                    
                    <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
                      <PopoverTrigger asChild>
                        <Button 
                          size="sm"
                          variant="ghost"
                          className="text-white/70 hover:text-white hover:bg-white/10 h-9"
                        >
                          <Smile className="w-5 h-5 mr-1" />
                          <span className="text-sm">Emoji</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 backdrop-blur-xl bg-white/10 border-white/20 p-0">
                        <ScrollArea className="h-80">
                          <div className="p-4">
                            {Object.entries(emojiCategories).map(([category, emojis]) => (
                              <div key={category} className="mb-4">
                                <div className="text-white/70 text-sm mb-2">{category}</div>
                                <div className="grid grid-cols-8 gap-2">
                                  {emojis.map((emoji, index) => (
                                    <button
                                      key={index}
                                      onClick={() => {
                                        handleEmojiSelect(emoji);
                                        setShowEmojiPicker(false);
                                      }}
                                      className="text-2xl hover:scale-125 transition-transform p-1 hover:bg-white/10 rounded"
                                    >
                                      {emoji}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                    
                    <VoiceRecorder onSendVoice={handleVoiceSend} />
                  </div>

                  <MessageInspiration onInsertMessage={(msg) => setNewMessage(msg)} />
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
