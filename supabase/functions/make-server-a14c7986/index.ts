import app from "../../../src/app/superbase/functions/server/index.tsx";

const readJsonWithLimit = async (req: Request, limit: number) => {
  const reader = req.body?.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;

  if (!reader) {
    return { ok: false, body: null, error: "No body" as const };
  }

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      total += value.byteLength;
      if (total > limit) {
        reader.cancel();
        return { ok: false, body: null, error: "too_large" as const };
      }
      chunks.push(value);
    }
  }

  try {
    const text = new TextDecoder().decode(concatUint8(chunks, total));
    const parsed = JSON.parse(text);
    return { ok: true, body: parsed };
  } catch {
    return { ok: false, body: null, error: "invalid_json" as const };
  }
};

const concatUint8 = (chunks: Uint8Array[], total: number) => {
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return merged;
};

const STORIES_PATH = "/make-server-a14c7986/stories";
const STORAGE_HOST = "opmvuhlheenygwbqwljk.supabase.co";
const STORAGE_PREFIX = `https://${STORAGE_HOST}/storage/v1/object`;
const MAX_JSON_BYTES = 64_000; // tighter 64KB guard to avoid large bodies

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
      const parsed = await readJsonWithLimit(req, MAX_JSON_BYTES);
      if (!parsed.ok) {
        const status =
          parsed.error === "too_large" ? 413 : parsed.error === "invalid_json" ? 400 : 400;
        const message =
          parsed.error === "too_large"
            ? "Payload too large"
            : parsed.error === "invalid_json"
            ? "Invalid JSON"
            : "Invalid request";
        return new Response(JSON.stringify({ error: message }), {
          status,
          headers: { "content-type": "application/json", ...cors },
        });
      }

      // Hard block any data URLs to avoid loading them in memory
      const bodyString = JSON.stringify(parsed.body);
      if (bodyString.includes("data:")) {
        return new Response(
          JSON.stringify({ error: "Data URLs are not allowed. Upload media to storage first." }),
          {
            status: 413,
            headers: { "content-type": "application/json", ...cors },
          },
        );
      }
      // Require HTTP(S) media URLs only
      try {
        const parsedBody = JSON.parse(bodyString) as { items?: Array<{ url?: string }> };
        if (
          Array.isArray(parsedBody?.items) &&
          parsedBody.items.some((item) => {
            if (typeof item?.url !== "string") return true;
            if (!item.url.startsWith("http")) return true;
            return !item.url.startsWith(STORAGE_PREFIX);
          })
        ) {
          return new Response(
            JSON.stringify({ error: "Only Supabase Storage media URLs are allowed. Upload to storage first." }),
            { status: 413, headers: { "content-type": "application/json", ...cors } },
          );
        }
      } catch {
        // fallback to proceed; server will validate further
      }

      // Forward to main app synchronously
      const forwardReq = new Request(req.url, {
        method: req.method,
        headers: req.headers,
        body: JSON.stringify(parsed.body),
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
