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

/***/ "./components/AnalyzeResult.js":
/*!*************************************!*\
  !*** ./components/AnalyzeResult.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/AnalyzeResult.module.css */ \"./styles/AnalyzeResult.module.css\");\n/* harmony import */ var _styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StockAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockAnalyzer */ \"./components/StockAnalyzer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar AnalyzeResult = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), analyzed = ref[0], setAnalyzed = ref[1];\n    var earningVal_low, earningVal_mid, earningVal_high, fcfVal_low, fcfVal_mid, fcfVal_high;\n    var handleClick = function() {\n        setAnalyzed(function(state) {\n            return !state;\n        })[earningVal_low, earningVal_mid, earningVal_high, fcfVal_low, fcfVal_mid, fcfVal_high] = getAnalyzedResults(props.reports.IS, props.reports.BS);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            analyzed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search Stock Symbol\"\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/AnalyzeResult.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: handleClick,\n                children: \"Analyze\"\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/AnalyzeResult.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/AnalyzeResult.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_s(AnalyzeResult, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AnalyzeResult;\nvar getAnalyzedResults = function(IS, BS) {\n    var number_of_quarters = IS.quarterlyReports.length;\n    var last_revenue = number_of_quarters >= 4 ? (0,_StockAnalyzer__WEBPACK_IMPORTED_MODULE_1__.getAverage)([\n        getQuarterlyRevenue(IS, 0),\n        getQuarterlyRevenue(IS, 1),\n        getQuarterlyRevenue(IS, 2),\n        getQuarterlyRevenue(IS, 3)\n    ]) * 4 : undefined;\n    var shares = BS.quarterlyReports[0].commonStockSharesOutstanding != \"None\" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined;\n    var ref = [\n        Number(document.getElementById(\"revenue_input_low\").value) / 100,\n        Number(document.getElementById(\"revenue_input_mid\").value) / 100,\n        Number(document.getElementById(\"revenue_input_high\").value) / 100\n    ], growth_low = ref[0], growth_mid = ref[1], growth_high = ref[2];\n    var ref1 = [\n        Number(document.getElementById(\"ProfitMargin_input_low\").value) / 100,\n        Number(document.getElementById(\"ProfitMargin_input_mid\").value) / 100,\n        Number(document.getElementById(\"ProfitMargin_input_high\").value) / 100\n    ], p_margin_low = ref1[0], p_margin_mid = ref1[1], p_margin_high = ref1[2];\n    var ref2 = [\n        Number(document.getElementById(\"FCFMargin_input_low\").value) / 100,\n        Number(document.getElementById(\"FCFMargin_input_mid\").value) / 100,\n        Number(document.getElementById(\"FCFMargin_input_high\").value) / 100\n    ], fcf_margin_low = ref2[0], fcf_margin_mid = ref2[1], fcf_margin_high = ref2[2];\n    var ref3 = [\n        Number(document.getElementById(\"PE_input_low\").value),\n        Number(document.getElementById(\"PE_input_mid\").value),\n        Number(document.getElementById(\"PE_input_high\").value)\n    ], pe_low = ref3[0], pe_mid = ref3[1], pe_high = ref3[2];\n    var ref4 = [\n        Number(document.getElementById(\"PFCF_input_low\").value),\n        Number(document.getElementById(\"PFCF_input_low\").value),\n        Number(document.getElementById(\"PFCF_input_low\").value)\n    ], pfcf_low = ref4[0], pfcf_mid = ref4[1], pfcf_high = ref4[2];\n    var ref5 = [\n        Number(document.getElementById(\"AnnualReturn_input_low\").value) / 100,\n        Number(document.getElementById(\"AnnualReturn_input_mid\").value) / 100,\n        Number(document.getElementById(\"AnnualReturn_input_high\").value) / 100\n    ], discount_low = ref5[0], discount_mid = ref5[1], discount_high = ref5[2];\n    return {\n        earningsVals: [\n            getDiscountedVal(last_revenue, shares, growth_low, p_margin_low, pe_low, discount_low),\n            getDiscountedVal(last_revenue, shares, growth_mid, p_margin_mid, pe_mid, discount_mid),\n            getDiscountedVal(last_revenue, shares, growth_high, p_margin_high, pe_high, discount_high)\n        ],\n        fcfVals: [\n            getDiscountedVal(last_revenue, shares, growth_low, fcf_margin_low, pfcf_low, discount_low),\n            getDiscountedVal(last_revenue, shares, growth_mid, fcf_margin_mid, pfcf_mid, discount_mid),\n            getDiscountedVal(last_revenue, shares, growth_high, fcf_margin_high, pfcf_high, discount_high)\n        ]\n    };\n};\nvar getDiscountedVal = function(revenue, shares, growth, margin, multiple, discount) {\n    var rev = revenue;\n    var cumulative_val = 0;\n    for(var time = 1; time <= 11; time++){\n        rev *= 1 + growth;\n        var per_share = rev * margin / shares;\n        if (time == 11) per_share *= multiple;\n        cumulative_val += per_share / Math.pow(1 + discount, time);\n    }\n    return cumulative_val.toFixed(2);\n};\nvar getQuarterlyRevenue = function(IS, quarter) {\n    return IS.quarterlyReports[quarter].totalRevenue != \"None\" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnalyzeResult);\nvar _c;\n$RefreshReg$(_c, \"AnalyzeResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQyxDQUFDQyxZQUFZLElBQUksTUFBTSxHQUFHcEMsTUFBTSxDQUFDbEIsRUFBRSxDQUFDVyxnQkFBZ0IsQ0FBQzBDLE9BQU8sQ0FBQyxDQUFDQyxZQUFZLENBQUMsR0FBR3ZDLFNBQVM7Q0FDN0g7QUFFRCwrREFBZTdCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbmFseXplUmVzdWx0LmpzPzM0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc3VsdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQW5hbHl6ZVJlc3VsdC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZ2V0QXZlcmFnZSB9IGZyb20gJy4vU3RvY2tBbmFseXplcidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBbmFseXplUmVzdWx0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2FuYWx5emVkLCBzZXRBbmFseXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgbGV0IGVhcm5pbmdWYWxfbG93LCBlYXJuaW5nVmFsX21pZCwgZWFybmluZ1ZhbF9oaWdoLCBmY2ZWYWxfbG93LCBmY2ZWYWxfbWlkLCBmY2ZWYWxfaGlnaFxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuYWx5emVkKHN0YXRlID0+ICFzdGF0ZSlcbiAgICAgICAgW2Vhcm5pbmdWYWxfbG93LCBlYXJuaW5nVmFsX21pZCwgZWFybmluZ1ZhbF9oaWdoLCBmY2ZWYWxfbG93LCBmY2ZWYWxfbWlkLCBmY2ZWYWxfaGlnaF0gPSBnZXRBbmFseXplZFJlc3VsdHMocHJvcHMucmVwb3J0cy5JUywgcHJvcHMucmVwb3J0cy5CUylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVzdWx0U3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7YW5hbHl6ZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU2VhcmNoIFN0b2NrIFN5bWJvbCc+PC9pbnB1dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cmVzdWx0U3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PkFuYWx5emU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmNvbnN0IGdldEFuYWx5emVkUmVzdWx0cyA9IChJUywgQlMpID0+IHtcbiAgICBjb25zdCBudW1iZXJfb2ZfcXVhcnRlcnMgPSBJUy5xdWFydGVybHlSZXBvcnRzLmxlbmd0aFxuICAgIGNvbnN0IGxhc3RfcmV2ZW51ZSA9IG51bWJlcl9vZl9xdWFydGVycyA+PSA0ID8gZ2V0QXZlcmFnZShbZ2V0UXVhcnRlcmx5UmV2ZW51ZShJUywgMCksIGdldFF1YXJ0ZXJseVJldmVudWUoSVMsIDEpLCBnZXRRdWFydGVybHlSZXZlbnVlKElTLCAyKSwgZ2V0UXVhcnRlcmx5UmV2ZW51ZShJUywgMyldKSo0IDogdW5kZWZpbmVkXG4gICAgY29uc3Qgc2hhcmVzID0gQlMucXVhcnRlcmx5UmVwb3J0c1swXS5jb21tb25TdG9ja1NoYXJlc091dHN0YW5kaW5nICE9IFwiTm9uZVwiID8gTnVtYmVyKEJTLnF1YXJ0ZXJseVJlcG9ydHNbMF0uY29tbW9uU3RvY2tTaGFyZXNPdXRzdGFuZGluZykgOiB1bmRlZmluZWRcbiAgICBjb25zdCBbZ3Jvd3RoX2xvdywgZ3Jvd3RoX21pZCwgZ3Jvd3RoX2hpZ2hdID0gW051bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldmVudWVfaW5wdXRfbG93XCIpLnZhbHVlKS8xMDAsIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldmVudWVfaW5wdXRfbWlkXCIpLnZhbHVlKS8xMDAsIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldmVudWVfaW5wdXRfaGlnaFwiKS52YWx1ZSkvMTAwXSBcbiAgICBjb25zdCBbcF9tYXJnaW5fbG93LCBwX21hcmdpbl9taWQsIHBfbWFyZ2luX2hpZ2hdID0gW051bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlByb2ZpdE1hcmdpbl9pbnB1dF9sb3dcIikudmFsdWUpLzEwMCwgTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUHJvZml0TWFyZ2luX2lucHV0X21pZFwiKS52YWx1ZSkvMTAwLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQcm9maXRNYXJnaW5faW5wdXRfaGlnaFwiKS52YWx1ZSkvMTAwXSBcbiAgICBjb25zdCBbZmNmX21hcmdpbl9sb3csIGZjZl9tYXJnaW5fbWlkLCBmY2ZfbWFyZ2luX2hpZ2hdID0gW051bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZDRk1hcmdpbl9pbnB1dF9sb3dcIikudmFsdWUpLzEwMCwgTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRkNGTWFyZ2luX2lucHV0X21pZFwiKS52YWx1ZSkvMTAwLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGQ0ZNYXJnaW5faW5wdXRfaGlnaFwiKS52YWx1ZSkvMTAwXSBcbiAgICBjb25zdCBbcGVfbG93LCBwZV9taWQsIHBlX2hpZ2hdID0gW051bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBFX2lucHV0X2xvd1wiKS52YWx1ZSksIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBFX2lucHV0X21pZFwiKS52YWx1ZSksIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBFX2lucHV0X2hpZ2hcIikudmFsdWUpXSBcbiAgICBjb25zdCBbcGZjZl9sb3csIHBmY2ZfbWlkLCBwZmNmX2hpZ2hdID0gW051bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBGQ0ZfaW5wdXRfbG93XCIpLnZhbHVlKSwgTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUEZDRl9pbnB1dF9sb3dcIikudmFsdWUpLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQRkNGX2lucHV0X2xvd1wiKS52YWx1ZSldIFxuICAgIGNvbnN0IFtkaXNjb3VudF9sb3csIGRpc2NvdW50X21pZCwgZGlzY291bnRfaGlnaF0gPSBbTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQW5udWFsUmV0dXJuX2lucHV0X2xvd1wiKS52YWx1ZSkvMTAwLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbm51YWxSZXR1cm5faW5wdXRfbWlkXCIpLnZhbHVlKS8xMDAsIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFubnVhbFJldHVybl9pbnB1dF9oaWdoXCIpLnZhbHVlKS8xMDBdIFxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGVhcm5pbmdzVmFsczogW2dldERpc2NvdW50ZWRWYWwobGFzdF9yZXZlbnVlLCBzaGFyZXMsIGdyb3d0aF9sb3csIHBfbWFyZ2luX2xvdywgcGVfbG93LCBkaXNjb3VudF9sb3cpLCBnZXREaXNjb3VudGVkVmFsKGxhc3RfcmV2ZW51ZSwgc2hhcmVzLCBncm93dGhfbWlkLCBwX21hcmdpbl9taWQsIHBlX21pZCwgZGlzY291bnRfbWlkKSwgZ2V0RGlzY291bnRlZFZhbChsYXN0X3JldmVudWUsIHNoYXJlcywgZ3Jvd3RoX2hpZ2gsIHBfbWFyZ2luX2hpZ2gsIHBlX2hpZ2gsIGRpc2NvdW50X2hpZ2gpXSxcbiAgICAgICAgZmNmVmFsczogW2dldERpc2NvdW50ZWRWYWwobGFzdF9yZXZlbnVlLCBzaGFyZXMsIGdyb3d0aF9sb3csIGZjZl9tYXJnaW5fbG93LCBwZmNmX2xvdywgZGlzY291bnRfbG93KSwgZ2V0RGlzY291bnRlZFZhbChsYXN0X3JldmVudWUsIHNoYXJlcywgZ3Jvd3RoX21pZCwgZmNmX21hcmdpbl9taWQsIHBmY2ZfbWlkLCBkaXNjb3VudF9taWQpLCBnZXREaXNjb3VudGVkVmFsKGxhc3RfcmV2ZW51ZSwgc2hhcmVzLCBncm93dGhfaGlnaCwgZmNmX21hcmdpbl9oaWdoLCBwZmNmX2hpZ2gsIGRpc2NvdW50X2hpZ2gpXSxcbiAgICB9XG59XG5cbmNvbnN0IGdldERpc2NvdW50ZWRWYWwgPSAocmV2ZW51ZSwgc2hhcmVzLCBncm93dGgsIG1hcmdpbiwgbXVsdGlwbGUsIGRpc2NvdW50KSA9PiB7XG4gICAgbGV0IHJldiA9IHJldmVudWVcbiAgICBsZXQgY3VtdWxhdGl2ZV92YWwgPSAwXG4gICAgZm9yKHZhciB0aW1lID0gMTsgdGltZSA8PSAxMTsgdGltZSsrKXtcbiAgICAgICAgcmV2ICo9ICgxK2dyb3d0aClcbiAgICAgICAgbGV0IHBlcl9zaGFyZSA9IHJldiptYXJnaW4vc2hhcmVzXG4gICAgICAgIGlmICh0aW1lID09IDExKSBwZXJfc2hhcmUgKj0gbXVsdGlwbGVcbiAgICAgICAgY3VtdWxhdGl2ZV92YWwgKz0gcGVyX3NoYXJlLygxK2Rpc2NvdW50KSoqdGltZVxuICAgIH1cbiAgICByZXR1cm4gY3VtdWxhdGl2ZV92YWwudG9GaXhlZCgyKVxufVxuXG5jb25zdCBnZXRRdWFydGVybHlSZXZlbnVlID0gKElTLCBxdWFydGVyKSA9PiB7XG4gICAgcmV0dXJuIElTLnF1YXJ0ZXJseVJlcG9ydHNbcXVhcnRlcl0udG90YWxSZXZlbnVlICE9IFwiTm9uZVwiID8gTnVtYmVyKElTLnF1YXJ0ZXJseVJlcG9ydHNbcXVhcnRlcl0udG90YWxSZXZlbnVlKSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXplUmVzdWx0Il0sIm5hbWVzIjpbInJlc3VsdFN0eWxlcyIsImdldEF2ZXJhZ2UiLCJ1c2VTdGF0ZSIsIkFuYWx5emVSZXN1bHQiLCJwcm9wcyIsImFuYWx5emVkIiwic2V0QW5hbHl6ZWQiLCJlYXJuaW5nVmFsX2xvdyIsImVhcm5pbmdWYWxfbWlkIiwiZWFybmluZ1ZhbF9oaWdoIiwiZmNmVmFsX2xvdyIsImZjZlZhbF9taWQiLCJmY2ZWYWxfaGlnaCIsImhhbmRsZUNsaWNrIiwic3RhdGUiLCJnZXRBbmFseXplZFJlc3VsdHMiLCJyZXBvcnRzIiwiSVMiLCJCUyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsIm51bWJlcl9vZl9xdWFydGVycyIsInF1YXJ0ZXJseVJlcG9ydHMiLCJsZW5ndGgiLCJsYXN0X3JldmVudWUiLCJnZXRRdWFydGVybHlSZXZlbnVlIiwidW5kZWZpbmVkIiwic2hhcmVzIiwiY29tbW9uU3RvY2tTaGFyZXNPdXRzdGFuZGluZyIsIk51bWJlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImdyb3d0aF9sb3ciLCJncm93dGhfbWlkIiwiZ3Jvd3RoX2hpZ2giLCJwX21hcmdpbl9sb3ciLCJwX21hcmdpbl9taWQiLCJwX21hcmdpbl9oaWdoIiwiZmNmX21hcmdpbl9sb3ciLCJmY2ZfbWFyZ2luX21pZCIsImZjZl9tYXJnaW5faGlnaCIsInBlX2xvdyIsInBlX21pZCIsInBlX2hpZ2giLCJwZmNmX2xvdyIsInBmY2ZfbWlkIiwicGZjZl9oaWdoIiwiZGlzY291bnRfbG93IiwiZGlzY291bnRfbWlkIiwiZGlzY291bnRfaGlnaCIsImVhcm5pbmdzVmFscyIsImdldERpc2NvdW50ZWRWYWwiLCJmY2ZWYWxzIiwicmV2ZW51ZSIsImdyb3d0aCIsIm1hcmdpbiIsIm11bHRpcGxlIiwiZGlzY291bnQiLCJyZXYiLCJjdW11bGF0aXZlX3ZhbCIsInRpbWUiLCJwZXJfc2hhcmUiLCJ0b0ZpeGVkIiwicXVhcnRlciIsInRvdGFsUmV2ZW51ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AnalyzeResult.js\n");

/***/ })

});