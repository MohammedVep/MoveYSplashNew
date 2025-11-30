'use client';
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import {
  Bell,
  Heart,
  MessageCircle,
  UserPlus,
  Video,
  Camera,
  Share2,
  X,
  Check,
  Clock,
  Loader2
} from 'lucide-react';
import type { AppView } from '../types/app';
import { toast } from 'sonner';
import { useUser } from '../utils/userContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-a14c7986`;

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'friend_request' | 'message' | 'video_call' | 'story' | 'share';
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  isRead: boolean;
  actionRequired?: boolean;
}

interface ServerNotification {
  id: string;
  userId: string;
  type: Notification['type'];
  actorName: string;
  actorAvatar: string;
  content: string;
  createdAt: string;
  isRead: boolean;
  actionRequired?: boolean;
}

interface NotificationsProps {
  onNavigate?: (view: AppView) => void;
}

const mapServerNotification = (record: ServerNotification): Notification => ({
  id: record.id,
  type: record.type,
  user: {
    name: record.actorName,
    avatar: record.actorAvatar
  },
  content: record.content,
  createdAt: record.createdAt,
  isRead: record.isRead,
  actionRequired: record.actionRequired
});

const formatRelativeTime = (timestamp: string) => {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const diffMs = Date.now() - date.getTime();
  const minutes = Math.floor(diffMs / (1000 * 60));
  if (minutes <= 0) {
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

export function Notifications({ onNavigate }: NotificationsProps) {
  const { currentUser } = useUser();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fetchControllerRef = useRef<AbortController | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const authHeaders = useMemo(() => {
    if (!currentUser) {
      return null;
    }
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`
    };
  }, [currentUser]);

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const canSyncWithServer = Boolean(currentUser && authHeaders);
  const hasNotifications = notifications.length > 0;
  const hasUnreadNotifications = unreadCount > 0;

  const fetchNotifications = useCallback(async () => {
    if (!currentUser || !authHeaders) {
      setNotifications([]);
      setLoading(false);
      return;
    }

    if (fetchControllerRef.current) {
      fetchControllerRef.current.abort();
    }
    const controller = new AbortController();
    fetchControllerRef.current = controller;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/${currentUser.id}`, {
        headers: authHeaders,
        signal: controller.signal
      });
      if (!response.ok) {
        throw new Error('Failed to load notifications');
      }

      const payload = await response.json().catch(() => ({}));
      const records: ServerNotification[] = Array.isArray(payload?.notifications)
        ? payload.notifications
        : [];
      setNotifications(records.map(mapServerNotification));
    } catch (fetchError) {
      if ((fetchError as Error).name === 'AbortError') {
        return;
      }
      console.error('Error loading notifications:', fetchError);
      setError('Unable to load notifications right now.');
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [currentUser, authHeaders]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  useEffect(() => {
    return () => {
      fetchControllerRef.current?.abort();
    };
  }, []);

  const handleRefresh = useCallback(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-4 h-4 text-pink-500" />;
      case 'comment':
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'friend_request':
        return <UserPlus className="w-4 h-4 text-green-500" />;
      case 'message':
        return <MessageCircle className="w-4 h-4 text-purple-500" />;
      case 'video_call':
        return <Video className="w-4 h-4 text-orange-500" />;
      case 'story':
        return <Camera className="w-4 h-4 text-yellow-500" />;
      case 'share':
        return <Share2 className="w-4 h-4 text-cyan-500" />;
      default:
        return <Bell className="w-4 h-4 text-white" />;
    }
  };

  const handleMarkAsRead = useCallback(async (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));

    if (!currentUser || !authHeaders) {
      return;
    }

    try {
      await fetch(`${API_BASE_URL}/notifications/${currentUser.id}/${id}`, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify({ isRead: true })
      });
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  }, [authHeaders, currentUser]);

  const handleMarkAllAsRead = useCallback(async () => {
    if (!hasUnreadNotifications) {
      toast.info('No unread notifications.');
      return;
    }

    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));

    if (!currentUser || !authHeaders) {
      toast.info('Sign in to sync notification status.');
      return;
    }

    try {
      await fetch(`${API_BASE_URL}/notifications/${currentUser.id}/mark-all-read`, {
        method: 'POST',
        headers: authHeaders
      });
      toast.success('All notifications marked as read');
    } catch (error) {
      console.error('Error marking all as read:', error);
      toast.error('Unable to update notifications right now.');
    }
  }, [authHeaders, currentUser, hasUnreadNotifications]);

  const handleClearAll = useCallback(async () => {
    if (!hasNotifications) {
      toast.info('No notifications to clear.');
      return;
    }

    setNotifications([]);

    if (!currentUser || !authHeaders) {
      toast.info('Sign in to clear notifications.');
      return;
    }

    try {
      await fetch(`${API_BASE_URL}/notifications/${currentUser.id}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      toast.success('All notifications cleared');
    } catch (error) {
      console.error('Error clearing notifications:', error);
      toast.error('Unable to clear notifications at the moment.');
    }
  }, [authHeaders, currentUser, hasNotifications]);

  const handleAcceptFriend = useCallback(async (id: string) => {
    await handleMarkAsRead(id);
    toast.success('Friend request accepted! 🎉');
  }, [handleMarkAsRead]);

  const handleDeclineFriend = useCallback(async (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));

    if (currentUser && authHeaders) {
      try {
        await fetch(`${API_BASE_URL}/notifications/${currentUser.id}/${id}`, {
          method: 'DELETE',
          headers: authHeaders
        });
      } catch (error) {
        console.error('Error deleting friend request notification:', error);
      }
    }
    toast.success('Friend request declined');
  }, [authHeaders, currentUser]);

  const handleNotificationClick = useCallback((notification: Notification) => {
    void handleMarkAsRead(notification.id);
    
    // Navigate based on notification type
    if (notification.type === 'message' && onNavigate) {
      onNavigate('messages');
      setOpen(false);
    } else if (notification.type === 'video_call' && onNavigate) {
      onNavigate('video');
      setOpen(false);
    } else if (notification.type === 'story' && onNavigate) {
      onNavigate('stories');
      setOpen(false);
    } else if (notification.type === 'friend_request' && onNavigate) {
      onNavigate('friends');
      setOpen(false);
    }
  }, [handleMarkAsRead, onNavigate]);

  const unreadNotifications = notifications.filter(n => !n.isRead);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        className="relative text-white/70 hover:text-white hover:bg-white/10"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <>
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
            <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 text-xs h-5 min-w-5 flex items-center justify-center">
              {unreadCount}
            </Badge>
          </>
        )}
      </Button>
      
      {open && (
        <div 
          ref={dropdownRef}
          className="fixed right-6 top-16 w-96 p-0 backdrop-blur-xl bg-gradient-to-br from-purple-900/95 to-pink-900/95 border-white/20 border rounded-lg shadow-2xl z-[9999] animate-in fade-in slide-in-from-top-2 duration-200"
        >
        {/* Header */}
        <div className="p-4 border-b border-white/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white text-lg">Notifications</h3>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleRefresh}
                disabled={loading}
                className="text-xs text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50"
              >
                Refresh
              </Button>
              {hasUnreadNotifications && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleMarkAllAsRead}
                  disabled={!canSyncWithServer || loading}
                  className="text-xs text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50"
                >
                  Mark all read
                </Button>
              )}
              <Button
                size="sm"
                variant="ghost"
                onClick={handleClearAll}
                disabled={!canSyncWithServer || !hasNotifications || loading}
                className="text-xs text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50"
              >
                Clear all
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full bg-white/10 border-white/20 mx-4 my-2 w-[calc(100%-2rem)]">
            <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-white/20 text-white">
              All ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread" className="flex-1 data-[state=active]:bg-white/20 text-white">
              Unread ({unreadCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
              {loading ? (
                <div className="h-[400px] flex items-center justify-center text-white/70 gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Syncing notifications...
                </div>
              ) : error ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center px-6 gap-3">
                  <p className="text-white/80">{error}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => fetchNotifications()}
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    Retry
                  </Button>
                </div>
              ) : !currentUser ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center px-6 gap-3 text-white/70">
                  <p>Sign in to view your notifications.</p>
                </div>
              ) : (
              <ScrollArea className="h-[400px]">
                <div className="space-y-1 py-2">
                  {notifications.length === 0 ? (
                    <div className="text-center py-12">
                      <Bell className="w-12 h-12 text-white/30 mx-auto mb-3" />
                      <p className="text-white/50">No notifications</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        onClick={() => handleNotificationClick(notification)}
                        className={`p-3 cursor-pointer transition-all hover:bg-white/10 ${
                          !notification.isRead ? 'bg-white/5' : ''
                        }`}
                      >
                        <div className="flex gap-3">
                          <div className="relative flex-shrink-0">
                            <Avatar className="w-10 h-10 border-2 border-white/20">
                              <AvatarImage src={notification.user.avatar} />
                              <AvatarFallback>{notification.user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-900 to-pink-900 rounded-full flex items-center justify-center border border-white/20">
                              {getNotificationIcon(notification.type)}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm">
                              <span className="font-medium">{notification.user.name}</span>
                              {' '}
                              <span className="text-white/70">{notification.content}</span>
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="w-3 h-3 text-white/40" />
                              <span className="text-white/50 text-xs">{formatRelativeTime(notification.createdAt)}</span>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              )}
                            </div>

                            {notification.actionRequired && notification.type === 'friend_request' && (
                              <div className="flex gap-2 mt-2">
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleAcceptFriend(notification.id);
                                  }}
                                  className="flex-1 bg-green-500 hover:bg-green-600 text-white border-0"
                                >
                                  <Check className="w-3 h-3 mr-1" />
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeclineFriend(notification.id);
                                  }}
                                  className="flex-1 text-white/70 hover:text-white hover:bg-white/10"
                                >
                                  <X className="w-3 h-3 mr-1" />
                                  Decline
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
              )}
          </TabsContent>

          <TabsContent value="unread" className="mt-0">
              {loading ? (
                <div className="h-[400px] flex items-center justify-center text-white/70 gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Syncing notifications...
                </div>
              ) : error ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center px-6 gap-3">
                  <p className="text-white/80">{error}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => fetchNotifications()}
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    Retry
                  </Button>
                </div>
              ) : !currentUser ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center px-6 gap-3 text-white/70">
                  <p>Sign in to view your notifications.</p>
                </div>
              ) : (
              <ScrollArea className="h-[400px]">
                <div className="space-y-1 py-2">
                  {unreadNotifications.length === 0 ? (
                    <div className="text-center py-12">
                      <Check className="w-12 h-12 text-white/30 mx-auto mb-3" />
                      <p className="text-white/50">All caught up!</p>
                    </div>
                  ) : (
                    unreadNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        onClick={() => handleNotificationClick(notification)}
                        className="p-3 cursor-pointer transition-all hover:bg-white/10 bg-white/5"
                      >
                        <div className="flex gap-3">
                          <div className="relative flex-shrink-0">
                            <Avatar className="w-10 h-10 border-2 border-white/20">
                              <AvatarImage src={notification.user.avatar} />
                              <AvatarFallback>{notification.user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-900 to-pink-900 rounded-full flex items-center justify-center border border-white/20">
                              {getNotificationIcon(notification.type)}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm">
                              <span className="font-medium">{notification.user.name}</span>
                              {' '}
                              <span className="text-white/70">{notification.content}</span>
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="w-3 h-3 text-white/40" />
                              <span className="text-white/50 text-xs">{formatRelativeTime(notification.createdAt)}</span>
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            </div>

                            {notification.actionRequired && notification.type === 'friend_request' && (
                              <div className="flex gap-2 mt-2">
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleAcceptFriend(notification.id);
                                  }}
                                  className="flex-1 bg-green-500 hover:bg-green-600 text-white border-0"
                                >
                                  <Check className="w-3 h-3 mr-1" />
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeclineFriend(notification.id);
                                  }}
                                  className="flex-1 text-white/70 hover:text-white hover:bg-white/10"
                                >
                                  <X className="w-3 h-3 mr-1" />
                                  Decline
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
              )}
          </TabsContent>
        </Tabs>
        </div>
      )}
    </div>
  );
}
