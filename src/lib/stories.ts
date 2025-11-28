import { supabase } from "./supabaseClient";

export type StoryRecord = {
  id: string;
  user_id: string;
  media_url: string;
  media_type: "image" | "video";
  caption: string | null;
  created_at: string;
};

export async function fetchStories(): Promise<StoryRecord[]> {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch stories:", error);
    return [];
  }

  return (data ?? []) as StoryRecord[];
}

export async function uploadStoryFile(
  file: File,
  userId: string
): Promise<{ url: string; type: "image" | "video" } | null> {
  const ext = file.name.split(".").pop() || "bin";
  const isVideo = file.type.startsWith("video/");
  const mediaType: "image" | "video" = isVideo ? "video" : "image";

  const filePath = `${userId}/${Date.now()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("stories")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    console.error("Failed to upload story file:", uploadError);
    return null;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("stories").getPublicUrl(filePath);

  return { url: publicUrl, type: mediaType };
}

export async function createStory(
  userId: string,
  mediaUrl: string,
  mediaType: "image" | "video",
  caption: string
) {
  const { error } = await supabase.from("stories").insert({
    user_id: userId,
    media_url: mediaUrl,
    media_type: mediaType,
    caption,
  });

  if (error) {
    console.error("Failed to create story:", error);
    throw error;
  }
}
