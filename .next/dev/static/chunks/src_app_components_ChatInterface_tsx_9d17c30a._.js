(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/ChatInterface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Mohammed Vepari
ID: 5145543
Tuesday November 11th 2025
*/ __turbopack_context__.s([
    "ChatInterface",
    ()=>ChatInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ably$2f$build$2f$ably$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ably/build/ably.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ably$2f$chat$2f$dist$2f$chat$2f$ably$2d$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ably/chat/dist/chat/ably-chat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/figma/ImageWithFallback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MessageInspiration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/MessageInspiration.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$VoiceRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/VoiceRecorder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$userContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/userContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/supabase/info.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const createSafeChatClient = (realtime)=>{
    try {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ably$2f$chat$2f$dist$2f$chat$2f$ably$2d$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatClient"](realtime);
    } catch (error) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        throw error;
    }
};
const ABLY_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ABLY_KEY ?? 'TWe31g.j0F01A:-j8adkUcs-AeusvKPMgSFCJKlMb8zCh1pGbt5Zo3CxI';
const DEFAULT_ROOM_ID = 'getting-started';
const VOICE_UPLOAD_ENDPOINT = '/api/voice';
const SUPABASE_FUNCTION_BASE = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-a14c7986`;
const AUTH_HEADER = `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`;
const JSON_AUTH_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: AUTH_HEADER
};
const SUPABASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co`;
const CHAT_BUCKET = 'stories';
const supabaseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicAnonKey"], {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    },
    global: {
        headers: {
            Authorization: AUTH_HEADER
        }
    }
});
const textForMetadata = (metadata, fallback = '')=>{
    if (metadata.image) return '[image]';
    if (metadata.file && typeof metadata.file.name === 'string') {
        return metadata.file.name || '[file]';
    }
    if (metadata.voice) return '[voice]';
    return fallback || '...';
};
const messageSignature = (message)=>{
    if (message.clientMessageId && message.clientMessageId.trim().length > 0) {
        return `cid:${message.clientMessageId}`;
    }
    return [
        'sig',
        message.senderId ?? '',
        message.content ?? '',
        message.image ?? '',
        message.file?.url ?? '',
        message.voice?.url ?? ''
    ].join('|');
};
const dedupeMessages = (messagesToDedupe)=>{
    const seen = new Set();
    const result = [];
    for (const msg of messagesToDedupe){
        const sig = messageSignature(msg);
        if (seen.has(sig)) continue;
        const currentTs = new Date(msg.timestamp).getTime();
        // Check for near-duplicates by content/media within 30s regardless of differing IDs
        const isNearDupe = result.some((existing)=>{
            const sameContent = (existing.content ?? '') === (msg.content ?? '') && (existing.image ?? '') === (msg.image ?? '') && (existing.file?.url ?? '') === (msg.file?.url ?? '') && (existing.voice?.url ?? '') === (msg.voice?.url ?? '');
            if (!sameContent) return false;
            const timeDiff = Math.abs(new Date(existing.timestamp).getTime() - currentTs);
            return timeDiff < 30000; // 30s window for potential duplicates
        });
        if (isNearDupe) continue;
        seen.add(sig);
        result.push(msg);
    }
    return result;
};
const createClientMessageId = ()=>`msg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
const sanitizeFilename = (name, fallback)=>{
    const cleaned = name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || fallback;
    return cleaned;
};
const avatarForId = (id)=>`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(id || 'user')}`;
const dataUrlToBlob = (dataUrl)=>{
    const [header, base64] = dataUrl.split(',');
    if (!base64) {
        throw new Error('Error: cannot load data');
    }
    const mimeMatch = header.match(/^data:(.*?)(;base64)?$/);
    const mimeType = mimeMatch?.[1] ?? 'application/octet-stream';
    const binary = atob(base64);
    const numberOfBinary = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i += 1){
        numberOfBinary[i] = binary.charCodeAt(i);
    }
    return new Blob([
        numberOfBinary
    ], {
        type: mimeType
    });
};
function ChatInterface({ onStartCall, shareDraft, onShareDraftConsumed, focusUserId = null, onFocusUserConsumed, forceTestMode = false }) {
    _s();
    const { currentUser, allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$userContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const fallbackClientIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    if (!fallbackClientIdRef.current) {
        fallbackClientIdRef.current = `guest-${Math.random().toString(36).slice(2, 10)}`;
    }
    const fallbackClientId = fallbackClientIdRef.current;
    const ablyClientId = currentUser?.ablyClientId ?? fallbackClientId;
    const appUserId = currentUser?.id ?? ablyClientId;
    const isTest = forceTestMode || ("TURBOPACK compile-time value", "development") === 'test';
    const ablyClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeRoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageSubscriptionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connectionStatusUnsubRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roomStatusUnsubRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const snapTimeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const persistedMessageIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const clearSnapTimeouts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[clearSnapTimeouts]": ()=>{
            snapTimeoutsRef.current.forEach({
                "ChatInterface.useCallback[clearSnapTimeouts]": (timeout)=>clearTimeout(timeout)
            }["ChatInterface.useCallback[clearSnapTimeouts]"]);
            snapTimeoutsRef.current.clear();
        }
    }["ChatInterface.useCallback[clearSnapTimeouts]"], []);
    const mapStoredChatRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[mapStoredChatRecord]": (record)=>{
            const data = typeof record === 'object' && record !== null ? record : {};
            const idValue = data['id'];
            const identity = typeof idValue === 'string' && idValue.trim().length > 0 ? idValue : DEFAULT_ROOM_ID;
            const nameValue = data['name'];
            const avatarValue = data['avatar'];
            const lastMessageValue = data['lastMessage'];
            const lastMessageTimeValue = data['lastMessageTime'];
            const membersValue = data['members'];
            const isGroupValue = data['isGroup'];
            return {
                identity,
                chatName: typeof nameValue === 'string' && nameValue.trim().length > 0 ? nameValue : 'Chat',
                avatar: typeof avatarValue === 'string' && avatarValue.trim().length > 0 ? avatarValue : avatarForId(identity),
                lastMessage: typeof lastMessageValue === 'string' ? lastMessageValue : '',
                lastMessageTime: typeof lastMessageTimeValue === 'string' ? lastMessageTimeValue : '',
                members: Array.isArray(membersValue) ? membersValue.filter({
                    "ChatInterface.useCallback[mapStoredChatRecord]": (member)=>typeof member === 'string'
                }["ChatInterface.useCallback[mapStoredChatRecord]"]) : [],
                isGroup: Boolean(isGroupValue)
            };
        }
    }["ChatInterface.useCallback[mapStoredChatRecord]"], []);
    const mapStoredMessageRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[mapStoredMessageRecord]": (record, roomId)=>{
            const data = typeof record === 'object' && record !== null ? record : {};
            const idValue = data['identity'];
            const timestampValue = data['timestamp'];
            const senderIdValue = data['senderId'];
            const senderNameValue = data['senderName'];
            const senderAvatarValue = data['senderAvatar'];
            const contentValue = data['content'];
            const imageValue = data['image'];
            const fileValue = data['file'];
            const voiceValue = data['voice'];
            const isSnapValue = data['isSnapStyle'];
            const expiresRaw = data['expiresIn'];
            const isStarredValue = data['isStarred'];
            const baseId = typeof idValue === 'string' && idValue.trim().length > 0 ? idValue : `${roomId}-${timestampValue ?? Date.now()}`;
            let expiresIn;
            if (typeof expiresRaw === 'number') {
                expiresIn = expiresRaw;
            } else if (typeof expiresRaw === 'string' && expiresRaw.trim().length > 0) {
                const parsed = Number(expiresRaw);
                if (!Number.isNaN(parsed)) {
                    expiresIn = parsed;
                }
            }
            const timestamp = typeof timestampValue === 'string' && timestampValue ? timestampValue : new Date().toISOString();
            const image = typeof imageValue === 'string' && imageValue.trim().length > 0 ? imageValue : undefined;
            const file = fileValue && typeof fileValue === 'object' && fileValue !== null ? {
                name: typeof fileValue['name'] === 'string' ? fileValue['name'] : 'file',
                url: typeof fileValue['url'] === 'string' ? fileValue['url'] : '',
                type: typeof fileValue['type'] === 'string' ? fileValue['type'] : '',
                size: Number(fileValue['size'] ?? 0)
            } : undefined;
            const voice = voiceValue && typeof voiceValue === 'object' && voiceValue !== null ? {
                url: typeof voiceValue['url'] === 'string' ? voiceValue['url'] : '',
                duration: Number(voiceValue['duration'] ?? 0),
                mimeType: typeof voiceValue['mimeType'] === 'string' ? voiceValue['mimeType'] : undefined,
                id: typeof voiceValue['id'] === 'string' ? voiceValue['id'] : undefined
            } : undefined;
            return {
                id: baseId,
                chatId: roomId,
                senderId: typeof senderIdValue === 'string' && senderIdValue.trim().length > 0 ? senderIdValue : 'unknown',
                senderName: typeof senderNameValue === 'string' && senderNameValue.trim().length > 0 ? senderNameValue : undefined,
                senderAvatar: typeof senderAvatarValue === 'string' && senderAvatarValue.trim().length > 0 ? senderAvatarValue : undefined,
                content: typeof contentValue === 'string' ? contentValue : '',
                timestamp,
                image,
                file,
                voice,
                isSnapStyle: Boolean(isSnapValue),
                expiresIn,
                isStarred: Boolean(isStarredValue)
            };
        }
    }["ChatInterface.useCallback[mapStoredMessageRecord]"], []);
    const userDirectory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInterface.useMemo[userDirectory]": ()=>{
            const directory = new Map();
            allUsers.forEach({
                "ChatInterface.useMemo[userDirectory]": (user)=>{
                    const key = user.ablyClientId ?? user.id;
                    directory.set(key, user);
                }
            }["ChatInterface.useMemo[userDirectory]"]);
            return directory;
        }
    }["ChatInterface.useMemo[userDirectory]"], [
        allUsers
    ]);
    const defaultChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInterface.useMemo[defaultChat]": ()=>({
                identity: DEFAULT_ROOM_ID,
                chatName: 'Getting Started',
                avatar: avatarForId(DEFAULT_ROOM_ID),
                lastMessage: '',
                lastMessageTime: '',
                members: [
                    ablyClientId
                ],
                isGroup: true
            })
    }["ChatInterface.useMemo[defaultChat]"], [
        ablyClientId
    ]);
    const summarizeMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[summarizeMessage]": (message)=>{
            if (message.content && message.content.trim().length > 0) {
                return message.content.trim();
            }
            if (message.image) {
                return '📸 Photo';
            }
            if (message.file) {
                return `📎 ${message.file.name}`;
            }
            if (message.voice) {
                return '🎤 Voice message';
            }
            return '';
        }
    }["ChatInterface.useCallback[summarizeMessage]"], []);
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultChat.identity);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSnapMode, setIsSnapMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snapTimer, setSnapTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [showNewChatDialog, setShowNewChatDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newChatName, setNewChatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newChatMembers, setNewChatMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFriendIds, setSelectedFriendIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [friendSearchQuery, setFriendSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [friendPickerOpen, setFriendPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGroupChat, setIsGroupChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const documentInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [playingVoice, setPlayingVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [starredMessages, setStarredMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        defaultChat
    ]);
    const chatsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chats);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            chatsRef.current = chats;
        }
    }["ChatInterface.useEffect"], [
        chats
    ]);
    const registeredFriends = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInterface.useMemo[registeredFriends]": ()=>{
            const options = [];
            const unique = new Set();
            allUsers.forEach({
                "ChatInterface.useMemo[registeredFriends]": (user)=>{
                    // Hide current user from picker
                    if (currentUser && user.id === currentUser.id) {
                        return;
                    }
                    const canonicalId = user.id;
                    if (unique.has(canonicalId)) {
                        return;
                    }
                    unique.add(canonicalId);
                    options.push({
                        id: canonicalId,
                        clientId: user.ablyClientId ?? canonicalId,
                        name: user.name,
                        username: user.username.startsWith('@') ? user.username : `@${user.username}`,
                        avatar: user.avatar ?? avatarForId(user.ablyClientId ?? canonicalId)
                    });
                }
            }["ChatInterface.useMemo[registeredFriends]"]);
            return options.sort({
                "ChatInterface.useMemo[registeredFriends]": (a, b)=>a.name.localeCompare(b.name)
            }["ChatInterface.useMemo[registeredFriends]"]);
        }
    }["ChatInterface.useMemo[registeredFriends]"], [
        allUsers,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            setSelectedFriendIds({
                "ChatInterface.useEffect": (prev)=>prev.filter({
                        "ChatInterface.useEffect": (id)=>registeredFriends.some({
                                "ChatInterface.useEffect": (friend)=>friend.id === id
                            }["ChatInterface.useEffect"])
                    }["ChatInterface.useEffect"])
            }["ChatInterface.useEffect"]);
        }
    }["ChatInterface.useEffect"], [
        registeredFriends
    ]);
    const filteredRegisteredFriends = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInterface.useMemo[filteredRegisteredFriends]": ()=>registeredFriends.filter({
                "ChatInterface.useMemo[filteredRegisteredFriends]": (friend)=>{
                    const query = friendSearchQuery.trim().toLowerCase();
                    if (!query) {
                        return true;
                    }
                    return friend.name.toLowerCase().includes(query) || friend.username.toLowerCase().includes(query);
                }
            }["ChatInterface.useMemo[filteredRegisteredFriends]"])
    }["ChatInterface.useMemo[filteredRegisteredFriends]"], [
        registeredFriends,
        friendSearchQuery
    ]);
    const selectedFriendDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInterface.useMemo[selectedFriendDetails]": ()=>selectedFriendIds.map({
                "ChatInterface.useMemo[selectedFriendDetails]": (id)=>registeredFriends.find({
                        "ChatInterface.useMemo[selectedFriendDetails]": (friend)=>friend.id === id
                    }["ChatInterface.useMemo[selectedFriendDetails]"])
            }["ChatInterface.useMemo[selectedFriendDetails]"]).filter({
                "ChatInterface.useMemo[selectedFriendDetails]": (friend)=>Boolean(friend)
            }["ChatInterface.useMemo[selectedFriendDetails]"])
    }["ChatInterface.useMemo[selectedFriendDetails]"], [
        registeredFriends,
        selectedFriendIds
    ]);
    const toggleFriendSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[toggleFriendSelection]": (userId)=>{
            setSelectedFriendIds({
                "ChatInterface.useCallback[toggleFriendSelection]": (prev)=>prev.includes(userId) ? prev.filter({
                        "ChatInterface.useCallback[toggleFriendSelection]": (id)=>id !== userId
                    }["ChatInterface.useCallback[toggleFriendSelection]"]) : [
                        ...prev,
                        userId
                    ]
            }["ChatInterface.useCallback[toggleFriendSelection]"]);
        }
    }["ChatInterface.useCallback[toggleFriendSelection]"], []);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!isTest);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ablyError, setAblyError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatReady, setChatReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isTest ? true : false);
    const [connectionStatus, setConnectionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isTest ? 'connected' : 'connecting');
    const [roomStatus, setRoomStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isTest ? 'attached' : 'idle');
    const [mobileShowList, setMobileShowList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const ensureDirectChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[ensureDirectChat]": async (targetUserId)=>{
            const friend = allUsers.get(targetUserId) ?? null;
            const targetClientId = friend?.ablyClientId ?? targetUserId;
            if (!targetClientId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Unable to open conversation for that user.');
                return null;
            }
            const memberIds = Array.from(new Set([
                ablyClientId,
                targetClientId
            ].filter(Boolean)));
            const sortedMemberIds = [
                ...memberIds
            ].sort();
            const existing = chatsRef.current.find({
                "ChatInterface.useCallback[ensureDirectChat].existing": (chat)=>{
                    if (chat.isGroup || chat.members.length !== sortedMemberIds.length) {
                        return false;
                    }
                    const sortedChatMembers = [
                        ...chat.members
                    ].sort();
                    return JSON.stringify(sortedChatMembers) === JSON.stringify(sortedMemberIds);
                }
            }["ChatInterface.useCallback[ensureDirectChat].existing"]);
            if (existing) {
                return existing.identity;
            }
            const displayName = friend?.name ?? friend?.username ?? `Chat with ${targetUserId.slice(0, 6)}`;
            let persistedChat = null;
            let savedToServer = false;
            try {
                const response = await fetch(`${SUPABASE_FUNCTION_BASE}/chats`, {
                    method: 'POST',
                    headers: {
                        ...JSON_AUTH_HEADERS
                    },
                    body: JSON.stringify({
                        name: displayName,
                        members: memberIds,
                        isGroup: false,
                        createdBy: appUserId ?? ablyClientId
                    })
                });
                if (response.ok) {
                    const payload = await response.json();
                    const chatRecord = payload['chat'];
                    if (chatRecord) {
                        persistedChat = mapStoredChatRecord(chatRecord);
                        savedToServer = true;
                    }
                } else if (response.status !== 409) {
                    throw new Error(`Failed to persist chat (status ${response.status})`);
                }
            } catch (error) {
                console.warn('Unable to persist direct chat', error);
            }
            if (!persistedChat) {
                const sortedKey = memberIds.slice().sort().join('-');
                const fallbackId = chatsRef.current.some({
                    "ChatInterface.useCallback[ensureDirectChat]": (chat)=>chat.identity === sortedKey
                }["ChatInterface.useCallback[ensureDirectChat]"]) ? `${sortedKey}-${Date.now().toString(36)}` : sortedKey;
                persistedChat = {
                    identity: fallbackId,
                    chatName: displayName,
                    avatar: friend?.avatar ?? avatarForId(targetClientId),
                    lastMessage: '',
                    lastMessageTime: '',
                    members: memberIds,
                    isGroup: false
                };
            }
            setChats({
                "ChatInterface.useCallback[ensureDirectChat]": (prev)=>{
                    const map = new Map(prev.map({
                        "ChatInterface.useCallback[ensureDirectChat]": (chat)=>[
                                chat.identity,
                                chat
                            ]
                    }["ChatInterface.useCallback[ensureDirectChat]"]));
                    map.set(persistedChat.identity, persistedChat);
                    const next = Array.from(map.values());
                    next.sort({
                        "ChatInterface.useCallback[ensureDirectChat]": (a, b)=>{
                            const aTime = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
                            const bTime = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
                            return bTime - aTime;
                        }
                    }["ChatInterface.useCallback[ensureDirectChat]"]);
                    return next;
                }
            }["ChatInterface.useCallback[ensureDirectChat]"]);
            const client = chatClientRef.current;
            if (client) {
                client.rooms.get(persistedChat.identity).catch({
                    "ChatInterface.useCallback[ensureDirectChat]": (error)=>{
                        console.warn('Unable to ensure Ably room exists', error);
                    }
                }["ChatInterface.useCallback[ensureDirectChat]"]);
            }
            if (savedToServer) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Chat created with ${friend?.name ?? 'friend'}!`);
            }
            return persistedChat.identity;
        }
    }["ChatInterface.useCallback[ensureDirectChat]"], [
        allUsers,
        ablyClientId,
        appUserId,
        mapStoredChatRecord
    ]);
    const ensureDirectChatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(ensureDirectChat);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            ensureDirectChatRef.current = ensureDirectChat;
        }
    }["ChatInterface.useEffect"], [
        ensureDirectChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (!focusUserId) {
                return;
            }
            if (!chatReady) {
                return;
            }
            let cancelled = false;
            const openChat = {
                "ChatInterface.useEffect.openChat": async ()=>{
                    try {
                        const chatId = await ensureDirectChatRef.current?.(focusUserId);
                        if (!chatId || cancelled) {
                            return;
                        }
                        setSelectedChat(chatId);
                        onFocusUserConsumed?.();
                    } catch (error) {
                        console.error('Error:', error);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Unable to connect, try again later.');
                    }
                }
            }["ChatInterface.useEffect.openChat"];
            void openChat();
            return ({
                "ChatInterface.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        focusUserId,
        chatReady,
        onFocusUserConsumed
    ]);
    const getSenderProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[getSenderProfile]": ()=>({
                id: ablyClientId ?? 'guest',
                name: currentUser?.name ?? currentUser?.username ?? appUserId ?? 'Guest',
                username: currentUser?.username,
                avatar: currentUser?.avatar ?? (ablyClientId ? avatarForId(ablyClientId) : undefined)
            })
    }["ChatInterface.useCallback[getSenderProfile]"], [
        ablyClientId,
        appUserId,
        currentUser?.name,
        currentUser?.username,
        currentUser?.avatar
    ]);
    const buildMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[buildMetadata]": (extra = {})=>{
            const senderProfile = getSenderProfile();
            const metadata = {
                ...extra,
                sender: {
                    id: senderProfile.id,
                    name: senderProfile.name,
                    username: senderProfile.username,
                    avatar: senderProfile.avatar
                }
            };
            if (isSnapMode) {
                metadata.isSnapStyle = true;
                metadata.expiresIn = snapTimer;
            }
            return metadata;
        }
    }["ChatInterface.useCallback[buildMetadata]"], [
        getSenderProfile,
        isSnapMode,
        snapTimer
    ]);
    const uploadVoiceClip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[uploadVoiceClip]": async (dataUrl, mimeType, duration)=>{
            try {
                const response = await fetch(VOICE_UPLOAD_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        dataUrl,
                        mimeType,
                        duration
                    })
                });
                if (!response.ok) {
                    const errorBody = await response.text();
                    throw new Error(`Cannot upload audio: (${response.status}): ${errorBody}`);
                }
                const payload = await response.json();
                return payload;
            } catch (error) {
                console.error('Error uploading voice clip:', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to upload voice message');
                return null;
            }
        }
    }["ChatInterface.useCallback[uploadVoiceClip]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (!shareDraft) {
                return;
            }
            setNewMessage(shareDraft);
            setShowEmojiPicker(false);
            onShareDraftConsumed?.();
            messageInputRef.current?.focus();
        }
    }["ChatInterface.useEffect"], [
        shareDraft,
        onShareDraftConsumed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            setChats({
                "ChatInterface.useEffect": (prevChats)=>{
                    if (prevChats.some({
                        "ChatInterface.useEffect": (chat)=>chat.identity === defaultChat.identity
                    }["ChatInterface.useEffect"])) {
                        return prevChats.map({
                            "ChatInterface.useEffect": (chat)=>chat.identity === defaultChat.identity ? {
                                    ...chat,
                                    members: defaultChat.members
                                } : chat
                        }["ChatInterface.useEffect"]);
                    }
                    return [
                        defaultChat,
                        ...prevChats
                    ];
                }
            }["ChatInterface.useEffect"]);
        }
    }["ChatInterface.useEffect"], [
        defaultChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            let cancelled = false;
            const fetchPersistedChats = {
                "ChatInterface.useEffect.fetchPersistedChats": async ()=>{
                    if (!appUserId) {
                        return;
                    }
                    try {
                        const response = await fetch(`${SUPABASE_FUNCTION_BASE}/chats/${encodeURIComponent(appUserId)}`, {
                            headers: {
                                Authorization: AUTH_HEADER
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`Failed to load chats (${response.status})`);
                        }
                        const payload = await response.json();
                        const chatsRaw = payload['chats'];
                        if (cancelled) {
                            return;
                        }
                        const serverChats = Array.isArray(chatsRaw) ? chatsRaw : [];
                        if (serverChats.length === 0) {
                            return;
                        }
                        setChats({
                            "ChatInterface.useEffect.fetchPersistedChats": (prev)=>{
                                const byId = new Map(prev.map({
                                    "ChatInterface.useEffect.fetchPersistedChats": (chat)=>[
                                            chat.identity,
                                            chat
                                        ]
                                }["ChatInterface.useEffect.fetchPersistedChats"]));
                                serverChats.forEach({
                                    "ChatInterface.useEffect.fetchPersistedChats": (record)=>{
                                        const mapped = mapStoredChatRecord(record);
                                        byId.set(mapped.identity, mapped);
                                    }
                                }["ChatInterface.useEffect.fetchPersistedChats"]);
                                if (!byId.has(defaultChat.identity)) {
                                    byId.set(defaultChat.identity, defaultChat);
                                }
                                return Array.from(byId.values()).sort({
                                    "ChatInterface.useEffect.fetchPersistedChats": (a, b)=>{
                                        const aTime = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
                                        const bTime = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
                                        return bTime - aTime;
                                    }
                                }["ChatInterface.useEffect.fetchPersistedChats"]);
                            }
                        }["ChatInterface.useEffect.fetchPersistedChats"]);
                    } catch (error) {
                        console.warn('Failed to load saved chats', error);
                    }
                }
            }["ChatInterface.useEffect.fetchPersistedChats"];
            void fetchPersistedChats();
            return ({
                "ChatInterface.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        appUserId,
        defaultChat,
        mapStoredChatRecord
    ]);
    const mapAblyMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[mapAblyMessage]": (source, roomId)=>{
            const metadata = source.metadata ?? {};
            const clientMessageIdValue = metadata['_clientMessageId'];
            const imageValue = metadata['image'];
            const image = typeof imageValue === 'string' ? imageValue : undefined;
            const rawFile = metadata['file'];
            const file = rawFile && typeof rawFile === 'object' ? {
                name: typeof rawFile.name === 'string' ? rawFile.name : 'file',
                url: typeof rawFile.url === 'string' ? rawFile.url : '',
                type: typeof rawFile.type === 'string' ? rawFile.type : '',
                size: Number(rawFile.size ?? 0)
            } : undefined;
            const rawVoice = metadata['voice'];
            const voice = rawVoice && typeof rawVoice === 'object' ? {
                url: typeof rawVoice.url === 'string' ? rawVoice.url : '',
                duration: Number(rawVoice.duration ?? 0),
                mimeType: typeof rawVoice.mimeType === 'string' ? rawVoice.mimeType : undefined,
                id: typeof rawVoice.id === 'string' ? rawVoice.id : undefined
            } : undefined;
            const expiresInRaw = metadata['expiresIn'];
            const expiresIn = typeof expiresInRaw === 'number' ? expiresInRaw : typeof expiresInRaw === 'string' ? Number(expiresInRaw) : undefined;
            const senderMeta = metadata['sender'];
            const senderNameMeta = senderMeta && typeof senderMeta === 'object' ? senderMeta.name : undefined;
            const senderAvatarMeta = senderMeta && typeof senderMeta === 'object' ? senderMeta.avatar : undefined;
            const directoryMatch = userDirectory.get(source.clientId);
            return {
                id: source.serial,
                chatId: roomId,
                senderId: source.clientId,
                content: source.text,
                timestamp: source.timestamp.toISOString(),
                image,
                file,
                voice,
                isSnapStyle: Boolean(metadata['isSnapStyle']),
                expiresIn: expiresIn && Number.isFinite(expiresIn) ? expiresIn : undefined,
                isStarred: Boolean(metadata['isStarred']),
                clientMessageId: typeof clientMessageIdValue === 'string' && clientMessageIdValue.trim().length > 0 ? clientMessageIdValue : undefined,
                senderName: (typeof senderNameMeta === 'string' && senderNameMeta.trim().length > 0 ? senderNameMeta : directoryMatch?.name ?? directoryMatch?.username ?? source.clientId) ?? source.clientId,
                senderAvatar: (typeof senderAvatarMeta === 'string' && senderAvatarMeta.trim().length > 0 ? senderAvatarMeta : directoryMatch?.avatar) ?? undefined
            };
        }
    }["ChatInterface.useCallback[mapAblyMessage]"], [
        userDirectory
    ]);
    const persistMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[persistMessage]": async (message, options)=>{
            const messageId = message.id;
            if (!messageId) {
                return;
            }
            if (persistedMessageIdsRef.current.has(messageId) && !options?.force) {
                return;
            }
            persistedMessageIdsRef.current.add(messageId);
            try {
                await fetch(`${SUPABASE_FUNCTION_BASE}/messages`, {
                    method: 'POST',
                    headers: {
                        ...JSON_AUTH_HEADERS
                    },
                    body: JSON.stringify({
                        id: messageId,
                        chatId: message.chatId,
                        senderId: message.senderId,
                        senderName: message.senderName ?? null,
                        senderAvatar: message.senderAvatar ?? null,
                        content: message.content ?? '',
                        image: message.image ?? null,
                        file: message.file ?? null,
                        voice: message.voice ?? null,
                        timestamp: message.timestamp,
                        isSnapStyle: message.isSnapStyle ?? false,
                        expiresIn: typeof message.expiresIn === 'number' && Number.isFinite(message.expiresIn) ? message.expiresIn : null,
                        isStarred: message.isStarred ?? false
                    })
                });
            } catch (error) {
                console.warn('Failed to persist message', error);
                persistedMessageIdsRef.current.delete(messageId);
            }
        }
    }["ChatInterface.useCallback[persistMessage]"], []);
    const removePersistedMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[removePersistedMessage]": async (chatId, messageId)=>{
            if (!messageId) {
                return;
            }
            try {
                await fetch(`${SUPABASE_FUNCTION_BASE}/messages/${encodeURIComponent(chatId)}/${encodeURIComponent(messageId)}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: AUTH_HEADER
                    }
                });
            } catch (error) {
                console.warn('Failed to delete persisted message', error);
            } finally{
                persistedMessageIdsRef.current.delete(messageId);
            }
        }
    }["ChatInterface.useCallback[removePersistedMessage]"], []);
    const handleIncomingMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[handleIncomingMessage]": (event, roomId)=>{
            if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ably$2f$chat$2f$dist$2f$chat$2f$ably$2d$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessageEventType"].Deleted) {
                const timeout = snapTimeoutsRef.current.get(event.message.serial);
                if (timeout) {
                    clearTimeout(timeout);
                    snapTimeoutsRef.current.delete(event.message.serial);
                }
                setMessages({
                    "ChatInterface.useCallback[handleIncomingMessage]": (prev)=>prev.filter({
                            "ChatInterface.useCallback[handleIncomingMessage]": (message)=>message.id !== event.message.serial
                        }["ChatInterface.useCallback[handleIncomingMessage]"])
                }["ChatInterface.useCallback[handleIncomingMessage]"]);
                void removePersistedMessage(roomId, event.message.serial);
                return;
            }
            const mapped = mapAblyMessage(event.message, roomId);
            setMessages({
                "ChatInterface.useCallback[handleIncomingMessage]": (prev)=>{
                    const next = [
                        ...prev,
                        mapped
                    ];
                    next.sort({
                        "ChatInterface.useCallback[handleIncomingMessage]": (a, b)=>new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
                    }["ChatInterface.useCallback[handleIncomingMessage]"]);
                    // remove obvious local duplicates on arrival
                    const nowTs = new Date(mapped.timestamp).getTime();
                    const filtered = next.filter({
                        "ChatInterface.useCallback[handleIncomingMessage].filtered": (msg)=>{
                            if (msg === mapped) return true;
                            const sameClient = mapped.clientMessageId && msg.clientMessageId && msg.clientMessageId === mapped.clientMessageId;
                            const sameContentAndMedia = msg.senderId === mapped.senderId && msg.content === mapped.content && (msg.image ?? '') === (mapped.image ?? '') && (msg.file?.url ?? '') === (mapped.file?.url ?? '') && (msg.voice?.url ?? '') === (mapped.voice?.url ?? '');
                            const closeInTime = Math.abs(new Date(msg.timestamp).getTime() - nowTs) < 15000;
                            if (sameClient) return false;
                            if (sameContentAndMedia && closeInTime && (msg.localOnly || mapped.localOnly)) {
                                return false;
                            }
                            return true;
                        }
                    }["ChatInterface.useCallback[handleIncomingMessage].filtered"]);
                    return dedupeMessages(filtered);
                }
            }["ChatInterface.useCallback[handleIncomingMessage]"]);
            if (mapped.isSnapStyle && mapped.expiresIn) {
                const existingTimeout = snapTimeoutsRef.current.get(mapped.id);
                if (existingTimeout) {
                    clearTimeout(existingTimeout);
                }
                const timeout = setTimeout({
                    "ChatInterface.useCallback[handleIncomingMessage].timeout": async ()=>{
                        const room = activeRoomRef.current;
                        if (!room) {
                            return;
                        }
                        try {
                            await room.messages.delete(event.message.serial);
                        } catch (error) {
                            console.warn('Failed to auto-delete snap message', error);
                        } finally{
                            snapTimeoutsRef.current.delete(mapped.id);
                        }
                    }
                }["ChatInterface.useCallback[handleIncomingMessage].timeout"], mapped.expiresIn * 1000);
                snapTimeoutsRef.current.set(mapped.id, timeout);
            }
            const summary = summarizeMessage(mapped);
            const lastMessageText = summary ? (mapped.senderName ? `${mapped.senderName}: ` : '') + summary : mapped.senderName ?? '';
            setChats({
                "ChatInterface.useCallback[handleIncomingMessage]": (prevChats)=>prevChats.map({
                        "ChatInterface.useCallback[handleIncomingMessage]": (chat)=>chat.identity === roomId ? {
                                ...chat,
                                lastMessage: lastMessageText,
                                lastMessageTime: event.message.timestamp.toISOString()
                            } : chat
                    }["ChatInterface.useCallback[handleIncomingMessage]"])
            }["ChatInterface.useCallback[handleIncomingMessage]"]);
            void persistMessage(mapped);
        }
    }["ChatInterface.useCallback[handleIncomingMessage]"], [
        mapAblyMessage,
        summarizeMessage,
        persistMessage,
        removePersistedMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (isTest) {
                const realtime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ably$2f$build$2f$ably$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Realtime"]({
                    key: 'test',
                    clientId: ablyClientId
                });
                ablyClientRef.current = realtime;
                const client = createSafeChatClient(realtime);
                chatClientRef.current = client;
                client.rooms.get(defaultChat.identity).then({
                    "ChatInterface.useEffect": (room)=>{
                        activeRoomRef.current = room;
                    }
                }["ChatInterface.useEffect"]).catch({
                    "ChatInterface.useEffect": ()=>{}
                }["ChatInterface.useEffect"]);
                setChatReady(true);
                setLoading(false);
                setConnectionStatus('connected');
                setRoomStatus('attached');
                return;
            }
            if (!ABLY_KEY) {
                setAblyError('Missing Ably configuration');
                return;
            }
            setChatReady(false);
            setAblyError(null);
            const realtime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ably$2f$build$2f$ably$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Realtime"]({
                key: ABLY_KEY,
                clientId: ablyClientId
            });
            ablyClientRef.current = realtime;
            const client = createSafeChatClient(realtime);
            chatClientRef.current = client;
            setChatReady(true);
            const { off } = client.connection.onStatusChange({
                "ChatInterface.useEffect": (change)=>{
                    setConnectionStatus(change.current);
                }
            }["ChatInterface.useEffect"]);
            connectionStatusUnsubRef.current = off;
            return ({
                "ChatInterface.useEffect": ()=>{
                    connectionStatusUnsubRef.current?.();
                    connectionStatusUnsubRef.current = null;
                    messageSubscriptionRef.current?.();
                    messageSubscriptionRef.current = null;
                    roomStatusUnsubRef.current?.();
                    roomStatusUnsubRef.current = null;
                    const shutdown = {
                        "ChatInterface.useEffect.shutdown": async ()=>{
                            clearSnapTimeouts();
                            try {
                                if (activeRoomRef.current) {
                                    await client.rooms.release(activeRoomRef.current.name);
                                    activeRoomRef.current = null;
                                }
                            } catch (error) {
                                console.warn('Failed to release Ably room', error);
                            }
                            try {
                                await realtime.close();
                            } catch (error) {
                                console.warn('Failed to close Ably Realtime client', error);
                            }
                            if (ablyClientRef.current === realtime) {
                                ablyClientRef.current = null;
                            }
                            if (chatClientRef.current === client) {
                                chatClientRef.current = null;
                            }
                        }
                    }["ChatInterface.useEffect.shutdown"];
                    void shutdown();
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        ablyClientId,
        clearSnapTimeouts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (!chatReady || !selectedChat) {
                return;
            }
            let cancelled = false;
            const joinRoom = {
                "ChatInterface.useEffect.joinRoom": async ()=>{
                    const client = chatClientRef.current;
                    if (!client) {
                        return;
                    }
                    setLoading(true);
                    setAblyError(null);
                    setMessages([]);
                    persistedMessageIdsRef.current = new Set();
                    messageSubscriptionRef.current?.();
                    messageSubscriptionRef.current = null;
                    roomStatusUnsubRef.current?.();
                    roomStatusUnsubRef.current = null;
                    if (activeRoomRef.current && activeRoomRef.current.name !== selectedChat) {
                        try {
                            await client.rooms.release(activeRoomRef.current.name);
                        } catch (error) {
                            console.warn('Failed to release previous Ably room', error);
                        }
                        activeRoomRef.current = null;
                        clearSnapTimeouts();
                    }
                    try {
                        const room = await client.rooms.get(selectedChat);
                        activeRoomRef.current = room;
                        clearSnapTimeouts();
                        const { off } = room.onStatusChange({
                            "ChatInterface.useEffect.joinRoom": (change)=>{
                                setRoomStatus(change.current);
                            }
                        }["ChatInterface.useEffect.joinRoom"]);
                        roomStatusUnsubRef.current = off;
                        const storedById = new Map();
                        try {
                            const response = await fetch(`${SUPABASE_FUNCTION_BASE}/messages/${encodeURIComponent(selectedChat)}`, {
                                headers: {
                                    Authorization: AUTH_HEADER
                                }
                            });
                            if (response.ok) {
                                const payload = await response.json();
                                const storedRecordsRaw = payload['messages'];
                                const storedRecords = Array.isArray(storedRecordsRaw) ? storedRecordsRaw : [];
                                storedRecords.map({
                                    "ChatInterface.useEffect.joinRoom": (record)=>mapStoredMessageRecord(record, selectedChat)
                                }["ChatInterface.useEffect.joinRoom"]).forEach({
                                    "ChatInterface.useEffect.joinRoom": (message)=>storedById.set(message.id, message)
                                }["ChatInterface.useEffect.joinRoom"]);
                            }
                        } catch (error) {
                            console.warn('Failed to load stored messages', error);
                        }
                        const history = await room.messages.history({
                            orderBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ably$2f$chat$2f$dist$2f$chat$2f$ably$2d$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderBy"].OldestFirst,
                            limit: 50
                        });
                        const newHistoryMessages = [];
                        history.items.filter({
                            "ChatInterface.useEffect.joinRoom": (item)=>!item.isDeleted
                        }["ChatInterface.useEffect.joinRoom"]).map({
                            "ChatInterface.useEffect.joinRoom": (item)=>mapAblyMessage(item, selectedChat)
                        }["ChatInterface.useEffect.joinRoom"]).forEach({
                            "ChatInterface.useEffect.joinRoom": (message)=>{
                                const existing = storedById.get(message.id);
                                if (existing) {
                                    storedById.set(message.id, {
                                        ...existing,
                                        ...message
                                    });
                                } else {
                                    storedById.set(message.id, message);
                                    newHistoryMessages.push(message);
                                }
                            }
                        }["ChatInterface.useEffect.joinRoom"]);
                        const combinedMessages = dedupeMessages(Array.from(storedById.values()).sort({
                            "ChatInterface.useEffect.joinRoom.combinedMessages": (a, b)=>new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
                        }["ChatInterface.useEffect.joinRoom.combinedMessages"]));
                        persistedMessageIdsRef.current = new Set(storedById.keys());
                        if (!cancelled) {
                            setMessages(combinedMessages);
                            if (combinedMessages.length > 0) {
                                const last = combinedMessages[combinedMessages.length - 1];
                                const summary = summarizeMessage(last);
                                const text = summary ? (last.senderName ? `${last.senderName}: ` : '') + summary : last.senderName ?? '';
                                setChats({
                                    "ChatInterface.useEffect.joinRoom": (prevChats)=>prevChats.map({
                                            "ChatInterface.useEffect.joinRoom": (chat)=>chat.identity === selectedChat ? {
                                                    ...chat,
                                                    lastMessage: text,
                                                    lastMessageTime: last.timestamp
                                                } : chat
                                        }["ChatInterface.useEffect.joinRoom"])
                                }["ChatInterface.useEffect.joinRoom"]);
                            }
                        }
                        newHistoryMessages.forEach({
                            "ChatInterface.useEffect.joinRoom": (message)=>{
                                void persistMessage(message, {
                                    force: true
                                });
                            }
                        }["ChatInterface.useEffect.joinRoom"]);
                        const { unsubscribe } = room.messages.subscribe({
                            "ChatInterface.useEffect.joinRoom": (event)=>{
                                handleIncomingMessage(event, selectedChat);
                            }
                        }["ChatInterface.useEffect.joinRoom"]);
                        messageSubscriptionRef.current = unsubscribe;
                        await room.attach();
                        if (!cancelled) {
                            setLoading(false);
                        }
                    } catch (error) {
                        console.error('Failed to join Ably room', error);
                        if (!cancelled) {
                            setAblyError('Failed to join chat room. Please try again.');
                            setLoading(false);
                        }
                    }
                }
            }["ChatInterface.useEffect.joinRoom"];
            void joinRoom();
            return ({
                "ChatInterface.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        chatReady,
        selectedChat,
        handleIncomingMessage,
        mapAblyMessage,
        summarizeMessage,
        clearSnapTimeouts,
        mapStoredMessageRecord,
        persistMessage
    ]);
    const emojiCategories = {
        'Smileys': [
            '😀',
            '😃',
            '😄',
            '😁',
            '😆',
            '😅',
            '🤣',
            '😂',
            '🙂',
            '🙃',
            '😉',
            '😊',
            '😇',
            '🥰',
            '😍',
            '🤩',
            '😘',
            '😗',
            '😚',
            '😙'
        ],
        'Gestures': [
            '👍',
            '👎',
            '👌',
            '✌️',
            '🤞',
            '🤟',
            '🤘',
            '🤙',
            '👈',
            '👉',
            '👆',
            '👇',
            '☝️',
            '👏',
            '🙌',
            '👐',
            '🤲',
            '🤝',
            '🙏',
            '✊'
        ],
        'Hearts': [
            '❤️',
            '🧡',
            '💛',
            '💚',
            '💙',
            '💜',
            '🖤',
            '🤍',
            '🤎',
            '💔',
            '❣️',
            '💕',
            '💞',
            '💓',
            '💗',
            '💖',
            '💘',
            '💝',
            '💟',
            '♥️'
        ],
        'Celebration': [
            '🎉',
            '🎊',
            '🎈',
            '🎁',
            '🎀',
            '🎂',
            '🍰',
            '🧁',
            '🥳',
            '🎆',
            '🎇',
            '✨',
            '🎃',
            '🎄',
            '🎋',
            '🎍',
            '🎎',
            '🎏',
            '🎐',
            '🎑'
        ],
        'Activities': [
            '⚽',
            '🏀',
            '🏈',
            '⚾',
            '🥎',
            '🎾',
            '🏐',
            '🏉',
            '🥏',
            '🎱',
            '🏓',
            '🏸',
            '🏒',
            '🏑',
            '🥍',
            '🏏',
            '🎮',
            '🕹️',
            '🎲',
            '🎯'
        ]
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            return ({
                "ChatInterface.useEffect": ()=>{
                    Object.values(audioPlayers.current).forEach({
                        "ChatInterface.useEffect": ({ audio, objectUrl })=>{
                            audio.pause();
                            if (objectUrl) {
                                URL.revokeObjectURL(objectUrl);
                            }
                        }
                    }["ChatInterface.useEffect"]);
                    audioPlayers.current = {};
                    clearSnapTimeouts();
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        clearSnapTimeouts
    ]);
    // Auto-scroll to bottom when new messages arrive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            const node = messagesEndRef.current;
            if (node && typeof node.scrollIntoView === 'function') {
                node.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }["ChatInterface.useEffect"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (ablyError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(ablyError);
            }
        }
    }["ChatInterface.useEffect"], [
        ablyError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            let cancelled = false;
            const syncPlayers = {
                "ChatInterface.useEffect.syncPlayers": async ()=>{
                    const voiceMessages = messages.filter({
                        "ChatInterface.useEffect.syncPlayers.voiceMessages": (msg)=>msg.voice?.url
                    }["ChatInterface.useEffect.syncPlayers.voiceMessages"]);
                    const currentIds = new Set(voiceMessages.map({
                        "ChatInterface.useEffect.syncPlayers": (msg)=>msg.id
                    }["ChatInterface.useEffect.syncPlayers"]));
                    Object.entries(audioPlayers.current).forEach({
                        "ChatInterface.useEffect.syncPlayers": ([id, entry])=>{
                            if (!currentIds.has(id)) {
                                entry.audio.pause();
                                entry.audio.onended = null;
                                entry.audio.onerror = null;
                                if (entry.objectUrl) {
                                    URL.revokeObjectURL(entry.objectUrl);
                                }
                                delete audioPlayers.current[id];
                            }
                        }
                    }["ChatInterface.useEffect.syncPlayers"]);
                    for (const msg of voiceMessages){
                        if (cancelled || !msg.voice?.url) {
                            continue;
                        }
                        const existing = audioPlayers.current[msg.id];
                        if (existing && existing.source === msg.voice.url) {
                            continue;
                        }
                        if (existing) {
                            existing.audio.pause();
                            existing.audio.onended = null;
                            existing.audio.onerror = null;
                            if (existing.objectUrl) {
                                URL.revokeObjectURL(existing.objectUrl);
                            }
                            delete audioPlayers.current[msg.id];
                        }
                        try {
                            let blob = null;
                            if (msg.voice.url.startsWith('data:')) {
                                blob = dataUrlToBlob(msg.voice.url);
                            } else {
                                const response = await fetch(msg.voice.url);
                                if (!response.ok) {
                                    throw new Error(`Failed to load voice audio (${response.status})`);
                                }
                                const contentType = response.headers.get('content-type') ?? '';
                                if (contentType.includes('application/json')) {
                                    const payload = await response.json();
                                    if (payload?.dataUrl) {
                                        blob = dataUrlToBlob(payload.dataUrl);
                                    } else {
                                        throw new Error('Voice payload missing dataUrl');
                                    }
                                } else {
                                    blob = await response.blob();
                                }
                            }
                            if (!blob) {
                                throw new Error('Unable to resolve voice blob');
                            }
                            if (cancelled) {
                                return;
                            }
                            const objectUrl = URL.createObjectURL(blob);
                            if (cancelled) {
                                URL.revokeObjectURL(objectUrl);
                                return;
                            }
                            const audio = new Audio(objectUrl);
                            audio.preload = 'auto';
                            audio.volume = 1;
                            audio.onended = ({
                                "ChatInterface.useEffect.syncPlayers": ()=>{
                                    setPlayingVoice({
                                        "ChatInterface.useEffect.syncPlayers": (prev)=>prev === msg.id ? null : prev
                                    }["ChatInterface.useEffect.syncPlayers"]);
                                }
                            })["ChatInterface.useEffect.syncPlayers"];
                            audio.onerror = ({
                                "ChatInterface.useEffect.syncPlayers": (event)=>{
                                    console.warn('Unable to play voice message', event);
                                }
                            })["ChatInterface.useEffect.syncPlayers"];
                            audioPlayers.current[msg.id] = {
                                audio,
                                source: msg.voice.url,
                                objectUrl
                            };
                            if (playingVoice === msg.id) {
                                audio.currentTime = 0;
                                const playPromise = audio.play();
                                if (playPromise && typeof playPromise.catch === 'function') {
                                    playPromise.catch({
                                        "ChatInterface.useEffect.syncPlayers": (error)=>{
                                            console.warn('Audio playback prevented:', error);
                                        }
                                    }["ChatInterface.useEffect.syncPlayers"]);
                                }
                            }
                        } catch (error) {
                            if (cancelled) {
                                continue;
                            }
                            console.error('Failed to prepare voice message audio', error);
                        }
                    }
                }
            }["ChatInterface.useEffect.syncPlayers"];
            syncPlayers();
            return ({
                "ChatInterface.useEffect": ()=>{
                    cancelled = true;
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        messages,
        playingVoice
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.innerWidth >= 1024) {
                setMobileShowList(false);
                return;
            }
            setMobileShowList(!selectedChat);
        }
    }["ChatInterface.useEffect"], [
        selectedChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            Object.entries(audioPlayers.current).forEach({
                "ChatInterface.useEffect": ([id, entry])=>{
                    const { audio } = entry;
                    if (id !== playingVoice) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                }
            }["ChatInterface.useEffect"]);
            if (!playingVoice) {
                return;
            }
            const activeEntry = audioPlayers.current[playingVoice];
            if (!activeEntry) {
                return;
            }
            const { audio } = activeEntry;
            if (audio.paused) {
                audio.currentTime = 0;
            }
            const playAudio = {
                "ChatInterface.useEffect.playAudio": ()=>{
                    const playPromise = audio.play();
                    if (playPromise && typeof playPromise.catch === 'function') {
                        playPromise.catch({
                            "ChatInterface.useEffect.playAudio": (error)=>{
                                console.warn('Audio playback prevented:', error);
                            }
                        }["ChatInterface.useEffect.playAudio"]);
                    }
                }
            }["ChatInterface.useEffect.playAudio"];
            if (audio.readyState >= 2) {
                playAudio();
            } else {
                const handleCanPlay = {
                    "ChatInterface.useEffect.handleCanPlay": ()=>{
                        audio.removeEventListener('canplay', handleCanPlay);
                        playAudio();
                    }
                }["ChatInterface.useEffect.handleCanPlay"];
                audio.addEventListener('canplay', handleCanPlay, {
                    once: true
                });
                audio.load();
            }
            return ({
                "ChatInterface.useEffect": ()=>{
                    audio.pause();
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        playingVoice
    ]);
    const handleSendMessage = async ()=>{
        if (!newMessage.trim() || !selectedChat || sending) {
            return;
        }
        let room = activeRoomRef.current;
        if (!room && isTest && chatClientRef.current) {
            try {
                room = await chatClientRef.current.rooms.get(selectedChat);
                activeRoomRef.current = room;
            } catch  {
                room = null;
            }
        }
        if (!room) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Chat is still connecting. Please try again.');
            return;
        }
        setSending(true);
        try {
            const textContent = newMessage.trim();
            const clientMessageId = createClientMessageId();
            const metadata = buildMetadata({
                _clientMessageId: clientMessageId
            });
            await room.messages.send({
                text: textContent || '...',
                metadata
            });
            const senderProfile = getSenderProfile();
            const optimisticMessage = {
                id: clientMessageId,
                chatId: selectedChat,
                senderId: senderProfile.id,
                senderName: senderProfile.name,
                senderAvatar: senderProfile.avatar,
                content: textContent,
                timestamp: new Date().toISOString(),
                isSnapStyle: isSnapMode,
                expiresIn: isSnapMode ? snapTimer : undefined,
                localOnly: true,
                clientMessageId
            };
            setMessages((prev)=>dedupeMessages([
                    ...prev,
                    optimisticMessage
                ]));
            setChats((prevChats)=>prevChats.map((chat)=>chat.identity === selectedChat ? {
                        ...chat,
                        lastMessage: optimisticMessage.content,
                        lastMessageTime: optimisticMessage.timestamp
                    } : chat));
            // Avoid persisting the local-only optimistic message; it will be replaced by the real event.
            setNewMessage('');
            if (isSnapMode) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Snap sent! Disappears in ${snapTimer}s ⏱️`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Message sent! 📤');
            }
        } catch (error) {
            console.error('Error sending message via Ably:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to send message');
        } finally{
            setSending(false);
        }
    };
    const handleEmojiSelect = (emoji)=>{
        setNewMessage(newMessage + emoji);
    };
    const handleFileUpload = async (event)=>{
        if (!selectedChat || sending) return;
        const file = event.target.files?.[0];
        const room = activeRoomRef.current;
        if (!file) {
            return;
        }
        if (!room) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Chat is still connecting. Please try again.');
            return;
        }
        setSending(true);
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const extension = file.name.split('.').pop() ?? 'jpg';
            const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || `image-${Date.now()}.${extension}`;
            const key = `messages/${ablyClientId}/${selectedChat}/${Date.now()}-${safeName}`;
            const upload = await supabaseClient.storage.from(CHAT_BUCKET).upload(key, file, {
                cacheControl: '3600',
                upsert: false
            });
            if (upload.error) {
                console.error('Error uploading chat image:', upload.error);
                throw upload.error;
            }
            const { data: publicUrlData } = supabaseClient.storage.from(CHAT_BUCKET).getPublicUrl(key);
            const publicUrl = publicUrlData?.publicUrl;
            if (!publicUrl) {
                throw new Error('Could not generate public URL for uploaded image');
            }
            const metadata = buildMetadata({
                image: publicUrl
            });
            const text = textForMetadata(metadata, '[image]');
            await room.messages.send({
                text,
                metadata
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Photo sent! 📸');
        } catch (error) {
            console.error('Error sending image via Ably:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to send image');
        } finally{
            setSending(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };
    const handleCreateChat = async ()=>{
        const pickedMemberIds = selectedFriendDetails.map((friend)=>friend.clientId);
        const manualMembers = newChatMembers.split(',').map((member)=>member.trim()).filter((member)=>member.length > 0);
        const allMembers = Array.from(new Set([
            ablyClientId,
            ...pickedMemberIds,
            ...manualMembers
        ].filter(Boolean)));
        if (allMembers.length <= 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Pick at least one registered friend or add another member ID.');
            return;
        }
        const trimmedName = newChatName.trim();
        const fallbackName = selectedFriendDetails.length === 1 ? selectedFriendDetails[0].name : selectedFriendDetails.length > 1 ? `${selectedFriendDetails[0].name.split(' ')[0]} + ${selectedFriendDetails.length - 1} more` : 'New Chat';
        const chatNameToUse = trimmedName || fallbackName;
        try {
            const createdBy = appUserId ?? ablyClientId;
            let persistedChat = null;
            let isDuplicate = false;
            let savedToServer = false;
            if (createdBy) {
                try {
                    const response = await fetch(`${SUPABASE_FUNCTION_BASE}/chats`, {
                        method: 'POST',
                        headers: {
                            ...JSON_AUTH_HEADERS
                        },
                        body: JSON.stringify({
                            name: chatNameToUse,
                            members: allMembers,
                            isGroup: isGroupChat || allMembers.length > 2,
                            createdBy
                        })
                    });
                    if (response.ok) {
                        const payload = await response.json();
                        const chatRecord = payload['chat'];
                        if (chatRecord !== undefined) {
                            persistedChat = mapStoredChatRecord(chatRecord);
                            isDuplicate = Boolean(payload['isDuplicate']);
                            savedToServer = true;
                        }
                    } else {
                        throw new Error(`Failed to persist chat (${response.status})`);
                    }
                } catch (error) {
                    console.warn('Unable to persist chat, falling back to local state', error);
                }
            }
            if (!persistedChat) {
                const slugBase = chatNameToUse.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                const fallbackId = `${slugBase || 'chat'}-${Date.now().toString(36)}`;
                const roomId = chats.some((chat)=>chat.identity === fallbackId) ? `${fallbackId}-${Math.random().toString(36).slice(2, 8)}` : fallbackId;
                const primaryAvatar = selectedFriendDetails[0]?.avatar ?? (pickedMemberIds[0] ? avatarForId(pickedMemberIds[0]) : avatarForId(roomId));
                persistedChat = {
                    identity: roomId,
                    chatName: chatNameToUse,
                    avatar: primaryAvatar,
                    lastMessage: '',
                    lastMessageTime: '',
                    members: allMembers,
                    isGroup: isGroupChat || allMembers.length > 2
                };
            }
            setChats((prev)=>{
                const byId = new Map(prev.map((chat)=>[
                        chat.identity,
                        chat
                    ]));
                byId.set(persistedChat.identity, persistedChat);
                return Array.from(byId.values()).sort((a, b)=>{
                    const aTime = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
                    const bTime = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
                    return bTime - aTime;
                });
            });
            setSelectedChat(persistedChat.identity);
            setShowNewChatDialog(false);
            setNewChatName('');
            setNewChatMembers('');
            setSelectedFriendIds([]);
            setFriendSearchQuery('');
            setFriendPickerOpen(false);
            setIsGroupChat(false);
            if (isDuplicate) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Chat already exists. Opening it now!');
            } else if (savedToServer) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Chat created and saved! 🎉');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Chat created! 🎉');
            }
            const client = chatClientRef.current;
            if (client) {
                client.rooms.get(persistedChat.identity).catch((error)=>{
                    console.warn('Unable to start chat room', error);
                });
            }
        } catch (error) {
            console.error('Error creating chat:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Chat has not been created');
        }
    };
    const handleCall = (type)=>{
        const currentChat = chats.find((chat)=>chat.identity === selectedChat);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Starting ${type} call with ${currentChat?.chatName}...`);
        if (onStartCall) {
            onStartCall(type);
        }
    };
    const handleDocumentUpload = async (event)=>{
        if (!selectedChat || sending) return;
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }
        setSending(true);
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const room = activeRoomRef.current;
            if (!room) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Chat is still connecting. Please try again.');
                return;
            }
            const extension = file.name.split('.').pop() ?? 'bin';
            const safeName = sanitizeFilename(file.name, `file-${Date.now()}.${extension}`);
            const key = `messages/${ablyClientId}/${selectedChat}/${Date.now()}-${safeName}`;
            const upload = await supabaseClient.storage.from(CHAT_BUCKET).upload(key, file, {
                cacheControl: '3600',
                upsert: false,
                contentType: file.type || 'application/octet-stream'
            });
            if (upload.error) {
                console.error('Error uploading chat file:', upload.error);
                throw upload.error;
            }
            const { data: publicUrlData } = supabaseClient.storage.from(CHAT_BUCKET).getPublicUrl(key);
            const publicUrl = publicUrlData?.publicUrl;
            if (!publicUrl) {
                throw new Error('Could not generate public URL for uploaded file');
            }
            const metadata = buildMetadata({
                file: {
                    name: file.name,
                    url: publicUrl,
                    type: file.type,
                    size: file.size
                }
            });
            await room.messages.send({
                text: textForMetadata(metadata, file.name || '[file]'),
                metadata
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('File sent! 📎');
        } catch (error) {
            console.error('Error sending file via Ably:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to send file');
        } finally{
            setSending(false);
            if (documentInputRef.current) {
                documentInputRef.current.value = '';
            }
        }
    };
    const handleVoiceSend = async (audioData, duration, mimeType)=>{
        if (!selectedChat || sending) return;
        const room = activeRoomRef.current;
        if (!room) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Chat is still connecting. Please try again.');
            return;
        }
        setSending(true);
        try {
            const uploadResult = await uploadVoiceClip(audioData, mimeType, duration);
            if (!uploadResult) {
                return;
            }
            const voiceMetadata = {
                url: uploadResult.url,
                duration
            };
            if (uploadResult.mimeType || mimeType) {
                voiceMetadata.mimeType = uploadResult.mimeType ?? mimeType;
            }
            if (uploadResult.id) {
                voiceMetadata.id = uploadResult.id;
            }
            const metadata = buildMetadata({
                voice: voiceMetadata
            });
            await room.messages.send({
                text: textForMetadata(metadata, '[voice]'),
                metadata
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Voice message sent! 🎤');
        } catch (error) {
            console.error('Error sending voice message via Ably:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to send voice message');
        } finally{
            setSending(false);
        }
    };
    const handleToggleStar = async (messageId)=>{
        const message = messages.find((m)=>m.id === messageId);
        if (!message) return;
        const newStarred = new Set(starredMessages);
        const willBeStarred = !newStarred.has(messageId);
        if (willBeStarred) {
            newStarred.add(messageId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Message starred! ⭐');
        } else {
            newStarred.delete(messageId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Message unstarred');
        }
        setStarredMessages(newStarred);
        // Update message starred status locally
        setMessages((msgs)=>msgs.map((msg)=>msg.id === messageId ? {
                    ...msg,
                    isStarred: willBeStarred
                } : msg));
        try {
            await fetch(`${SUPABASE_FUNCTION_BASE}/messages/${encodeURIComponent(message.chatId)}/${encodeURIComponent(messageId)}/star`, {
                method: 'PUT',
                headers: {
                    ...JSON_AUTH_HEADERS
                },
                body: JSON.stringify({
                    isStarred: willBeStarred
                })
            });
        } catch (error) {
            console.warn('Failed to persist starring change', error);
        }
    };
    const handlePlayVoice = (messageId)=>{
        if (playingVoice === messageId) {
            setPlayingVoice(null);
            return;
        }
        const entry = audioPlayers.current[messageId];
        if (!entry) {
            setPlayingVoice(messageId);
            return;
        }
        Object.entries(audioPlayers.current).forEach(([id, other])=>{
            if (id !== messageId) {
                other.audio.pause();
                other.audio.currentTime = 0;
            }
        });
        entry.audio.currentTime = 0;
        const playPromise = entry.audio.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch((error)=>{
                console.warn('Audio playback prevented:', error);
            });
        }
        setPlayingVoice(messageId);
    };
    const connectionHealthy = connectionStatus === 'connected' && roomStatus === 'attached';
    const connectionSummary = connectionHealthy ? 'Live' : `Status: ${connectionStatus} / ${roomStatus}`;
    const currentChat = chats.find((chat)=>chat.identity === selectedChat);
    const quickEmojis = [
        '😊',
        '❤️',
        '🔥',
        '👍',
        '😂',
        '🎉',
        '✨',
        '💯'
    ];
    const filteredChats = chats.filter((chat)=>chat.chatName.toLowerCase().includes(searchQuery.toLowerCase()));
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[calc(100vh-80px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-xl",
                children: "Loading messages... 💬"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChatInterface.tsx",
                lineNumber: 2046,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChatInterface.tsx",
            lineNumber: 2045,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-80px)] min-h-0 flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-7xl mx-auto px-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: `w-full lg:w-96 min-h-0 backdrop-blur-xl bg-white/10 border-white/20 flex flex-col overflow-hidden ${mobileShowList ? 'flex' : 'hidden'} lg:flex`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white text-xl",
                                        children: "Messages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2062,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        onClick: ()=>setShowNewChatDialog(!showNewChatDialog),
                                        className: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0",
                                        "aria-label": "Plus new chat",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2069,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2063,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2061,
                                columnNumber: 11
                            }, this),
                            showNewChatDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-4 bg-white/10 rounded-lg space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Chat name (optional)...",
                                                value: newChatName,
                                                onChange: (e)=>setNewChatName(e.target.value),
                                                className: "bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2077,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Leave blank and we will use your registered friend selections to name the chat."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2083,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2076,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white/70",
                                                        children: "Pick friends registered on MoveY Splash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2090,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-white/50",
                                                        children: [
                                                            registeredFriends.length,
                                                            " available"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2091,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2089,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                open: friendPickerOpen,
                                                onOpenChange: setFriendPickerOpen,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            className: "w-full bg-white/5 border-white/20 text-white justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: selectedFriendIds.length > 0 ? `Selected ${selectedFriendIds.length} friend${selectedFriendIds.length > 1 ? 's' : ''}` : 'Search registered friends'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2101,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                    className: "w-4 h-4 opacity-70"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2106,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2097,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2096,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                        className: "w-full max-w-sm p-0 backdrop-blur-xl bg-white/10 border-white/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2112,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            autoFocus: true,
                                                                            value: friendSearchQuery,
                                                                            onChange: (e)=>setFriendSearchQuery(e.target.value),
                                                                            placeholder: "Search registered friends...",
                                                                            className: "pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2113,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2111,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                                    className: "max-h-64",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2 pr-1",
                                                                        children: filteredRegisteredFriends.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-white/60 text-sm px-2 py-3",
                                                                            children: "No registered friends found."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2124,
                                                                            columnNumber: 29
                                                                        }, this) : filteredRegisteredFriends.map((friend)=>{
                                                                            const isSelected = selectedFriendIds.includes(friend.id);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>toggleFriendSelection(friend.id),
                                                                                className: `w-full flex items-center justify-between p-2 rounded-lg transition-colors ${isSelected ? 'bg-white/15' : 'hover:bg-white/10'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                                                className: "w-10 h-10 border-2 border-white/10",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                                                        src: friend.avatar
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                                        lineNumber: 2140,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                                                        children: friend.name[0]
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                                        lineNumber: 2141,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                                lineNumber: 2139,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-left",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-white",
                                                                                                        children: friend.name
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                                        lineNumber: 2144,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-white/60 text-xs",
                                                                                                        children: friend.username
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                                        lineNumber: 2145,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                                lineNumber: 2143,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                        lineNumber: 2138,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-green-400 text-black' : 'border border-white/30 text-white/70'}`,
                                                                                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                            lineNumber: 2155,
                                                                                            columnNumber: 51
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                            lineNumber: 2155,
                                                                                            columnNumber: 83
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                        lineNumber: 2148,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, friend.id, true, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 2131,
                                                                                columnNumber: 33
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2122,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2121,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2110,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2109,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2095,
                                                columnNumber: 17
                                            }, this),
                                            selectedFriendDetails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: selectedFriendDetails.map((friend)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                className: "w-6 h-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                        src: friend.avatar
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2175,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                        children: friend.name[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2176,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2174,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white text-sm",
                                                                children: friend.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2178,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleFriendSelection(friend.id),
                                                                className: "text-white/60 hover:text-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2183,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2179,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, friend.id, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2170,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2168,
                                                columnNumber: 19
                                            }, this),
                                            registeredFriends.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "No friends have registered yet. Add friends from the Friends tab first."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2191,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2088,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Add by user ID (optional)...",
                                                value: newChatMembers,
                                                onChange: (e)=>setNewChatMembers(e.target.value),
                                                className: "bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Use this if you need to invite someone who is registered but not in your friends list yet."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                onClick: handleCreateChat,
                                                className: "flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0",
                                                children: "Create"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: ()=>{
                                                    setShowNewChatDialog(false);
                                                    setSelectedFriendIds([]);
                                                    setFriendSearchQuery('');
                                                    setNewChatName('');
                                                    setNewChatMembers('');
                                                },
                                                className: "text-white/70 hover:text-white hover:bg-white/10",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2075,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Search messages...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                        lineNumber: 2060,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "flex-1 h-full overflow-y-auto",
                        children: filteredChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 text-center text-white/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2",
                                    children: "No chats yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 2250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Click + to start a new conversation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 2251,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 2249,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: filteredChats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedChat(chat.identity);
                                        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 1024) {
                                            setMobileShowList(false);
                                        }
                                    },
                                    className: `w-full p-3 rounded-xl mb-2 transition-all ${selectedChat === chat.identity ? 'bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-xl' : 'hover:bg-white/10'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "w-12 h-12 border-2 border-white/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: chat.avatar
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2272,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: chat.chatName[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2273,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2271,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 text-left overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-white truncate",
                                                                children: chat.chatName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2277,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white/40 text-xs",
                                                                children: chat.lastMessageTime ? new Date(chat.lastMessageTime).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                }) : '--:--'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2278,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2276,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm truncate",
                                                        children: chat.lastMessage || 'No messages yet'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2287,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2275,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2270,
                                        columnNumber: 19
                                    }, this)
                                }, chat.identity, false, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 2256,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 2254,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                        lineNumber: 2247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ChatInterface.tsx",
                lineNumber: 2054,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: `flex-1 w-full min-h-0 backdrop-blur-xl bg-white/10 border-white/20 flex flex-col overflow-hidden ${mobileShowList ? 'hidden' : 'flex'} lg:flex`,
                children: !selectedChat || !currentChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white text-2xl mb-2",
                                children: "Select a chat to start messaging"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2308,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60",
                                children: "Choose a conversation or create a new one"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2309,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                        lineNumber: 2307,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                    lineNumber: 2306,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-white/10 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            onClick: ()=>setMobileShowList(true),
                                            className: "lg:hidden text-white/80 hover:text-white hover:bg-white/10",
                                            "aria-label": "Back to chats",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2324,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2317,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "w-10 h-10 border-2 border-white/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: currentChat.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    children: currentChat.chatName[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2328,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white",
                                                    children: currentChat.chatName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2331,
                                                    columnNumber: 19
                                                }, this),
                                                currentChat.isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: [
                                                        currentChat.members.length,
                                                        " members"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2333,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${connectionHealthy ? 'text-emerald-300' : 'text-white/60'}`,
                                                    children: connectionSummary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2335,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 2316,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            onClick: ()=>handleCall('audio'),
                                            className: "text-white/70 hover:text-white hover:bg-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2352,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2346,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            onClick: ()=>handleCall('video'),
                                            className: "text-white/70 hover:text-white hover:bg-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2360,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2354,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            className: "text-white/70 hover:text-white hover:bg-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2367,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 2345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 2315,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "flex-1 h-full overflow-y-auto p-4 sm:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-white/50 py-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "No messages yet. Start the conversation! 💬"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2377,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2376,
                                        columnNumber: 19
                                    }, this) : messages.map((message)=>{
                                        const isMe = message.senderId === ablyClientId;
                                        const isStarred = starredMessages.has(message.id) || message.isStarred;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex gap-3 ${isMe ? 'flex-row-reverse' : 'flex-row'} group`,
                                            children: [
                                                !isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                    className: "w-8 h-8 border-2 border-white/20 flex-shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                            src: message.senderAvatar ?? avatarForId(message.senderId)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2390,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                            children: (message.senderName ?? message.senderId ?? 'U')[0] ?? 'U'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2391,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2389,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex-1 max-w-[70%] ${isMe ? 'flex flex-col items-end' : ''}`,
                                                    children: [
                                                        !isMe && message.senderName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/50 mb-1",
                                                            children: message.senderName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2398,
                                                            columnNumber: 29
                                                        }, this),
                                                        message.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `rounded-2xl overflow-hidden mb-2 relative ${message.isSnapStyle ? 'border-4 border-yellow-400' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                                    src: message.image,
                                                                    alt: "Shared image",
                                                                    className: "w-full max-w-md rounded-xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2407,
                                                                    columnNumber: 31
                                                                }, this),
                                                                message.isSnapStyle && message.expiresIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2414,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        message.expiresIn,
                                                                        "s"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2413,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2402,
                                                            columnNumber: 29
                                                        }, this),
                                                        message.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `rounded-2xl px-4 py-3 mb-2 ${isMe ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-white/10 backdrop-blur-xl text-white'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2430,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2429,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "truncate",
                                                                                children: message.file.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 2433,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs opacity-70",
                                                                                children: [
                                                                                    (message.file.size / 1024).toFixed(2),
                                                                                    " KB"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 2434,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2432,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: message.file.url,
                                                                        download: message.file.name,
                                                                        className: "w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2443,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2438,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2428,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2423,
                                                            columnNumber: 29
                                                        }, this),
                                                        message.voice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `rounded-2xl px-4 py-3 mb-2 min-w-[200px] ${isMe ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-white/10 backdrop-blur-xl text-white'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePlayVoice(message.id),
                                                                        className: "w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors",
                                                                        children: playingVoice === message.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2462,
                                                                            columnNumber: 37
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                            className: "w-5 h-5 ml-0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2464,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2457,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1 h-6",
                                                                                children: Array.from({
                                                                                    length: 20
                                                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `w-1 bg-white/50 rounded-full ${playingVoice === message.id ? 'animate-pulse' : ''}`,
                                                                                        style: {
                                                                                            height: `${Math.random() * 60 + 40}%`,
                                                                                            animationDelay: `${i * 50}ms`
                                                                                        }
                                                                                    }, i, false, {
                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                        lineNumber: 2470,
                                                                                        columnNumber: 39
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 2468,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs opacity-70 mt-1",
                                                                                children: [
                                                                                    Math.floor(message.voice.duration / 60),
                                                                                    ":",
                                                                                    (message.voice.duration % 60).toString().padStart(2, '0')
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 2482,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2467,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2456,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2451,
                                                            columnNumber: 29
                                                        }, this),
                                                        message.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `rounded-2xl px-4 py-3 relative ${isMe ? message.isSnapStyle ? 'bg-yellow-400 text-black' : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-white/10 backdrop-blur-xl text-white'} ${message.isSnapStyle ? 'border-2 border-yellow-400' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "break-words",
                                                                    children: message.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2499,
                                                                    columnNumber: 31
                                                                }, this),
                                                                message.isSnapStyle && message.expiresIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2502,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        message.expiresIn,
                                                                        "s"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2501,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2492,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white/40 text-xs",
                                                                    children: new Date(message.timestamp).toLocaleTimeString([], {
                                                                        hour: '2-digit',
                                                                        minute: '2-digit'
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2511,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleToggleStar(message.id),
                                                                    className: `opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:scale-125 ${isStarred ? 'opacity-100' : ''}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: `w-4 h-4 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-white/40 hover:text-white/60'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2523,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2517,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2510,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2396,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, message.id, true, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 2384,
                                            columnNumber: 23
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2537,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2374,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 2373,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-6 py-2 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsSnapMode(!isSnapMode),
                                                className: `flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${isSnapMode ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2553,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "Snap Mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2554,
                                                        columnNumber: 21
                                                    }, this),
                                                    isSnapMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2555,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2545,
                                                columnNumber: 19
                                            }, this),
                                            isSnapMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white/70 text-sm",
                                                        children: "Timer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2560,
                                                        columnNumber: 23
                                                    }, this),
                                                    [
                                                        5,
                                                        10,
                                                        15,
                                                        30
                                                    ].map((seconds)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSnapTimer(seconds),
                                                            className: `px-2 py-1 rounded-lg text-xs ${snapTimer === seconds ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'}`,
                                                            children: [
                                                                seconds,
                                                                "s"
                                                            ]
                                                        }, seconds, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 2562,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2559,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2544,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: quickEmojis.map((emoji, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEmojiSelect(emoji),
                                                className: "text-xl hover:scale-125 transition-transform",
                                                children: emoji
                                            }, index, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2581,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2579,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2543,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 2542,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-2xl p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: "image/*",
                                        onChange: handleFileUpload,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2596,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: documentInputRef,
                                        type: "file",
                                        accept: ".pdf,.doc,.docx,.txt,.zip,.rar",
                                        onChange: handleDocumentUpload,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2603,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 sm:gap-3 mb-3 flex-col sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                ref: messageInputRef,
                                                placeholder: isSnapMode ? "Send a disappearing message..." : "Type a message...",
                                                value: newMessage,
                                                onChange: (e)=>setNewMessage(e.target.value),
                                                onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage(),
                                                disabled: sending,
                                                className: `w-full sm:flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12 text-base ${isSnapMode ? 'border-yellow-400 border-2' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2613,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleSendMessage,
                                                disabled: sending || !newMessage.trim(),
                                                className: `h-12 px-6 ${isSnapMode ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'} border-0`,
                                                "aria-label": "Send message",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2635,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2625,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2612,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "ghost",
                                                        onClick: ()=>fileInputRef.current?.click(),
                                                        disabled: sending,
                                                        className: "text-white/70 hover:text-white hover:bg-white/10 h-9",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                className: "w-5 h-5 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2649,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "Photo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2650,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2642,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "ghost",
                                                        onClick: ()=>documentInputRef.current?.click(),
                                                        disabled: sending,
                                                        className: "text-white/70 hover:text-white hover:bg-white/10 h-9",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                className: "w-5 h-5 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2660,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "File"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2661,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2653,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                        open: showEmojiPicker,
                                                        onOpenChange: setShowEmojiPicker,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    variant: "ghost",
                                                                    className: "text-white/70 hover:text-white hover:bg-white/10 h-9",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                                                                            className: "w-5 h-5 mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2671,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm",
                                                                            children: "Emoji"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2672,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2666,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2665,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                className: "w-80 backdrop-blur-xl bg-white/10 border-white/20 p-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                                    className: "h-80",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-4",
                                                                        children: Object.entries(emojiCategories).map(([category, emojis])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mb-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-white/70 text-sm mb-2",
                                                                                        children: category
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                        lineNumber: 2680,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "grid grid-cols-8 gap-2",
                                                                                        children: emojis.map((emoji, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>{
                                                                                                    handleEmojiSelect(emoji);
                                                                                                    setShowEmojiPicker(false);
                                                                                                },
                                                                                                className: "text-2xl hover:scale-125 transition-transform p-1 hover:bg-white/10 rounded",
                                                                                                children: emoji
                                                                                            }, index, false, {
                                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                                lineNumber: 2683,
                                                                                                columnNumber: 37
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                        lineNumber: 2681,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, category, true, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 2679,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2677,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2676,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2675,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2664,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$VoiceRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceRecorder"], {
                                                        onSendVoice: handleVoiceSend
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2702,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2641,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MessageInspiration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageInspiration"], {
                                                onInsertMessage: (msg)=>setNewMessage(msg)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2705,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2640,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2595,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 2594,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChatInterface.tsx",
                lineNumber: 2300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ChatInterface.tsx",
        lineNumber: 2052,
        columnNumber: 5
    }, this);
}
_s(ChatInterface, "fcXl1ZOxJr3Js+HQ5O/4btHQF1c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$userContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = ChatInterface;
var _c;
__turbopack_context__.k.register(_c, "ChatInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_ChatInterface_tsx_9d17c30a._.js.map