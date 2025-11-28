'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { 
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  MonitorOff,
  Settings,
  Users,
  MessageSquare,
  Phone,
  PhoneOff,
  Grid3x3,
  MoreVertical,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { useUser } from '../utils/userContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Participant {
  userId: string;
  name: string;
  avatar: string;
  isMuted: boolean;
  isVideoOff: boolean;
  isSpeaking: boolean;
  isScreenSharing: boolean;
  isSelf: boolean;
  joinedAt: string;
  lastSeenAt: string;
}

type ChatMessage = {
  id: string;
  author: string;
  text: string;
  isSelf: boolean;
  timestamp: string;
};

interface VideoChatProps {
  callType?: 'audio' | 'video';
  onEndCall?: () => void;
  isIncoming?: boolean;
  callerName?: string;
  demoMode?: boolean;
}

const extractErrorInfo = (error: unknown): { name: string; message: string } => {
  if (error instanceof Error) {
    return { name: error.name, message: error.message };
  }
  if (typeof error === 'object' && error !== null) {
    const potentialError = error as { name?: unknown; message?: unknown };
    const name = typeof potentialError.name === 'string' ? potentialError.name : '';
    const message = typeof potentialError.message === 'string' ? potentialError.message : '';
    return { name, message };
  }
  return { name: '', message: '' };
};

type FacingMode = 'user' | 'environment';

type CameraProfile = {
  label: string;
  constraints: boolean | MediaTrackConstraints;
};

type VideoPresenceRecord = {
  userId: string;
  roomId: string;
  joinedAt: string;
  lastSeenAt: string;
  isMuted: boolean;
  isVideoOff: boolean;
  isScreenSharing: boolean;
  displayName?: string | null;
  avatar?: string | null;
};

const MICROPHONE_CONSTRAINTS: MediaTrackConstraints = {
  echoCancellation: { ideal: true },
  noiseSuppression: { ideal: true },
  autoGainControl: { ideal: true },
};

const CAMERA_PROFILES: CameraProfile[] = [
  {
    label: '4K UHD',
    constraints: {
      width: { ideal: 3840 },
      height: { ideal: 2160 },
      frameRate: { ideal: 30 },
    },
  },
  {
    label: 'Full HD',
    constraints: {
      width: { ideal: 1920 },
      height: { ideal: 1080 },
      frameRate: { ideal: 30 },
    },
  },
  {
    label: 'HD',
    constraints: {
      width: { ideal: 1280 },
      height: { ideal: 720 },
      frameRate: { ideal: 30 },
    },
  },
  {
    label: 'SD',
    constraints: {
      width: { ideal: 960 },
      height: { ideal: 540 },
      frameRate: { ideal: 24 },
    },
  },
  {
    label: 'Compatibility',
    constraints: true,
  },
];

const determineVideoQualityLabel = (width?: number): string | null => {
  if (!width) {
    return null;
  }
  if (width >= 3800) return '4K UHD';
  if (width >= 1900) return 'Full HD';
  if (width >= 1200) return 'HD';
  if (width >= 900) return 'SD';
  return 'SD';
};

const cameraConnectedToastCopy = (quality: string | null) => {
  switch (quality) {
    case '4K UHD':
      return '4K UHD Camera connected! 📷✨';
    case 'Full HD':
      return 'Full HD Camera connected! 📷';
    case 'HD':
      return 'HD Camera connected! 📷';
    case 'SD':
      return 'Camera connected in SD! 📷';
    default:
      return 'Camera connected! 📷';
  }
};

const isCameraBusyError = (error: unknown) => {
  const { name, message } = extractErrorInfo(error);
  const normalizedName = name.toLowerCase();
  const normalizedMessage = message.toLowerCase();

  return (
    normalizedName === 'notreadableerror' ||
    normalizedName === 'aborterror' ||
    normalizedMessage.includes('already in use') ||
    normalizedMessage.includes('busy') ||
    normalizedMessage.includes('could not start video source')
  );
};

const requestCameraStream = async (facingMode: FacingMode = 'user') => {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
    throw new Error('Media devices are not supported in this environment');
  }

  let lastError: unknown = null;
  let sharedCameraDetected = false;

  for (let index = 0; index < CAMERA_PROFILES.length; index += 1) {
    const profile = CAMERA_PROFILES[index];
    try {
      const videoConstraints =
        profile.constraints === true
          ? profile.constraints
          : {
              facingMode: { ideal: facingMode },
              ...profile.constraints,
            };

      const stream = await navigator.mediaDevices.getUserMedia({
        video: videoConstraints,
        audio: MICROPHONE_CONSTRAINTS,
      });

      return {
        stream,
        profileLabel: profile.label,
        profileIndex: index,
        sharedCameraDetected,
      };
    } catch (error) {
      lastError = error;
      const { name, message } = extractErrorInfo(error);
      const normalizedName = name.toLowerCase();
      const normalizedMessage = message.toLowerCase();

      if (
        normalizedName === 'notallowederror' ||
        normalizedName === 'securityerror' ||
        normalizedMessage.includes('permission denied')
      ) {
        throw error;
      }

      if (normalizedName === 'notfounderror') {
        throw error;
      }

      if (isCameraBusyError(error)) {
        sharedCameraDetected = true;
        continue;
      }

      if (normalizedName === 'overconstrainederror') {
        continue;
      }

      throw error;
    }
  }

  if (lastError && isCameraBusyError(lastError)) {
    const conflictError = new Error('Camera already in use by another app');
    conflictError.name = 'CameraConflictError';
    throw conflictError;
  }

  throw lastError ?? new Error('Unable to access camera');
};

const avatarForId = (id: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(id || 'video')}`;

const isCameraConflictError = (error: unknown): boolean =>
  error instanceof Error && error.name === 'CameraConflictError';

const CAMERA_SAFE_START_STORAGE_KEY = 'movesplash:cameraSafeStart';
const VIDEO_ROOM_ID = 'global-stage';
const VIDEO_API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a14c7986/video/rooms`;
const VIDEO_AUTH_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${publicAnonKey}`,
};
const VIDEO_GET_HEADERS = {
  Authorization: `Bearer ${publicAnonKey}`,
};

type ScreenSelection = 'auto' | 'all-monitors' | string;

type ScreenInfo = {
  id: string;
  label: string;
  isPrimary: boolean;
  size: string;
};

type ScreenDetailEntry = {
  id?: string;
  label?: string;
  isPrimary?: boolean;
  isInternal?: boolean;
  width?: number;
  height?: number;
};

type ScreenDetailsResult = {
  screens?: ScreenDetailEntry[] | ReadonlyArray<ScreenDetailEntry>;
  currentScreen?: ScreenDetailEntry;
  addEventListener?: (type: 'screenschange' | 'currentscreenchange', listener: () => void) => void;
  removeEventListener?: (type: 'screenschange' | 'currentscreenchange', listener: () => void) => void;
};

type AdvancedDisplayConstraints = MediaTrackConstraints & {
  logicalSurface?: boolean;
  monitorTypeSurfaces?: Array<'monitor' | 'window' | 'browser' | 'application'>;
  surfaceSwitching?: 'include' | 'exclude';
  preferCurrentTab?: boolean;
  selfBrowserSurface?: 'include' | 'exclude';
  cursor?: 'always' | 'motion' | 'never';
};

declare global {
  interface Navigator {
    getScreenDetails?: () => Promise<ScreenDetailsResult>;
  }
}

export function VideoChat({ 
  callType = 'video', 
  onEndCall,
  isIncoming = false,
  callerName = 'The Squad 🔥',
  demoMode: initialDemoMode = false
}: VideoChatProps) {
  const [{ initialDemoState, initialSafeStart, autoSafeReason }] = useState(() => {
    if (typeof window === 'undefined') {
      return { initialDemoState: initialDemoMode, initialSafeStart: false, autoSafeReason: null };
    }

    const host = window.location.hostname;
    const runningLocally =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host.startsWith('192.168.') ||
      host.endsWith('.local');

    let storedPreference: string | null = null;
    try {
      storedPreference = window.localStorage.getItem(CAMERA_SAFE_START_STORAGE_KEY);
    } catch {
      storedPreference = null;
    }

    const parsedPreference =
      storedPreference === 'true' ? true : storedPreference === 'false' ? false : null;
    const safeStart = parsedPreference ?? runningLocally;

    return {
      initialDemoState: initialDemoMode || safeStart,
      initialSafeStart: safeStart,
      autoSafeReason: parsedPreference === null && safeStart ? (runningLocally ? 'local' : 'unknown') : null,
    };
  });
  const [cameraSafeStart, setCameraSafeStart] = useState(initialSafeStart);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(callType === 'audio');
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'speaker'>('grid');
  const [callStatus, setCallStatus] = useState<'ringing' | 'connecting' | 'connected'>(
    isIncoming ? 'ringing' : 'connecting'
  );
  const [callDuration, setCallDuration] = useState(0);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const demoCanvasRef = useRef<HTMLCanvasElement>(null);
  const screenShareDemoCanvasRef = useRef<HTMLCanvasElement>(null);
  const cameraSnapshotCanvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [demoMode, setDemoMode] = useState(initialDemoState);
  const [screenShareDemoMode, setScreenShareDemoMode] = useState(initialDemoState);
  const [videoQuality, setVideoQuality] = useState<string | null>(null);
  const [screenShareQuality, setScreenShareQuality] = useState<string | null>(null);
  const [availableScreens, setAvailableScreens] = useState<ScreenInfo[]>([]);
  const [screenShareTarget, setScreenShareTarget] = useState<ScreenSelection>('auto');
  const [screenShareSourceLabel, setScreenShareSourceLabel] = useState<string | null>(null);
  const [isScreenShareStreaming, setIsScreenShareStreaming] = useState(false);
  const [autoDetectedConflict, setAutoDetectedConflict] = useState(false);
  const [cameraConflictActive, setCameraConflictActive] = useState(false);
  const [cameraFallbackFrame, setCameraFallbackFrame] = useState<string | null>(null);
  const [cameraAutoRetryEnabled, setCameraAutoRetryEnabled] = useState(true);
  const [sharedCameraMode, setSharedCameraMode] = useState(false);
  const cameraRetryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [cameraRetryToken, setCameraRetryToken] = useState(0);
  const [cameraFacingMode, setCameraFacingMode] = useState<FacingMode>('user');
  const cameraManualStopRef = useRef(false);
  const screenShareStreamRef = useRef<MediaStream | null>(null);
  const manualScreenShareStopRef = useRef(false);
  const screenShareVideoRef = useRef<HTMLVideoElement>(null);
  const { currentUser, allUsers } = useUser();
  const currentUserId = currentUser?.id ?? null;
  const [remoteParticipants, setRemoteParticipants] = useState<VideoPresenceRecord[]>([]);
  const roomId = VIDEO_ROOM_ID;
  const presencePollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const presenceHeartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const previousUserIdRef = useRef<string | null>(currentUserId);
  const muteStateRef = useRef(isMuted);
  const videoStateRef = useRef(isVideoOff);
  const screenShareStateRef = useRef(isScreenShareStreaming);
  const [autoSpeakerMode, setAutoSpeakerMode] = useState(false);
  const [showParticipantsPanel, setShowParticipantsPanel] = useState(false);
  const [showChatPanel, setShowChatPanel] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [chatDraft, setChatDraft] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    const displayName =
      (currentUser?.name && currentUser.name.trim()) ||
      (currentUser?.username && currentUser.username.trim()) ||
      'You';

    return [
      {
        id: 'welcome',
        author: 'Host',
        text: 'Welcome to the room! Use chat to coordinate or share links.',
        isSelf: false,
        timestamp: new Date().toISOString(),
      },
      {
        id: 'self-intro',
        author: displayName,
        text: 'Hey team, I just joined the call.',
        isSelf: true,
        timestamp: new Date().toISOString(),
      },
    ];
  });
  const chatListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    muteStateRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    videoStateRef.current = isVideoOff;
  }, [isVideoOff]);

  useEffect(() => {
    screenShareStateRef.current = isScreenShareStreaming;
  }, [isScreenShareStreaming]);

  const togglePanel = (panel: 'participants' | 'chat' | 'settings') => {
    setShowParticipantsPanel(panel === 'participants' ? (open) => !open : false);
    setShowChatPanel(panel === 'chat' ? (open) => !open : false);
    setShowSettingsPanel(panel === 'settings' ? (open) => !open : false);
  };

  useEffect(() => {
    if (!showChatPanel) {
      return;
    }
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chatMessages, showChatPanel]);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;
    let detailsRef: ScreenDetailsResult | null = null;

    const fallbackToPrimary = () => {
      if (!mounted) {
        return;
      }
      if (typeof window === 'undefined') {
        return;
      }
      const width = window.screen?.width ?? 0;
      const height = window.screen?.height ?? 0;
      setAvailableScreens([
        {
          id: 'primary',
          label: 'Primary Monitor',
          isPrimary: true,
          size: width && height ? `${width}×${height}` : 'Primary',
        },
      ]);
    };

    const updateScreens = (screens: ScreenDetailsResult['screens']) => {
      if (!mounted || !screens) {
        return;
      }
      const normalized = Array.from(screens).map((screen, index) => {
        const id = screen.id ?? `monitor-${index}`;
        const rawLabel = screen.label?.trim();
        const label =
          rawLabel && rawLabel.length > 0
            ? rawLabel
            : `Monitor ${index + 1}${screen.isPrimary ? ' (Primary)' : ''}`;
        const width =
          screen.width ??
          (typeof window !== 'undefined' ? window.screen?.width ?? undefined : undefined);
        const height =
          screen.height ??
          (typeof window !== 'undefined' ? window.screen?.height ?? undefined : undefined);

        return {
          id,
          label,
          isPrimary: Boolean(screen.isPrimary) || index === 0,
          size: width && height ? `${width}×${height}` : 'Unknown',
        };
      });

      if (normalized.length === 0) {
        fallbackToPrimary();
        return;
      }

      setAvailableScreens(normalized);
    };

    const init = async () => {
      if (typeof navigator === 'undefined') {
        fallbackToPrimary();
        return;
      }

      if (typeof navigator.getScreenDetails !== 'function') {
        fallbackToPrimary();
        return;
      }

      try {
        detailsRef = await navigator.getScreenDetails();
        updateScreens(detailsRef.screens);
        const handleChange = () => updateScreens(detailsRef?.screens);
        detailsRef?.addEventListener?.('screenschange', handleChange);
        detailsRef?.addEventListener?.('currentscreenchange', handleChange);
        cleanup = () => {
          detailsRef?.removeEventListener?.('screenschange', handleChange);
          detailsRef?.removeEventListener?.('currentscreenchange', handleChange);
        };
      } catch (error) {
        console.warn('Unable to access multi-monitor details:', error);
        fallbackToPrimary();
      }
    };

    void init();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  const selectedScreen = useMemo(() => {
    if (screenShareTarget === 'auto' || screenShareTarget === 'all-monitors') {
      return null;
    }
    return availableScreens.find((screen) => screen.id === screenShareTarget) ?? null;
  }, [availableScreens, screenShareTarget]);

  const multipleScreensDetected = availableScreens.length > 1;

  const monitorSelectionLabel = useMemo(() => {
    if (screenShareTarget === 'all-monitors') {
      return 'All Monitors';
    }
    if (selectedScreen) {
      return selectedScreen.label;
    }
    if (multipleScreensDetected) {
      return 'Auto-select Monitor';
    }
    return 'Primary Monitor';
  }, [multipleScreensDetected, selectedScreen, screenShareTarget]);

  useEffect(() => {
    if (
      screenShareTarget !== 'auto' &&
      screenShareTarget !== 'all-monitors' &&
      !availableScreens.some((screen) => screen.id === screenShareTarget)
    ) {
      setScreenShareTarget('auto');
    }
  }, [availableScreens, screenShareTarget]);

  const effectiveScreenShareActive = isScreenSharing;
  const visibleScreenShareQuality = effectiveScreenShareActive ? screenShareQuality : null;
  const visibleScreenShareSource = effectiveScreenShareActive ? screenShareSourceLabel : null;

  useEffect(() => {
    const element = screenShareVideoRef.current;
    const stream = screenShareStreamRef.current;

    if (!element) {
      return;
    }

    if (!isScreenShareStreaming || screenShareDemoMode || !stream) {
      if (element.srcObject) {
        element.srcObject = null;
      }
      return;
    }

    element.srcObject = stream;
    const play = async () => {
      try {
        await element.play();
      } catch (error) {
        console.warn('Unable to start screen share preview', error);
      }
    };
    void play();

    return () => {
      if (element.srcObject === stream) {
        element.srcObject = null;
      }
    };
  }, [isScreenShareStreaming, screenShareDemoMode]);

  const loadPresence = useCallback(async () => {
    try {
      const response = await fetch(
        `${VIDEO_API_BASE}/${encodeURIComponent(roomId)}/presence`,
        { headers: VIDEO_GET_HEADERS },
      );

      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }

      const payload = (await response.json().catch(() => null)) as {
        participants?: VideoPresenceRecord[];
      } | null;

      const records = Array.isArray(payload?.participants) ? payload.participants : [];

      setRemoteParticipants(
        records.map((record) => ({
          ...record,
          displayName: record.displayName ?? null,
          avatar: record.avatar ?? null,
        })),
      );
    } catch (error) {
      console.warn('Failed to refresh video presence', error);
    }
  }, [roomId]);

  const announcePresence = useCallback(
    async (
      overrides: Partial<{
        isMuted: boolean;
        isVideoOff: boolean;
        isScreenSharing: boolean;
      }> = {},
    ) => {
      if (!currentUserId) {
        return;
      }

      const nextMuted = overrides.isMuted ?? muteStateRef.current;
      const nextVideoOff = overrides.isVideoOff ?? videoStateRef.current;
      const nextScreenShare = overrides.isScreenSharing ?? screenShareStateRef.current;

      const resolvedName =
        (currentUser?.name && currentUser.name.trim()) ||
        (currentUser?.username && currentUser.username.trim()) ||
        `Guest ${currentUserId.slice(0, 6)}`;

      const resolvedAvatar =
        currentUser?.avatar ||
        (currentUser?.ablyClientId ? avatarForId(currentUser.ablyClientId) : avatarForId(currentUserId));

      try {
        const response = await fetch(
          `${VIDEO_API_BASE}/${encodeURIComponent(roomId)}/presence`,
          {
            method: 'POST',
            headers: VIDEO_AUTH_HEADERS,
            body: JSON.stringify({
              userId: currentUserId,
              displayName: resolvedName,
              avatar: resolvedAvatar,
              isMuted: nextMuted,
              isVideoOff: nextVideoOff,
              isScreenSharing: nextScreenShare,
            }),
          },
        );

        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }

        const payload = (await response.json().catch(() => null)) as {
          participant?: VideoPresenceRecord;
        } | null;

        if (payload?.participant) {
          const participant = payload.participant;
          setRemoteParticipants((prev) => {
            const map = new Map(prev.map((participant) => [participant.userId, participant]));
            map.set(participant.userId, {
              ...participant,
              displayName: participant.displayName ?? null,
              avatar: participant.avatar ?? null,
            });
            return Array.from(map.values());
          });
        }
      } catch (error) {
        console.warn('Failed to update video presence', error);
      }
    },
    [
      currentUser?.ablyClientId,
      currentUser?.avatar,
      currentUser?.name,
      currentUser?.username,
      currentUserId,
      roomId,
    ],
  );

  const removePresence = useCallback(
    async (userId: string | null) => {
      if (!userId) {
        return;
      }

      try {
        await fetch(
          `${VIDEO_API_BASE}/${encodeURIComponent(roomId)}/presence/${encodeURIComponent(userId)}`,
          {
            method: 'DELETE',
            headers: VIDEO_GET_HEADERS,
          },
        );
      } catch (error) {
        console.warn('Failed to remove video presence', error);
      }
    },
    [roomId],
  );

  useEffect(() => {
    if (!currentUserId) {
      setRemoteParticipants([]);
      return;
    }

    void announcePresence({
      isMuted,
      isVideoOff,
      isScreenSharing: isScreenShareStreaming,
    });
  }, [announcePresence, currentUserId, isMuted, isVideoOff, isScreenShareStreaming]);

  useEffect(() => {
    void loadPresence();

    if (presencePollRef.current) {
      clearInterval(presencePollRef.current);
    }
    presencePollRef.current = setInterval(() => {
      void loadPresence();
    }, 7000);

    return () => {
      if (presencePollRef.current) {
        clearInterval(presencePollRef.current);
        presencePollRef.current = null;
      }
    };
  }, [loadPresence]);

  useEffect(() => {
    if (!currentUserId) {
      if (presenceHeartbeatRef.current) {
        clearInterval(presenceHeartbeatRef.current);
        presenceHeartbeatRef.current = null;
      }
      return;
    }

    void announcePresence();

    if (presenceHeartbeatRef.current) {
      clearInterval(presenceHeartbeatRef.current);
    }
    presenceHeartbeatRef.current = setInterval(() => {
      void announcePresence();
    }, 20000);

    return () => {
      if (presenceHeartbeatRef.current) {
        clearInterval(presenceHeartbeatRef.current);
        presenceHeartbeatRef.current = null;
      }
    };
  }, [announcePresence, currentUserId]);

  useEffect(() => {
    const previousUserId = previousUserIdRef.current;
    if (previousUserId && previousUserId !== currentUserId) {
      void removePresence(previousUserId);
    }
    previousUserIdRef.current = currentUserId;

    return () => {
      void removePresence(previousUserIdRef.current ?? currentUserId);
    };
  }, [currentUserId, removePresence]);

  const activateCameraConflictFallback = useCallback(() => {
    setMediaStream(null);
    setSharedCameraMode(false);
    setCameraConflictActive(true);
    setAutoDetectedConflict(true);
    setCameraAutoRetryEnabled(false);
    cameraManualStopRef.current = false;

    if (cameraRetryTimeoutRef.current) {
      clearTimeout(cameraRetryTimeoutRef.current);
      cameraRetryTimeoutRef.current = null;
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }

    if (!demoMode) {
      setDemoMode(true);
      toast.success('📸 Camera is already in use (Google Meet / Zoom). Showing demo preview so their call stays live.');
    } else {
      toast.info('📸 Camera still controlled by another app. Keeping the demo preview active.');
    }
  }, [demoMode]);

  const scheduleCameraRetry = useCallback(() => {
    if (!cameraAutoRetryEnabled) {
      return;
    }

    if (cameraRetryTimeoutRef.current) {
      return;
    }

    cameraRetryTimeoutRef.current = setTimeout(() => {
      setCameraRetryToken(token => token + 1);
      cameraRetryTimeoutRef.current = null;
    }, 5000);
  }, [cameraAutoRetryEnabled]);

  useEffect(() => {
    return () => {
      if (cameraRetryTimeoutRef.current) {
        clearTimeout(cameraRetryTimeoutRef.current);
        cameraRetryTimeoutRef.current = null;
      }
    };
  }, []);
  useEffect(() => {
    if (!autoSafeReason) {
      return;
    }
    toast.info('Camera demo mode auto-enabled for presentations (safe start).', {
      duration: 5000,
    });
  }, [autoSafeReason]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      window.localStorage.setItem(
        CAMERA_SAFE_START_STORAGE_KEY,
        cameraSafeStart ? 'true' : 'false',
      );
    } catch (error) {
      console.warn('Unable to persist camera safe start preference', error);
    }
  }, [cameraSafeStart]);

  const participants = useMemo<Participant[]>(() => {
    const nowIso = new Date().toISOString();
    const resolvedCurrentId = currentUser?.id ?? currentUser?.ablyClientId ?? currentUserId ?? 'guest';
    const localPresence =
      remoteParticipants.find((presence) => presence.userId === resolvedCurrentId) ?? null;

    const displayName =
      (currentUser?.name && currentUser.name.trim()) ||
      (currentUser?.username && currentUser.username.trim()) ||
      'You';

    const avatarSource =
      currentUser?.avatar ||
      (currentUser?.ablyClientId ? avatarForId(currentUser.ablyClientId) : avatarForId(resolvedCurrentId));

    const joinedAt = localPresence?.joinedAt ?? nowIso;
    const lastSeenAt = localPresence?.lastSeenAt ?? nowIso;

    const selfParticipant: Participant = {
      userId: resolvedCurrentId,
      name: displayName,
      avatar: avatarSource,
      isMuted,
      isVideoOff,
      isSpeaking: !isMuted && !isVideoOff && !demoMode,
      isScreenSharing: effectiveScreenShareActive,
      isSelf: true,
      joinedAt,
      lastSeenAt,
    };

    const others = remoteParticipants
      .filter((presence) => presence.userId !== resolvedCurrentId)
      .map((presence) => {
        const referencedUser = allUsers.get(presence.userId) ?? null;

        const resolvedName =
          (presence.displayName && presence.displayName.trim()) ||
          referencedUser?.name ||
          referencedUser?.username ||
          `Friend ${presence.userId.slice(0, 6)}`;

        const resolvedAvatar =
          presence.avatar ||
          referencedUser?.avatar ||
          avatarForId(referencedUser?.ablyClientId ?? presence.userId);

        return {
          userId: presence.userId,
          name: resolvedName,
          avatar: resolvedAvatar,
          isMuted: presence.isMuted,
          isVideoOff: presence.isVideoOff,
          isSpeaking: !presence.isMuted && !presence.isVideoOff,
          isScreenSharing: presence.isScreenSharing,
          isSelf: false,
          joinedAt: presence.joinedAt,
          lastSeenAt: presence.lastSeenAt,
        } satisfies Participant;
      });

    return [selfParticipant, ...others].sort(
      (a, b) => new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime(),
    );
  }, [
    allUsers,
    currentUser?.ablyClientId,
    currentUser?.avatar,
    currentUser?.id,
    currentUser?.name,
    currentUser?.username,
    currentUserId,
    demoMode,
    isMuted,
    effectiveScreenShareActive,
    isVideoOff,
    remoteParticipants,
  ]);

  const activeScreenSharerId = useMemo(() => {
    if (effectiveScreenShareActive && currentUserId) {
      return currentUserId;
    }
    const remoteSharer = remoteParticipants.find((presence) => presence.isScreenSharing);
    return remoteSharer?.userId ?? null;
  }, [currentUserId, effectiveScreenShareActive, remoteParticipants]);

  useEffect(() => {
    if (activeScreenSharerId) {
      if (viewMode !== 'speaker') {
        setAutoSpeakerMode(true);
        setViewMode('speaker');
      }
    } else {
      if (autoSpeakerMode && viewMode !== 'grid') {
        setViewMode('grid');
      }
      if (autoSpeakerMode) {
        setAutoSpeakerMode(false);
      }
    }
  }, [activeScreenSharerId, autoSpeakerMode, viewMode]);

  const screenShareParticipant = useMemo(
    () =>
      activeScreenSharerId
        ? participants.find((participant) => participant.userId === activeScreenSharerId) ?? null
        : null,
    [participants, activeScreenSharerId],
  );

  const gridParticipants = useMemo(() => {
    if (!screenShareParticipant) {
      return participants;
    }
    return participants.filter((participant) => {
      if (participant.userId !== screenShareParticipant.userId) {
        return true;
      }
      return screenShareParticipant.isSelf;
    });
  }, [participants, screenShareParticipant]);
  const participantCount = participants.length;
  const isSoloParticipant = gridParticipants.length === 1 && gridParticipants[0]?.isSelf;

  // Demo mode canvas animation
  useEffect(() => {
    if (!demoMode || !demoCanvasRef.current) return;

    const canvas = demoCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let hue = 0;

    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${hue}, 70%, 50%)`);
      gradient.addColorStop(0.5, `hsl(${(hue + 60) % 360}, 70%, 60%)`);
      gradient.addColorStop(1, `hsl(${(hue + 120) % 360}, 70%, 50%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some animated circles
      const time = Date.now() / 1000;
      for (let i = 0; i < 5; i++) {
        const x = canvas.width / 2 + Math.sin(time + i) * 100;
        const y = canvas.height / 2 + Math.cos(time + i * 1.5) * 80;
        const radius = 20 + Math.sin(time * 2 + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.1})`;
        ctx.fill();
      }

      // Add "DEMO MODE" text
      ctx.font = 'bold 24px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillText('🎥 DEMO MODE', canvas.width / 2, canvas.height / 2);
      
      ctx.font = '14px system-ui';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText('Simulated Camera Feed', canvas.width / 2, canvas.height / 2 + 35);

      hue = (hue + 0.5) % 360;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [demoMode]);

  // Demo screen share animation
  useEffect(() => {
    if (!screenShareDemoMode || !isScreenSharing) return;

    const canvas = screenShareDemoCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;

    let hue = 120; // Start with green
    let animationId: number;

    const animate = () => {
      // Create animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${hue}, 60%, 40%)`);
      gradient.addColorStop(0.5, `hsl(${(hue + 40) % 360}, 60%, 50%)`);
      gradient.addColorStop(1, `hsl(${(hue + 80) % 360}, 60%, 40%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      const gridSize = 100;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add animated squares
      const time = Date.now() / 1000;
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 4) + Math.sin(time * 0.5 + i) * 200;
        const y = (canvas.height / 4) + Math.cos(time * 0.3 + i * 1.5) * 150;
        const size = 40 + Math.sin(time * 2 + i) * 20;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time + i);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.fillRect(-size/2, -size/2, size, size);
        ctx.restore();
      }

      // Add "DEMO SCREEN SHARE" text
      ctx.font = 'bold 48px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.fillText('🖥️ DEMO SCREEN SHARE', canvas.width / 2, canvas.height / 2 - 30);
      
      ctx.font = '24px system-ui';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillText('Simulated Screen - Safe for Presentations', canvas.width / 2, canvas.height / 2 + 30);
      
      ctx.font = '18px system-ui';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillText('No conflicts with Zoom, Google Meet, Teams, or FaceTime', canvas.width / 2, canvas.height / 2 + 70);

      hue = (hue + 0.3) % 360;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [screenShareDemoMode, isScreenSharing]);

  // Initialize webcam and microphone
  useEffect(() => {
    let mounted = true;
    
    const initMediaDevices = async () => {
      if (demoMode) {
        console.log('Demo mode enabled - skipping camera access');
        setSharedCameraMode(false);
        return;
      }

      if (callStatus === 'connected' && !isVideoOff) {
        try {
          const { stream, sharedCameraDetected } = await requestCameraStream(cameraFacingMode);

          if (!mounted) {
            stream.getTracks().forEach(track => track.stop());
            return;
          }

          const [videoTrack] = stream.getVideoTracks();
          if (!videoTrack) {
            stream.getTracks().forEach(track => track.stop());
            throw new Error('Camera stream did not include a video track');
          }

          const settings = videoTrack.getSettings();
          const resolvedQuality = determineVideoQualityLabel(settings.width);
          console.log(`Camera resolution: ${settings.width}x${settings.height} @ ${settings.frameRate}fps`);

          cameraManualStopRef.current = false;
          if (cameraRetryTimeoutRef.current) {
            clearTimeout(cameraRetryTimeoutRef.current);
            cameraRetryTimeoutRef.current = null;
          }

          setCameraConflictActive(false);
          setAutoDetectedConflict(false);
          setCameraAutoRetryEnabled(true);
          setSharedCameraMode(sharedCameraDetected);
          setVideoQuality(resolvedQuality);
          setMediaStream(stream);

          toast.success(cameraConnectedToastCopy(resolvedQuality));
          if (sharedCameraDetected) {
            toast.info('Compatibility camera mode enabled so Google Meet, Zoom, or Teams keep your video connected.');
          }

          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
            localVideoRef.current.play().catch(err => {
              console.error('Error playing video:', err);
            });
          }

          videoTrack.onended = () => {
            if (cameraManualStopRef.current) {
              cameraManualStopRef.current = false;
              return;
            }
            console.log('Camera track ended unexpectedly – likely taken by another app.');
            activateCameraConflictFallback();
          };
        } catch (error) {
          if (isCameraConflictError(error)) {
            activateCameraConflictFallback();
            return;
          }
          console.error('Error accessing media devices:', error);
          setCameraError('Unable to access camera/microphone');
          toast.error('Unable to access camera/microphone. Please check permissions.');
        }
      } else if (isVideoOff && mediaStreamRef.current) {
        setSharedCameraMode(false);
        cameraManualStopRef.current = true;
        mediaStreamRef.current.getVideoTracks().forEach(track => track.stop());
      }
    };

    initMediaDevices();

    return () => {
      mounted = false;
      if (mediaStreamRef.current) {
        cameraManualStopRef.current = true;
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        setMediaStream(null);
        setSharedCameraMode(false);
      }
      if (screenShareStreamRef.current) {
        screenShareStreamRef.current.getTracks().forEach(track => track.stop());
        screenShareStreamRef.current = null;
        setIsScreenShareStreaming(false);
        setIsScreenSharing(false);
        setScreenShareQuality(null);
        setScreenShareSourceLabel(null);
      }
    };
  }, [callStatus, isVideoOff, demoMode, activateCameraConflictFallback, cameraRetryToken, cameraFacingMode]);

  useEffect(() => {
    mediaStreamRef.current = mediaStream;
    if (!mediaStream) {
      setSharedCameraMode(false);
    }
  }, [mediaStream]);

  useEffect(() => {
    if (cameraConflictActive) {
      scheduleCameraRetry();
    }
  }, [cameraConflictActive, scheduleCameraRetry]);

  useEffect(() => {
    if (!mediaStream || isVideoOff || demoMode) {
      return;
    }

    const video = localVideoRef.current;
    const canvas = cameraSnapshotCanvasRef.current;
    if (!video || !canvas) {
      return;
    }

    const captureFrame = () => {
      if (!video || !canvas) {
        return;
      }

      if (video.readyState < 2) {
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      const { videoWidth, videoHeight } = video;
      if (!videoWidth || !videoHeight) {
        return;
      }

      canvas.width = videoWidth;
      canvas.height = videoHeight;
      ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
      const frame = canvas.toDataURL('image/jpeg', 0.7);
    setCameraFallbackFrame(frame);
    };

    const interval = setInterval(captureFrame, 2000);
    captureFrame();

    return () => {
      clearInterval(interval);
    };
  }, [mediaStream, isVideoOff, demoMode]);

  // Sync video element with mediaStream
  useEffect(() => {
    if (localVideoRef.current && mediaStream) {
      localVideoRef.current.srcObject = mediaStream;
      localVideoRef.current.play().catch(err => {
        console.error('Error playing video:', err);
      });
    }
  }, [mediaStream]);

  // Update audio track when mute state changes
  useEffect(() => {
    if (mediaStream) {
      mediaStream.getAudioTracks().forEach(track => {
        track.enabled = !isMuted;
      });
    }
  }, [isMuted, mediaStream]);

  // Update video track when video state changes
  useEffect(() => {
    if (mediaStream) {
      mediaStream.getVideoTracks().forEach(track => {
        track.enabled = !isVideoOff;
      });
    }
  }, [isVideoOff, mediaStream]);

  // Simulate call connection
  useEffect(() => {
    if (callStatus === 'connecting') {
      const timer = setTimeout(() => {
        setCallStatus('connected');
        toast.success('Call connected! 📞');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [callStatus]);

  // Call duration timer
  useEffect(() => {
    if (callStatus === 'connected') {
      const interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [callStatus]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    // Stop all media tracks
    if (mediaStream) {
      cameraManualStopRef.current = true;
      mediaStream.getTracks().forEach(track => track.stop());
      setSharedCameraMode(false);
    }
    if (screenShareStreamRef.current) {
      manualScreenShareStopRef.current = true;
      screenShareStreamRef.current.getTracks().forEach(track => track.stop());
      screenShareStreamRef.current = null;
    }
    setIsScreenShareStreaming(false);
    setIsScreenSharing(false);
    setScreenShareQuality(null);
    setScreenShareSourceLabel(null);
    toast.success('Call ended');
    if (onEndCall) {
      onEndCall();
    }
  };

  const handleAcceptCall = () => {
    setCallStatus('connecting');
  };

  const handleDeclineCall = () => {
    toast.success('Call declined');
    if (onEndCall) {
      onEndCall();
    }
  };

  const enableDemoMode = useCallback(
    (silent = false) => {
      if (demoMode) {
        if (!silent) {
          toast.info('Camera Demo Mode is already enabled.');
        }
        return;
      }

      if (mediaStream) {
        cameraManualStopRef.current = true;
        mediaStream.getTracks().forEach(track => track.stop());
        setMediaStream(null);
      }
      setSharedCameraMode(false);
      setCameraConflictActive(false);
      if (cameraRetryTimeoutRef.current) {
        clearTimeout(cameraRetryTimeoutRef.current);
        cameraRetryTimeoutRef.current = null;
      }
      setCameraAutoRetryEnabled(false);
      setDemoMode(true);
      if (!silent) {
        toast.success('Camera Demo Mode enabled - safe for presentations! 🎬');
      }
    },
    [demoMode, mediaStream],
  );

  const handleResumeCamera = useCallback((silent = false) => {
    if (cameraRetryTimeoutRef.current) {
      clearTimeout(cameraRetryTimeoutRef.current);
      cameraRetryTimeoutRef.current = null;
    }
    setCameraAutoRetryEnabled(true);
    setCameraConflictActive(false);
    setAutoDetectedConflict(false);
    setCameraError(null);
    setDemoMode(false);
    setSharedCameraMode(false);
    setCameraRetryToken(token => token + 1);
    if (!silent) {
      toast.success('Attempting to reconnect your camera... 📷');
    }
  }, []);

  useEffect(() => {
    if (callStatus === 'connected' && demoMode) {
      handleResumeCamera(true);
    }
  }, [callStatus, demoMode, handleResumeCamera]);

  const disableDemoMode = useCallback(
    (silent = false) => {
      if (!demoMode) {
        if (!silent) {
          toast.info('Camera Demo Mode is already off.');
        }
        return;
      }

      setDemoMode(false);
      handleResumeCamera(true);
      if (!silent) {
        toast.success('Camera Demo Mode disabled - will use real camera 📷');
      }
    },
    [demoMode, handleResumeCamera],
  );

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    toast.success(isMuted ? 'Microphone on' : 'Microphone muted');
  };

  const handleToggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    toast.success(isVideoOff ? 'Camera on' : 'Camera off');
  };

  const handleSelectScreenShareTarget = useCallback(
    (target: ScreenSelection) => {
      setScreenShareTarget(target);
      if (target === 'all-monitors') {
        toast.info('Next screen share will prompt you to share every monitor on your workspace.');
      } else {
        const chosen = availableScreens.find((screen) => screen.id === target);
        if (chosen) {
          toast.info(`Next screen share will request "${chosen.label}" in the browser prompt.`);
        }
      }
      if (isScreenSharing && !screenShareDemoMode) {
        toast.info('Stop screen share and start again to switch monitors.');
      }
    },
    [availableScreens, isScreenSharing, screenShareDemoMode],
  );

  const handleToggleScreenShare = async () => {
    // Use demo mode for screen sharing if enabled
    if (screenShareDemoMode) {
      if (isScreenSharing) {
        setIsScreenShareStreaming(false);
        setIsScreenSharing(false);
        setScreenShareQuality(null);
        setScreenShareSourceLabel(null);
      } else {
        setIsScreenShareStreaming(false);
        setIsScreenSharing(true);
        setScreenShareQuality('Demo');
        setScreenShareSourceLabel('Demo Display');
      }
      if (!isScreenSharing) {
        toast.success('🎬 Demo screen sharing started - safe for presentations!');
      } else {
        toast.success('Demo screen share stopped');
      }
      return;
    }

    if (!isScreenSharing) {
      try {
        const shareTarget = screenShareTarget;
        if (shareTarget === 'all-monitors') {
          toast.info('Select the "Entire screen" option to capture every monitor.');
        } else if (selectedScreen) {
          toast.info(`When prompted, choose "${selectedScreen.label}" to share that monitor.`);
        } else if (multipleScreensDetected) {
          toast.info('Pick the monitor you want to share in the browser prompt.');
        }

        console.log('Requesting screen share with multi-monitor support enabled...');

        const videoConstraints: AdvancedDisplayConstraints = {
          displaySurface: 'monitor',
          width: { ideal: 7680 },
          height: { ideal: 4320 },
          frameRate: { ideal: 30 },
          cursor: 'always',
          preferCurrentTab: false,
          surfaceSwitching: 'include',
          selfBrowserSurface: 'exclude',
        };

        if (shareTarget === 'all-monitors') {
          videoConstraints.logicalSurface = true;
          videoConstraints.monitorTypeSurfaces = ['monitor'];
        } else if (selectedScreen) {
          videoConstraints.monitorTypeSurfaces = ['monitor'];
        } else {
          videoConstraints.monitorTypeSurfaces = ['monitor', 'window', 'browser'];
        }

        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: videoConstraints,
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
        
        // Detect actual screen share resolution
        const [videoTrack] = screenStream.getVideoTracks();
        if (!videoTrack) {
          throw new Error('Screen share stream did not include a video track');
        }
        const settings = videoTrack.getSettings();
        console.log(`Screen share resolution: ${settings.width}x${settings.height} @ ${settings.frameRate}fps`);
        
        // Determine quality label
        if (settings.width && settings.height) {
          if (settings.width >= 7680) {
            setScreenShareQuality('8K UHD');
            toast.success('🖥️ 8K UHD Screen sharing started!');
          } else if (settings.width >= 5120) {
            setScreenShareQuality('5K UHD');
            toast.success('🖥️ 5K UHD Screen sharing started!');
          } else if (settings.width >= 3840) {
            setScreenShareQuality('4K UHD');
            toast.success('🖥️ 4K UHD Screen sharing started!');
          } else if (settings.width >= 2560) {
            setScreenShareQuality('QHD');
            toast.success('🖥️ QHD Screen sharing started!');
          } else if (settings.width >= 1920) {
            setScreenShareQuality('Full HD');
            toast.success('🖥️ Full HD Screen sharing started!');
          } else {
            setScreenShareQuality('HD');
            toast.success('🖥️ Screen sharing started!');
          }
        } else {
          toast.success('Screen sharing started');
        }
        setScreenShareSourceLabel(
          videoTrack.label || selectedScreen?.label || (shareTarget === 'all-monitors' ? 'All Monitors' : null),
        );
        if (screenShareStreamRef.current) {
          screenShareStreamRef.current.getTracks().forEach(track => track.stop());
        }
        manualScreenShareStopRef.current = false;
        screenShareStreamRef.current = screenStream;
        setIsScreenShareStreaming(true);
        setIsScreenSharing(true);
        if (screenShareVideoRef.current) {
          screenShareVideoRef.current.srcObject = screenStream;
          screenShareVideoRef.current.play().catch(err => console.error('Error playing screen share video:', err));
        }
        
        // Stop screen sharing when user stops it from browser UI
        videoTrack.onended = () => {
          screenShareStreamRef.current = null;
          if (manualScreenShareStopRef.current) {
            manualScreenShareStopRef.current = false;
            setIsScreenShareStreaming(false);
            setIsScreenSharing(false);
            setScreenShareQuality(null);
            setScreenShareSourceLabel(null);
            toast.success('Screen share stopped');
            return;
          }

          console.log('Screen share ended unexpectedly - enabling demo mode fallback');
          setAutoDetectedConflict(true);
          setScreenShareDemoMode(true);
          setIsScreenShareStreaming(false);
          setIsScreenSharing(true);
          setScreenShareQuality('Demo');
          setScreenShareSourceLabel('Demo Display');
          toast.success('🎬 Screen Share Demo Mode auto-enabled - another app took over your screen');
        };
      } catch (error: unknown) {
        console.error('Error sharing screen:', error);
        setScreenShareSourceLabel(null);
        
        // Check if error is due to screen already being shared (Zoom, Meet, Teams, etc.)
        const { name, message } = extractErrorInfo(error);
        const errorMessage = message.toLowerCase();
        const errorName = name.toLowerCase();
        
        if (errorName === 'notallowederror' || 
            errorName === 'notreadableerror' ||
            errorMessage.includes('permission denied') ||
            errorMessage.includes('user cancelled')) {
          
          // Check if it&apos;s actually a conflict vs user cancellation
          if (errorMessage.includes('already in use') || errorName === 'notreadableerror') {
            console.log('Screen share conflict detected - another app may be sharing');
            console.log('Auto-enabling screen share demo mode...');
            setScreenShareDemoMode(true);
            setAutoDetectedConflict(true);
            toast.success('🎬 Screen Share Demo Mode auto-enabled - screen in use by another app!');
            
            // Auto-start demo screen share
            setIsScreenShareStreaming(false);
            setIsScreenSharing(true);
            setScreenShareQuality('Demo');
            setScreenShareSourceLabel('Demo Display');
          } else {
            toast.error('Screen sharing cancelled');
          }
        } else {
          toast.error('Unable to share screen. Please grant screen sharing permissions.');
        }
      }
    } else {
    if (screenShareStreamRef.current) {
      manualScreenShareStopRef.current = true;
      screenShareStreamRef.current.getTracks().forEach(track => track.stop());
      screenShareStreamRef.current = null;
    }
      setIsScreenShareStreaming(false);
      setIsScreenSharing(false);
      setScreenShareQuality(null);
      setScreenShareSourceLabel(null);
    }
  };

  const handleToggleDemoMode = () => {
    if (demoMode) {
      disableDemoMode();
    } else {
      enableDemoMode();
    }
  };

  const handleToggleScreenShareDemoMode = () => {
    const newMode = !screenShareDemoMode;
    setScreenShareDemoMode(newMode);
    
    if (newMode) {
      // Stop any active screen share
      if (isScreenSharing) {
        setIsScreenShareStreaming(false);
        setIsScreenSharing(false);
        setScreenShareQuality(null);
        setScreenShareSourceLabel(null);
      }
      if (screenShareStreamRef.current) {
        manualScreenShareStopRef.current = true;
        screenShareStreamRef.current.getTracks().forEach(track => track.stop());
        screenShareStreamRef.current = null;
      }
      toast.success('Screen Share Demo Mode enabled - safe for presentations! 🖥️');
      if (screenShareVideoRef.current) {
        screenShareVideoRef.current.srcObject = null;
      }
    } else {
      toast.success('Screen Share Demo Mode disabled - will use real screen 🖥️');
    }
  };

  const handleToggleSafeStart = () => {
    setCameraSafeStart((prev) => {
      const next = !prev;
      if (next) {
        enableDemoMode(true);
        toast.success('Safe Start enabled - MoveSplash will stay in demo mode when you open it.');
      } else {
        toast.success('Safe Start disabled - MoveSplash can auto-connect your camera again.');
      }
      return next;
    });
  };

  const handleFlipCamera = useCallback(() => {
    setCameraFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
    if (callStatus === 'connected' && !isVideoOff && !demoMode) {
      setCameraRetryToken((token) => token + 1);
    }
  }, [callStatus, isVideoOff, demoMode]);

  const handleSendChatMessage = () => {
    const text = chatDraft.trim();
    if (!text) {
      return;
    }

    const author =
      (currentUser?.name && currentUser.name.trim()) ||
      (currentUser?.username && currentUser.username.trim()) ||
      'You';

    setChatMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        author,
        text,
        isSelf: true,
        timestamp: new Date().toISOString(),
      },
    ]);
    setChatDraft('');
  };

  // Incoming call screen
  if (callStatus === 'ringing' && isIncoming) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <Card className="w-96 backdrop-blur-xl bg-white/10 border-white/20 p-8">
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 border-4 border-white/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Squad" />
                <AvatarFallback>SQ</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping"></div>
            </div>
            
            <div>
              <h2 className="text-white text-2xl mb-2">{callerName}</h2>
              <p className="text-white/70">
                {callType === 'video' ? 'Video' : 'Voice'} call incoming...
              </p>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button
                onClick={handleDeclineCall}
                className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white border-0"
              >
                <PhoneOff className="w-6 h-6" />
              </Button>
              <Button
                onClick={handleAcceptCall}
                className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white border-0"
              >
                <Phone className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Connecting screen
  if (callStatus === 'connecting') {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <Card className="w-96 backdrop-blur-xl bg-white/10 border-white/20 p-8">
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 border-4 border-white/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Squad" />
                <AvatarFallback>SQ</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-spin" style={{ animationDuration: '2s' }}></div>
            </div>
            
            <div>
              <h2 className="text-white text-2xl mb-2">Connecting...</h2>
              <p className="text-white/70">Please wait</p>
            </div>

            <Button
              onClick={handleEndCall}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white border-0"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Active call screen
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col max-w-7xl mx-auto gap-4">
      <canvas ref={cameraSnapshotCanvasRef} className="hidden" />
      {/* Auto-Detection Banner */}
      {autoDetectedConflict && (cameraConflictActive || screenShareDemoMode) && (
        <Card className="backdrop-blur-xl bg-gradient-to-r from-yellow-500/90 to-orange-500/90 border-yellow-400 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Camera or Screen in use elsewhere</h3>
                <p className="text-white/80 text-sm">
                  We switched to the simulated preview while Zoom, Meet, or Teams has your hardware. Resume the real feed once the other app releases it.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!cameraAutoRetryEnabled && cameraConflictActive && (
                <Button
                  onClick={() => handleResumeCamera()}
                  className="bg-white/20 text-white hover:bg-white/30 border-0"
                >
                  Resume real camera
                </Button>
              )}
              <Button
                onClick={() => setAutoDetectedConflict(false)}
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                Dismiss
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Camera Demo Mode Banner */}
      {demoMode && !autoDetectedConflict && (
        <Card className="backdrop-blur-xl bg-gradient-to-r from-purple-500/90 to-pink-500/90 border-purple-400 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Camera Demo Mode Active</h3>
                <p className="text-white/80 text-sm">
                  Simulated camera - safe for presentations! Your real camera is not in use.
                </p>
              </div>
            </div>
            <Button
              onClick={handleToggleDemoMode}
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              Disable Camera Demo
            </Button>
          </div>
        </Card>
      )}

      {/* Screen Share Demo Mode Banner */}
      {screenShareDemoMode && !autoDetectedConflict && (
        <Card className="backdrop-blur-xl bg-gradient-to-r from-green-500/90 to-teal-500/90 border-green-400 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🖥️</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Screen Share Demo Mode Active</h3>
                <p className="text-white/80 text-sm">
                  Simulated screen share - safe for presentations! Won&apos;t conflict with Zoom/Meet/Teams.
                </p>
              </div>
            </div>
            <Button
              onClick={handleToggleScreenShareDemoMode}
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              Disable Screen Demo
            </Button>
          </div>
        </Card>
      )}

      {/* Call Info Bar */}
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white">
              {callerName} • {formatDuration(callDuration)}
            </span>
            {cameraConflictActive ? (
              <span className="text-xs text-yellow-200">
                📸 Cached camera preview
              </span>
            ) : demoMode ? (
              <span className="text-xs text-purple-400">
                🎬 Demo Mode
              </span>
            ) : mediaStream && videoQuality ? (
              <span className="text-xs text-green-400">
                📹 {videoQuality}
              </span>
            ) : mediaStream ? (
              <span className="text-xs text-green-400">
                📹 Camera Active
              </span>
            ) : null}
            {sharedCameraMode && !cameraConflictActive && !demoMode && (
              <span className="text-xs text-yellow-200 flex items-center gap-1">
                🤝 Shared cam mode
              </span>
            )}
            {visibleScreenShareQuality && (
              <span className={`text-xs px-2 py-0.5 rounded ${
                visibleScreenShareQuality === '8K UHD' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : visibleScreenShareQuality === '5K UHD' || visibleScreenShareQuality === '4K UHD'
                  ? 'bg-blue-500/80 text-white'
                  : 'bg-green-500/80 text-white'
              }`}>
                🖥️ {visibleScreenShareQuality} Screen Share
                {visibleScreenShareSource && (
                  <span className="block text-[10px] text-white/80 mt-0.5">
                    {visibleScreenShareSource}
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Monitor className="w-4 h-4" />
            <span>{visibleScreenShareQuality ?? videoQuality ?? 'HD'} Quality</span>
            {visibleScreenShareSource && (
              <span className="text-xs text-white/60">({visibleScreenShareSource})</span>
            )}
          </div>
        </div>
      </Card>

      {/* Presenter Stage */}
      {screenShareParticipant && (
        <Card className="relative overflow-hidden backdrop-blur-xl bg-black/40 border-white/30 min-h-[320px]">
          {screenShareParticipant.isSelf ? (
            screenShareDemoMode ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/40 to-pink-600/40 text-center px-6">
                <div className="text-white space-y-2">
                  <div className="text-4xl">🎬</div>
                  <p className="font-semibold">Screen Share Demo Mode Active</p>
                  <p className="text-white/80 text-sm">
                    Your teammates see the simulated share while other apps use your screen.
                  </p>
                </div>
              </div>
            ) : (
              <video
                ref={screenShareVideoRef}
                autoPlay
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-contain bg-black"
              />
            )
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-purple-900/60">
              <div className="text-center space-y-3 text-white px-6">
                <div className="text-4xl">🖥️</div>
                <p className="text-lg font-semibold">
                  {screenShareParticipant.name} is sharing their screen
                </p>
                <p className="text-sm text-white/70">
                  We switched everyone to speaker view automatically.
                </p>
              </div>
            </div>
          )}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
            <div className="bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              <span>{screenShareParticipant.isSelf ? 'You' : screenShareParticipant.name}</span>
            </div>
            {screenShareParticipant.isSelf && screenShareQuality && (
              <div
                className={`text-xs px-3 py-1 rounded-full ${
                  screenShareQuality === '8K UHD'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : screenShareQuality === '5K UHD' || screenShareQuality === '4K UHD'
                    ? 'bg-blue-500/80 text-white'
                    : 'bg-green-500/80 text-white'
                }`}
              >
                {screenShareQuality} Quality
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Participant Grid */}
      <div
        className={`flex-1 grid gap-4 ${
          gridParticipants.length >= 4 ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {gridParticipants.map((participant) => (
          <Card
            key={participant.userId}
            className={`relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 transition-all min-h-[200px] ${
              participant.isSpeaking 
                ? 'border-green-400 shadow-lg shadow-green-400/50' 
                : 'border-white/20'
            }`}
          >
            {/* Video Placeholder */}
            {participant.isSelf ? (
              participant.isVideoOff ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Avatar className="w-24 h-24 border-4 border-white/20">
                    <AvatarImage src={participant.avatar} />
                    <AvatarFallback>{participant.name[0] ?? 'Y'}</AvatarFallback>
                  </Avatar>
                </div>
              ) : cameraConflictActive && cameraFallbackFrame ? (
                <div className="relative w-full h-full">
                  <Image
                    src={cameraFallbackFrame}
                    alt="Camera preview"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-center px-6">
                    <div className="text-white font-semibold mb-2">Camera temporarily in use by another app</div>
                    <p className="text-white/80 text-sm">
                      Keeping your last frame visible while Zoom/Meet/Teams is running. We&apos;ll switch back automatically.
                    </p>
                  </div>
                </div>
              ) : cameraConflictActive ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-purple-600/40 to-pink-600/40 text-white">
                  <div className="text-3xl mb-2">📸</div>
                  <p className="font-semibold">Camera temporarily unavailable</p>
                  <p className="text-white/80 text-sm mt-1">
                    We&apos;re retrying while another app is using your webcam.
                  </p>
                </div>
              ) : demoMode ? (
                <>
                  <canvas
                    ref={demoCanvasRef}
                    width={640}
                    height={480}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-purple-500/80 text-white text-xs px-2 py-1 rounded">
                    🎬 DEMO
                  </div>
                </>
              ) : mediaStream ? (
                <>
                  <video
                    ref={localVideoRef}
                    autoPlay
                    playsInline
                    muted
                    className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <div className="bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                    {videoQuality && (
                      <div className={`text-white text-xs px-2 py-1 rounded ${
                        videoQuality === '4K UHD' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : videoQuality === 'Full HD'
                          ? 'bg-blue-500/80'
                          : 'bg-green-500/80'
                      }`}>
                        {videoQuality}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                  <div className="text-white/70 text-center space-y-2">
                    <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse mx-auto" />
                    <p className="text-sm">Starting camera...</p>
                    {cameraError && (
                      <p className="text-xs text-red-400">{cameraError}</p>
                    )}
                  </div>
                </div>
              )
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/40 to-purple-900/40 text-center px-4">
                <Avatar className="w-20 h-20 border-4 border-white/20 mb-3">
                  <AvatarImage src={participant.avatar} />
                  <AvatarFallback>{participant.name[0] ?? '?'}</AvatarFallback>
                </Avatar>
                <p className="text-white text-sm font-semibold">{participant.name}</p>
                <p className="text-white/60 text-xs mt-1">
                  {participant.isVideoOff ? 'Camera off' : 'Streaming'}
                </p>
              </div>
            )}
            {participant.isSelf && isSoloParticipant && (
              <div className="absolute bottom-3 left-3 bg-black/60 text-white/80 text-xs px-3 py-1 rounded-full">
                You&apos;re the first in the room
              </div>
            )}

            {/* Participant Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">{participant.name}</span>
                  {participant.isSpeaking && (
                    <div className="flex gap-0.5">
                      <div className="w-1 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-1 h-4 bg-green-400 rounded-full animate-pulse animation-delay-150"></div>
                      <div className="w-1 h-3 bg-green-400 rounded-full animate-pulse animation-delay-300"></div>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {participant.isMuted && (
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <MicOff className="w-3 h-3 text-white" />
                    </div>
                  )}
                  {participant.isVideoOff && (
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <VideoOff className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* More Options */}
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 text-white/70 hover:text-white hover:bg-black/30 backdrop-blur-md"
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>

      {/* Screen Share Overlay */}
      {screenShareDemoMode && isScreenSharing && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video">
            <canvas
              ref={screenShareDemoCanvasRef}
              width={1920}
              height={1080}
              className="w-full h-full object-contain rounded-lg border-2 border-green-400 shadow-2xl"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="bg-green-500/90 text-white px-4 py-2 rounded-lg backdrop-blur-md">
                🖥️ Demo Screen Share Active
              </div>
              <Button
                onClick={handleToggleScreenShare}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Stop Sharing
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Control Bar */}
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-4">
        <div className="flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center gap-2">
            <div className="text-white/70 text-sm">
              <span className="text-white">{callerName}</span> • {participantCount} participants
            </div>
          </div>

          {/* Center Controls */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleToggleMute}
              className={`rounded-full w-12 h-12 ${
                isMuted 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-white/10 hover:bg-white/20'
              } text-white border-0`}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>

            {callType === 'video' && (
              <Button
                onClick={handleToggleVideo}
                className={`rounded-full w-12 h-12 ${
                  isVideoOff 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-white/10 hover:bg-white/20'
                } text-white border-0`}
              >
                {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
              </Button>
            )}

            <Button
              onClick={handleToggleScreenShare}
              className={`rounded-full w-12 h-12 ${
                effectiveScreenShareActive
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-white/10 hover:bg-white/20'
              } text-white border-0`}
            >
              {effectiveScreenShareActive ? <MonitorOff className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
            </Button>

            <Button
              onClick={handleEndCall}
              className="rounded-full w-12 h-12 bg-red-500 hover:bg-red-600 text-white border-0"
            >
              <Phone className="w-5 h-5 rotate-135" />
            </Button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {!cameraAutoRetryEnabled && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleResumeCamera()}
                className="text-yellow-200 hover:text-yellow-100 hover:bg-yellow-500/20"
                title="Try to reconnect the real camera feed"
              >
                🔄 Resume Cam
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleDemoMode}
              className={`${
                demoMode 
                  ? 'text-purple-400 hover:text-purple-300 bg-purple-500/20 hover:bg-purple-500/30' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              title="Toggle Camera Demo Mode (prevents camera conflicts with Zoom/Meet/Teams)"
            >
              🎬 {demoMode ? 'Cam Demo ON' : 'Cam Demo'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleSafeStart}
              className={`${
                cameraSafeStart
                  ? 'text-amber-300 hover:text-amber-200 bg-amber-500/20 hover:bg-amber-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              title="Always start MoveSplash in presentation-safe demo mode so other meeting apps keep your webcam"
            >
              🛡️ {cameraSafeStart ? 'Safe Start ON' : 'Safe Start'}
            </Button>

            {multipleScreensDetected && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                    title="Choose which monitor or workspace to share by default"
                  >
                    <Monitor className="w-5 h-5 mr-2" />
                    {monitorSelectionLabel}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gradient-to-br from-purple-900 to-pink-900 border border-white/20 text-white">
                  {availableScreens.map((screen) => (
                    <DropdownMenuItem
                      key={screen.id}
                      onClick={() => handleSelectScreenShareTarget(screen.id)}
                      className="flex items-center justify-between gap-4 focus:bg-white/10 focus:text-white"
                    >
                      <span>{screen.label}</span>
                      <span className="text-xs text-white/60">{screen.size}</span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                    onClick={() => handleSelectScreenShareTarget('all-monitors')}
                    className="flex items-center justify-between gap-4 focus:bg-white/10 focus:text-white"
                  >
                    <span>All Monitors</span>
                    <span className="text-xs text-white/60">Entire workspace</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleScreenShareDemoMode}
              className={`${
                screenShareDemoMode 
                  ? 'text-green-400 hover:text-green-300 bg-green-500/20 hover:bg-green-500/30' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              title="Toggle Screen Share Demo Mode (prevents screen share conflicts)"
            >
              🖥️ {screenShareDemoMode ? 'Screen Demo ON' : 'Screen Demo'}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode(viewMode === 'grid' ? 'speaker' : 'grid')}
              className={`${
                viewMode === 'grid'
                  ? 'text-white/90 bg-white/15'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Grid3x3 className="w-5 h-5 mr-2" />
              {viewMode === 'grid' ? 'Grid' : 'Speaker'}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePanel('participants')}
              className={`${
                showParticipantsPanel
                  ? 'text-white/90 bg-white/15'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              Participants
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePanel('chat')}
              className={`${
                showChatPanel
                  ? 'text-white/90 bg-white/15'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Chat
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePanel('settings')}
              className={`${
                showSettingsPanel
                  ? 'text-white/90 bg-white/15'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Participants Drawer */}
      {showParticipantsPanel && (
        <Card className="fixed right-4 bottom-28 w-80 max-h-[420px] z-40 backdrop-blur-xl bg-slate-950/80 border-white/20 text-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-sm text-white/70">In the room</p>
              <p className="text-lg font-semibold">
                {participantCount} participant{participantCount !== 1 ? 's' : ''}
              </p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowParticipantsPanel(false)}
              className="text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-4 py-3 space-y-3 overflow-y-auto max-h-[340px]">
            {participants.map((participant) => (
              <div
                key={participant.userId}
                className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={participant.avatar} />
                    <AvatarFallback>{participant.name[0] ?? '?'}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">
                      {participant.name} {participant.isSelf ? '(You)' : ''}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      {participant.isMuted ? (
                        <span className="flex items-center gap-1">
                          <MicOff className="w-3 h-3" /> Muted
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Mic className="w-3 h-3" /> Live
                        </span>
                      )}
                      {participant.isVideoOff && (
                        <span className="flex items-center gap-1">
                          <VideoOff className="w-3 h-3" /> Cam off
                        </span>
                      )}
                      {participant.isScreenSharing && (
                        <span className="flex items-center gap-1">
                          <Monitor className="w-3 h-3" /> Sharing
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-white/50">
                  Joined{' '}
                  {new Date(participant.joinedAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Chat Drawer */}
      {showChatPanel && (
        <Card className="fixed right-4 bottom-28 w-[26rem] max-h-[460px] z-40 backdrop-blur-xl bg-slate-950/85 border-white/20 text-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-sm text-white/70">Meeting chat</p>
              <p className="text-lg font-semibold">Share quick notes & links</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowChatPanel(false)}
              className="text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div ref={chatListRef} className="px-4 py-3 space-y-3 overflow-y-auto max-h-[320px]">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col gap-1 rounded-lg px-3 py-2 border ${
                  message.isSelf ? 'bg-purple-600/20 border-purple-400/30' : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="font-semibold text-white/80">{message.author}</span>
                  <span>
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
                <p className="text-sm text-white/90 whitespace-pre-wrap">{message.text}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <Input
                value={chatDraft}
                onChange={(event) => setChatDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    handleSendChatMessage();
                  }
                }}
                placeholder="Type a message to everyone…"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
              <Button
                onClick={handleSendChatMessage}
                className="bg-purple-500 hover:bg-purple-600 text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Settings Drawer */}
      {showSettingsPanel && (
        <Card className="fixed right-4 bottom-28 w-80 max-h-[460px] z-40 backdrop-blur-xl bg-slate-950/85 border-white/20 text-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-sm text-white/70">Quick settings</p>
              <p className="text-lg font-semibold">Tune your call</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowSettingsPanel(false)}
              className="text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Camera Demo Mode</p>
                <p className="text-xs text-white/60">Use a safe simulated camera</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleToggleDemoMode}
                className={
                  demoMode
                    ? 'text-purple-300 bg-purple-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              >
                {demoMode ? 'On' : 'Off'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Screen Share Demo</p>
                <p className="text-xs text-white/60">Share a safe placeholder feed</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleToggleScreenShareDemoMode}
                className={
                  screenShareDemoMode
                    ? 'text-green-300 bg-green-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              >
                {screenShareDemoMode ? 'On' : 'Off'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Safe Start</p>
                <p className="text-xs text-white/60">Stay in demo when opening the app</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleToggleSafeStart}
                className={
                  cameraSafeStart
                    ? 'text-amber-200 bg-amber-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              >
                {cameraSafeStart ? 'On' : 'Off'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Camera lens</p>
                <p className="text-xs text-white/60">Front / rear for phones & tablets</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleFlipCamera}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                {cameraFacingMode === 'user' ? 'Rear cam' : 'Front cam'}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Layout</p>
                <p className="text-xs text-white/60">Switch between grid and speaker</p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setViewMode('grid')}
                  className={
                    viewMode === 'grid'
                      ? 'text-white bg-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                >
                  Grid
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setViewMode('speaker')}
                  className={
                    viewMode === 'speaker'
                      ? 'text-white bg-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                >
                  Speaker
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Camera Health</p>
                <p className="text-xs text-white/60">Retry the real camera feed</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleResumeCamera()}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                Resume cam
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Screen Share Indicator */}
      {effectiveScreenShareActive && (
        <Card className="absolute top-4 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-green-500/90 border-green-400 px-4 py-2 z-50">
          <div className="flex items-center gap-2 text-white">
            <Monitor className="w-4 h-4" />
            <span className="text-sm">You are sharing your screen</span>
          </div>
        </Card>
      )}

      <style>{`
        .rotate-135 {
          transform: rotate(135deg);
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}
