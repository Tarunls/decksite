module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Navigation({ onShuffle, isFlipped = false, onNavigate, activeSection, onAboutClick }) {
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const navItems = [
        {
            name: 'Work',
            suit: '♠',
            section: 'work'
        },
        {
            name: 'About',
            suit: '♥',
            section: 'about'
        },
        {
            name: 'Contact',
            suit: '♦',
            section: 'contact'
        }
    ];
    const isContactActive = activeSection === 'contact';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 pointer-events-none p-6 md:p-12 flex flex-col justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: 1,
                            duration: 0.8
                        },
                        onClick: ()=>onNavigate?.('home'),
                        className: `${isFlipped ? 'text-black' : 'text-white'} font-serif text-2xl tracking-tighter pointer-events-auto cursor-pointer mix-blend-difference`,
                        children: [
                            "TS",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs align-top opacity-50 font-sans ml-1",
                                children: "©"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navigation.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Navigation.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.2,
                            duration: 0.8
                        },
                        className: "pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0 p-1 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl",
                            onMouseLeave: ()=>setHoveredIndex(null),
                            children: navItems.map((item, index)=>{
                                const isActive = activeSection === item.section;
                                const isHovered = hoveredIndex === index;
                                const hasWhiteBackground = isHovered || isActive && hoveredIndex === null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onNavigate?.(item.section),
                                    onMouseEnter: ()=>setHoveredIndex(index),
                                    className: "relative px-6 py-2.5 text-sm uppercase tracking-widest font-medium transition-colors duration-200 cursor-pointer focus:outline-none",
                                    children: [
                                        hasWhiteBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "active-card",
                                            className: "absolute inset-0 bg-white rounded-lg shadow-sm",
                                            transition: {
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navigation.tsx",
                                            lineNumber: 73,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `relative z-10 flex items-center gap-2 transition-colors duration-200 ${hasWhiteBackground ? 'text-black' : 'text-white/60'}`,
                                            children: [
                                                item.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-serif transition-opacity duration-200 ${hasWhiteBackground ? 'opacity-100' : 'opacity-0'} ${[
                                                        '♥',
                                                        '♦'
                                                    ].includes(item.suit) ? 'text-red-600' : 'text-black'}`,
                                                    children: item.suit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Navigation.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navigation.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navigation.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Navigation.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end overflow-hidden relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.4
                        },
                        className: `text-[10px] uppercase tracking-[0.2em] font-mono transition-colors duration-500 ${isFlipped ? 'text-black' : 'text-white'}`,
                        children: "SECRET"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navigation.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: onShuffle,
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.5
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: `flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono pointer-events-auto cursor-pointer focus:outline-none transition-colors duration-500 ${isFlipped ? 'text-black hover:text-black' : 'text-white hover:text-white'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Shuffle Deck"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navigation.tsx",
                                lineNumber: 119,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    rotate: [
                                        0,
                                        180,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                children: "↻"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navigation.tsx",
                                lineNumber: 120,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Navigation.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Navigation.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Navigation.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/figma/ImageWithFallback.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageWithFallback",
    ()=>ImageWithFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
function ImageWithFallback(props) {
    const [didError, setDidError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleError = ()=>{
        setDidError(true);
    };
    // Destructure priority so it doesn't get passed into the <img> tag directly
    // We use 'fetchPriority' (lowercase 'p' for native HTML) instead
    const { src, alt, style, className, priority, sizes, ...rest } = props;
    if (didError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `inline-block bg-gray-100 text-center align-middle ${className ?? ''}`,
            style: style,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: ERROR_IMG_SRC,
                    alt: "Error loading image",
                    ...rest,
                    "data-original-url": src
                }, void 0, false, {
                    fileName: "[project]/src/app/components/figma/ImageWithFallback.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/figma/ImageWithFallback.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/figma/ImageWithFallback.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: alt,
        className: className,
        style: style,
        sizes: sizes,
        ...priority ? {
            fetchPriority: "high"
        } : {},
        ...rest,
        onError: handleError
    }, void 0, false, {
        fileName: "[project]/src/app/components/figma/ImageWithFallback.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/Hero3DCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero3DCard",
    ()=>Hero3DCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/figma/ImageWithFallback.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Hero3DCard({ imageUrl, backImageUrl = 'anticover.jpg', isFlipped = false, onFlip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center perspective-[1000px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                animate: {
                    scale: [
                        1,
                        1.1,
                        1
                    ],
                    opacity: [
                        0.3,
                        0.5,
                        0.3
                    ]
                },
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-96 h-[32rem] bg-blue-500/20 blur-[100px] rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Hero3DCard.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero3DCard.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    rotateY: [
                        15,
                        -15,
                        15
                    ],
                    rotateZ: [
                        -3,
                        3,
                        -3
                    ]
                },
                transition: {
                    opacity: {
                        duration: 1,
                        delay: 0.5
                    },
                    scale: {
                        duration: 1,
                        delay: 0.5
                    },
                    rotateY: {
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    rotateZ: {
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                },
                style: {
                    transformStyle: 'preserve-3d'
                },
                className: "relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative w-72 h-[28rem] cursor-pointer",
                    onClick: onFlip,
                    animate: {
                        rotateY: isFlipped ? 180 : 0
                    },
                    transition: {
                        duration: 0.8,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    },
                    style: {
                        transformStyle: 'preserve-3d'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a]",
                            style: {
                                backfaceVisibility: 'hidden',
                                boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(0, 0, 0, 0.6)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: imageUrl,
                                    alt: "Front Card",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero3DCard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero3DCard.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Hero3DCard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a]",
                            style: {
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(0, 0, 0, 0.6)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: backImageUrl,
                                    alt: "Back Card",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero3DCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero3DCard.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Hero3DCard.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl pointer-events-none overflow-hidden",
                            style: {
                                transform: 'translateZ(1px)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent",
                                style: {
                                    transform: 'translateX(-100%)',
                                    animation: 'shimmer 3s infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Hero3DCard.tsx",
                                lineNumber: 112,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Hero3DCard.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Hero3DCard.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero3DCard.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero3DCard.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Hero3DCard.tsx",
        lineNumber: 22,
        columnNumber: 7
    }, this);
}
}),
"[project]/src/app/components/BackgroundCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundCards",
    ()=>BackgroundCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/figma/ImageWithFallback.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function BackgroundCards({ imageUrl, shuffleCount = 0, isShuffling = false, isFlipped = false }) {
    // MOVED INSIDE: Hooks must be inside the function body
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    const cardImages = [
        "/cards/resized_10th/time702-copy_51164800263_l.jpg",
        "/cards/resized_10th/time702-copy-5_51165659585_l.jpg",
        "/cards/resized_10th/time703-copy-4_51165341824_l.jpg",
        "/cards/resized_10th/time703-copy-8_51164557601_l.jpg",
        "/cards/resized_10th/time704-copy-3_51165659575_l.jpg",
        "/cards/resized_10th/time704-copy-7_51164800003_l.jpg",
        "/cards/resized_10th/time705-copy-2_51164557436_l.jpg",
        "/cards/resized_10th/time705-copy-6_51164799898_l.jpg",
        "/cards/resized_10th/time706-copy_51165659650_l.jpg",
        "/cards/resized_10th/time706-copy-5_51165341384_l.jpg",
        "/cards/resized_10th/time706-copy-9_51164557226_l.jpg",
        "/cards/resized_10th/time752-copy-2_51164850718_l.jpg",
        "/cards/resized_10th/time752-copy-6_51165393579_l.jpg",
        "/cards/resized_10th/time702-copy-2_51165342029_l.jpg",
        "/cards/resized_10th/time703-copy_51165341694_l.jpg",
        "/cards/resized_10th/time703-copy-5_51164800188_l.jpg",
        "/cards/resized_10th/time703-copy-9_51164557581_l.jpg",
        "/cards/resized_10th/time704-copy-4_51164557536_l.jpg",
        "/cards/resized_10th/time704-copy-8_51165341569_l.jpg",
        "/cards/resized_10th/time705-copy-3_51165659945_l.jpg",
        "/cards/resized_10th/time705-copy-7_51164799868_l.jpg",
        "/cards/resized_10th/time706-copy-2_51164799823_l.jpg",
        "/cards/resized_10th/time706-copy-6_51165659775_l.jpg",
        "/cards/resized_10th/time707-copy_51165341199_l.jpg",
        "/cards/resized_10th/time752-copy-3_51165393459_l.jpg",
        "/cards/resized_10th/time752-copy-7_51164610331_l.jpg",
        "/cards/resized_10th/time702-copy-3_51165341994_l.jpg",
        "/cards/resized_10th/time702-copy-7_51164557776_l.jpg",
        "/cards/resized_10th/time703-copy-2_51164800253_l.jpg",
        "/cards/resized_10th/time703-copy-6_51164557631_l.jpg",
        "/cards/resized_10th/time704-copy_51164557451_l.jpg",
        "/cards/resized_10th/time704-copy-5_51165341619_l.jpg",
        "/cards/resized_10th/time704-copy-9_51163892682_l.jpg",
        "/cards/resized_10th/time705-copy-4_51164557411_l.jpg",
        "/cards/resized_10th/time705-copy-8_51165341454_l.jpg",
        "/cards/resized_10th/time706-copy-3_51165659820_l.jpg",
        "/cards/resized_10th/time706-copy-7_51164557266_l.jpg",
        "/cards/resized_10th/time707-copy-2_51165659630_l.jpg",
        "/cards/resized_10th/time752-copy-4_51165711805_l.jpg",
        "/cards/resized_10th/time752-copy-8_51163945612_l.jpg",
        "/cards/resized_10th/time702-copy-4_51163893537_l.jpg",
        "/cards/resized_10th/time702-copy-8_51165341949_l.jpg",
        "/cards/resized_10th/time703-copy-3_51164800238_l.jpg",
        "/cards/resized_10th/time703-copy-7_51163893302_l.jpg",
        "/cards/resized_10th/time704-copy-2_51165660075_l.jpg",
        "/cards/resized_10th/time704-copy-6_51164800038_l.jpg",
        "/cards/resized_10th/time705-copy_51163892667_l.jpg",
        "/cards/resized_10th/time705-copy-5_51164799923_l.jpg",
        "/cards/resized_10th/time705-copy-9_51163892997_l.jpg",
        "/cards/resized_10th/time706-copy-4_51163892942_l.jpg",
        "/cards/resized_10th/time706-copy-8_51163892887_l.jpg",
        "/cards/resized_10th/time752-copy_51164610276_l.jpg",
        "/cards/resized_10th/time752-copy-5_51163945537_l.jpg",
        "/cards/resized_10th/time752-copy-9_51163945597_l.jpg"
    ];
    const antiCardImages = [
        '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-2_50684893661_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-4_50684893561_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-5_50684136338_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-8_50684136193_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-9_50684136178_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy_50684974272_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-2_50684974207_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-3_50684893186_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-4_50684893151_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-6_50684891171_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-7_50684974052_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-8_50684893051_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-2_50684973852_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-3_50684892876_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-4_50684973782_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-5_50684134108_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-6_50684135598_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-7_50684135563_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-8_50684973672_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-9_50684973622_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy_50684973587_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-2_50684135398_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-3_50684892556_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-4_50684135343_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-5_50684135308_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-6_50684134078_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-7_50684892406_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-8_50684973327_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-9_50684892316_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy_50684892251_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-2_50684892221_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-3_50684891101_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-4_50684973152_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-5_50684892166_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-6_50684973082_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-7_50684134993_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-8_50684134973_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-9_50684891976_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy_50684891901_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-2_50684972197_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-3_50684972912_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-4_50684134833_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-5_50684972877_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-6_50684972812_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-7_50684134688_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-8_50684972172_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-9_50684891611_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy_50684972602_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-2_50684891376_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-3_50684972347_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-4_50684972312_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-5_50684891281_l.jpg',
        '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy_50684133988_l.jpg'
    ];
    const activeImageSet = isFlipped && antiCardImages.length > 0 ? antiCardImages : cardImages;
    const shuffledIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // If not mounted, return a fixed order for the server to match HTML
        if (!isMounted) return Array.from({
            length: 60
        }, (_, i)=>i);
        const length = Math.max(cardImages.length, antiCardImages.length);
        const indices = Array.from({
            length
        }, (_, i)=>i);
        for(let i = indices.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [
                indices[j],
                indices[i]
            ];
        }
        return indices;
    }, [
        shuffleCount,
        isMounted
    ]);
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        damping: 20,
        stiffness: 50
    });
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, {
        damping: 20,
        stiffness: 50
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth * 2 - 1);
            mouseY.set(e.clientY / innerHeight * 2 - 1);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>window.removeEventListener('mousemove', handleMouseMove);
    }, [
        mouseX,
        mouseY
    ]);
    const cards = [
        {
            x: '10%',
            y: '10%',
            rotation: -15,
            z: -100,
            parallax: 0.4
        },
        {
            x: '35%',
            y: '25%',
            rotation: -30,
            z: -200,
            parallax: 0.2
        },
        {
            x: '25%',
            y: '25%',
            rotation: 10,
            z: -80,
            parallax: 0.5
        },
        {
            x: '45%',
            y: '35%',
            rotation: 35,
            z: -40,
            parallax: 0.7
        },
        {
            x: '20%',
            y: '5%',
            rotation: 55,
            z: -140,
            parallax: 0.35
        },
        {
            x: '85%',
            y: '12%',
            rotation: 20,
            z: -90,
            parallax: 0.45
        },
        {
            x: '65%',
            y: '20%',
            rotation: -25,
            z: -160,
            parallax: 0.3
        },
        {
            x: '95%',
            y: '30%',
            rotation: 15,
            z: -45,
            parallax: 0.7
        },
        {
            x: '60%',
            y: '40%',
            rotation: 40,
            z: -130,
            parallax: 0.35
        },
        {
            x: '92%',
            y: '18%',
            rotation: -50,
            z: -100,
            parallax: 0.4
        },
        {
            x: '12%',
            y: '85%',
            rotation: 35,
            z: -60,
            parallax: 0.6
        },
        {
            x: '28%',
            y: '75%',
            rotation: -20,
            z: -150,
            parallax: 0.3
        },
        {
            x: '40%',
            y: '90%',
            rotation: -40,
            z: -30,
            parallax: 0.8
        },
        {
            x: '30%',
            y: '35%',
            rotation: 50,
            z: -80,
            parallax: 0.5
        },
        {
            x: '8%',
            y: '55%',
            rotation: 10,
            z: -170,
            parallax: 0.25
        },
        {
            x: '88%',
            y: '88%',
            rotation: -25,
            z: -70,
            parallax: 0.55
        },
        {
            x: '65%',
            y: '65%',
            rotation: -15,
            z: -40,
            parallax: 0.7
        },
        {
            x: '90%',
            y: '70%',
            rotation: -50,
            z: -30,
            parallax: 0.8
        },
        {
            x: '72%',
            y: '92%',
            rotation: -40,
            z: -120,
            parallax: 0.4
        },
        {
            x: '85%',
            y: '55%',
            rotation: 20,
            z: -160,
            parallax: 0.3
        },
        {
            x: '50%',
            y: '50%',
            rotation: 45,
            z: -100,
            parallax: 0.4
        },
        {
            x: '40%',
            y: '60%',
            rotation: -30,
            z: -80,
            parallax: 0.5
        },
        {
            x: '95%',
            y: '55%',
            rotation: 35,
            z: -120,
            parallax: 0.8
        },
        {
            x: '50%',
            y: '20%',
            rotation: -15,
            z: -150,
            parallax: 0.3
        },
        {
            x: '60%',
            y: '80%',
            rotation: -15,
            z: -60,
            parallax: 0.3
        },
        {
            x: '50%',
            y: '70%',
            rotation: -15,
            z: -60,
            parallax: 0.5
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "fixed left-0 top-0 w-0 h-0 overflow-hidden opacity-0 pointer-events-none z-[-1]",
                children: antiCardImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                        src: img,
                        alt: "",
                        sizes: "160px",
                        priority: true
                    }, i, false, {
                        fileName: "[project]/src/app/components/BackgroundCards.tsx",
                        lineNumber: 220,
                        columnNumber: 12
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/BackgroundCards.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                style: {
                    perspective: '1000px'
                },
                children: cards.map((card, index)=>{
                    const shuffledIndex = shuffledIndices[index % shuffledIndices.length];
                    const specificImage = activeImageSet.length > 0 ? activeImageSet[shuffledIndex % activeImageSet.length] : imageUrl || '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        index: index,
                        card: card,
                        smoothX: smoothX,
                        smoothY: smoothY,
                        imageUrl: specificImage,
                        isShuffling: isShuffling,
                        isFlipped: isFlipped
                    }, index, false, {
                        fileName: "[project]/src/app/components/BackgroundCards.tsx",
                        lineNumber: 241,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/BackgroundCards.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// Fixed 'any' type to avoid red lines
function Card({ card, index, smoothX, smoothY, imageUrl, isShuffling, isFlipped }) {
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        -1,
        1
    ], [
        -50 * card.parallax,
        50 * card.parallax
    ]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        -1,
        1
    ], [
        -50 * card.parallax,
        50 * card.parallax
    ]);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        -1,
        1
    ], [
        15 * card.parallax,
        -15 * card.parallax
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        -1,
        1
    ], [
        -15 * card.parallax,
        15 * card.parallax
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0,
            left: card.x,
            top: card.y
        },
        animate: {
            opacity: 1,
            scale: 0.5
        },
        transition: {
            duration: 1.5,
            delay: index * 0.05,
            ease: "easeOut"
        },
        style: {
            x,
            y,
            rotateX,
            rotateY,
            rotateZ: card.rotation,
            z: card.z,
            position: 'absolute',
            transformStyle: 'preserve-3d',
            translateX: '-50%',
            translateY: '-50%',
            willChange: 'transform'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: `w-[15vw] h-[21vw] max-w-[250px] max-h-[350px] rounded-lg overflow-hidden border ${isFlipped ? 'border-black/20 bg-gray-100' : 'border-white/10 bg-white'}`,
            style: {
                opacity: 1,
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                willChange: 'filter'
            },
            animate: {
                filter: isShuffling ? 'blur(10px) brightness(0.6)' : 'none',
                scale: isShuffling ? 0.95 : 1
            },
            transition: {
                duration: 0.6,
                ease: 'easeInOut'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                    src: imageUrl,
                    alt: "Card",
                    className: "w-full h-full object-cover",
                    sizes: "160px"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BackgroundCards.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 ${isFlipped ? 'bg-black/10' : 'bg-white/40'}`
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BackgroundCards.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/BackgroundCards.tsx",
            lineNumber: 281,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/BackgroundCards.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/AboutOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutOverlay",
    ()=>AboutOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/figma/ImageWithFallback.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AboutOverlay({ isOpen, onClose, isFlipped }) {
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardBackImage = "coverotate.jpg";
    // LOGIC: If isFlipped is false (App is Dark), we want DarkMode card.
    const isDarkMode = !isFlipped;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            const timer = setTimeout(()=>setShowContent(true), 700);
            return ()=>clearTimeout(timer);
        } else {
            setShowContent(false);
        }
    }, [
        isOpen
    ]);
    // --- DYNAMIC THEME COLORS ---
    const bgClass = isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white';
    const textMain = isDarkMode ? 'text-white' : 'text-gray-900';
    const textSub = isDarkMode ? 'text-white/60' : 'text-gray-600';
    const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';
    const tagClass = isDarkMode ? 'bg-white/5 border-white/10 text-white/80' : 'bg-transparent border-black/10 text-gray-900';
    const closeBtnClass = isDarkMode ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[60] flex items-center justify-center perspective-[2000px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: '40vw',
                        y: '40vh',
                        scale: 0.2,
                        rotateY: 180,
                        rotateZ: 45
                    },
                    animate: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                        rotateZ: 0
                    },
                    exit: {
                        scale: 0.9,
                        opacity: 0,
                        y: 50,
                        transition: {
                            duration: 0.3
                        }
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 120,
                        mass: 0.8
                    },
                    className: `
              relative 
              aspect-[7/5] 
              w-[90vw] md:w-auto md:h-[80vh]
              max-w-[90vw] max-h-[90vh]
              rounded-2xl shadow-2xl
            `,
                    style: {
                        transformStyle: 'preserve-3d'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 rounded-2xl overflow-hidden border transition-colors duration-500 ${bgClass} ${borderColor}`,
                            style: {
                                backfaceVisibility: 'hidden'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: showContent ? 1 : 0
                                    },
                                    onClick: onClose,
                                    className: `absolute top-6 right-6 z-50 font-mono text-xs uppercase tracking-widest transition-colors ${closeBtnClass}`,
                                    children: "[ Close ]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative z-10 w-full h-full overflow-y-auto p-8 md:p-12 scrollbar-hide",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: showContent ? 1 : 0,
                                        y: showContent ? 0 : 20
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-4xl mx-auto space-y-8 h-full flex flex-col justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b ${borderColor} pb-6`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-xs font-mono uppercase tracking-[0.3em] mb-2 ${textSub}`,
                                                                children: "What's • Up"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: `text-4xl md:text-6xl font-serif font-bold ${textMain}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                                        lineNumber: 98,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Caino"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-xs font-mono uppercase tracking-widest ${textSub}`,
                                                                children: "Age"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-3xl font-light ${textMain}`,
                                                                children: "20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBlock, {
                                                        label: "Class",
                                                        value: "Engineer",
                                                        textColor: textMain,
                                                        subColor: textSub,
                                                        borderColor: borderColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBlock, {
                                                        label: "Guild",
                                                        value: "UTD",
                                                        textColor: textMain,
                                                        subColor: textSub,
                                                        borderColor: borderColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBlock, {
                                                        label: "Origin",
                                                        value: "Texas",
                                                        textColor: textMain,
                                                        subColor: textSub,
                                                        borderColor: borderColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-base md:text-lg leading-relaxed font-light ${textSub}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "I'm just a goofy goober for now. Specializing in ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            className: textMain,
                                                            children: "Next.js"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 39
                                                        }, this),
                                                        " and ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            className: textMain,
                                                            children: "Python"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 79
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        'React',
                                                        'Next.js',
                                                        'TypeScript',
                                                        'Tailwind',
                                                        'Motion',
                                                        'Python',
                                                        'Node.js',
                                                        'Figma'
                                                    ].map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-3 py-1 text-[10px] font-mono uppercase tracking-wider border rounded-sm ${tagClass}`,
                                                            children: tech
                                                        }, tech, false, {
                                                            fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/AboutOverlay.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-[#1a1a1a]",
                            style: {
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: cardBackImage,
                                    alt: "Card Back",
                                    className: "w-full h-full object-cover brightness-75"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/AboutOverlay.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/AboutOverlay.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/AboutOverlay.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/AboutOverlay.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
// --- HELPER COMPONENT ---
function StatBlock({ label, value, textColor, subColor, borderColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col border-l pl-3 ${borderColor}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-[10px] font-mono uppercase tracking-widest opacity-70 mb-1 ${subColor}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                lineNumber: 164,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-base font-medium truncate ${textColor}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/components/AboutOverlay.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/AboutOverlay.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/WorkSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkSection",
    ()=>WorkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/figma/ImageWithFallback.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const workItems = [
    {
        id: 1,
        company: "Example Company A",
        role: "TBD",
        period: "2022 - Present",
        technologies: [
            "Example",
            "Example",
            "Example",
            "Example"
        ],
        frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
        description: "TBD: Content for this section is currently being drafted. This will detail the major achievements and responsibilities held at Example Company A."
    },
    {
        id: 2,
        company: "Example Company B",
        role: "TBD",
        period: "2020 - 2022",
        technologies: [
            "Example",
            "Example",
            "Example"
        ],
        frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
        description: "TBD: Content for this section is currently being drafted. This will detail the major achievements and responsibilities held at Example Company B."
    },
    {
        id: 3,
        company: "Example Company C",
        role: "TBD",
        period: "2019 - 2020",
        technologies: [
            "Example",
            "Example"
        ],
        frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
        description: "TBD: Content for this section is currently being drafted. This will detail the major achievements and responsibilities held at Example Company C."
    }
];
function WorkSection({ onGoHome, isFlipped }) {
    const [focusedIndex, setFocusedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // LOGIC: If isFlipped is false (App is Dark), we want DarkMode cards.
    const isDarkMode = !isFlipped;
    // MOUSE TRACKING FOR PARALLAX
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const handleMouseMove = (e)=>{
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        mouseX.set(clientX - centerX);
        mouseY.set(clientY - centerY);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
        className: "fixed inset-0 z-30 flex items-center justify-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onMouseMove: handleMouseMove,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    backdropFilter: "blur(0px)"
                },
                animate: {
                    opacity: 1,
                    backdropFilter: "blur(20px)",
                    backgroundColor: isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)"
                },
                exit: {
                    opacity: 0,
                    backdropFilter: "blur(0px)"
                },
                transition: {
                    duration: 0.8
                },
                className: "absolute inset-0 z-0",
                style: {
                    willChange: "opacity, backdrop-filter"
                },
                onClick: ()=>{
                    if (expandedId === null) onGoHome();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full flex items-end justify-center perspective-[2000px] pointer-events-none z-10 pb-[-10vh]",
                children: workItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselCard, {
                        item: item,
                        index: index,
                        focusedIndex: focusedIndex,
                        setFocusedIndex: setFocusedIndex,
                        setExpandedId: setExpandedId,
                        isExpanded: expandedId === item.id,
                        mouseX: mouseX,
                        mouseY: mouseY,
                        isDarkMode: isDarkMode
                    }, item.id, false, {
                        fileName: "[project]/src/app/components/WorkSection.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: expandedId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandedCard, {
                    item: workItems.find((i)=>i.id === expandedId),
                    onClose: ()=>setExpandedId(null),
                    isDarkMode: isDarkMode
                }, void 0, false, {
                    fileName: "[project]/src/app/components/WorkSection.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/WorkSection.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function CardBackContent({ item, isExpanded, onClose, darkMode = false }) {
    // Define dynamic colors based on darkMode prop
    const bgClass = darkMode ? 'bg-[#1a1a1a]' : 'bg-white';
    const textMain = darkMode ? 'text-white' : 'text-black';
    const textMuted = darkMode ? 'text-white/50' : 'text-black/50';
    const textSub = darkMode ? 'text-white/70' : 'text-black/70';
    const borderClass = darkMode ? 'border-white/10' : 'border-black/10';
    const tagBg = darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-full flex flex-col pt-16 pb-12 rounded-xl overflow-hidden isolate transition-colors duration-500 ${bgClass}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onClose?.();
                },
                className: `absolute top-6 right-6 z-50 font-mono text-xs uppercase tracking-widest transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${darkMode ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`,
                children: "[ Return ]"
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 px-8 md:px-16 scrollbar-hide ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto space-y-8 pb-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-b ${borderClass} pb-6`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-baseline mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: `text-xs font-mono uppercase tracking-[0.2em] ${textMuted}`,
                                            children: "Confidential Dossier"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/WorkSection.tsx",
                                            lineNumber: 173,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs font-mono ${textMuted}`,
                                            children: item.period
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/WorkSection.tsx",
                                            lineNumber: 174,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-4xl md:text-5xl font-serif font-bold ${textMain} mb-2`,
                                    children: item.company
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-xl font-medium ${textSub}`,
                                    children: item.role
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-lg leading-relaxed ${darkMode ? 'text-white/80' : 'text-black/80'}`,
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/WorkSection.tsx",
                                lineNumber: 180,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: `text-xs font-mono uppercase tracking-widest ${darkMode ? 'text-white/30' : 'text-black/40'} mb-4`,
                                    children: "Technology Inventory"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: item.technologies.map((tech, idx)=>// Change key={tech} to key={`${tech}-${idx}`}
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-2 border p-2 rounded-sm shadow-sm ${tagBg}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-green-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-mono uppercase ${textSub}`,
                                                    children: tech
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `${tech}-${idx}`, true, {
                                            fileName: "[project]/src/app/components/WorkSection.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `pt-12 border-t ${borderClass} mt-12`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: `text-[10px] font-mono uppercase tracking-widest ${darkMode ? 'text-white/20' : 'text-black/30'} mb-4`,
                                    children: "System Logs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-4 opacity-50 text-[10px] font-mono leading-loose ${darkMode ? 'text-white/50' : 'text-black/60'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "LOG 01: Deployment successful. System nominal."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/WorkSection.tsx",
                                            lineNumber: 198,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "LOG 02: Initializing secure handshake protocols."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/WorkSection.tsx",
                                            lineNumber: 199,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/WorkSection.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${darkMode ? 'from-[#1a1a1a]' : 'from-white'} to-transparent pointer-events-none`
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/WorkSection.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
// --- 4. CAROUSEL CARD ---
function CarouselCard({ item, index, focusedIndex, setFocusedIndex, setExpandedId, isExpanded, mouseX, mouseY, isDarkMode }) {
    // -- PARALLAX PHYSICS --
    const springConfig = {
        damping: 25,
        stiffness: 150
    };
    const smoothMouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, springConfig);
    const smoothMouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, springConfig);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothMouseY, [
        -500,
        500
    ], [
        10,
        -10
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothMouseX, [
        -500,
        500
    ], [
        -10,
        10
    ]);
    const textX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothMouseX, [
        -500,
        500
    ], [
        -15,
        15
    ]);
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothMouseY, [
        -500,
        500
    ], [
        -15,
        15
    ]);
    const offset = index - focusedIndex;
    const isFocused = offset === 0;
    const spacing = isFocused ? 0 : 180;
    const x = offset * spacing;
    const y = isFocused ? 200 : 300; // Focused card "pops up" out of the hand
    const scale = isFocused ? 1.0 : 0.8; // Hand cards are smaller
    const baseRotateZ = offset * 12; // Increased tilt for the fan effect
    const zIndex = 50 - Math.abs(offset) * 10;
    // Dynamic Text Colors for the Floating Title
    // If Dark Mode: White Text. If Light Mode: Black Text.
    const titleColor = isDarkMode ? isFocused ? 'text-white' : 'text-white/40' : isFocused ? 'text-black' : 'text-black/40';
    const roleColor = isDarkMode ? isFocused ? 'text-blue-400' : 'text-white/20' : isFocused ? 'text-blue-600' : 'text-black/20';
    const handleClick = (e)=>{
        e.stopPropagation();
        if (isFocused) {
            setExpandedId(item.id);
        } else {
            setFocusedIndex(index);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 800
        },
        animate: {
            opacity: isExpanded ? 0 : 1,
            x: x,
            y: y,
            scale: scale,
            zIndex: zIndex,
            rotateZ: baseRotateZ
        },
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 120
        },
        style: {
            zIndex,
            transformStyle: 'preserve-3d',
            willChange: 'transform'
        },
        whileHover: {
            scale: isFocused ? 1.15 : 0.95,
            zIndex: 100,
            transition: {
                duration: 0.1
            }
        },
        className: "absolute w-[280px] md:w-[350px] aspect-[5/7] cursor-pointer pointer-events-auto",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: isExpanded ? 0 : 1,
                    y: 0
                },
                style: {
                    x: textX,
                    y: textY,
                    z: 50
                },
                className: "absolute -top-20 left-0 right-0 text-center pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `text-3xl font-serif font-bold transition-colors duration-300 ${titleColor}`,
                        children: item.company
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WorkSection.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs font-mono uppercase tracking-widest mt-2 transition-colors duration-300 ${roleColor}`,
                        children: item.role
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WorkSection.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full h-full relative",
                style: {
                    transformStyle: 'preserve-3d',
                    rotateX: isExpanded ? 0 : rotateX,
                    rotateY: isExpanded ? 0 : rotateY
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-xl bg-[#0f0f0f] border border-white/20 p-1.5 shadow-2xl",
                        style: {
                            backfaceVisibility: 'hidden',
                            filter: isFocused ? 'saturate(1.2)' : 'saturate(0.5) brightness(0.8)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full rounded-lg overflow-hidden bg-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: item.frontImage,
                                    alt: item.company,
                                    className: "w-full h-full object-cover",
                                    sizes: "(max-width: 768px) 280px, 350px",
                                    priority: isFocused
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 314,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 321,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 313,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WorkSection.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-xl overflow-hidden shadow-2xl",
                        style: {
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBackContent, {
                            item: item,
                            isExpanded: false,
                            darkMode: isDarkMode
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WorkSection.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/WorkSection.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
// --- 5. EXPANDED MODAL CARD ---
function ExpandedCard({ item, onClose, isDarkMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center perspective-[2000px] pointer-events-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 0.3
                },
                onClick: onClose,
                className: "absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer",
                style: {
                    willChange: "opacity"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-[95vw] md:w-auto h-[90vh] md:h-[80vh] aspect-[5/7] z-50",
                initial: {
                    opacity: 0,
                    scale: 0.5,
                    y: 500,
                    rotateX: 20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotateX: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.5,
                    y: 500
                },
                transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 100
                },
                style: {
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-full h-full relative",
                    initial: {
                        rotateY: 0
                    },
                    animate: {
                        rotateY: 180
                    },
                    transition: {
                        rotateY: {
                            type: "spring",
                            damping: 20,
                            stiffness: 100
                        }
                    },
                    style: {
                        transformStyle: 'preserve-3d'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-xl bg-[#0f0f0f] border border-white/20 p-1.5 shadow-2xl",
                            style: {
                                backfaceVisibility: 'hidden'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-full rounded-lg overflow-hidden bg-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: item.frontImage,
                                    alt: item.company,
                                    className: "w-full h-full object-cover",
                                    sizes: "(max-width: 768px) 95vw, 600px"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/WorkSection.tsx",
                                    lineNumber: 394,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/WorkSection.tsx",
                                lineNumber: 393,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-xl overflow-hidden shadow-2xl",
                            style: {
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBackContent, {
                                item: item,
                                isExpanded: true,
                                onClose: onClose,
                                darkMode: isDarkMode
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/WorkSection.tsx",
                                lineNumber: 412,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WorkSection.tsx",
                            lineNumber: 404,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/WorkSection.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/WorkSection.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/WorkSection.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ContactSection({ onClose }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        damping: 25,
        stiffness: 150
    });
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        damping: 25,
        stiffness: 150
    });
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        0,
        1
    ], [
        15,
        -15
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        0,
        1
    ], [
        -15,
        15
    ]);
    const bgX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        0,
        1
    ], [
        40,
        -40
    ]);
    const bgY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        0,
        1
    ], [
        40,
        -40
    ]);
    function handleMouseMove(event) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width);
        y.set((event.clientY - rect.top) / rect.height);
    }
    const handleCopy = (e)=>{
        e.stopPropagation();
        navigator.clipboard.writeText("tarun.sankar@utdallas.edu");
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: containerRef,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onMouseMove: handleMouseMove,
        className: "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/40 cursor-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 backdrop-blur-md bg-black/60 pointer-events-none",
                style: {
                    translateZ: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/ContactSection.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    x: bgX,
                    y: bgY
                },
                className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute bottom-1/4 right-1/4 text-[12rem] font-serif text-red-600/10 select-none",
                    children: "♥"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ContactSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ContactSection.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                },
                className: "relative z-10 flex flex-col items-center justify-center text-center p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        style: {
                            translateZ: 50
                        },
                        className: "text-red-500 font-mono text-[10px] tracking-[0.5em] mb-12",
                        children: "♦ CONTACT ♦"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactSection.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        onClick: handleCopy,
                        className: "group relative cursor-pointer pointer-events-auto",
                        style: {
                            transformStyle: "preserve-3d"
                        },
                        whileHover: {
                            translateZ: 80
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-7xl md:text-9xl text-white tracking-tighter drop-shadow-2xl",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ContactSection.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8,
                                        translateZ: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        translateZ: 120
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "absolute -top-12 left-1/2 -translate-x-1/2 text-green-400 font-mono text-[10px] uppercase tracking-widest bg-black/80 px-4 py-2 rounded-full border border-green-400/30 whitespace-nowrap",
                                    children: "Copied to Clipboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ContactSection.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ContactSection.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ContactSection.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-20 flex gap-12 pointer-events-auto",
                        style: {
                            transformStyle: "preserve-3d"
                        },
                        children: [
                            {
                                name: "GitHub",
                                url: "https://github.com/tarunls"
                            },
                            {
                                name: "LinkedIn",
                                url: "https://linkedin.com/in/tarunls"
                            }
                        ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: link.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    translateZ: 30
                                },
                                className: "flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono uppercase tracking-[0.2em]",
                                        children: link.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ContactSection.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-px bg-white/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/ContactSection.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, link.name, true, {
                                fileName: "[project]/src/app/components/ContactSection.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactSection.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ContactSection.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute bottom-10 px-6 py-2 border border-white/10 rounded-full text-[10px] font-mono text-white/40 hover:text-white hover:bg-white/5 transition-all",
                children: "BACK TO DECK"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ContactSection.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ContactSection.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "antiCardImages",
    ()=>antiCardImages,
    "cardImages",
    ()=>cardImages
]);
const cardImages = [
    "/cards/resized_10th/time702-copy_51164800263_l.jpg",
    "/cards/resized_10th/time702-copy-5_51165659585_l.jpg",
    "/cards/resized_10th/time703-copy-4_51165341824_l.jpg",
    "/cards/resized_10th/time703-copy-8_51164557601_l.jpg",
    "/cards/resized_10th/time704-copy-3_51165659575_l.jpg",
    "/cards/resized_10th/time704-copy-7_51164800003_l.jpg",
    "/cards/resized_10th/time705-copy-2_51164557436_l.jpg",
    "/cards/resized_10th/time705-copy-6_51164799898_l.jpg",
    "/cards/resized_10th/time706-copy_51165659650_l.jpg",
    "/cards/resized_10th/time706-copy-5_51165341384_l.jpg",
    "/cards/resized_10th/time706-copy-9_51164557226_l.jpg",
    "/cards/resized_10th/time752-copy-2_51164850718_l.jpg",
    "/cards/resized_10th/time752-copy-6_51165393579_l.jpg",
    "/cards/resized_10th/time702-copy-2_51165342029_l.jpg",
    "/cards/resized_10th/time703-copy_51165341694_l.jpg",
    "/cards/resized_10th/time703-copy-5_51164800188_l.jpg",
    "/cards/resized_10th/time703-copy-9_51164557581_l.jpg",
    "/cards/resized_10th/time704-copy-4_51164557536_l.jpg",
    "/cards/resized_10th/time704-copy-8_51165341569_l.jpg",
    "/cards/resized_10th/time705-copy-3_51165659945_l.jpg",
    "/cards/resized_10th/time705-copy-7_51164799868_l.jpg",
    "/cards/resized_10th/time706-copy-2_51164799823_l.jpg",
    "/cards/resized_10th/time706-copy-6_51165659775_l.jpg",
    "/cards/resized_10th/time707-copy_51165341199_l.jpg",
    "/cards/resized_10th/time752-copy-3_51165393459_l.jpg",
    "/cards/resized_10th/time752-copy-7_51164610331_l.jpg",
    "/cards/resized_10th/time702-copy-3_51165341994_l.jpg",
    "/cards/resized_10th/time702-copy-7_51164557776_l.jpg",
    "/cards/resized_10th/time703-copy-2_51164800253_l.jpg",
    "/cards/resized_10th/time703-copy-6_51164557631_l.jpg",
    "/cards/resized_10th/time704-copy_51164557451_l.jpg",
    "/cards/resized_10th/time704-copy-5_51165341619_l.jpg",
    "/cards/resized_10th/time704-copy-9_51163892682_l.jpg",
    "/cards/resized_10th/time705-copy-4_51164557411_l.jpg",
    "/cards/resized_10th/time705-copy-8_51165341454_l.jpg",
    "/cards/resized_10th/time706-copy-3_51165659820_l.jpg",
    "/cards/resized_10th/time706-copy-7_51164557266_l.jpg",
    "/cards/resized_10th/time707-copy-2_51165659630_l.jpg",
    "/cards/resized_10th/time752-copy-4_51165711805_l.jpg",
    "/cards/resized_10th/time752-copy-8_51163945612_l.jpg",
    "/cards/resized_10th/time702-copy-4_51163893537_l.jpg",
    "/cards/resized_10th/time702-copy-8_51165341949_l.jpg",
    "/cards/resized_10th/time703-copy-3_51164800238_l.jpg",
    "/cards/resized_10th/time703-copy-7_51163893302_l.jpg",
    "/cards/resized_10th/time704-copy-2_51165660075_l.jpg",
    "/cards/resized_10th/time704-copy-6_51164800038_l.jpg",
    "/cards/resized_10th/time705-copy_51163892667_l.jpg",
    "/cards/resized_10th/time705-copy-5_51164799923_l.jpg",
    "/cards/resized_10th/time705-copy-9_51163892997_l.jpg",
    "/cards/resized_10th/time706-copy-4_51163892942_l.jpg",
    "/cards/resized_10th/time706-copy-8_51163892887_l.jpg",
    "/cards/resized_10th/time752-copy_51164610276_l.jpg",
    "/cards/resized_10th/time752-copy-5_51163945537_l.jpg",
    "/cards/resized_10th/time752-copy-9_51163945597_l.jpg"
];
const antiCardImages = [
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-2_50684893661_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-4_50684893561_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-5_50684136338_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-8_50684136193_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-9_50684136178_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy_50684974272_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-2_50684974207_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-3_50684893186_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-4_50684893151_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-6_50684891171_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-7_50684974052_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-8_50684893051_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-2_50684973852_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-3_50684892876_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-4_50684973782_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-5_50684134108_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-6_50684135598_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-7_50684135563_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-8_50684973672_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-9_50684973622_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy_50684973587_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-2_50684135398_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-3_50684892556_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-4_50684135343_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-5_50684135308_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-6_50684134078_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-7_50684892406_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-8_50684973327_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-9_50684892316_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy_50684892251_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-2_50684892221_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-3_50684891101_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-4_50684973152_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-5_50684892166_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-6_50684973082_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-7_50684134993_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-8_50684134973_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-9_50684891976_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy_50684891901_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-2_50684972197_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-3_50684972912_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-4_50684134833_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-5_50684972877_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-6_50684972812_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-7_50684134688_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-8_50684972172_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-9_50684891611_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy_50684972602_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-2_50684891376_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-3_50684972347_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-4_50684972312_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-5_50684891281_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy_50684133988_l.jpg'
];
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Hi mom I'm Famous!
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero3DCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Hero3DCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$BackgroundCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/BackgroundCards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AboutOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/AboutOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$WorkSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/WorkSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ContactSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
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
// --- NEW "SPOTLIGHT SCANNER" LOADER ---
function LoadingScreen() {
    const suits = [
        "♠",
        "♥",
        "♣",
        "♦"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black",
        initial: {
            opacity: 1
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.8,
                ease: [
                    0.76,
                    0,
                    0.24,
                    1
                ]
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-8 md:gap-12 text-zinc-800 text-5xl md:text-7xl font-serif select-none",
                        children: suits.map((suit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: suit
                            }, i, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 flex gap-8 md:gap-12 text-5xl md:text-7xl font-serif select-none",
                        initial: {
                            clipPath: "inset(0 100% 0 0)"
                        },
                        animate: {
                            clipPath: "inset(0 0% 0 0)"
                        },
                        transition: {
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                            repeatDelay: 0.5
                        },
                        children: suits.map((suit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${i === 1 || i === 3 ? "text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" : "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"}`,
                                children: suit
                            }, i, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 w-48 h-0.5 bg-zinc-900 rounded-full overflow-hidden relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 bg-white shadow-[0_0_10px_white]",
                    initial: {
                        x: "-100%"
                    },
                    animate: {
                        x: "0%"
                    },
                    transition: {
                        duration: 2.2,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.5
                },
                children: "Initializing Deck..."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, "loader", true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function App() {
    const heroCardUrl = '/cover.jpg';
    const heroBackUrl = '/anticover.jpeg';
    const backgroundCardUrl = '/cards/time702-copy_51164800263_l.jpg';
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [shuffleCount, setShuffleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isShuffling, setIsShuffling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAboutOpen, setIsAboutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    // Unified Fail-Safe Preloader
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const criticalImages = [
            heroCardUrl,
            heroBackUrl,
            backgroundCardUrl,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardImages"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["antiCardImages"]
        ];
        const preloadAll = async ()=>{
            const promises = criticalImages.map((src)=>{
                return new Promise((resolve)=>{
                    const img = new Image();
                    img.src = src;
                    img.onload = ()=>resolve(src);
                    img.onerror = ()=>{
                        console.error(`❌ Missing image: ${src}`);
                        resolve(null); // Resolve anyway so loader doesn't hang
                    };
                });
            });
            // Wait for images AND minimum animation time
            await Promise.all([
                Promise.all(promises),
                new Promise((resolve)=>setTimeout(resolve, 2800))
            ]);
            setIsLoading(false);
        };
        preloadAll();
    }, [
        heroCardUrl,
        heroBackUrl,
        backgroundCardUrl
    ]);
    const handleShuffleTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isShuffling) return;
        setIsShuffling(true);
        setTimeout(()=>{
            setShuffleCount((prev)=>prev + 1);
            setTimeout(()=>setIsShuffling(false), 50);
        }, 600);
    }, [
        isShuffling
    ]);
    const handleFlipTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isShuffling) return;
        setIsShuffling(true);
        setTimeout(()=>{
            setIsFlipped((prev)=>!prev);
            setTimeout(()=>{
                setIsShuffling(false);
            }, 300);
        }, 300);
    }, [
        isShuffling
    ]);
    const handleNavigation = (section)=>{
        if (section === 'about') {
            setIsAboutOpen(true);
        } else {
            setActiveSection(section);
            setIsAboutOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-[100dvh] w-full overflow-hidden transition-colors duration-1000 bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingScreen, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 160,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0",
                initial: false,
                animate: {
                    background: isFlipped ? 'radial-gradient(ellipse at center, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)' : 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)'
                },
                transition: {
                    duration: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0",
                animate: {
                    opacity: isFlipped ? 0.5 : 0.3,
                    background: isFlipped ? 'radial-gradient(circle at 30% 50%, rgba(200, 200, 255, 0.4) 0%, transparent 50%)' : 'radial-gradient(circle at 30% 50%, rgba(30, 30, 50, 0.4) 0%, transparent 50%)'
                },
                transition: {
                    duration: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$BackgroundCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundCards"], {
                imageUrl: backgroundCardUrl,
                shuffleCount: shuffleCount,
                isShuffling: isShuffling,
                isFlipped: isFlipped
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AboutOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutOverlay"], {
                isOpen: isAboutOpen,
                onClose: ()=>setIsAboutOpen(false),
                isFlipped: isFlipped
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigation"], {
                onShuffle: handleShuffleTrigger,
                isFlipped: isFlipped,
                activeSection: activeSection,
                onNavigate: handleNavigation,
                onAboutClick: ()=>setIsAboutOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    activeSection === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        // relative and z-10 ensures this container sits ABOVE the background cards
                        className: "relative min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: 0.5
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center lg:justify-end px-8 lg:px-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "max-w-2xl w-full pointer-events-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                            className: "text-white/70 tracking-[0.4em] uppercase mb-4 text-[clamp(0.7rem,1vw,0.9rem)] font-light mix-blend-difference",
                                            children: "Hi, I'm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            className: "text-white mb-8 mix-blend-difference",
                                            style: {
                                                fontFamily: "var(--font-cinzel), serif",
                                                fontWeight: 700,
                                                lineHeight: 0.9,
                                                // Fluid typography: Scales perfectly on your 14" screen
                                                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                                                letterSpacing: "-0.03em",
                                                textShadow: "0 0 30px rgba(0,0,0,0.5)" // Gives depth against bg cards
                                            },
                                            children: [
                                                "Tarun ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 27
                                                }, this),
                                                " Sankar"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-px w-32 bg-gradient-to-r from-white via-white/50 to-transparent mix-blend-difference"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 217,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 -translate-y-1/2 flex items-center justify-center",
                                style: {
                                    left: '75%',
                                    top: '80%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    style: {
                                        // Card size scales with screen width, but capped for large screens
                                        width: "clamp(260px, 22vw, 420px)",
                                        aspectRatio: "2.5 / 3.5"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero3DCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero3DCard"], {
                                        imageUrl: heroCardUrl,
                                        backImageUrl: heroBackUrl,
                                        isFlipped: isFlipped,
                                        onFlip: handleFlipTrigger
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 243,
                                columnNumber: 17
                            }, this)
                        ]
                    }, "home-section", true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 208,
                        columnNumber: 13
                    }, this),
                    activeSection === 'work' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$WorkSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkSection"], {
                        onGoHome: ()=>setActiveSection('home'),
                        isFlipped: isFlipped
                    }, "work-section", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    activeSection === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactSection"], {
                        onClose: ()=>setActiveSection('home')
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 280,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 pointer-events-none",
                animate: {
                    background: isFlipped ? 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 100%)' : 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
                },
                transition: {
                    duration: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 pointer-events-none opacity-5",
                animate: {
                    backgroundPosition: [
                        '0% 0%',
                        '0% 100%'
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                },
                style: {
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                    backgroundSize: '100% 4px'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__42a78c2e._.js.map