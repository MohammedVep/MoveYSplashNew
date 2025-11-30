'use client';
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { useState, useRef, useEffect, useMemo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { 
  Camera, 
  Edit2, 
  Mail, 
  MapPin, 
  Calendar, 
  Link as LinkIcon,
  Heart,
  MessageCircle,
  Users,
  Star,
  Award,
  TrendingUp,
  Save,
  X,
  Image as ImageIcon,
  Video,
  Smile,
  Send,
  Trash2,
  Share2,
  Zap,
  Loader2
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EmojiPicker } from './EmojiPicker';
import { useUser, type PostComment, type UserPost } from '../utils/userContext';
import { ShareDialog } from './ShareDialog';
import {
  buildPostShareUrl,
  buildShareMessage,
  buildShareText,
  type ShareOptionId,
  type ShareablePost,
  type ShareToMessagesPayload,
} from '../utils/shareUtils';

type PostReactionState = {
  likes: number;
  liked: boolean;
  dirty: boolean;
};

type CommentPanelState = {
  isOpen: boolean;
  isLoading: boolean;
  isSubmitting: boolean;
  hasLoaded: boolean;
  comments: PostComment[];
  input: string;
  error: string | null;
};

interface ProfileProps {
  onShareToMessages?: (payload: ShareToMessagesPayload) => void;
  profileUserId?: string | null;
  isLoading?: boolean;
  onBackToFriends?: () => void;
}

// Icon mapping for achievements
const iconMap: Record<string, LucideIcon> = {
  'Award': Award,
  'TrendingUp': TrendingUp,
  'Camera': Camera,
  'Users': Users,
  'Star': Star,
  'MessageCircle': MessageCircle,
  'Zap': Zap,
  'Calendar': Calendar
};

export function Profile({
  onShareToMessages,
  profileUserId: profileUserIdProp = null,
  isLoading = false,
  onBackToFriends,
}: ProfileProps = {}) {
  const {
    currentUser: viewer,
    profileUser,
    profileUserId,
    allUsers,
    updateUser,
    addPost,
    deletePost,
    likePost,
    sharePost,
    getUserStats,
    getAchievements,
    loadUserData,
    loadProfileUser,
    fetchComments,
    addComment
  } = useUser();
  
  const [isEditing, setIsEditing] = useState(false);
  const perspectiveUser = profileUser ?? viewer;
  const [tempName, setTempName] = useState(perspectiveUser?.name || '');
  const [tempBio, setTempBio] = useState(perspectiveUser?.bio || '');
  const [tempLocation, setTempLocation] = useState(perspectiveUser?.location || '');
  const [tempWebsite, setTempWebsite] = useState(perspectiveUser?.website || '');

  // Post composer state
  const [postText, setPostText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<Array<{id: string, type: 'image' | 'video', url: string}>>([]);
  const currentUser = perspectiveUser;
  const viewerId = viewer?.id ?? null;
  const isViewingSelf = Boolean(currentUser && viewerId && currentUser.id === viewerId);

  const [postReactions, setPostReactions] = useState<Record<string, PostReactionState>>({});
  const [commentPanels, setCommentPanels] = useState<Record<string, CommentPanelState>>({});
  const [shareTarget, setShareTarget] = useState<ShareablePost | null>(null);
  const [isProcessingShare, setIsProcessingShare] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!profileUserIdProp) {
      return;
    }

    if (profileUserId === profileUserIdProp) {
      return;
    }

    void loadProfileUser(profileUserIdProp);
  }, [profileUserIdProp, profileUserId, loadProfileUser]);

  useEffect(() => {
    if (currentUser && !isEditing) {
      setTempName(currentUser.name || '');
      setTempBio(currentUser.bio || '');
      setTempLocation(currentUser.location || '');
      setTempWebsite(currentUser.website || '');
    }
  }, [currentUser, isEditing]);

  useEffect(() => {
    if (!currentUser) {
      setPostReactions({});
      return;
    }

    setPostReactions(prev => {
      const next: Record<string, PostReactionState> = {};

      currentUser.posts.forEach(post => {
        const baseState: PostReactionState = {
          likes: post.likes,
          liked: viewerId ? post.likedBy.includes(viewerId) : false,
          dirty: false
        };

        const existing = prev[post.id];
        if (existing?.dirty) {
          const serverMatches =
            existing.likes === baseState.likes && existing.liked === baseState.liked;
          next[post.id] = serverMatches ? baseState : existing;
        } else if (
          existing &&
          !existing.dirty &&
          existing.likes === baseState.likes &&
          existing.liked === baseState.liked
        ) {
          next[post.id] = existing;
        } else {
          next[post.id] = baseState;
        }
      });

      const prevKeys = Object.keys(prev);
      const nextKeys = Object.keys(next);
      const sameKeyCount = prevKeys.length === nextKeys.length;
      const isSameState =
        sameKeyCount &&
        nextKeys.every(key => {
          const prevEntry = prev[key];
          const nextEntry = next[key];
          return prevEntry === nextEntry;
        });

      return isSameState ? prev : next;
    });
  }, [currentUser, viewerId]);

  useEffect(() => {
    if (!currentUser) {
      setCommentPanels({});
      return;
    }

    setCommentPanels(prev => {
      const next: Record<string, CommentPanelState> = {};
      currentUser.posts.forEach(post => {
        const panel = prev[post.id];
        if (panel) {
          next[post.id] = panel;
        }
      });
      return next;
    });
  }, [currentUser]);

  const likesDelta = useMemo(() => {
    if (!currentUser) {
      return 0;
    }
    return currentUser.posts.reduce((sum, post) => {
      const reaction = postReactions[post.id];
      if (!reaction) {
        return sum;
      }
      return sum + (reaction.likes - post.likes);
    }, 0);
  }, [currentUser, postReactions]);

  const allUsersArray = useMemo(() => Array.from(allUsers.values()), [allUsers]);

  const stats = useMemo(() => {
    if (!currentUser) {
      return { totalPosts: 0, totalFriends: 0, totalLikes: 0, rank: 0 };
    }

    if (isViewingSelf) {
      return getUserStats();
    }

    const totalPosts = currentUser.posts.length;
    const totalFriends = currentUser.friendIds.length;
    const totalLikes = currentUser.posts.reduce((sum, post) => sum + post.likes, 0);
    const score = totalPosts * 10 + totalLikes + totalFriends * 5;

    const leaderboard = allUsersArray
      .map(user => {
        const likes = user.posts.reduce((sum, post) => sum + post.likes, 0);
        return {
          id: user.id,
          score: user.posts.length * 10 + likes + user.friendIds.length * 5,
        };
      })
      .sort((a, b) => b.score - a.score);

    const rankIndex = leaderboard.findIndex(entry => entry.id === currentUser.id);
    const rank = rankIndex >= 0 ? rankIndex + 1 : leaderboard.filter(entry => entry.score >= score).length + 1;

    return { totalPosts, totalFriends, totalLikes, rank };
  }, [allUsersArray, currentUser, getUserStats, isViewingSelf]);

  if (isLoading || (!currentUser && (profileUserIdProp ?? profileUserId))) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <Card className="px-6 py-4 bg-white/10 border-white/20 text-white/80 flex items-center gap-3">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading profile...</span>
        </Card>
      </div>
    );
  }

  if (!currentUser) {
    if (!viewer) {
      return (
        <div className="h-[calc(100vh-80px)] flex items-center justify-center">
          <p className="text-white">Please log in to view your profile</p>
        </div>
      );
    }

    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <Card className="px-6 py-8 bg-white/10 border-white/20 text-center text-white/80 space-y-4">
          <p>We couldn&rsquo;t find that profile.</p>
          {onBackToFriends && (
            <Button
              onClick={onBackToFriends}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              Back to Friends
            </Button>
          )}
        </Card>
      </div>
    );
  }

  const achievements = isViewingSelf ? getAchievements() : [];
  const totalLikesDisplay = Math.max(stats.totalLikes + likesDelta, 0);

  // Format join date
  const joinDate = new Date(currentUser.joinedAt);
  const joinMonthYear = joinDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Format numbers
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const statsDisplay = [
    { label: 'Posts', value: stats.totalPosts, icon: MessageCircle },
    { label: 'Friends', value: stats.totalFriends, icon: Users },
    { label: 'Likes', value: formatNumber(totalLikesDisplay), icon: Heart },
    { label: 'Rank', value: `#${stats.rank}`, icon: TrendingUp }
  ];

  // Format timestamp
  const formatTimestamp = (timestamp: Date): string => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else if (days < 7) {
      return `${days}d ago`;
    } else {
      return timestamp.toLocaleDateString();
    }
  };

  const formatCommentTimestamp = (timestamp: Date): string => {
    const diffMs = Date.now() - timestamp.getTime();
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
    return timestamp.toLocaleDateString();
  };

  const avatarForId = (id: string) =>
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(id || 'user')}`;

  const handleSave = async () => {
    if (!currentUser || !isViewingSelf) {
      return;
    }

    const success = await updateUser({
      name: tempName,
      bio: tempBio,
      location: tempLocation,
      website: tempWebsite
    });

    if (success) {
      const refreshed = await loadUserData(currentUser.id);
      if (!refreshed) {
        console.warn('Profile refresh from Supabase failed; continuing with local state');
      }
      await loadProfileUser(currentUser.id);
      setIsEditing(false);
      toast.success('Profile updated! ✨');
    } else {
      toast.error('Unable to update profile right now. Please try again.');
    }
  };

  const handleCancel = () => {
    setTempName(currentUser.name);
    setTempBio(currentUser.bio);
    setTempLocation(currentUser.location);
    setTempWebsite(currentUser.website);
    setIsEditing(false);
  };

  const handleProfilePictureChange = () => {
    if (!isViewingSelf) {
      toast.info('You can only change your own profile picture.');
      return;
    }
    toast.success('Profile picture updated! 📸');
  };

  const handleEmojiSelect = (emoji: string) => {
    setPostText(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const url = e.target?.result as string;
          setSelectedMedia(prev => [...prev, { 
            id: Math.random().toString(), 
            type: 'image', 
            url 
          }]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const url = e.target?.result as string;
          setSelectedMedia(prev => [...prev, { 
            id: Math.random().toString(), 
            type: 'video', 
            url 
          }]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveMedia = (id: string) => {
    setSelectedMedia(prev => prev.filter(m => m.id !== id));
  };

  const handleCreatePost = () => {
    if (!postText.trim() && selectedMedia.length === 0) {
      toast.error('Please add some content to your post');
      return;
    }

    addPost({
      text: postText,
      media: selectedMedia.length > 0 ? selectedMedia.map(m => ({ type: m.type, url: m.url })) : undefined
    });

    setPostText('');
    setSelectedMedia([]);
    toast.success('Post created! 🎉');
  };

  const handleDeletePost = (postId: string) => {
    deletePost(postId);
    toast.success('Post deleted');
  };

  const handleLikePost = (postId: string) => {
    if (!currentUser) {
      return;
    }

    if (!viewerId) {
      toast.info('Sign in to react to posts.');
      return;
    }

    const basePost = currentUser.posts.find(post => post.id === postId);
    if (!basePost) {
      return;
    }

    setPostReactions(prev => {
      const currentState = prev[postId] ?? {
        likes: basePost.likes,
        liked: viewerId ? basePost.likedBy.includes(viewerId) : false,
        dirty: false
      };
      const nextLiked = !currentState.liked;
      const nextLikes = nextLiked
        ? currentState.likes + 1
        : Math.max(currentState.likes - 1, 0);

      return {
        ...prev,
        [postId]: {
          likes: nextLikes,
          liked: nextLiked,
          dirty: true
        }
      };
    });

    void likePost(postId, viewerId);
  };

  const handleOpenShare = (post: UserPost) => {
    if (!currentUser) {
      toast.info('Please log in to share posts.');
      return;
    }

    const usernameValue = currentUser.username ?? '';
    const username = usernameValue
      ? usernameValue.startsWith('@')
        ? usernameValue
        : `@${usernameValue}`
      : '@movesplash-user';

    setShareTarget({
      userpostId: post.id,
      memberId: post.userId,
      authorName: currentUser.name,
      authorUsername: username,
      authorAvatar: currentUser.avatar,
      text: post.text ?? '',
    });
  };

  const handleShareOptionSelect = async (option: ShareOptionId) => {
    if (!shareTarget || !currentUser || isProcessingShare) {
      return;
    }

    if (!viewerId) {
      toast.info('Sign in to share posts.');
      return;
    }

    const shareUrl = buildPostShareUrl(shareTarget.memberId, shareTarget.userpostId);
    const shareCaption = buildShareText(shareTarget.authorName, shareTarget.text);
    const shareMessage = `${shareCaption}\n\n${shareUrl}`;
    const moveSplashMessage = buildShareMessage(shareTarget);

    let sharePerformed = false;

    const openWindow = (url: string) => {
      if (typeof window !== 'undefined') {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    };

    try {
      switch (option) {
        case 'copy': {
          try {
            if (navigator.clipboard?.writeText) {
              await navigator.clipboard.writeText(shareMessage);
            } else {
              const textArea = document.createElement('textarea');
              textArea.value = shareMessage;
              textArea.style.position = 'fixed';
              textArea.style.opacity = '0';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              document.execCommand('copy');
              document.body.removeChild(textArea);
            }
            toast.success('Post link copied!');
            sharePerformed = true;
          } catch (error) {
            console.error('Unable to copy link:', error);
            toast.error('Unable to copy the link. Please try again.');
          }
          break;
        }
        case 'facebook': {
          openWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
          toast.info('Opening Facebook share…');
          sharePerformed = true;
          break;
        }
        case 'twitter': {
          openWindow(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareCaption} ${shareUrl}`)}`
          );
          toast.info('Opening X (Twitter)…');
          sharePerformed = true;
          break;
        }
        case 'whatsapp': {
          openWindow(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`);
          toast.info('Launching WhatsApp…');
          sharePerformed = true;
          break;
        }
        case 'telegram': {
          openWindow(
            `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareCaption)}`
          );
          toast.info('Opening Telegram…');
          sharePerformed = true;
          break;
        }
        case 'email': {
          const mailto = `mailto:?subject=${encodeURIComponent('Check this MoveYSplash post')}&body=${encodeURIComponent(shareMessage)}`;
          if (typeof window !== 'undefined') {
            window.location.href = mailto;
          }
          toast.info('Composing email…');
          sharePerformed = true;
          break;
        }
        case 'movesplash': {
          onShareToMessages?.({
            message: moveSplashMessage,
            postId: shareTarget.userpostId,
            postOwnerId: shareTarget.memberId
          });
          toast.success('Draft ready in MoveYSplash Messages 💬');
          sharePerformed = true;
          break;
        }
        case 'web': {
          if (navigator.share) {
            try {
              await navigator.share({
                title: `${shareTarget.authorName} on MoveYSplash`,
                text: shareCaption,
                url: shareUrl
              });
              toast.success('Shared successfully! ✨');
              sharePerformed = true;
            } catch (error) {
              if (error instanceof DOMException && error.name === 'AbortError') {
                toast.info('Share cancelled.');
              } else {
                console.error('Web share failed:', error);
                toast.error('Unable to share via your device.');
              }
            }
          } else {
            toast.info('Device share sheet is not available.');
          }
          break;
        }
        default:
          break;
      }
    } finally {
      // no-op
    }

    if (!sharePerformed) {
      return;
    }

    setIsProcessingShare(true);
    try {
      await sharePost(shareTarget.memberId, shareTarget.userpostId, {
        platform: option,
        sharerUserId: viewerId,
        message: moveSplashMessage
      });
    } catch (error) {
      console.error('Error syncing share count:', error);
    } finally {
      setIsProcessingShare(false);
      setShareTarget(null);
    }
  };

  const handleToggleComments = async (post: UserPost) => {
    const panel = commentPanels[post.id];
    const isOpening = !panel?.isOpen;
    const hasLoaded = panel?.hasLoaded ?? false;

    setCommentPanels(prev => {
      const existing = prev[post.id];
      const nextState: CommentPanelState = existing
        ? {
            ...existing,
            isOpen: !existing.isOpen,
            isLoading: isOpening && !hasLoaded,
            error: null
          }
        : {
            isOpen: true,
            isLoading: true,
            isSubmitting: false,
            hasLoaded: false,
            comments: [],
            input: '',
            error: null
          };
      return { ...prev, [post.id]: nextState };
    });

    if (isOpening && !hasLoaded) {
      try {
        const comments = await fetchComments(post.userId, post.id);
        setCommentPanels(prev => {
          const existing = prev[post.id];
          if (!existing) {
            return prev;
          }
          return {
            ...prev,
            [post.id]: {
              ...existing,
              isLoading: false,
              hasLoaded: true,
              comments
            }
          };
        });
      } catch (error) {
        console.error('Error loading comments:', error);
        setCommentPanels(prev => {
          const existing = prev[post.id];
          if (!existing) {
            return prev;
          }
          return {
            ...prev,
            [post.id]: {
              ...existing,
              isLoading: false,
              hasLoaded: true,
              error: 'Unable to load comments right now.'
            }
          };
        });
      }
    }
  };

  const handleCommentInputChange = (postId: string, value: string) => {
    setCommentPanels(prev => {
      const panel = prev[postId];
      if (!panel) {
        return prev;
      }
      return {
        ...prev,
        [postId]: {
          ...panel,
          input: value,
          error: null
        }
      };
    });
  };

  const handleSubmitComment = async (post: UserPost) => {
    const panel = commentPanels[post.id];
    if (!panel || panel.isSubmitting) {
      return;
    }

    if (!viewerId) {
      toast.info('Please log in to comment.');
      return;
    }

    const trimmed = panel.input.trim();
    if (!trimmed) {
      setCommentPanels(prev => {
        const currentPanel = prev[post.id];
        if (!currentPanel) {
          return prev;
        }
        return {
          ...prev,
          [post.id]: {
            ...currentPanel,
            error: 'Please enter a comment before posting.'
          }
        };
      });
      return;
    }

    setCommentPanels(prev => {
      const currentPanel = prev[post.id];
      if (!currentPanel) {
        return prev;
      }
      return {
        ...prev,
        [post.id]: {
          ...currentPanel,
          isSubmitting: true,
          error: null
        }
      };
    });

    const result = await addComment(post.userId, post.id, trimmed);

    if (!result) {
      setCommentPanels(prev => {
        const currentPanel = prev[post.id];
        if (!currentPanel) {
          return prev;
        }
        return {
          ...prev,
          [post.id]: {
            ...currentPanel,
            isSubmitting: false,
            error: 'Unable to post your comment right now.'
          }
        };
      });
      return;
    }

    setCommentPanels(prev => {
      const currentPanel = prev[post.id];
      if (!currentPanel) {
        return prev;
      }
      return {
        ...prev,
        [post.id]: {
          ...currentPanel,
          isSubmitting: false,
          hasLoaded: true,
          comments: [...currentPanel.comments, result.comment],
          input: '',
          error: null
        }
      };
    });
  };

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <ScrollArea className="h-full">
        <div className="max-w-5xl mx-auto space-y-6 pb-8">
          {!isViewingSelf && onBackToFriends && (
            <div className="flex justify-end">
              <Button
                onClick={onBackToFriends}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Back to Friends
              </Button>
            </div>
          )}
          {/* Profile Header */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 overflow-hidden">
            {/* Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 relative">
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Profile Info */}
            <div className="p-6 relative">
              {/* Avatar */}
              <div className="absolute -top-20 left-6">
                <div className="relative group">
                  <Avatar className="w-32 h-32 border-4 border-white/20 backdrop-blur-xl bg-white/10">
                    <AvatarImage src={currentUser.avatar} />
                    <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                  </Avatar>
                  {isViewingSelf && (
                    <button
                      onClick={handleProfilePictureChange}
                      className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Camera className="w-5 h-5 text-white" />
                    </button>
                  )}
                </div>
              </div>

              {/* Edit Button */}
              {!isEditing && isViewingSelf && (
                <div className="flex justify-end mb-4">
                  <Button
                    onClick={() => {
                      setIsEditing(true);
                      setTempName(currentUser.name);
                      setTempBio(currentUser.bio);
                      setTempLocation(currentUser.location);
                      setTempWebsite(currentUser.website);
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              )}

              {/* Save/Cancel Buttons */}
              {isEditing && isViewingSelf && (
                <div className="flex justify-end gap-2 mb-4">
                  <Button
                    onClick={handleCancel}
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              )}

              {/* Name and Username */}
              <div className="mt-16 space-y-4">
                {isEditing ? (
                  <div className="space-y-2">
                    <Label className="text-white">Name</Label>
                    <Input
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="text-white text-3xl">{currentUser.name}</h1>
                    <p className="text-white/70">{currentUser.username}</p>
                  </>
                )}

                {/* Bio */}
                {isEditing ? (
                  <div className="space-y-2">
                    <Label className="text-white">Bio</Label>
                    <Textarea
                      value={tempBio}
                      onChange={(e) => setTempBio(e.target.value)}
                      className="bg-white/5 border-white/20 text-white min-h-[80px]"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                ) : (
                  currentUser.bio && <p className="text-white/80">{currentUser.bio}</p>
                )}

                {/* Profile Details */}
                <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                  {isEditing ? (
                    <>
                      <div className="flex-1 min-w-[200px] space-y-2">
                        <Label className="text-white">Location</Label>
                        <Input
                          value={tempLocation}
                          onChange={(e) => setTempLocation(e.target.value)}
                          className="bg-white/5 border-white/20 text-white"
                          placeholder="City, Country"
                        />
                      </div>
                      <div className="flex-1 min-w-[200px] space-y-2">
                        <Label className="text-white">Website</Label>
                        <Input
                          value={tempWebsite}
                          onChange={(e) => setTempWebsite(e.target.value)}
                          className="bg-white/5 border-white/20 text-white"
                          placeholder="yourwebsite.com"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{currentUser.email}</span>
                      </div>
                      {currentUser.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{currentUser.location}</span>
                        </div>
                      )}
                      {currentUser.website && (
                        <div className="flex items-center gap-2">
                          <LinkIcon className="w-4 h-4" />
                          <a href={`https://${currentUser.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            {currentUser.website}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {joinMonthYear}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsDisplay.map((stat) => (
              <Card key={stat.label} className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-2xl">{stat.value}</p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          {achievements.length > 0 && (
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
              <h2 className="text-white text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements ({achievements.length})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement) => {
                  const IconComponent = iconMap[achievement.icon] || Award;
                  return (
                    <div
                      key={achievement.id}
                      className="group relative"
                    >
                      <div className={`bg-gradient-to-br ${achievement.color} p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer`}>
                        <IconComponent className="w-8 h-8 text-white mx-auto mb-2" />
                        <p className="text-white text-sm">{achievement.name}</p>
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {achievement.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          {/* Content Tabs */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="w-full bg-white/5 border-b border-white/20 rounded-none">
                <TabsTrigger value="posts" className="flex-1">Posts ({currentUser.posts.length})</TabsTrigger>
                <TabsTrigger value="media" className="flex-1">Media</TabsTrigger>
                <TabsTrigger value="likes" className="flex-1">Likes</TabsTrigger>
              </TabsList>

              {/* Posts Tab */}
              <TabsContent value="posts" className="p-6 space-y-6">
                {isViewingSelf && (
                  <Card className="backdrop-blur-xl bg-white/5 border-white/20 p-4">
                    <div className="flex gap-3">
                      <Avatar className="w-10 h-10 border-2 border-white/20">
                        <AvatarImage src={currentUser.avatar} />
                        <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <Textarea
                          value={postText}
                          onChange={(e) => setPostText(e.target.value)}
                          placeholder="What&apos;s on your mind?"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[100px]"
                        />

                        {/* Selected Media Preview */}
                        {selectedMedia.length > 0 && (
                          <div className="grid grid-cols-3 gap-2">
                            {selectedMedia.map((media) => (
                              <div key={media.id} className="relative group">
                                {media.type === 'image' ? (
                                  <ImageWithFallback
                                    src={media.url}
                                    alt="Selected"
                                    className="w-full h-32 object-cover rounded-lg"
                                  />
                                ) : (
                                  <video
                                    src={media.url}
                                    className="w-full h-32 object-cover rounded-lg"
                                  />
                                )}
                                <button
                                  onClick={() => handleRemoveMedia(media.id)}
                                  className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="w-4 h-4 text-white" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Post Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                            <input
                              ref={videoInputRef}
                              type="file"
                              accept="video/*"
                              onChange={handleVideoUpload}
                              className="hidden"
                            />
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => fileInputRef.current?.click()}
                              className="text-white/70 hover:text-white hover:bg-white/10"
                            >
                              <ImageIcon className="w-5 h-5 mr-2" />
                              Photo
                            </Button>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => videoInputRef.current?.click()}
                              className="text-white/70 hover:text-white hover:bg-white/10"
                            >
                              <Video className="w-5 h-5 mr-2" />
                              Video
                            </Button>
                            
                            <div className="relative">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                className="text-white/70 hover:text-white hover:bg-white/10"
                              >
                                <Smile className="w-5 h-5" />
                              </Button>
                              {showEmojiPicker && (
                                <div className="absolute bottom-full left-0 mb-2 z-10">
                                  <EmojiPicker onSelect={handleEmojiSelect} />
                                </div>
                              )}
                            </div>
                          </div>

                          <Button
                            onClick={handleCreatePost}
                            disabled={!postText.trim() && selectedMedia.length === 0}
                            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
                {/* User Posts */}
                <div className="space-y-4">
                  {currentUser.posts.length === 0 ? (
                    <div className="text-center py-12">
                      <MessageCircle className="w-16 h-16 text-white/30 mx-auto mb-4" />
                      <p className="text-white/60">No posts yet. Share your first post!</p>
                    </div>
                  ) : (
                    currentUser.posts.map((post) => {
                      const reaction = postReactions[post.id];
                      const isLiked = reaction ? reaction.liked : (viewerId ? post.likedBy.includes(viewerId) : false);
                      const likeCount = reaction ? reaction.likes : post.likes;
                      const commentPanel = commentPanels[post.id];
                      const isCommentOpen = commentPanel?.isOpen;
                      return (
                        <Card key={post.id} className="backdrop-blur-xl bg-white/5 border-white/20 p-4">
                          <div className="flex items-start gap-3">
                            <Avatar className="w-10 h-10 border-2 border-white/20">
                              <AvatarImage src={currentUser.avatar} />
                              <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                            </Avatar>

                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <p className="text-white">{currentUser.name}</p>
                                  <p className="text-white/50 text-sm">{formatTimestamp(post.timestamp)}</p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeletePost(post.id)}
                                  className="text-white/50 hover:text-red-400 hover:bg-white/10"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>

                              {post.text && (
                                <p className="text-white/90 mb-3">{post.text}</p>
                              )}

                              {post.media && post.media.length > 0 && (
                                <div className={`grid gap-2 mb-3 ${post.media.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                  {post.media.map((media, idx) => (
                                    <div key={idx} className="rounded-lg overflow-hidden">
                                      {media.type === 'image' ? (
                                        <ImageWithFallback
                                          src={media.url}
                                          alt="Post media"
                                          className="w-full h-64 object-cover"
                                        />
                                      ) : (
                                        <video
                                          src={media.url}
                                          controls
                                          className="w-full h-64 object-cover"
                                        />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Post Stats */}
                              <div className="flex items-center gap-6 text-white/60 text-sm">
                                <button
                                  type="button"
                                  onClick={() => handleLikePost(post.id)}
                                  aria-label={isLiked ? `Unlike post (${likeCount})` : `Like post (${likeCount})`}
                                  className={`flex items-center gap-2 hover:text-pink-400 transition-colors ${isLiked ? 'text-pink-400' : ''}`}
                                >
                                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                                  <span>{likeCount}</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => void handleToggleComments(post)}
                                  className={`flex items-center gap-2 hover:text-blue-400 transition-colors ${isCommentOpen ? 'text-blue-400' : ''}`}
                                >
                                  <MessageCircle className="w-5 h-5" />
                                  <span>{post.comments}</span>
                                </button>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleOpenShare(post)}
                                  disabled={
                                    isProcessingShare &&
                                    shareTarget?.userpostId === post.id
                                  }
                                  className="flex items-center gap-2 text-white/70 hover:text-green-400 hover:bg-white/10 disabled:opacity-50"
                                >
                                  <Share2 className="w-5 h-5 mr-1" />
                                  <span>{post.shares}</span>
                                </Button>
                              </div>

                              {commentPanel?.isOpen && (
                                <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                                  {commentPanel.isLoading ? (
                                    <div className="flex items-center gap-3 text-white/70 text-sm">
                                      <Loader2 className="w-4 h-4 animate-spin" />
                                      <span>Loading comments...</span>
                                    </div>
                                  ) : (
                                    <>
                                      {commentPanel.comments.length === 0 && !commentPanel.error && (
                                        <p className="text-white/60 text-sm">Be the first to comment.</p>
                                      )}

                                      {commentPanel.comments.map((comment) => (
                                        <div key={comment.id} className="flex gap-3">
                                          <Avatar className="w-9 h-9 border border-white/10">
                                            <AvatarImage src={comment.authorAvatar || avatarForId(comment.authorId)} />
                                            <AvatarFallback>{comment.authorName[0] ?? 'U'}</AvatarFallback>
                                          </Avatar>
                                          <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                              <span className="text-white text-sm">{comment.authorName}</span>
                                              <span className="text-white/40 text-xs">
                                                {formatCommentTimestamp(comment.createdAt)}
                                              </span>
                                            </div>
                                            <p className="text-white/80 text-sm whitespace-pre-line">{comment.content}</p>
                                          </div>
                                        </div>
                                      ))}

                                      {commentPanel.error && (
                                        <p className="text-red-300 text-sm">{commentPanel.error}</p>
                                      )}
                                    </>
                                  )}

                                  <div className="flex gap-2 items-start">
                                    <Textarea
                                      value={commentPanel.input}
                                      onChange={(e) => handleCommentInputChange(post.id, e.target.value)}
                                      placeholder="Write a comment..."
                                      rows={2}
                                      className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                    />
                                    <Button
                                      type="button"
                                      onClick={() => void handleSubmitComment(post)}
                                      disabled={commentPanel.isSubmitting || commentPanel.input.trim().length === 0}
                                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 self-center disabled:opacity-50"
                                    >
                                      {commentPanel.isSubmitting ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                      ) : (
                                        <Send className="w-4 h-4" />
                                      )}
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </Card>
                      );
                    })
                  )}
                </div>
              </TabsContent>

              {/* Media Tab */}
              <TabsContent value="media" className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {currentUser.posts
                    .filter(post => post.media && post.media.length > 0)
                    .flatMap(post => post.media || [])
                    .map((media, idx) => (
                      <div key={idx} className="aspect-square rounded-lg overflow-hidden group relative">
                        {media.type === 'image' ? (
                          <ImageWithFallback
                            src={media.url}
                            alt="Media"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        ) : (
                          <video
                            src={media.url}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        )}
                      </div>
                    ))}
                </div>
                {currentUser.posts.filter(post => post.media && post.media.length > 0).length === 0 && (
                  <div className="text-center py-12">
                    <ImageIcon className="w-16 h-16 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60">No media posts yet</p>
                  </div>
                )}
              </TabsContent>

              {/* Likes Tab */}
              <TabsContent value="likes" className="p-6">
                <div className="space-y-4">
                  {/* This would show posts the user has liked from other users */}
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60">Posts you like will appear here</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </ScrollArea>
      <ShareDialog
        open={Boolean(shareTarget)}
        post={shareTarget}
        onClose={() => {
          if (!isProcessingShare) {
            setShareTarget(null);
          }
        }}
        onSelect={(option) => {
          void handleShareOptionSelect(option);
        }}
      />
    </div>
  );
}
