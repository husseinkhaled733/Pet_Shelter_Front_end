"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/manager/signup/page",{

/***/ "(app-pages-browser)/./src/app/manager/signup/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/manager/signup/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MangerSignUp = ()=>{\n    _s();\n    const nameRef = useRef(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            component: \"form\",\n            className: \"bg-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"outlined-basic\",\n                label: \"Name\",\n                value: name,\n                onChange: ()=>setName(name),\n                placeholder: \"Enter your name\",\n                helperText: \"Please enter your name\"\n            }, void 0, false, {\n                fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MangerSignUp, \"BYZ0MKfele3nNv3c/OtLOxMeKOs=\");\n_c = MangerSignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MangerSignUp);\nvar _c;\n$RefreshReg$(_c, \"MangerSignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFuYWdlci9zaWdudXAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUM7QUFDWTtBQUcvQyxNQUFNRyxlQUFlOztJQUVuQixNQUFNQyxVQUFVQyxPQUF5QjtJQUV6QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ04seUZBQUdBO1lBQUNPLFdBQVU7WUFBT0QsV0FBVTtzQkFDOUIsNEVBQUNMLHlGQUFTQTtnQkFDUk8sSUFBRztnQkFDSEMsT0FBTTtnQkFDTkMsT0FBT0M7Z0JBQ1BDLFVBQVUsSUFBTUMsUUFBUUY7Z0JBQ3hCRyxhQUFZO2dCQUNaQyxZQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBbEJNYjtLQUFBQTtBQW9CTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21hbmFnZXIvc2lnbnVwL3BhZ2UudHN4PzM0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNYW5nZXJTaWduVXAgPSAoKSA9PiB7XG5cbiAgY29uc3QgbmFtZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byc+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0TmFtZShuYW1lKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBuYW1lJ1xuICAgICAgICAgIGhlbHBlclRleHQ9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmdlclNpZ25VcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUZXh0RmllbGQiLCJNYW5nZXJTaWduVXAiLCJuYW1lUmVmIiwidXNlUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29tcG9uZW50IiwiaWQiLCJsYWJlbCIsInZhbHVlIiwibmFtZSIsIm9uQ2hhbmdlIiwic2V0TmFtZSIsInBsYWNlaG9sZGVyIiwiaGVscGVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/manager/signup/page.tsx\n"));

/***/ })

});