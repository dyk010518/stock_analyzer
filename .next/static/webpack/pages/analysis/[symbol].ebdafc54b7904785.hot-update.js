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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar StockTitle = function(param) {\n    var reports = param.reports;\n    var symbol = reports.IS.symbol;\n    // const FCFRatio = getFCFRatio(reports.CF, reports.BS, reports.DA)\n    // return (\n    //     <thead>\n    //         <tr className={stockStatsStyles.row}>\n    //             <th className={stockStatsStyles.col}>\n    //                 <p1>P/FCF Ratio</p1>\n    //             </th>\n    //             <th className={stockStatsStyles.col}>\n    //                 <p2>{FCFRatio}</p2>\n    //                 <p2>-</p2>\n    //                 <p2>-</p2>\n    //             </th>\n    //             <th className={stockStatsStyles.col}>\n    //                 <div><input type=\"number\" id=\"quantity\" name=\"quantity\" min=\"1\" max=\"5\" /></div>\n    //                 <div><input type=\"number\" id=\"quantity\" name=\"quantity\" min=\"1\" max=\"5\" /></div>\n    //                 <div><input type=\"number\" id=\"quantity\" name=\"quantity\" min=\"1\" max=\"5\" /></div>\n    //             </th>\n    //         </tr>\n    //     </thead>\n    // )\n    return symbol;\n};\n_c = StockTitle;\nvar getStockTitle = function() {\n    var _ref = _asyncToGenerator(_Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(IS) {\n        var res5, stock_info;\n        return _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://www.alphavantage.co/query?function=OVERVIEW&symbol=\".concat(context.params.symbol, \"&apikey=\").concat(process.env.ALPHA_API_KEY));\n                case 2:\n                    res5 = _ctx.sent;\n                    _ctx.next = 5;\n                    return res5.json();\n                case 5:\n                    stock_info = _ctx.sent;\n                    return _ctx.abrupt(\"return\", 2);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getStockTitle(IS) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getAnnualCF = function(CF) {\n    var start_quarter = Math.min(4, CF.quarterlyReports.length);\n    var cash_flow = 0;\n    for(var quarter = 0; quarter < start_quarter; quarter++){\n        var OpCF = CF.quarterlyReports[quarter].operatingCashflow != \"None\" ? Number(CF.quarterlyReports[quarter].operatingCashflow) : undefined;\n        var CapEx = CF.quarterlyReports[quarter].capitalExpenditures != \"None\" ? Number(CF.quarterlyReports[quarter].capitalExpenditures) : 0;\n        if (OpCF) cash_flow = cash_flow + (OpCF - CapEx);\n    }\n    return cash_flow;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockTitle);\nvar _c;\n$RefreshReg$(_c, \"StockTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b2NrVGl0bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFFN0QsSUFBTUMsVUFBVSxHQUFHLGdCQUFlO1FBQWJDLE9BQU8sU0FBUEEsT0FBTztJQUN4QixJQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsRUFBRSxDQUFDRCxNQUFNO0lBQ2hDLG1FQUFtRTtJQUVuRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdEQUFnRDtJQUNoRCxvREFBb0Q7SUFDcEQsdUNBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQixvREFBb0Q7SUFDcEQsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUNwRCxtR0FBbUc7SUFDbkcsbUdBQW1HO0lBQ25HLG1HQUFtRztJQUNuRyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixJQUFJO0lBQ0osT0FBT0EsTUFBTTtDQUNoQjtBQXhCS0YsS0FBQUEsVUFBVTtBQTBCaEIsSUFBTUksYUFBYTtlQUFHLHNMQUFPRCxFQUFFLEVBQUs7WUFDMUJFLElBQUksRUFDSkMsVUFBVTs7Ozs7MkJBREdDLEtBQUssQ0FBQyw2REFBNEQsQ0FBa0NDLE1BQXlCLENBQXpEQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ1IsTUFBTSxFQUFDLFVBQVEsQ0FBNEIsUUFBMUJNLE9BQU8sQ0FBQ0csR0FBRyxDQUFDQyxhQUFhLENBQUUsQ0FBQzs7b0JBQTdJUCxJQUFJLFlBQXlJOzsyQkFDMUhBLElBQUksQ0FBQ1EsSUFBSSxFQUFFOztvQkFBOUJQLFVBQVUsWUFBb0I7aURBQzdCLENBQUM7Ozs7OztLQUNYO29CQUpLRixhQUFhLENBQVVELEVBQUU7OztHQUk5QjtBQUdELElBQU1XLFdBQVcsR0FBRyxTQUFDQyxFQUFFLEVBQUs7SUFDeEIsSUFBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEVBQUVILEVBQUUsQ0FBQ0ksZ0JBQWdCLENBQUNDLE1BQU0sQ0FBQztJQUM3RCxJQUFJQyxTQUFTLEdBQUcsQ0FBQztJQUNqQixJQUFJLElBQUlDLE9BQU8sR0FBRyxDQUFDLEVBQUVBLE9BQU8sR0FBR04sYUFBYSxFQUFFTSxPQUFPLEVBQUcsQ0FBQztRQUNyRCxJQUFNQyxJQUFJLEdBQUdSLEVBQUUsQ0FBQ0ksZ0JBQWdCLENBQUNHLE9BQU8sQ0FBQyxDQUFDRSxpQkFBaUIsSUFBSSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ1YsRUFBRSxDQUFDSSxnQkFBZ0IsQ0FBQ0csT0FBTyxDQUFDLENBQUNFLGlCQUFpQixDQUFDLEdBQUdFLFNBQVM7UUFDMUksSUFBTUMsS0FBSyxHQUFHWixFQUFFLENBQUNJLGdCQUFnQixDQUFDRyxPQUFPLENBQUMsQ0FBQ00sbUJBQW1CLElBQUksTUFBTSxHQUFHSCxNQUFNLENBQUNWLEVBQUUsQ0FBQ0ksZ0JBQWdCLENBQUNHLE9BQU8sQ0FBQyxDQUFDTSxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7UUFDdkksSUFBR0wsSUFBSSxFQUFFRixTQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUFDRSxJQUFJLEdBQUNJLEtBQUssQ0FBQztLQUNoRDtJQUNELE9BQU9OLFNBQVM7Q0FDbkI7QUFFRCwrREFBZXJCLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9ja1RpdGxlLmpzP2MyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b2NrVGl0bGVTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL1N0b2NrVGl0bGUubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFN0b2NrVGl0bGUgPSAoe3JlcG9ydHN9KSA9PiB7XG4gICAgY29uc3Qgc3ltYm9sID0gcmVwb3J0cy5JUy5zeW1ib2xcbiAgICAvLyBjb25zdCBGQ0ZSYXRpbyA9IGdldEZDRlJhdGlvKHJlcG9ydHMuQ0YsIHJlcG9ydHMuQlMsIHJlcG9ydHMuREEpXG5cbiAgICAvLyByZXR1cm4gKFxuICAgIC8vICAgICA8dGhlYWQ+XG4gICAgLy8gICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdG9ja1N0YXRzU3R5bGVzLnJvd30+XG4gICAgLy8gICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3RvY2tTdGF0c1N0eWxlcy5jb2x9PlxuICAgIC8vICAgICAgICAgICAgICAgICA8cDE+UC9GQ0YgUmF0aW88L3AxPlxuICAgIC8vICAgICAgICAgICAgIDwvdGg+XG4gICAgLy8gICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3RvY2tTdGF0c1N0eWxlcy5jb2x9PlxuICAgIC8vICAgICAgICAgICAgICAgICA8cDI+e0ZDRlJhdGlvfTwvcDI+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxwMj4tPC9wMj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPHAyPi08L3AyPlxuICAgIC8vICAgICAgICAgICAgIDwvdGg+XG4gICAgLy8gICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3RvY2tTdGF0c1N0eWxlcy5jb2x9PlxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJxdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgLz48L2Rpdj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicXVhbnRpdHlcIiBuYW1lPVwicXVhbnRpdHlcIiBtaW49XCIxXCIgbWF4PVwiNVwiIC8+PC9kaXY+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInF1YW50aXR5XCIgbmFtZT1cInF1YW50aXR5XCIgbWluPVwiMVwiIG1heD1cIjVcIiAvPjwvZGl2PlxuICAgIC8vICAgICAgICAgICAgIDwvdGg+XG4gICAgLy8gICAgICAgICA8L3RyPlxuICAgIC8vICAgICA8L3RoZWFkPlxuICAgIC8vIClcbiAgICByZXR1cm4gc3ltYm9sXG59XG5cbmNvbnN0IGdldFN0b2NrVGl0bGUgPSBhc3luYyAoSVMpID0+IHtcbiAgICBjb25zdCByZXM1ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1PVkVSVklFVyZzeW1ib2w9JHtjb250ZXh0LnBhcmFtcy5zeW1ib2x9JmFwaWtleT0ke3Byb2Nlc3MuZW52LkFMUEhBX0FQSV9LRVl9YClcbiAgICBjb25zdCBzdG9ja19pbmZvID0gYXdhaXQgcmVzNS5qc29uKClcbiAgICByZXR1cm4gMlxufVxuXG5cbmNvbnN0IGdldEFubnVhbENGID0gKENGKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRfcXVhcnRlciA9IE1hdGgubWluKDQsIENGLnF1YXJ0ZXJseVJlcG9ydHMubGVuZ3RoKVxuICAgIGxldCBjYXNoX2Zsb3cgPSAwXG4gICAgZm9yKHZhciBxdWFydGVyID0gMDsgcXVhcnRlciA8IHN0YXJ0X3F1YXJ0ZXI7IHF1YXJ0ZXIgKyspe1xuICAgICAgICBjb25zdCBPcENGID0gQ0YucXVhcnRlcmx5UmVwb3J0c1txdWFydGVyXS5vcGVyYXRpbmdDYXNoZmxvdyAhPSBcIk5vbmVcIiA/IE51bWJlcihDRi5xdWFydGVybHlSZXBvcnRzW3F1YXJ0ZXJdLm9wZXJhdGluZ0Nhc2hmbG93KSA6IHVuZGVmaW5lZFxuICAgICAgICBjb25zdCBDYXBFeCA9IENGLnF1YXJ0ZXJseVJlcG9ydHNbcXVhcnRlcl0uY2FwaXRhbEV4cGVuZGl0dXJlcyAhPSBcIk5vbmVcIiA/IE51bWJlcihDRi5xdWFydGVybHlSZXBvcnRzW3F1YXJ0ZXJdLmNhcGl0YWxFeHBlbmRpdHVyZXMpIDogMFxuICAgICAgICBpZihPcENGKSBjYXNoX2Zsb3cgPSBjYXNoX2Zsb3cgKyAoT3BDRi1DYXBFeClcbiAgICB9XG4gICAgcmV0dXJuIGNhc2hfZmxvd1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9ja1RpdGxlIl0sIm5hbWVzIjpbInN0b2NrVGl0bGVTdHlsZSIsIlN0b2NrVGl0bGUiLCJyZXBvcnRzIiwic3ltYm9sIiwiSVMiLCJnZXRTdG9ja1RpdGxlIiwicmVzNSIsInN0b2NrX2luZm8iLCJmZXRjaCIsInByb2Nlc3MiLCJjb250ZXh0IiwicGFyYW1zIiwiZW52IiwiQUxQSEFfQVBJX0tFWSIsImpzb24iLCJnZXRBbm51YWxDRiIsIkNGIiwic3RhcnRfcXVhcnRlciIsIk1hdGgiLCJtaW4iLCJxdWFydGVybHlSZXBvcnRzIiwibGVuZ3RoIiwiY2FzaF9mbG93IiwicXVhcnRlciIsIk9wQ0YiLCJvcGVyYXRpbmdDYXNoZmxvdyIsIk51bWJlciIsInVuZGVmaW5lZCIsIkNhcEV4IiwiY2FwaXRhbEV4cGVuZGl0dXJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StockTitle.js\n");

/***/ })

});