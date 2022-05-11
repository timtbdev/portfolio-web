"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Container = ({ children , url  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative mb-20 pt-10 xl:pt-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-auto max-w-7xl sm:px-6 md:px-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sm:px-2 xl:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "width: 1200px min-w-full max-w-full shadow-xl sm:rounded-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "ring-1 ring-slate-900/5 sm:rounded-xl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative -mb-8 rounded-xl border-t border-slate-200 bg-white pb-8 dark:border-slate-900/50 dark:bg-slate-800",
                                        children: children
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 1341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _libs_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1722);
/* harmony import */ var _components_DarkMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2326);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DarkMode__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
([_components_DarkMode__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const data = {
    title: "Blog",
    subTitle: "Android Development & Android UI Design"
};
const heroVariants = {
    initial: {
        opacity: 0,
        scale: 0.8
    },
    enter: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        transition: {
            duration: 0.5
        }
    }
};
const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};
function Header() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] h-[10.5rem] place-items-center bg-top dark:border-t dark:border-slate-100/5 dark:bg-[url('/background_dark.svg')] dark:bg-[center_top_-1px] dark:[mask-image:linear-gradient(0deg,transparent,black)]"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    initial: "hide",
                    animate: "show",
                    exit: "hide",
                    variants: _libs_animation__WEBPACK_IMPORTED_MODULE_2__/* .fadeAnim */ .Tj,
                    className: "relative -top-20 place-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "mt-4 text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 dark:text-white sm:text-3xl",
                            children: data.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400",
                            children: data.subTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DarkMode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Post = ({ title , date , slug , text  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: "py-6 px-4 sm:p-6 md:py-10 md:px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto grid max-w-4xl grid-cols-1 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "mt-1 text-lg font-semibold text-white sm:text-slate-900 dark:sm:text-white md:text-2xl",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm font-medium leading-4 text-white sm:text-slate-500 dark:sm:text-slate-400",
                                children: date
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-start-1 col-end-3 row-start-1 grid gap-4 sm:mb-6 sm:grid-cols-4 lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg",
                                alt: "",
                                className: "h-60 w-full rounded-lg object-cover sm:col-span-2 sm:h-52 lg:col-span-full",
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/_next/static/media/beach-house-interior-1.bc69273a536a51bb58092b2896b92e3a.jpg",
                                alt: "",
                                className: "hidden h-52 w-full rounded-lg object-cover sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32",
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/_next/static/media/beach-house-interior-2.de1a47680b1fb31d36d1130dc925b197.jpg",
                                alt: "",
                                className: "hidden h-52 w-full rounded-lg object-cover md:block lg:col-span-2 lg:row-start-2 lg:h-32",
                                loading: "lazy"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "col-start-1 mt-4 text-sm leading-6 dark:text-slate-400 sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6",
                                children: text
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "group mt-5 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-100 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500",
                                href: "/blog/automatic-class-sorting-with-prettier",
                                children: [
                                    "Read more",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: ", Automatic Class Sorting with Prettier"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "ml-3 overflow-visible text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400",
                                        width: "3",
                                        height: "6",
                                        viewBox: "0 0 3 6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M0 0L3 3L0 6"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Blog_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7597);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8066);
/* harmony import */ var _components_Blog_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1341);
/* harmony import */ var _components_Blog_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1453);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Blog_Header__WEBPACK_IMPORTED_MODULE_3__]);
_components_Blog_Header__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





async function getStaticProps(context) {
    // Meta data
    const pageTitle = "Blog";
    const keywords = "Tim, Tumur, Bazarragchaa, San-Francisco, Bay Area, Android Developer, Kotlin, Android Jetpack, Jetpack Compose, Blog";
    const description = "I'm an Android developer and this is my blog.";
    const author = "Tim";
    const date = "February, 2022";
    const baseUrl = "https://timtb.dev/";
    const ogImage = baseUrl + "og_blog.png";
    return {
        props: {
            pageTitle,
            keywords,
            description,
            author,
            date,
            baseUrl,
            ogImage
        }
    };
}
function Blog({ pageTitle , keywords , description , author , date , baseUrl , ogImage  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: pageTitle,
                description: description,
                keywords: keywords,
                author: author,
                date: date,
                url: baseUrl,
                image: ogImage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blog_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            }),
            data.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blog_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        url: post.title,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blog_Post__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            title: post.title,
                            date: post.date,
                            slug: post.slug,
                            text: post.text
                        })
                    })
                })
            )
        ]
    }));
};
// JSON
const data = [
    {
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "February 21, 2022",
        slug: "/blog/lorem1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "February 21, 2022",
        slug: "/blog/lorem2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, 
];

});

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [326,962], () => (__webpack_exec__(4178)));
module.exports = __webpack_exports__;

})();