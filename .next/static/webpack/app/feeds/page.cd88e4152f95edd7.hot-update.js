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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PostsComponent() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n        initialValues: {\n            newPost: \"\"\n        },\n        onSubmit: (values)=>{\n            console.log(\"values\", values);\n        }\n    });\n    const handlePostChange = (event)=>{\n        formik.setFieldValue(\"newPost\", event.target.value);\n    };\n    const handlePostSubmit = ()=>{\n        console.log(\"newPost\", formik.values.newPost);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        width: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                value: formik.values.newPost,\n                onChange: handlePostChange,\n                placeholder: \"Write your post here...\"\n            }, void 0, false, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                onClick: handlePostSubmit,\n                colorScheme: \"teal\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            posts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                children: \"You've never seen any posts.\"\n            }, void 0, false, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 35,\n                columnNumber: 30\n            }, this),\n            posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    children: post\n                }, index, false, {\n                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 35\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(PostsComponent, \"0es7aK8/AWmXRMW7Ih99WCWHyso=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_2__.useFormik\n    ];\n});\n_c = PostsComponent;\nvar _c;\n$RefreshReg$(_c, \"PostsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zaGFyZWQtY29tcG9uZW50L2NsaWVudC1jb21wb25lbnQvcG9zdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQytCO0FBQ3BDO0FBRXBCLFNBQVNPOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNUyxTQUFTSixpREFBU0EsQ0FBQztRQUN2QkssZUFBZTtZQUNiQyxTQUFTO1FBQ1g7UUFDQUMsVUFBVSxDQUFDQztZQUNUQyxRQUFRQyxHQUFHLENBQUMsVUFBVUY7UUFDeEI7SUFDRjtJQUVBLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QlIsT0FBT1MsYUFBYSxDQUFDLFdBQVdELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUNwRDtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QlAsUUFBUUMsR0FBRyxDQUFDLFdBQVdOLE9BQU9JLE1BQU0sQ0FBQ0YsT0FBTztJQUU5QztJQUVBLHFCQUNFLDhEQUFDUCxvREFBTUE7UUFBQ2tCLFNBQVM7UUFBR0MsT0FBTTs7MEJBQ3hCLDhEQUFDckIsc0RBQVFBO2dCQUNQa0IsT0FBT1gsT0FBT0ksTUFBTSxDQUFDRixPQUFPO2dCQUM1QmEsVUFBVVI7Z0JBQ1ZTLGFBQVk7Ozs7OzswQkFFZCw4REFBQ3RCLG9EQUFNQTtnQkFBQ3VCLFNBQVNMO2dCQUFrQk0sYUFBWTswQkFBTzs7Ozs7O1lBQ3JEcEIsTUFBTXFCLE1BQU0sS0FBSyxtQkFBSyw4REFBQzNCLGtEQUFJQTswQkFBQzs7Ozs7O1lBQzVCTSxNQUFNc0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUFVLDhEQUFDOUIsa0RBQUlBOzhCQUFjNkI7bUJBQVJDOzs7Ozs7Ozs7OztBQUc3QztHQWpDd0J6Qjs7UUFHUEQsNkNBQVNBOzs7S0FIRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC1jb21wb25lbnQvY2xpZW50LWNvbXBvbmVudC9wb3N0cy50c3g/N2Q0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgVGV4dGFyZWEsIEJ1dHRvbiwgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzQ29tcG9uZW50KCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5ld1Bvc3Q6ICcnXG4gICAgfSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3ZhbHVlcycsIHZhbHVlcyk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVQb3N0Q2hhbmdlID0gKGV2ZW50OiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH19KSA9PiB7XG4gICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ25ld1Bvc3QnLCBldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ25ld1Bvc3QnLCBmb3JtaWsudmFsdWVzLm5ld1Bvc3QpO1xuICAgIFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFZTdGFjayBzcGFjaW5nPXs0fSB3aWR0aD1cImZ1bGxcIj5cbiAgICAgIDxUZXh0YXJlYSBcbiAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmV3UG9zdH0gXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQb3N0Q2hhbmdlfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIHBvc3QgaGVyZS4uLlwiIFxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUG9zdFN1Ym1pdH0gY29sb3JTY2hlbWU9XCJ0ZWFsXCI+U3VibWl0PC9CdXR0b24+XG4gICAgICB7cG9zdHMubGVuZ3RoID09PSAwICYmIDxUZXh0PllvdSd2ZSBuZXZlciBzZWVuIGFueSBwb3N0cy48L1RleHQ+fVxuICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IDxUZXh0IGtleT17aW5kZXh9Pntwb3N0fTwvVGV4dD4pfVxuICAgIDwvVlN0YWNrPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0IiwiVGV4dGFyZWEiLCJCdXR0b24iLCJWU3RhY2siLCJ1c2VGb3JtaWsiLCJQb3N0c0NvbXBvbmVudCIsInBvc3RzIiwic2V0UG9zdHMiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmV3UG9zdCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBvc3RDaGFuZ2UiLCJldmVudCIsInNldEZpZWxkVmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBvc3RTdWJtaXQiLCJzcGFjaW5nIiwid2lkdGgiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsImNvbG9yU2NoZW1lIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/shared-component/client-component/posts.tsx\n"));

/***/ })

});