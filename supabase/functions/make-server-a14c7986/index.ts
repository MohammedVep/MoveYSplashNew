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

console.info("make-server-a14c7986 starting");

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    const path = url.pathname.replace(/^\/functions\/v1/, "");

    // Lightweight guard for stories
    if (req.method === "POST" && path === STORIES_PATH) {
      const len = Number(req.headers.get("content-length") ?? "0");
      if (Number.isFinite(len) && len > MAX_JSON_BYTES) {
        return new Response(JSON.stringify({ error: "Payload too large" }), {
          status: 413,
          headers: { "content-type": "application/json" },
        });
      }

      const parsed = await safeJson(req);
      if (!parsed.ok) {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), {
          status: 400,
          headers: { "content-type": "application/json" },
        });
      }

      // Forward to main app in the background; adjust to direct return if you need sync processing
      const forwardReq = new Request(req.url, {
        method: req.method,
        headers: req.headers,
        body: JSON.stringify(parsed.body),
      });

      EdgeRuntime.waitUntil(app.fetch(forwardReq));

      return new Response(JSON.stringify({ status: "accepted" }), {
        status: 202,
        headers: { "content-type": "application/json" },
      });
    }

    // Everything else goes to the main app
    return app.fetch(req);
  } catch (e) {
    console.error("unhandled", String(e));
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
});
