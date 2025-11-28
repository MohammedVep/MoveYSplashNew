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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/popover.tsx [app-client] (ecmascript)");
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
const ABLY_KEY = ("TURBOPACK compile-time value", "TWe31g.j0F01A:-j8adkUcs-AeusvKPMgSFCJKlMb8zCh1pGbt5Zo3CxI") ?? 'TWe31g.j0F01A:-j8adkUcs-AeusvKPMgSFCJKlMb8zCh1pGbt5Zo3CxI';
const DEFAULT_ROOM_ID = 'getting-started';
const VOICE_UPLOAD_ENDPOINT = '/api/voice';
const SUPABASE_FUNCTION_BASE = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-a14c7986`;
const AUTH_HEADER = `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`;
const JSON_AUTH_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: AUTH_HEADER
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
function ChatInterface({ onStartCall, shareDraft, onShareDraftConsumed, focusUserId = null, onFocusUserConsumed }) {
    _s();
    const { currentUser, allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$userContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const fallbackClientIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    if (!fallbackClientIdRef.current) {
        fallbackClientIdRef.current = `guest-${Math.random().toString(36).slice(2, 10)}`;
    }
    const fallbackClientId = fallbackClientIdRef.current;
    const ablyClientId = currentUser?.ablyClientId ?? fallbackClientId;
    const appUserId = currentUser?.id ?? ablyClientId;
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ablyError, setAblyError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatReady, setChatReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectionStatus, setConnectionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('connecting');
    const [roomStatus, setRoomStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
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
            const existing = chatsRef.current.find({
                "ChatInterface.useCallback[ensureDirectChat].existing": (chat)=>!chat.isGroup && memberIds.every({
                        "ChatInterface.useCallback[ensureDirectChat].existing": (member)=>chat.members.includes(member)
                    }["ChatInterface.useCallback[ensureDirectChat].existing"])
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
            setMessages({
                "ChatInterface.useCallback[handleIncomingMessage]": (prev)=>{
                    const others = prev.filter({
                        "ChatInterface.useCallback[handleIncomingMessage].others": (message)=>message.id !== mapped.id
                    }["ChatInterface.useCallback[handleIncomingMessage].others"]);
                    const next = [
                        ...others,
                        mapped
                    ];
                    next.sort({
                        "ChatInterface.useCallback[handleIncomingMessage]": (a, b)=>new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
                    }["ChatInterface.useCallback[handleIncomingMessage]"]);
                    return next;
                }
            }["ChatInterface.useCallback[handleIncomingMessage]"]);
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setChatReady(false);
            setAblyError(null);
            const realtime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ably$2f$build$2f$ably$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Realtime"]({
                key: ABLY_KEY,
                clientId: ablyClientId
            });
            ablyClientRef.current = realtime;
            const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ably$2f$chat$2f$dist$2f$chat$2f$ably$2d$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatClient"](realtime);
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
                        const combinedMessages = Array.from(storedById.values()).sort({
                            "ChatInterface.useEffect.joinRoom.combinedMessages": (a, b)=>new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
                        }["ChatInterface.useEffect.joinRoom.combinedMessages"]);
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
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
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
        const room = activeRoomRef.current;
        if (!room) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Chat is still connecting. Please try again.');
            return;
        }
        setSending(true);
        try {
            const metadata = buildMetadata();
            await room.messages.send({
                text: newMessage,
                metadata
            });
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
        const reader = new FileReader();
        reader.onload = async (e)=>{
            try {
                const metadata = buildMetadata({
                    image: e.target?.result
                });
                await room.messages.send({
                    text: '',
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
        reader.onerror = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to read image file');
            setSending(false);
        };
        reader.readAsDataURL(file);
    };
    const handleCreateChat = async ()=>{
        const trimmedName = newChatName.trim();
        if (!trimmedName) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Please enter a chat name');
            return;
        }
        try {
            const memberIds = newChatMembers.split(',').map((member)=>member.trim()).filter((member)=>member.length > 0);
            const allMembers = Array.from(new Set([
                ablyClientId,
                ...memberIds
            ].filter(Boolean)));
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
                            name: trimmedName,
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
                const slugBase = trimmedName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                const fallbackId = `${slugBase || 'chat'}-${Date.now().toString(36)}`;
                const roomId = chats.some((chat)=>chat.identity === fallbackId) ? `${fallbackId}-${Math.random().toString(36).slice(2, 8)}` : fallbackId;
                persistedChat = {
                    identity: roomId,
                    chatName: trimmedName,
                    avatar: avatarForId(roomId),
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
        const room = activeRoomRef.current;
        if (!file) {
            return;
        }
        if (!room) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Chat is still connecting. Please try again.');
            return;
        }
        setSending(true);
        const reader = new FileReader();
        reader.onload = async (e)=>{
            try {
                const metadata = buildMetadata({
                    file: {
                        name: file.name,
                        url: e.target?.result,
                        type: file.type,
                        size: file.size
                    }
                });
                await room.messages.send({
                    text: '',
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
        reader.onerror = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to read file');
            setSending(false);
        };
        reader.readAsDataURL(file);
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
                text: '',
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
                lineNumber: 1644,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChatInterface.tsx",
            lineNumber: 1643,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-80px)] min-h-0 flex gap-6 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-96 min-h-0 backdrop-blur-xl bg-white/10 border-white/20 flex flex-col overflow-hidden",
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
                                        lineNumber: 1656,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        onClick: ()=>setShowNewChatDialog(!showNewChatDialog),
                                        className: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1662,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1657,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 1655,
                                columnNumber: 11
                            }, this),
                            showNewChatDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-4 bg-white/10 rounded-lg space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Chat name...",
                                        value: newChatName,
                                        onChange: (e)=>setNewChatName(e.target.value),
                                        className: "bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1669,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Member IDs (comma separated)...",
                                        value: newChatMembers,
                                        onChange: (e)=>setNewChatMembers(e.target.value),
                                        className: "bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1675,
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
                                                lineNumber: 1682,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: ()=>setShowNewChatDialog(false),
                                                className: "text-white/70 hover:text-white hover:bg-white/10",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 1689,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1681,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 1668,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1702,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Search messages...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1703,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 1701,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                        lineNumber: 1654,
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
                                    lineNumber: 1716,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Click + to start a new conversation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 1717,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 1715,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: filteredChats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedChat(chat.identity),
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
                                                        lineNumber: 1733,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: chat.chatName[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 1734,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 1732,
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
                                                                lineNumber: 1738,
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
                                                                lineNumber: 1739,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 1737,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm truncate",
                                                        children: chat.lastMessage || 'No messages yet'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 1748,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 1736,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1731,
                                        columnNumber: 19
                                    }, this)
                                }, chat.identity, false, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 1722,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 1720,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                        lineNumber: 1713,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ChatInterface.tsx",
                lineNumber: 1652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "flex-1 min-h-0 backdrop-blur-xl bg-white/10 border-white/20 flex flex-col overflow-hidden",
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
                                lineNumber: 1765,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60",
                                children: "Choose a conversation or create a new one"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 1766,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                        lineNumber: 1764,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                    lineNumber: 1763,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-white/10 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "w-10 h-10 border-2 border-white/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: currentChat.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 1775,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    children: currentChat.chatName[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 1776,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1774,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white",
                                                    children: currentChat.chatName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 1779,
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
                                                    lineNumber: 1781,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${connectionHealthy ? 'text-emerald-300' : 'text-white/60'}`,
                                                    children: connectionSummary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 1783,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1778,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 1773,
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
                                                lineNumber: 1800,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1794,
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
                                                lineNumber: 1808,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1802,
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
                                                lineNumber: 1815,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1810,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                    lineNumber: 1793,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 1772,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "flex-1 h-full overflow-y-auto p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-white/50 py-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "No messages yet. Start the conversation! 💬"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1825,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1824,
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
                                                            lineNumber: 1838,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                            children: (message.senderName ?? message.senderId ?? 'U')[0] ?? 'U'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 1839,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 1837,
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
                                                            lineNumber: 1846,
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
                                                                    lineNumber: 1855,
                                                                    columnNumber: 31
                                                                }, this),
                                                                message.isSnapStyle && message.expiresIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 1862,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        message.expiresIn,
                                                                        "s"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 1861,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 1850,
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
                                                                            lineNumber: 1878,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 1877,
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
                                                                                lineNumber: 1881,
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
                                                                                lineNumber: 1882,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 1880,
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
                                                                            lineNumber: 1891,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 1886,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 1876,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 1871,
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
                                                                            lineNumber: 1910,
                                                                            columnNumber: 37
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                            className: "w-5 h-5 ml-0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 1912,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 1905,
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
                                                                                        lineNumber: 1918,
                                                                                        columnNumber: 39
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 1916,
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
                                                                                lineNumber: 1930,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 1915,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 1904,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 1899,
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
                                                                    lineNumber: 1947,
                                                                    columnNumber: 31
                                                                }, this),
                                                                message.isSnapStyle && message.expiresIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 1950,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        message.expiresIn,
                                                                        "s"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 1949,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 1940,
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
                                                                    lineNumber: 1959,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleToggleStar(message.id),
                                                                    className: `opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:scale-125 ${isStarred ? 'opacity-100' : ''}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: `w-4 h-4 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-white/40 hover:text-white/60'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 1971,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 1965,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                            lineNumber: 1958,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 1844,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, message.id, true, {
                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                            lineNumber: 1832,
                                            columnNumber: 23
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1985,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 1822,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 1821,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-2 border-t border-white/10",
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
                                                        lineNumber: 2001,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "Snap Mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2002,
                                                        columnNumber: 21
                                                    }, this),
                                                    isSnapMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2003,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 1993,
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
                                                        lineNumber: 2008,
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
                                                            lineNumber: 2010,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2007,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 1992,
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
                                                lineNumber: 2029,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2027,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 1991,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 1990,
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
                                        lineNumber: 2044,
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
                                        lineNumber: 2051,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                ref: messageInputRef,
                                                placeholder: isSnapMode ? "Send a disappearing message..." : "Type a message...",
                                                value: newMessage,
                                                onChange: (e)=>setNewMessage(e.target.value),
                                                onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage(),
                                                disabled: sending,
                                                className: `flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12 text-base ${isSnapMode ? 'border-yellow-400 border-2' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2061,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleSendMessage,
                                                disabled: sending || !newMessage.trim(),
                                                className: `h-12 px-6 ${isSnapMode ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'} border-0`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                    lineNumber: 2082,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2073,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2060,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
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
                                                                lineNumber: 2096,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "Photo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2097,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2089,
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
                                                                lineNumber: 2107,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "File"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2108,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2100,
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
                                                                            lineNumber: 2118,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm",
                                                                            children: "Emoji"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                            lineNumber: 2119,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2113,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2112,
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
                                                                                        lineNumber: 2127,
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
                                                                                                lineNumber: 2130,
                                                                                                columnNumber: 37
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                        lineNumber: 2128,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, category, true, {
                                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                                lineNumber: 2126,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                        lineNumber: 2124,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                    lineNumber: 2123,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                                lineNumber: 2122,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2111,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$VoiceRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceRecorder"], {
                                                        onSendVoice: handleVoiceSend
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                        lineNumber: 2149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2088,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MessageInspiration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageInspiration"], {
                                                onInsertMessage: (msg)=>setNewMessage(msg)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                                lineNumber: 2152,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/ChatInterface.tsx",
                                        lineNumber: 2087,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/ChatInterface.tsx",
                                lineNumber: 2043,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatInterface.tsx",
                            lineNumber: 2042,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChatInterface.tsx",
                lineNumber: 1761,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ChatInterface.tsx",
        lineNumber: 1650,
        columnNumber: 5
    }, this);
}
_s(ChatInterface, "8VPZQcSPX30SXgxVfeYATITwE7o=", false, function() {
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