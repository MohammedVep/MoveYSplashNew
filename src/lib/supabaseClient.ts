import { createClient } from "@supabase/supabase-js";
import { projectId as fallbackProjectId, publicAnonKey as fallbackAnonKey } from "@/app/utils/supabase/info";

const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID || fallbackProjectId;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || fallbackAnonKey;

if (!projectId || !anonKey) {
  throw new Error(
    "Supabase environment variables are missing. Make sure NEXT_PUBLIC_SUPABASE_PROJECT_ID and NEXT_PUBLIC_SUPABASE_ANON_KEY are set."
  );
}

const supabaseUrl = `https://${projectId}.supabase.co`;

export const supabase = createClient(supabaseUrl, anonKey);
