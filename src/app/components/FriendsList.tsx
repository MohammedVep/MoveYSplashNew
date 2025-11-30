'use client';
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { useCallback, useEffect, useMemo, useState, type KeyboardEvent } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Search,
  UserPlus,
  UserCheck,
  UserX,
  UserMinus,
  Ban,
  MessageCircle,
  Video,
} from 'lucide-react';
import { useUser, type UserData } from '../utils/userContext';
import { toast } from 'sonner';

interface Friend {
  id: string;
  name: string;
  username: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  mutualFriends: number;
}

interface FriendsListProps {
  onOpenProfile?: (userId: string) => void;
  onOpenMessage?: (userId: string) => void;
}

const deriveStatus = (userId: string): Friend['status'] => {
  const statuses: Friend['status'][] = ['online', 'away', 'offline'];
  const code = Array.from(userId).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return statuses[code % statuses.length];
};

const getStatusColor = (status: Friend['status']) => {
  switch (status) {
    case 'online':
      return 'bg-green-400';
    case 'away':
      return 'bg-yellow-400';
    default:
      return 'bg-gray-400';
  }
};

const mapUserToFriend = (user: UserData, currentUser: UserData | null): Friend => {
  const currentFriendIds = currentUser?.friendIds ?? [];
  const mutualFriends = user.friendIds.filter(
    (friendId) => currentFriendIds.includes(friendId) && friendId !== user.id,
  ).length;

  return {
    id: user.id,
    name: user.name,
    username: user.username.startsWith('@') ? user.username : `@${user.username}`,
    avatar: user.avatar,
    status: deriveStatus(user.id),
    mutualFriends,
  };
};

export function FriendsList({ onOpenProfile, onOpenMessage }: FriendsListProps = {}) {
  const { currentUser, allUsers, addFriend, removeFriend, blockUser, unblockUser, refreshAllUsers } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [pendingUserIds, setPendingUserIds] = useState<Set<string>>(new Set());
  const [dismissedUserIds, setDismissedUserIds] = useState<Set<string>>(new Set());

  const setPendingFor = useCallback((userId: string, isPending: boolean) => {
    setPendingUserIds(prev => {
      const next = new Set(prev);
      if (isPending) {
        next.add(userId);
      } else {
        next.delete(userId);
      }
      return next;
    });
  }, []);

  const isPending = useCallback((userId: string) => pendingUserIds.has(userId), [pendingUserIds]);

  useEffect(() => {
    void refreshAllUsers();
  }, [refreshAllUsers]);

  const handleOpenProfile = useCallback((userId: string) => {
    if (!onOpenProfile) {
      return;
    }
    onOpenProfile(userId);
  }, [onOpenProfile]);

  const handleCardKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>, userId: string) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleOpenProfile(userId);
      }
    },
    [handleOpenProfile],
  );

  const handleOpenMessages = useCallback(
    (userId: string) => {
      onOpenMessage?.(userId);
    },
    [onOpenMessage],
  );

  const allPeople = useMemo(() => Array.from(allUsers.values()), [allUsers]);

  const blockedIds = useMemo(() => currentUser?.blockedIds ?? [], [currentUser?.blockedIds]);
  const blockedSet = useMemo(() => new Set(blockedIds), [blockedIds]);
  const friendSet = useMemo(() => new Set(currentUser?.friendIds ?? []), [currentUser?.friendIds]);

  const friends = useMemo(() => {
    if (!currentUser) {
      return [];
    }

    return currentUser.friendIds
      .filter((friendId) => !blockedSet.has(friendId))
      .map((friendId) => allUsers.get(friendId))
      .filter((user): user is UserData => Boolean(user))
      .map((user) => mapUserToFriend(user, currentUser))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [allUsers, blockedSet, currentUser]);

  const friendRequests = useMemo(() => {
    if (!currentUser) {
      return [];
    }

    return allPeople
      .filter((user) => {
        if (user.id === currentUser.id) {
          return false;
        }
        if (dismissedUserIds.has(user.id)) {
          return false;
        }
        if (blockedSet.has(user.id)) {
          return false;
        }
        if (Array.isArray(user.blockedIds) && user.blockedIds.includes(currentUser.id)) {
          return false;
        }
        const hasAddedMe = user.friendIds.includes(currentUser.id);
        const alreadyFriends = currentUser.friendIds.includes(user.id);
        return hasAddedMe && !alreadyFriends;
      })
      .map((user) => mapUserToFriend(user, currentUser));
  }, [allPeople, blockedSet, currentUser, dismissedUserIds]);

  const suggestions = useMemo(() => {
    if (!currentUser) {
      return [];
    }

    const excludedIds = new Set([
      currentUser.id,
      ...currentUser.friendIds,
      ...currentUser.blockedIds,
      ...friendRequests.map((request) => request.id),
    ]);

    return allPeople
      .filter((user) => !excludedIds.has(user.id))
      .filter((user) => !dismissedUserIds.has(user.id))
      .filter((user) => !blockedSet.has(user.id))
      .filter((user) => !(Array.isArray(user.blockedIds) && user.blockedIds.includes(currentUser.id)))
      .map((user) => mapUserToFriend(user, currentUser))
      .sort((a, b) => {
        if (a.mutualFriends === b.mutualFriends) {
          return a.name.localeCompare(b.name);
        }
        return b.mutualFriends - a.mutualFriends;
      })
      .slice(0, 8);
  }, [allPeople, blockedSet, currentUser, dismissedUserIds, friendRequests]);

  const directory = useMemo(() => {
    if (!currentUser) {
      return [];
    }

    const seen = new Set<string>();
    return allPeople
      .filter((user) => user.id !== currentUser.id)
      .filter((user) => !blockedSet.has(user.id))
      .filter((user) => !(Array.isArray(user.blockedIds) && user.blockedIds.includes(currentUser.id)))
      .map((user) => mapUserToFriend(user, currentUser))
      .filter((friend) => {
        if (seen.has(friend.id)) {
          return false;
        }
        seen.add(friend.id);
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [allPeople, blockedSet, currentUser]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const matchesSearch = useCallback(
    (friend: Friend) =>
      !normalizedQuery ||
      friend.name.toLowerCase().includes(normalizedQuery) ||
      friend.username.toLowerCase().includes(normalizedQuery),
    [normalizedQuery],
  );

  const visibleFriends = friends.filter(matchesSearch);
  const visibleRequests = friendRequests.filter(matchesSearch);
  const visibleSuggestions = suggestions.filter(matchesSearch);
  const visibleDirectory = directory.filter(matchesSearch);
  const blockedUsers = useMemo(() => {
    if (!currentUser) {
      return [];
    }
    return currentUser.blockedIds
      .map((id) => allUsers.get(id))
      .filter((user): user is UserData => Boolean(user))
      .map((user) => mapUserToFriend(user, currentUser))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [allUsers, currentUser]);
  const visibleBlocked = blockedUsers.filter(matchesSearch);

  const handleAddFriend = useCallback(
    async (friendId: string) => {
      if (!currentUser) {
        toast.info('Sign in to connect.');
        return false;
      }

      setPendingFor(friendId, true);
      try {
        const success = await addFriend(friendId);
        if (success) {
          toast.success('Friend request sent!');
        } else {
          toast.error('Unable to send friend request right now.');
        }
        return success;
      } finally {
        setPendingFor(friendId, false);
      }
    },
    [addFriend, currentUser, setPendingFor],
  );

  const handleRemoveFriend = useCallback(
    async (friendId: string) => {
      if (!currentUser) {
        toast.info('Sign in to manage your friends.');
        return;
      }

      setPendingFor(friendId, true);
      try {
        const success = await removeFriend(friendId);
        if (success) {
          toast.success('Friend removed.');
        } else {
          toast.error('Unable to remove friend right now.');
        }
      } finally {
        setPendingFor(friendId, false);
      }
    },
    [currentUser, removeFriend, setPendingFor],
  );

  const dismissUser = useCallback((userId: string) => {
    setDismissedUserIds((prev) => {
      if (prev.has(userId)) {
        return prev;
      }
      const next = new Set(prev);
      next.add(userId);
      return next;
    });
  }, []);

  const restoreDismissedUser = useCallback((userId: string) => {
    setDismissedUserIds((prev) => {
      if (!prev.has(userId)) {
        return prev;
      }
      const next = new Set(prev);
      next.delete(userId);
      return next;
    });
  }, []);

  const handleBlockUser = useCallback(
    async (userId: string) => {
      if (!currentUser) {
        toast.info('Sign in to manage connections.');
        return;
      }

      setPendingFor(userId, true);
      try {
        const success = await blockUser(userId);
        if (success) {
          toast.success('User blocked.');
          dismissUser(userId);
        } else {
          toast.error('Unable to block user right now.');
        }
      } finally {
        setPendingFor(userId, false);
      }
    },
    [blockUser, currentUser, dismissUser, setPendingFor],
  );

  const handleUnblockUser = useCallback(
    async (userId: string) => {
      if (!currentUser) {
        return;
      }

      setPendingFor(userId, true);
      try {
        const success = await unblockUser(userId);
        if (success) {
          toast.success('User unblocked.');
        } else {
          toast.error('Unable to unblock user right now.');
        }
      } finally {
        setPendingFor(userId, false);
      }
    },
    [currentUser, setPendingFor, unblockUser],
  );

  const handleAcceptRequest = useCallback(
    async (friendId: string) => {
      const success = await handleAddFriend(friendId);
      if (success) {
        restoreDismissedUser(friendId);
      }
    },
    [handleAddFriend, restoreDismissedUser],
  );

  const handleDeclineRequest = useCallback(
    async (friendId: string) => {
      if (!currentUser) {
        toast.info('Sign in to manage connections.');
        return;
      }

      setPendingFor(friendId, true);
      try {
        const success = await removeFriend(friendId);
        if (success) {
          dismissUser(friendId);
          toast.info('Request declined.', {
            description: 'We removed the pending request for you.',
          });
        } else {
          toast.error('Unable to decline request right now.');
        }
      } finally {
        setPendingFor(friendId, false);
      }
    },
    [currentUser, dismissUser, removeFriend, setPendingFor],
  );

  const handleHideSuggestion = useCallback(
    (userId: string) => {
      dismissUser(userId);
      toast.info('Suggestion hidden', {
        description: 'We will show different people next time.',
      });
    },
    [dismissUser],
  );

  if (!currentUser) {
    return (
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 backdrop-blur-xl bg-white/10 border-white/20 text-center text-white/80">
          Sign in to see your friends and requests.
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Connections</h2>
            <p className="text-white/70">
              Manage your friends, requests, and discover new connections pulled live from Supabase.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search friends..."
              className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
        </div>

        <TabsList className="grid grid-cols-5 bg-white/10">
          <TabsTrigger value="all">
            All Friends ({friends.length})
          </TabsTrigger>
          <TabsTrigger value="requests">
            Requests ({friendRequests.length})
          </TabsTrigger>
          <TabsTrigger value="suggestions">
            Discover ({suggestions.length})
          </TabsTrigger>
          <TabsTrigger value="directory">
            Registered ({directory.length})
          </TabsTrigger>
          <TabsTrigger value="blocked">
            Blocked ({blockedUsers.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {visibleFriends.length === 0 ? (
            <Card className="p-8 backdrop-blur-xl bg-white/5 border-white/20 text-white/70 text-center">
              {friends.length === 0
                ? 'Add your first friend to see them here.'
                : 'No friends match your search.'}
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleFriends.map((friend) => (
                <Card
                  key={friend.id}
                  className="p-6 backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenProfile(friend.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, friend.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="w-14 h-14 border-2 border-white/20">
                          <AvatarImage src={friend.avatar} />
                          <AvatarFallback>{friend.name[0]}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(
                            friend.status,
                          )} rounded-full border-2 border-purple-900`}
                        />
                      </div>
                      <div>
                        <div className="text-white">{friend.name}</div>
                        <div className="text-white/60 text-sm">{friend.username}</div>
                        <div className="text-white/40 text-xs mt-1">
                          {friend.mutualFriends} mutual friends
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleOpenMessages(friend.id);
                        }}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={isPending(friend.id)}
                        onClick={(event) => {
                          event.stopPropagation();
                          void handleRemoveFriend(friend.id);
                        }}
                        className="text-white/70 hover:text-red-300 hover:bg-white/10 disabled:opacity-50"
                      >
                        <UserMinus className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">Remove</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={isPending(friend.id)}
                        onClick={(event) => {
                          event.stopPropagation();
                          void handleBlockUser(friend.id);
                        }}
                        className="text-white/70 hover:text-red-400 hover:bg-white/10 disabled:opacity-50"
                      >
                        <Ban className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">Block</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="requests">
          {visibleRequests.length === 0 ? (
            <Card className="p-8 backdrop-blur-xl bg-white/5 border-white/20 text-white/70 text-center">
              No pending friend requests.
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleRequests.map((friend) => (
                <Card
                  key={friend.id}
                  className="p-6 backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenProfile(friend.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, friend.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-14 h-14 border-2 border-white/20">
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white">{friend.name}</div>
                      <div className="text-white/60 text-sm">{friend.username}</div>
                      <div className="text-white/40 text-xs mt-1">
                        {friend.mutualFriends} mutual friends
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleAcceptRequest(friend.id);
                      }}
                      disabled={isPending(friend.id)}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 disabled:opacity-50"
                    >
                      <UserCheck className="w-4 h-4 mr-2" />
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      disabled={isPending(friend.id)}
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleDeclineRequest(friend.id);
                      }}
                      className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                    >
                      <UserX className="w-4 h-4 mr-2" />
                      Decline
                    </Button>
                    <Button
                      variant="outline"
                      disabled={isPending(friend.id)}
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleBlockUser(friend.id);
                      }}
                      className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                    >
                      <Ban className="w-4 h-4 mr-2" />
                      Block
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="suggestions">
          {visibleSuggestions.length === 0 ? (
            <Card className="p-8 backdrop-blur-xl bg-white/5 border-white/20 text-white/70 text-center">
              No suggestions right now.
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleSuggestions.map((friend) => (
                <Card
                  key={friend.id}
                  className="p-6 backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenProfile(friend.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, friend.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-14 h-14 border-2 border-white/20">
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white">{friend.name}</div>
                      <div className="text-white/60 text-sm">{friend.username}</div>
                      <div className="text-white/40 text-xs mt-1">
                        {friend.mutualFriends} mutual friends
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleAddFriend(friend.id);
                      }}
                      disabled={isPending(friend.id)}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 disabled:opacity-50"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add Friend
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleHideSuggestion(friend.id);
                      }}
                    >
                      <UserX className="w-4 h-4 mr-2" />
                      Hide
                    </Button>
                    <Button
                      variant="outline"
                      disabled={isPending(friend.id)}
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleBlockUser(friend.id);
                      }}
                      className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                    >
                      <Ban className="w-4 h-4 mr-2" />
                      Block
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="directory">
          {visibleDirectory.length === 0 ? (
            <Card className="p-8 backdrop-blur-xl bg-white/5 border-white/20 text-white/70 text-center">
              {directory.length === 0
                ? 'No one else has registered on MoveY Splash yet.'
                : 'No registered users match your search.'}
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleDirectory.map((friend) => {
                const isFriend = friendSet.has(friend.id);
                return (
                  <Card
                    key={friend.id}
                    className="p-6 backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleOpenProfile(friend.id)}
                    onKeyDown={(event) => handleCardKeyDown(event, friend.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Avatar className="w-14 h-14 border-2 border-white/20">
                            <AvatarImage src={friend.avatar} />
                            <AvatarFallback>{friend.name[0]}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(
                              friend.status,
                            )} rounded-full border-2 border-purple-900`}
                          />
                        </div>
                        <div>
                          <div className="text-white">{friend.name}</div>
                          <div className="text-white/60 text-sm">{friend.username}</div>
                          <div className="text-white/40 text-xs mt-1">
                            {friend.mutualFriends} mutual friends
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-white/60 text-right">
                        Registered • MoveY Splash
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <Button
                        onClick={(event) => {
                          event.stopPropagation();
                          handleOpenMessages(friend.id);
                        }}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      {!isFriend ? (
                        <Button
                          variant="outline"
                          disabled={isPending(friend.id)}
                          onClick={(event) => {
                            event.stopPropagation();
                            void handleAddFriend(friend.id);
                          }}
                          className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                        >
                          <UserPlus className="w-4 h-4 mr-2" />
                          Add Friend
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          disabled={isPending(friend.id)}
                          onClick={(event) => {
                            event.stopPropagation();
                            void handleRemoveFriend(friend.id);
                          }}
                          className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                        >
                          <UserMinus className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="blocked">
          {visibleBlocked.length === 0 ? (
            <Card className="p-8 backdrop-blur-xl bg-white/5 border-white/20 text-white/70 text-center">
              You have not blocked anyone.
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleBlocked.map((friend) => (
                <Card
                  key={friend.id}
                  className="p-6 backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenProfile(friend.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, friend.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-14 h-14 border-2 border-white/20">
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white">{friend.name}</div>
                      <div className="text-white/60 text-sm">{friend.username}</div>
                      <div className="text-white/40 text-xs mt-1">
                        Blocked connection
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    disabled={isPending(friend.id)}
                    onClick={(event) => {
                      event.stopPropagation();
                      void handleUnblockUser(friend.id);
                    }}
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
                  >
                    <UserCheck className="w-4 h-4 mr-2" />
                    Unblock
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
