export type AppState =
  | "landing"
  | "login"
  | "signup"
  | "app"
  | "help"
  | "privacy"
  | "terms"
  | "about"
  | "cookies"
  | "feature";

export type AppView =
  | "feed"
  | "messages"
  | "video"
  | "friends"
  | "stories"
  | "settings"
  | "profile"
  | "help"
  | "privacy"
  | "terms";

export type CallType = "audio" | "video" | null;

export type FeatureType =
  | "group-chats"
  | "video-calls"
  | "screen-share"
  | "stories"
  | "friends"
  | "gen-z";
