/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Analyzer_components/FCFMargin.js":
/*!*****************************************************!*\
  !*** ./components/Analyzer_components/FCFMargin.js ***!
  \*****************************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/StockAnalyzer.js":
/*!*************************************!*\
  !*** ./components/StockAnalyzer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StockAnalyzer\": function() { return /* binding */ StockAnalyzer; },\n/* harmony export */   \"getAverage\": function() { return /* binding */ getAverage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_StockAnalysis_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/StockAnalysis.module.css */ \"./styles/StockAnalysis.module.css\");\n/* harmony import */ var _styles_StockAnalysis_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_StockAnalysis_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Analyzer_components_TopRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Analyzer_components/TopRow */ \"./components/Analyzer_components/TopRow.js\");\n/* harmony import */ var _Analyzer_components_Revenue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Analyzer_components/Revenue */ \"./components/Analyzer_components/Revenue.js\");\n/* harmony import */ var _Analyzer_components_ProfitMargin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Analyzer_components/ProfitMargin */ \"./components/Analyzer_components/ProfitMargin.js\");\n/* harmony import */ var _Analyzer_components_FCFMargin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Analyzer_components/FCFMargin */ \"./components/Analyzer_components/FCFMargin.js\");\n/* harmony import */ var _Analyzer_components_FCFMargin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Analyzer_components_FCFMargin__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Analyzer_components_PERatio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Analyzer_components/PERatio */ \"./components/Analyzer_components/PERatio.js\");\n/* harmony import */ var _Analyzer_components_PFCFRatio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Analyzer_components/PFCFRatio */ \"./components/Analyzer_components/PFCFRatio.js\");\n/* harmony import */ var _Analyzer_components_AnnualReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Analyzer_components/AnnualReturn */ \"./components/Analyzer_components/AnnualReturn.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar StockAnalyzer = function(param) {\n    var reports = param.reports;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_styles_StockAnalysis_module_css__WEBPACK_IMPORTED_MODULE_9___default().table),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Analyzer_components_TopRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Analyzer_components_Revenue__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Analyzer_components_ProfitMargin__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Analyzer_components_FCFMargin__WEBPACK_IMPORTED_MODULE_5___default()), {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Analyzer_components_PERatio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Analyzer_components_PFCFRatio__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Analyzer_components_AnnualReturn__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockAnalyzer.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = StockAnalyzer;\nvar getAverage = function(input_array) {\n    var sum = 0;\n    var irrelevant = 0;\n    for(var i = 0; i < input_array.length; i++){\n        if (typeof input_array[i] == \"number\") sum += input_array[i];\n        if (typeof input_array[i] != \"number\") irrelevant++;\n    }\n    return input_array.length != irrelevant ? sum / (input_array.length - irrelevant) : undefined;\n};\n\nvar _c;\n$RefreshReg$(_c, \"StockAnalyzer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b2NrQW5hbHl6ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNnQztBQUNYO0FBQ0U7QUFDVTtBQUNOO0FBQ0o7QUFDSTtBQUNNO0FBSTdELElBQU1TLGFBQWEsR0FBRyxnQkFBZTtRQUFiQyxPQUFPLFNBQVBBLE9BQU87SUFDM0IscUJBQ0ksOERBQUNDLE9BQUs7UUFBQ0MsU0FBUyxFQUFFWCwrRUFBaUI7OzBCQUMvQiw4REFBQ0MsbUVBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNDLG9FQUFPO2dCQUFDTyxPQUFPLEVBQUVBLE9BQU87Ozs7O3FCQUFJOzBCQUM3Qiw4REFBQ04seUVBQVk7Z0JBQUNNLE9BQU8sRUFBRUEsT0FBTzs7Ozs7cUJBQUc7MEJBQ2pDLDhEQUFDTCx1RUFBUztnQkFBQ0ssT0FBTyxFQUFFQSxPQUFPOzs7OztxQkFBRzswQkFDOUIsOERBQUNKLG9FQUFPO2dCQUFDSSxPQUFPLEVBQUVBLE9BQU87Ozs7O3FCQUFHOzBCQUM1Qiw4REFBQ0gsc0VBQVM7Z0JBQUNHLE9BQU8sRUFBRUEsT0FBTzs7Ozs7cUJBQUc7MEJBQzlCLDhEQUFDRix5RUFBWTtnQkFBQ0UsT0FBTyxFQUFFQSxPQUFPOzs7OztxQkFBRzs7Ozs7O2FBQzdCLENBQ1g7Q0FDSjtBQVpLRCxLQUFBQSxhQUFhO0FBY25CLElBQU1JLFVBQVUsR0FBRyxTQUFDQyxXQUFXLEVBQUs7SUFDaEMsSUFBSUMsR0FBRyxHQUFHLENBQUM7SUFDWCxJQUFJQyxVQUFVLEdBQUcsQ0FBQztJQUNsQixJQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsV0FBVyxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUcsT0FBT0gsV0FBVyxDQUFDRyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUVGLEdBQUcsSUFBSUQsV0FBVyxDQUFDRyxDQUFDLENBQUM7UUFDM0QsSUFBRyxPQUFPSCxXQUFXLENBQUNHLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRUQsVUFBVSxFQUFHO0tBQ3REO0lBQ0QsT0FBT0YsV0FBVyxDQUFDSSxNQUFNLElBQUlGLFVBQVUsR0FBR0QsR0FBRyxHQUFDLENBQUNELFdBQVcsQ0FBQ0ksTUFBTSxHQUFDRixVQUFVLENBQUMsR0FBR0csU0FBUztDQUM1RjtBQUVpQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0b2NrQW5hbHl6ZXIuanM/M2VlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3RvY2tTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1N0b2NrQW5hbHlzaXMubW9kdWxlLmNzcydcbmltcG9ydCBUb3BSb3cgZnJvbSAnLi9BbmFseXplcl9jb21wb25lbnRzL1RvcFJvdydcbmltcG9ydCBSZXZlbnVlIGZyb20gJy4vQW5hbHl6ZXJfY29tcG9uZW50cy9SZXZlbnVlJ1xuaW1wb3J0IFByb2ZpdE1hcmdpbiBmcm9tICcuL0FuYWx5emVyX2NvbXBvbmVudHMvUHJvZml0TWFyZ2luJ1xuaW1wb3J0IEZDRk1hcmdpbiBmcm9tICcuL0FuYWx5emVyX2NvbXBvbmVudHMvRkNGTWFyZ2luJ1xuaW1wb3J0IFBFUmF0aW8gZnJvbSAnLi9BbmFseXplcl9jb21wb25lbnRzL1BFUmF0aW8nXG5pbXBvcnQgUEZDRlJhdGlvIGZyb20gJy4vQW5hbHl6ZXJfY29tcG9uZW50cy9QRkNGUmF0aW8nXG5pbXBvcnQgQW5udWFsUmV0dXJuIGZyb20gJy4vQW5hbHl6ZXJfY29tcG9uZW50cy9Bbm51YWxSZXR1cm4nXG5cblxuXG5jb25zdCBTdG9ja0FuYWx5emVyID0gKHtyZXBvcnRzfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0b2NrU3R5bGVzLnRhYmxlfT5cbiAgICAgICAgICAgIDxUb3BSb3cgLz5cbiAgICAgICAgICAgIDxSZXZlbnVlIHJlcG9ydHM9e3JlcG9ydHN9IC8+XG4gICAgICAgICAgICA8UHJvZml0TWFyZ2luIHJlcG9ydHM9e3JlcG9ydHN9Lz5cbiAgICAgICAgICAgIDxGQ0ZNYXJnaW4gcmVwb3J0cz17cmVwb3J0c30vPlxuICAgICAgICAgICAgPFBFUmF0aW8gcmVwb3J0cz17cmVwb3J0c30vPlxuICAgICAgICAgICAgPFBGQ0ZSYXRpbyByZXBvcnRzPXtyZXBvcnRzfS8+XG4gICAgICAgICAgICA8QW5udWFsUmV0dXJuIHJlcG9ydHM9e3JlcG9ydHN9Lz5cbiAgICAgICAgPC90YWJsZT5cbiAgICApXG59XG5cbmNvbnN0IGdldEF2ZXJhZ2UgPSAoaW5wdXRfYXJyYXkpID0+IHtcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBpcnJlbGV2YW50ID0gMFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbnB1dF9hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKHR5cGVvZiBpbnB1dF9hcnJheVtpXSA9PSBcIm51bWJlclwiKSBzdW0gKz0gaW5wdXRfYXJyYXlbaV1cbiAgICAgICAgaWYodHlwZW9mIGlucHV0X2FycmF5W2ldICE9IFwibnVtYmVyXCIpIGlycmVsZXZhbnQgKytcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0X2FycmF5Lmxlbmd0aCAhPSBpcnJlbGV2YW50ID8gc3VtLyhpbnB1dF9hcnJheS5sZW5ndGgtaXJyZWxldmFudCkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IHtTdG9ja0FuYWx5emVyLCBnZXRBdmVyYWdlfSJdLCJuYW1lcyI6WyJMaW5rIiwic3RvY2tTdHlsZXMiLCJUb3BSb3ciLCJSZXZlbnVlIiwiUHJvZml0TWFyZ2luIiwiRkNGTWFyZ2luIiwiUEVSYXRpbyIsIlBGQ0ZSYXRpbyIsIkFubnVhbFJldHVybiIsIlN0b2NrQW5hbHl6ZXIiLCJyZXBvcnRzIiwidGFibGUiLCJjbGFzc05hbWUiLCJnZXRBdmVyYWdlIiwiaW5wdXRfYXJyYXkiLCJzdW0iLCJpcnJlbGV2YW50IiwiaSIsImxlbmd0aCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StockAnalyzer.js\n");

/***/ })

});