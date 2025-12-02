module.exports = [
"[project]/src/app/components/VideoChat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoChat",
    ()=>VideoChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ably$2f$build$2f$ably$2d$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ably/build/ably-node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.js [app-ssr] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-off.js [app-ssr] (ecmascript) <export default as MonitorOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-ssr] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-ssr] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$userContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/userContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/supabase/info.tsx [app-ssr] (ecmascript)");
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
const extractErrorInfo = (error)=>{
    if (error instanceof Error) {
        return {
            name: error.name,
            message: error.message
        };
    }
    if (typeof error === 'object' && error !== null) {
        const potentialError = error;
        const name = typeof potentialError.name === 'string' ? potentialError.name : '';
        const message = typeof potentialError.message === 'string' ? potentialError.message : '';
        return {
            name,
            message
        };
    }
    return {
        name: '',
        message: ''
    };
};
const MICROPHONE_CONSTRAINTS = {
    echoCancellation: {
        ideal: true
    },
    noiseSuppression: {
        ideal: true
    },
    autoGainControl: {
        ideal: true
    }
};
const CAMERA_PROFILES = [
    {
        label: '4K UHD',
        constraints: {
            width: {
                ideal: 3840
            },
            height: {
                ideal: 2160
            },
            frameRate: {
                ideal: 30
            }
        }
    },
    {
        label: 'Full HD',
        constraints: {
            width: {
                ideal: 1920
            },
            height: {
                ideal: 1080
            },
            frameRate: {
                ideal: 30
            }
        }
    },
    {
        label: 'HD',
        constraints: {
            width: {
                ideal: 1280
            },
            height: {
                ideal: 720
            },
            frameRate: {
                ideal: 30
            }
        }
    },
    {
        label: 'SD',
        constraints: {
            width: {
                ideal: 960
            },
            height: {
                ideal: 540
            },
            frameRate: {
                ideal: 24
            }
        }
    },
    {
        label: 'Compatibility',
        constraints: true
    }
];
const determineVideoQualityLabel = (width)=>{
    if (!width) {
        return null;
    }
    if (width >= 3800) return '4K UHD';
    if (width >= 1900) return 'Full HD';
    if (width >= 1200) return 'HD';
    if (width >= 900) return 'SD';
    return 'SD';
};
const cameraConnectedToastCopy = (quality)=>{
    switch(quality){
        case '4K UHD':
            return '4K UHD Camera connected! 📷✨';
        case 'Full HD':
            return 'Full HD Camera connected! 📷';
        case 'HD':
            return 'HD Camera connected! 📷';
        case 'SD':
            return 'Camera connected in SD! 📷';
        default:
            return 'Camera connected! 📷';
    }
};
const isCameraBusyError = (error)=>{
    const { name, message } = extractErrorInfo(error);
    const normalizedName = name.toLowerCase();
    const normalizedMessage = message.toLowerCase();
    return normalizedName === 'notreadableerror' || normalizedName === 'aborterror' || normalizedMessage.includes('already in use') || normalizedMessage.includes('busy') || normalizedMessage.includes('could not start video source');
};
const requestCameraStream = async (facingMode = 'user')=>{
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
        throw new Error('Media devices are not supported in this environment');
    }
    let lastError = null;
    let sharedCameraDetected = false;
    for(let index = 0; index < CAMERA_PROFILES.length; index += 1){
        const profile = CAMERA_PROFILES[index];
        try {
            const videoConstraints = profile.constraints === true ? profile.constraints : {
                facingMode: {
                    ideal: facingMode
                },
                ...profile.constraints
            };
            const stream = await navigator.mediaDevices.getUserMedia({
                video: videoConstraints,
                audio: MICROPHONE_CONSTRAINTS
            });
            return {
                stream,
                profileLabel: profile.label,
                profileIndex: index,
                sharedCameraDetected
            };
        } catch (error) {
            lastError = error;
            const { name, message } = extractErrorInfo(error);
            const normalizedName = name.toLowerCase();
            const normalizedMessage = message.toLowerCase();
            if (normalizedName === 'notallowederror' || normalizedName === 'securityerror' || normalizedMessage.includes('permission denied')) {
                throw error;
            }
            if (normalizedName === 'notfounderror') {
                throw error;
            }
            if (isCameraBusyError(error)) {
                sharedCameraDetected = true;
                continue;
            }
            if (normalizedName === 'overconstrainederror') {
                continue;
            }
            throw error;
        }
    }
    if (lastError && isCameraBusyError(lastError)) {
        const conflictError = new Error('Camera already in use by another app');
        conflictError.name = 'CameraConflictError';
        throw conflictError;
    }
    throw lastError ?? new Error('Unable to access camera');
};
const avatarForId = (id)=>`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(id || 'video')}`;
const isCameraConflictError = (error)=>error instanceof Error && error.name === 'CameraConflictError';
const CAMERA_SAFE_START_STORAGE_KEY = 'movesplash:cameraSafeStart';
const VIDEO_ROOM_ID = 'global-stage';
const VIDEO_API_BASE = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-a14c7986/video/rooms`;
const VIDEO_AUTH_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`
};
const VIDEO_GET_HEADERS = {
    Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`
};
const ABLY_KEY = process.env.NEXT_PUBLIC_ABLY_KEY ?? 'TWe31g.j0F01A:-j8adkUcs-AeusvKPMgSFCJKlMb8zCh1pGbt5Zo3CxI';
const ICE_SERVERS = [
    {
        urls: [
            'stun:stun.l.google.com:19302',
            'stun:stun1.l.google.com:19302'
        ]
    }
];
function VideoChat({ callType = 'video', onEndCall, isIncoming = false, callerName = 'The Squad 🔥', demoMode: initialDemoMode = false }) {
    const [{ initialDemoState, initialSafeStart, autoSafeReason }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return {
                initialDemoState: initialDemoMode,
                initialSafeStart: false,
                autoSafeReason: null
            };
        }
        //TURBOPACK unreachable
        ;
        const host = undefined;
        const runningLocally = undefined;
        let storedPreference;
        const parsedPreference = undefined;
        const safeStart = undefined;
    });
    const [cameraSafeStart, setCameraSafeStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSafeStart);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoOff, setIsVideoOff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(callType === 'audio');
    const [isScreenSharing, setIsScreenSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('grid');
    const [callStatus, setCallStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isIncoming ? 'ringing' : 'connecting');
    const [callDuration, setCallDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mediaStream, setMediaStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const mediaStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const demoCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const screenShareDemoCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraSnapshotCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cameraError, setCameraError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [demoMode, setDemoMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialDemoState);
    const [screenShareDemoMode, setScreenShareDemoMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialDemoState);
    const [isIOSDevice, setIsIOSDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [screenShareSupported, setScreenShareSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [screenShareSupportHint, setScreenShareSupportHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoQuality, setVideoQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [screenShareQuality, setScreenShareQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availableScreens, setAvailableScreens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [screenShareTarget, setScreenShareTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [screenShareSourceLabel, setScreenShareSourceLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScreenShareStreaming, setIsScreenShareStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoDetectedConflict, setAutoDetectedConflict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraConflictActive, setCameraConflictActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraFallbackFrame, setCameraFallbackFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cameraAutoRetryEnabled, setCameraAutoRetryEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sharedCameraMode, setSharedCameraMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cameraRetryTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cameraRetryToken, setCameraRetryToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cameraFacingMode, setCameraFacingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('user');
    const cameraManualStopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const screenShareStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const manualScreenShareStopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const screenShareVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selfScreenSharePreviewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { currentUser, allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$userContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const currentUserId = currentUser?.id ?? null;
    const [remoteParticipants, setRemoteParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const remoteParticipantsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const roomId = VIDEO_ROOM_ID;
    const presencePollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const presenceHeartbeatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousUserIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(currentUserId);
    const muteStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isMuted);
    const videoStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isVideoOff);
    const screenShareStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isScreenShareStreaming);
    const [autoSpeakerMode, setAutoSpeakerMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showParticipantsPanel, setShowParticipantsPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChatPanel, setShowChatPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSettingsPanel, setShowSettingsPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatDraft, setChatDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const displayName = currentUser?.name && currentUser.name.trim() || currentUser?.username && currentUser.username.trim() || 'You';
        return [
            {
                id: 'welcome',
                author: 'Host',
                text: 'Welcome to the room! Use chat to coordinate or share links.',
                isSelf: false,
                timestamp: new Date().toISOString()
            },
            {
                id: 'self-intro',
                author: displayName,
                text: 'Hey team, I just joined the call.',
                isSelf: true,
                timestamp: new Date().toISOString()
            }
        ];
    });
    const chatListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [signalingError, setSignalingError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const peerConnectionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const remoteStreamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [remoteStreams, setRemoteStreams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const remoteScreenStreamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [remoteScreenStreams, setRemoteScreenStreams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const signalingClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const signalingChannelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingIceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const selfClientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>currentUser?.ablyClientId ?? currentUser?.id ?? currentUserId ?? 'guest', [
        currentUser?.ablyClientId,
        currentUser?.id,
        currentUserId
    ]);
    const readyForWebRTC = callStatus === 'connected' && callType === 'video' && !demoMode && Boolean(mediaStream);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        muteStateRef.current = isMuted;
    }, [
        isMuted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        videoStateRef.current = isVideoOff;
    }, [
        isVideoOff
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        screenShareStateRef.current = isScreenShareStreaming;
    }, [
        isScreenShareStreaming
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        remoteParticipantsRef.current = remoteParticipants;
    }, [
        remoteParticipants
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof navigator === 'undefined') {
            setScreenShareSupported(false);
            return;
        }
        const userAgent = navigator.userAgent || navigator.vendor || '';
        const isiOS = /iPad|iPhone|iPod/.test(userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
        const hasDisplayMedia = typeof navigator.mediaDevices?.getDisplayMedia === 'function';
        setIsIOSDevice(isiOS);
        setScreenShareSupported(hasDisplayMedia || isiOS);
        if (!hasDisplayMedia) {
            setScreenShareSupportHint(isiOS ? 'Screen sharing on iOS/iPadOS uses the Screen Broadcast prompt; use Safari and tap Start Broadcast.' : 'Update to a modern browser (Chrome/Edge/Safari 17+) to enable screen sharing.');
        } else if (isiOS) {
            setScreenShareSupportHint('iOS/iPadOS: choose Safari/MoveSplash in the Screen Broadcast sheet, then tap Start Broadcast.');
        } else {
            setScreenShareSupportHint(null);
        }
    }, []);
    const togglePanel = (panel)=>{
        setShowParticipantsPanel(panel === 'participants' ? (open)=>!open : false);
        setShowChatPanel(panel === 'chat' ? (open)=>!open : false);
        setShowSettingsPanel(panel === 'settings' ? (open)=>!open : false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showChatPanel) {
            return;
        }
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [
        chatMessages,
        showChatPanel
    ]);
    const addRemoteStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId, stream)=>{
        remoteStreamsRef.current.set(peerId, stream);
        setRemoteStreams((prev)=>{
            const next = new Map(prev);
            next.set(peerId, stream);
            return next;
        });
    }, []);
    const removeRemoteScreenStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId, trackId)=>{
        const existing = remoteScreenStreamsRef.current.get(peerId);
        if (!existing) return;
        const filtered = existing.getTracks().filter((t)=>trackId ? t.id !== trackId : true);
        if (filtered.length === 0) {
            remoteScreenStreamsRef.current.delete(peerId);
        } else {
            remoteScreenStreamsRef.current.set(peerId, new MediaStream(filtered));
        }
        setRemoteScreenStreams(new Map(remoteScreenStreamsRef.current));
    }, []);
    const addRemoteScreenStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId, track)=>{
        const handleEnded = ()=>removeRemoteScreenStream(peerId, track.id);
        track.addEventListener('ended', handleEnded);
        const existing = remoteScreenStreamsRef.current.get(peerId);
        if (existing) {
            const already = existing.getTracks().some((t)=>t.id === track.id);
            if (!already) {
                existing.addTrack(track);
            }
            remoteScreenStreamsRef.current.set(peerId, existing);
            setRemoteScreenStreams(new Map(remoteScreenStreamsRef.current));
            return;
        }
        const stream = new MediaStream([
            track
        ]);
        remoteScreenStreamsRef.current.set(peerId, stream);
        setRemoteScreenStreams(new Map(remoteScreenStreamsRef.current));
    }, [
        removeRemoteScreenStream
    ]);
    const looksLikeScreenTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((track)=>{
        if (!track) return false;
        const settings = track.getSettings?.() ?? {};
        const label = (track.label || '').toLowerCase();
        return settings.displaySurface !== undefined || label.includes('screen') || label.includes('window') || label.includes('display') || label.includes('monitor') || label.includes('share') || track.contentHint === 'detail';
    }, []);
    const updateRemoteVideoFlag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId)=>{
        setRemoteParticipants((prev)=>{
            let changed = false;
            const next = prev.map((participant)=>{
                if (participant.userId !== peerId) {
                    return participant;
                }
                const stream = remoteStreamsRef.current.get(peerId);
                const hasCamera = stream?.getTracks().some((track)=>track.kind === 'video' && track.readyState !== 'ended' && !looksLikeScreenTrack(track)) ?? false;
                const nextVideoOff = !hasCamera;
                if (participant.isVideoOff !== nextVideoOff) {
                    changed = true;
                    return {
                        ...participant,
                        isVideoOff: nextVideoOff
                    };
                }
                return participant;
            });
            return changed ? next : prev;
        });
    }, [
        looksLikeScreenTrack
    ]);
    const removeTrackFromRemoteStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId, trackId)=>{
        const existing = remoteStreamsRef.current.get(peerId);
        if (!existing) return;
        const remaining = existing.getTracks().filter((t)=>t.id !== trackId);
        if (remaining.length === 0) {
            remoteStreamsRef.current.delete(peerId);
        } else {
            remoteStreamsRef.current.set(peerId, new MediaStream(remaining));
        }
        setRemoteStreams(new Map(remoteStreamsRef.current));
        updateRemoteVideoFlag(peerId);
    }, [
        updateRemoteVideoFlag
    ]);
    const removeRemoteStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId)=>{
        remoteStreamsRef.current.delete(peerId);
        setRemoteStreams((prev)=>{
            if (!prev.has(peerId)) {
                return prev;
            }
            const next = new Map(prev);
            next.delete(peerId);
            return next;
        });
        remoteScreenStreamsRef.current.delete(peerId);
        setRemoteScreenStreams((prev)=>{
            if (!prev.has(peerId)) {
                return prev;
            }
            const next = new Map(prev);
            next.delete(peerId);
            return next;
        });
        updateRemoteVideoFlag(peerId);
    }, [
        updateRemoteVideoFlag
    ]);
    const teardownPeer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId)=>{
        const existing = peerConnectionsRef.current.get(peerId);
        if (existing) {
            try {
                existing.ontrack = null;
                existing.onicecandidate = null;
                existing.onconnectionstatechange = null;
                existing.oniceconnectionstatechange = null;
                existing.close();
            } catch  {
            // ignore close errors
            }
        }
        peerConnectionsRef.current.delete(peerId);
        pendingIceRef.current.delete(peerId);
        removeRemoteStream(peerId);
        removeRemoteScreenStream(peerId);
    }, [
        removeRemoteScreenStream,
        removeRemoteStream
    ]);
    const teardownAllPeers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        peerConnectionsRef.current.forEach((_, id)=>teardownPeer(id));
        peerConnectionsRef.current.clear();
        pendingIceRef.current.clear();
        remoteStreamsRef.current.clear();
        setRemoteStreams(new Map());
        remoteScreenStreamsRef.current.clear();
        setRemoteScreenStreams(new Map());
    }, [
        teardownPeer
    ]);
    const addLocalTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peer)=>{
        const streams = [];
        if (mediaStream) {
            streams.push(mediaStream);
        }
        if (screenShareStreamRef.current && isScreenShareStreaming) {
            streams.push(screenShareStreamRef.current);
        }
        if (streams.length === 0) {
            return;
        }
        peer.getSenders().forEach((sender)=>{
            if (sender.track && sender.track.readyState === 'ended') {
                try {
                    peer.removeTrack(sender);
                } catch  {
                // ignore remove errors
                }
            }
        });
        const senders = peer.getSenders();
        streams.forEach((stream)=>{
            stream.getTracks().forEach((track)=>{
                const alreadySending = senders.some((sender)=>sender.track?.id === track.id);
                if (!alreadySending) {
                    peer.addTrack(track, stream);
                }
            });
        });
    }, [
        isScreenShareStreaming,
        mediaStream
    ]);
    const syncLocalTracksToPeers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        peerConnectionsRef.current.forEach((peer)=>addLocalTracks(peer));
    }, [
        addLocalTracks
    ]);
    const flushPendingCandidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId, peer)=>{
        const pending = pendingIceRef.current.get(peerId);
        if (!pending?.length) {
            return;
        }
        pending.forEach(async (candidate)=>{
            try {
                await peer.addIceCandidate(candidate);
            } catch (error) {
                console.warn('Failed to apply queued ICE candidate', error);
            }
        });
        pendingIceRef.current.delete(peerId);
    }, []);
    const ensurePeerConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((peerId)=>{
        if (!peerId || peerId === selfClientId || !mediaStream) {
            return null;
        }
        const existing = peerConnectionsRef.current.get(peerId);
        if (existing) {
            return existing;
        }
        const peer = new RTCPeerConnection({
            iceServers: ICE_SERVERS
        });
        peerConnectionsRef.current.set(peerId, peer);
        addLocalTracks(peer);
        peer.onicecandidate = (event)=>{
            if (event.candidate && signalingChannelRef.current) {
                const candidatePayload = event.candidate.toJSON ? event.candidate.toJSON() : event.candidate;
                signalingChannelRef.current.publish('signal', {
                    type: 'ice',
                    from: selfClientId,
                    to: peerId,
                    candidate: candidatePayload
                }).catch((error)=>console.warn('Failed to publish ICE candidate', error));
            }
        };
        peer.ontrack = (event)=>{
            const [streamFromEvent] = event.streams;
            let targetStream = streamFromEvent ?? remoteStreamsRef.current.get(peerId) ?? new MediaStream();
            if (event.track && !targetStream.getTracks().some((t)=>t.id === event.track.id)) {
                targetStream.addTrack(event.track);
            }
            addRemoteStream(peerId, targetStream);
            const looksLikeScreen = looksLikeScreenTrack(event.track);
            const presence = remoteParticipantsRef.current.find((p)=>p.userId === peerId);
            const flaggedAsSharing = presence?.isScreenSharing;
            if ((looksLikeScreen || flaggedAsSharing) && event.track.kind === 'video') {
                addRemoteScreenStream(peerId, event.track);
            }
            if (event.track) {
                const handleEnded = ()=>removeTrackFromRemoteStream(peerId, event.track.id);
                event.track.addEventListener('ended', handleEnded);
            }
            if (event.track.kind === 'video' && !looksLikeScreen) {
                updateRemoteVideoFlag(peerId);
            }
        };
        const cleanupIfBroken = ()=>{
            const state = peer.connectionState || peer.iceConnectionState;
            if (state === 'failed' || state === 'closed' || state === 'disconnected') {
                teardownPeer(peerId);
            }
        };
        peer.onconnectionstatechange = cleanupIfBroken;
        peer.oniceconnectionstatechange = cleanupIfBroken;
        return peer;
    }, [
        addLocalTracks,
        addRemoteScreenStream,
        addRemoteStream,
        looksLikeScreenTrack,
        mediaStream,
        removeTrackFromRemoteStream,
        selfClientId,
        teardownPeer,
        updateRemoteVideoFlag
    ]);
    const startOffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (peerId)=>{
        const peer = ensurePeerConnection(peerId);
        if (!peer) {
            return;
        }
        try {
            const offer = await peer.createOffer();
            await peer.setLocalDescription(offer);
            await signalingChannelRef.current?.publish('signal', {
                type: 'offer',
                from: selfClientId,
                to: peerId,
                sdp: offer
            });
        } catch (error) {
            console.warn('Failed to start offer', error);
        }
    }, [
        ensurePeerConnection,
        selfClientId
    ]);
    const handleSignalMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (message)=>{
        const payload = message.data;
        if (!payload || payload.from === selfClientId) {
            return;
        }
        if (payload.to && payload.to !== selfClientId) {
            return;
        }
        const peerId = payload.from;
        const peer = ensurePeerConnection(peerId);
        if (!peer) {
            return;
        }
        try {
            if (payload.type === 'offer' && payload.sdp) {
                await peer.setRemoteDescription(new RTCSessionDescription(payload.sdp));
                const answer = await peer.createAnswer();
                await peer.setLocalDescription(answer);
                await signalingChannelRef.current?.publish('signal', {
                    type: 'answer',
                    from: selfClientId,
                    to: peerId,
                    sdp: answer
                });
                flushPendingCandidates(peerId, peer);
            } else if (payload.type === 'answer' && payload.sdp) {
                if (!peer.currentRemoteDescription) {
                    await peer.setRemoteDescription(new RTCSessionDescription(payload.sdp));
                }
                flushPendingCandidates(peerId, peer);
            } else if (payload.type === 'ice' && payload.candidate) {
                if (peer.remoteDescription) {
                    await peer.addIceCandidate(payload.candidate);
                } else {
                    const existing = pendingIceRef.current.get(peerId) ?? [];
                    existing.push(payload.candidate);
                    pendingIceRef.current.set(peerId, existing);
                }
            }
        } catch (error) {
            console.warn('Error handling signaling payload', error);
        }
    }, [
        ensurePeerConnection,
        flushPendingCandidates,
        selfClientId
    ]);
    const cleanupSignaling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const channel = signalingChannelRef.current;
        if (channel) {
            try {
                channel.presence.leave();
            } catch  {
            // ignore
            }
            try {
                channel.unsubscribe('signal', handleSignalMessage);
                channel.presence.unsubscribe();
                channel.detach();
            } catch  {
            // ignore detach errors
            }
            signalingChannelRef.current = null;
        }
        if (signalingClientRef.current) {
            try {
                signalingClientRef.current.close();
            } catch  {
            // ignore
            }
            signalingClientRef.current = null;
        }
        teardownAllPeers();
    }, [
        handleSignalMessage,
        teardownAllPeers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        syncLocalTracksToPeers();
    }, [
        mediaStream,
        syncLocalTracksToPeers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        syncLocalTracksToPeers();
    }, [
        isScreenShareStreaming,
        syncLocalTracksToPeers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (signalingError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(signalingError);
        }
    }, [
        signalingError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const activeIds = new Set(remoteParticipants.map((participant)=>participant.userId));
        remoteStreamsRef.current.forEach((_, peerId)=>{
            if (!activeIds.has(peerId)) {
                teardownPeer(peerId);
            }
        });
    }, [
        remoteParticipants,
        teardownPeer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!readyForWebRTC || !selfClientId) {
            cleanupSignaling();
            return;
        }
        if (!ABLY_KEY) {
            setSignalingError('Missing Ably configuration for video signaling.');
            return;
        }
        setSignalingError(null);
        const realtime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ably$2f$build$2f$ably$2d$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Realtime"]({
            key: ABLY_KEY,
            clientId: selfClientId
        });
        signalingClientRef.current = realtime;
        const channelName = `video-webrtc-${roomId}`;
        const channel = realtime.channels.get(channelName);
        signalingChannelRef.current = channel;
        const presenceHandler = async (presence)=>{
            const peerId = presence.clientId || presence.data?.userId;
            if (!peerId || peerId === selfClientId) {
                return;
            }
            ensurePeerConnection(peerId);
            if (selfClientId < peerId) {
                await startOffer(peerId);
            }
        };
        const init = async ()=>{
            try {
                await channel.attach();
                await channel.presence.enter({
                    userId: selfClientId
                });
                const members = await channel.presence.get();
                for (const member of members){
                    await presenceHandler(member);
                }
            } catch (error) {
                console.warn('Failed to start signaling', error);
                setSignalingError('Unable to connect to signaling. Check your connection.');
            }
        };
        channel.subscribe('signal', handleSignalMessage);
        channel.presence.subscribe('enter', presenceHandler);
        channel.presence.subscribe('leave', (presence)=>{
            const peerId = presence.clientId || presence.data?.userId;
            if (peerId) {
                teardownPeer(peerId);
            }
        });
        void init();
        return ()=>{
            cleanupSignaling();
        };
    }, [
        cleanupSignaling,
        handleSignalMessage,
        readyForWebRTC,
        roomId,
        selfClientId,
        startOffer,
        teardownPeer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        let cleanup;
        let detailsRef = null;
        const fallbackToPrimary = ()=>{
            if (!mounted) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const width = undefined;
            const height = undefined;
        };
        const updateScreens = (screens)=>{
            if (!mounted || !screens) {
                return;
            }
            const normalized = Array.from(screens).map((screen, index)=>{
                const id = screen.id ?? `monitor-${index}`;
                const rawLabel = screen.label?.trim();
                const label = rawLabel && rawLabel.length > 0 ? rawLabel : `Monitor ${index + 1}${screen.isPrimary ? ' (Primary)' : ''}`;
                const width = screen.width ?? (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined);
                const height = screen.height ?? (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined);
                return {
                    id,
                    label,
                    isPrimary: Boolean(screen.isPrimary) || index === 0,
                    size: width && height ? `${width}×${height}` : 'Unknown'
                };
            });
            if (normalized.length === 0) {
                fallbackToPrimary();
                return;
            }
            setAvailableScreens(normalized);
        };
        const init = async ()=>{
            if (typeof navigator === 'undefined') {
                fallbackToPrimary();
                return;
            }
            if (typeof navigator.getScreenDetails !== 'function') {
                fallbackToPrimary();
                return;
            }
            try {
                detailsRef = await navigator.getScreenDetails();
                updateScreens(detailsRef.screens);
                const handleChange = ()=>updateScreens(detailsRef?.screens);
                detailsRef?.addEventListener?.('screenschange', handleChange);
                detailsRef?.addEventListener?.('currentscreenchange', handleChange);
                cleanup = ()=>{
                    detailsRef?.removeEventListener?.('screenschange', handleChange);
                    detailsRef?.removeEventListener?.('currentscreenchange', handleChange);
                };
            } catch (error) {
                console.warn('Unable to access multi-monitor details:', error);
                fallbackToPrimary();
            }
        };
        void init();
        return ()=>{
            mounted = false;
            cleanup?.();
        };
    }, []);
    const selectedScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (screenShareTarget === 'auto' || screenShareTarget === 'all-monitors') {
            return null;
        }
        return availableScreens.find((screen)=>screen.id === screenShareTarget) ?? null;
    }, [
        availableScreens,
        screenShareTarget
    ]);
    const multipleScreensDetected = availableScreens.length > 1;
    const monitorSelectionLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (screenShareTarget === 'all-monitors') {
            return 'All Monitors';
        }
        if (selectedScreen) {
            return selectedScreen.label;
        }
        if (multipleScreensDetected) {
            return 'Auto-select Monitor';
        }
        return 'Primary Monitor';
    }, [
        multipleScreensDetected,
        selectedScreen,
        screenShareTarget
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (screenShareTarget !== 'auto' && screenShareTarget !== 'all-monitors' && !availableScreens.some((screen)=>screen.id === screenShareTarget)) {
            setScreenShareTarget('auto');
        }
    }, [
        availableScreens,
        screenShareTarget
    ]);
    const effectiveScreenShareActive = isScreenSharing;
    const visibleScreenShareQuality = effectiveScreenShareActive ? screenShareQuality : null;
    const visibleScreenShareSource = effectiveScreenShareActive ? screenShareSourceLabel : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = screenShareVideoRef.current;
        const stream = screenShareStreamRef.current;
        if (!element) {
            return;
        }
        if (!isScreenShareStreaming || screenShareDemoMode || !stream) {
            if (element.srcObject) {
                element.srcObject = null;
            }
            return;
        }
        element.srcObject = stream;
        const play = async ()=>{
            try {
                await element.play();
            } catch (error) {
                console.warn('Unable to start screen share preview', error);
            }
        };
        void play();
        return ()=>{
            if (element.srcObject === stream) {
                element.srcObject = null;
            }
        };
    }, [
        isScreenShareStreaming,
        screenShareDemoMode
    ]);
    const loadPresence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const response = await fetch(`${VIDEO_API_BASE}/${encodeURIComponent(roomId)}/presence`, {
                headers: VIDEO_GET_HEADERS
            });
            if (!response.ok) {
                throw new Error(`status ${response.status}`);
            }
            const payload = await response.json().catch(()=>null);
            const records = Array.isArray(payload?.participants) ? payload.participants : [];
            setRemoteParticipants(records.map((record)=>({
                    ...record,
                    displayName: record.displayName ?? null,
                    avatar: record.avatar ?? null
                })));
        } catch (error) {
            console.warn('Failed to refresh video presence', error);
        }
    }, [
        roomId
    ]);
    const announcePresence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (overrides = {})=>{
        if (!currentUserId) {
            return;
        }
        const nextMuted = overrides.isMuted ?? muteStateRef.current;
        const nextVideoOff = overrides.isVideoOff ?? videoStateRef.current;
        const nextScreenShare = overrides.isScreenSharing ?? screenShareStateRef.current;
        const resolvedName = currentUser?.name && currentUser.name.trim() || currentUser?.username && currentUser.username.trim() || `Guest ${currentUserId.slice(0, 6)}`;
        const resolvedAvatar = currentUser?.avatar || (currentUser?.ablyClientId ? avatarForId(currentUser.ablyClientId) : avatarForId(currentUserId));
        try {
            const response = await fetch(`${VIDEO_API_BASE}/${encodeURIComponent(roomId)}/presence`, {
                method: 'POST',
                headers: VIDEO_AUTH_HEADERS,
                body: JSON.stringify({
                    userId: currentUserId,
                    displayName: resolvedName,
                    avatar: resolvedAvatar,
                    isMuted: nextMuted,
                    isVideoOff: nextVideoOff,
                    isScreenSharing: nextScreenShare
                })
            });
            if (!response.ok) {
                throw new Error(`status ${response.status}`);
            }
            const payload = await response.json().catch(()=>null);
            if (payload?.participant) {
                const participant = payload.participant;
                setRemoteParticipants((prev)=>{
                    const map = new Map(prev.map((participant)=>[
                            participant.userId,
                            participant
                        ]));
                    map.set(participant.userId, {
                        ...participant,
                        displayName: participant.displayName ?? null,
                        avatar: participant.avatar ?? null
                    });
                    return Array.from(map.values());
                });
            }
        } catch (error) {
            console.warn('Failed to update video presence', error);
        }
    }, [
        currentUser?.ablyClientId,
        currentUser?.avatar,
        currentUser?.name,
        currentUser?.username,
        currentUserId,
        roomId
    ]);
    const removePresence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId)=>{
        if (!userId) {
            return;
        }
        try {
            await fetch(`${VIDEO_API_BASE}/${encodeURIComponent(roomId)}/presence/${encodeURIComponent(userId)}`, {
                method: 'DELETE',
                headers: VIDEO_GET_HEADERS
            });
        } catch (error) {
            console.warn('Failed to remove video presence', error);
        }
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentUserId) {
            setRemoteParticipants([]);
            return;
        }
        void announcePresence({
            isMuted,
            isVideoOff,
            isScreenSharing: isScreenShareStreaming
        });
    }, [
        announcePresence,
        currentUserId,
        isMuted,
        isVideoOff,
        isScreenShareStreaming
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void loadPresence();
        if (presencePollRef.current) {
            clearInterval(presencePollRef.current);
        }
        presencePollRef.current = setInterval(()=>{
            void loadPresence();
        }, 7000);
        return ()=>{
            if (presencePollRef.current) {
                clearInterval(presencePollRef.current);
                presencePollRef.current = null;
            }
        };
    }, [
        loadPresence
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentUserId) {
            if (presenceHeartbeatRef.current) {
                clearInterval(presenceHeartbeatRef.current);
                presenceHeartbeatRef.current = null;
            }
            return;
        }
        void announcePresence();
        if (presenceHeartbeatRef.current) {
            clearInterval(presenceHeartbeatRef.current);
        }
        presenceHeartbeatRef.current = setInterval(()=>{
            void announcePresence();
        }, 20000);
        return ()=>{
            if (presenceHeartbeatRef.current) {
                clearInterval(presenceHeartbeatRef.current);
                presenceHeartbeatRef.current = null;
            }
        };
    }, [
        announcePresence,
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const previousUserId = previousUserIdRef.current;
        if (previousUserId && previousUserId !== currentUserId) {
            void removePresence(previousUserId);
        }
        previousUserIdRef.current = currentUserId;
        return ()=>{
            void removePresence(previousUserIdRef.current ?? currentUserId);
        };
    }, [
        currentUserId,
        removePresence
    ]);
    const activateCameraConflictFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMediaStream(null);
        setSharedCameraMode(false);
        setCameraConflictActive(true);
        setAutoDetectedConflict(true);
        setCameraAutoRetryEnabled(false);
        cameraManualStopRef.current = false;
        if (cameraRetryTimeoutRef.current) {
            clearTimeout(cameraRetryTimeoutRef.current);
            cameraRetryTimeoutRef.current = null;
        }
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach((track)=>track.stop());
            mediaStreamRef.current = null;
        }
        if (!demoMode) {
            setDemoMode(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('📸 Camera is already in use (Google Meet / Zoom). Showing demo preview so their call stays live.');
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('📸 Camera still controlled by another app. Keeping the demo preview active.');
        }
    }, [
        demoMode
    ]);
    const scheduleCameraRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!cameraAutoRetryEnabled) {
            return;
        }
        if (cameraRetryTimeoutRef.current) {
            return;
        }
        cameraRetryTimeoutRef.current = setTimeout(()=>{
            setCameraRetryToken((token)=>token + 1);
            cameraRetryTimeoutRef.current = null;
        }, 5000);
    }, [
        cameraAutoRetryEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (cameraRetryTimeoutRef.current) {
                clearTimeout(cameraRetryTimeoutRef.current);
                cameraRetryTimeoutRef.current = null;
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoSafeReason) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Camera demo mode auto-enabled for presentations (safe start).', {
            duration: 5000
        });
    }, [
        autoSafeReason
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }, [
        cameraSafeStart
    ]);
    const participants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nowIso = new Date().toISOString();
        const resolvedCurrentId = currentUser?.id ?? currentUser?.ablyClientId ?? currentUserId ?? 'guest';
        const localPresence = remoteParticipants.find((presence)=>presence.userId === resolvedCurrentId) ?? null;
        const displayName = currentUser?.name && currentUser.name.trim() || currentUser?.username && currentUser.username.trim() || 'You';
        const avatarSource = currentUser?.avatar || (currentUser?.ablyClientId ? avatarForId(currentUser.ablyClientId) : avatarForId(resolvedCurrentId));
        const joinedAt = localPresence?.joinedAt ?? nowIso;
        const lastSeenAt = localPresence?.lastSeenAt ?? nowIso;
        const selfParticipant = {
            userId: resolvedCurrentId,
            name: displayName,
            avatar: avatarSource,
            isMuted,
            isVideoOff,
            isSpeaking: !isMuted && !isVideoOff && !demoMode,
            isScreenSharing: effectiveScreenShareActive,
            isSelf: true,
            joinedAt,
            lastSeenAt
        };
        const others = remoteParticipants.filter((presence)=>presence.userId !== resolvedCurrentId).map((presence)=>{
            const referencedUser = allUsers.get(presence.userId) ?? null;
            const resolvedName = presence.displayName && presence.displayName.trim() || referencedUser?.name || referencedUser?.username || `Friend ${presence.userId.slice(0, 6)}`;
            const resolvedAvatar = presence.avatar || referencedUser?.avatar || avatarForId(referencedUser?.ablyClientId ?? presence.userId);
            return {
                userId: presence.userId,
                name: resolvedName,
                avatar: resolvedAvatar,
                isMuted: presence.isMuted,
                isVideoOff: presence.isVideoOff,
                isSpeaking: !presence.isMuted && !presence.isVideoOff,
                isScreenSharing: presence.isScreenSharing,
                isSelf: false,
                joinedAt: presence.joinedAt,
                lastSeenAt: presence.lastSeenAt
            };
        });
        return [
            selfParticipant,
            ...others
        ].sort((a, b)=>new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime());
    }, [
        allUsers,
        currentUser?.ablyClientId,
        currentUser?.avatar,
        currentUser?.id,
        currentUser?.name,
        currentUser?.username,
        currentUserId,
        demoMode,
        isMuted,
        effectiveScreenShareActive,
        isVideoOff,
        remoteParticipants
    ]);
    const remoteScreenSharerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const [streamSharerId] = Array.from(remoteScreenStreams.keys());
        if (streamSharerId) {
            return streamSharerId;
        }
        const announcedSharer = participants.find((participant)=>!participant.isSelf && participant.isScreenSharing);
        return announcedSharer?.userId ?? null;
    }, [
        participants,
        remoteScreenStreams
    ]);
    const activeScreenSharerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (remoteScreenSharerId) {
            return remoteScreenSharerId;
        }
        if (effectiveScreenShareActive && currentUserId) {
            return currentUserId;
        }
        return null;
    }, [
        currentUserId,
        effectiveScreenShareActive,
        remoteScreenSharerId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeScreenSharerId) {
            if (viewMode !== 'speaker') {
                setAutoSpeakerMode(true);
                setViewMode('speaker');
            }
        } else {
            if (autoSpeakerMode && viewMode !== 'grid') {
                setViewMode('grid');
            }
            if (autoSpeakerMode) {
                setAutoSpeakerMode(false);
            }
        }
    }, [
        activeScreenSharerId,
        autoSpeakerMode,
        viewMode
    ]);
    const screenShareParticipant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>activeScreenSharerId ? participants.find((participant)=>participant.userId === activeScreenSharerId) ?? null : null, [
        participants,
        activeScreenSharerId
    ]);
    const remoteScreenShareStream = screenShareParticipant?.isSelf ? null : screenShareParticipant ? remoteScreenStreams.get(screenShareParticipant.userId) ?? null : null;
    const fallbackScreenShareStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!screenShareParticipant || screenShareParticipant.isSelf) {
            return null;
        }
        return remoteStreams.get(screenShareParticipant.userId) ?? null;
    }, [
        remoteStreams,
        screenShareParticipant
    ]);
    const resolvedRemoteScreenShareStream = remoteScreenShareStream ?? fallbackScreenShareStream;
    const remoteSharerCameraStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!screenShareParticipant || screenShareParticipant.isSelf) {
            return null;
        }
        const combined = remoteStreams.get(screenShareParticipant.userId);
        if (!combined) return null;
        const videoTracks = combined.getTracks().filter((track)=>track.kind === 'video' && !looksLikeScreenTrack(track));
        if (videoTracks.length === 0) {
            return null;
        }
        return new MediaStream(videoTracks);
    }, [
        looksLikeScreenTrack,
        remoteStreams,
        screenShareParticipant
    ]);
    const remoteSharerAudioStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!screenShareParticipant || screenShareParticipant.isSelf) {
            return null;
        }
        const combined = remoteStreams.get(screenShareParticipant.userId);
        if (!combined) return null;
        const audioTracks = combined.getAudioTracks();
        if (audioTracks.length === 0) {
            return null;
        }
        return new MediaStream(audioTracks);
    }, [
        remoteStreams,
        screenShareParticipant
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = selfScreenSharePreviewRef.current;
        const stream = screenShareStreamRef.current;
        const showingRemoteStage = Boolean(screenShareParticipant && !screenShareParticipant.isSelf);
        if (!node) {
            return;
        }
        if (showingRemoteStage && effectiveScreenShareActive && stream && isScreenShareStreaming) {
            if (node.srcObject !== stream) {
                node.srcObject = stream;
            }
            node.play().catch((error)=>console.error('Error playing local screen share preview while watching remote stage:', error));
        } else if (node.srcObject) {
            node.srcObject = null;
        }
    }, [
        effectiveScreenShareActive,
        isScreenShareStreaming,
        screenShareParticipant
    ]);
    const gridParticipants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!screenShareParticipant) {
            return participants;
        }
        return participants.filter((participant)=>{
            if (participant.userId !== screenShareParticipant.userId) {
                return true;
            }
            return screenShareParticipant.isSelf;
        });
    }, [
        participants,
        screenShareParticipant
    ]);
    const participantCount = participants.length;
    const isSoloParticipant = gridParticipants.length === 1 && gridParticipants[0]?.isSelf;
    // Demo mode canvas animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!demoMode || !demoCanvasRef.current) return;
        const canvas = demoCanvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationId;
        let hue = 0;
        const animate = ()=>{
            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, `hsl(${hue}, 70%, 50%)`);
            gradient.addColorStop(0.5, `hsl(${(hue + 60) % 360}, 70%, 60%)`);
            gradient.addColorStop(1, `hsl(${(hue + 120) % 360}, 70%, 50%)`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Add some animated circles
            const time = Date.now() / 1000;
            for(let i = 0; i < 5; i++){
                const x = canvas.width / 2 + Math.sin(time + i) * 100;
                const y = canvas.height / 2 + Math.cos(time + i * 1.5) * 80;
                const radius = 20 + Math.sin(time * 2 + i) * 10;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.1})`;
                ctx.fill();
            }
            // Add "DEMO MODE" text
            ctx.font = 'bold 24px system-ui';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillText('🎥 DEMO MODE', canvas.width / 2, canvas.height / 2);
            ctx.font = '14px system-ui';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fillText('Simulated Camera Feed', canvas.width / 2, canvas.height / 2 + 35);
            hue = (hue + 0.5) % 360;
            animationId = requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            cancelAnimationFrame(animationId);
        };
    }, [
        demoMode
    ]);
    // Demo screen share animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!screenShareDemoMode || !isScreenSharing) return;
        const canvas = screenShareDemoCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = 1920;
        canvas.height = 1080;
        let hue = 120; // Start with green
        let animationId;
        const animate = ()=>{
            // Create animated gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, `hsl(${hue}, 60%, 40%)`);
            gradient.addColorStop(0.5, `hsl(${(hue + 40) % 360}, 60%, 50%)`);
            gradient.addColorStop(1, `hsl(${(hue + 80) % 360}, 60%, 40%)`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Add grid pattern
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 2;
            const gridSize = 100;
            for(let x = 0; x < canvas.width; x += gridSize){
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for(let y = 0; y < canvas.height; y += gridSize){
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
            // Add animated squares
            const time = Date.now() / 1000;
            for(let i = 0; i < 8; i++){
                const x = canvas.width / 4 + Math.sin(time * 0.5 + i) * 200;
                const y = canvas.height / 4 + Math.cos(time * 0.3 + i * 1.5) * 150;
                const size = 40 + Math.sin(time * 2 + i) * 20;
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(time + i);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`;
                ctx.fillRect(-size / 2, -size / 2, size, size);
                ctx.restore();
            }
            // Add "DEMO SCREEN SHARE" text
            ctx.font = 'bold 48px system-ui';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.fillText('🖥️ DEMO SCREEN SHARE', canvas.width / 2, canvas.height / 2 - 30);
            ctx.font = '24px system-ui';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillText('Simulated Screen - Safe for Presentations', canvas.width / 2, canvas.height / 2 + 30);
            ctx.font = '18px system-ui';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fillText('No conflicts with Zoom, Google Meet, Teams, or FaceTime', canvas.width / 2, canvas.height / 2 + 70);
            hue = (hue + 0.3) % 360;
            animationId = requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            cancelAnimationFrame(animationId);
        };
    }, [
        screenShareDemoMode,
        isScreenSharing
    ]);
    // Initialize webcam and microphone
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        const initMediaDevices = async ()=>{
            if (demoMode) {
                console.log('Demo mode enabled - skipping camera access');
                setSharedCameraMode(false);
                return;
            }
            if (callStatus === 'connected' && !isVideoOff) {
                try {
                    const { stream, sharedCameraDetected } = await requestCameraStream(cameraFacingMode);
                    if (!mounted) {
                        stream.getTracks().forEach((track)=>track.stop());
                        return;
                    }
                    const [videoTrack] = stream.getVideoTracks();
                    if (!videoTrack) {
                        stream.getTracks().forEach((track)=>track.stop());
                        throw new Error('Camera stream did not include a video track');
                    }
                    const settings = videoTrack.getSettings();
                    const resolvedQuality = determineVideoQualityLabel(settings.width);
                    console.log(`Camera resolution: ${settings.width}x${settings.height} @ ${settings.frameRate}fps`);
                    cameraManualStopRef.current = false;
                    if (cameraRetryTimeoutRef.current) {
                        clearTimeout(cameraRetryTimeoutRef.current);
                        cameraRetryTimeoutRef.current = null;
                    }
                    setCameraConflictActive(false);
                    setAutoDetectedConflict(false);
                    setCameraAutoRetryEnabled(true);
                    setSharedCameraMode(sharedCameraDetected);
                    setVideoQuality(resolvedQuality);
                    setMediaStream(stream);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(cameraConnectedToastCopy(resolvedQuality));
                    if (sharedCameraDetected) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Compatibility camera mode enabled so Google Meet, Zoom, or Teams keep your video connected.');
                    }
                    if (localVideoRef.current) {
                        localVideoRef.current.srcObject = stream;
                        localVideoRef.current.play().catch((err)=>{
                            console.error('Error playing video:', err);
                        });
                    }
                    videoTrack.onended = ()=>{
                        if (cameraManualStopRef.current) {
                            cameraManualStopRef.current = false;
                            return;
                        }
                        console.log('Camera track ended unexpectedly – likely taken by another app.');
                        activateCameraConflictFallback();
                    };
                } catch (error) {
                    if (isCameraConflictError(error)) {
                        activateCameraConflictFallback();
                        return;
                    }
                    console.error('Error accessing media devices:', error);
                    setCameraError('Unable to access camera/microphone');
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Unable to access camera/microphone. Please check permissions.');
                }
            } else if (isVideoOff && mediaStreamRef.current) {
                setSharedCameraMode(false);
                cameraManualStopRef.current = true;
                mediaStreamRef.current.getVideoTracks().forEach((track)=>track.stop());
            }
        };
        initMediaDevices();
        return ()=>{
            mounted = false;
            if (mediaStreamRef.current) {
                cameraManualStopRef.current = true;
                mediaStreamRef.current.getTracks().forEach((track)=>track.stop());
                setMediaStream(null);
                setSharedCameraMode(false);
            }
            if (screenShareStreamRef.current) {
                screenShareStreamRef.current.getTracks().forEach((track)=>track.stop());
                screenShareStreamRef.current = null;
                setIsScreenShareStreaming(false);
                setIsScreenSharing(false);
                setScreenShareQuality(null);
                setScreenShareSourceLabel(null);
            }
        };
    }, [
        callStatus,
        isVideoOff,
        demoMode,
        activateCameraConflictFallback,
        cameraRetryToken,
        cameraFacingMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mediaStreamRef.current = mediaStream;
        if (!mediaStream) {
            setSharedCameraMode(false);
        }
    }, [
        mediaStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cameraConflictActive) {
            scheduleCameraRetry();
        }
    }, [
        cameraConflictActive,
        scheduleCameraRetry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mediaStream || isVideoOff || demoMode) {
            return;
        }
        const video = localVideoRef.current;
        const canvas = cameraSnapshotCanvasRef.current;
        if (!video || !canvas) {
            return;
        }
        const captureFrame = ()=>{
            if (!video || !canvas) {
                return;
            }
            if (video.readyState < 2) {
                return;
            }
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                return;
            }
            const { videoWidth, videoHeight } = video;
            if (!videoWidth || !videoHeight) {
                return;
            }
            canvas.width = videoWidth;
            canvas.height = videoHeight;
            ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
            const frame = canvas.toDataURL('image/jpeg', 0.7);
            setCameraFallbackFrame(frame);
        };
        const interval = setInterval(captureFrame, 2000);
        captureFrame();
        return ()=>{
            clearInterval(interval);
        };
    }, [
        mediaStream,
        isVideoOff,
        demoMode
    ]);
    // Sync video element with mediaStream
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localVideoRef.current && mediaStream) {
            localVideoRef.current.srcObject = mediaStream;
            localVideoRef.current.play().catch((err)=>{
                console.error('Error playing video:', err);
            });
        }
    }, [
        mediaStream
    ]);
    // Update audio track when mute state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mediaStream) {
            mediaStream.getAudioTracks().forEach((track)=>{
                track.enabled = !isMuted;
            });
        }
    }, [
        isMuted,
        mediaStream
    ]);
    // Update video track when video state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mediaStream) {
            mediaStream.getVideoTracks().forEach((track)=>{
                track.enabled = !isVideoOff;
            });
        }
    }, [
        isVideoOff,
        mediaStream
    ]);
    // Simulate call connection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (callStatus === 'connecting') {
            const timer = setTimeout(()=>{
                setCallStatus('connected');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Call connected! 📞');
            }, 2000);
            return ()=>clearTimeout(timer);
        }
    }, [
        callStatus
    ]);
    // Call duration timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (callStatus === 'connected') {
            const interval = setInterval(()=>{
                setCallDuration((prev)=>prev + 1);
            }, 1000);
            return ()=>clearInterval(interval);
        }
    }, [
        callStatus
    ]);
    const formatDuration = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    const handleEndCall = ()=>{
        // Stop all media tracks
        if (mediaStream) {
            cameraManualStopRef.current = true;
            mediaStream.getTracks().forEach((track)=>track.stop());
            setSharedCameraMode(false);
        }
        if (screenShareStreamRef.current) {
            manualScreenShareStopRef.current = true;
            screenShareStreamRef.current.getTracks().forEach((track)=>track.stop());
            screenShareStreamRef.current = null;
        }
        cleanupSignaling();
        setIsScreenShareStreaming(false);
        setIsScreenSharing(false);
        setScreenShareQuality(null);
        setScreenShareSourceLabel(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Call ended');
        if (onEndCall) {
            onEndCall();
        }
    };
    const handleAcceptCall = ()=>{
        setCallStatus('connecting');
    };
    const handleDeclineCall = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Call declined');
        if (onEndCall) {
            onEndCall();
        }
    };
    const enableDemoMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((silent = false)=>{
        if (demoMode) {
            if (!silent) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Camera Demo Mode is already enabled.');
            }
            return;
        }
        if (mediaStream) {
            cameraManualStopRef.current = true;
            mediaStream.getTracks().forEach((track)=>track.stop());
            setMediaStream(null);
        }
        setSharedCameraMode(false);
        setCameraConflictActive(false);
        if (cameraRetryTimeoutRef.current) {
            clearTimeout(cameraRetryTimeoutRef.current);
            cameraRetryTimeoutRef.current = null;
        }
        setCameraAutoRetryEnabled(false);
        setDemoMode(true);
        if (!silent) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Camera Demo Mode enabled - safe for presentations! 🎬');
        }
    }, [
        demoMode,
        mediaStream
    ]);
    const handleResumeCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((silent = false)=>{
        if (cameraRetryTimeoutRef.current) {
            clearTimeout(cameraRetryTimeoutRef.current);
            cameraRetryTimeoutRef.current = null;
        }
        setCameraAutoRetryEnabled(true);
        setCameraConflictActive(false);
        setAutoDetectedConflict(false);
        setCameraError(null);
        setDemoMode(false);
        setSharedCameraMode(false);
        setCameraRetryToken((token)=>token + 1);
        if (!silent) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Attempting to reconnect your camera... 📷');
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (callStatus === 'connected' && demoMode) {
            handleResumeCamera(true);
        }
    }, [
        callStatus,
        demoMode,
        handleResumeCamera
    ]);
    const disableDemoMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((silent = false)=>{
        if (!demoMode) {
            if (!silent) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Camera Demo Mode is already off.');
            }
            return;
        }
        setDemoMode(false);
        handleResumeCamera(true);
        if (!silent) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Camera Demo Mode disabled - will use real camera 📷');
        }
    }, [
        demoMode,
        handleResumeCamera
    ]);
    const handleToggleMute = ()=>{
        setIsMuted(!isMuted);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(isMuted ? 'Microphone on' : 'Microphone muted');
    };
    const handleToggleVideo = ()=>{
        setIsVideoOff(!isVideoOff);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(isVideoOff ? 'Camera on' : 'Camera off');
    };
    const handleSelectScreenShareTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        setScreenShareTarget(target);
        if (target === 'all-monitors') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Next screen share will prompt you to share every monitor on your workspace.');
        } else {
            const chosen = availableScreens.find((screen)=>screen.id === target);
            if (chosen) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`Next screen share will request "${chosen.label}" in the browser prompt.`);
            }
        }
        if (isScreenSharing && !screenShareDemoMode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Stop screen share and start again to switch monitors.');
        }
    }, [
        availableScreens,
        isScreenSharing,
        screenShareDemoMode
    ]);
    const handleToggleScreenShare = async ()=>{
        // Use demo mode for screen sharing if enabled
        if (screenShareDemoMode) {
            if (isScreenSharing) {
                setIsScreenShareStreaming(false);
                setIsScreenSharing(false);
                setScreenShareQuality(null);
                setScreenShareSourceLabel(null);
            } else {
                setIsScreenShareStreaming(false);
                setIsScreenSharing(true);
                setScreenShareQuality('Demo');
                setScreenShareSourceLabel('Demo Display');
            }
            if (!isScreenSharing) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🎬 Demo screen sharing started - safe for presentations!');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Demo screen share stopped');
            }
            return;
        }
        if (!screenShareSupported && !isIOSDevice) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(screenShareSupportHint ?? 'Screen sharing is not available on this device.');
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const displayMedia = navigator.mediaDevices?.getDisplayMedia || navigator.getDisplayMedia;
        if (typeof displayMedia !== 'function') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Safari blocked Screen Broadcast. In Settings > Safari > Advanced, enable Screen Sharing and allow Screen Recording, then retry.');
            return;
        }
        if (!isScreenSharing) {
            try {
                const shareTarget = screenShareTarget;
                if (isIOSDevice) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('iOS will open the Screen Broadcast picker. Choose Safari/MoveYSplash then tap Start Broadcast.');
                } else if (shareTarget === 'all-monitors') {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Select the "Entire screen" option to capture every monitor.');
                } else if (selectedScreen) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`When prompted, choose "${selectedScreen.label}" to share that monitor.`);
                } else if (multipleScreensDetected) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Pick the monitor you want to share in the browser prompt.');
                }
                console.log('Requesting screen share with multi-monitor support enabled...');
                const videoConstraints = isIOSDevice ? {
                    width: {
                        ideal: 1920
                    },
                    height: {
                        ideal: 1080
                    },
                    frameRate: {
                        ideal: 30
                    },
                    preferCurrentTab: true
                } : {
                    displaySurface: 'monitor',
                    width: {
                        ideal: 7680
                    },
                    height: {
                        ideal: 4320
                    },
                    frameRate: {
                        ideal: 30
                    },
                    cursor: 'always',
                    preferCurrentTab: false,
                    surfaceSwitching: 'include',
                    selfBrowserSurface: 'exclude'
                };
                if (!isIOSDevice) {
                    if (shareTarget === 'all-monitors') {
                        videoConstraints.logicalSurface = true;
                        videoConstraints.monitorTypeSurfaces = [
                            'monitor'
                        ];
                    } else if (selectedScreen) {
                        videoConstraints.monitorTypeSurfaces = [
                            'monitor'
                        ];
                    } else {
                        videoConstraints.monitorTypeSurfaces = [
                            'monitor',
                            'window',
                            'browser'
                        ];
                    }
                }
                const screenStream = await displayMedia.call(navigator.mediaDevices || navigator, {
                    video: videoConstraints,
                    audio: isIOSDevice ? false : {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    }
                });
                // Detect actual screen share resolution
                const [videoTrack] = screenStream.getVideoTracks();
                if (!videoTrack) {
                    throw new Error('Screen share stream did not include a video track');
                }
                const settings = videoTrack.getSettings();
                console.log(`Screen share resolution: ${settings.width}x${settings.height} @ ${settings.frameRate}fps`);
                // Determine quality label
                if (settings.width && settings.height) {
                    if (settings.width >= 7680) {
                        setScreenShareQuality('8K UHD');
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🖥️ 8K UHD Screen sharing started!');
                    } else if (settings.width >= 5120) {
                        setScreenShareQuality('5K UHD');
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🖥️ 5K UHD Screen sharing started!');
                    } else if (settings.width >= 3840) {
                        setScreenShareQuality('4K UHD');
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🖥️ 4K UHD Screen sharing started!');
                    } else if (settings.width >= 2560) {
                        setScreenShareQuality('QHD');
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🖥️ QHD Screen sharing started!');
                    } else if (settings.width >= 1920) {
                        setScreenShareQuality('Full HD');
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🖥️ Full HD Screen sharing started!');
                    } else {
                        setScreenShareQuality('HD');
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🖥️ Screen sharing started!');
                    }
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Screen sharing started');
                }
                setScreenShareSourceLabel(videoTrack.label || selectedScreen?.label || (shareTarget === 'all-monitors' ? 'All Monitors' : null) || (isIOSDevice ? 'iPhone/iPad Screen' : null));
                if (screenShareStreamRef.current) {
                    screenShareStreamRef.current.getTracks().forEach((track)=>track.stop());
                }
                manualScreenShareStopRef.current = false;
                screenShareStreamRef.current = screenStream;
                syncLocalTracksToPeers();
                setIsScreenShareStreaming(true);
                setIsScreenSharing(true);
                if (screenShareVideoRef.current) {
                    screenShareVideoRef.current.srcObject = screenStream;
                    screenShareVideoRef.current.play().catch((err)=>console.error('Error playing screen share video:', err));
                }
                // Stop screen sharing when user stops it from browser UI
                videoTrack.onended = ()=>{
                    screenShareStreamRef.current = null;
                    syncLocalTracksToPeers();
                    if (manualScreenShareStopRef.current) {
                        manualScreenShareStopRef.current = false;
                        setIsScreenShareStreaming(false);
                        setIsScreenSharing(false);
                        setScreenShareQuality(null);
                        setScreenShareSourceLabel(null);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Screen share stopped');
                        return;
                    }
                    console.log('Screen share ended unexpectedly - enabling demo mode fallback');
                    setAutoDetectedConflict(true);
                    setScreenShareDemoMode(true);
                    setIsScreenShareStreaming(false);
                    setIsScreenSharing(true);
                    setScreenShareQuality('Demo');
                    setScreenShareSourceLabel('Demo Display');
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🎬 Screen Share Demo Mode auto-enabled - another app took over your screen');
                };
            } catch (error) {
                console.error('Error sharing screen:', error);
                setScreenShareSourceLabel(null);
                // Check if error is due to screen already being shared (Zoom, Meet, Teams, etc.)
                const { name, message } = extractErrorInfo(error);
                const errorMessage = message.toLowerCase();
                const errorName = name.toLowerCase();
                if (errorMessage.includes('getdisplaymedia') && errorMessage.includes('not a function')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(screenShareSupportHint ?? 'Screen sharing is not supported on this browser.');
                    return;
                }
                if (errorName === 'notallowederror' || errorName === 'notreadableerror' || errorMessage.includes('permission denied') || errorMessage.includes('user cancelled')) {
                    if (isIOSDevice) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('iOS blocked the Screen Broadcast. Tap "Start Broadcast" and allow Screen Recording for Safari.');
                        return;
                    }
                    // Check if it&apos;s actually a conflict vs user cancellation
                    if (errorMessage.includes('already in use') || errorName === 'notreadableerror') {
                        console.log('Screen share conflict detected - another app may be sharing');
                        console.log('Auto-enabling screen share demo mode...');
                        setScreenShareDemoMode(true);
                        setAutoDetectedConflict(true);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('🎬 Screen Share Demo Mode auto-enabled - screen in use by another app!');
                        // Auto-start demo screen share
                        setIsScreenShareStreaming(false);
                        setIsScreenSharing(true);
                        setScreenShareQuality('Demo');
                        setScreenShareSourceLabel('Demo Display');
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Screen sharing cancelled');
                    }
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Unable to share screen. Please grant screen sharing permissions.');
                }
            }
        } else {
            if (screenShareStreamRef.current) {
                manualScreenShareStopRef.current = true;
                screenShareStreamRef.current.getTracks().forEach((track)=>track.stop());
                screenShareStreamRef.current = null;
            }
            setIsScreenShareStreaming(false);
            setIsScreenSharing(false);
            setScreenShareQuality(null);
            setScreenShareSourceLabel(null);
        }
    };
    const handleToggleDemoMode = ()=>{
        if (demoMode) {
            disableDemoMode();
        } else {
            enableDemoMode();
        }
    };
    const handleToggleScreenShareDemoMode = ()=>{
        const newMode = !screenShareDemoMode;
        setScreenShareDemoMode(newMode);
        if (newMode) {
            // Stop any active screen share
            if (isScreenSharing) {
                setIsScreenShareStreaming(false);
                setIsScreenSharing(false);
                setScreenShareQuality(null);
                setScreenShareSourceLabel(null);
            }
            if (screenShareStreamRef.current) {
                manualScreenShareStopRef.current = true;
                screenShareStreamRef.current.getTracks().forEach((track)=>track.stop());
                screenShareStreamRef.current = null;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Screen Share Demo Mode enabled - safe for presentations! 🖥️');
            if (screenShareVideoRef.current) {
                screenShareVideoRef.current.srcObject = null;
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Screen Share Demo Mode disabled - will use real screen 🖥️');
        }
    };
    const handleToggleSafeStart = ()=>{
        setCameraSafeStart((prev)=>{
            const next = !prev;
            if (next) {
                enableDemoMode(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Safe Start enabled - MoveYSplash will stay in demo mode when you open it.');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Safe Start disabled - MoveYSplash can auto-connect your camera again.');
            }
            return next;
        });
    };
    const handleFlipCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCameraFacingMode((prev)=>prev === 'user' ? 'environment' : 'user');
        if (callStatus === 'connected' && !isVideoOff && !demoMode) {
            setCameraRetryToken((token)=>token + 1);
        }
    }, [
        callStatus,
        isVideoOff,
        demoMode
    ]);
    const handleSendChatMessage = ()=>{
        const text = chatDraft.trim();
        if (!text) {
            return;
        }
        const author = currentUser?.name && currentUser.name.trim() || currentUser?.username && currentUser.username.trim() || 'You';
        setChatMessages((prev)=>[
                ...prev,
                {
                    id: `msg-${Date.now()}`,
                    author,
                    text,
                    isSelf: true,
                    timestamp: new Date().toISOString()
                }
            ]);
        setChatDraft('');
    };
    // Incoming call screen
    if (callStatus === 'ringing' && isIncoming) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[calc(100vh-80px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-96 backdrop-blur-xl bg-white/10 border-white/20 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative inline-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "w-32 h-32 border-4 border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Squad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            children: "SQ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-4 border-green-400 animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2441,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2436,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white text-2xl mb-2",
                                    children: callerName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2445,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70",
                                    children: [
                                        callType === 'video' ? 'Video' : 'Voice',
                                        " call incoming..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2444,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 justify-center pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleDeclineCall,
                                    className: "w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white border-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2456,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2452,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleAcceptCall,
                                    className: "w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white border-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2462,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2458,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2451,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2435,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2434,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/VideoChat.tsx",
            lineNumber: 2433,
            columnNumber: 7
        }, this);
    }
    // Connecting screen
    if (callStatus === 'connecting') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[calc(100vh-80px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-96 backdrop-blur-xl bg-white/10 border-white/20 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative inline-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "w-32 h-32 border-4 border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Squad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2479,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            children: "SQ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2480,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-4 border-blue-400 animate-spin",
                                    style: {
                                        animationDuration: '2s'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2482,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2477,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white text-2xl mb-2",
                                    children: "Connecting..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2486,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70",
                                    children: "Please wait"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2487,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2485,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleEndCall,
                            className: "w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white border-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2494,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2490,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2476,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2475,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/VideoChat.tsx",
            lineNumber: 2474,
            columnNumber: 7
        }, this);
    }
    // Active call screen
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-80px)] flex flex-col max-w-7xl mx-auto gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: cameraSnapshotCanvasRef,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2505,
                columnNumber: 7
            }, this),
            autoDetectedConflict && (cameraConflictActive || screenShareDemoMode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "backdrop-blur-xl bg-gradient-to-r from-yellow-500/90 to-orange-500/90 border-yellow-400 px-6 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2512,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-medium",
                                            children: "Camera or Screen in use elsewhere"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2515,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 text-sm",
                                            children: "We switched to the simulated preview while Zoom, Meet, or Teams has your hardware. Resume the real feed once the other app releases it."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2516,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2514,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2510,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                !cameraAutoRetryEnabled && cameraConflictActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>handleResumeCamera(),
                                    className: "bg-white/20 text-white hover:bg-white/30 border-0",
                                    children: "Resume real camera"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2523,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setAutoDetectedConflict(false),
                                    variant: "ghost",
                                    className: "text-white hover:bg-white/20",
                                    children: "Dismiss"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2530,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2521,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2509,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2508,
                columnNumber: 9
            }, this),
            demoMode && !autoDetectedConflict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "backdrop-blur-xl bg-gradient-to-r from-purple-500/90 to-pink-500/90 border-purple-400 px-6 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🎬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2548,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2547,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-medium",
                                            children: "Camera Demo Mode Active"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2551,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 text-sm",
                                            children: "Simulated camera - safe for presentations! Your real camera is not in use."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2552,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2550,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2546,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleToggleDemoMode,
                            variant: "ghost",
                            className: "text-white hover:bg-white/20",
                            children: "Disable Camera Demo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2557,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2545,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2544,
                columnNumber: 9
            }, this),
            screenShareDemoMode && !autoDetectedConflict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "backdrop-blur-xl bg-gradient-to-r from-green-500/90 to-teal-500/90 border-green-400 px-6 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🖥️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2574,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2573,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-medium",
                                            children: "Screen Share Demo Mode Active"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2577,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 text-sm",
                                            children: "Simulated screen share - safe for presentations! Won't conflict with Zoom/Meet/Teams."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2578,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2576,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2572,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleToggleScreenShareDemoMode,
                            variant: "ghost",
                            className: "text-white hover:bg-white/20",
                            children: "Disable Screen Demo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2583,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2571,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2570,
                columnNumber: 9
            }, this),
            isIOSDevice && screenShareSupportHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "backdrop-blur-xl bg-gradient-to-r from-sky-500/90 to-blue-600/90 border-blue-400 px-6 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "📱"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2598,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2597,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-medium",
                                            children: "iPhone/iPad Screen Share"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2601,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 text-sm",
                                            children: screenShareSupportHint
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2602,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2600,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2596,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "text-white hover:bg-white/20",
                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Open Control Center → Screen Broadcast → choose Safari/MoveSplash → Start Broadcast.'),
                            children: "How to"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2607,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2595,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2594,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "backdrop-blur-xl bg-white/10 border-white/20 px-6 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2622,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white",
                                    children: [
                                        callerName,
                                        " • ",
                                        formatDuration(callDuration)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2623,
                                    columnNumber: 13
                                }, this),
                                cameraConflictActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-yellow-200",
                                    children: "📸 Cached camera preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2627,
                                    columnNumber: 15
                                }, this) : demoMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-purple-400",
                                    children: "🎬 Demo Mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2631,
                                    columnNumber: 15
                                }, this) : mediaStream && videoQuality ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-green-400",
                                    children: [
                                        "📹 ",
                                        videoQuality
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2635,
                                    columnNumber: 15
                                }, this) : mediaStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-green-400",
                                    children: "📹 Camera Active"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2639,
                                    columnNumber: 15
                                }, this) : null,
                                sharedCameraMode && !cameraConflictActive && !demoMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-yellow-200 flex items-center gap-1",
                                    children: "🤝 Shared cam mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2644,
                                    columnNumber: 15
                                }, this),
                                visibleScreenShareQuality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs px-2 py-0.5 rounded ${visibleScreenShareQuality === '8K UHD' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : visibleScreenShareQuality === '5K UHD' || visibleScreenShareQuality === '4K UHD' ? 'bg-blue-500/80 text-white' : 'bg-green-500/80 text-white'}`,
                                    children: [
                                        "🖥️ ",
                                        visibleScreenShareQuality,
                                        " Screen Share",
                                        visibleScreenShareSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[10px] text-white/80 mt-0.5",
                                            children: visibleScreenShareSource
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2658,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2649,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2621,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-white/70 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2666,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        visibleScreenShareQuality ?? videoQuality ?? 'HD',
                                        " Quality"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2667,
                                    columnNumber: 13
                                }, this),
                                visibleScreenShareSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white/60",
                                    children: [
                                        "(",
                                        visibleScreenShareSource,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2669,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2665,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2620,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2619,
                columnNumber: 7
            }, this),
            screenShareParticipant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "relative overflow-hidden backdrop-blur-xl bg-black/40 border-white/30 min-h-[320px]",
                children: [
                    screenShareParticipant.isSelf ? screenShareDemoMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/40 to-pink-600/40 text-center px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl",
                                    children: "🎬"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2682,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    children: "Screen Share Demo Mode Active"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2683,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 text-sm",
                                    children: "Your teammates see the simulated share while other apps use your screen."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2684,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2681,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 2680,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: screenShareVideoRef,
                        autoPlay: true,
                        playsInline: true,
                        muted: true,
                        className: "absolute inset-0 w-full h-full object-contain bg-black"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 2690,
                        columnNumber: 15
                    }, this) : resolvedRemoteScreenShareStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                autoPlay: true,
                                playsInline: true,
                                muted: true,
                                className: "absolute inset-0 w-full h-full object-contain bg-black",
                                ref: (node)=>{
                                    if (node && node.srcObject !== resolvedRemoteScreenShareStream) {
                                        node.srcObject = resolvedRemoteScreenShareStream;
                                        node.play().catch((error)=>console.error('Error playing remote screen share:', error));
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2700,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                autoPlay: true,
                                controls: false,
                                ref: (node)=>{
                                    if (node && node.srcObject !== resolvedRemoteScreenShareStream) {
                                        node.srcObject = resolvedRemoteScreenShareStream;
                                        node.play().catch((error)=>console.error('Error playing remote screen audio:', error));
                                    }
                                },
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2712,
                                columnNumber: 15
                            }, this),
                            remoteSharerAudioStream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                autoPlay: true,
                                controls: false,
                                ref: (node)=>{
                                    if (node && node.srcObject !== remoteSharerAudioStream) {
                                        node.srcObject = remoteSharerAudioStream;
                                        node.play().catch((error)=>console.error('Error playing remote mic audio:', error));
                                    }
                                },
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2724,
                                columnNumber: 17
                            }, this),
                            remoteSharerCameraStream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 right-4 w-40 md:w-56 aspect-video rounded-lg overflow-hidden border border-white/30 shadow-lg shadow-black/40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    autoPlay: true,
                                    playsInline: true,
                                    muted: true,
                                    className: "w-full h-full object-cover bg-black",
                                    ref: (node)=>{
                                        if (node && node.srcObject !== remoteSharerCameraStream) {
                                            node.srcObject = remoteSharerCameraStream;
                                            node.play().catch((error)=>console.error('Error playing remote camera PiP:', error));
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2738,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2737,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-purple-900/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-3 text-white px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl",
                                    children: "🖥️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2756,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold",
                                    children: [
                                        screenShareParticipant.name,
                                        " is sharing their screen"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2757,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-white/70",
                                    children: "We switched everyone to speaker view automatically."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2760,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2755,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 2754,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2768,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: screenShareParticipant.isSelf ? 'You' : screenShareParticipant.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2769,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2767,
                                columnNumber: 13
                            }, this),
                            screenShareParticipant.isSelf && screenShareQuality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-xs px-3 py-1 rounded-full ${screenShareQuality === '8K UHD' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : screenShareQuality === '5K UHD' || screenShareQuality === '4K UHD' ? 'bg-blue-500/80 text-white' : 'bg-green-500/80 text-white'}`,
                                children: [
                                    screenShareQuality,
                                    " Quality"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2772,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 2766,
                        columnNumber: 11
                    }, this),
                    effectiveScreenShareActive && !screenShareParticipant.isSelf && screenShareStreamRef.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 right-3 w-52 md:w-64 bg-black/70 border border-white/20 rounded-lg overflow-hidden shadow-lg shadow-black/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 text-[11px] text-white/80 flex items-center justify-between bg-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Your share preview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2790,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/60 text-[10px]",
                                        children: "Live to everyone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2791,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2789,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full aspect-video bg-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: selfScreenSharePreviewRef,
                                    autoPlay: true,
                                    playsInline: true,
                                    muted: true,
                                    className: "w-full h-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2794,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2793,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 text-[11px] text-white/70 bg-black/40",
                                children: [
                                    "Keeping ",
                                    screenShareParticipant.name,
                                    "'s screen on stage while you present."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2802,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 2788,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2677,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 grid gap-4 ${gridParticipants.length >= 4 ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`,
                children: gridParticipants.map((participant)=>{
                    const remoteStream = remoteStreams.get(participant.userId);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: `relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 transition-all min-h-[200px] ${participant.isSpeaking ? 'border-green-400 shadow-lg shadow-green-400/50' : 'border-white/20'}`,
                        children: [
                            participant.isSelf ? participant.isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "w-24 h-24 border-4 border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: participant.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2832,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            children: participant.name[0] ?? 'Y'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2833,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2831,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2830,
                                columnNumber: 19
                            }, this) : cameraConflictActive && cameraFallbackFrame ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: cameraFallbackFrame,
                                        alt: "Camera preview",
                                        fill: true,
                                        unoptimized: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2838,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-center px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white font-semibold mb-2",
                                                children: "Camera temporarily in use by another app"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 2846,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-sm",
                                                children: "Keeping your last frame visible while Zoom/Meet/Teams is running. We'll switch back automatically."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 2847,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2845,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2837,
                                columnNumber: 19
                            }, this) : cameraConflictActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-purple-600/40 to-pink-600/40 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl mb-2",
                                        children: "📸"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2854,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: "Camera temporarily unavailable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2855,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/80 text-sm mt-1",
                                        children: "We're retrying while another app is using your webcam."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2856,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2853,
                                columnNumber: 19
                            }, this) : demoMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: demoCanvasRef,
                                        width: 640,
                                        height: 480,
                                        className: "absolute inset-0 w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2862,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2 bg-purple-500/80 text-white text-xs px-2 py-1 rounded",
                                        children: "🎬 DEMO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2868,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : mediaStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: localVideoRef,
                                        autoPlay: true,
                                        playsInline: true,
                                        muted: true,
                                        className: "absolute inset-0 w-full h-full object-cover scale-x-[-1]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2874,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2 flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 2883,
                                                        columnNumber: 25
                                                    }, this),
                                                    "LIVE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 2882,
                                                columnNumber: 23
                                            }, this),
                                            videoQuality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-white text-xs px-2 py-1 rounded ${videoQuality === '4K UHD' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : videoQuality === 'Full HD' ? 'bg-blue-500/80' : 'bg-green-500/80'}`,
                                                children: videoQuality
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 2887,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2881,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/70 text-center space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-white/10 rounded-full animate-pulse mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2902,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: "Starting camera..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2903,
                                            columnNumber: 23
                                        }, this),
                                        cameraError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-400",
                                            children: cameraError
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2905,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2901,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2900,
                                columnNumber: 19
                            }, this) : remoteStream && !participant.isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                autoPlay: true,
                                playsInline: true,
                                className: "absolute inset-0 w-full h-full object-cover",
                                ref: (node)=>{
                                    if (node && node.srcObject !== remoteStream) {
                                        node.srcObject = remoteStream;
                                        node.play().catch((error)=>console.error('Error playing remote video:', error));
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2911,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/40 to-purple-900/40 text-center px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "w-20 h-20 border-4 border-white/20 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                src: participant.avatar
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 2925,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                children: participant.name[0] ?? '?'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 2926,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2924,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-sm font-semibold",
                                        children: participant.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2928,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 text-xs mt-1",
                                        children: participant.isVideoOff ? 'Camera off' : 'Streaming'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 2929,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2923,
                                columnNumber: 17
                            }, this),
                            participant.isSelf && isSoloParticipant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-3 left-3 bg-black/60 text-white/80 text-xs px-3 py-1 rounded-full",
                                children: "You're the first in the room"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2935,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm",
                                                    children: participant.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                                    lineNumber: 2944,
                                                    columnNumber: 21
                                                }, this),
                                                participant.isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-3 bg-green-400 rounded-full animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                                            lineNumber: 2947,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-4 bg-green-400 rounded-full animate-pulse animation-delay-150"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                                            lineNumber: 2948,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-3 bg-green-400 rounded-full animate-pulse animation-delay-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                                            lineNumber: 2949,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                                    lineNumber: 2946,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2943,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                participant.isMuted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                        className: "w-3 h-3 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 2956,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                                    lineNumber: 2955,
                                                    columnNumber: 23
                                                }, this),
                                                participant.isVideoOff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                        className: "w-3 h-3 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 2961,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                                    lineNumber: 2960,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 2953,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2942,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2941,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "ghost",
                                className: "absolute top-2 right-2 text-white/70 hover:text-white hover:bg-black/30 backdrop-blur-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2974,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 2969,
                                columnNumber: 15
                            }, this)
                        ]
                    }, participant.userId, true, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 2819,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2811,
                columnNumber: 7
            }, this),
            screenShareDemoMode && isScreenSharing && (!screenShareParticipant || screenShareParticipant.isSelf) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-6xl aspect-video",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: screenShareDemoCanvasRef,
                            width: 1920,
                            height: 1080,
                            className: "w-full h-full object-contain rounded-lg border-2 border-green-400 shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2985,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-4 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-500/90 text-white px-4 py-2 rounded-lg backdrop-blur-md",
                                    children: "🖥️ Demo Screen Share Active"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2992,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleToggleScreenShare,
                                    className: "bg-red-500 hover:bg-red-600 text-white",
                                    children: "Stop Sharing"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 2995,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 2991,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 2984,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 2983,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "backdrop-blur-xl bg-white/10 border-white/20 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/70 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: callerName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3012,
                                        columnNumber: 15
                                    }, this),
                                    " • ",
                                    participantCount,
                                    " participants"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3011,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 3010,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleToggleMute,
                                    className: `rounded-full w-12 h-12 ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'} text-white border-0`,
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3026,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3026,
                                        columnNumber: 59
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3018,
                                    columnNumber: 13
                                }, this),
                                callType === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleToggleVideo,
                                    className: `rounded-full w-12 h-12 ${isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'} text-white border-0`,
                                    children: isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3038,
                                        columnNumber: 31
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3038,
                                        columnNumber: 66
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3030,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleToggleScreenShare,
                                    className: `rounded-full w-12 h-12 ${effectiveScreenShareActive ? 'bg-green-500 hover:bg-green-600' : 'bg-white/10 hover:bg-white/20'} text-white border-0`,
                                    title: screenShareSupportHint ?? 'Start or stop screen share',
                                    children: effectiveScreenShareActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorOff$3e$__["MonitorOff"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3051,
                                        columnNumber: 45
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3051,
                                        columnNumber: 82
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3042,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleEndCall,
                                    className: "rounded-full w-12 h-12 bg-red-500 hover:bg-red-600 text-white border-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-5 h-5 rotate-135"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3058,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3054,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 3017,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                !cameraAutoRetryEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>handleResumeCamera(),
                                    className: "text-yellow-200 hover:text-yellow-100 hover:bg-yellow-500/20",
                                    title: "Try to reconnect the real camera feed",
                                    children: "🔄 Resume Cam"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3065,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: handleToggleDemoMode,
                                    className: `${demoMode ? 'text-purple-400 hover:text-purple-300 bg-purple-500/20 hover:bg-purple-500/30' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                    title: "Toggle Camera Demo Mode (prevents camera conflicts with Zoom/Meet/Teams)",
                                    children: [
                                        "🎬 ",
                                        demoMode ? 'Cam Demo ON' : 'Cam Demo'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3075,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: handleToggleSafeStart,
                                    className: `${cameraSafeStart ? 'text-amber-300 hover:text-amber-200 bg-amber-500/20 hover:bg-amber-500/30' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                    title: "Always start MoveYSplash in presentation-safe demo mode so other meeting apps keep your webcam",
                                    children: [
                                        "🛡️ ",
                                        cameraSafeStart ? 'Safe Start ON' : 'Safe Start'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3088,
                                    columnNumber: 13
                                }, this),
                                multipleScreensDetected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "sm",
                                                className: "text-white/70 hover:text-white hover:bg-white/10",
                                                title: "Choose which monitor or workspace to share by default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                                        className: "w-5 h-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 3111,
                                                        columnNumber: 21
                                                    }, this),
                                                    monitorSelectionLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3105,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 3104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                            className: "bg-gradient-to-br from-purple-900 to-pink-900 border border-white/20 text-white",
                                            children: [
                                                availableScreens.map((screen)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>handleSelectScreenShareTarget(screen.id),
                                                        className: "flex items-center justify-between gap-4 focus:bg-white/10 focus:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: screen.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                lineNumber: 3122,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-white/60",
                                                                children: screen.size
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                lineNumber: 3123,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, screen.id, true, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 3117,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    onClick: ()=>handleSelectScreenShareTarget('all-monitors'),
                                                    className: "flex items-center justify-between gap-4 focus:bg-white/10 focus:text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "All Monitors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                                            lineNumber: 3130,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-white/60",
                                                            children: "Entire workspace"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                                            lineNumber: 3131,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                                    lineNumber: 3126,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 3115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: handleToggleScreenShareDemoMode,
                                    className: `${screenShareDemoMode ? 'text-green-400 hover:text-green-300 bg-green-500/20 hover:bg-green-500/30' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                    title: "Toggle Screen Share Demo Mode (prevents screen share conflicts)",
                                    children: [
                                        "🖥️ ",
                                        screenShareDemoMode ? 'Screen Demo ON' : 'Screen Demo'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setViewMode(viewMode === 'grid' ? 'speaker' : 'grid'),
                                    className: `${viewMode === 'grid' ? 'text-white/90 bg-white/15' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"], {
                                            className: "w-5 h-5 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 3161,
                                            columnNumber: 15
                                        }, this),
                                        viewMode === 'grid' ? 'Grid' : 'Speaker'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>togglePanel('participants'),
                                    className: `${showParticipantsPanel ? 'text-white/90 bg-white/15' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-5 h-5 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 3175,
                                            columnNumber: 15
                                        }, this),
                                        "Participants"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>togglePanel('chat'),
                                    className: `${showChatPanel ? 'text-white/90 bg-white/15' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-5 h-5 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VideoChat.tsx",
                                            lineNumber: 3189,
                                            columnNumber: 15
                                        }, this),
                                        "Chat"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>togglePanel('settings'),
                                    className: `${showSettingsPanel ? 'text-white/90 bg-white/15' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 3063,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 3008,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 3007,
                columnNumber: 7
            }, this),
            showParticipantsPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "fixed right-4 bottom-28 w-80 max-h-[420px] z-40 backdrop-blur-xl bg-slate-950/80 border-white/20 text-white shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-white/10 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/70",
                                        children: "In the room"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: [
                                            participantCount,
                                            " participant",
                                            participantCount !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                variant: "ghost",
                                onClick: ()=>setShowParticipantsPanel(false),
                                className: "text-white/70 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3225,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 3212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 space-y-3 overflow-y-auto max-h-[340px]",
                        children: participants.map((participant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "w-10 h-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: participant.avatar
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 3236,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: participant.name[0] ?? '?'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 3237,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium",
                                                        children: [
                                                            participant.name,
                                                            " ",
                                                            participant.isSelf ? '(You)' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 3240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-xs text-white/60",
                                                        children: [
                                                            participant.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                        lineNumber: 3246,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Muted"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                lineNumber: 3245,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                        lineNumber: 3250,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Live"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                lineNumber: 3249,
                                                                columnNumber: 25
                                                            }, this),
                                                            participant.isVideoOff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                        lineNumber: 3255,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Cam off"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                lineNumber: 3254,
                                                                columnNumber: 25
                                                            }, this),
                                                            participant.isScreenSharing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                        lineNumber: 3260,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Sharing"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                                lineNumber: 3259,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                                        lineNumber: 3243,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3239,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-white/50",
                                        children: [
                                            "Joined",
                                            ' ',
                                            new Date(participant.joinedAt).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3266,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, participant.userId, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3230,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 3228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 3211,
                columnNumber: 9
            }, this),
            showChatPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "fixed right-4 bottom-28 w-[26rem] max-h-[460px] z-40 backdrop-blur-xl bg-slate-950/85 border-white/20 text-white shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-white/10 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/70",
                                        children: "Meeting chat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: "Share quick notes & links"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                variant: "ghost",
                                onClick: ()=>setShowChatPanel(false),
                                className: "text-white/70 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3293,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 3282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: chatListRef,
                        className: "px-4 py-3 space-y-3 overflow-y-auto max-h-[320px]",
                        children: chatMessages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col gap-1 rounded-lg px-3 py-2 border ${message.isSelf ? 'bg-purple-600/20 border-purple-400/30' : 'bg-white/5 border-white/10'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs text-white/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-white/80",
                                                children: message.author
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3305,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: new Date(message.timestamp).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3306,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3304,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/90 whitespace-pre-wrap",
                                        children: message.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3313,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, message.id, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3298,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 3296,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10 px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    value: chatDraft,
                                    onChange: (event)=>setChatDraft(event.target.value),
                                    onKeyDown: (event)=>{
                                        if (event.key === 'Enter' && !event.shiftKey) {
                                            event.preventDefault();
                                            handleSendChatMessage();
                                        }
                                    },
                                    placeholder: "Type a message to everyone…",
                                    className: "bg-white/5 border-white/10 text-white placeholder:text-white/50"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSendChatMessage,
                                    className: "bg-purple-500 hover:bg-purple-600 text-white",
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3331,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 3318,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 3317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 3281,
                columnNumber: 9
            }, this),
            showSettingsPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "fixed right-4 bottom-28 w-80 max-h-[460px] z-40 backdrop-blur-xl bg-slate-950/85 border-white/20 text-white shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-white/10 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/70",
                                        children: "Quick settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: "Tune your call"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3348,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                variant: "ghost",
                                onClick: ()=>setShowSettingsPanel(false),
                                className: "text-white/70 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VideoChat.tsx",
                                    lineNumber: 3356,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3350,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 3345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Camera Demo Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Use a safe simulated camera"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3361,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: handleToggleDemoMode,
                                        className: demoMode ? 'text-purple-300 bg-purple-500/20' : 'text-white/70 hover:text-white hover:bg-white/10',
                                        children: demoMode ? 'On' : 'Off'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3360,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Screen Share Demo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3381,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Share a safe placeholder feed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3382,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: handleToggleScreenShareDemoMode,
                                        className: screenShareDemoMode ? 'text-green-300 bg-green-500/20' : 'text-white/70 hover:text-white hover:bg-white/10',
                                        children: screenShareDemoMode ? 'On' : 'Off'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3384,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Safe Start"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3400,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Stay in demo when opening the app"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3401,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3399,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: handleToggleSafeStart,
                                        className: cameraSafeStart ? 'text-amber-200 bg-amber-500/20' : 'text-white/70 hover:text-white hover:bg-white/10',
                                        children: cameraSafeStart ? 'On' : 'Off'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3403,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Camera lens"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3419,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Front / rear for phones & tablets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: handleFlipCamera,
                                        className: "text-white/80 hover:text-white hover:bg-white/10",
                                        children: cameraFacingMode === 'user' ? 'Rear cam' : 'Front cam'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3422,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Layout"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3434,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Switch between grid and speaker"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3435,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3433,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: ()=>setViewMode('grid'),
                                                className: viewMode === 'grid' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10',
                                                children: "Grid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: ()=>setViewMode('speaker'),
                                                className: viewMode === 'speaker' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10',
                                                children: "Speaker"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3437,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3432,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Camera Health"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3467,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: "Retry the real camera feed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                                lineNumber: 3468,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: ()=>handleResumeCamera(),
                                        className: "text-white/80 hover:text-white hover:bg-white/10",
                                        children: "Resume cam"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VideoChat.tsx",
                                        lineNumber: 3470,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VideoChat.tsx",
                                lineNumber: 3465,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VideoChat.tsx",
                        lineNumber: 3359,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 3344,
                columnNumber: 9
            }, this),
            effectiveScreenShareActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "absolute top-4 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-green-500/90 border-green-400 px-4 py-2 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 3487,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "You are sharing your screen"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/VideoChat.tsx",
                            lineNumber: 3488,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/VideoChat.tsx",
                    lineNumber: 3486,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 3485,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .rotate-135 {
          transform: rotate(135deg);
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/components/VideoChat.tsx",
                lineNumber: 3493,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/VideoChat.tsx",
        lineNumber: 2504,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_components_VideoChat_tsx_6200d962._.js.map