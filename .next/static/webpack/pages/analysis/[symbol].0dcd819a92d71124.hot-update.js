"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/analysis/[symbol]",{

/***/ "./components/StockTitle.js":
/*!**********************************!*\
  !*** ./components/StockTitle.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/StockTitle.module.css */ \"./styles/StockTitle.module.css\");\n/* harmony import */ var _styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar StockTitle = function(param) {\n    var reports = param.reports;\n    var symbol = reports.SI[\"Symbol\"];\n    var name = reports.SI[\"Name\"];\n    var exchange = reports.SI[\"Exchange\"];\n    var currency = reports.SI[\"Currency\"];\n    var current_price = Number(reports.PI[\"c\"]).toFixed(2);\n    var difference = Number(reports.PI[\"d\"]).toFixed(2);\n    var difference_percent = Number(reports.PI[\"dp\"]).toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default().main_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default().left_container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            name,\n                            \" (\",\n                            symbol,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            exchange,\n                            \" | Currency in \",\n                            currency\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default().right_container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: current_price\n                    }, void 0, false, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, _this),\n                    difference >= 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default().positive),\n                        children: [\n                            difference,\n                            \" (\",\n                            difference_percent,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n                        lineNumber: 20,\n                        columnNumber: 37\n                    }, _this),\n                    difference < 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_StockTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default().negative),\n                        children: [\n                            difference,\n                            \" (\",\n                            difference_percent,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n                        lineNumber: 21,\n                        columnNumber: 36\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this);\n};\n_c = StockTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockTitle);\nvar _c;\n$RefreshReg$(_c, \"StockTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b2NrVGl0bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNkQ7QUFFN0QsSUFBTUMsVUFBVSxHQUFHLGdCQUFlO1FBQWJDLE9BQU8sU0FBUEEsT0FBTztJQUN4QixJQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxJQUFNQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFNRSxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxJQUFNRyxRQUFRLEdBQUdMLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxJQUFNSSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ1AsT0FBTyxDQUFDUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RCxJQUFNQyxVQUFVLEdBQUdILE1BQU0sQ0FBQ1AsT0FBTyxDQUFDUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRCxJQUFNRSxrQkFBa0IsR0FBR0osTUFBTSxDQUFDUCxPQUFPLENBQUNRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTlELHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRWYscUZBQThCOzswQkFDMUMsOERBQUNjLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWYscUZBQThCOztrQ0FDMUMsOERBQUNrQixJQUFFOzs0QkFBRWIsSUFBSTs0QkFBQyxJQUFFOzRCQUFDRixNQUFNOzRCQUFDLEdBQUM7Ozs7Ozs2QkFBSztrQ0FDMUIsOERBQUNnQixHQUFDOzs0QkFBRWIsUUFBUTs0QkFBQyxpQkFBZTs0QkFBQ0MsUUFBUTs7Ozs7OzZCQUFLOzs7Ozs7cUJBQ3hDOzBCQUNOLDhEQUFDTyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVmLHNGQUErQjs7a0NBQzNDLDhEQUFDa0IsSUFBRTtrQ0FBRVYsYUFBYTs7Ozs7NkJBQU07b0JBQ3ZCSSxVQUFVLElBQUksQ0FBQyxrQkFBSSw4REFBQ08sR0FBQzt3QkFBQ0osU0FBUyxFQUFFZiwrRUFBd0I7OzRCQUFHWSxVQUFVOzRCQUFDLElBQUU7NEJBQUNDLGtCQUFrQjs0QkFBQyxJQUFFOzs7Ozs7NkJBQUk7b0JBQ25HRCxVQUFVLEdBQUcsQ0FBQyxrQkFBSSw4REFBQ08sR0FBQzt3QkFBQ0osU0FBUyxFQUFFZiwrRUFBd0I7OzRCQUFHWSxVQUFVOzRCQUFDLElBQUU7NEJBQUNDLGtCQUFrQjs0QkFBQyxJQUFFOzs7Ozs7NkJBQUk7Ozs7OztxQkFDakc7Ozs7OzthQUNKLENBQ1Q7Q0FDSjtBQXRCS1osS0FBQUEsVUFBVTtBQXlCaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9ja1RpdGxlLmpzP2MyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b2NrVGl0bGVTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL1N0b2NrVGl0bGUubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFN0b2NrVGl0bGUgPSAoe3JlcG9ydHN9KSA9PiB7XG4gICAgY29uc3Qgc3ltYm9sID0gcmVwb3J0cy5TSVtcIlN5bWJvbFwiXVxuICAgIGNvbnN0IG5hbWUgPSByZXBvcnRzLlNJW1wiTmFtZVwiXVxuICAgIGNvbnN0IGV4Y2hhbmdlID0gcmVwb3J0cy5TSVtcIkV4Y2hhbmdlXCJdXG4gICAgY29uc3QgY3VycmVuY3kgPSByZXBvcnRzLlNJW1wiQ3VycmVuY3lcIl1cbiAgICBjb25zdCBjdXJyZW50X3ByaWNlID0gTnVtYmVyKHJlcG9ydHMuUElbXCJjXCJdKS50b0ZpeGVkKDIpXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IE51bWJlcihyZXBvcnRzLlBJW1wiZFwiXSkudG9GaXhlZCgyKVxuICAgIGNvbnN0IGRpZmZlcmVuY2VfcGVyY2VudCA9IE51bWJlcihyZXBvcnRzLlBJW1wiZHBcIl0pLnRvRml4ZWQoMilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9ja1RpdGxlU3R5bGUubWFpbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b2NrVGl0bGVTdHlsZS5sZWZ0X2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGgyPntuYW1lfSAoe3N5bWJvbH0pPC9oMj5cbiAgICAgICAgICAgICAgICA8cD57ZXhjaGFuZ2V9IHwgQ3VycmVuY3kgaW4ge2N1cnJlbmN5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b2NrVGl0bGVTdHlsZS5yaWdodF9jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxoMj57Y3VycmVudF9wcmljZX08L2gyPlxuICAgICAgICAgICAgICAgIHtkaWZmZXJlbmNlID49IDAgJiYgPHAgY2xhc3NOYW1lPXtzdG9ja1RpdGxlU3R5bGUucG9zaXRpdmV9PntkaWZmZXJlbmNlfSAoe2RpZmZlcmVuY2VfcGVyY2VudH0lKTwvcD59XG4gICAgICAgICAgICAgICAge2RpZmZlcmVuY2UgPCAwICYmIDxwIGNsYXNzTmFtZT17c3RvY2tUaXRsZVN0eWxlLm5lZ2F0aXZlfT57ZGlmZmVyZW5jZX0gKHtkaWZmZXJlbmNlX3BlcmNlbnR9JSk8L3A+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTdG9ja1RpdGxlIl0sIm5hbWVzIjpbInN0b2NrVGl0bGVTdHlsZSIsIlN0b2NrVGl0bGUiLCJyZXBvcnRzIiwic3ltYm9sIiwiU0kiLCJuYW1lIiwiZXhjaGFuZ2UiLCJjdXJyZW5jeSIsImN1cnJlbnRfcHJpY2UiLCJOdW1iZXIiLCJQSSIsInRvRml4ZWQiLCJkaWZmZXJlbmNlIiwiZGlmZmVyZW5jZV9wZXJjZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbl9jb250YWluZXIiLCJsZWZ0X2NvbnRhaW5lciIsImgyIiwicCIsInJpZ2h0X2NvbnRhaW5lciIsInBvc2l0aXZlIiwibmVnYXRpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StockTitle.js\n");

/***/ })

});