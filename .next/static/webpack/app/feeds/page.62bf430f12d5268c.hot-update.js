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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostsComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PostsComponent() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n        initialValues: {\n            newPost: \"\"\n        },\n        onSubmit: (values)=>{\n            console.log(\"values\", values);\n        }\n    });\n    const handlePostChange = (event)=>{\n        formik.setFieldValue(\"newPost\", event.target.value);\n    };\n    const handlePostSubmit = ()=>{\n        console.log(\"newPost\", formik.values.newPost);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        spacing: 4,\n        width: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                width: \"full\",\n                paddingLeft: 5,\n                paddingRight: 5,\n                display: \"flex\",\n                flexDirection: \"column\",\n                gap: 4,\n                alignItems: \"end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                        value: formik.values.newPost,\n                        onChange: handlePostChange,\n                        placeholder: \"Write your post here...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        onClick: handlePostSubmit,\n                        colorScheme: \"teal\",\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            posts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                children: \"You've never seen any posts.\"\n            }, void 0, false, {\n                fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                lineNumber: 45,\n                columnNumber: 30\n            }, this),\n            posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                    children: post\n                }, index, false, {\n                    fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 35\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/phiraphat/Desktop/Work group/Project/OurDaily-Post/src/shared-component/client-component/posts.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(PostsComponent, \"0es7aK8/AWmXRMW7Ih99WCWHyso=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_2__.useFormik\n    ];\n});\n_c = PostsComponent;\nvar _c;\n$RefreshReg$(_c, \"PostsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zaGFyZWQtY29tcG9uZW50L2NsaWVudC1jb21wb25lbnQvcG9zdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUMrQjtBQUNwQztBQUVwQixTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVUsU0FBU0osaURBQVNBLENBQUM7UUFDdkJLLGVBQWU7WUFDYkMsU0FBUztRQUNYO1FBQ0FDLFVBQVUsQ0FBQ0M7WUFDVEMsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO1FBQ3hCO0lBQ0Y7SUFFQSxNQUFNRyxtQkFBbUIsQ0FBQ0M7UUFDeEJSLE9BQU9TLGFBQWEsQ0FBQyxXQUFXRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7SUFDcEQ7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkJQLFFBQVFDLEdBQUcsQ0FBQyxXQUFXTixPQUFPSSxNQUFNLENBQUNGLE9BQU87SUFFOUM7SUFFQSxxQkFDRSw4REFBQ1Asb0RBQU1BO1FBQUNrQixTQUFTO1FBQUdDLE9BQU07OzBCQUN4Qiw4REFBQ3ZCLGlEQUFHQTtnQkFDRnVCLE9BQU07Z0JBQ05DLGFBQWE7Z0JBQ2JDLGNBQWM7Z0JBQ2RDLFNBQVE7Z0JBQ1JDLGVBQWM7Z0JBQ2RDLEtBQUs7Z0JBQ0xDLFlBQVk7O2tDQUVaLDhEQUFDM0Isc0RBQVFBO3dCQUNQa0IsT0FBT1gsT0FBT0ksTUFBTSxDQUFDRixPQUFPO3dCQUM1Qm1CLFVBQVVkO3dCQUNWZSxhQUFZOzs7Ozs7a0NBRWQsOERBQUM1QixvREFBTUE7d0JBQUM2QixTQUFTWDt3QkFBa0JZLGFBQVk7a0NBQU87Ozs7Ozs7Ozs7OztZQUV2RDFCLE1BQU0yQixNQUFNLEtBQUssbUJBQUssOERBQUNqQyxrREFBSUE7MEJBQUM7Ozs7OztZQUM1Qk0sTUFBTTRCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFBVSw4REFBQ3BDLGtEQUFJQTs4QkFBY21DO21CQUFSQzs7Ozs7Ozs7Ozs7QUFHN0M7R0EzQ3dCL0I7O1FBR1BELDZDQUFTQTs7O0tBSEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQtY29tcG9uZW50L2NsaWVudC1jb21wb25lbnQvcG9zdHMudHN4PzdkNDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFRleHQsIFRleHRhcmVhLCBCdXR0b24sIFZTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0c0NvbXBvbmVudCgpIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuZXdQb3N0OiAnJ1xuICAgIH0sXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZXMnLCB2YWx1ZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlUG9zdENoYW5nZSA9IChldmVudDogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9fSkgPT4ge1xuICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCduZXdQb3N0JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3N0U3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCduZXdQb3N0JywgZm9ybWlrLnZhbHVlcy5uZXdQb3N0KTtcbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxWU3RhY2sgc3BhY2luZz17NH0gd2lkdGg9XCJmdWxsXCI+XG4gICAgICA8Qm94IFxuICAgICAgICB3aWR0aD1cImZ1bGxcIiBcbiAgICAgICAgcGFkZGluZ0xlZnQ9ezV9IFxuICAgICAgICBwYWRkaW5nUmlnaHQ9ezV9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGdhcD17NH1cbiAgICAgICAgYWxpZ25JdGVtcz17XCJlbmRcIn1cbiAgICAgICAgPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uZXdQb3N0fSBcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUG9zdENoYW5nZX0gXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIHBvc3QgaGVyZS4uLlwiIFxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBvc3RTdWJtaXR9IGNvbG9yU2NoZW1lPVwidGVhbFwiPlBvc3Q8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgICAge3Bvc3RzLmxlbmd0aCA9PT0gMCAmJiA8VGV4dD5Zb3UndmUgbmV2ZXIgc2VlbiBhbnkgcG9zdHMuPC9UZXh0Pn1cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiA8VGV4dCBrZXk9e2luZGV4fT57cG9zdH08L1RleHQ+KX1cbiAgICA8L1ZTdGFjaz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiVGV4dCIsIlRleHRhcmVhIiwiQnV0dG9uIiwiVlN0YWNrIiwidXNlRm9ybWlrIiwiUG9zdHNDb21wb25lbnQiLCJwb3N0cyIsInNldFBvc3RzIiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5ld1Bvc3QiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQb3N0Q2hhbmdlIiwiZXZlbnQiLCJzZXRGaWVsZFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQb3N0U3VibWl0Iiwic3BhY2luZyIsIndpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsImFsaWduSXRlbXMiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsImNvbG9yU2NoZW1lIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/shared-component/client-component/posts.tsx\n"));

/***/ })

});