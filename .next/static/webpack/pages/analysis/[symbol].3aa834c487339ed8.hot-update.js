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

/***/ "./pages/analysis/[symbol]/index.js":
/*!******************************************!*\
  !*** ./pages/analysis/[symbol]/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _components_StockAnalyzer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/StockAnalyzer */ \"./components/StockAnalyzer.js\");\n/* harmony import */ var _components_AnalyzeResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/AnalyzeResult */ \"./components/AnalyzeResult.js\");\n/* harmony import */ var _components_StockTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/StockTitle */ \"./components/StockTitle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar earningVals, fcfVals;\nvar article = function(param) {\n    var income_statement = param.income_statement, balance_sheet = param.balance_sheet, cash_flow = param.cash_flow, stock_info = param.stock_info, price_info = param.price_info;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false), analyzed = ref[0], setAnalyzed = ref[1];\n    var handleClick = function() {\n        var analysisResult = getAnalyzedResults(props.reports.IS, props.reports.BS);\n        earningVals = analysisResult[\"earningsVals\"];\n        fcfVals = analysisResult[\"fcfVals\"];\n        setAnalyzed(function(state) {\n            return !state;\n        });\n    };\n    var reports = {\n        IS: income_statement,\n        BS: balance_sheet,\n        CF: cash_flow,\n        SI: stock_info,\n        PI: price_info\n    };\n    var found = income_statement.symbol ? true : false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"info-container\",\n                children: [\n                    found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        reports: reports\n                    }, void 0, false, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 23\n                    }, _this),\n                    found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnalyzeResult__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        pressed: false,\n                        reports: reports,\n                        handleClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 23\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this),\n            found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StockAnalyzer__WEBPACK_IMPORTED_MODULE_5__.StockAnalyzer, {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 41,\n                columnNumber: 19\n            }, _this),\n            !found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"We couldn't find the symbol you typed. Please try again with a different symbol\"\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 42,\n                columnNumber: 20\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this),\n            analyzed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Earning Multiples Valuation (low & mid & high): \",\n                    earningVals[0],\n                    \" and \",\n                    earningVals[1],\n                    \" and \",\n                    earningVals[2]\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, _this),\n            analyzed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"DCF Valuation (low & mid & high): \",\n                    fcfVals[0],\n                    \" and \",\n                    fcfVals[1],\n                    \" and \",\n                    fcfVals[2]\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: \"Go Back Home\"\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(article, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbmFseXNpcy9bc3ltYm9sXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFzQztBQUNWO0FBQ1c7QUFDSTtBQUNzQjtBQUNKO0FBQ047QUFDekI7O0FBRzlCLElBQUlRLFdBQVcsRUFBRUMsT0FBTztBQUd4QixJQUFNQyxPQUFPLEdBQUcsZ0JBQTJFO1FBQXpFQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxhQUFhLFNBQWJBLGFBQWEsRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxVQUFVLFNBQVZBLFVBQVU7O0lBQ2hGLElBQWdDUixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBZG5ELFFBY21CLEdBQWlCQSxHQUFlLEdBQWhDLEVBZG5CLFdBY2dDLEdBQUlBLEdBQWUsR0FBbkI7SUFFNUIsSUFBTVcsV0FBVyxHQUFHLFdBQU07UUFDdEIsSUFBTUMsY0FBYyxHQUFHQyxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUNDLEVBQUUsRUFBRUYsS0FBSyxDQUFDQyxPQUFPLENBQUNFLEVBQUUsQ0FBQztRQUM3RWhCLFdBQVcsR0FBR1csY0FBYyxDQUFDLGNBQWMsQ0FBQztRQUM1Q1YsT0FBTyxHQUFHVSxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ25DRixXQUFXLENBQUNRLFNBQUFBLEtBQUs7bUJBQUksQ0FBQ0EsS0FBSztTQUFBLENBQUM7S0FDL0I7SUFFRCxJQUFNSCxPQUFPLEdBQUc7UUFDWkMsRUFBRSxFQUFFWixnQkFBZ0I7UUFDcEJhLEVBQUUsRUFBRVosYUFBYTtRQUNqQmMsRUFBRSxFQUFFYixTQUFTO1FBQ2JjLEVBQUUsRUFBRWIsVUFBVTtRQUNkYyxFQUFFLEVBQUViLFVBQVU7S0FDakI7SUFFRCxJQUFNYyxLQUFLLEdBQUdsQixnQkFBZ0IsQ0FBQ21CLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSztJQUVwRCxxQkFBTzs7MEJBQ0gsOERBQUMzQix3REFBSTs7OztxQkFBRzswQkFDUiw4REFBQzRCLEtBQUc7Z0JBQUNDLEtBQUssRUFBQyxnQkFBZ0I7O29CQUN0QkgsS0FBSyxrQkFBSSw4REFBQ3ZCLDhEQUFVO3dCQUFDZ0IsT0FBTyxFQUFFQSxPQUFPOzs7Ozs2QkFBRztvQkFDeENPLEtBQUssa0JBQUksOERBQUN4QixpRUFBYTt3QkFBQzRCLE9BQU8sRUFBRSxLQUFLO3dCQUFFWCxPQUFPLEVBQUVBLE9BQU87d0JBQUVKLFdBQVcsRUFBRUEsV0FBVzs7Ozs7NkJBQUc7Ozs7OztxQkFDcEY7MEJBQ04sOERBQUNnQixJQUFFOzs7O3FCQUFHO1lBQ0xMLEtBQUssa0JBQUksOERBQUN6QixvRUFBYTtnQkFBQ2tCLE9BQU8sRUFBRUEsT0FBTzs7Ozs7cUJBQUc7WUFDM0MsQ0FBQ08sS0FBSyxrQkFBSSw4REFBQ00sSUFBRTswQkFBQyxpRkFBK0U7Ozs7O3FCQUFLOzBCQUNuRyw4REFBQ0QsSUFBRTs7OztxQkFBRztZQUNMbEIsUUFBUSxrQkFDTCw4REFBQ29CLEdBQUM7O29CQUFDLGtEQUFnRDtvQkFBQzVCLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQUMsT0FBSztvQkFBQ0EsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFBQyxPQUFLO29CQUFDQSxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7Ozs7cUJBQUs7WUFHcEhRLFFBQVEsa0JBQ0wsOERBQUNvQixHQUFDOztvQkFBQyxvQ0FBa0M7b0JBQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUFDLE9BQUs7b0JBQUNBLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQUMsT0FBSztvQkFBQ0EsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7O3FCQUFLOzBCQUUzRiw4REFBQ1Isa0RBQUk7Z0JBQUNvQyxJQUFJLEVBQUMsR0FBRzswQkFBQyxjQUFZOzs7OztxQkFBTzs7b0JBRW5DO0NBQ047R0F4Q0szQixPQUFPOztBQXNFYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hbmFseXNpcy9bc3ltYm9sXS9pbmRleC5qcz80NzcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VydmVyfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01ldGEnXG5pbXBvcnQgeyBTdG9ja0FuYWx5emVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU3RvY2tBbmFseXplclwiXG5pbXBvcnQgQW5hbHl6ZVJlc3VsdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0FuYWx5emVSZXN1bHQnXG5pbXBvcnQgU3RvY2tUaXRsZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TdG9ja1RpdGxlXCJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5cbmxldCBlYXJuaW5nVmFscywgZmNmVmFsc1xuXG5cbmNvbnN0IGFydGljbGUgPSAoe2luY29tZV9zdGF0ZW1lbnQsIGJhbGFuY2Vfc2hlZXQsIGNhc2hfZmxvdywgc3RvY2tfaW5mbywgcHJpY2VfaW5mbyx9KSA9PiB7XG4gICAgY29uc3QgW2FuYWx5emVkLCBzZXRBbmFseXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFuYWx5c2lzUmVzdWx0ID0gZ2V0QW5hbHl6ZWRSZXN1bHRzKHByb3BzLnJlcG9ydHMuSVMsIHByb3BzLnJlcG9ydHMuQlMpXG4gICAgICAgIGVhcm5pbmdWYWxzID0gYW5hbHlzaXNSZXN1bHRbJ2Vhcm5pbmdzVmFscyddXG4gICAgICAgIGZjZlZhbHMgPSBhbmFseXNpc1Jlc3VsdFsnZmNmVmFscyddXG4gICAgICAgIHNldEFuYWx5emVkKHN0YXRlID0+ICFzdGF0ZSlcbiAgICB9XG5cbiAgICBjb25zdCByZXBvcnRzID0ge1xuICAgICAgICBJUzogaW5jb21lX3N0YXRlbWVudCxcbiAgICAgICAgQlM6IGJhbGFuY2Vfc2hlZXQsXG4gICAgICAgIENGOiBjYXNoX2Zsb3csXG4gICAgICAgIFNJOiBzdG9ja19pbmZvLFxuICAgICAgICBQSTogcHJpY2VfaW5mbyxcbiAgICB9XG5cbiAgICBjb25zdCBmb3VuZCA9IGluY29tZV9zdGF0ZW1lbnQuc3ltYm9sID8gdHJ1ZSA6IGZhbHNlICBcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtmb3VuZCAmJiA8U3RvY2tUaXRsZSByZXBvcnRzPXtyZXBvcnRzfS8+fVxuICAgICAgICAgICAge2ZvdW5kICYmIDxBbmFseXplUmVzdWx0IHByZXNzZWQ9e2ZhbHNlfSByZXBvcnRzPXtyZXBvcnRzfSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2ZvdW5kICYmIDxTdG9ja0FuYWx5emVyIHJlcG9ydHM9e3JlcG9ydHN9Lz59XG4gICAgICAgIHshZm91bmQgJiYgPGgyPldlIGNvdWxkbid0IGZpbmQgdGhlIHN5bWJvbCB5b3UgdHlwZWQuIFBsZWFzZSB0cnkgYWdhaW4gd2l0aCBhIGRpZmZlcmVudCBzeW1ib2w8L2gyPn1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHthbmFseXplZCAmJiAoXG4gICAgICAgICAgICA8cD5FYXJuaW5nIE11bHRpcGxlcyBWYWx1YXRpb24gKGxvdyAmIG1pZCAmIGhpZ2gpOiB7ZWFybmluZ1ZhbHNbMF19IGFuZCB7ZWFybmluZ1ZhbHNbMV19IGFuZCB7ZWFybmluZ1ZhbHNbMl19PC9wPlxuICAgICAgICApfVxuXG4gICAgICAgIHthbmFseXplZCAmJiAoXG4gICAgICAgICAgICA8cD5EQ0YgVmFsdWF0aW9uIChsb3cgJiBtaWQgJiBoaWdoKToge2ZjZlZhbHNbMF19IGFuZCB7ZmNmVmFsc1sxXX0gYW5kIHtmY2ZWYWxzWzJdfTwvcD5cbiAgICAgICAgKX0gXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPkdvIEJhY2sgSG9tZTwvTGluaz5cbiAgICAgICAgXG4gICAgPC8+XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPUlOQ09NRV9TVEFURU1FTlQmc3ltYm9sPSR7Y29udGV4dC5wYXJhbXMuc3ltYm9sfSZhcGlrZXk9JHtwcm9jZXNzLmVudi5BTFBIQV9BUElfS0VZfWApXG4gICAgY29uc3QgaW5jb21lX3N0YXRlbWVudCA9IGF3YWl0IHJlczEuanNvbigpXG5cbiAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1CQUxBTkNFX1NIRUVUJnN5bWJvbD0ke2NvbnRleHQucGFyYW1zLnN5bWJvbH0mYXBpa2V5PSR7cHJvY2Vzcy5lbnYuQUxQSEFfQVBJX0tFWX1gKVxuICAgIGNvbnN0IGJhbGFuY2Vfc2hlZXQgPSBhd2FpdCByZXMyLmpzb24oKVxuXG4gICAgY29uc3QgcmVzMyA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249Q0FTSF9GTE9XJnN5bWJvbD0ke2NvbnRleHQucGFyYW1zLnN5bWJvbH0mYXBpa2V5PSR7cHJvY2Vzcy5lbnYuQUxQSEFfQVBJX0tFWX1gKVxuICAgIGNvbnN0IGNhc2hfZmxvdyA9IGF3YWl0IHJlczMuanNvbigpXG5cbiAgICBjb25zdCByZXM1ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1PVkVSVklFVyZzeW1ib2w9JHtjb250ZXh0LnBhcmFtcy5zeW1ib2x9JmFwaWtleT0ke3Byb2Nlc3MuZW52LkFMUEhBX0FQSV9LRVl9YClcbiAgICBjb25zdCBzdG9ja19pbmZvID0gYXdhaXQgcmVzNS5qc29uKClcblxuICAgIGNvbnN0IHJlczYgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9maW5uaHViLmlvL2FwaS92MS9xdW90ZT9zeW1ib2w9JHtjb250ZXh0LnBhcmFtcy5zeW1ib2x9JnRva2VuPSR7cHJvY2Vzcy5lbnYuRklOTkhVQl9UT0tFTn1gKVxuICAgIGNvbnN0IHByaWNlX2luZm8gPSBhd2FpdCByZXM2Lmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGluY29tZV9zdGF0ZW1lbnQsIFxuICAgICAgICAgICAgYmFsYW5jZV9zaGVldCxcbiAgICAgICAgICAgIGNhc2hfZmxvdyxcbiAgICAgICAgICAgIHN0b2NrX2luZm8sXG4gICAgICAgICAgICBwcmljZV9pbmZvLFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGUiXSwibmFtZXMiOlsic2VydmVyIiwiTGluayIsInVzZVJvdXRlciIsIk1ldGEiLCJTdG9ja0FuYWx5emVyIiwiQW5hbHl6ZVJlc3VsdCIsIlN0b2NrVGl0bGUiLCJ1c2VTdGF0ZSIsImVhcm5pbmdWYWxzIiwiZmNmVmFscyIsImFydGljbGUiLCJpbmNvbWVfc3RhdGVtZW50IiwiYmFsYW5jZV9zaGVldCIsImNhc2hfZmxvdyIsInN0b2NrX2luZm8iLCJwcmljZV9pbmZvIiwiYW5hbHl6ZWQiLCJzZXRBbmFseXplZCIsImhhbmRsZUNsaWNrIiwiYW5hbHlzaXNSZXN1bHQiLCJnZXRBbmFseXplZFJlc3VsdHMiLCJwcm9wcyIsInJlcG9ydHMiLCJJUyIsIkJTIiwic3RhdGUiLCJDRiIsIlNJIiwiUEkiLCJmb3VuZCIsInN5bWJvbCIsImRpdiIsImNsYXNzIiwicHJlc3NlZCIsImJyIiwiaDIiLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/analysis/[symbol]/index.js\n");

/***/ })

});