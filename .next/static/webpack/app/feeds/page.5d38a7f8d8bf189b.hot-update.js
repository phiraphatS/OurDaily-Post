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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ \"(app-pages-browser)/./node_modules/@chakra-ui/icons/dist/chunk-NGPSDGVK.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PostsComponent() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n        initialValues: {\n            newPost: \"\"\n        },\n        onSubmit: (values)=>{\n            console.log(\"values\", values);\n        }\n    });\n    const handlePostChange = (event)=>{\n        formik.setFieldValue(\"newPost\", event.target.value);\n    };\n    const handlePostSubmit = ()=>{\n        console.log(\"newPost\", formik.values.newPost);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        width: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                width: \"full\",\n                paddingLeft: 5,\n                paddingRight: 5,\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: 4,\n                alignItems: \"end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                        value: formik.values.newPost,\n                        onChange: handlePostChange,\n                        placeholder: \"Write your post here...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n                        spacing: 4,\n                        justify: \"end\",\n                        width: \"full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.AttachmentIcon, {}, void 0, false, {\n                                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, void 0),\n                                colorScheme: \"teal\"\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                onClick: handlePostSubmit,\n                                colorScheme: \"teal\",\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            posts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                children: \"You've never seen any posts.\"\n            }, void 0, false, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 50,\n                columnNumber: 30\n            }, this),\n            posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                    children: post\n                }, index, false, {\n                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 35\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(PostsComponent, \"0es7aK8/AWmXRMW7Ih99WCWHyso=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_2__.useFormik\n    ];\n});\n_c = PostsComponent;\nvar _c;\n$RefreshReg$(_c, \"PostsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zaGFyZWQtY29tcG9uZW50L2NsaWVudC1jb21wb25lbnQvcG9zdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ3VDO0FBQzVDO0FBQ2U7QUFFbkMsU0FBU1U7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU1ZLFNBQVNMLGlEQUFTQSxDQUFDO1FBQ3ZCTSxlQUFlO1lBQ2JDLFNBQVM7UUFDWDtRQUNBQyxVQUFVLENBQUNDO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtRQUN4QjtJQUNGO0lBRUEsTUFBTUcsbUJBQW1CLENBQUNDO1FBQ3hCUixPQUFPUyxhQUFhLENBQUMsV0FBV0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3BEO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCUCxRQUFRQyxHQUFHLENBQUMsV0FBV04sT0FBT0ksTUFBTSxDQUFDRixPQUFPO0lBRTlDO0lBRUEscUJBQ0UsOERBQUNULG9EQUFNQTtRQUFDb0IsU0FBUztRQUFHQyxPQUFNOzswQkFDeEIsOERBQUN6QixpREFBR0E7Z0JBQ0Z5QixPQUFNO2dCQUNOQyxhQUFhO2dCQUNiQyxjQUFjO2dCQUNkQyxTQUFRO2dCQUNSQyxlQUFjO2dCQUNkQyxLQUFLO2dCQUNMQyxZQUFZOztrQ0FFWiw4REFBQzdCLHNEQUFRQTt3QkFDUG9CLE9BQU9YLE9BQU9JLE1BQU0sQ0FBQ0YsT0FBTzt3QkFDNUJtQixVQUFVZDt3QkFDVmUsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDNUIsb0RBQU1BO3dCQUFDbUIsU0FBUzt3QkFBR1UsU0FBUTt3QkFBTVQsT0FBTTs7MENBQ3RDLDhEQUFDdEIsb0RBQU1BO2dDQUFDZ0Msd0JBQVUsOERBQUM1Qiw0REFBY0E7Ozs7O2dDQUFLNkIsYUFBWTs7Ozs7OzBDQUVsRCw4REFBQ2pDLG9EQUFNQTtnQ0FBQ2tDLFNBQVNkO2dDQUFrQmEsYUFBWTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3pEM0IsTUFBTTZCLE1BQU0sS0FBSyxtQkFBSyw4REFBQ3JDLGtEQUFJQTswQkFBQzs7Ozs7O1lBQzVCUSxNQUFNOEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUFVLDhEQUFDeEMsa0RBQUlBOzhCQUFjdUM7bUJBQVJDOzs7Ozs7Ozs7OztBQUc3QztHQS9Dd0JqQzs7UUFHUEYsNkNBQVNBOzs7S0FIRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC1jb21wb25lbnQvY2xpZW50LWNvbXBvbmVudC9wb3N0cy50c3g/N2Q0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgVGV4dGFyZWEsIEJ1dHRvbiwgVlN0YWNrLCBIU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IEF0dGFjaG1lbnRJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzQ29tcG9uZW50KCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5ld1Bvc3Q6ICcnXG4gICAgfSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3ZhbHVlcycsIHZhbHVlcyk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVQb3N0Q2hhbmdlID0gKGV2ZW50OiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH19KSA9PiB7XG4gICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ25ld1Bvc3QnLCBldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ25ld1Bvc3QnLCBmb3JtaWsudmFsdWVzLm5ld1Bvc3QpO1xuICAgIFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFZTdGFjayBzcGFjaW5nPXs0fSB3aWR0aD1cImZ1bGxcIj5cbiAgICAgIDxCb3ggXG4gICAgICAgIHdpZHRoPVwiZnVsbFwiIFxuICAgICAgICBwYWRkaW5nTGVmdD17NX0gXG4gICAgICAgIHBhZGRpbmdSaWdodD17NX1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgZ2FwPXs0fVxuICAgICAgICBhbGlnbkl0ZW1zPXtcImVuZFwifVxuICAgICAgICA+XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5ld1Bvc3R9IFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQb3N0Q2hhbmdlfSBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgcG9zdCBoZXJlLi4uXCIgXG4gICAgICAgIC8+XG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz17NH0ganVzdGlmeT0nZW5kJyB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8QnV0dG9uIGxlZnRJY29uPXs8QXR0YWNobWVudEljb24gLz59IGNvbG9yU2NoZW1lPVwidGVhbFwiPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUG9zdFN1Ym1pdH0gY29sb3JTY2hlbWU9XCJ0ZWFsXCI+UG9zdDwvQnV0dG9uPlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgIDwvQm94PlxuICAgICAge3Bvc3RzLmxlbmd0aCA9PT0gMCAmJiA8VGV4dD5Zb3UndmUgbmV2ZXIgc2VlbiBhbnkgcG9zdHMuPC9UZXh0Pn1cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiA8VGV4dCBrZXk9e2luZGV4fT57cG9zdH08L1RleHQ+KX1cbiAgICA8L1ZTdGFjaz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiVGV4dCIsIlRleHRhcmVhIiwiQnV0dG9uIiwiVlN0YWNrIiwiSFN0YWNrIiwidXNlRm9ybWlrIiwiQXR0YWNobWVudEljb24iLCJQb3N0c0NvbXBvbmVudCIsInBvc3RzIiwic2V0UG9zdHMiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmV3UG9zdCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBvc3RDaGFuZ2UiLCJldmVudCIsInNldEZpZWxkVmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBvc3RTdWJtaXQiLCJzcGFjaW5nIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYWxpZ25JdGVtcyIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJqdXN0aWZ5IiwibGVmdEljb24iLCJjb2xvclNjaGVtZSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/shared-component/client-component/posts.tsx\n"));

/***/ })

});