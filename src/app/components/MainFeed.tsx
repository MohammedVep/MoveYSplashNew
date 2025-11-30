'use client';
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { useState, useRef, useEffect, useCallback } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Image as ImageIcon,
  Video,
  Smile,
  Send,
  Bookmark,
  X,
  Loader2,
  Trash2,
  Pencil
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EmojiPicker } from './EmojiPicker';
import { toast } from 'sonner';
import { useUser, type PostComment } from '../utils/userContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { ShareDialog } from './ShareDialog';
import {
  buildPostShareUrl,
  buildShareMessage,
  buildShareText,
  type ShareOptionId,
  type ShareablePost,
  type ShareToMessagesPayload,
} from '../utils/shareUtils';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-a14c7986`;

type MediaPreview = {
  id: string;
  type: 'image' | 'video';
  url: string;
};

interface FeedPost {
  id: string;
  userId: string;
  text: string;
  media: MediaPreview[];
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  likedBy: string[];
}

type CommentPanelState = {
  isOpen: boolean;
  isLoading: boolean;
  isSubmitting: boolean;
  hasLoaded: boolean;
  comments: PostComment[];
  input: string;
  error: string | null;
};

interface MainFeedProps {
  onShareToMessages?: (payload: ShareToMessagesPayload) => void;
}

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

const formatCommentTimestamp = (date: Date) => {
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

const avatarForId = (id: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(id || 'user')}`;

export function MainFeed({ onShareToMessages }: MainFeedProps = {}) {
  const {
    currentUser,
    allUsers,
    addPost,
    fetchComments,
    addComment,
    sharePost,
    toggleSavePost,
    deletePost,
    updatePost,
  } = useUser();
  const [newPost, setNewPost] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaPreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [commentsState, setCommentsState] = useState<Record<string, CommentPanelState>>({});
  const [shareTarget, setShareTarget] = useState<ShareablePost | null>(null);
  const [isProcessingShare, setIsProcessingShare] = useState(false);
  const [bookmarkingPostKey, setBookmarkingPostKey] = useState<string | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState('');
  const [savingEditId, setSavingEditId] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    setLoadingPosts(true);
    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }

      const payload = await response.json().catch(() => null);
      const rawPosts = Array.isArray(payload?.posts) ? payload.posts : [];

      const mappedPosts: FeedPost[] = rawPosts
        .map((item: unknown) => {
          if (typeof item !== 'object' || item === null) {
            return null;
          }
          const record = item as Record<string, unknown>;
          const idValue = record['id'];
          const userIdValue = record['userId'];
          if (typeof idValue !== 'string' || typeof userIdValue !== 'string') {
            return null;
          }

          const text =
            typeof record['text'] === 'string'
              ? record['text']
              : typeof record['content'] === 'string'
                ? record['content']
                : '';
          const timestamp =
            typeof record['timestamp'] === 'string' && record['timestamp']
              ? record['timestamp']
              : new Date().toISOString();
          const likes =
            typeof record['likes'] === 'number' && Number.isFinite(record['likes'])
              ? record['likes']
              : 0;
          const comments =
            typeof record['comments'] === 'number' && Number.isFinite(record['comments'])
              ? record['comments']
              : 0;
          const shares =
            typeof record['shares'] === 'number' && Number.isFinite(record['shares'])
              ? record['shares']
              : 0;
          const likedBy = Array.isArray(record['likedBy'])
            ? record['likedBy'].filter((value): value is string => typeof value === 'string')
            : [];

          const rawMedia = Array.isArray(record['media']) ? record['media'] : [];
          const media: MediaPreview[] = rawMedia
            .map((mediaItem: unknown, index) => {
              if (typeof mediaItem !== 'object' || mediaItem === null) {
                return null;
              }
              const mediaRecord = mediaItem as Record<string, unknown>;
              const url = typeof mediaRecord['url'] === 'string' ? mediaRecord['url'] : '';
              if (!url) {
                return null;
              }
              const type: 'image' | 'video' =
                mediaRecord['type'] === 'video' ? 'video' : 'image';
              return {
                id: `${idValue}-media-${index}`,
                type,
                url,
              };
            })
            .filter((mediaItem): mediaItem is MediaPreview => Boolean(mediaItem));

          return {
            id: idValue,
            userId: userIdValue,
            text,
            media,
            likes,
            comments,
            shares,
            timestamp,
            likedBy,
          };
        })
        .filter((post: FeedPost | null): post is FeedPost => Boolean(post))
        .sort(
          (a: FeedPost, b: FeedPost) =>
            Date.parse(b.timestamp) - Date.parse(a.timestamp)
        );

      setPosts(mappedPosts);
      setCommentsState({});
    } catch (error) {
      console.error('Error loading feed posts:', error);
      toast.error('Unable to load feed right now.');
    } finally {
      setLoadingPosts(false);
    }
  }, []);

  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

  const handleEmojiSelect = (emoji: string) => {
    setNewPost(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        if (!url) {
          return;
        }
        setSelectedMedia(prev => [
          ...prev,
          { id: `${file.name}-${Date.now()}`, type: 'image', url }
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        if (!url) {
          return;
        }
        setSelectedMedia(prev => [
          ...prev,
          { id: `${file.name}-${Date.now()}`, type: 'video', url }
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveMedia = (id: string) => {
    setSelectedMedia(prev => prev.filter(media => media.id !== id));
  };

  const handlePost = async () => {
    if (!currentUser) {
      toast.info('Sign in to share what’s on your mind.');
      return;
    }

    if (!newPost.trim() && selectedMedia.length === 0) {
      toast.error('Please write something or add media');
      return;
    }

    setIsPosting(true);
    try {
      await addPost({
        text: newPost,
        media:
          selectedMedia.length > 0
            ? selectedMedia.map(media => ({ type: media.type, url: media.url }))
            : undefined
      });

      setNewPost('');
      setSelectedMedia([]);
      setShowEmojiPicker(false);
      toast.success('Posted! 🎉');
      await loadPosts();
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Unable to post right now.');
    } finally {
      setIsPosting(false);
    }
  };

  const handleOpenShare = (
    post: FeedPost,
    authorName: string,
    authorUsername: string,
    authorAvatar: string
  ) => {
    setShareTarget({
      userpostId: post.id,
      memberId: post.userId,
      authorName,
      authorUsername,
      authorAvatar,
      text: post.text,
    });
  };

  const handleDeletePost = async (post: FeedPost) => {
    if (!currentUser || currentUser.id !== post.userId) {
      toast.info('You can only delete your own posts.');
      return;
    }
    setDeletingPostId(post.id);
    const previous = posts;
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
    try {
      await deletePost(post.id);
      toast.success('Post deleted');
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Unable to delete post right now.');
      setPosts(previous);
    } finally {
      setDeletingPostId(null);
    }
  };

  const handleStartEdit = (post: FeedPost) => {
    if (!currentUser || currentUser.id !== post.userId) {
      toast.info('You can only edit your own posts.');
      return;
    }
    setEditingPostId(post.id);
    setEditDraft(post.text);
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setEditDraft('');
  };

  const handleSaveEdit = async (post: FeedPost) => {
    if (!currentUser || currentUser.id !== post.userId) {
      toast.info('You can only edit your own posts.');
      return;
    }
    const trimmed = editDraft.trim();
    if (!trimmed) {
      toast.info('Add some text to your post.');
      return;
    }
    setSavingEditId(post.id);
    const previous = posts;
    setPosts((prev) => prev.map((p) => (p.id === post.id ? { ...p, text: trimmed } : p)));
    try {
      await updatePost(post.id, trimmed);
      toast.success('Post updated');
      setEditingPostId(null);
      setEditDraft('');
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error('Unable to update post right now.');
      setPosts(previous);
    } finally {
      setSavingEditId(null);
    }
  };

  const handleShareOptionSelect = async (option: ShareOptionId) => {
    if (!shareTarget || isProcessingShare) {
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
            toast.success('Post link copied to clipboard!');
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
      const updatedShares = await sharePost(
        shareTarget.memberId,
        shareTarget.userpostId,
        {
          platform: option,
          sharerUserId: currentUser?.id ?? undefined,
          message: moveSplashMessage
        }
      );

      setPosts(prev =>
        prev.map(post =>
          post.id === shareTarget.userpostId
            ? {
                ...post,
                shares: updatedShares ?? post.shares + 1
              }
            : post
        )
      );
    } catch (error) {
      console.error('Error syncing share count:', error);
      setPosts(prev =>
        prev.map(post =>
          post.id === shareTarget.userpostId
            ? { ...post, shares: post.shares + 1 }
            : post
        )
      );
    } finally {
      setIsProcessingShare(false);
      setShareTarget(null);
    }
  };

  const handleToggleComments = useCallback(
    async (post: FeedPost) => {
      const existingPanel = commentsState[post.id];
      const isOpening = !existingPanel?.isOpen;
      const hasLoaded = existingPanel?.hasLoaded ?? false;

      setCommentsState(prev => {
        const panel = prev[post.id];
        const nextState: CommentPanelState = panel
          ? {
              ...panel,
              isOpen: !panel.isOpen,
              isLoading: isOpening && !hasLoaded,
              error: null,
            }
          : {
              isOpen: true,
              isLoading: true,
              isSubmitting: false,
              hasLoaded: false,
              comments: [],
              input: '',
              error: null,
            };
        return { ...prev, [post.id]: nextState };
      });

      if (isOpening && !hasLoaded) {
        try {
          const comments = await fetchComments(post.userId, post.id);
          setCommentsState(prev => {
            const panel = prev[post.id];
            if (!panel) {
              return prev;
            }
            return {
              ...prev,
              [post.id]: {
                ...panel,
                isLoading: false,
                hasLoaded: true,
                comments,
              },
            };
          });
        } catch (error) {
          console.error('Error loading comments:', error);
          setCommentsState(prev => {
            const panel = prev[post.id];
            if (!panel) {
              return prev;
            }
            return {
              ...prev,
              [post.id]: {
                ...panel,
                isLoading: false,
                hasLoaded: true,
                error: 'Unable to load comments right now.',
              },
            };
          });
        }
      }
    },
    [commentsState, fetchComments]
  );

  const handleToggleBookmark = useCallback(
    async (post: FeedPost, authorName: string) => {
      if (!currentUser) {
        toast.info('Sign in to save posts.');
        return;
      }

      const key = `${post.userId}:${post.id}`;
      setBookmarkingPostKey(key);

      try {
        const saved = await toggleSavePost(post.userId, post.id);
        if (saved) {
          toast.success(`Saved ${authorName}'s post.`);
        } else {
          toast.success('Removed from saved posts.');
        }
      } catch (error) {
        console.error('Error updating bookmark state:', error);
        const message = error instanceof Error && error.message ? error.message : 'Unable to update saved posts right now.';
        toast.error(message);
      } finally {
        setBookmarkingPostKey(prev => (prev === key ? null : prev));
      }
    },
    [currentUser, toggleSavePost]
  );

  const handleCommentInputChange = (postId: string, value: string) => {
    setCommentsState(prev => {
      const panel = prev[postId];
      if (!panel) {
        return prev;
      }
      return {
        ...prev,
        [postId]: {
          ...panel,
          input: value,
          error: null,
        },
      };
    });
  };

  const handleSubmitComment = async (post: FeedPost) => {
    const panel = commentsState[post.id];
    if (!panel || panel.isSubmitting) {
      return;
    }

    if (!currentUser) {
      toast.info('Sign in to join the conversation.');
      return;
    }

    const trimmed = panel.input.trim();
    if (!trimmed) {
      setCommentsState(prev => {
        const currentPanel = prev[post.id];
        if (!currentPanel) {
          return prev;
        }
        return {
          ...prev,
          [post.id]: {
            ...currentPanel,
            error: 'Please enter a comment before posting.',
          },
        };
      });
      return;
    }

    setCommentsState(prev => {
      const currentPanel = prev[post.id];
      if (!currentPanel) {
        return prev;
      }
      return {
        ...prev,
        [post.id]: {
          ...currentPanel,
          isSubmitting: true,
          error: null,
        },
      };
    });

    const result = await addComment(post.userId, post.id, trimmed);

    if (!result) {
      setCommentsState(prev => {
        const currentPanel = prev[post.id];
        if (!currentPanel) {
          return prev;
        }
        return {
          ...prev,
          [post.id]: {
            ...currentPanel,
            isSubmitting: false,
            error: 'Unable to post your comment right now.',
          },
        };
      });
      return;
    }

    setCommentsState(prev => {
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
          error: null,
        },
      };
    });

    setPosts(prev =>
      prev.map(feedPost =>
        feedPost.id === post.id
          ? { ...feedPost, comments: result.totalComments }
          : feedPost
      )
    );
  };

  const handleLike = async (post: FeedPost) => {
    if (!currentUser) {
      toast.info('Sign in to like posts.');
      return;
    }

    const previousPosts = posts;
    const isLiked = post.likedBy.includes(currentUser.id);

    setPosts(prev =>
      prev.map(feedPost =>
        feedPost.id === post.id
          ? {
              ...feedPost,
              likes: isLiked ? Math.max(feedPost.likes - 1, 0) : feedPost.likes + 1,
              likedBy: isLiked
                ? feedPost.likedBy.filter(id => id !== currentUser.id)
                : [...feedPost.likedBy, currentUser.id],
            }
          : feedPost
      )
    );

    try {
      await fetch(`${API_BASE_URL}/posts/${post.userId}/${post.id}/like`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ likerUserId: currentUser.id })
      });
    } catch (error) {
      console.error('Error updating like:', error);
      toast.error('Unable to update like right now.');
      setPosts(previousPosts);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post Card */}
      <Card className="p-6 backdrop-blur-xl bg-white/10 border-white/20">
        <div className="flex gap-4">
          <Avatar className="w-12 h-12 border-2 border-white/20">
            <AvatarImage src={currentUser?.avatar ?? avatarForId(currentUser?.id ?? 'guest')} />
            <AvatarFallback>{currentUser?.name?.[0] ?? 'U'}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <Textarea
              placeholder="What&apos;s on your mind? Share with your squad..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 resize-none min-h-[100px]"
            />
            
            {/* Media Preview */}
            {selectedMedia.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {selectedMedia.map((media) => (
                  <div key={media.id} className="relative group">
                    {media.type === 'image' ? (
                      <ImageWithFallback
                        src={media.url}
                        alt="Upload preview"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    ) : (
                      <video
                        src={media.url}
                        className="w-full h-40 object-cover rounded-lg"
                        controls
                      />
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveMedia(media.id)}
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
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
                    <Smile className="w-5 h-5 mr-2" />
                    Emoji
                  </Button>
                  {showEmojiPicker && (
                    <div className="absolute bottom-full left-0 mb-2 z-50">
                      <EmojiPicker onSelect={handleEmojiSelect} />
                    </div>
                  )}
                </div>
              </div>
              <Button 
                onClick={handlePost}
                disabled={isPosting || (!newPost.trim() && selectedMedia.length === 0)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPosting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Posting
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Post
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {loadingPosts && (
        <Card className="p-6 backdrop-blur-xl bg-white/10 border-white/20">
          <div className="flex items-center gap-3 text-white/80 text-sm">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading feed...</span>
          </div>
        </Card>
      )}

      {!loadingPosts && posts.length === 0 && (
        <Card className="p-6 backdrop-blur-xl bg-white/10 border-white/20 text-center">
          <p className="text-white/70">
            No posts yet. Share something to get the conversation started!
          </p>
        </Card>
      )}

      {posts.map((post) => {
        const author = allUsers.get(post.userId);
        const displayName = author?.name ?? 'MoveSplash user';
        const usernameValue = author?.username ?? '';
        const username = usernameValue
          ? (usernameValue.startsWith('@') ? usernameValue : `@${usernameValue}`)
          : '@movesplash-user';
        const avatar = author?.avatar ?? avatarForId(post.userId);
        const isLiked = currentUser ? post.likedBy.includes(currentUser.id) : false;
        const commentPanel = commentsState[post.id];
        const bookmarkKey = `${post.userId}:${post.id}`;
        const isBookmarked = Boolean(currentUser?.savedPostIds?.includes(bookmarkKey));
        const isBookmarking = bookmarkingPostKey === bookmarkKey;

        return (
          <Card key={post.id} className="overflow-hidden backdrop-blur-xl bg-white/10 border-white/20">
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-white/20">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{displayName[0] ?? 'U'}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white">{displayName}</div>
                    <div className="text-white/50 text-sm">
                      {username} • {formatRelativeTime(post.timestamp)}
                    </div>
                  </div>
                </div>
              <div className="flex items-center gap-2">
                {currentUser?.id === post.userId && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                    onClick={() => handleStartEdit(post)}
                    disabled={savingEditId === post.id}
                    title="Edit post"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                )}
                {currentUser?.id === post.userId && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-red-400 hover:bg-white/10"
                    onClick={() => void handleDeletePost(post)}
                    disabled={deletingPostId === post.id}
                    title="Delete post"
                  >
                    {deletingPostId === post.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => toast.info('More post actions coming soon')}
                >
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

            <div className="px-6 pb-4">
              {editingPostId === post.id ? (
                <div className="space-y-2">
                  <Textarea
                    value={editDraft}
                    onChange={(event) => setEditDraft(event.target.value)}
                    className="bg-white/5 border-white/10 text-white min-h-[120px]"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => void handleSaveEdit(post)}
                      disabled={savingEditId === post.id}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      {savingEditId === post.id ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Save'}
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={handleCancelEdit}
                      disabled={savingEditId === post.id}
                      className="text-white/80 hover:text-white"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-white/90 whitespace-pre-line">{post.text}</p>
              )}
            </div>

            {post.media.length > 0 && (
              <div className={`grid gap-2 px-6 pb-4 ${post.media.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {post.media.map((media) => (
                  <div key={media.id} className="rounded-lg overflow-hidden">
                    {media.type === 'image' ? (
                      <ImageWithFallback
                        src={media.url}
                        alt="Post media"
                        className={`w-full ${post.media.length === 1 ? 'max-h-96' : 'h-64'} object-cover`}
                      />
                    ) : (
                      <video
                        src={media.url}
                        className={`w-full ${post.media.length === 1 ? 'max-h-96' : 'h-64'} object-cover`}
                        controls
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="p-6 pt-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-6 text-white/60 text-sm">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-white/70 hover:bg-white/10 ${
                    isBookmarked ? 'text-amber-300 hover:text-amber-200' : 'hover:text-white'
                  }`}
                  onClick={() => handleToggleBookmark(post, displayName)}
                  disabled={isBookmarking}
                  aria-pressed={isBookmarked}
                  aria-label={isBookmarked ? 'Remove from saved posts' : 'Save post'}
                >
                  {isBookmarking ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Bookmark className={`w-4 h-4 transition-colors ${isBookmarked ? 'fill-current' : ''}`} />
                  )}
                </Button>
              </div>
              
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <Button 
                  variant="ghost" 
                  className={`flex-1 ${isLiked ? 'text-pink-400' : 'text-white/70'} hover:text-pink-400 hover:bg-white/10`}
                  onClick={() => handleLike(post)}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  Like
                </Button>
                <Button 
                  variant="ghost" 
                  className="flex-1 text-white/70 hover:text-blue-400 hover:bg-white/10"
                  onClick={() => handleToggleComments(post)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Comment
                </Button>
                <Button 
                  variant="ghost" 
                  className="flex-1 text-white/70 hover:text-green-400 hover:bg-white/10 disabled:opacity-50"
                  disabled={isProcessingShare && shareTarget?.userpostId === post.id}
                  onClick={() => handleOpenShare(post, displayName, username, avatar)}
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
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
          </Card>
        );
      })}
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
