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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/AnalyzeResult.module.css */ \"./styles/AnalyzeResult.module.css\");\n/* harmony import */ var _styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StockAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockAnalyzer */ \"./components/StockAnalyzer.js\");\nvar _this = undefined;\n\n\n\nvar earningVals, fcfVals;\nvar AnalyzeResult = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_styles_AnalyzeResult_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n            onClick: props.handleClick,\n            children: \"Analyze\"\n        }, void 0, false, {\n            fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/AnalyzeResult.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/AnalyzeResult.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, _this);\n};\n_c = AnalyzeResult;\nvar getAnalyzedResults = function(IS, BS) {\n    var number_of_quarters = IS.quarterlyReports.length;\n    var last_revenue = number_of_quarters >= 4 ? (0,_StockAnalyzer__WEBPACK_IMPORTED_MODULE_1__.getAverage)([\n        getQuarterlyRevenue(IS, 0),\n        getQuarterlyRevenue(IS, 1),\n        getQuarterlyRevenue(IS, 2),\n        getQuarterlyRevenue(IS, 3)\n    ]) * 4 : undefined;\n    var shares = BS.quarterlyReports[0].commonStockSharesOutstanding != \"None\" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined;\n    var ref = [\n        Number(document.getElementById(\"revenue_input_low\").value) / 100,\n        Number(document.getElementById(\"revenue_input_mid\").value) / 100,\n        Number(document.getElementById(\"revenue_input_high\").value) / 100\n    ], growth_low = ref[0], growth_mid = ref[1], growth_high = ref[2];\n    var ref1 = [\n        Number(document.getElementById(\"ProfitMargin_input_low\").value) / 100,\n        Number(document.getElementById(\"ProfitMargin_input_mid\").value) / 100,\n        Number(document.getElementById(\"ProfitMargin_input_high\").value) / 100\n    ], p_margin_low = ref1[0], p_margin_mid = ref1[1], p_margin_high = ref1[2];\n    var ref2 = [\n        Number(document.getElementById(\"FCFMargin_input_low\").value) / 100,\n        Number(document.getElementById(\"FCFMargin_input_mid\").value) / 100,\n        Number(document.getElementById(\"FCFMargin_input_high\").value) / 100\n    ], fcf_margin_low = ref2[0], fcf_margin_mid = ref2[1], fcf_margin_high = ref2[2];\n    var ref3 = [\n        Number(document.getElementById(\"PE_input_low\").value),\n        Number(document.getElementById(\"PE_input_mid\").value),\n        Number(document.getElementById(\"PE_input_high\").value)\n    ], pe_low = ref3[0], pe_mid = ref3[1], pe_high = ref3[2];\n    var ref4 = [\n        Number(document.getElementById(\"PFCF_input_low\").value),\n        Number(document.getElementById(\"PFCF_input_mid\").value),\n        Number(document.getElementById(\"PFCF_input_high\").value)\n    ], pfcf_low = ref4[0], pfcf_mid = ref4[1], pfcf_high = ref4[2];\n    var ref5 = [\n        Number(document.getElementById(\"AnnualReturn_input_low\").value) / 100,\n        Number(document.getElementById(\"AnnualReturn_input_mid\").value) / 100,\n        Number(document.getElementById(\"AnnualReturn_input_high\").value) / 100\n    ], discount_low = ref5[0], discount_mid = ref5[1], discount_high = ref5[2];\n    return {\n        \"earningsVals\": [\n            getDiscountedVal(last_revenue, shares, growth_low, p_margin_low, pe_low, discount_low),\n            getDiscountedVal(last_revenue, shares, growth_mid, p_margin_mid, pe_mid, discount_mid),\n            getDiscountedVal(last_revenue, shares, growth_high, p_margin_high, pe_high, discount_high)\n        ],\n        \"fcfVals\": [\n            getDiscountedVal(last_revenue, shares, growth_low, fcf_margin_low, pfcf_low, discount_low),\n            getDiscountedVal(last_revenue, shares, growth_mid, fcf_margin_mid, pfcf_mid, discount_mid),\n            getDiscountedVal(last_revenue, shares, growth_high, fcf_margin_high, pfcf_high, discount_high)\n        ]\n    };\n};\nvar getDiscountedVal = function(revenue, shares, growth, margin, multiple, discount) {\n    var rev = revenue;\n    var cumulative_val = 0;\n    for(var time = 1; time <= 11; time++){\n        rev *= 1 + growth;\n        var per_share = rev * margin / shares;\n        if (time == 11) per_share *= multiple;\n        cumulative_val += per_share / Math.pow(1 + discount, time);\n    }\n    return cumulative_val.toFixed(2);\n};\nvar getQuarterlyRevenue = function(IS, quarter) {\n    return IS.quarterlyReports[quarter].totalRevenue != \"None\" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnalyzeResult);\nvar _c;\n$RefreshReg$(_c, \"AnalyzeResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVBLElBQUksSUFBSSxFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO1FBQ2pDRixHQUFHLElBQUssQ0FBQyxHQUFDSixNQUFNO1FBQ2hCLElBQUlPLFNBQVMsR0FBR0gsR0FBRyxHQUFDSCxNQUFNLEdBQUMzQixNQUFNO1FBQ2pDLElBQUlnQyxJQUFJLElBQUksRUFBRSxFQUFFQyxTQUFTLElBQUlMLFFBQVE7UUFDckNHLGNBQWMsSUFBSUUsU0FBUyxHQUFDLElBQWtCLENBQWxCLEdBQWtCLENBQWpCLENBQUMsR0FBQ0osUUFBUSxFQUFHRyxJQUFJO0tBQ2pEO0lBQ0QsT0FBT0QsY0FBYyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ25DO0FBRUQsSUFBTXBDLG1CQUFtQixHQUFHLFNBQUNOLEVBQUUsRUFBRTJDLE9BQU8sRUFBSztJQUN6QyxPQUFPM0MsRUFBRSxDQUFDRyxnQkFBZ0IsQ0FBQ3dDLE9BQU8sQ0FBQyxDQUFDQyxZQUFZLElBQUksTUFBTSxHQUFHbEMsTUFBTSxDQUFDVixFQUFFLENBQUNHLGdCQUFnQixDQUFDd0MsT0FBTyxDQUFDLENBQUNDLFlBQVksQ0FBQyxHQUFHckMsU0FBUztDQUM3SDtBQUdELCtEQUFlaEIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FuYWx5emVSZXN1bHQuanM/MzQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzdWx0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BbmFseXplUmVzdWx0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRBdmVyYWdlIH0gZnJvbSAnLi9TdG9ja0FuYWx5emVyJ1xuXG5sZXQgZWFybmluZ1ZhbHMsIGZjZlZhbHNcblxuY29uc3QgQW5hbHl6ZVJlc3VsdCA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Jlc3VsdFN0eWxlcy5jb250YWluZXJ9PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cmVzdWx0U3R5bGVzLmJ1dHRvbn0gb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9PkFuYWx5emU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBnZXRBbmFseXplZFJlc3VsdHMgPSAoSVMsIEJTKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyX29mX3F1YXJ0ZXJzID0gSVMucXVhcnRlcmx5UmVwb3J0cy5sZW5ndGhcbiAgICBjb25zdCBsYXN0X3JldmVudWUgPSBudW1iZXJfb2ZfcXVhcnRlcnMgPj0gNCA/IGdldEF2ZXJhZ2UoW2dldFF1YXJ0ZXJseVJldmVudWUoSVMsIDApLCBnZXRRdWFydGVybHlSZXZlbnVlKElTLCAxKSwgZ2V0UXVhcnRlcmx5UmV2ZW51ZShJUywgMiksIGdldFF1YXJ0ZXJseVJldmVudWUoSVMsIDMpXSkqNCA6IHVuZGVmaW5lZFxuICAgIGNvbnN0IHNoYXJlcyA9IEJTLnF1YXJ0ZXJseVJlcG9ydHNbMF0uY29tbW9uU3RvY2tTaGFyZXNPdXRzdGFuZGluZyAhPSBcIk5vbmVcIiA/IE51bWJlcihCUy5xdWFydGVybHlSZXBvcnRzWzBdLmNvbW1vblN0b2NrU2hhcmVzT3V0c3RhbmRpbmcpIDogdW5kZWZpbmVkXG4gICAgY29uc3QgW2dyb3d0aF9sb3csIGdyb3d0aF9taWQsIGdyb3d0aF9oaWdoXSA9IFtOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXZlbnVlX2lucHV0X2xvd1wiKS52YWx1ZSkvMTAwLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXZlbnVlX2lucHV0X21pZFwiKS52YWx1ZSkvMTAwLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXZlbnVlX2lucHV0X2hpZ2hcIikudmFsdWUpLzEwMF0gXG4gICAgY29uc3QgW3BfbWFyZ2luX2xvdywgcF9tYXJnaW5fbWlkLCBwX21hcmdpbl9oaWdoXSA9IFtOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQcm9maXRNYXJnaW5faW5wdXRfbG93XCIpLnZhbHVlKS8xMDAsIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlByb2ZpdE1hcmdpbl9pbnB1dF9taWRcIikudmFsdWUpLzEwMCwgTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUHJvZml0TWFyZ2luX2lucHV0X2hpZ2hcIikudmFsdWUpLzEwMF0gXG4gICAgY29uc3QgW2ZjZl9tYXJnaW5fbG93LCBmY2ZfbWFyZ2luX21pZCwgZmNmX21hcmdpbl9oaWdoXSA9IFtOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGQ0ZNYXJnaW5faW5wdXRfbG93XCIpLnZhbHVlKS8xMDAsIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZDRk1hcmdpbl9pbnB1dF9taWRcIikudmFsdWUpLzEwMCwgTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRkNGTWFyZ2luX2lucHV0X2hpZ2hcIikudmFsdWUpLzEwMF0gXG4gICAgY29uc3QgW3BlX2xvdywgcGVfbWlkLCBwZV9oaWdoXSA9IFtOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQRV9pbnB1dF9sb3dcIikudmFsdWUpLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQRV9pbnB1dF9taWRcIikudmFsdWUpLCBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQRV9pbnB1dF9oaWdoXCIpLnZhbHVlKV0gXG4gICAgY29uc3QgW3BmY2ZfbG93LCBwZmNmX21pZCwgcGZjZl9oaWdoXSA9IFtOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQRkNGX2lucHV0X2xvd1wiKS52YWx1ZSksIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBGQ0ZfaW5wdXRfbWlkXCIpLnZhbHVlKSwgTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUEZDRl9pbnB1dF9oaWdoXCIpLnZhbHVlKV0gXG4gICAgY29uc3QgW2Rpc2NvdW50X2xvdywgZGlzY291bnRfbWlkLCBkaXNjb3VudF9oaWdoXSA9IFtOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbm51YWxSZXR1cm5faW5wdXRfbG93XCIpLnZhbHVlKS8xMDAsIE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFubnVhbFJldHVybl9pbnB1dF9taWRcIikudmFsdWUpLzEwMCwgTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQW5udWFsUmV0dXJuX2lucHV0X2hpZ2hcIikudmFsdWUpLzEwMF0gXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgJ2Vhcm5pbmdzVmFscyc6IFtnZXREaXNjb3VudGVkVmFsKGxhc3RfcmV2ZW51ZSwgc2hhcmVzLCBncm93dGhfbG93LCBwX21hcmdpbl9sb3csIHBlX2xvdywgZGlzY291bnRfbG93KSwgZ2V0RGlzY291bnRlZFZhbChsYXN0X3JldmVudWUsIHNoYXJlcywgZ3Jvd3RoX21pZCwgcF9tYXJnaW5fbWlkLCBwZV9taWQsIGRpc2NvdW50X21pZCksIGdldERpc2NvdW50ZWRWYWwobGFzdF9yZXZlbnVlLCBzaGFyZXMsIGdyb3d0aF9oaWdoLCBwX21hcmdpbl9oaWdoLCBwZV9oaWdoLCBkaXNjb3VudF9oaWdoKV0sXG4gICAgICAgICdmY2ZWYWxzJzogW2dldERpc2NvdW50ZWRWYWwobGFzdF9yZXZlbnVlLCBzaGFyZXMsIGdyb3d0aF9sb3csIGZjZl9tYXJnaW5fbG93LCBwZmNmX2xvdywgZGlzY291bnRfbG93KSwgZ2V0RGlzY291bnRlZFZhbChsYXN0X3JldmVudWUsIHNoYXJlcywgZ3Jvd3RoX21pZCwgZmNmX21hcmdpbl9taWQsIHBmY2ZfbWlkLCBkaXNjb3VudF9taWQpLCBnZXREaXNjb3VudGVkVmFsKGxhc3RfcmV2ZW51ZSwgc2hhcmVzLCBncm93dGhfaGlnaCwgZmNmX21hcmdpbl9oaWdoLCBwZmNmX2hpZ2gsIGRpc2NvdW50X2hpZ2gpXSxcbiAgICB9XG59XG5cbmNvbnN0IGdldERpc2NvdW50ZWRWYWwgPSAocmV2ZW51ZSwgc2hhcmVzLCBncm93dGgsIG1hcmdpbiwgbXVsdGlwbGUsIGRpc2NvdW50KSA9PiB7XG4gICAgbGV0IHJldiA9IHJldmVudWVcbiAgICBsZXQgY3VtdWxhdGl2ZV92YWwgPSAwXG4gICAgZm9yKHZhciB0aW1lID0gMTsgdGltZSA8PSAxMTsgdGltZSsrKXtcbiAgICAgICAgcmV2ICo9ICgxK2dyb3d0aClcbiAgICAgICAgbGV0IHBlcl9zaGFyZSA9IHJldiptYXJnaW4vc2hhcmVzXG4gICAgICAgIGlmICh0aW1lID09IDExKSBwZXJfc2hhcmUgKj0gbXVsdGlwbGVcbiAgICAgICAgY3VtdWxhdGl2ZV92YWwgKz0gcGVyX3NoYXJlLygxK2Rpc2NvdW50KSoqdGltZVxuICAgIH1cbiAgICByZXR1cm4gY3VtdWxhdGl2ZV92YWwudG9GaXhlZCgyKVxufVxuXG5jb25zdCBnZXRRdWFydGVybHlSZXZlbnVlID0gKElTLCBxdWFydGVyKSA9PiB7XG4gICAgcmV0dXJuIElTLnF1YXJ0ZXJseVJlcG9ydHNbcXVhcnRlcl0udG90YWxSZXZlbnVlICE9IFwiTm9uZVwiID8gTnVtYmVyKElTLnF1YXJ0ZXJseVJlcG9ydHNbcXVhcnRlcl0udG90YWxSZXZlbnVlKSA6IHVuZGVmaW5lZFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFuYWx5emVSZXN1bHQiXSwibmFtZXMiOlsicmVzdWx0U3R5bGVzIiwiZ2V0QXZlcmFnZSIsImVhcm5pbmdWYWxzIiwiZmNmVmFscyIsIkFuYWx5emVSZXN1bHQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsImdldEFuYWx5emVkUmVzdWx0cyIsIklTIiwiQlMiLCJudW1iZXJfb2ZfcXVhcnRlcnMiLCJxdWFydGVybHlSZXBvcnRzIiwibGVuZ3RoIiwibGFzdF9yZXZlbnVlIiwiZ2V0UXVhcnRlcmx5UmV2ZW51ZSIsInVuZGVmaW5lZCIsInNoYXJlcyIsImNvbW1vblN0b2NrU2hhcmVzT3V0c3RhbmRpbmciLCJOdW1iZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJncm93dGhfbG93IiwiZ3Jvd3RoX21pZCIsImdyb3d0aF9oaWdoIiwicF9tYXJnaW5fbG93IiwicF9tYXJnaW5fbWlkIiwicF9tYXJnaW5faGlnaCIsImZjZl9tYXJnaW5fbG93IiwiZmNmX21hcmdpbl9taWQiLCJmY2ZfbWFyZ2luX2hpZ2giLCJwZV9sb3ciLCJwZV9taWQiLCJwZV9oaWdoIiwicGZjZl9sb3ciLCJwZmNmX21pZCIsInBmY2ZfaGlnaCIsImRpc2NvdW50X2xvdyIsImRpc2NvdW50X21pZCIsImRpc2NvdW50X2hpZ2giLCJnZXREaXNjb3VudGVkVmFsIiwicmV2ZW51ZSIsImdyb3d0aCIsIm1hcmdpbiIsIm11bHRpcGxlIiwiZGlzY291bnQiLCJyZXYiLCJjdW11bGF0aXZlX3ZhbCIsInRpbWUiLCJwZXJfc2hhcmUiLCJ0b0ZpeGVkIiwicXVhcnRlciIsInRvdGFsUmV2ZW51ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AnalyzeResult.js\n");

/***/ })

});