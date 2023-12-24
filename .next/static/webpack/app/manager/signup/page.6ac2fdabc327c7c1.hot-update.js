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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MangerSignUp = ()=>{\n    _s();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const phoneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const validateUser = (user)=>{\n        let userValid = {\n            name: true,\n            email: true,\n            password: true,\n            phone: true\n        };\n        let errors = {\n            name: \"\",\n            email: \"\",\n            password: \"\",\n            phone: \"\"\n        };\n        if (!user.name) {\n            userValid.name = false;\n            errors.name = \"Name is required\";\n        }\n        if (!user.email) {\n            userValid.email = false;\n            errors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(user.email)) {\n            userValid.email = false;\n            errors.email = \"Email address is invalid\";\n        }\n        if (!user.password) {\n            userValid.password = false;\n            errors.password = \"Password is required\";\n        } else if (user.password.length < 6) {\n            userValid.password = false;\n            errors.password = \"Password must be 6 or more characters\";\n        }\n        if (!user.phone) {\n            userValid.phone = false;\n            errors.phone = \"Phone is required\";\n        } else if (!/^\\d+$/.test(user.phone)) {\n            userValid.phone = false;\n            errors.phone = \"Phone number is invalid\";\n        }\n        return {\n            userValid,\n            errors\n        };\n    };\n    const [userValid, setUserValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: true,\n        email: true,\n        password: true,\n        phone: true\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        phone: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = ()=>{\n        var _nameRef_current, _emailRef_current, _passwordRef_current, _phoneRef_current;\n        let user = {\n            name: (_nameRef_current = nameRef.current) === null || _nameRef_current === void 0 ? void 0 : _nameRef_current.value,\n            email: (_emailRef_current = emailRef.current) === null || _emailRef_current === void 0 ? void 0 : _emailRef_current.value,\n            password: (_passwordRef_current = passwordRef.current) === null || _passwordRef_current === void 0 ? void 0 : _passwordRef_current.value,\n            phone: (_phoneRef_current = phoneRef.current) === null || _phoneRef_current === void 0 ? void 0 : _phoneRef_current.value\n        };\n        let { userValid, errors } = validateUser(user);\n        setUserValid(userValid);\n        setErrors(errors);\n        userValid.name && userValid.email && userValid.password && userValid.phone && router.push(\"/manager\");\n    };\n    const testFieldStyle = \"w-2/3 m-5\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            component: \"form\",\n            className: \"bg-white h-200 m-auto flex flex-col justify-center items-center rounded-lg w-2/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Name\",\n                    placeholder: \"Enter your name\",\n                    inputRef: nameRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.name,\n                    helperText: userValid.name ? \"\" : errors.name\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Email\",\n                    placeholder: \"Enter your email\",\n                    inputRef: emailRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.email,\n                    helperText: userValid.email ? \"\" : errors.email\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Phone number\",\n                    placeholder: \"Enter your phone number\",\n                    inputRef: phoneRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.phone,\n                    helperText: userValid.phone ? \"\" : errors.phone\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Password\",\n                    placeholder: \"Enter your \",\n                    inputRef: phoneRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.phone,\n                    helperText: userValid.phone ? \"\" : errors.phone\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MangerSignUp, \"Qqwj9wwqa5LFHHIz2ApxxIWnbRU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MangerSignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MangerSignUp);\nvar _c;\n$RefreshReg$(_c, \"MangerSignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFuYWdlci9zaWdudXAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtQztBQUNZO0FBQ047QUFDRztBQUU1QyxNQUFNTSxlQUFlOztJQUVuQixNQUFNQyxVQUFVSCw2Q0FBTUEsQ0FBbUI7SUFDekMsTUFBTUksV0FBV0osNkNBQU1BLENBQW1CO0lBQzFDLE1BQU1LLGNBQWNMLDZDQUFNQSxDQUFtQjtJQUM3QyxNQUFNTSxXQUFXTiw2Q0FBTUEsQ0FBbUI7SUFFMUMsTUFBTU8sZUFBZSxDQUFDQztRQUNwQixJQUFJQyxZQUFZO1lBQ2RDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUVBLElBQUlDLFNBQVM7WUFDWEosTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBRUEsSUFBSSxDQUFDTCxLQUFLRSxJQUFJLEVBQUU7WUFDZEQsVUFBVUMsSUFBSSxHQUFHO1lBQ2pCSSxPQUFPSixJQUFJLEdBQUc7UUFDaEI7UUFFQSxJQUFJLENBQUNGLEtBQUtHLEtBQUssRUFBRTtZQUNmRixVQUFVRSxLQUFLLEdBQUc7WUFDbEJHLE9BQU9ILEtBQUssR0FBRztRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlSSxJQUFJLENBQUNQLEtBQUtHLEtBQUssR0FBRztZQUMzQ0YsVUFBVUUsS0FBSyxHQUFHO1lBQ2xCRyxPQUFPSCxLQUFLLEdBQUc7UUFDakI7UUFFQSxJQUFJLENBQUNILEtBQUtJLFFBQVEsRUFBRTtZQUNsQkgsVUFBVUcsUUFBUSxHQUFHO1lBQ3JCRSxPQUFPRixRQUFRLEdBQUc7UUFDcEIsT0FBTyxJQUFJSixLQUFLSSxRQUFRLENBQUNJLE1BQU0sR0FBRyxHQUFHO1lBQ25DUCxVQUFVRyxRQUFRLEdBQUc7WUFDckJFLE9BQU9GLFFBQVEsR0FBRztRQUNwQjtRQUVBLElBQUksQ0FBQ0osS0FBS0ssS0FBSyxFQUFFO1lBQ2ZKLFVB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Y2s6Ly9fTl9FLy4vc3JjL2FwcC9tYW5hZ2VyL3NpZ251cC9wYWdlLnRzeD8zNGNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dEZpZWxkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuY29uc3QgTWFuZ2VyU2lnblVwID0gKCkgPT4ge1xuXG4gIGNvbnN0IG5hbWVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcGhvbmVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgdmFsaWRhdGVVc2VyID0gKHVzZXI6IGFueSkgPT4ge1xuICAgIGxldCB1c2VyVmFsaWQgPSB7XG4gICAgICBuYW1lOiB0cnVlLFxuICAgICAgZW1haWw6IHRydWUsXG4gICAgICBwYXNzd29yZDogdHJ1ZSxcbiAgICAgIHBob25lOiB0cnVlXG4gICAgfTtcblxuICAgIGxldCBlcnJvcnMgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHBob25lOiAnJ1xuICAgIH07XG5cbiAgICBpZiAoIXVzZXIubmFtZSkge1xuICAgICAgdXNlclZhbGlkLm5hbWUgPSBmYWxzZTtcbiAgICAgIGVycm9ycy5uYW1lID0gJ05hbWUgaXMgcmVxdWlyZWQnO1xuICAgIH1cblxuICAgIGlmICghdXNlci5lbWFpbCkge1xuICAgICAgdXNlclZhbGlkLmVtYWlsID0gZmFsc2U7XG4gICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xuICAgIH0gZWxzZSBpZiAoIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KHVzZXIuZW1haWwpKSB7XG4gICAgICB1c2VyVmFsaWQuZW1haWwgPSBmYWxzZTtcbiAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBhZGRyZXNzIGlzIGludmFsaWQnO1xuICAgIH1cblxuICAgIGlmICghdXNlci5wYXNzd29yZCkge1xuICAgICAgdXNlclZhbGlkLnBhc3N3b3JkID0gZmFsc2U7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnO1xuICAgIH0gZWxzZSBpZiAodXNlci5wYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICB1c2VyVmFsaWQucGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBtdXN0IGJlIDYgb3IgbW9yZSBjaGFyYWN0ZXJzJztcbiAgICB9XG5cbiAgICBpZiAoIXVzZXIucGhvbmUpIHtcbiAgICAgIHVzZXJWYWxpZC5waG9uZSA9IGZhbHNlO1xuICAgICAgZXJyb3JzLnBob25lID0gJ1Bob25lIGlzIHJlcXVpcmVkJztcbiAgICB9IGVsc2UgaWYgKCEvXlxcZCskLy50ZXN0KHVzZXIucGhvbmUpKSB7XG4gICAgICB1c2VyVmFsaWQucGhvbmUgPSBmYWxzZTtcbiAgICAgIGVycm9ycy5waG9uZSA9ICdQaG9uZSBudW1iZXIgaXMgaW52YWxpZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlclZhbGlkLCBlcnJvcnMgfTtcbiAgfVxuXG4gIGNvbnN0IFt1c2VyVmFsaWQsIHNldFVzZXJWYWxpZF0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBlbWFpbDogdHJ1ZSxcbiAgICBwYXNzd29yZDogdHJ1ZSxcbiAgICBwaG9uZTogdHJ1ZVxuICB9KTtcblxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgcGhvbmU6ICcnXG4gIH0pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBsZXQgdXNlciA9IHtcbiAgICAgIG5hbWU6IG5hbWVSZWYuY3VycmVudD8udmFsdWUsXG4gICAgICBlbWFpbDogZW1haWxSZWYuY3VycmVudD8udmFsdWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRSZWYuY3VycmVudD8udmFsdWUsXG4gICAgICBwaG9uZTogcGhvbmVSZWYuY3VycmVudD8udmFsdWVcbiAgICB9XG5cbiAgICBsZXQge3VzZXJWYWxpZCwgZXJyb3JzfSA9IHZhbGlkYXRlVXNlcih1c2VyKTtcbiAgICBzZXRVc2VyVmFsaWQodXNlclZhbGlkKTtcbiAgICBzZXRFcnJvcnMoZXJyb3JzKTtcblxuICAgIHVzZXJWYWxpZC5uYW1lICYmIHVzZXJWYWxpZC5lbWFpbCAmJiB1c2VyVmFsaWQucGFzc3dvcmQgJiYgdXNlclZhbGlkLnBob25lICYmIHJvdXRlci5wdXNoKCcvbWFuYWdlcicpO1xuICB9XG5cbiAgY29uc3QgdGVzdEZpZWxkU3R5bGUgPSBcInctMi8zIG0tNVwiXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC0yNFwiPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC0yMDAgbS1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgdy0yLzNcIj5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGNsYXNzTmFtZT17dGVzdEZpZWxkU3R5bGV9XG4gICAgICAgICAgbGFiZWw9J05hbWUnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgbmFtZSdcbiAgICAgICAgICBpbnB1dFJlZj17bmFtZVJlZn1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcbiAgICAgICAgICBlcnJvcj17IXVzZXJWYWxpZC5uYW1lfVxuICAgICAgICAgIGhlbHBlclRleHQ9eyh1c2VyVmFsaWQubmFtZSk/ICcnIDogZXJyb3JzLm5hbWV9PlxuICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGNsYXNzTmFtZT17dGVzdEZpZWxkU3R5bGV9XG4gICAgICAgICAgbGFiZWw9J0VtYWlsJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGVtYWlsJ1xuICAgICAgICAgIGlucHV0UmVmPXtlbWFpbFJlZn1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcbiAgICAgICAgICBlcnJvcj17IXVzZXJWYWxpZC5lbWFpbH1cbiAgICAgICAgICBoZWxwZXJUZXh0PXsodXNlclZhbGlkLmVtYWlsKT8gJycgOiBlcnJvcnMuZW1haWx9PlxuICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGNsYXNzTmFtZT17dGVzdEZpZWxkU3R5bGV9XG4gICAgICAgICAgbGFiZWw9J1Bob25lIG51bWJlcidcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBwaG9uZSBudW1iZXInXG4gICAgICAgICAgaW5wdXRSZWY9e3Bob25lUmVmfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFyaWFudD0nZmlsbGVkJ1xuICAgICAgICAgIGVycm9yPXshdXNlclZhbGlkLnBob25lfVxuICAgICAgICAgIGhlbHBlclRleHQ9eyh1c2VyVmFsaWQucGhvbmUpPyAnJyA6IGVycm9ycy5waG9uZX0+XG4gICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPXt0ZXN0RmllbGRTdHlsZX1cbiAgICAgICAgICBsYWJlbD0nUGFzc3dvcmQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgJ1xuICAgICAgICAgIGlucHV0UmVmPXtwaG9uZVJlZn1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcbiAgICAgICAgICBlcnJvcj17IXVzZXJWYWxpZC5waG9uZX1cbiAgICAgICAgICBoZWxwZXJUZXh0PXsodXNlclZhbGlkLnBob25lKT8gJycgOiBlcnJvcnMucGhvbmV9PlxuICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgIDwvQm94PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5nZXJTaWduVXA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVGV4dEZpZWxkIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJNYW5nZXJTaWduVXAiLCJuYW1lUmVmIiwiZW1haWxSZWYiLCJwYXNzd29yZFJlZiIsInBob25lUmVmIiwidmFsaWRhdGVVc2VyIiwidXNlciIsInVzZXJWYWxpZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGhvbmUiLCJlcnJvcnMiLCJ0ZXN0IiwibGVuZ3RoIiwic2V0VXNlclZhbGlkIiwic2V0RXJyb3JzIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiY3VycmVudCIsInZhbHVlIiwicHVzaCIsInRlc3RGaWVsZFN0eWxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpbnB1dFJlZiIsInJlcXVpcmVkIiwidmFyaWFudCIsImVycm9yIiwiaGVscGVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/manager/signup/page.tsx\n"));

/***/ })

});