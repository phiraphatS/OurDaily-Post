"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/feeds/page",{

/***/ "(app-pages-browser)/./src/shared-component/client-component/posts.tsx":
/*!*********************************************************!*\
  !*** ./src/shared-component/client-component/posts.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/avatar/dist/chunk-V7PAE35Z.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-BDSTZZXD.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! __barrel_optimize__?names=BiChat,BiLike,BiShare!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsThreeDotsVertical_react_icons_bs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=BsThreeDotsVertical!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst mockPosts = [\n    {\n        id: 1,\n        content: \"this is the first post! I love you very much\",\n        img: [\n            \"https://via.placeholder.com/800x800?text=First+Image\",\n            \"https://via.placeholder.com/800x800?text=Second+Image\",\n            \"https://via.placeholder.com/800x800?text=Third+Image\"\n        ],\n        createdAt: new Date(),\n        profile: {\n            avartar: \"https://via.placeholder.com/150x150?text=Avatar+Image\",\n            fullName: \"John Doe\",\n            position: \"Software Engineer\"\n        }\n    }\n];\nfunction PostsComponent() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockPosts);\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({\n        initialValues: {\n            newPost: \"\"\n        },\n        onSubmit: (values)=>{\n            console.log(\"values\", values);\n        }\n    });\n    const handlePostChange = (event)=>{\n        formik.setFieldValue(\"newPost\", event.target.value);\n    };\n    const handlePostSubmit = ()=>{\n        console.log(\"newPost\", formik.values.newPost);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        spacing: 4,\n        width: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                width: \"full\",\n                maxW: \"lg\",\n                paddingLeft: 5,\n                paddingRight: 5,\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: 4,\n                alignItems: \"end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                        value: formik.values.newPost,\n                        onChange: handlePostChange,\n                        placeholder: \"Write your post here...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        spacing: 4,\n                        justify: \"end\",\n                        width: \"full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faImages\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                onClick: handlePostSubmit,\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            posts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                children: \"You've never seen any posts.\"\n            }, void 0, false, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 72,\n                columnNumber: 30\n            }, this),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card, {\n                    maxW: \"lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.CardHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {\n                                gap: 4,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {\n                                        flex: \"1\",\n                                        gap: \"4\",\n                                        alignItems: \"center\",\n                                        flexWrap: \"wrap\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Avatar, {\n                                                name: post.profile.fullName,\n                                                src: post.profile.avartar\n                                            }, void 0, false, {\n                                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Heading, {\n                                                        size: \"sm\",\n                                                        children: post.profile.fullName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                                        children: post.profile.position\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.IconButton, {\n                                        variant: \"ghost\",\n                                        colorScheme: \"gray\",\n                                        \"aria-label\": \"See menu\",\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsThreeDotsVertical_react_icons_bs__WEBPACK_IMPORTED_MODULE_17__.BsThreeDotsVertical, {}, void 0, false, {\n                                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 21\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.CardBody, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                children: post.content\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Image, {\n                            objectFit: \"cover\",\n                            src: \"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80\",\n                            alt: \"Chakra UI\",\n                            width: \"100%\",\n                            height: \"a\"\n                        }, void 0, false, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.CardFooter, {\n                            justify: \"space-between\",\n                            flexWrap: \"wrap\",\n                            sx: {\n                                \"& > button\": {\n                                    minW: \"50px\"\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    flex: \"1\",\n                                    variant: \"ghost\",\n                                    leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__.BiLike, {}, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 54\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    flex: \"1\",\n                                    variant: \"ghost\",\n                                    leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__.BiChat, {}, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 54\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    flex: \"1\",\n                                    variant: \"ghost\",\n                                    leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__.BiShare, {}, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 54\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(PostsComponent, \"da5AG4CdvMA5USfSPeX17acKpGc=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_3__.useFormik\n    ];\n});\n_c = PostsComponent;\nvar _c;\n$RefreshReg$(_c, \"PostsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zaGFyZWQtY29tcG9uZW50L2NsaWVudC1jb21wb25lbnQvcG9zdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2tIO0FBQ3ZIO0FBRThCO0FBQ0o7QUFDSjtBQUNKO0FBQ1o7QUFFekMsTUFBTXdCLFlBQVk7SUFDaEI7UUFDRUMsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLEtBQUs7WUFDSDtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxXQUFXLElBQUlDO1FBQ2ZDLFNBQVM7WUFDUEMsU0FBUztZQUNUQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0NBQ0Q7QUFDYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUduQywrQ0FBUUEsQ0FBQ3VCO0lBRW5DLE1BQU1hLFNBQVNyQixpREFBU0EsQ0FBQztRQUN2QnNCLGVBQWU7WUFDYkMsU0FBUztRQUNYO1FBQ0FDLFVBQVUsQ0FBQ0M7WUFDVEMsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO1FBQ3hCO0lBQ0Y7SUFFQSxNQUFNRyxtQkFBbUIsQ0FBQ0M7UUFDeEJSLE9BQU9TLGFBQWEsQ0FBQyxXQUFXRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7SUFDcEQ7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkJQLFFBQVFDLEdBQUcsQ0FBQyxXQUFXTixPQUFPSSxNQUFNLENBQUNGLE9BQU87SUFFOUM7SUFFQSxxQkFDRSw4REFBQ2pDLG9EQUFNQTtRQUFDNEMsU0FBUztRQUFHQyxPQUFNOzswQkFDeEIsOERBQUNqRCxpREFBR0E7Z0JBQ0ZpRCxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFhO2dCQUNiQyxjQUFjO2dCQUNkQyxTQUFRO2dCQUNSQyxlQUFjO2dCQUNkQyxLQUFLO2dCQUNMQyxZQUFZOztrQ0FFWiw4REFBQ3RELHNEQUFRQTt3QkFDUDRDLE9BQU9YLE9BQU9JLE1BQU0sQ0FBQ0YsT0FBTzt3QkFDNUJvQixVQUFVZjt3QkFDVmdCLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ3JELG9EQUFNQTt3QkFBQzJDLFNBQVM7d0JBQUdXLFNBQVE7d0JBQU1WLE9BQU07OzBDQUN0Qyw4REFBQzlDLG9EQUFNQTswQ0FBQyw0RUFBQ1ksMkVBQWVBO29DQUFDNkMsTUFBTTVDLHVFQUFRQTs7Ozs7Ozs7Ozs7MENBQ3ZDLDhEQUFDYixvREFBTUE7Z0NBQUMwRCxTQUFTZDswQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUd0Q2QsTUFBTTZCLE1BQU0sS0FBSyxtQkFBSyw4REFBQzdELG1EQUFJQTswQkFBQzs7Ozs7O1lBQzVCZ0MsTUFBTThCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ3pELG1EQUFJQTtvQkFBQzJDLE1BQUs7O3NDQUNYLDhEQUFDeEMseURBQVVBO3NDQUNULDRFQUFDQyxtREFBSUE7Z0NBQUM0QyxLQUFLOztrREFDVCw4REFBQzVDLG1EQUFJQTt3Q0FBQ3NELE1BQUs7d0NBQUlWLEtBQUk7d0NBQUlDLFlBQVc7d0NBQVNVLFVBQVM7OzBEQUNsRCw4REFBQzVELHFEQUFNQTtnREFBQzZELE1BQU1ILEtBQUtwQyxPQUFPLENBQUNFLFFBQVE7Z0RBQUVzQyxLQUFLSixLQUFLcEMsT0FBTyxDQUFDQyxPQUFPOzs7Ozs7MERBRTlELDhEQUFDN0IsaURBQUdBOztrRUFDRiw4REFBQ1ksc0RBQU9BO3dEQUFDeUQsTUFBSztrRUFBTUwsS0FBS3BDLE9BQU8sQ0FBQ0UsUUFBUTs7Ozs7O2tFQUN6Qyw4REFBQzdCLG1EQUFJQTtrRUFBRStELEtBQUtwQyxPQUFPLENBQUNHLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFHaEMsOERBQUNsQix5REFBVUE7d0NBQ1R5RCxTQUFRO3dDQUNSQyxhQUFZO3dDQUNaQyxjQUFXO3dDQUNYWixvQkFBTSw4REFBQ3hDLDJHQUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJaEMsOERBQUNaLHVEQUFRQTtzQ0FDUCw0RUFBQ1AsbURBQUlBOzBDQUNEK0QsS0FBS3hDLE9BQU87Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0gsb0RBQUtBOzRCQUNKb0QsV0FBVTs0QkFDVkwsS0FBSTs0QkFDSk0sS0FBSTs0QkFDSnpCLE9BQU07NEJBQ04wQixRQUFPOzs7Ozs7c0NBR1QsOERBQUNsRSx5REFBVUE7NEJBQ1RrRCxTQUFROzRCQUNSTyxVQUFTOzRCQUNUVSxJQUFJO2dDQUNGLGNBQWM7b0NBQ1pDLE1BQU07Z0NBQ1I7NEJBQ0Y7OzhDQUVBLDhEQUFDMUUsb0RBQU1BO29DQUFDOEQsTUFBSztvQ0FBSUssU0FBUTtvQ0FBUVEsd0JBQVUsOERBQUM3RCxnR0FBTUE7Ozs7Ozs7Ozs7OENBR2xELDhEQUFDZCxvREFBTUE7b0NBQUM4RCxNQUFLO29DQUFJSyxTQUFRO29DQUFRUSx3QkFBVSw4REFBQzVELGdHQUFNQTs7Ozs7Ozs7Ozs4Q0FHbEQsOERBQUNmLG9EQUFNQTtvQ0FBQzhELE1BQUs7b0NBQUlLLFNBQVE7b0NBQVFRLHdCQUFVLDhEQUFDM0QsaUdBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdEO0dBcEd3QmE7O1FBR1BsQiw2Q0FBU0E7OztLQUhGa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC1jb21wb25lbnQvY2xpZW50LWNvbXBvbmVudC9wb3N0cy50c3g/N2Q0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgVGV4dGFyZWEsIEJ1dHRvbiwgVlN0YWNrLCBIU3RhY2ssIEF2YXRhciwgQ2FyZCwgQ2FyZEJvZHksIENhcmRGb290ZXIsIENhcmRIZWFkZXIsIEZsZXgsIEhlYWRpbmcsIEljb25CdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IEF0dGFjaG1lbnRJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFJbWFnZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgQmlMaWtlLCBCaUNoYXQsIEJpU2hhcmUgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5pbXBvcnQgeyBCc1RocmVlRG90c1ZlcnRpY2FsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuY29uc3QgbW9ja1Bvc3RzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgY29udGVudDogJ3RoaXMgaXMgdGhlIGZpcnN0IHBvc3QhIEkgbG92ZSB5b3UgdmVyeSBtdWNoJyxcbiAgICBpbWc6IFtcbiAgICAgIFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwMHg4MDA/dGV4dD1GaXJzdCtJbWFnZVwiLFxuICAgICAgXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAweDgwMD90ZXh0PVNlY29uZCtJbWFnZVwiLFxuICAgICAgXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAweDgwMD90ZXh0PVRoaXJkK0ltYWdlXCJcbiAgICBdLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICBwcm9maWxlOiB7XG4gICAgICBhdmFydGFyOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwP3RleHQ9QXZhdGFyK0ltYWdlXCIsXG4gICAgICBmdWxsTmFtZTogXCJKb2huIERvZVwiLFxuICAgICAgcG9zaXRpb246IFwiU29mdHdhcmUgRW5naW5lZXJcIlxuICAgIH1cbiAgfVxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzQ29tcG9uZW50KCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKG1vY2tQb3N0cyk7XG5cbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuZXdQb3N0OiAnJ1xuICAgIH0sXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZXMnLCB2YWx1ZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlUG9zdENoYW5nZSA9IChldmVudDogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9fSkgPT4ge1xuICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCduZXdQb3N0JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3N0U3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCduZXdQb3N0JywgZm9ybWlrLnZhbHVlcy5uZXdQb3N0KTtcbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxWU3RhY2sgc3BhY2luZz17NH0gd2lkdGg9XCJmdWxsXCI+XG4gICAgICA8Qm94ICBcbiAgICAgICAgd2lkdGg9XCJmdWxsXCJcbiAgICAgICAgbWF4Vz0nbGcnXG4gICAgICAgIHBhZGRpbmdMZWZ0PXs1fSBcbiAgICAgICAgcGFkZGluZ1JpZ2h0PXs1fVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBnYXA9ezR9XG4gICAgICAgIGFsaWduSXRlbXM9e1wiZW5kXCJ9XG4gICAgICAgID5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmV3UG9zdH0gXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBvc3RDaGFuZ2V9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBwb3N0IGhlcmUuLi5cIiBcbiAgICAgICAgLz5cbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fSBqdXN0aWZ5PSdlbmQnIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxCdXR0b24+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUltYWdlc30gLz48L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBvc3RTdWJtaXR9PlBvc3Q8L0J1dHRvbj5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L0JveD5cbiAgICAgIHtwb3N0cy5sZW5ndGggPT09IDAgJiYgPFRleHQ+WW91J3ZlIG5ldmVyIHNlZW4gYW55IHBvc3RzLjwvVGV4dD59XG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxDYXJkIG1heFc9J2xnJz5cbiAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPEZsZXggZ2FwPXs0fT5cbiAgICAgICAgICAgIDxGbGV4IGZsZXg9JzEnIGdhcD0nNCcgYWxpZ25JdGVtcz0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCc+XG4gICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17cG9zdC5wcm9maWxlLmZ1bGxOYW1lfSBzcmM9e3Bvc3QucHJvZmlsZS5hdmFydGFyfSAvPlxuICAgICAgXG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT0nc20nPntwb3N0LnByb2ZpbGUuZnVsbE5hbWV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxUZXh0Pntwb3N0LnByb2ZpbGUucG9zaXRpb259PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2dob3N0J1xuICAgICAgICAgICAgICBjb2xvclNjaGVtZT0nZ3JheSdcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nU2VlIG1lbnUnXG4gICAgICAgICAgICAgIGljb249ezxCc1RocmVlRG90c1ZlcnRpY2FsIC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeyBwb3N0LmNvbnRlbnQgfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgICBzcmM9J2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMxNDAzMDA5Mjg0LTQ0MGYwODBkMWUxMj9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTc3MCZxPTgwJ1xuICAgICAgICAgIGFsdD0nQ2hha3JhIFVJJ1xuICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgIGhlaWdodD0nYSdcbiAgICAgICAgLz5cbiAgICAgIFxuICAgICAgICA8Q2FyZEZvb3RlclxuICAgICAgICAgIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXG4gICAgICAgICAgZmxleFdyYXA9J3dyYXAnXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICcmID4gYnV0dG9uJzoge1xuICAgICAgICAgICAgICBtaW5XOiAnNTBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uIGZsZXg9JzEnIHZhcmlhbnQ9J2dob3N0JyBsZWZ0SWNvbj17PEJpTGlrZSAvPn0+XG4gICAgICAgICAgICB7LyogTGlrZSAqL31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGZsZXg9JzEnIHZhcmlhbnQ9J2dob3N0JyBsZWZ0SWNvbj17PEJpQ2hhdCAvPn0+XG4gICAgICAgICAgICB7LyogQ29tbWVudCAqL31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGZsZXg9JzEnIHZhcmlhbnQ9J2dob3N0JyBsZWZ0SWNvbj17PEJpU2hhcmUgLz59PlxuICAgICAgICAgICAgey8qIFNoYXJlICovfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICA8L0NhcmQ+XG4gICAgICApKX1cbiAgICA8L1ZTdGFjaz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiVGV4dCIsIlRleHRhcmVhIiwiQnV0dG9uIiwiVlN0YWNrIiwiSFN0YWNrIiwiQXZhdGFyIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkNhcmRIZWFkZXIiLCJGbGV4IiwiSGVhZGluZyIsIkljb25CdXR0b24iLCJ1c2VGb3JtaWsiLCJGb250QXdlc29tZUljb24iLCJmYUltYWdlcyIsIkJpTGlrZSIsIkJpQ2hhdCIsIkJpU2hhcmUiLCJCc1RocmVlRG90c1ZlcnRpY2FsIiwiSW1hZ2UiLCJtb2NrUG9zdHMiLCJpZCIsImNvbnRlbnQiLCJpbWciLCJjcmVhdGVkQXQiLCJEYXRlIiwicHJvZmlsZSIsImF2YXJ0YXIiLCJmdWxsTmFtZSIsInBvc2l0aW9uIiwiUG9zdHNDb21wb25lbnQiLCJwb3N0cyIsInNldFBvc3RzIiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5ld1Bvc3QiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQb3N0Q2hhbmdlIiwiZXZlbnQiLCJzZXRGaWVsZFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3N0U3VibWl0Iiwic3BhY2luZyIsIndpZHRoIiwibWF4VyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJhbGlnbkl0ZW1zIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImp1c3RpZnkiLCJpY29uIiwib25DbGljayIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJmbGV4IiwiZmxleFdyYXAiLCJuYW1lIiwic3JjIiwic2l6ZSIsInZhcmlhbnQiLCJjb2xvclNjaGVtZSIsImFyaWEtbGFiZWwiLCJvYmplY3RGaXQiLCJhbHQiLCJoZWlnaHQiLCJzeCIsIm1pblciLCJsZWZ0SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/shared-component/client-component/posts.tsx\n"));

/***/ })

});