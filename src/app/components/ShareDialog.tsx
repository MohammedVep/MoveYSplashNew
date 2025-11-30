/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Facebook,
  Link as LinkIcon,
  Mail,
  MessageCircle,
  Send,
  Share2,
  Sparkles,
  Twitter,
  Users,
} from 'lucide-react';
import { cn } from './ui/utils';
import type { ShareablePost, ShareOptionId } from '../utils/shareUtils';

const optionOrder: ShareOptionId[] = [
  'web',
  'copy',
  'facebook',
  'twitter',
  'whatsapp',
  'telegram',
  'email',
  'movesplash',
];

const optionConfig: Record<
  ShareOptionId,
  {
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    highlight?: boolean;
  }
> = {
  web: {
    label: 'Share with device',
    description: 'Use your device share sheet',
    icon: Share2,
    highlight: true,
  },
  copy: {
    label: 'Copy link',
    description: 'Copy post link to clipboard',
    icon: LinkIcon,
  },
  facebook: {
    label: 'Facebook',
    description: 'Share to your Facebook feed',
    icon: Facebook,
  },
  twitter: {
    label: 'X (Twitter)',
    description: 'Post to X with a prefilled tweet',
    icon: Twitter,
  },
  whatsapp: {
    label: 'WhatsApp',
    description: 'Share with your WhatsApp contacts',
    icon: MessageCircle,
  },
  telegram: {
    label: 'Telegram',
    description: 'Share via Telegram',
    icon: Send,
  },
  email: {
    label: 'Email',
    description: 'Send by email',
    icon: Mail,
  },
  movesplash: {
    label: 'MoveYSplash Messages',
    description: 'Drop this post into a MoveYSplash conversation',
    icon: Users,
    highlight: true,
  },
};

interface ShareDialogProps {
  open: boolean;
  post: ShareablePost | null;
  onClose: () => void;
  onSelect: (option: ShareOptionId) => void;
}

export function ShareDialog({ open, post, onClose, onSelect }: ShareDialogProps) {
  const [supportsWebShare, setSupportsWebShare] = useState(false);

  useEffect(() => {
    setSupportsWebShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function');
  }, []);

  const shareOptions = useMemo(() => {
    return optionOrder.filter((option) => {
      if (option === 'web' && !supportsWebShare) {
        return false;
      }
      return true;
    });
  }, [supportsWebShare]);

  const snippet = useMemo(() => {
    const content = post?.text?.trim();
    if (!content) {
      return '';
    }
    if (content.length <= 180) {
      return content;
    }
    return `${content.slice(0, 177)}…`;
  }, [post]);

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-w-lg bg-gradient-to-br from-slate-900/90 to-purple-900/80 text-white border-white/10">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Share2 className="w-5 h-5" />
            Share post
          </DialogTitle>
        </DialogHeader>

        {post && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border border-white/20">
                <AvatarImage src={post.authorAvatar} />
                <AvatarFallback>{post.authorName[0] ?? 'U'}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-white font-medium">{post.authorName}</div>
                {post.authorUsername && (
                  <div className="text-white/60 text-sm">{post.authorUsername}</div>
                )}
              </div>
            </div>
            {snippet ? (
              <p className="text-white/80 text-sm whitespace-pre-wrap leading-relaxed">{snippet}</p>
            ) : (
              <p className="text-white/60 text-sm">No caption — share the vibes!</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-2">
          {shareOptions.map((option) => {
            const config = optionConfig[option];
            return (
              <Button
                key={option}
                type="button"
                variant="ghost"
                className={cn(
                  'justify-start bg-white/5 hover:bg-white/15 border border-white/10 text-left flex items-center gap-3',
                  config.highlight && 'border-white/20 bg-white/10'
                )}
                onClick={() => onSelect(option)}
              >
                <config.icon className="w-5 h-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-white font-medium">{config.label}</span>
                  <span className="text-white/60 text-xs">{config.description}</span>
                </div>
              </Button>
            );
          })}
        </div>

        <div className="mt-2 text-xs text-white/40 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Sharing boosts your post reach and inspires more connections.
        </div>
      </DialogContent>
    </Dialog>
  );
}
