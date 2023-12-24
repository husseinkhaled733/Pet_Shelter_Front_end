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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/InputAdornment/InputAdornment.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,IconButton,InputAdornment,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Visibility,VisibilityOff!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/VisibilityOff.js\");\n/* harmony import */ var _barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Visibility,VisibilityOff!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Visibility.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MangerSignUp = ()=>{\n    _s();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const phoneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const validateUser = (user)=>{\n        let userValid = {\n            name: true,\n            email: true,\n            password: true,\n            phone: true\n        };\n        let errors = {\n            name: \"\",\n            email: \"\",\n            password: \"\",\n            phone: \"\"\n        };\n        if (!user.name) {\n            userValid.name = false;\n            errors.name = \"Name is required\";\n        }\n        if (!user.email) {\n            userValid.email = false;\n            errors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(user.email)) {\n            userValid.email = false;\n            errors.email = \"Email address is invalid\";\n        }\n        if (!user.password) {\n            userValid.password = false;\n            errors.password = \"Password is required\";\n        } else if (user.password.length < 6) {\n            userValid.password = false;\n            errors.password = \"Password must be 6 or more characters\";\n        }\n        if (!user.phone) {\n            userValid.phone = false;\n            errors.phone = \"Phone is required\";\n        } else if (!/^\\d+$/.test(user.phone)) {\n            userValid.phone = false;\n            errors.phone = \"Phone number is invalid\";\n        }\n        return {\n            userValid,\n            errors\n        };\n    };\n    const [userValid, setUserValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: true,\n        email: true,\n        password: true,\n        phone: true\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        phone: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = ()=>{\n        var _nameRef_current, _emailRef_current, _passwordRef_current, _phoneRef_current;\n        let user = {\n            name: (_nameRef_current = nameRef.current) === null || _nameRef_current === void 0 ? void 0 : _nameRef_current.value,\n            email: (_emailRef_current = emailRef.current) === null || _emailRef_current === void 0 ? void 0 : _emailRef_current.value,\n            password: (_passwordRef_current = passwordRef.current) === null || _passwordRef_current === void 0 ? void 0 : _passwordRef_current.value,\n            phone: (_phoneRef_current = phoneRef.current) === null || _phoneRef_current === void 0 ? void 0 : _phoneRef_current.value\n        };\n        let { userValid, errors } = validateUser(user);\n        setUserValid(userValid);\n        setErrors(errors);\n        userValid.name && userValid.email && userValid.password && userValid.phone && router.push(\"/manager\");\n    };\n    const toggleShowPassword = ()=>{\n        setShowPassword(!showPassword);\n    };\n    const testFieldStyle = \"w-2/3 m-5\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            component: \"form\",\n            className: \"bg-white h-200 m-auto flex flex-col justify-center items-center rounded-lg w-2/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    component: \"h2\",\n                    variant: \"h4\",\n                    color: \"black\",\n                    mt: 4,\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined),\n                \"Typ\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Name\",\n                    placeholder: \"Enter your name\",\n                    inputRef: nameRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.name,\n                    helperText: userValid.name ? \"\" : errors.name\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Email\",\n                    placeholder: \"Enter your email\",\n                    inputRef: emailRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.email,\n                    helperText: userValid.email ? \"\" : errors.email\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Phone number\",\n                    placeholder: \"Enter your phone number\",\n                    inputRef: phoneRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.phone,\n                    helperText: userValid.phone ? \"\" : errors.phone\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: testFieldStyle,\n                    label: \"Password\",\n                    placeholder: \"Enter your password\",\n                    inputRef: passwordRef,\n                    required: true,\n                    variant: \"filled\",\n                    error: !userValid.password,\n                    helperText: userValid.password ? \"\" : errors.password,\n                    type: showPassword ? \"text\" : \"password\",\n                    InputProps: {\n                        endAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            position: \"end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onClick: toggleShowPassword,\n                                edge: \"end\",\n                                children: showPassword ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 35\n                                }, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Visibility_VisibilityOff_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 55\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 17\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 15\n                        }, void 0)\n                    }\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_IconButton_InputAdornment_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    onClick: handleSubmit,\n                    variant: \"contained\",\n                    className: \"bg-blue-500 m-4 h-10 w-1/2 hover:bg-blue-800\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/ebn_aladdin/NoName/My-GitHub/PetShelter/Pet_Shelter_Front_end/src/app/manager/signup/page.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MangerSignUp, \"Kz60QzhXyRSrR0trA46RAWYYP4Q=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MangerSignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MangerSignUp);\nvar _c;\n$RefreshReg$(_c, \"MangerSignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFuYWdlci9zaWdudXAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNtQztBQUM0RDtBQUN0RDtBQUNHO0FBQ29CO0FBRWhFLE1BQU1ZLGVBQWU7O0lBRW5CLE1BQU1DLFVBQVVMLDZDQUFNQSxDQUFtQjtJQUN6QyxNQUFNTSxXQUFXTiw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTU8sY0FBY1AsNkNBQU1BLENBQW1CO0lBQzdDLE1BQU1RLFdBQVdSLDZDQUFNQSxDQUFtQjtJQUUxQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNWSxlQUFlLENBQUNDO1FBQ3BCLElBQUlDLFlBQVk7WUFDZEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBRUEsSUFBSUMsU0FBUztZQUNYSixNQUFNO1lBQ05DLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7UUFFQSxJQUFJLENBQUNMLEtBQUtFLElBQUksRUFBRTtZQUNkRCxVQUFVQyxJQUFJLEdBQUc7WUFDakJJLE9BQU9KLElBQUksR0FBRztRQUNoQjtRQUVBLElBQUksQ0FBQ0YsS0FBS0csS0FBSyxFQUFFO1lBQ2ZGLFVBQVVFLEtBQUssR0FBRztZQUNsQkcsT0FBT0gsS0FBSyxHQUFHO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWVJLElBQUksQ0FBQ1AsS0FBS0csS0FBSyxHQUFHO1lBQzNDRixVQUFVRSxLQUFLLEdBQUc7WUFDbEJHLE9BQU9ILEtBQUssR0FBRztRQUNqQjtRQUVBLElBQUksQ0FBQ0gsS0FBS0ksUUFBUSxFQUFFO1lBQ2xCSCxVQUFVRyxRQUFRLEdBQUc7WUFDckJFLE9BQU9GLFFBQVEsR0FBRztRQUNwQixPQUFPLElBQUlKLEtBQUtJLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEdBQUc7WUFDbkNQLFVBQVVHLFFBQVEsR0FBRztZQUNyQkUs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L0I7b0JBQ1ZnQyxRQUFRO29CQUNSTixTQUFRO29CQUNSTyxPQUFPLENBQUMzQixVQUFVRyxRQUFRO29CQUMxQnlCLFlBQVksVUFBV3pCLFFBQVEsR0FBRyxLQUFLRSxPQUFPRixRQUFRO29CQUN0RDBCLE1BQU1qQyxlQUFlLFNBQVM7b0JBQzlCa0MsWUFBWTt3QkFDVkMsNEJBQ0UsOERBQUNqRCxxSUFBY0E7NEJBQUNrRCxVQUFTO3NDQUN2Qiw0RUFBQ25ELHFJQUFVQTtnQ0FDVG9ELFNBQVNsQjtnQ0FDVG1CLE1BQUs7MENBRUp0Qyw2QkFBZSw4REFBQ04sMEdBQWFBOzs7OzJEQUFNLDhEQUFDRCwwR0FBVUE7Ozs7Ozs7Ozs7Ozs7OztvQkFJdkQ7Ozs7Ozs4QkFFRiw4REFBQ0wsc0lBQU1BO29CQUFDaUQsU0FBU3RCO29CQUFjUyxTQUFRO29CQUN2Q0YsV0FBVTs4QkFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpFO0dBOUpNM0I7O1FBc0VXSCxzREFBU0E7OztLQXRFcEJHO0FBZ0tOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWFuYWdlci9zaWdudXAvcGFnZS50c3g/MzRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEljb25CdXR0b24sIElucHV0QWRvcm5tZW50LCBUZXh0RmllbGQsIEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBWaXNpYmlsaXR5LCBWaXNpYmlsaXR5T2ZmIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XG5cbmNvbnN0IE1hbmdlclNpZ25VcCA9ICgpID0+IHtcblxuICBjb25zdCBuYW1lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHBob25lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCB2YWxpZGF0ZVVzZXIgPSAodXNlcjogYW55KSA9PiB7XG4gICAgbGV0IHVzZXJWYWxpZCA9IHtcbiAgICAgIG5hbWU6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgcGhvbmU6IHRydWVcbiAgICB9O1xuXG4gICAgbGV0IGVycm9ycyA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGhvbmU6ICcnXG4gICAgfTtcblxuICAgIGlmICghdXNlci5uYW1lKSB7XG4gICAgICB1c2VyVmFsaWQubmFtZSA9IGZhbHNlO1xuICAgICAgZXJyb3JzLm5hbWUgPSAnTmFtZSBpcyByZXF1aXJlZCc7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VyLmVtYWlsKSB7XG4gICAgICB1c2VyVmFsaWQuZW1haWwgPSBmYWxzZTtcbiAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyByZXF1aXJlZCc7XG4gICAgfSBlbHNlIGlmICghL1xcUytAXFxTK1xcLlxcUysvLnRlc3QodXNlci5lbWFpbCkpIHtcbiAgICAgIHVzZXJWYWxpZC5lbWFpbCA9IGZhbHNlO1xuICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGFkZHJlc3MgaXMgaW52YWxpZCc7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VyLnBhc3N3b3JkKSB7XG4gICAgICB1c2VyVmFsaWQucGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyByZXF1aXJlZCc7XG4gICAgfSBlbHNlIGlmICh1c2VyLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgIHVzZXJWYWxpZC5wYXNzd29yZCA9IGZhbHNlO1xuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIG11c3QgYmUgNiBvciBtb3JlIGNoYXJhY3RlcnMnO1xuICAgIH1cblxuICAgIGlmICghdXNlci5waG9uZSkge1xuICAgICAgdXNlclZhbGlkLnBob25lID0gZmFsc2U7XG4gICAgICBlcnJvcnMucGhvbmUgPSAnUGhvbmUgaXMgcmVxdWlyZWQnO1xuICAgIH0gZWxzZSBpZiAoIS9eXFxkKyQvLnRlc3QodXNlci5waG9uZSkpIHtcbiAgICAgIHVzZXJWYWxpZC5waG9uZSA9IGZhbHNlO1xuICAgICAgZXJyb3JzLnBob25lID0gJ1Bob25lIG51bWJlciBpcyBpbnZhbGlkJztcbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VyVmFsaWQsIGVycm9ycyB9O1xuICB9XG5cbiAgY29uc3QgW3VzZXJWYWxpZCwgc2V0VXNlclZhbGlkXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGVtYWlsOiB0cnVlLFxuICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgIHBob25lOiB0cnVlXG4gIH0pO1xuXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBwaG9uZTogJydcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGxldCB1c2VyID0ge1xuICAgICAgbmFtZTogbmFtZVJlZi5jdXJyZW50Py52YWx1ZSxcbiAgICAgIGVtYWlsOiBlbWFpbFJlZi5jdXJyZW50Py52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFJlZi5jdXJyZW50Py52YWx1ZSxcbiAgICAgIHBob25lOiBwaG9uZVJlZi5jdXJyZW50Py52YWx1ZVxuICAgIH1cblxuICAgIGxldCB7dXNlclZhbGlkLCBlcnJvcnN9ID0gdmFsaWRhdGVVc2VyKHVzZXIpO1xuICAgIHNldFVzZXJWYWxpZCh1c2VyVmFsaWQpO1xuICAgIHNldEVycm9ycyhlcnJvcnMpO1xuXG4gICAgdXNlclZhbGlkLm5hbWUgJiYgdXNlclZhbGlkLmVtYWlsICYmIHVzZXJWYWxpZC5wYXNzd29yZCAmJiB1c2VyVmFsaWQucGhvbmUgJiYgcm91dGVyLnB1c2goJy9tYW5hZ2VyJyk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVTaG93UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpO1xuICB9XG5cbiAgY29uc3QgdGVzdEZpZWxkU3R5bGUgPSBcInctMi8zIG0tNVwiXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC0yNFwiPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC0yMDAgbS1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgdy0yLzNcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoMicgdmFyaWFudD0naDQnIGNvbG9yPSdibGFjaycgbXQ9ezR9PlNpZ24gVXA8L1R5cG9ncmFwaHk+XG4gICAgICAgIFR5cFxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPXt0ZXN0RmllbGRTdHlsZX1cbiAgICAgICAgICBsYWJlbD0nTmFtZSdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBuYW1lJ1xuICAgICAgICAgIGlucHV0UmVmPXtuYW1lUmVmfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFyaWFudD0nZmlsbGVkJ1xuICAgICAgICAgIGVycm9yPXshdXNlclZhbGlkLm5hbWV9XG4gICAgICAgICAgaGVscGVyVGV4dD17KHVzZXJWYWxpZC5uYW1lKT8gJycgOiBlcnJvcnMubmFtZX0+XG4gICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPXt0ZXN0RmllbGRTdHlsZX1cbiAgICAgICAgICBsYWJlbD0nRW1haWwnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgZW1haWwnXG4gICAgICAgICAgaW5wdXRSZWY9e2VtYWlsUmVmfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFyaWFudD0nZmlsbGVkJ1xuICAgICAgICAgIGVycm9yPXshdXNlclZhbGlkLmVtYWlsfVxuICAgICAgICAgIGhlbHBlclRleHQ9eyh1c2VyVmFsaWQuZW1haWwpPyAnJyA6IGVycm9ycy5lbWFpbH0+XG4gICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPXt0ZXN0RmllbGRTdHlsZX1cbiAgICAgICAgICBsYWJlbD0nUGhvbmUgbnVtYmVyJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHBob25lIG51bWJlcidcbiAgICAgICAgICBpbnB1dFJlZj17cGhvbmVSZWZ9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnXG4gICAgICAgICAgZXJyb3I9eyF1c2VyVmFsaWQucGhvbmV9XG4gICAgICAgICAgaGVscGVyVGV4dD17KHVzZXJWYWxpZC5waG9uZSk/ICcnIDogZXJyb3JzLnBob25lfT5cbiAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBjbGFzc05hbWU9e3Rlc3RGaWVsZFN0eWxlfVxuICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgICBpbnB1dFJlZj17cGFzc3dvcmRSZWZ9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PSdmaWxsZWQnXG4gICAgICAgICAgZXJyb3I9eyF1c2VyVmFsaWQucGFzc3dvcmR9XG4gICAgICAgICAgaGVscGVyVGV4dD17KHVzZXJWYWxpZC5wYXNzd29yZCk/ICcnIDogZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XG4gICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgZW5kQWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPFZpc2liaWxpdHlPZmYgLz4gOiA8VmlzaWJpbGl0eSAvPn1cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfX0+XG4gICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIG0tNCBoLTEwIHctMS8yIGhvdmVyOmJnLWJsdWUtODAwJz5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuZ2VyU2lnblVwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkljb25CdXR0b24iLCJJbnB1dEFkb3JubWVudCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsIlZpc2liaWxpdHkiLCJWaXNpYmlsaXR5T2ZmIiwiTWFuZ2VyU2lnblVwIiwibmFtZVJlZiIsImVtYWlsUmVmIiwicGFzc3dvcmRSZWYiLCJwaG9uZVJlZiIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsInZhbGlkYXRlVXNlciIsInVzZXIiLCJ1c2VyVmFsaWQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInBob25lIiwiZXJyb3JzIiwidGVzdCIsImxlbmd0aCIsInNldFVzZXJWYWxpZCIsInNldEVycm9ycyIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInB1c2giLCJ0b2dnbGVTaG93UGFzc3dvcmQiLCJ0ZXN0RmllbGRTdHlsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb21wb25lbnQiLCJ2YXJpYW50IiwiY29sb3IiLCJtdCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpbnB1dFJlZiIsInJlcXVpcmVkIiwiZXJyb3IiLCJoZWxwZXJUZXh0IiwidHlwZSIsIklucHV0UHJvcHMiLCJlbmRBZG9ybm1lbnQiLCJwb3NpdGlvbiIsIm9uQ2xpY2siLCJlZGdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/manager/signup/page.tsx\n"));

/***/ })

});