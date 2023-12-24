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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/InputAdornment/InputAdornment.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Visibility,VisibilityOff!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Visibility.js\");\n/* harmony import */ var _barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Visibility,VisibilityOff!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/VisibilityOff.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MangerSignUp = ()=>{\n    _s();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const phoneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [showPassord, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const validateUser = (user)=>{\n        let userValid = {\n            name: true,\n            email: true,\n            password: true,\n            phone: true\n        };\n        let errors = {\n            name: \"\",\n            email: \"\",\n            password: \"\",\n            phone: \"\"\n        };\n        if (!user.name) {\n            userValid.name = false;\n            errors.name = \"Name is required\";\n        }\n        if (!user.email) {\n            userValid.email = false;\n            errors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(user.email)) {\n            userValid.email = false;\n            errors.email = \"Email address is invalid\";\n        }\n        if (!user.password) {\n            userValid.password = false;\n            errors.password = \"Password is required\";\n        } else if (user.password.length < 6) {\n            userValid.password = false;\n            errors.password = \"Password must be 6 or more characters\";\n        }\n        if (!user.phone) {\n            userValid.phone = false;\n            errors.phone = \"Phone is required\";\n        } else if (!/^\\d+$/.test(user.phone)) {\n            userValid.phone = false;\n            errors.phone = \"Phone number is invalid\";\n        }\n        return {\n            userValid,\n            errors\n        };\n    };\n    const [userValid, setUserValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: true,\n        email: true,\n        password: true,\n        phone: true\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        phone: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = ()=>{\n        var _nameRef_current, _emailRef_current, _passwordRef_current, _phoneRef_current;\n        let user = {\n            name: (_nameRef_current = nameRef.current) === null || _nameRef_current === void 0 ? void 0 : _nameRef_current.value,\n            email: (_emailRef_current = emailRef.current) === null || _emailRef_current === void 0 ? void 0 : _emailRef_current.value,\n            password: (_passwordRef_current = passwordRef.current) === null || _passwordRef_current === void 0 ? void 0 : _passwordRef_current.value,\n            phone: (_phoneRef_current = phoneRef.current) === null || _phoneRef_current === void 0 ? void 0 : _phoneRef_current.value\n        };\n        let { userValid, errors } = validateUser(user);\n        setUserValid(userValid);\n        setErrors(errors);\n        userValid.name && userValid.email && userValid.password && userValid.phone && router.push(\"/manager\");\n    };\n    const toggleShowPassword = ()=>{\n        setShowPassword(!showPassord);\n    };\n    const testFieldStyle = \"w-2/3 m-5\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            component: \"form\",\n            className: \"bg-white h-200 m-auto flex flex-col justify-center items-center rounded-lg w-2/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Name\",\n                    placeholder: \"Enter your name\",\n                    inputRef: nameRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.name,\n                    helperText: userValid.name ? \"\" : errors.name\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Email\",\n                    placeholder: \"Enter your email\",\n                    inputRef: emailRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.email,\n                    helperText: userValid.email ? \"\" : errors.email\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Phone number\",\n                    placeholder: \"Enter your phone number\",\n                    inputRef: phoneRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.phone,\n                    helperText: userValid.phone ? \"\" : errors.phone\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Password\",\n                    placeholder: \"Enter your password\",\n                    inputRef: phoneRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.password,\n                    helperText: userValid.password ? \"\" : errors.password,\n                    type: showPassord ? \"text\" : \"password\",\n                    inputProps: {\n                        endAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            position: \"end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                onClick: toggleShowPassword,\n                                edge: \"end\",\n                                children: showPassord ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 36\n                                }, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 53\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 19\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 17\n                        }, void 0)\n                    }\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    onClick: handleSubmit,\n                    variant: \"contained\",\n                    className: \"bg-blue-500 m-4 h-10 w-\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 156,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MangerSignUp, \"/nPc/ZqnIGDnudV5ObX0jpIFR3s=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MangerSignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MangerSignUp);\nvar _c;\n$RefreshReg$(_c, \"MangerSignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFuYWdlci9zaWdudXAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21DO0FBQ2dEO0FBQzFDO0FBQ0c7QUFDb0I7QUFFaEUsTUFBTVcsZUFBZTs7SUFFbkIsTUFBTUMsVUFBVUwsNkNBQU1BLENBQW1CO0lBQ3pDLE1BQU1NLFdBQVdOLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNTyxjQUFjUCw2Q0FBTUEsQ0FBbUI7SUFDN0MsTUFBTVEsV0FBV1IsNkNBQU1BLENBQW1CO0lBRTFDLE1BQU0sQ0FBQ1MsYUFBYUMsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWhELE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDcEIsSUFBSUMsWUFBWTtZQUNkQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFFQSxJQUFJQyxTQUFTO1lBQ1hKLE1BQU07WUFDTkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLE9BQU87UUFDVDtRQUVBLElBQUksQ0FBQ0wsS0FBS0UsSUFBSSxFQUFFO1lBQ2RELFVBQVVDLElBQUksR0FBRztZQUNqQkksT0FBT0osSUFBSSxHQUFHO1FBQ2hCO1FBRUEsSUFBSSxDQUFDRixLQUFLRyxLQUFLLEVBQUU7WUFDZkYsVUFBVUUsS0FBSyxHQUFHO1lBQ2xCRyxPQUFPSCxLQUFLLEdBQUc7UUFDakIsT0FBTyxJQUFJLENBQUMsZUFBZUksSUFBSSxDQUFDUCxLQUFLRyxLQUFLLEdBQUc7WUFDM0NGLFVBQVVFLEtBQUssR0FBRztZQUNsQkcsT0FBT0gsS0FBSyxHQUFHO1FBQ2pCO1FBRUEsSUFBSSxDQUFDSCxLQUFLSSxRQUFRLEVBQUU7WUFDbEJILFVBQVVHLFFBQVEsR0FBRztZQUNyQkUsT0FBT0YsUUFBUSxHQUFHO1FBQ3BCLE9BQU8sSUFBSUosS0FBS0ksUUFBUSxDQUFDSSxNQUFNLEdBQUcsR0FBRztZQUNuQ1AsVUFBVUcsUUFBUSxHQUFHO1lBQ3JCRSxP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QUFLRSxPQUFPRixRQUFRO29CQUN0RHdCLE1BQU0vQixjQUFjLFNBQVM7b0JBQzdCZ0MsWUFDRTt3QkFDRUMsNEJBQ0UsOERBQUM5QywwSEFBY0E7NEJBQUMrQyxVQUFTO3NDQUN2Qiw0RUFBQ2hELDBIQUFVQTtnQ0FBQ2lELFNBQVNoQjtnQ0FBb0JpQixNQUFLOzBDQUMzQ3BDLDRCQUFjLDhEQUFDUCwwR0FBVUE7Ozs7MkRBQU0sOERBQUNDLDBHQUFhQTs7Ozs7Ozs7Ozs7Ozs7O29CQUl0RDs7Ozs7OzhCQUdKLDhEQUFDTCwwSEFBTUE7b0JBQUM4QyxTQUFTcEI7b0JBQWNhLFNBQVE7b0JBQ3ZDTixXQUFVOzhCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUM7R0EzSk0zQjs7UUFzRVdILHNEQUFTQTs7O0tBdEVwQkc7QUE2Sk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYW5hZ2VyL3NpZ251cC9wYWdlLnRzeD8zNGNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSWNvbkJ1dHRvbiwgSW5wdXRBZG9ybm1lbnQsIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFZpc2liaWxpdHksIFZpc2liaWxpdHlPZmYgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcblxuY29uc3QgTWFuZ2VyU2lnblVwID0gKCkgPT4ge1xuXG4gIGNvbnN0IG5hbWVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcGhvbmVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgW3Nob3dQYXNzb3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZhbGlkYXRlVXNlciA9ICh1c2VyOiBhbnkpID0+IHtcbiAgICBsZXQgdXNlclZhbGlkID0ge1xuICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICBwaG9uZTogdHJ1ZVxuICAgIH07XG5cbiAgICBsZXQgZXJyb3JzID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwaG9uZTogJydcbiAgICB9O1xuXG4gICAgaWYgKCF1c2VyLm5hbWUpIHtcbiAgICAgIHVzZXJWYWxpZC5uYW1lID0gZmFsc2U7XG4gICAgICBlcnJvcnMubmFtZSA9ICdOYW1lIGlzIHJlcXVpcmVkJztcbiAgICB9XG5cbiAgICBpZiAoIXVzZXIuZW1haWwpIHtcbiAgICAgIHVzZXJWYWxpZC5lbWFpbCA9IGZhbHNlO1xuICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHJlcXVpcmVkJztcbiAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdCh1c2VyLmVtYWlsKSkge1xuICAgICAgdXNlclZhbGlkLmVtYWlsID0gZmFsc2U7XG4gICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgYWRkcmVzcyBpcyBpbnZhbGlkJztcbiAgICB9XG5cbiAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHtcbiAgICAgIHVzZXJWYWxpZC5wYXNzd29yZCA9IGZhbHNlO1xuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJztcbiAgICB9IGVsc2UgaWYgKHVzZXIucGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgdXNlclZhbGlkLnBhc3N3b3JkID0gZmFsc2U7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgbXVzdCBiZSA2IG9yIG1vcmUgY2hhcmFjdGVycyc7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VyLnBob25lKSB7XG4gICAgICB1c2VyVmFsaWQucGhvbmUgPSBmYWxzZTtcbiAgICAgIGVycm9ycy5waG9uZSA9ICdQaG9uZSBpcyByZXF1aXJlZCc7XG4gICAgfSBlbHNlIGlmICghL15cXGQrJC8udGVzdCh1c2VyLnBob25lKSkge1xuICAgICAgdXNlclZhbGlkLnBob25lID0gZmFsc2U7XG4gICAgICBlcnJvcnMucGhvbmUgPSAnUGhvbmUgbnVtYmVyIGlzIGludmFsaWQnO1xuICAgIH1cblxuICAgIHJldHVybiB7IHVzZXJWYWxpZCwgZXJyb3JzIH07XG4gIH1cblxuICBjb25zdCBbdXNlclZhbGlkLCBzZXRVc2VyVmFsaWRdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IHRydWUsXG4gICAgZW1haWw6IHRydWUsXG4gICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgcGhvbmU6IHRydWVcbiAgfSk7XG5cbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHBob25lOiAnJ1xuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgbGV0IHVzZXIgPSB7XG4gICAgICBuYW1lOiBuYW1lUmVmLmN1cnJlbnQ/LnZhbHVlLFxuICAgICAgZW1haWw6IGVtYWlsUmVmLmN1cnJlbnQ/LnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkUmVmLmN1cnJlbnQ/LnZhbHVlLFxuICAgICAgcGhvbmU6IHBob25lUmVmLmN1cnJlbnQ/LnZhbHVlXG4gICAgfVxuXG4gICAgbGV0IHt1c2VyVmFsaWQsIGVycm9yc30gPSB2YWxpZGF0ZVVzZXIodXNlcik7XG4gICAgc2V0VXNlclZhbGlkKHVzZXJWYWxpZCk7XG4gICAgc2V0RXJyb3JzKGVycm9ycyk7XG5cbiAgICB1c2VyVmFsaWQubmFtZSAmJiB1c2VyVmFsaWQuZW1haWwgJiYgdXNlclZhbGlkLnBhc3N3b3JkICYmIHVzZXJWYWxpZC5waG9uZSAmJiByb3V0ZXIucHVzaCgnL21hbmFnZXInKTtcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVNob3dQYXNzd29yZCA9ICgpID0+IHtcbiAgICBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzb3JkKTtcbiAgfVxuXG4gIGNvbnN0IHRlc3RGaWVsZFN0eWxlID0gXCJ3LTIvMyBtLTVcIlxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtMjRcIj5cbiAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtMjAwIG0tYXV0byBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIHctMi8zXCI+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBjbGFzc05hbWU9e3Rlc3RGaWVsZFN0eWxlfVxuICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIG5hbWUnXG4gICAgICAgICAgaW5wdXRSZWY9e25hbWVSZWZ9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnXG4gICAgICAgICAgZXJyb3I9eyF1c2VyVmFsaWQubmFtZX1cbiAgICAgICAgICBoZWxwZXJUZXh0PXsodXNlclZhbGlkLm5hbWUpPyAnJyA6IGVycm9ycy5uYW1lfT5cbiAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBjbGFzc05hbWU9e3Rlc3RGaWVsZFN0eWxlfVxuICAgICAgICAgIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBlbWFpbCdcbiAgICAgICAgICBpbnB1dFJlZj17ZW1haWxSZWZ9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnXG4gICAgICAgICAgZXJyb3I9eyF1c2VyVmFsaWQuZW1haWx9XG4gICAgICAgICAgaGVscGVyVGV4dD17KHVzZXJWYWxpZC5lbWFpbCk/ICcnIDogZXJyb3JzLmVtYWlsfT5cbiAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBjbGFzc05hbWU9e3Rlc3RGaWVsZFN0eWxlfVxuICAgICAgICAgIGxhYmVsPSdQaG9uZSBudW1iZXInXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgcGhvbmUgbnVtYmVyJ1xuICAgICAgICAgIGlucHV0UmVmPXtwaG9uZVJlZn1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcbiAgICAgICAgICBlcnJvcj17IXVzZXJWYWxpZC5waG9uZX1cbiAgICAgICAgICBoZWxwZXJUZXh0PXsodXNlclZhbGlkLnBob25lKT8gJycgOiBlcnJvcnMucGhvbmV9PlxuICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGNsYXNzTmFtZT17dGVzdEZpZWxkU3R5bGV9XG4gICAgICAgICAgbGFiZWw9J1Bhc3N3b3JkJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHBhc3N3b3JkJ1xuICAgICAgICAgIGlucHV0UmVmPXtwaG9uZVJlZn1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcbiAgICAgICAgICBlcnJvcj17IXVzZXJWYWxpZC5wYXNzd29yZH1cbiAgICAgICAgICBoZWxwZXJUZXh0PXsodXNlclZhbGlkLnBhc3N3b3JkKT8gJycgOiBlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgdHlwZT17c2hvd1Bhc3NvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuICAgICAgICAgIGlucHV0UHJvcHM9e1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J2VuZCc+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG93UGFzc3dvcmR9IGVkZ2U9J2VuZCc+XG4gICAgICAgICAgICAgICAgICAgIHtzaG93UGFzc29yZCA/IDxWaXNpYmlsaXR5IC8+IDogPFZpc2liaWxpdHlPZmYgLz59XG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0+XG4gICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIG0tNCBoLTEwIHctJz5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuZ2VyU2lnblVwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkljb25CdXR0b24iLCJJbnB1dEFkb3JubWVudCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiVmlzaWJpbGl0eSIsIlZpc2liaWxpdHlPZmYiLCJNYW5nZXJTaWduVXAiLCJuYW1lUmVmIiwiZW1haWxSZWYiLCJwYXNzd29yZFJlZiIsInBob25lUmVmIiwic2hvd1Bhc3NvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJ2YWxpZGF0ZVVzZXIiLCJ1c2VyIiwidXNlclZhbGlkIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZSIsImVycm9ycyIsInRlc3QiLCJsZW5ndGgiLCJzZXRVc2VyVmFsaWQiLCJzZXRFcnJvcnMiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJjdXJyZW50IiwidmFsdWUiLCJwdXNoIiwidG9nZ2xlU2hvd1Bhc3N3b3JkIiwidGVzdEZpZWxkU3R5bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlucHV0UmVmIiwicmVxdWlyZWQiLCJ2YXJpYW50IiwiZXJyb3IiLCJoZWxwZXJUZXh0IiwidHlwZSIsImlucHV0UHJvcHMiLCJlbmRBZG9ybm1lbnQiLCJwb3NpdGlvbiIsIm9uQ2xpY2siLCJlZGdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/manager/signup/page.tsx\n"));

/***/ })

});