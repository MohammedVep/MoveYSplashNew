/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
'use client';

export type ShareOptionId =
  | 'copy'
  | 'facebook'
  | 'twitter'
  | 'whatsapp'
  | 'telegram'
  | 'email'
  | 'web'
  | 'movesplash';

export interface ShareablePost {
  userpostId: string;
  memberId: string;
  authorName: string;
  authorUsername?: string;
  authorAvatar?: string;
  text?: string;
}

export interface ShareToMessagesPayload {
  message: string;
  postId: string;
  postOwnerId: string;
}

const FALLBACK_ORIGIN = 'https://movesplash.app';

export const buildPostShareUrl = (postOwnerId: string, postId: string): string => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}/posts/${encodeURIComponent(postOwnerId)}/${encodeURIComponent(postId)}`;
  }
  return `${FALLBACK_ORIGIN}/posts/${encodeURIComponent(postOwnerId)}/${encodeURIComponent(postId)}`;
};

export const buildShareText = (authorName: string, postText: string | undefined): string => {
  const trimmed = postText?.trim();
  if (trimmed && trimmed.length > 0) {
    return trimmed.length > 280 ? `${trimmed.slice(0, 277)}…` : trimmed;
  }
  return `Check out this MoveYSplash post from ${authorName}!`;
};

export const buildShareMessage = (post: ShareablePost): string => {
  const shareUrl = buildPostShareUrl(post.memberId, post.userpostId);
  const base = buildShareText(post.authorName, post.text);
  return `${post.authorName} on MoveYSplash:\n${base}\n\n${shareUrl}`;
};
