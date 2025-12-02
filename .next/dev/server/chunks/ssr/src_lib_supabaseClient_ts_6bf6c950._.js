module.exports = [
"[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/supabase/info.tsx [app-ssr] (ecmascript)");
;
;
const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"];
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"];
if (!projectId || !anonKey) {
    throw new Error("Supabase environment variables are missing. Make sure NEXT_PUBLIC_SUPABASE_PROJECT_ID and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.");
}
const supabaseUrl = `https://${projectId}.supabase.co`;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, anonKey);
}),
];

//# sourceMappingURL=src_lib_supabaseClient_ts_6bf6c950._.js.map