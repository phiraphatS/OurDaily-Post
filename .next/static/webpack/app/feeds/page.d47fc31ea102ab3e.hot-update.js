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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/avatar/dist/chunk-V7PAE35Z.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-BDSTZZXD.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! __barrel_optimize__?names=BiChat,BiLike,BiShare!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsThreeDotsVertical_react_icons_bs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=BsThreeDotsVertical!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst mockPosts = [\n    {\n        id: 1,\n        content: \"this is the first post! I love you very much\",\n        img: [\n            \"https://via.placeholder.com/800x800?text=First+Image\",\n            \"https://via.placeholder.com/800x800?text=Second+Image\",\n            \"https://via.placeholder.com/800x800?text=Third+Image\"\n        ],\n        createdAt: new Date(),\n        profile: {\n            avartar: \"https://via.placeholder.com/150x150?text=Avatar+Image\",\n            fullName: \"John Doe\"\n        }\n    }\n];\nfunction PostsComponent() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mockPosts);\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({\n        initialValues: {\n            newPost: \"\"\n        },\n        onSubmit: (values)=>{\n            console.log(\"values\", values);\n        }\n    });\n    const handlePostChange = (event)=>{\n        formik.setFieldValue(\"newPost\", event.target.value);\n    };\n    const handlePostSubmit = ()=>{\n        console.log(\"newPost\", formik.values.newPost);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        spacing: 4,\n        width: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                width: \"full\",\n                maxW: \"lg\",\n                paddingLeft: 5,\n                paddingRight: 5,\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: 4,\n                alignItems: \"end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                        value: formik.values.newPost,\n                        onChange: handlePostChange,\n                        placeholder: \"Write your post here...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        spacing: 4,\n                        justify: \"end\",\n                        width: \"full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faImages\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                onClick: handlePostSubmit,\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            posts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                children: \"You've never seen any posts.\"\n            }, void 0, false, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 71,\n                columnNumber: 30\n            }, this),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card, {\n                    maxW: \"lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.CardHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {\n                                gap: 4,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {\n                                        flex: \"1\",\n                                        gap: \"4\",\n                                        alignItems: \"center\",\n                                        flexWrap: \"wrap\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Avatar, {\n                                                name: \"Segun Adebayo\",\n                                                src: \"https://bit.ly/sage-adebayo\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Heading, {\n                                                        size: \"sm\",\n                                                        children: \"Segun Adebayo\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                                        children: \"Creator, Chakra UI\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.IconButton, {\n                                        variant: \"ghost\",\n                                        colorScheme: \"gray\",\n                                        \"aria-label\": \"See menu\",\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsThreeDotsVertical_react_icons_bs__WEBPACK_IMPORTED_MODULE_17__.BsThreeDotsVertical, {}, void 0, false, {\n                                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 21\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.CardBody, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                children: \"With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Image, {\n                            objectFit: \"cover\",\n                            src: \"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80\",\n                            alt: \"Chakra UI\",\n                            width: \"100%\",\n                            height: \"a\"\n                        }, void 0, false, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.CardFooter, {\n                            justify: \"space-between\",\n                            flexWrap: \"wrap\",\n                            sx: {\n                                \"& > button\": {\n                                    minW: \"136px\"\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    flex: \"1\",\n                                    variant: \"ghost\",\n                                    leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__.BiLike, {}, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 54\n                                    }, void 0),\n                                    children: \"Like\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    flex: \"1\",\n                                    variant: \"ghost\",\n                                    leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__.BiChat, {}, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 54\n                                    }, void 0),\n                                    children: \"Comment\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    flex: \"1\",\n                                    variant: \"ghost\",\n                                    leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiChat_BiLike_BiShare_react_icons_bi__WEBPACK_IMPORTED_MODULE_21__.BiShare, {}, void 0, false, {\n                                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 54\n                                    }, void 0),\n                                    children: \"Share\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(PostsComponent, \"da5AG4CdvMA5USfSPeX17acKpGc=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_3__.useFormik\n    ];\n});\n_c = PostsComponent;\nvar _c;\n$RefreshReg$(_c, \"PostsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zaGFyZWQtY29tcG9uZW50L2NsaWVudC1jb21wb25lbnQvcG9zdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2tIO0FBQ3ZIO0FBRThCO0FBQ0o7QUFDSjtBQUNKO0FBQ1o7QUFFekMsTUFBTXdCLFlBQVk7SUFDaEI7UUFDRUMsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLEtBQUs7WUFDSDtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxXQUFXLElBQUlDO1FBQ2ZDLFNBQVM7WUFDUEMsU0FBUztZQUNUQyxVQUFVO1FBQ1o7SUFDRjtDQUNEO0FBQ2MsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHbEMsK0NBQVFBLENBQUN1QjtJQUVuQyxNQUFNWSxTQUFTcEIsaURBQVNBLENBQUM7UUFDdkJxQixlQUFlO1lBQ2JDLFNBQVM7UUFDWDtRQUNBQyxVQUFVLENBQUNDO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtRQUN4QjtJQUNGO0lBRUEsTUFBTUcsbUJBQW1CLENBQUNDO1FBQ3hCUixPQUFPUyxhQUFhLENBQUMsV0FBV0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3BEO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCUCxRQUFRQyxHQUFHLENBQUMsV0FBV04sT0FBT0ksTUFBTSxDQUFDRixPQUFPO0lBRTlDO0lBRUEscUJBQ0UsOERBQUNoQyxvREFBTUE7UUFBQzJDLFNBQVM7UUFBR0MsT0FBTTs7MEJBQ3hCLDhEQUFDaEQsaURBQUdBO2dCQUNGZ0QsT0FBTTtnQkFDTkMsTUFBSztnQkFDTEMsYUFBYTtnQkFDYkMsY0FBYztnQkFDZEMsU0FBUTtnQkFDUkMsZUFBYztnQkFDZEMsS0FBSztnQkFDTEMsWUFBWTs7a0NBRVosOERBQUNyRCxzREFBUUE7d0JBQ1AyQyxPQUFPWCxPQUFPSSxNQUFNLENBQUNGLE9BQU87d0JBQzVCb0IsVUFBVWY7d0JBQ1ZnQixhQUFZOzs7Ozs7a0NBRWQsOERBQUNwRCxvREFBTUE7d0JBQUMwQyxTQUFTO3dCQUFHVyxTQUFRO3dCQUFNVixPQUFNOzswQ0FDdEMsOERBQUM3QyxvREFBTUE7MENBQUMsNEVBQUNZLDJFQUFlQTtvQ0FBQzRDLE1BQU0zQyx1RUFBUUE7Ozs7Ozs7Ozs7OzBDQUN2Qyw4REFBQ2Isb0RBQU1BO2dDQUFDeUQsU0FBU2Q7MENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHdENkLE1BQU02QixNQUFNLEtBQUssbUJBQUssOERBQUM1RCxtREFBSUE7MEJBQUM7Ozs7OztZQUM1QitCLE1BQU04QixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUN4RCxtREFBSUE7b0JBQUMwQyxNQUFLOztzQ0FDWCw4REFBQ3ZDLHlEQUFVQTtzQ0FDVCw0RUFBQ0MsbURBQUlBO2dDQUFDMkMsS0FBSzs7a0RBQ1QsOERBQUMzQyxtREFBSUE7d0NBQUNxRCxNQUFLO3dDQUFJVixLQUFJO3dDQUFJQyxZQUFXO3dDQUFTVSxVQUFTOzswREFDbEQsOERBQUMzRCxxREFBTUE7Z0RBQUM0RCxNQUFLO2dEQUFnQkMsS0FBSTs7Ozs7OzBEQUVqQyw4REFBQ25FLGlEQUFHQTs7a0VBQ0YsOERBQUNZLHNEQUFPQTt3REFBQ3dELE1BQUs7a0VBQUs7Ozs7OztrRUFDbkIsOERBQUNuRSxtREFBSUE7a0VBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFHViw4REFBQ1kseURBQVVBO3dDQUNUd0QsU0FBUTt3Q0FDUkMsYUFBWTt3Q0FDWkMsY0FBVzt3Q0FDWFosb0JBQU0sOERBQUN2QywyR0FBbUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSWhDLDhEQUFDWix1REFBUUE7c0NBQ1AsNEVBQUNQLG1EQUFJQTswQ0FBQzs7Ozs7Ozs7Ozs7c0NBTVIsOERBQUNvQixvREFBS0E7NEJBQ0ptRCxXQUFVOzRCQUNWTCxLQUFJOzRCQUNKTSxLQUFJOzRCQUNKekIsT0FBTTs0QkFDTjBCLFFBQU87Ozs7OztzQ0FHVCw4REFBQ2pFLHlEQUFVQTs0QkFDVGlELFNBQVE7NEJBQ1JPLFVBQVM7NEJBQ1RVLElBQUk7Z0NBQ0YsY0FBYztvQ0FDWkMsTUFBTTtnQ0FDUjs0QkFDRjs7OENBRUEsOERBQUN6RSxvREFBTUE7b0NBQUM2RCxNQUFLO29DQUFJSyxTQUFRO29DQUFRUSx3QkFBVSw4REFBQzVELGdHQUFNQTs7Ozs7OENBQUs7Ozs7Ozs4Q0FHdkQsOERBQUNkLG9EQUFNQTtvQ0FBQzZELE1BQUs7b0NBQUlLLFNBQVE7b0NBQVFRLHdCQUFVLDhEQUFDM0QsZ0dBQU1BOzs7Ozs4Q0FBSzs7Ozs7OzhDQUd2RCw4REFBQ2Ysb0RBQU1BO29DQUFDNkQsTUFBSztvQ0FBSUssU0FBUTtvQ0FBUVEsd0JBQVUsOERBQUMxRCxpR0FBT0E7Ozs7OzhDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEU7R0F0R3dCWTs7UUFHUGpCLDZDQUFTQTs7O0tBSEZpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2hhcmVkLWNvbXBvbmVudC9jbGllbnQtY29tcG9uZW50L3Bvc3RzLnRzeD83ZDQ3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0YXJlYSwgQnV0dG9uLCBWU3RhY2ssIEhTdGFjaywgQXZhdGFyLCBDYXJkLCBDYXJkQm9keSwgQ2FyZEZvb3RlciwgQ2FyZEhlYWRlciwgRmxleCwgSGVhZGluZywgSWNvbkJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgQXR0YWNobWVudEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUltYWdlcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBCaUxpa2UsIEJpQ2hhdCwgQmlTaGFyZSB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcbmltcG9ydCB7IEJzVGhyZWVEb3RzVmVydGljYWwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5jb25zdCBtb2NrUG9zdHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBjb250ZW50OiAndGhpcyBpcyB0aGUgZmlyc3QgcG9zdCEgSSBsb3ZlIHlvdSB2ZXJ5IG11Y2gnLFxuICAgIGltZzogW1xuICAgICAgXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAweDgwMD90ZXh0PUZpcnN0K0ltYWdlXCIsXG4gICAgICBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDB4ODAwP3RleHQ9U2Vjb25kK0ltYWdlXCIsXG4gICAgICBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDB4ODAwP3RleHQ9VGhpcmQrSW1hZ2VcIlxuICAgIF0sXG4gICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgIHByb2ZpbGU6IHtcbiAgICAgIGF2YXJ0YXI6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTA/dGV4dD1BdmF0YXIrSW1hZ2VcIixcbiAgICAgIGZ1bGxOYW1lOiBcIkpvaG4gRG9lXCIsXG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHNDb21wb25lbnQoKSB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUobW9ja1Bvc3RzKTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5ld1Bvc3Q6ICcnXG4gICAgfSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3ZhbHVlcycsIHZhbHVlcyk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVQb3N0Q2hhbmdlID0gKGV2ZW50OiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH19KSA9PiB7XG4gICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ25ld1Bvc3QnLCBldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ25ld1Bvc3QnLCBmb3JtaWsudmFsdWVzLm5ld1Bvc3QpO1xuICAgIFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFZTdGFjayBzcGFjaW5nPXs0fSB3aWR0aD1cImZ1bGxcIj5cbiAgICAgIDxCb3ggIFxuICAgICAgICB3aWR0aD1cImZ1bGxcIlxuICAgICAgICBtYXhXPSdsZydcbiAgICAgICAgcGFkZGluZ0xlZnQ9ezV9IFxuICAgICAgICBwYWRkaW5nUmlnaHQ9ezV9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGdhcD17NH1cbiAgICAgICAgYWxpZ25JdGVtcz17XCJlbmRcIn1cbiAgICAgICAgPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uZXdQb3N0fSBcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUG9zdENoYW5nZX0gXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIHBvc3QgaGVyZS4uLlwiIFxuICAgICAgICAvPlxuICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezR9IGp1c3RpZnk9J2VuZCcgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPEJ1dHRvbj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW1hZ2VzfSAvPjwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUG9zdFN1Ym1pdH0+UG9zdDwvQnV0dG9uPlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgIDwvQm94PlxuICAgICAge3Bvc3RzLmxlbmd0aCA9PT0gMCAmJiA8VGV4dD5Zb3UndmUgbmV2ZXIgc2VlbiBhbnkgcG9zdHMuPC9UZXh0Pn1cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPENhcmQgbWF4Vz0nbGcnPlxuICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICA8RmxleCBnYXA9ezR9PlxuICAgICAgICAgICAgPEZsZXggZmxleD0nMScgZ2FwPSc0JyBhbGlnbkl0ZW1zPSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJz5cbiAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPSdTZWd1biBBZGViYXlvJyBzcmM9J2h0dHBzOi8vYml0Lmx5L3NhZ2UtYWRlYmF5bycgLz5cbiAgICAgIFxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9J3NtJz5TZWd1biBBZGViYXlvPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxUZXh0PkNyZWF0b3IsIENoYWtyYSBVSTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PSdnaG9zdCdcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2dyYXknXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J1NlZSBtZW51J1xuICAgICAgICAgICAgICBpY29uPXs8QnNUaHJlZURvdHNWZXJ0aWNhbCAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIFdpdGggQ2hha3JhIFVJLCBJIHdhbnRlZCB0byBzeW5jIHRoZSBzcGVlZCBvZiBkZXZlbG9wbWVudCB3aXRoIHRoZSBzcGVlZFxuICAgICAgICAgICAgb2YgZGVzaWduLiBJIHdhbnRlZCB0aGUgZGV2ZWxvcGVyIHRvIGJlIGp1c3QgYXMgZXhjaXRlZCBhcyB0aGUgZGVzaWduZXIgdG9cbiAgICAgICAgICAgIGNyZWF0ZSBhIHNjcmVlbi5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXG4gICAgICAgICAgc3JjPSdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMTQwMzAwOTI4NC00NDBmMDgwZDFlMTI/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE3NzAmcT04MCdcbiAgICAgICAgICBhbHQ9J0NoYWtyYSBVSSdcbiAgICAgICAgICB3aWR0aD0nMTAwJSdcbiAgICAgICAgICBoZWlnaHQ9J2EnXG4gICAgICAgIC8+XG4gICAgICBcbiAgICAgICAgPENhcmRGb290ZXJcbiAgICAgICAgICBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xuICAgICAgICAgIGZsZXhXcmFwPSd3cmFwJ1xuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAnJiA+IGJ1dHRvbic6IHtcbiAgICAgICAgICAgICAgbWluVzogJzEzNnB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b24gZmxleD0nMScgdmFyaWFudD0nZ2hvc3QnIGxlZnRJY29uPXs8QmlMaWtlIC8+fT5cbiAgICAgICAgICAgIExpa2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGZsZXg9JzEnIHZhcmlhbnQ9J2dob3N0JyBsZWZ0SWNvbj17PEJpQ2hhdCAvPn0+XG4gICAgICAgICAgICBDb21tZW50XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBmbGV4PScxJyB2YXJpYW50PSdnaG9zdCcgbGVmdEljb249ezxCaVNoYXJlIC8+fT5cbiAgICAgICAgICAgIFNoYXJlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvVlN0YWNrPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJUZXh0IiwiVGV4dGFyZWEiLCJCdXR0b24iLCJWU3RhY2siLCJIU3RhY2siLCJBdmF0YXIiLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkZsZXgiLCJIZWFkaW5nIiwiSWNvbkJ1dHRvbiIsInVzZUZvcm1payIsIkZvbnRBd2Vzb21lSWNvbiIsImZhSW1hZ2VzIiwiQmlMaWtlIiwiQmlDaGF0IiwiQmlTaGFyZSIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJJbWFnZSIsIm1vY2tQb3N0cyIsImlkIiwiY29udGVudCIsImltZyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJwcm9maWxlIiwiYXZhcnRhciIsImZ1bGxOYW1lIiwiUG9zdHNDb21wb25lbnQiLCJwb3N0cyIsInNldFBvc3RzIiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5ld1Bvc3QiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQb3N0Q2hhbmdlIiwiZXZlbnQiLCJzZXRGaWVsZFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3N0U3VibWl0Iiwic3BhY2luZyIsIndpZHRoIiwibWF4VyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJhbGlnbkl0ZW1zIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImp1c3RpZnkiLCJpY29uIiwib25DbGljayIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJmbGV4IiwiZmxleFdyYXAiLCJuYW1lIiwic3JjIiwic2l6ZSIsInZhcmlhbnQiLCJjb2xvclNjaGVtZSIsImFyaWEtbGFiZWwiLCJvYmplY3RGaXQiLCJhbHQiLCJoZWlnaHQiLCJzeCIsIm1pblciLCJsZWZ0SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/shared-component/client-component/posts.tsx\n"));

/***/ })

});