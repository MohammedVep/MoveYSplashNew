import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import * as kv from "./kv_store";
const app = new Hono();

type JsonRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is JsonRecord => typeof value === "object" && value !== null;

const toRecordArray = (value: unknown): JsonRecord[] =>
  Array.isArray(value) ? value.filter(isRecord) : [];

const toStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];

const uniqueStringArray = (value: unknown): string[] =>
  Array.from(new Set(toStringArray(value)));

const getStringProp = (record: JsonRecord, key: string): string => {
  const value = record[key];
  return typeof value === "string" ? value : "";
};

const sortByString = (items: JsonRecord[], key: string) =>
  [...items].sort((a, b) => getStringProp(a, key).localeCompare(getStringProp(b, key)));

const sortByTimestamp = (items: JsonRecord[], key: string) =>
  [...items].sort((a, b) => {
    const timeA = Date.parse(getStringProp(a, key));
    const timeB = Date.parse(getStringProp(b, key));
    const safeA = Number.isNaN(timeA) ? 0 : timeA;
    const safeB = Number.isNaN(timeB) ? 0 : timeB;
    return safeA - safeB;
  });

const buildBookmarkKey = (postOwnerId: string, postId: string) => `${postOwnerId}:${postId}`;

const STORY_VISIBILITY_VALUES = ["friends", "public", "close_friends"] as const;
type StoryVisibility = (typeof STORY_VISIBILITY_VALUES)[number];

const STORY_KEY_PREFIXES = [
  "story:",
  "story-",
  "story_",
  "storyId:",
  "story/",
  "Story:",
  "Story-",
  "stories:",
  "stories-",
  "Stories:",
  "story_backup:",
];
const STORY_BACKUP_PREFIX = "story_backup:";
const DEFAULT_STORY_PLACEHOLDER_URL =
  "https://api.dicebear.com/7.x/shapes/svg?seed=MoveSplashStory&backgroundColor=transparent";

const canonicalStoryKey = (storyId: string) => `story:${storyId}`;

const extractStoryId = (record: JsonRecord): string => {
  return getStringProp(record, "id") || getStringProp(record, "storyId");
};

const sanitizeSnapshotUser = (value: unknown): StoryUserSummary | null => {
  if (!isRecord(value)) {
    return null;
  }

  const id = getStringProp(value, "id");
  if (!id) {
    return null;
  }

  return {
    id,
    name: getStringProp(value, "name"),
    username: getStringProp(value, "username"),
    avatar: getStringProp(value, "avatar"),
    ablyClientId: getStringProp(value, "ablyClientId") || id,
  };
};

const sanitizeSnapshotReplies = (value: unknown, storyId: string): StoryReplyRecord[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((entry, index) => {
      if (!isRecord(entry)) {
        return null;
      }
      const id = getStringProp(entry, "id") || `${storyId}-reply-${index}`;
      const authorId = getStringProp(entry, "authorId");
      const content = getStringProp(entry, "content");
      if (!id || !authorId || !content) {
        return null;
      }
      const timestampRaw = getStringProp(entry, "timestamp");
      const timestampMs = timestampRaw ? Date.parse(timestampRaw) : Date.now();
      const timestamp = Number.isNaN(timestampMs)
        ? new Date().toISOString()
        : new Date(timestampMs).toISOString();

      return {
        id,
        storyId,
        authorId,
        content,
        timestamp,
      };
    })
    .filter((reply): reply is StoryReplyRecord => Boolean(reply));
};

const ensureUserSummary = (
  snapshot: unknown,
  fallbackId: string,
): StoryUserSummary => {
  const userFromSnapshot = sanitizeSnapshotUser(snapshot);
  if (userFromSnapshot) {
    return userFromSnapshot;
  }
  return {
    id: fallbackId,
    name: `User ${fallbackId.slice(0, 6)}`,
    username: `@${fallbackId.slice(0, 6)}`,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${fallbackId}`,
    ablyClientId: fallbackId,
  };
};

const buildStoryRecordFromSnapshot = async (
  snapshot: unknown,
): Promise<{ record: JsonRecord; user: StoryUserSummary } | null> => {
  if (!isRecord(snapshot)) {
    return null;
  }

  const storyId = extractStoryId(snapshot);
  if (!storyId) {
    return null;
  }

  const user = sanitizeSnapshotUser(snapshot["user"]);
  if (!user) {
    return null;
  }

  const userId = getStringProp(snapshot, "userId") || user?.id || "";
  if (!userId) {
    return null;
  }

  const createdAtRaw = getStringProp(snapshot, "createdAt");
  const createdAtMs = createdAtRaw ? Date.parse(createdAtRaw) : Date.now();
  const createdAt = Number.isNaN(createdAtMs)
    ? new Date().toISOString()
    : new Date(createdAtMs).toISOString();

  const expiresAtRaw = getStringProp(snapshot, "expiresAt");
  const expiresAtMs = expiresAtRaw ? Date.parse(expiresAtRaw) : createdAtMs + STORY_EXPIRATION_MS;
  const expiresAt = Number.isNaN(expiresAtMs)
    ? new Date(createdAtMs + STORY_EXPIRATION_MS).toISOString()
    : new Date(expiresAtMs).toISOString();

  const viewers = uniqueStringArray(snapshot["viewers"]);
  const likes = uniqueStringArray(snapshot["likes"]);
  const replies = sanitizeSnapshotReplies(snapshot["replies"], storyId);

  const existingRecord = await resolveStoredStoryRecord(storyId);
  const existingItems =
    existingRecord.record && Array.isArray(existingRecord.record["items"])
      ? extractStoryItems(existingRecord.record["items"], storyId)
      : [];

  const rawItems = Array.isArray(snapshot["items"]) ? snapshot["items"] : [];
  let items = extractStoryItems(rawItems, storyId, existingItems);

  if (items.length === 0) {
    const placeholder: StoryItem = {
      id: `${storyId}-placeholder`,
      type: "image",
      url: DEFAULT_STORY_PLACEHOLDER_URL,
      duration: DEFAULT_STORY_DURATION_SECONDS,
      timestamp: new Date().toISOString(),
    };
    items = [placeholder];
  }

  const record: JsonRecord = {
    id: storyId,
    userId,
    items,
    createdAt,
    expiresAt,
    viewers,
    visibility: resolveStoryVisibility(getStringProp(snapshot, "visibility")),
    likes,
    replies,
  };

  return { record, user };
};

const persistUserSummary = async (user: StoryUserSummary) => {
  await kv
    .set(`user:${user.id}`, {
      id: user.id,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
      ablyClientId: user.ablyClientId,
    })
    .catch((error) => {
      console.warn("[persistUserSummary] Failed to store user", user.id, error);
    });
};

const persistStoryRecord = async (story: JsonRecord, user: StoryUserSummary) => {
  await kv.set(canonicalStoryKey(String(story["id"])), story).catch((error) => {
    console.warn("[persistStoryRecord] Failed to store story", story["id"], error);
  });
  await persistUserSummary(user);
  await kv
    .set(`${STORY_BACKUP_PREFIX}${String(story["id"])}`, {
      ...story,
      __backupStoredAt: new Date().toISOString(),
    })
    .catch((error) => {
      console.warn("[persistStoryRecord] Failed to store story backup", story["id"], error);
    });
};

const restoreStoryFromSnapshot = async (snapshot: unknown): Promise<JsonRecord | null> => {
  const built = await buildStoryRecordFromSnapshot(snapshot);
  if (!built) {
    console.warn("[restoreStoryFromSnapshot] Unable to build story from snapshot");
    return null;
  }

  await persistStoryRecord(built.record, built.user);
  return built.record;
};

const resolveStoredStoryRecord = async (
  storyId: string,
): Promise<{ key: string; record: JsonRecord | null }> => {
  const canonicalKey = canonicalStoryKey(storyId);
  const canonicalRecord = await kv.get<JsonRecord>(canonicalKey);
  if (isRecord(canonicalRecord)) {
    return { key: canonicalKey, record: canonicalRecord };
  }

  for (const prefix of STORY_KEY_PREFIXES) {
    const key = `${prefix}${storyId}`;
    if (key === canonicalKey) {
      continue;
    }
    const candidate = await kv.get<JsonRecord>(key);
    if (isRecord(candidate)) {
      await kv.set(canonicalKey, candidate).catch(() => undefined);
      return { key: canonicalKey, record: candidate };
    }
  }

  const fallbackCandidates = await kv.getByPrefix<JsonRecord>("story");
  for (const candidate of fallbackCandidates) {
    if (!isRecord(candidate)) {
      continue;
    }
    const candidateId = extractStoryId(candidate);
    if (candidateId === storyId) {
      await kv.set(canonicalKey, candidate).catch(() => undefined);
      return { key: canonicalKey, record: candidate };
    }
  }

  const allCandidates = await kv.getByPrefix<JsonRecord>("");
  for (const candidate of allCandidates) {
    if (!isRecord(candidate)) {
      continue;
    }
    const candidateId = extractStoryId(candidate);
    if (candidateId === storyId) {
      await kv.set(canonicalKey, candidate).catch(() => undefined);
      return { key: canonicalKey, record: candidate };
    }
  }

  const collected = await collectStoryRecords();
  const fallback = collected.find((entry) => extractStoryId(entry) === storyId) ?? null;
  if (fallback) {
    await kv.set(canonicalKey, fallback).catch(() => undefined);
    return { key: canonicalKey, record: fallback };
  }

  return { key: canonicalKey, record: null };
};

const collectStoryRecords = async (): Promise<JsonRecord[]> => {
  const seen = new Map<string, JsonRecord>();
  const migrations: Promise<unknown>[] = [];

  for (const prefix of STORY_KEY_PREFIXES) {
    const records = await kv.getByPrefix<JsonRecord>(prefix);
    for (const record of records) {
      if (!isRecord(record)) {
        continue;
      }
      const storyId = extractStoryId(record);
      if (!storyId || seen.has(storyId)) {
        continue;
      }
      seen.set(storyId, record);
      const canonicalKey = canonicalStoryKey(storyId);
      if (prefix !== "story:" || canonicalKey !== `${prefix}${storyId}`) {
        migrations.push(
          kv.set(canonicalKey, record).catch(() => undefined),
        );
      }
    }
  }

  if (migrations.length > 0) {
    await Promise.all(migrations);
  }

  if (seen.size === 0) {
    const allRecords = await kv.getByPrefix<JsonRecord>("");
    for (const record of allRecords) {
      if (!isRecord(record)) {
        continue;
      }
      const storyId = extractStoryId(record);
      if (!storyId || seen.has(storyId)) {
        continue;
      }
      seen.set(storyId, record);
      const canonicalKey = canonicalStoryKey(storyId);
      migrations.push(kv.set(canonicalKey, record).catch(() => undefined));
    }
    if (migrations.length > 0) {
      await Promise.all(migrations);
    }
  }

  return Array.from(seen.values());
};

type StoryUserSummary = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  ablyClientId: string;
};

type StoryItem = {
  id: string;
  type: "image" | "video";
  url: string;
  duration: number;
  timestamp: string;
};

type StoryResponse = {
  id: string;
  userId: string;
  user: StoryUserSummary;
  items: StoryItem[];
  viewers: string[];
  visibility: StoryVisibility;
  createdAt: string;
  expiresAt: string;
  likes: string[];
  replies: StoryReply[];
};

type StoryReplyRecord = {
  id: string;
  storyId: string;
  authorId: string;
  content: string;
  timestamp: string;
};

type StoryReply = {
  id: string;
  storyId: string;
  authorId: string;
  author: StoryUserSummary | null;
  content: string;
  timestamp: string;
};

type PostMediaItem = {
  type: "image" | "video";
  url: string;
};

type PostResponse = {
  id: string;
  userId: string;
  text: string;
  media: PostMediaItem[];
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  likedBy: string[];
};

type CommentResponse = {
  id: string;
  postId: string;
  postOwnerId: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
};

type VideoPresenceResponse = {
  userId: string;
  roomId: string;
  joinedAt: string;
  lastSeenAt: string;
  isMuted: boolean;
  isVideoOff: boolean;
  isScreenSharing: boolean;
  displayName?: string;
  avatar?: string;
};

const DEFAULT_STORY_DURATION_SECONDS = 5;
const STORY_EXPIRATION_MS = 24 * 60 * 60 * 1000;
const MAX_STORY_REPLY_LENGTH = 1000;

const resolveStoryVisibility = (value: string): StoryVisibility => {
  const normalized = value?.toLowerCase();
  return STORY_VISIBILITY_VALUES.includes(normalized as StoryVisibility)
    ? (normalized as StoryVisibility)
    : "friends";
};

const sanitizeStoryItem = (
  value: unknown,
  fallbackId: string,
  fallbackTimestamp: string,
  existing?: StoryItem | null,
): StoryItem | null => {
  const item = isRecord(value) ? value : null;

  const id = (item ? getStringProp(item, "id") : "") || existing?.id || fallbackId;

  const primaryUrl = (item ? getStringProp(item, "url") : "").trim();
  const snapshotFallbackUrl = (item ? getStringProp(item, "fallbackUrl") : "").trim();
  let url = primaryUrl;
  if (!url || url === "__existing__") {
    url = snapshotFallbackUrl;
  }
  if (!url || url === "__existing__") {
    url = existing?.url ?? "";
  }
  if (!url || url === "__existing__") {
    url = DEFAULT_STORY_PLACEHOLDER_URL;
  }

  const typeValue = item ? getStringProp(item, "type") : "";
  const existingType = existing?.type ?? "image";
  const type: StoryItem["type"] =
    typeValue === "video" || existingType === "video" ? "video" : "image";

  const durationValue = item ? item["duration"] : undefined;
  const resolvedDuration =
    typeof durationValue === "number" && Number.isFinite(durationValue) && durationValue > 0
      ? durationValue
      : existing?.duration && existing.duration > 0
      ? existing.duration
      : DEFAULT_STORY_DURATION_SECONDS;

  const timestampValue = item ? getStringProp(item, "timestamp") : "";
  const parsedTimestamp = timestampValue ? Date.parse(timestampValue) : NaN;
  const timestamp = Number.isNaN(parsedTimestamp)
    ? existing?.timestamp ?? fallbackTimestamp
    : new Date(parsedTimestamp).toISOString();

  return {
    id,
    type,
    url,
    duration: resolvedDuration,
    timestamp,
  };
};

const extractStoryItems = (value: unknown, fallbackId: string, existing?: StoryItem[]): StoryItem[] => {
  if (!Array.isArray(value)) {
    return existing ? existing.map((item) => ({ ...item })) : [];
  }

  const fallbackTimestamp = new Date().toISOString();
  const parsed = value
    .map((item, index) =>
      sanitizeStoryItem(item, `${fallbackId}-${index}`, fallbackTimestamp, existing?.[index]),
    )
    .filter((item): item is StoryItem => Boolean(item));

  if (parsed.length > 0) {
    return parsed;
  }

  return existing ? existing.map((item) => ({ ...item })) : [];
};

const normalizePostRecord = (record: JsonRecord): PostResponse | null => {
  if (!isRecord(record)) {
    return null;
  }

  const id = getStringProp(record, "id");
  const userId = getStringProp(record, "userId");
  if (!id || !userId) {
    return null;
  }

  const text = getStringProp(record, "text");
  const timestamp = getStringProp(record, "timestamp") || new Date().toISOString();
  const likesValue = record["likes"];
  const commentsValue = record["comments"];
  const sharesValue = record["shares"];
  const likedBy = toStringArray(record["likedBy"]);
  const rawMedia = Array.isArray(record["media"]) ? record["media"] : [];
  const media = rawMedia
    .map((item) => {
      if (!isRecord(item)) {
        return null;
      }
      const url = getStringProp(item, "url");
      if (!url) {
        return null;
      }
      const typeValue = getStringProp(item, "type");
      const type: PostMediaItem["type"] = typeValue === "video" ? "video" : "image";
      return { type, url };
    })
    .filter((item): item is PostMediaItem => Boolean(item));

  const safeNumber = (value: unknown) =>
    typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : 0;

  return {
    id,
    userId,
    text,
    media,
    likes: safeNumber(likesValue),
    comments: safeNumber(commentsValue),
    shares: safeNumber(sharesValue),
    timestamp,
    likedBy,
  };
};

const normalizeCommentRecord = (record: JsonRecord): CommentResponse | null => {
  if (!isRecord(record)) {
    return null;
  }

  const id = getStringProp(record, "id");
  const postId = getStringProp(record, "postId");
  const postOwnerId = getStringProp(record, "postOwnerId") || getStringProp(record, "postOwner");
  const authorId = getStringProp(record, "authorId");

  if (!id || !postId || !postOwnerId || !authorId) {
    return null;
  }

  return {
    id,
    postId,
    postOwnerId,
    authorId,
    authorName: getStringProp(record, "authorName"),
    authorAvatar: getStringProp(record, "authorAvatar"),
    content: getStringProp(record, "content"),
    createdAt: getStringProp(record, "createdAt") || new Date().toISOString(),
  };
};

const videoPresenceKey = (roomId: string, userId: string) =>
  `video_presence:${roomId}:${userId}`;

const videoPresencePrefix = (roomId: string) => `video_presence:${roomId}:`;

const sanitizeVideoPresenceRecord = (
  record: JsonRecord,
  roomId: string,
): VideoPresenceResponse | null => {
  if (!isRecord(record)) {
    return null;
  }

  const userId = getStringProp(record, "userId");
  if (!userId) {
    return null;
  }

  const joinedAt = toIsoDate(record["joinedAt"]);
  const lastSeenRaw = record["lastSeenAt"];
  const lastSeenAt =
    typeof lastSeenRaw === "string" && lastSeenRaw.trim().length > 0
      ? toIsoDate(lastSeenRaw)
      : joinedAt;

  const displayName = getStringProp(record, "displayName");
  const avatar = getStringProp(record, "avatar");

  return {
    userId,
    roomId,
    joinedAt,
    lastSeenAt,
    isMuted: toBoolean(record["isMuted"], false),
    isVideoOff: toBoolean(record["isVideoOff"], false),
    isScreenSharing: toBoolean(record["isScreenSharing"], false),
    displayName: displayName || undefined,
    avatar: avatar || undefined,
  };
};

const commentKeyPrefix = (postOwnerId: string, postId: string) => `comment:${postOwnerId}:${postId}:`;
const commentKey = (postOwnerId: string, postId: string, commentId: string) =>
  `${commentKeyPrefix(postOwnerId, postId)}${commentId}`;

type ShareRecord = {
  id: string;
  postId: string;
  postOwnerId: string;
  platform: string;
  sharedBy: string | null;
  createdAt: string;
};

const shareKeyPrefix = (postOwnerId: string, postId: string) => `share:${postOwnerId}:${postId}:`;
const shareKey = (postOwnerId: string, postId: string, shareId: string) =>
  `${shareKeyPrefix(postOwnerId, postId)}${shareId}`;

const getCommentsForPost = async (postOwnerId: string, postId: string): Promise<CommentResponse[]> => {
  const commentRecords = toRecordArray(await kv.getByPrefix(commentKeyPrefix(postOwnerId, postId)));
  return commentRecords
    .map(normalizeCommentRecord)
    .filter((comment): comment is CommentResponse => Boolean(comment))
    .sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
};

type CreateCommentResult =
  | { success: true; comment: CommentResponse; post: JsonRecord }
  | { success: false; status: ContentfulStatusCode; error: string };

const createCommentForPost = async (
  postOwnerId: string,
  postId: string,
  authorId: string,
  content: string,
): Promise<CreateCommentResult> => {
  if (!authorId) {
    return { success: false, status: 400, error: "Missing authorId" };
  }

  const trimmedContent = content.trim();
  if (!trimmedContent) {
    return { success: false, status: 400, error: "Comment content is required" };
  }

  if (trimmedContent.length > 1000) {
    return { success: false, status: 400, error: "Comment is too long" };
  }

  const postKey = `posts:${postOwnerId}:${postId}`;
  const postRecord = await kv.get<JsonRecord>(postKey);
  if (!isRecord(postRecord)) {
    return { success: false, status: 404, error: "Post not found" };
  }

  const authorRecord = await kv.get<JsonRecord>(`user:${authorId}`);
  if (!isRecord(authorRecord)) {
    return { success: false, status: 404, error: "Author not found" };
  }

  const commentId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const createdAt = new Date().toISOString();

  const comment: CommentResponse = {
    id: commentId,
    postId,
    postOwnerId,
    authorId,
    authorName: getStringProp(authorRecord, "name") || "Unknown user",
    authorAvatar: getStringProp(authorRecord, "avatar"),
    content: trimmedContent,
    createdAt,
  };

  await kv.set(commentKey(postOwnerId, postId, commentId), comment);

  const commentsValue = postRecord["comments"];
  const currentComments =
    typeof commentsValue === "number" && Number.isFinite(commentsValue) && commentsValue >= 0
      ? commentsValue
      : 0;

  const updatedPost: JsonRecord = {
    ...postRecord,
    comments: currentComments + 1,
  };

  await kv.set(postKey, updatedPost);

  return { success: true, comment, post: updatedPost };
};

type RecordShareResult =
  | { success: true; post: JsonRecord; share: ShareRecord }
  | { success: false; status: ContentfulStatusCode; error: string };

const recordShareForPost = async (
  postOwnerId: string,
  postId: string,
  platform: string,
  sharedBy: string,
): Promise<RecordShareResult> => {
  const postKey = `posts:${postOwnerId}:${postId}`;
  const postRecord = await kv.get<JsonRecord>(postKey);
  if (!isRecord(postRecord)) {
    return { success: false, status: 404, error: "Post not found" };
  }

  const sharesValue = postRecord["shares"];
  const currentShares =
    typeof sharesValue === "number" && Number.isFinite(sharesValue) && sharesValue >= 0
      ? sharesValue
      : 0;

  const updatedPost: JsonRecord = {
    ...postRecord,
    shares: currentShares + 1,
  };

  await kv.set(postKey, updatedPost);

  const shareId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const share: ShareRecord = {
    id: shareId,
    postId,
    postOwnerId,
    platform: platform || "direct",
    sharedBy: sharedBy || null,
    createdAt: new Date().toISOString(),
  };

  await kv.set(shareKey(postOwnerId, postId, shareId), share);

  return { success: true, post: updatedPost, share };
};

const sanitizeUserForResponse = (record: JsonRecord): JsonRecord => {
  const sanitized: JsonRecord = { ...record };
  delete sanitized.password;
  const id = getStringProp(record, "id");
  sanitized.ablyClientId = getStringProp(record, "ablyClientId") || id;
  sanitized.friendIds = uniqueStringArray(record["friendIds"]);
  sanitized.blockedIds = uniqueStringArray(record["blockedIds"]);
  sanitized.savedPostIds = uniqueStringArray(record["savedPostIds"]);
  return sanitized;
};

const getUserSummary = async (
  userId: string,
  cache: Map<string, StoryUserSummary | null>,
): Promise<StoryUserSummary | null> => {
  if (cache.has(userId)) {
    return cache.get(userId) ?? null;
  }

  const rawUser = await kv.get<JsonRecord>(`user:${userId}`);
  if (!isRecord(rawUser)) {
    cache.set(userId, null);
    return null;
  }

  const summary: StoryUserSummary = {
    id: getStringProp(rawUser, "id") || userId,
    name: getStringProp(rawUser, "name"),
    username: getStringProp(rawUser, "username"),
    avatar: getStringProp(rawUser, "avatar"),
    ablyClientId: getStringProp(rawUser, "ablyClientId") || userId,
  };

  cache.set(userId, summary);
  return summary;
};

const normalizeStoryRecord = async (
  record: JsonRecord,
  cache: Map<string, StoryUserSummary | null>,
): Promise<StoryResponse | null> => {
  const id = getStringProp(record, "id") || getStringProp(record, "storyId");
  const userId = getStringProp(record, "userId");
  if (!id || !userId) {
    return null;
  }

  const items = extractStoryItems(record["items"], id);
  if (items.length === 0) {
    return null;
  }

  const user = await getUserSummary(userId, cache);
  if (!user) {
    return null;
  }

  const createdAtRaw = getStringProp(record, "createdAt");
  const createdAtMs = createdAtRaw ? Date.parse(createdAtRaw) : Date.now();
  const safeCreatedAtMs = Number.isNaN(createdAtMs) ? Date.now() : createdAtMs;
  const createdAt = new Date(safeCreatedAtMs).toISOString();

  const expiresAtRaw = getStringProp(record, "expiresAt");
  const expiresAtMsCandidate = expiresAtRaw ? Date.parse(expiresAtRaw) : safeCreatedAtMs + STORY_EXPIRATION_MS;
  if (Number.isNaN(expiresAtMsCandidate) || expiresAtMsCandidate <= Date.now()) {
    return null;
  }
  const expiresAt = new Date(expiresAtMsCandidate).toISOString();

  const viewers = Array.from(new Set(toStringArray(record["viewers"])));
  const visibility = resolveStoryVisibility(getStringProp(record, "visibility"));
  const likes = Array.from(new Set(toStringArray(record["likes"])));

  const rawReplies = Array.isArray(record["replies"]) ? record["replies"] : [];
  const replies = (
    await Promise.all(
      rawReplies.map(async (value, index) => {
        if (!isRecord(value)) {
          return null;
        }
        const replyId = getStringProp(value, "id") || `${id}-reply-${index}`;
        const replyAuthorId = getStringProp(value, "authorId");
        const content = getStringProp(value, "content");
        if (!replyId || !replyAuthorId || !content) {
          return null;
        }
        const timestampRaw = getStringProp(value, "timestamp");
        const timestampMs = timestampRaw ? Date.parse(timestampRaw) : Date.now();
        const timestamp = Number.isNaN(timestampMs) ? new Date().toISOString() : new Date(timestampMs).toISOString();
        const author = await getUserSummary(replyAuthorId, cache);
        return {
          id: replyId,
          storyId: id,
          authorId: replyAuthorId,
          author,
          content,
          timestamp,
        } as StoryReply;
      }),
    )
  ).filter((reply): reply is StoryReply => Boolean(reply));

  return {
    id,
    userId,
    user,
    items,
    viewers,
    visibility,
    createdAt,
    expiresAt,
    likes,
    replies,
  };
};

const toggleStoryLike = async (
  storyId: string,
  likerId: string,
  providedRecord?: JsonRecord | null,
): Promise<{ story: JsonRecord; liked: boolean } | null> => {
  if (!likerId) {
    return null;
  }

  const { key: storyKey, record: resolvedRecord } = providedRecord
    ? { key: canonicalStoryKey(storyId), record: providedRecord }
    : await resolveStoredStoryRecord(storyId);

  if (!isRecord(resolvedRecord)) {
    console.warn("[toggleStoryLike] Story not found", storyId, { hasProvided: Boolean(providedRecord) });
    return null;
  }

  const likes = new Set(uniqueStringArray(resolvedRecord["likes"]));
  let liked = false;
  if (likes.has(likerId)) {
    likes.delete(likerId);
  } else {
    likes.add(likerId);
    liked = true;
  }

  const updatedStory: JsonRecord = {
    ...resolvedRecord,
    likes: Array.from(likes),
    updatedAt: new Date().toISOString(),
  };

  await kv.set(storyKey, updatedStory);

  return { story: updatedStory, liked };
};

const addStoryReply = async (
  storyId: string,
  authorId: string,
  content: string,
  providedRecord?: JsonRecord | null,
  authorSnapshot?: StoryUserSummary | null,
): Promise<{ story: JsonRecord; reply: StoryReplyRecord } | null> => {
  const trimmed = content.trim();
  if (!authorId || !trimmed) {
    return null;
  }

  const { key: storyKey, record: resolvedRecord } = providedRecord
    ? { key: canonicalStoryKey(storyId), record: providedRecord }
    : await resolveStoredStoryRecord(storyId);
  if (!isRecord(resolvedRecord)) {
    return null;
  }

  let authorRecord = await kv.get<JsonRecord>(`user:${authorId}`);
  if (!isRecord(authorRecord) && authorSnapshot) {
    await persistUserSummary(authorSnapshot);
    authorRecord = await kv.get<JsonRecord>(`user:${authorId}`);
  }
  if (!isRecord(authorRecord)) {
    return null;
  }

  const limitedContent = trimmed.slice(0, MAX_STORY_REPLY_LENGTH);
  const repliesRaw = Array.isArray(resolvedRecord["replies"]) ? resolvedRecord["replies"] : [];
  const timestamp = new Date().toISOString();
  const replyRecord: StoryReplyRecord = {
    id: `${Date.now()}-reply-${Math.random().toString(36).slice(2, 9)}`,
    storyId,
    authorId,
    content: limitedContent,
    timestamp,
  };

  const updatedStory: JsonRecord = {
    ...resolvedRecord,
    replies: [...repliesRaw, replyRecord],
    updatedAt: timestamp,
  };

  await kv.set(storyKey, updatedStory);

  return { story: updatedStory, reply: replyRecord };
};

const NOTIFICATION_TYPES = [
  "like",
  "comment",
  "friend_request",
  "message",
  "video_call",
  "story",
  "share",
] as const;
type NotificationType = (typeof NOTIFICATION_TYPES)[number];

type NotificationRecord = {
  id: string;
  userId: string;
  type: NotificationType;
  actorName: string;
  actorAvatar: string;
  content: string;
  createdAt: string;
  isRead: boolean;
  actionRequired: boolean;
};

const resolveNotificationType = (value: string): NotificationType => {
  return NOTIFICATION_TYPES.includes(value as NotificationType)
    ? (value as NotificationType)
    : "message";
};

const toBoolean = (value: unknown, fallback = false) => {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    const normalized = value.toLowerCase();
    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }
  return fallback;
};

const toIsoDate = (value: unknown) => {
  if (typeof value === "string" && !Number.isNaN(Date.parse(value))) {
    return new Date(value).toISOString();
  }
  return new Date().toISOString();
};

const normalizeNotificationRecord = (value: JsonRecord): NotificationRecord | null => {
  const id = getStringProp(value, "id");
  const userId = getStringProp(value, "userId");
  if (!id || !userId) {
    return null;
  }

  return {
    id,
    userId,
    type: resolveNotificationType(getStringProp(value, "type")),
    actorName: getStringProp(value, "actorName") || "MoveSplash User",
    actorAvatar:
      getStringProp(value, "actorAvatar") ||
      "https://api.dicebear.com/7.x/avataaars/svg?seed=MoveSplash",
    content: getStringProp(value, "content"),
    createdAt: toIsoDate(value["createdAt"]),
    isRead: toBoolean(value["isRead"], false),
    actionRequired: toBoolean(value["actionRequired"], false),
  };
};

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a14c7986/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all chats for a user
app.get("/make-server-a14c7986/chats/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const chatsData = await kv.getByPrefix(`chats:${userId}:`);
    const chatRecords = toRecordArray(chatsData);

    // CRITICAL FIX: Sort chats by ID to ensure consistent order across requests
    // This prevents the selection from jumping when chats reload
    const sortedChats = sortByString(chatRecords, "id");
    
    console.log(`[GET /chats/${userId}] Returning ${sortedChats.length} chats in consistent order`);
    
    return c.json({ chats: sortedChats });
  } catch (error) {
    console.error("Error fetching chats:", error);
    return c.json({ error: "Failed to fetch chats", details: String(error) }, 500);
  }
});

// Get messages for a specific chat
app.get("/make-server-a14c7986/messages/:chatId", async (c) => {
  try {
    const chatId = c.req.param("chatId");
    const messagesData = await kv.getByPrefix(`messages:${chatId}:`);
    const messageRecords = toRecordArray(messagesData);

    // Sort messages by timestamp to ensure chronological order
    const sortedMessages = sortByTimestamp(messageRecords, "timestamp");
    
    return c.json({ messages: sortedMessages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return c.json({ error: "Failed to fetch messages", details: String(error) }, 500);
  }
});

// Send a new message
app.post("/make-server-a14c7986/messages", async (c) => {
  try {
    const body = await c.req.json();
    const {
      id,
      chatId,
      senderId,
      senderName,
      senderAvatar,
      content,
      image,
      file,
      voice,
      isSnapStyle,
      expiresIn,
      isStarred,
      timestamp: providedTimestamp,
    } = body ?? {};

    if (!chatId || !senderId || (!content && !image && !file && !voice)) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const messageId =
      typeof id === "string" && id.trim().length > 0
        ? id
        : `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const timestamp =
      typeof providedTimestamp === "string" && !Number.isNaN(Date.parse(providedTimestamp))
        ? new Date(providedTimestamp).toISOString()
        : new Date().toISOString();

    const resolvedExpiresIn =
      typeof expiresIn === "number"
        ? expiresIn
        : typeof expiresIn === "string" && expiresIn.trim().length > 0
        ? Number(expiresIn)
        : null;

    const safeExpiresIn = Number.isFinite(resolvedExpiresIn) ? resolvedExpiresIn : null;

    const message = {
      id: messageId,
      chatId,
      senderId,
      senderName: senderName ?? null,
      senderAvatar: senderAvatar ?? null,
      content: content || "",
      image: image ?? null,
      file: file ?? null,
      voice: voice ?? null,
      timestamp,
      isSnapStyle: Boolean(isSnapStyle),
      expiresIn: safeExpiresIn,
      isStarred: Boolean(isStarred),
    };

    await kv.set(`messages:${chatId}:${messageId}`, message);

    const resolveLastMessageText = () => {
      if (voice) return "🎤 Voice message";
      if (file?.name) return `📎 ${file.name}`;
      if (image) return "📸 Photo";
      return content || "";
    };

    // Update chat's last message
    const chatKey = `chat:${chatId}`;
    const chat = await kv.get(chatKey);
    const chatRecord = isRecord(chat) ? chat : {};
    if (isRecord(chatRecord)) {
      const updatedChat = {
        ...chatRecord,
        lastMessage: resolveLastMessageText(),
        lastMessageTime: timestamp,
      };

      await kv.set(chatKey, updatedChat);

      const members = toStringArray(chatRecord.members);
      await Promise.all(
        members
          .filter((memberId: unknown): memberId is string => typeof memberId === "string" && memberId.length > 0)
          .map((memberId) => kv.set(`chats:${memberId}:${chatId}`, updatedChat)),
      );
    }

    return c.json({ message, success: true });
  } catch (error) {
    console.error("Error sending message:", error);
    return c.json({ error: "Failed to send message", details: String(error) }, 500);
  }
});

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

app.post("/make-server-a14c7986/voice", async (c) => {
  try {
    const body = await c.req.json();
    const { dataUrl, duration, mimeType } = body ?? {};

    if (!dataUrl || typeof dataUrl !== "string" || dataUrl.length < 10) {
      return c.json({ error: "Invalid dataUrl" }, 400);
    }

    const [header, base64Payload] = dataUrl.split(",");
    if (!base64Payload) {
      return c.json({ error: "Malformed dataUrl" }, 400);
    }

    const headerMatch = header.match(/^data:(.*?)(;base64)?$/);
    const detectedMime = mimeType || headerMatch?.[1] || "audio/webm";

    const voiceId = generateId();
    const record = {
      id: voiceId,
      base64: base64Payload,
      mimeType: detectedMime,
      duration: typeof duration === "number" ? duration : null,
      createdAt: new Date().toISOString(),
    };

    await kv.set(`voice:${voiceId}`, record);

    const voiceUrl = new URL(`/make-server-a14c7986/voice/${voiceId}`, c.req.url).toString();

    return c.json({
      id: voiceId,
      url: voiceUrl,
      mimeType: detectedMime,
      duration: record.duration,
    });
  } catch (error) {
    console.error("Error storing voice clip:", error);
    return c.json({ error: "Failed to store voice clip", details: String(error) }, 500);
  }
});

app.get("/make-server-a14c7986/voice/:voiceId", async (c) => {
  try {
    const voiceId = c.req.param("voiceId");
    const record = await kv.get(`voice:${voiceId}`);

    if (!record) {
      return c.json({ error: "Voice clip not found" }, 404);
    }
    const voiceRecord = isRecord(record) ? record : {};
    const mimeType = getStringProp(voiceRecord, "mimeType") || "audio/webm";
    const base64 = getStringProp(voiceRecord, "base64");
    const dataUrl = `data:${mimeType};base64,${base64}`;
    const durationValue = typeof voiceRecord.duration === "number" ? voiceRecord.duration : null;
    const createdAt = getStringProp(voiceRecord, "createdAt") || null;

    return c.json({
      id: voiceId,
      dataUrl,
      mimeType,
      duration: durationValue,
      createdAt,
    });
  } catch (error) {
    console.error("Error retrieving voice clip:", error);
    return c.json({ error: "Failed to fetch voice clip", details: String(error) }, 500);
  }
});

app.get("/make-server-a14c7986/video/rooms/:roomId/presence", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    if (!roomId) {
      return c.json({ error: "roomId is required" }, 400);
    }

    const rawRecords = await kv.getByPrefix<JsonRecord>(videoPresencePrefix(roomId));
    const now = Date.now();
    const staleThreshold = now - 60 * 1000;
    const participants: VideoPresenceResponse[] = [];
    const staleKeys: string[] = [];

    rawRecords.forEach((record) => {
      const sanitized = sanitizeVideoPresenceRecord(record, roomId);
      if (!sanitized) {
        return;
      }

      const lastSeenTime = Date.parse(sanitized.lastSeenAt);
      if (!Number.isNaN(lastSeenTime) && lastSeenTime < staleThreshold) {
        staleKeys.push(videoPresenceKey(roomId, sanitized.userId));
        return;
      }

      participants.push(sanitized);
    });

    if (staleKeys.length > 0) {
      await Promise.all(
        staleKeys.map((key) =>
          kv.del(key).catch((error) => {
            console.warn("Failed to prune stale presence", error);
          }),
        ),
      );
    }

    participants.sort((a, b) => Date.parse(a.joinedAt) - Date.parse(b.joinedAt));

    return c.json({ participants, success: true });
  } catch (error) {
    console.error("Error fetching video presence:", error);
    return c.json({ error: "Failed to fetch video presence", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/video/rooms/:roomId/presence", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    if (!roomId) {
      return c.json({ error: "roomId is required" }, 400);
    }

    const body = await c.req.json().catch(() => null);
    const payload = isRecord(body) ? body : {};
    const userId = getStringProp(payload, "userId");

    if (!userId) {
      return c.json({ error: "userId is required" }, 400);
    }

    const existingRaw = await kv.get<JsonRecord>(videoPresenceKey(roomId, userId));
    const existing = existingRaw && isRecord(existingRaw) ? existingRaw : null;
    const nowIso = new Date().toISOString();
    const joinedAt = existing ? getStringProp(existing, "joinedAt") || nowIso : nowIso;

    const displayNameOverride = getStringProp(payload, "displayName");
    const avatarOverride = getStringProp(payload, "avatar");

    const presence: JsonRecord = {
      roomId,
      userId,
      joinedAt,
      lastSeenAt: nowIso,
      isMuted: toBoolean(
        payload["isMuted"],
        existing ? toBoolean(existing["isMuted"], false) : false,
      ),
      isVideoOff: toBoolean(
        payload["isVideoOff"],
        existing ? toBoolean(existing["isVideoOff"], false) : false,
      ),
      isScreenSharing: toBoolean(
        payload["isScreenSharing"],
        existing ? toBoolean(existing["isScreenSharing"], false) : false,
      ),
    };

    const resolvedDisplayName =
      displayNameOverride ||
      (existing ? getStringProp(existing, "displayName") : "") ||
      "";
    if (resolvedDisplayName) {
      presence.displayName = resolvedDisplayName;
    }

    const resolvedAvatar =
      avatarOverride || (existing ? getStringProp(existing, "avatar") : "") || "";
    if (resolvedAvatar) {
      presence.avatar = resolvedAvatar;
    }

    await kv.set(videoPresenceKey(roomId, userId), presence);

    const participant = sanitizeVideoPresenceRecord(presence, roomId);
    if (!participant) {
      return c.json({ error: "Failed to persist presence record" }, 500);
    }

    return c.json({ participant, success: true });
  } catch (error) {
    console.error("Error updating video presence:", error);
    return c.json({ error: "Failed to update video presence", details: String(error) }, 500);
  }
});

app.delete("/make-server-a14c7986/video/rooms/:roomId/presence/:userId", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const userId = c.req.param("userId");
    if (!roomId || !userId) {
      return c.json({ error: "roomId and userId are required" }, 400);
    }

    await kv.del(videoPresenceKey(roomId, userId));
    return c.json({ success: true });
  } catch (error) {
    console.error("Error removing video presence:", error);
    return c.json({ error: "Failed to remove video presence", details: String(error) }, 500);
  }
});

// Create a new chat
app.post("/make-server-a14c7986/chats", async (c) => {
  try {
    const body = await c.req.json();
    const { name, members, isGroup, createdBy } = body as Record<string, unknown>;
    const memberList = toStringArray(members);

    if (!name || memberList.length === 0 || !createdBy) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Check if a chat with the same name and members already exists
    const existingChats = toRecordArray(await kv.getByPrefix(`chats:${createdBy}:`));
    const sortedMemberSignature = JSON.stringify([...memberList].sort());
    const duplicateChat = existingChats.find((chat) => {
      const chatName = getStringProp(chat, "name");
      const chatMembers = toStringArray(chat["members"]);
      const chatSignature = JSON.stringify([...chatMembers].sort());
      return chatName === name && chatSignature === sortedMemberSignature;
    });
    
    if (duplicateChat) {
      console.log(`[POST /chats] Duplicate chat detected: ${name}, returning existing`);
      return c.json({ chat: duplicateChat, success: true, isDuplicate: true });
    }

    const chatId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();
    
    const chat = {
      id: chatId,
      name,
      members: memberList,
      isGroup: isGroup || false,
      createdBy,
      createdAt: timestamp,
      lastMessage: "",
      lastMessageTime: timestamp,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${chatId}`
    };

    console.log(`[POST /chats] Creating new chat: ${name} (${chatId})`);

    // Save chat for each member
    for (const memberId of memberList) {
      await kv.set(`chats:${memberId}:${chatId}`, chat);
    }
    
    await kv.set(`chat:${chatId}`, chat);

    return c.json({ chat, success: true });
  } catch (error) {
    console.error("Error creating chat:", error);
    return c.json({ error: "Failed to create chat", details: String(error) }, 500);
  }
});

// Delete a message (for snap messages)
app.delete("/make-server-a14c7986/messages/:chatId/:messageId", async (c) => {
  try {
    const chatId = c.req.param("chatId");
    const messageId = c.req.param("messageId");
    
    await kv.del(`messages:${chatId}:${messageId}`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    return c.json({ error: "Failed to delete message", details: String(error) }, 500);
  }
});

// Star/unstar a message
app.put("/make-server-a14c7986/messages/:chatId/:messageId/star", async (c) => {
  try {
    const chatId = c.req.param("chatId");
    const messageId = c.req.param("messageId");
    const body = await c.req.json();
    const { isStarred } = body;
    
    const messageKey = `messages:${chatId}:${messageId}`;
    const message = await kv.get(messageKey);
    
    if (!message) {
      return c.json({ error: "Message not found" }, 404);
    }
    
    const updatedMessage = {
      ...message,
      isStarred: isStarred
    };
    
    await kv.set(messageKey, updatedMessage);
    
    return c.json({ message: updatedMessage, success: true });
  } catch (error) {
    console.error("Error starring message:", error);
    return c.json({ error: "Failed to star message", details: String(error) }, 500);
  }
});

// Get starred messages for a user
app.get("/make-server-a14c7986/starred/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const allMessages = await kv.getByPrefix<JsonRecord>("messages:");
    const messageRecords = toRecordArray(allMessages);
    const starredMessages = messageRecords.filter((msg) => {
      const senderId = msg["senderId"];
      const isStarred = msg["isStarred"];
      return isStarred === true && typeof senderId === "string" && senderId === userId;
    });
    
    return c.json({ messages: starredMessages || [] });
  } catch (error) {
    console.error("Error fetching starred messages:", error);
    return c.json({ error: "Failed to fetch starred messages", details: String(error) }, 500);
  }
});

// ========== USER DATA ENDPOINTS ==========

// Get user data by user ID
app.get("/make-server-a14c7986/users/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const userData = await kv.get(`user:${userId}`);
    
    if (!userData) {
      return c.json({ error: "User not found" }, 404);
    }
    
    // Remove password from response for security
    const userWithoutPassword: JsonRecord = { ...userData };
    delete userWithoutPassword.password;
    const responseUser = {
      ...userWithoutPassword,
      ablyClientId: getStringProp(userWithoutPassword, "ablyClientId") || userId,
    };
    
    return c.json({ user: responseUser, success: true });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return c.json({ error: "Failed to fetch user data", details: String(error) }, 500);
  }
});

// Create or update user data
app.put("/make-server-a14c7986/users/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};
    
    // Get existing user data or create new
    const existingUserData = await kv.get<JsonRecord>(`user:${userId}`);
    const existingUser = isRecord(existingUserData) ? existingUserData : {};
    const ablyClientIdFromBody = body["ablyClientId"];
    const resolvedAblyClientId =
      typeof ablyClientIdFromBody === "string" && ablyClientIdFromBody.trim().length > 0
        ? ablyClientIdFromBody
        : getStringProp(existingUser, "ablyClientId") || userId;
    
    // Merge with new data
    const userData: JsonRecord = {
      ...existingUser,
      ...body,
      id: userId,
      ablyClientId: resolvedAblyClientId,
      updatedAt: new Date().toISOString()
    };
    
    await kv.set(`user:${userId}`, userData);
    
    return c.json({ user: userData, success: true });
  } catch (error) {
    console.error("Error updating user data:", error);
    return c.json({ error: "Failed to update user data", details: String(error) }, 500);
  }
});

// Get user settings
app.get("/make-server-a14c7986/users/:userId/settings", async (c) => {
  try {
    const userId = c.req.param("userId");
    const settings = await kv.get(`settings:${userId}`);
    
    return c.json({ settings: settings || {}, success: true });
  } catch (error) {
    console.error("Error fetching user settings:", error);
    return c.json({ error: "Failed to fetch user settings", details: String(error) }, 500);
  }
});

// Update user settings
app.put("/make-server-a14c7986/users/:userId/settings", async (c) => {
  try {
    const userId = c.req.param("userId");
    const body = await c.req.json();
    
    // Get existing settings or create new
    const existingSettings = await kv.get(`settings:${userId}`) || {};
    
    // Merge with new settings
    const settings = {
      ...existingSettings,
      ...body,
      userId,
      updatedAt: new Date().toISOString()
    };
    
    await kv.set(`settings:${userId}`, settings);
    
    return c.json({ settings, success: true });
  } catch (error) {
    console.error("Error updating user settings:", error);
    return c.json({ error: "Failed to update user settings", details: String(error) }, 500);
  }
});

// Friend & Block endpoints
app.post("/make-server-a14c7986/friends/:userId/:friendId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const friendId = c.req.param("friendId");
    if (!userId || !friendId || userId === friendId) {
      return c.json({ error: "Invalid userId or friendId" }, 400);
    }

    const userRecord = await kv.get<JsonRecord>(`user:${userId}`);
    const friendRecord = await kv.get<JsonRecord>(`user:${friendId}`);
    if (!isRecord(userRecord) || !isRecord(friendRecord)) {
      return c.json({ error: "User not found" }, 404);
    }

    const userBlocked = uniqueStringArray(userRecord["blockedIds"]);
    if (userBlocked.includes(friendId)) {
      return c.json({ error: "Unblock the user before sending a friend request" }, 400);
    }

    const friendBlocked = uniqueStringArray(friendRecord["blockedIds"]);
    if (friendBlocked.includes(userId)) {
      return c.json({ error: "You are blocked by this user" }, 403);
    }

    const userFriendIds = uniqueStringArray(userRecord["friendIds"]);
    if (!userFriendIds.includes(friendId)) {
      userFriendIds.push(friendId);
    } else {
      return c.json({
        currentUser: sanitizeUserForResponse(userRecord),
        targetUser: sanitizeUserForResponse(friendRecord),
        alreadyFriends: true,
        success: true,
      });
    }

    const updatedUser: JsonRecord = {
      ...userRecord,
      friendIds: userFriendIds,
      updatedAt: new Date().toISOString(),
    };
    await kv.set(`user:${userId}`, updatedUser);

    const actorName = getStringProp(userRecord, "name") || "MoveSplash user";
    const actorAvatar =
      getStringProp(userRecord, "avatar") ||
      "https://api.dicebear.com/7.x/avataaars/svg?seed=MoveSplash";

    const notificationId = generateId();
    const notification: NotificationRecord = {
      id: notificationId,
      userId: friendId,
      type: "friend_request",
      actorName,
      actorAvatar,
      content: `${actorName} sent you a friend request.`,
      isRead: false,
      actionRequired: true,
      createdAt: new Date().toISOString(),
    };
    await kv.set(`notification:${friendId}:${notificationId}`, notification);

    return c.json({
      currentUser: sanitizeUserForResponse(updatedUser),
      targetUser: sanitizeUserForResponse(friendRecord),
      success: true,
    });
  } catch (error) {
    console.error("Error adding friend:", error);
    return c.json({ error: "Failed to add friend", details: String(error) }, 500);
  }
});

app.delete("/make-server-a14c7986/friends/:userId/:friendId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const friendId = c.req.param("friendId");
    if (!userId || !friendId || userId === friendId) {
      return c.json({ error: "Invalid userId or friendId" }, 400);
    }

    const userRecord = await kv.get<JsonRecord>(`user:${userId}`);
    const friendRecord = await kv.get<JsonRecord>(`user:${friendId}`);
    if (!isRecord(userRecord) || !isRecord(friendRecord)) {
      return c.json({ error: "User not found" }, 404);
    }

    const userFriendIds = uniqueStringArray(userRecord["friendIds"]).filter((id) => id !== friendId);
    const friendFriendIds = uniqueStringArray(friendRecord["friendIds"]).filter((id) => id !== userId);

    const updatedUser: JsonRecord = {
      ...userRecord,
      friendIds: userFriendIds,
      updatedAt: new Date().toISOString(),
    };
    const updatedFriend: JsonRecord = {
      ...friendRecord,
      friendIds: friendFriendIds,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, updatedUser);
    await kv.set(`user:${friendId}`, updatedFriend);

    return c.json({
      currentUser: sanitizeUserForResponse(updatedUser),
      targetUser: sanitizeUserForResponse(updatedFriend),
      success: true,
    });
  } catch (error) {
    console.error("Error removing friend:", error);
    return c.json({ error: "Failed to remove friend", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/blocks/:userId/:targetId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const targetId = c.req.param("targetId");
    if (!userId || !targetId || userId === targetId) {
      return c.json({ error: "Invalid userId or targetId" }, 400);
    }

    const userRecord = await kv.get<JsonRecord>(`user:${userId}`);
    const targetRecord = await kv.get<JsonRecord>(`user:${targetId}`);
    if (!isRecord(userRecord) || !isRecord(targetRecord)) {
      return c.json({ error: "User not found" }, 404);
    }

    const blockedIds = uniqueStringArray(userRecord["blockedIds"]);
    if (!blockedIds.includes(targetId)) {
      blockedIds.push(targetId);
    }
    const friendIds = uniqueStringArray(userRecord["friendIds"]).filter((id) => id !== targetId);

    const updatedUser: JsonRecord = {
      ...userRecord,
      blockedIds,
      friendIds,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, updatedUser);

    const targetFriendIds = uniqueStringArray(targetRecord["friendIds"]).filter((id) => id !== userId);
    let updatedTarget: JsonRecord = targetRecord;
    if (targetFriendIds.length !== uniqueStringArray(targetRecord["friendIds"]).length) {
      updatedTarget = {
        ...targetRecord,
        friendIds: targetFriendIds,
        updatedAt: new Date().toISOString(),
      };
      await kv.set(`user:${targetId}`, updatedTarget);
    }

    return c.json({
      currentUser: sanitizeUserForResponse(updatedUser),
      targetUser: sanitizeUserForResponse(updatedTarget),
      success: true,
    });
  } catch (error) {
    console.error("Error blocking user:", error);
    return c.json({ error: "Failed to block user", details: String(error) }, 500);
  }
});

app.delete("/make-server-a14c7986/blocks/:userId/:targetId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const targetId = c.req.param("targetId");
    if (!userId || !targetId || userId === targetId) {
      return c.json({ error: "Invalid userId or targetId" }, 400);
    }

    const userRecord = await kv.get<JsonRecord>(`user:${userId}`);
    if (!isRecord(userRecord)) {
      return c.json({ error: "User not found" }, 404);
    }

    const blockedIds = uniqueStringArray(userRecord["blockedIds"]).filter((id) => id !== targetId);

    const updatedUser: JsonRecord = {
      ...userRecord,
      blockedIds,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, updatedUser);

    return c.json({
      currentUser: sanitizeUserForResponse(updatedUser),
      success: true,
    });
  } catch (error) {
    console.error("Error unblocking user:", error);
    return c.json({ error: "Failed to unblock user", details: String(error) }, 500);
  }
});

// Get all posts
app.get("/make-server-a14c7986/posts", async (c) => {
  try {
    const postRecords = toRecordArray(await kv.getByPrefix("posts:"));
    const normalizedPosts = postRecords
      .map(normalizePostRecord)
      .filter((post): post is PostResponse => Boolean(post))
      .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));

    return c.json({ posts: normalizedPosts, success: true });
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return c.json({ error: "Failed to fetch posts", details: String(error) }, 500);
  }
});

// Get user posts
app.get("/make-server-a14c7986/users/:userId/posts", async (c) => {
  try {
    const userId = c.req.param("userId");
    const posts = await kv.getByPrefix(`posts:${userId}:`);
    
    return c.json({ posts: posts || [], success: true });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return c.json({ error: "Failed to fetch user posts", details: String(error) }, 500);
  }
});

// Create a new post
app.post("/make-server-a14c7986/posts", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, text, media } = body;
    
    if (!userId) {
      return c.json({ error: "Missing userId" }, 400);
    }
    
    const postId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();
    
    const post = {
      id: postId,
      userId,
      text: text || "",
      media: media || [],
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp,
      likedBy: []
    };
    
    await kv.set(`posts:${userId}:${postId}`, post);
    
    return c.json({ post, success: true });
  } catch (error) {
    console.error("Error creating post:", error);
    return c.json({ error: "Failed to create post", details: String(error) }, 500);
  }
});

// Delete a post
app.delete("/make-server-a14c7986/posts/:userId/:postId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const postId = c.req.param("postId");
    
    await kv.del(`posts:${userId}:${postId}`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    return c.json({ error: "Failed to delete post", details: String(error) }, 500);
  }
});

// Like/unlike a post
app.put("/make-server-a14c7986/posts/:userId/:postId/like", async (c) => {
  try {
    const userId = c.req.param("userId");
    const postId = c.req.param("postId");
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};
    const likerUserIdValue = body["likerUserId"];
    const likerUserId = typeof likerUserIdValue === "string" ? likerUserIdValue : "";
    
    if (!likerUserId) {
      return c.json({ error: "Missing likerUserId" }, 400);
    }
    
    const postKey = `posts:${userId}:${postId}`;
    const postData = await kv.get<JsonRecord>(postKey);
    if (!postData || !isRecord(postData)) {
      return c.json({ error: "Post not found" }, 404);
    }
    
    const post = postData;
    const likedByRaw = post["likedBy"];
    const likedBy = Array.isArray(likedByRaw)
      ? likedByRaw.filter((id): id is string => typeof id === "string")
      : [];
    const likesRaw = post["likes"];
    const currentLikes = typeof likesRaw === "number" ? likesRaw : 0;
    
    const hasLiked = likedBy.includes(likerUserId);
    
    const updatedPost: JsonRecord = {
      ...post,
      likes: hasLiked ? Math.max(currentLikes - 1, 0) : currentLikes + 1,
      likedBy: hasLiked 
        ? likedBy.filter((id: string) => id !== likerUserId)
        : [...likedBy, likerUserId]
    };
    
    await kv.set(postKey, updatedPost);
    
    return c.json({ post: updatedPost, success: true });
  } catch (error) {
    console.error("Error liking post:", error);
    return c.json({ error: "Failed to like post", details: String(error) }, 500);
  }
});

const toggleBookmarkForUser = async (
  userId: string,
  postOwnerId: string,
  postId: string,
): Promise<{ success: true; savedPostIds: string[]; saved: boolean; user: JsonRecord } | null> => {
  if (!userId || !postOwnerId || !postId) {
    return null;
  }

  const userKey = `user:${userId}`;
  const existingUserRecord = await kv.get<JsonRecord>(userKey);
  const userRecord = isRecord(existingUserRecord)
    ? existingUserRecord
    : {
        id: userId,
        savedPostIds: [],
        updatedAt: new Date().toISOString(),
      };

  const currentSaved = new Set(uniqueStringArray(userRecord["savedPostIds"]));
  const bookmarkKey = buildBookmarkKey(postOwnerId, postId);
  let saved = false;
  if (currentSaved.has(bookmarkKey)) {
    currentSaved.delete(bookmarkKey);
  } else {
    currentSaved.add(bookmarkKey);
    saved = true;
  }

  const updatedUser: JsonRecord = {
    ...userRecord,
    savedPostIds: Array.from(currentSaved),
    updatedAt: new Date().toISOString(),
  };

  await kv.set(userKey, updatedUser);

  return {
    success: true,
    savedPostIds: Array.from(currentSaved),
    saved,
    user: sanitizeUserForResponse(updatedUser),
  };
};

app.put("/make-server-a14c7986/posts/:postOwnerId/:postId/bookmark", async (c) => {
  try {
    const postOwnerId = c.req.param("postOwnerId");
    const postId = c.req.param("postId");
    const rawBody = await c.req.json().catch(() => ({}));
    const body = isRecord(rawBody) ? rawBody : {};

    const userIdCandidate = body["userId"] ?? body["bookmarkingUserId"] ?? body["saverUserId"];
    const userId = typeof userIdCandidate === "string" ? userIdCandidate : "";

    if (!userId) {
      return c.json({ error: "Missing userId" }, 400);
    }

    const postKey = `posts:${postOwnerId}:${postId}`;
    const postRecord = await kv.get<JsonRecord>(postKey);
    const result = await toggleBookmarkForUser(userId, postOwnerId, postId);
    if (!result) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ ...result, postExists: isRecord(postRecord), success: true });
  } catch (error) {
    console.error("Error updating bookmark:", error);
    return c.json({ error: "Failed to update bookmark", details: String(error) }, 500);
  }
});

app.put("/make-server-a14c7986/bookmarks", async (c) => {
  try {
    const rawBody = await c.req.json().catch(() => ({}));
    const body = isRecord(rawBody) ? rawBody : {};
    const userId =
      getStringProp(body, "userId") ||
      getStringProp(body, "bookmarkingUserId") ||
      getStringProp(body, "saverUserId");
    const postOwnerId =
      getStringProp(body, "postOwnerId") ||
      getStringProp(body, "ownerId") ||
      getStringProp(body, "postOwner");
    const postId = getStringProp(body, "postId");

    if (!userId || !postOwnerId || !postId) {
      return c.json({ error: "Missing userId, postOwnerId, or postId" }, 400);
    }

    const postKey = `posts:${postOwnerId}:${postId}`;
    const postRecord = await kv.get<JsonRecord>(postKey);
    const result = await toggleBookmarkForUser(userId, postOwnerId, postId);
    if (!result) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ ...result, postExists: isRecord(postRecord), success: true });
  } catch (error) {
    console.error("Error updating bookmark via fallback:", error);
    return c.json({ error: "Failed to update bookmark", details: String(error) }, 500);
  }
});

// Get post comments
app.get("/make-server-a14c7986/posts/:userId/:postId/comments", async (c) => {
  try {
    const userId = c.req.param("userId");
    const postId = c.req.param("postId");

    const comments = await getCommentsForPost(userId, postId);
    return c.json({ comments, success: true });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return c.json({ error: "Failed to fetch comments", details: String(error) }, 500);
  }
});

// Get post comments via query parameters (for environments without dynamic routing)
app.get("/make-server-a14c7986/comments", async (c) => {
  try {
    const postOwnerId =
      c.req.query("ownerId") ||
      c.req.query("postOwnerId") ||
      c.req.query("userId") ||
      "";
    const postId = c.req.query("postId") || "";

    if (!postOwnerId || !postId) {
      return c.json({ error: "Missing ownerId or postId" }, 400);
    }

    const comments = await getCommentsForPost(postOwnerId, postId);
    return c.json({ comments, success: true });
  } catch (error) {
    console.error("Error fetching comments via query route:", error);
    return c.json({ error: "Failed to fetch comments", details: String(error) }, 500);
  }
});

// Create a comment
app.post("/make-server-a14c7986/posts/:userId/:postId/comments", async (c) => {
  try {
    const userId = c.req.param("userId");
    const postId = c.req.param("postId");
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};

    const authorId = getStringProp(body, "authorId");
    const content = getStringProp(body, "content");

    const result = await createCommentForPost(userId, postId, authorId, content);
    if (!result.success) {
      return c.json({ error: result.error }, result.status);
    }

    return c.json({ comment: result.comment, post: result.post, success: true });
  } catch (error) {
    console.error("Error creating comment:", error);
    return c.json({ error: "Failed to create comment", details: String(error) }, 500);
  }
});

// Create a comment via JSON payload (no dynamic path)
app.post("/make-server-a14c7986/comments", async (c) => {
  try {
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};

    const postOwnerId =
      getStringProp(body, "postOwnerId") ||
      getStringProp(body, "ownerId") ||
      getStringProp(body, "userId");
    const postId = getStringProp(body, "postId");
    const authorId = getStringProp(body, "authorId");
    const content = getStringProp(body, "content");

    if (!postOwnerId || !postId) {
      return c.json({ error: "Missing postOwnerId or postId" }, 400);
    }

    const result = await createCommentForPost(postOwnerId, postId, authorId, content);
    if (!result.success) {
      return c.json({ error: result.error }, result.status);
    }

    return c.json({ comment: result.comment, post: result.post, success: true });
  } catch (error) {
    console.error("Error creating comment via query route:", error);
    return c.json({ error: "Failed to create comment", details: String(error) }, 500);
  }
});

// Record a post share
app.post("/make-server-a14c7986/posts/:userId/:postId/share", async (c) => {
  try {
    const userId = c.req.param("userId");
    const postId = c.req.param("postId");
    const rawBody = await c.req.json().catch(() => ({}));
    const body = isRecord(rawBody) ? rawBody : {};

    const platform = getStringProp(body, "platform");
    const sharedBy =
      getStringProp(body, "sharerUserId") || getStringProp(body, "sharedBy");

    const result = await recordShareForPost(userId, postId, platform, sharedBy);
    if (!result.success) {
      return c.json({ error: result.error }, result.status);
    }

    return c.json({ share: result.share, post: result.post, success: true });
  } catch (error) {
    console.error("Error recording share:", error);
    return c.json({ error: "Failed to record share", details: String(error) }, 500);
  }
});

// Record a post share via JSON payload (no dynamic path)
app.post("/make-server-a14c7986/shares", async (c) => {
  try {
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};

    const postOwnerId =
      getStringProp(body, "postOwnerId") ||
      getStringProp(body, "ownerId") ||
      getStringProp(body, "userId");
    const postId = getStringProp(body, "postId");
    const platform = getStringProp(body, "platform");
    const sharedBy =
      getStringProp(body, "sharerUserId") || getStringProp(body, "sharedBy");

    if (!postOwnerId || !postId) {
      return c.json({ error: "Missing postOwnerId or postId" }, 400);
    }

    const result = await recordShareForPost(postOwnerId, postId, platform, sharedBy);
    if (!result.success) {
      return c.json({ error: result.error }, result.status);
    }

    return c.json({ share: result.share, post: result.post, success: true });
  } catch (error) {
    console.error("Error recording share via query route:", error);
    return c.json({ error: "Failed to record share", details: String(error) }, 500);
  }
});

// ========== STORY ENDPOINTS ==========

app.get("/make-server-a14c7986/stories", async (c) => {
  try {
    const storedStories = await collectStoryRecords();
    const userCache = new Map<string, StoryUserSummary | null>();
    const normalizedStories = (
      await Promise.all(storedStories.map((record) => normalizeStoryRecord(record, userCache)))
    ).filter((story): story is StoryResponse => Boolean(story));

    const sortedStories = normalizedStories.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
    );

    return c.json({ stories: sortedStories, success: true });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return c.json({ error: "Failed to fetch stories", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/stories", async (c) => {
  try {
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};
    const userId = getStringProp(body, "userId");
    const storySnapshotRaw =
      isRecord(body["storySnapshot"])
        ? (body["storySnapshot"] as JsonRecord)
        : isRecord(body["user"])
        ? (body as JsonRecord)
        : null;
    const userSnapshotRaw = isRecord(body["userSnapshot"])
      ? (body["userSnapshot"] as JsonRecord)
      : isRecord(body["user"])
      ? (body["user"] as JsonRecord)
      : isRecord(storySnapshotRaw) && isRecord(storySnapshotRaw["user"])
      ? (storySnapshotRaw["user"] as JsonRecord)
      : null;

    if (!userId) {
      return c.json({ error: "userId is required" }, 400);
    }

    let userRecord = await kv.get<JsonRecord>(`user:${userId}`);
    if (!isRecord(userRecord) && userSnapshotRaw) {
      const snapshotUser = sanitizeSnapshotUser(userSnapshotRaw);
      if (snapshotUser) {
        await persistUserSummary(snapshotUser);
        userRecord = {
          id: snapshotUser.id,
          name: snapshotUser.name,
          username: snapshotUser.username,
          avatar: snapshotUser.avatar,
          ablyClientId: snapshotUser.ablyClientId,
        } satisfies JsonRecord;
      }
    }

    if (!isRecord(userRecord)) {
      return c.json({ error: "User not found" }, 404);
    }

    const now = new Date();
    const fallbackId = `${userId}-${now.getTime()}`;
    const storyIdFromBody = getStringProp(body, "id");
    const storyId = storyIdFromBody || generateId();

    const rawItems =
      Array.isArray(body["items"])
        ? (body["items"] as JsonRecord[])
        : Array.isArray(storySnapshotRaw?.items)
        ? (storySnapshotRaw!.items as JsonRecord[])
        : [];

    const existingRecord = await resolveStoredStoryRecord(storyId);
    const existingItems =
      existingRecord.record && Array.isArray(existingRecord.record["items"])
        ? extractStoryItems(existingRecord.record["items"], fallbackId)
        : [];

    let items = extractStoryItems(rawItems, fallbackId, existingItems);

    if (items.length === 0) {
      items = [
        {
          id: `${storyId}-placeholder`,
          type: "image",
          url: DEFAULT_STORY_PLACEHOLDER_URL,
          duration: DEFAULT_STORY_DURATION_SECONDS,
          timestamp: new Date().toISOString(),
        },
      ];
    }

    const expiresInSeconds = body["expiresInSeconds"];
    const expiresMs =
      typeof expiresInSeconds === "number" && Number.isFinite(expiresInSeconds)
        ? Math.max(60, expiresInSeconds) * 1000
        : STORY_EXPIRATION_MS;

    const visibility = resolveStoryVisibility(getStringProp(body, "visibility"));
    const createdAtRaw =
      getStringProp(body, "createdAt") ||
      (storySnapshotRaw ? getStringProp(storySnapshotRaw, "createdAt") : "");
    const createdAtMs = createdAtRaw ? Date.parse(createdAtRaw) : now.getTime();
    const createdAt = Number.isNaN(createdAtMs) ? now.toISOString() : new Date(createdAtMs).toISOString();
    const expiresAtRaw =
      getStringProp(body, "expiresAt") ||
      (storySnapshotRaw ? getStringProp(storySnapshotRaw, "expiresAt") : "");
    const expiresAtMsCandidate = expiresAtRaw ? Date.parse(expiresAtRaw) : createdAtMs + expiresMs;
    const expiresAt = Number.isNaN(expiresAtMsCandidate)
      ? new Date(createdAtMs + STORY_EXPIRATION_MS).toISOString()
      : new Date(expiresAtMsCandidate).toISOString();
    const viewers = uniqueStringArray(
      body["viewers"] ?? (storySnapshotRaw ? storySnapshotRaw["viewers"] : []),
    );
    const likes = uniqueStringArray(body["likes"] ?? (storySnapshotRaw ? storySnapshotRaw["likes"] : []));
    const replies = sanitizeSnapshotReplies(
      body["replies"] ?? (storySnapshotRaw ? storySnapshotRaw["replies"] : []),
      storyId,
    );

    const storyRecord: JsonRecord = {
      id: storyId,
      userId,
      items,
      createdAt,
      expiresAt,
      viewers,
      visibility,
      likes,
      replies,
    };

    await kv.set(`story:${storyId}`, storyRecord);

    const userCache = new Map<string, StoryUserSummary | null>();
    userCache.set(userId, {
      id: getStringProp(userRecord, "id") || userId,
      name: getStringProp(userRecord, "name"),
      username: getStringProp(userRecord, "username"),
      avatar: getStringProp(userRecord, "avatar"),
      ablyClientId: getStringProp(userRecord, "ablyClientId") || userId,
    });

    const normalizedStory = await normalizeStoryRecord(storyRecord, userCache);
    if (!normalizedStory) {
      return c.json({ error: "Story data is invalid", success: false }, 500);
    }

    return c.json({ story: normalizedStory, success: true });
  } catch (error) {
    console.error("Error creating story:", error);
    return c.json({ error: "Failed to create story", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/stories/:storyId/view", async (c) => {
  try {
    const storyId = c.req.param("storyId");
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};
    const viewerId = getStringProp(body, "viewerId");

    if (!viewerId) {
      return c.json({ error: "viewerId is required" }, 400);
    }

    const { key: storyKey, record: storyData } = await resolveStoredStoryRecord(storyId);
    if (!isRecord(storyData)) {
      return c.json({ error: "Story not found" }, 404);
    }

    const viewers = new Set(toStringArray(storyData["viewers"]));
    viewers.add(viewerId);

    const updatedStory: JsonRecord = {
      ...storyData,
      viewers: Array.from(viewers),
      updatedAt: new Date().toISOString(),
    };

    await kv.set(storyKey, updatedStory);

    const normalizedStory = await normalizeStoryRecord(updatedStory, new Map());
    if (!normalizedStory) {
      return c.json({ error: "Story data is invalid", success: false }, 500);
    }

    return c.json({ story: normalizedStory, success: true });
  } catch (error) {
    console.error("Error updating story view state:", error);
    return c.json({ error: "Failed to update story view", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/stories/:storyId/like", async (c) => {
  try {
    const storyId = c.req.param("storyId");
    const rawBody = await c.req.json().catch(() => ({}));
    const body = isRecord(rawBody) ? rawBody : {};
    const userId = getStringProp(body, "userId") || getStringProp(body, "likerId");
    const snapshotRaw = body["storySnapshot"];
    const likerSnapshotRaw = body["likerSnapshot"];

    if (!userId) {
      return c.json({ error: "userId is required" }, 400);
    }

    const likerSnapshot = sanitizeSnapshotUser(likerSnapshotRaw);
    const likerRecord = await kv.get<JsonRecord>(`user:${userId}`);
    if (!isRecord(likerRecord) && likerSnapshotRaw) {
      if (likerSnapshot) {
        await persistUserSummary(likerSnapshot);
      }
    }

    let result = await toggleStoryLike(storyId, userId);
    let storyData = result;

    if (!storyData && snapshotRaw) {
      const restored = await restoreStoryFromSnapshot(snapshotRaw);
      if (restored) {
        result = await toggleStoryLike(storyId, userId, restored);
        storyData = result;
      } else {
        console.warn("[toggleStoryLike] Failed to restore story from snapshot", storyId);
      }
    }

    if (!storyData && snapshotRaw) {
      const built = await buildStoryRecordFromSnapshot(snapshotRaw);
      if (built) {
        const likes = uniqueStringArray(built.record["likes"]).filter((id) => id !== userId);
        built.record["likes"] = likes;
        await persistStoryRecord(built.record, built.user);
        result = await toggleStoryLike(storyId, userId, built.record);
        storyData = result;
      }
    }

    if (!storyData) {
      if (snapshotRaw) {
        const built = await buildStoryRecordFromSnapshot(snapshotRaw);
        if (built) {
          const likes = new Set(uniqueStringArray(built.record["likes"]));
          likes.add(userId);
          const syntheticRecord: JsonRecord = {
            ...built.record,
            likes: Array.from(likes),
            updatedAt: new Date().toISOString(),
          };
          await persistStoryRecord(syntheticRecord, built.user);
          const userCache = new Map<string, StoryUserSummary | null>();
          userCache.set(built.user.id, built.user);
          const normalizedStory = await normalizeStoryRecord(syntheticRecord, userCache);
          if (normalizedStory) {
            return c.json({ story: normalizedStory, liked: true, success: true, restored: true });
          }
        }
      }
      const builtStory = snapshotRaw ? await buildStoryRecordFromSnapshot(snapshotRaw) : null;
      if (builtStory) {
        builtStory.record["likes"] = Array.from(
          new Set([
            ...(Array.isArray(builtStory.record["likes"]) ? builtStory.record["likes"] : []),
            userId,
          ]),
        );
        await persistStoryRecord(builtStory.record, builtStory.user);
        const userCache = new Map<string, StoryUserSummary | null>();
        userCache.set(builtStory.user.id, builtStory.user);
        const normalizedStory = await normalizeStoryRecord(builtStory.record, userCache);
        if (normalizedStory) {
          return c.json({ story: normalizedStory, liked: true, success: true, restored: false }, 200);
        }
      }

      const fallbackUser = ensureUserSummary(likerSnapshot ?? likerSnapshotRaw, userId);
      const fallbackRecord: JsonRecord = {
        id: storyId,
        userId,
        items: [
          {
            id: `${storyId}-placeholder`,
            type: "image",
            url: DEFAULT_STORY_PLACEHOLDER_URL,
            duration: DEFAULT_STORY_DURATION_SECONDS,
            timestamp: new Date().toISOString(),
          },
        ],
        viewers: [],
        visibility: "friends",
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + STORY_EXPIRATION_MS).toISOString(),
        likes: [userId],
        replies: [],
      };
      await persistStoryRecord(fallbackRecord, fallbackUser);
      return c.json({ story: fallbackRecord, liked: true, success: true, restored: false }, 200);
    }

    const userCache = new Map<string, StoryUserSummary | null>();
    const normalizedStory = await normalizeStoryRecord(storyData.story, userCache);
    if (!normalizedStory) {
      return c.json({ error: "Story data is invalid", success: false }, 500);
    }

    return c.json({ story: normalizedStory, liked: storyData.liked, success: true });
  } catch (error) {
    console.error("Error toggling story like:", error);
    return c.json({ error: "Failed to toggle story like", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/stories/:storyId/reply", async (c) => {
  try {
    const storyId = c.req.param("storyId");
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};
    const authorId = getStringProp(body, "authorId");
    const content = getStringProp(body, "content");
    const snapshotRaw = body["storySnapshot"];
    const authorSnapshotRaw = body["authorSnapshot"];
    const authorSnapshot = sanitizeSnapshotUser(authorSnapshotRaw);

    if (!authorId || !content) {
      return c.json({ error: "authorId and content are required" }, 400);
    }

    const authorRecord = await kv.get<JsonRecord>(`user:${authorId}`);
    if (!isRecord(authorRecord) && authorSnapshot) {
      await persistUserSummary(authorSnapshot);
    }

    let result = await addStoryReply(storyId, authorId, content, undefined, authorSnapshot ?? undefined);
    let storyData = result;

    if (!storyData && snapshotRaw) {
      const restored = await restoreStoryFromSnapshot(snapshotRaw);
      if (restored) {
        result = await addStoryReply(storyId, authorId, content, restored, authorSnapshot ?? undefined);
        storyData = result;
      } else {
        console.warn("[addStoryReply] Failed to restore story from snapshot", storyId);
      }
    }

    let syntheticReply: StoryReplyRecord | null = null;
    if (!storyData && snapshotRaw) {
      const built = await buildStoryRecordFromSnapshot(snapshotRaw);
      if (built) {
        if (authorSnapshot) {
          await persistUserSummary(authorSnapshot);
        }
        const replies = sanitizeSnapshotReplies(built.record["replies"], storyId);
        const replyRecord: StoryReplyRecord = {
          id: `${Date.now()}-reply-${Math.random().toString(36).slice(2, 9)}`,
          storyId,
          authorId,
          content: content.trim().slice(0, MAX_STORY_REPLY_LENGTH),
          timestamp: new Date().toISOString(),
        };
        replies.push(replyRecord);
        built.record["replies"] = replies;
        built.record["updatedAt"] = new Date().toISOString();
        await persistStoryRecord(built.record, built.user);
        const userCache = new Map<string, StoryUserSummary | null>();
        userCache.set(built.user.id, built.user);
        const normalizedStory = await normalizeStoryRecord(built.record, userCache);
        if (normalizedStory) {
          const normalizedReply =
            normalizedStory.replies.find((reply) => reply.id === replyRecord.id) ?? null;
          return c.json({
            story: normalizedStory,
            reply: normalizedReply,
            success: true,
            restored: true,
          });
        }
        syntheticReply = replyRecord;
      }
    }

    if (!storyData) {
      if (snapshotRaw) {
        const built = await buildStoryRecordFromSnapshot(snapshotRaw);
        if (built) {
          const replies = sanitizeSnapshotReplies(built.record["replies"], storyId);
          const replyRecord: StoryReplyRecord = {
            id: `${Date.now()}-reply-${Math.random().toString(36).slice(2, 9)}`,
            storyId,
            authorId,
            content: content.trim().slice(0, MAX_STORY_REPLY_LENGTH),
            timestamp: new Date().toISOString(),
          };
          replies.push(replyRecord);
          built.record["replies"] = replies;
          built.record["updatedAt"] = new Date().toISOString();
          await persistStoryRecord(built.record, built.user);
          const userCache = new Map<string, StoryUserSummary | null>();
          userCache.set(built.user.id, built.user);
          const normalizedStory = await normalizeStoryRecord(built.record, userCache);
          if (normalizedStory) {
            const normalizedReply =
              normalizedStory.replies.find((reply) => reply.id === replyRecord.id) ?? null;
            return c.json({
              story: normalizedStory,
              reply: normalizedReply,
              success: true,
              restored: true,
            });
          }
        }
      }
      const fallbackBuilt = snapshotRaw
        ? await buildStoryRecordFromSnapshot(snapshotRaw)
        : null;
      if (fallbackBuilt) {
        const replies = sanitizeSnapshotReplies(fallbackBuilt.record["replies"], storyId);
        const replyRecord: StoryReplyRecord = {
          id: `${Date.now()}-reply-${Math.random().toString(36).slice(2, 9)}`,
          storyId,
          authorId,
          content: content.trim().slice(0, MAX_STORY_REPLY_LENGTH),
          timestamp: new Date().toISOString(),
        };
        replies.push(replyRecord);
        fallbackBuilt.record["replies"] = replies;
        fallbackBuilt.record["updatedAt"] = new Date().toISOString();
        await persistStoryRecord(fallbackBuilt.record, fallbackBuilt.user);
        return c.json({
          story: fallbackBuilt.record,
          reply: replyRecord,
          success: true,
          restored: false,
        });
      }
      const fallbackUser = ensureUserSummary(authorSnapshot ?? authorSnapshotRaw, authorId);
      const replyRecord: StoryReplyRecord = {
        id: `${Date.now()}-reply-${Math.random().toString(36).slice(2, 9)}`,
        storyId,
        authorId,
        content: content.trim().slice(0, MAX_STORY_REPLY_LENGTH),
        timestamp: new Date().toISOString(),
      };
      const fallbackRecord: JsonRecord = {
        id: storyId,
        userId: authorId,
        items: [
          {
            id: `${storyId}-placeholder`,
            type: "image",
            url: DEFAULT_STORY_PLACEHOLDER_URL,
            duration: DEFAULT_STORY_DURATION_SECONDS,
            timestamp: new Date().toISOString(),
          },
        ],
        viewers: [],
        visibility: "friends",
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + STORY_EXPIRATION_MS).toISOString(),
        likes: [],
        replies: [replyRecord],
      };
      await persistStoryRecord(fallbackRecord, fallbackUser);
      return c.json({ story: fallbackRecord, reply: replyRecord, success: true, restored: false }, 200);
    }

    const userCache = new Map<string, StoryUserSummary | null>();
    const normalizedStory = await normalizeStoryRecord(storyData.story, userCache);
    if (!normalizedStory) {
      return c.json({ error: "Story data is invalid", success: false }, 500);
    }

    const normalizedReply =
      normalizedStory.replies.find((reply) => reply.id === storyData.reply.id) ?? syntheticReply;

    return c.json({ story: normalizedStory, reply: normalizedReply, success: true });
  } catch (error) {
    console.error("Error adding story reply:", error);
    return c.json({ error: "Failed to add story reply", details: String(error) }, 500);
  }
});

const buildNotificationKey = (userId: string, notificationId: string) =>
  `notification:${userId}:${notificationId}`;

app.get("/make-server-a14c7986/notifications/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const records = await kv.getByPrefix<JsonRecord>(`notification:${userId}:`);
    const normalized = records
      .map((record) => normalizeNotificationRecord(record as JsonRecord))
      .filter((record): record is NotificationRecord => Boolean(record))
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

    return c.json({ notifications: normalized, success: true });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return c.json({ error: "Failed to fetch notifications", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/notifications", async (c) => {
  try {
    const rawBody = await c.req.json();
    const body = isRecord(rawBody) ? rawBody : {};
    const userId = getStringProp(body, "userId");
    const type = resolveNotificationType(getStringProp(body, "type"));
    const content = getStringProp(body, "content");
    const actorName = getStringProp(body, "actorName") || "MoveSplash User";
    const actorAvatar =
      getStringProp(body, "actorAvatar") ||
      "https://api.dicebear.com/7.x/avataaars/svg?seed=MoveSplash";

    if (!userId || !content) {
      return c.json({ error: "Missing userId or content" }, 400);
    }

    const id = getStringProp(body, "id") || generateId();
    const record: NotificationRecord = {
      id,
      userId,
      type,
      actorName,
      actorAvatar,
      content,
      isRead: toBoolean(body["isRead"], false),
      actionRequired: toBoolean(body["actionRequired"], false),
      createdAt: toIsoDate(body["createdAt"]),
    };

    await kv.set(buildNotificationKey(userId, id), record);
    return c.json({ notification: record, success: true });
  } catch (error) {
    console.error("Error creating notification:", error);
    return c.json({ error: "Failed to create notification", details: String(error) }, 500);
  }
});

app.put("/make-server-a14c7986/notifications/:userId/:notificationId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const notificationId = c.req.param("notificationId");
    const rawBody = await c.req.json();
    const payload = isRecord(rawBody) ? rawBody : {};
    const key = buildNotificationKey(userId, notificationId);
    const existing = await kv.get<JsonRecord>(key);
    if (!existing || !isRecord(existing)) {
      return c.json({ error: "Notification not found" }, 404);
    }

    const record = normalizeNotificationRecord(existing);
    if (!record) {
      return c.json({ error: "Notification is invalid" }, 400);
    }

    const updated: NotificationRecord = {
      ...record,
      type: payload.type ? resolveNotificationType(String(payload.type)) : record.type,
      actorName: getStringProp(payload, "actorName") || record.actorName,
      actorAvatar: getStringProp(payload, "actorAvatar") || record.actorAvatar,
      content: getStringProp(payload, "content") || record.content,
      isRead: payload.isRead !== undefined ? toBoolean(payload.isRead, record.isRead) : record.isRead,
      actionRequired:
        payload.actionRequired !== undefined
          ? toBoolean(payload.actionRequired, record.actionRequired)
          : record.actionRequired,
      createdAt: payload.createdAt ? toIsoDate(payload.createdAt) : record.createdAt,
    };

    await kv.set(key, updated);
    return c.json({ notification: updated, success: true });
  } catch (error) {
    console.error("Error updating notification:", error);
    return c.json({ error: "Failed to update notification", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/notifications/:userId/mark-all-read", async (c) => {
  try {
    const userId = c.req.param("userId");
    const records = await kv.getByPrefix<JsonRecord>(`notification:${userId}:`);
    await Promise.all(
      records.map(async (record) => {
        const normalized = normalizeNotificationRecord(record as JsonRecord);
        if (!normalized || normalized.isRead) {
          return;
        }
        await kv.set(buildNotificationKey(userId, normalized.id), {
          ...normalized,
          isRead: true,
        });
      }),
    );
    return c.json({ success: true });
  } catch (error) {
    console.error("Error marking notifications as read:", error);
    return c.json({ error: "Failed to mark notifications", details: String(error) }, 500);
  }
});

app.delete("/make-server-a14c7986/notifications/:userId/:notificationId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const notificationId = c.req.param("notificationId");
    await kv.del(buildNotificationKey(userId, notificationId));
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting notification:", error);
    return c.json({ error: "Failed to delete notification", details: String(error) }, 500);
  }
});

app.delete("/make-server-a14c7986/notifications/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const records = await kv.getByPrefix<{ id?: string }>(`notification:${userId}:`);
    await Promise.all(
      records
        .map((record) => getStringProp(record as JsonRecord, "id"))
        .filter((id): id is string => Boolean(id))
        .map((id) => kv.del(buildNotificationKey(userId, id))),
    );
    return c.json({ success: true });
  } catch (error) {
    console.error("Error clearing notifications:", error);
    return c.json({ error: "Failed to clear notifications", details: String(error) }, 500);
  }
});

// Get all users (for friends, etc.)
app.get("/make-server-a14c7986/users", async (c) => {
  try {
    const userRecords = toRecordArray(await kv.getByPrefix("user:"));

    // Remove passwords from all users for security
    const usersWithoutPasswords = userRecords.map((user) => {
      const userWithoutPassword: JsonRecord = { ...user };
      delete userWithoutPassword.password;
      const ablyClientId = getStringProp(user, "ablyClientId") || getStringProp(user, "id");
      return {
        ...userWithoutPassword,
        ablyClientId,
      };
    });
    
    return c.json({ users: usersWithoutPasswords, success: true });
  } catch (error) {
    console.error("Error fetching users:", error);
    return c.json({ error: "Failed to fetch users", details: String(error) }, 500);
  }
});

// Login endpoint - validates email and password
app.post("/make-server-a14c7986/auth/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body as Record<string, unknown>;
    const normalizedEmail = typeof email === "string" ? email : "";
    const normalizedPassword = typeof password === "string" ? password : "";
    
    if (!normalizedEmail || !normalizedPassword) {
      return c.json({ error: "Email and password required" }, 400);
    }
    
    // Get all users and find by email
    const allUsers = toRecordArray(await kv.getByPrefix("user:"));
    const user = allUsers.find((candidate) => getStringProp(candidate, "email") === normalizedEmail);
    
    if (!user) {
      return c.json({ error: "Invalid email or password" }, 401);
    }
    
    // Validate password
    if (getStringProp(user, "password") !== normalizedPassword) {
      return c.json({ error: "Invalid email or password" }, 401);
    }
    
    // Remove password from response
    const userWithoutPassword: JsonRecord = { ...user };
    delete userWithoutPassword.password;
    const responseUser = {
      ...userWithoutPassword,
      ablyClientId: getStringProp(user, "ablyClientId") || getStringProp(user, "id"),
    };
    
    return c.json({ user: responseUser, success: true });
  } catch (error) {
    console.error("Error during login:", error);
    return c.json({ error: "Login failed", details: String(error) }, 500);
  }
});

app.post("/make-server-a14c7986/auth/change-password", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, oldPassword, newPassword } = body as Record<string, unknown>;
    const normalizedUserId = typeof userId === "string" ? userId : "";
    const normalizedOldPassword = typeof oldPassword === "string" ? oldPassword : "";
    const normalizedNewPassword = typeof newPassword === "string" ? newPassword : "";

    if (!normalizedUserId || !normalizedOldPassword || !normalizedNewPassword) {
      return c.json({ error: "User ID, old password and new password are required" }, 400);
    }

    if (normalizedNewPassword.length < 8) {
      return c.json({ error: "New password must be at least 8 characters long" }, 400);
    }

    if (normalizedNewPassword === normalizedOldPassword) {
      return c.json({ error: "New password must be different from the old password" }, 400);
    }

    const userKey = `user:${normalizedUserId}`;
    const userRecord = await kv.get<JsonRecord>(userKey);

    if (!userRecord || !isRecord(userRecord)) {
      return c.json({ error: "User not found" }, 404);
    }

    if (getStringProp(userRecord, "password") !== normalizedOldPassword) {
      return c.json({ error: "Old password is incorrect" }, 403);
    }

    const updatedUser: JsonRecord = {
      ...userRecord,
      password: normalizedNewPassword,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(userKey, updatedUser);

    return c.json({ success: true });
  } catch (error) {
    console.error("Error changing password:", error);
    return c.json({ error: "Failed to change password", details: String(error) }, 500);
  }
});

// Register endpoint - creates new user account
app.post("/make-server-a14c7986/auth/register", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, password } = body as Record<string, unknown>;
    const normalizedName = typeof name === "string" ? name : "";
    const normalizedEmail = typeof email === "string" ? email : "";
    const normalizedPassword = typeof password === "string" ? password : "";
    
    if (!normalizedName || !normalizedEmail || !normalizedPassword) {
      return c.json({ error: "Name, email and password required" }, 400);
    }
    
    // Check if email already exists
    const allUsers = toRecordArray(await kv.getByPrefix("user:"));
    const existingUser = allUsers.find((candidate) => getStringProp(candidate, "email") === normalizedEmail);
    
    if (existingUser) {
      return c.json({ error: "Email already registered" }, 409);
    }
    
    // Create new user
    const userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();
    
    const newUser = {
      id: userId,
      ablyClientId: userId,
      name: normalizedName,
      username: `@${normalizedName.toLowerCase().replace(/\s+/g, '')}`,
      email: normalizedEmail,
      password: normalizedPassword, // In production, this should be hashed
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${normalizedName}`,
      bio: '',
      location: '',
      website: '',
      joinedAt: timestamp,
      friendIds: [],
      blockedIds: [],
      savedPostIds: [],
      createdAt: timestamp
    };
    
    // Save user to database
    await kv.set(`user:${userId}`, newUser);
    
    // Create default settings
    const defaultSettings = {
      userId,
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
      phoneNumber: '',
      updatedAt: timestamp
    };
    
    await kv.set(`settings:${userId}`, defaultSettings);
    
    // Remove password from response
    const userWithoutPassword: JsonRecord = { ...newUser };
    delete userWithoutPassword.password;
    const responseUser = {
      ...userWithoutPassword,
      ablyClientId: getStringProp(userWithoutPassword, "ablyClientId") || userId,
    };
    
    return c.json({ 
      user: responseUser, 
      settings: defaultSettings,
      success: true 
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return c.json({ error: "Registration failed", details: String(error) }, 500);
  }
});

type GlobalWithDenoServe = typeof globalThis & {
  Deno?: {
    serve?: (handler: (request: Request) => Response | Promise<Response>) => void;
  };
};

const maybeDeno = globalThis as GlobalWithDenoServe;

if (maybeDeno.Deno?.serve) {
  maybeDeno.Deno.serve(app.fetch);
}

export const __testables = {
  toggleBookmarkForUser,
  toggleStoryLike,
  addStoryReply,
  restoreStoryFromSnapshot,
  resolveStoredStoryRecord,
};

export default app;
