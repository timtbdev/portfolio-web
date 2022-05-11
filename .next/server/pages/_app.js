"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(7505);
// EXTERNAL MODULE: ./components/DarkMode.tsx
var DarkMode = __webpack_require__(2326);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: ./components/Header.tsx









const profile = {
    name: "Tim",
    job: "Android Developer",
    imageUrl: "/profile.jpg",
    imageDescription: "Profile picture"
};
const menu = [
    {
        index: 1,
        name: "Projects",
        href: "/projects",
        current: false,
        icon: outline_namespaceObject.CollectionIcon
    },
    {
        index: 2,
        name: "Blog",
        href: "/blog",
        current: false,
        icon: outline_namespaceObject.MenuAlt2Icon
    }, 
];
function Navigation() {
    const { pathname  } = (0,router_namespaceObject.useRouter)();
    const ref = (0,external_react_.useRef)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Popover, {
        as: "nav",
        className: "bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none border-b border-slate-900/10 bg-opacity-40 opacity-100 backdrop-blur-xl backdrop-filter transition-colors duration-500 dark:border-b dark:border-slate-100/5",
        children: ({ open  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between py-2 md:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-start lg:w-0 lg:flex-1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "/",
                                    className: "inline-flex items-center px-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: profile.imageDescription
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: profile.imageUrl,
                                            className: "h-12 w-12 flex-shrink-0 rounded-full"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ml-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "font-semibold leading-6 text-slate-700 dark:text-slate-200",
                                                    children: profile.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "font-base text-sm leading-6 text-slate-500 dark:text-slate-400",
                                                    children: profile.job
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "my-4 mr-2 md:hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Popover.Button, {
                                    className: "inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-slate-700 transition duration-500 ease-in-out hover:text-sky-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-sky-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Open menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.MenuIcon, {
                                            className: "h-8 w-8",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden space-x-10 md:inline-flex",
                                children: menu.map(({ href , name , index  })=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: href,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: external_classnames_default()(pathname == href ? "text-sky-600 dark:text-sky-400" : "text-slate-700 hover:border-sky-600 hover:text-sky-600 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400", "inline-flex items-center px-1 pt-1 text-base font-semibold transition duration-500 ease-in-out"),
                                            children: name
                                        }, index)
                                    })
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition, {
                                show: open,
                                as: external_react_.Fragment,
                                enter: "duration-200 ease-out",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "duration-100 ease-in",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Popover.Panel, {
                                    focus: true,
                                    static: true,
                                    className: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "border-b border-gray-200 px-5 pt-5 pb-6 dark:border-gray-700",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "inline-flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: profile.imageDescription
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: profile.imageUrl,
                                                                    className: "h-12 w-12 flex-shrink-0 rounded-full"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "ml-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "text-base font-medium leading-6 text-slate-700 dark:text-slate-200",
                                                                            children: profile.name
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "font-base text-sm leading-6 text-slate-500 dark:text-slate-400",
                                                                            children: profile.job
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Popover.Button, {
                                                                className: "inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-slate-700 transition duration-500 ease-in-out hover:text-sky-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-sky-400",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "sr-only",
                                                                        children: "Close menu"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.XIcon, {
                                                                        className: "h-8 w-8",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "py-6 px-5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                    className: "grid grid-cols-1 gap-7",
                                                    children: menu.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: item.href,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "-m-3 flex items-center rounded-lg p-3 text-base font-medium",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: external_classnames_default()(pathname == item.href ? "text-sky-600 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-400" : "text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400", "ml-4 text-base font-medium"),
                                                                    children: item.name
                                                                })
                                                            }, item.index)
                                                        })
                                                    )
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden items-center justify-end md:inline-flex md:flex-1 lg:w-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(DarkMode/* default */.Z, {
                                })
                            })
                        ]
                    })
                })
            })
    }));
};

;// CONCATENATED MODULE: ./components/Footer.tsx

const socials = [
    {
        title: "Email",
        url: "mailto:timtb@hey.com"
    },
    {
        title: "Github",
        url: "https://github.com/timtbdev"
    }, 
];
const copyright = "2022 Tim, All rights reserved.";
function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "bg-gray-50 dark:bg-slate-900",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-auto mt-6 max-w-full overflow-hidden border-t border-gray-200 py-12 px-4 dark:border-slate-200/5 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "-mx-5 -my-2 flex flex-wrap justify-center",
                        "aria-label": "Footer",
                        children: socials.map(({ title , url  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-5 py-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: url,
                                    target: "_blank",
                                    className: "text-base text-slate-700 underline transition duration-500 ease-in-out hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400",
                                    children: title
                                })
                            }, title)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "mt-8 text-center text-base font-light text-slate-500 dark:text-slate-400",
                        children: [
                            "\xa9 ",
                            copyright
                        ]
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/Layout.tsx



const Layout = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "min-h-screen bg-white/95 dark:bg-slate-900",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-hidden",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
function MyApp({ Component , pageProps , router  }) {
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
            attribute: "class",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
                    client: queryClient,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                        exitBeforeEnter: true,
                        onExitComplete: handleScrollToTop,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            initial: "exit",
                            animate: "enter",
                            exit: "exit",
                            transition: {
                                ease: [
                                    0.175,
                                    0.85,
                                    0.42,
                                    0.96
                                ],
                                duration: 0.2,
                                staggerChildren: 0.1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        }, router.route)
                    })
                })
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 7505:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664,326], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();