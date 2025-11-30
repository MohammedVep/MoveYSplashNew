import app from "../../../src/app/superbase/functions/server/index.tsx";

const safeJson = async (req: Request) => {
  try {
    return { ok: true, body: await req.json() };
  } catch {
    return { ok: false, body: null };
  }
};

const STORIES_PATH = "/make-server-a14c7986/stories";
const MAX_JSON_BYTES = 1_000_000; // 1MB guard

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
      const len = Number(req.headers.get("content-length") ?? "0");
      if (Number.isFinite(len) && len > MAX_JSON_BYTES) {
        return new Response(JSON.stringify({ error: "Payload too large" }), {
          status: 413,
          headers: { "content-type": "application/json", ...cors },
        });
      }

      const parsed = await safeJson(req);
      if (!parsed.ok) {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), {
          status: 400,
          headers: { "content-type": "application/json", ...cors },
        });
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
