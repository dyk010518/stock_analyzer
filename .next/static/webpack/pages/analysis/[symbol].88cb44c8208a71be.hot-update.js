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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\nvar _this = undefined;\n\n\nvar StockTitle = function(param) {\n    var reports = param.reports;\n    var symbol = reports.IS.symbol;\n    var stockInfo = getStockInfo(symbol);\n    // const FCFRatio = getFCFRatio(reports.CF, reports.BS, reports.DA)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: stockInfo\n        }, void 0, false, {\n            fileName: \"/Users/dyk010518/Desktop/stock_analyzer/components/StockTitle.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_c = StockTitle;\nvar getStockInfo = function() {\n    var _ref = _asyncToGenerator(_Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(symbol) {\n        var res1, stock_info, res2, price_info, CP, DF, PDF;\n        return _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://www.alphavantage.co/query?function=OVERVIEW&symbol=\".concat(symbol, \"&apikey=\").concat(process.env.ALPHA_API_KEY));\n                case 2:\n                    res1 = _ctx.sent;\n                    _ctx.next = 5;\n                    return res1.json();\n                case 5:\n                    stock_info = _ctx.sent;\n                    _ctx.next = 8;\n                    return fetch(\"https://finnhub.io/api/v1/quote?symbol=\".concat(symbol, \"&token=\").concat(process.env.FINNHUB_TOKEN));\n                case 8:\n                    res2 = _ctx.sent;\n                    _ctx.next = 11;\n                    return res2.json();\n                case 11:\n                    price_info = _ctx.sent;\n                    CP = Number(price_info[\"c\"]).toFixed(2);\n                    DF = Number(price_info[\"d\"]).toFixed(2);\n                    PDF = Number(price_info[\"p\"]).toFixed(2);\n                    console.log(_typeof(stock_info[\"Name\"]));\n                    return _ctx.abrupt(\"return\", stock_info[\"Name\"]);\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    // return {\n    //     name: stock_info[\"Name\"],\n    //     exchange: stock_info[\"Exchange\"],\n    //     current_price: CP,\n    //     difference: DF,\n    //     difference_percent: PDF,\n    // }\n    }));\n    return function getStockInfo(symbol) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockTitle);\nvar _c;\n$RefreshReg$(_c, \"StockTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b2NrVGl0bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RDtBQUU3RCxJQUFNQyxVQUFVLEdBQUcsZ0JBQWU7UUFBYkMsT0FBTyxTQUFQQSxPQUFPO0lBQ3hCLElBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxFQUFFLENBQUNELE1BQU07SUFDaEMsSUFBTUUsU0FBUyxHQUFHQyxZQUFZLENBQUNILE1BQU0sQ0FBQztJQUN0QyxtRUFBbUU7SUFFbkUscUJBQ0k7a0JBQ0ksNEVBQUNJLEtBQUc7c0JBQUVGLFNBQVM7Ozs7O2lCQUFPO3FCQU12QixDQUNOO0NBQ0o7QUFmS0osS0FBQUEsVUFBVTtBQWlCaEIsSUFBTUssWUFBWTtlQUFHLHNMQUFPSCxNQUFNLEVBQUs7WUFDN0JLLElBQUksRUFDSkMsVUFBVSxFQUVWQyxJQUFJLEVBQ0pDLFVBQVUsRUFFVkMsRUFBRSxFQUNGQyxFQUFFLEVBQ0ZDLEdBQUc7Ozs7OzJCQVJVQyxLQUFLLENBQUMsNkRBQTRELENBQW1CQyxNQUF5QixDQUExQ2IsTUFBTSxFQUFDLFVBQVEsQ0FBNEIsUUFBMUJhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLENBQUUsQ0FBQzs7b0JBQTlIVixJQUFJLFlBQTBIOzsyQkFDM0dBLElBQUksQ0FBQ1csSUFBSSxFQUFFOztvQkFBOUJWLFVBQVUsWUFBb0I7OzJCQUVqQk0sS0FBSyxDQUFDLHlDQUF3QyxDQUFrQkMsTUFBeUIsQ0FBekNiLE1BQU0sRUFBQyxTQUFPLENBQTRCLFFBQTFCYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csYUFBYSxDQUFFLENBQUM7O29CQUF6R1YsSUFBSSxZQUFxRzs7MkJBQ3RGQSxJQUFJLENBQUNTLElBQUksRUFBRTs7b0JBQTlCUixVQUFVLFlBQW9CO29CQUU5QkMsRUFBRSxHQUFHUyxNQUFNLENBQUNWLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDVyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN2Q1QsRUFBRSxHQUFJUSxNQUFNLENBQUNWLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDVyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN4Q1IsR0FBRyxHQUFJTyxNQUFNLENBQUNWLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDVyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUUvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBeUIsQ0FBbEJmLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBQztpREFFL0JBLFVBQVUsQ0FBQyxNQUFNLENBQUM7Ozs7OztJQUN6QixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixJQUFJO0tBQ1A7b0JBckJLSCxZQUFZLENBQVVILE1BQU07OztHQXFCakM7QUFHRCwrREFBZUYsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0b2NrVGl0bGUuanM/YzIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvY2tUaXRsZVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvU3RvY2tUaXRsZS5tb2R1bGUuY3NzXCJcblxuY29uc3QgU3RvY2tUaXRsZSA9ICh7cmVwb3J0c30pID0+IHtcbiAgICBjb25zdCBzeW1ib2wgPSByZXBvcnRzLklTLnN5bWJvbFxuICAgIGNvbnN0IHN0b2NrSW5mbyA9IGdldFN0b2NrSW5mbyhzeW1ib2wpXG4gICAgLy8gY29uc3QgRkNGUmF0aW8gPSBnZXRGQ0ZSYXRpbyhyZXBvcnRzLkNGLCByZXBvcnRzLkJTLCByZXBvcnRzLkRBKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+e3N0b2NrSW5mb308L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2PntzdG9ja0luZm8ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3N0b2NrSW5mby5leGNoYW5nZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3N0b2NrSW5mby5jdXJyZW50X3ByaWNlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57c3RvY2tJbmZvLmRpZmZlcmVuY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PntzdG9ja0luZm8uZGlmZmVyZW5jZV9wZXJjZW50fTwvZGl2PiAqL31cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBnZXRTdG9ja0luZm8gPSBhc3luYyAoc3ltYm9sKSA9PiB7XG4gICAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249T1ZFUlZJRVcmc3ltYm9sPSR7c3ltYm9sfSZhcGlrZXk9JHtwcm9jZXNzLmVudi5BTFBIQV9BUElfS0VZfWApXG4gICAgY29uc3Qgc3RvY2tfaW5mbyA9IGF3YWl0IHJlczEuanNvbigpXG5cbiAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZmlubmh1Yi5pby9hcGkvdjEvcXVvdGU/c3ltYm9sPSR7c3ltYm9sfSZ0b2tlbj0ke3Byb2Nlc3MuZW52LkZJTk5IVUJfVE9LRU59YClcbiAgICBjb25zdCBwcmljZV9pbmZvID0gYXdhaXQgcmVzMi5qc29uKClcblxuICAgIGNvbnN0IENQID0gTnVtYmVyKHByaWNlX2luZm9bJ2MnXSkudG9GaXhlZCgyKVxuICAgIGNvbnN0IERGID0gIE51bWJlcihwcmljZV9pbmZvWydkJ10pLnRvRml4ZWQoMilcbiAgICBjb25zdCBQREYgPSAgTnVtYmVyKHByaWNlX2luZm9bJ3AnXSkudG9GaXhlZCgyKVxuXG4gICAgY29uc29sZS5sb2codHlwZW9mIHN0b2NrX2luZm9bXCJOYW1lXCJdKVxuXG4gICAgcmV0dXJuIHN0b2NrX2luZm9bXCJOYW1lXCJdXG4gICAgLy8gcmV0dXJuIHtcbiAgICAvLyAgICAgbmFtZTogc3RvY2tfaW5mb1tcIk5hbWVcIl0sXG4gICAgLy8gICAgIGV4Y2hhbmdlOiBzdG9ja19pbmZvW1wiRXhjaGFuZ2VcIl0sXG4gICAgLy8gICAgIGN1cnJlbnRfcHJpY2U6IENQLFxuICAgIC8vICAgICBkaWZmZXJlbmNlOiBERixcbiAgICAvLyAgICAgZGlmZmVyZW5jZV9wZXJjZW50OiBQREYsXG4gICAgLy8gfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFN0b2NrVGl0bGUiXSwibmFtZXMiOlsic3RvY2tUaXRsZVN0eWxlIiwiU3RvY2tUaXRsZSIsInJlcG9ydHMiLCJzeW1ib2wiLCJJUyIsInN0b2NrSW5mbyIsImdldFN0b2NrSW5mbyIsImRpdiIsInJlczEiLCJzdG9ja19pbmZvIiwicmVzMiIsInByaWNlX2luZm8iLCJDUCIsIkRGIiwiUERGIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQUxQSEFfQVBJX0tFWSIsImpzb24iLCJGSU5OSFVCX1RPS0VOIiwiTnVtYmVyIiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StockTitle.js\n");

/***/ })

});