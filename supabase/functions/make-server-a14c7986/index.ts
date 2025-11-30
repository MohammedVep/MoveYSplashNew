import app from "../../../src/app/superbase/functions/server/index.tsx";

const MAX_BYTES = 64 * 1024; // 64KB cap
const STORAGE_HOST = "opmvuhlheenygwbqwljk.supabase.co";
const STORIES_PATH = "/make-server-a14c7986/stories";

function isSupabaseStorageUrl(u: string): boolean {
  try {
    const parsed = new URL(u);
    if (parsed.hostname !== STORAGE_HOST) return false;
    return parsed.pathname.startsWith("/storage/v1/object/");
  } catch {
    return false;
  }
}

function concatUint8(chunks: Uint8Array[], total: number) {
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const c of chunks) {
    merged.set(c, offset);
    offset += c.byteLength;
  }
  return merged;
}

async function readBodyBounded(req: Request, maxBytes = MAX_BYTES): Promise<string> {
  const len = Number(req.headers.get("content-length") ?? 0);
  if (len && len > maxBytes) throw new Response("Payload too large", { status: 413 });

  const reader = req.body?.getReader();
  if (!reader) return "";
  let received = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      received += value.byteLength;
      if (received > maxBytes) throw new Response("Payload too large", { status: 413 });
      chunks.push(value);
    }
  }
  return new TextDecoder().decode(concatUint8(chunks, received));
}

function safeJsonParse<T>(text: string): T {
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Response("Invalid JSON", { status: 400 });
  }
}

function rejectInvalidMediaUrls(payload: unknown) {
  const bad = (value: unknown) =>
    typeof value === "string" &&
    (value.startsWith("data:") ||
      (value.startsWith("http") && !isSupabaseStorageUrl(value)));

  const scan = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(scan);
    else if (v && typeof v === "object") Object.values(v as Record<string, unknown>).forEach(scan);
    else if (bad(v)) throw new Response("Media must be Supabase Storage URL", { status: 413 });
  };

  scan(payload);
}

const allowedOrigins = [
  "https://move-y-splash-new.vercel.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const buildCorsHeaders = (origin: string | null) => {
  const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : "*";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "authorization, content-type, x-client-info, apikey",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };
};

console.info("make-server-a14c7986 starting");

Deno.serve(async (req) => {
  const cors = buildCorsHeaders(req.headers.get("origin"));
  try {
    const url = new URL(req.url);
    const path = url.pathname.replace(/^\/functions\/v1/, "");

    if (req.method === "OPTIONS") {
      return new Response("ok", { status: 204, headers: cors });
    }

    // Lightweight guard for stories
    if (req.method === "POST" && path === STORIES_PATH) {
      let bodyText: string;
      try {
        bodyText = await readBodyBounded(req, MAX_BYTES);
      } catch (err) {
        if (err instanceof Response) {
          return new Response(JSON.stringify({ error: await err.text() }), {
            status: err.status,
            headers: { "content-type": "application/json", ...cors },
          });
        }
        throw err;
      }

      try {
        const parsed = safeJsonParse<unknown>(bodyText);
        rejectInvalidMediaUrls(parsed);
      } catch (err) {
        if (err instanceof Response) {
          return new Response(JSON.stringify({ error: await err.text() }), {
            status: err.status,
            headers: { "content-type": "application/json", ...cors },
          });
        }
        throw err;
      }

      // Forward to main app synchronously
      const forwardReq = new Request(req.url, {
        method: req.method,
        headers: req.headers,
        body: bodyText,
      });

      const upstream = await app.fetch(forwardReq);
      const merged = new Headers(upstream.headers);
      Object.entries(cors).forEach(([k, v]) => merged.set(k, v));
      return new Response(upstream.body, { status: upstream.status, headers: merged });
    }

    // Everything else goes to the main app
    const upstream = await app.fetch(req);
    const mergedHeaders = new Headers(upstream.headers);
    Object.entries(cors).forEach(([k, v]) => mergedHeaders.set(k, v));
    return new Response(upstream.body, { status: upstream.status, headers: mergedHeaders });
  } catch (e) {
    console.error("unhandled", String(e));
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "content-type": "application/json", ...cors },
    });
  }
});
