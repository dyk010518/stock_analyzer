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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _components_StockAnalyzer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/StockAnalyzer */ \"./components/StockAnalyzer.js\");\n/* harmony import */ var _components_AnalyzeResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/AnalyzeResult */ \"./components/AnalyzeResult.js\");\n/* harmony import */ var _components_StockTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/StockTitle */ \"./components/StockTitle.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar article = function(param) {\n    var income_statement = param.income_statement, balance_sheet = param.balance_sheet, cash_flow = param.cash_flow, stock_info = param.stock_info, price_info = param.price_info;\n    _s();\n    var ref = _slicedToArray(useState(false), 2), analyzed = ref[0], setAnalyzed = ref[1];\n    var reports = {\n        IS: income_statement,\n        BS: balance_sheet,\n        CF: cash_flow,\n        SI: stock_info,\n        PI: price_info\n    };\n    var found = income_statement.symbol ? true : false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                class: \"info-container\",\n                children: [\n                    found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_StockTitle__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        reports: reports\n                    }, void 0, false, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 23\n                    }, _this),\n                    found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_AnalyzeResult__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        pressed: false,\n                        reports: reports,\n                        setAnalyzed: setAnalyzed\n                    }, void 0, false, {\n                        fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 23\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this),\n            found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_StockAnalyzer__WEBPACK_IMPORTED_MODULE_6__.StockAnalyzer, {\n                reports: reports\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 30,\n                columnNumber: 19\n            }, _this),\n            !found && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"We couldn't find the symbol you typed. Please try again with a different symbol\"\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 31,\n                columnNumber: 20\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this),\n            analyzed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \"Earning Multiples Valuation (low & mid & high): \",\n                    earningVals[0],\n                    \" and \",\n                    earningVals[1],\n                    \" and \",\n                    earningVals[2]\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            analyzed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \"DCF Valuation (low & mid & high): \",\n                    fcfVals[0],\n                    \" and \",\n                    fcfVals[1],\n                    \" and \",\n                    fcfVals[2]\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: \"Go Back Home\"\n            }, void 0, false, {\n                fileName: \"/Users/dyk010518/Desktop/stock_analyzer/pages/analysis/[symbol]/index.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(article, \"2CIweuU6xbpfEF1M4RN3EQIzjsc=\");\nvar getCompanyStats = function() {\n    var _ref = _asyncToGenerator(_Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(symbol) {\n        var res, obj;\n        return _Users_dyk010518_Desktop_stock_analyzer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://www.alphavantage.co/query?function=OVERVIEW&symbol=\".concat(symbol, \"}&apikey=\").concat(process.env.ALPHA_API_KEY));\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    obj = _ctx.sent;\n                    console.log(obj);\n                    return _ctx.abrupt(\"return\", 1);\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getCompanyStats(symbol) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (article);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbmFseXNpcy9bc3ltYm9sXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1Y7QUFDVztBQUNJO0FBQ3NCO0FBQ0o7QUFDTjs7QUFHdkQsSUFBTU8sT0FBTyxHQUFHLGdCQUEyRTtRQUF6RUMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0IsRUFBRUMsYUFBYSxTQUFiQSxhQUFhLEVBQUVDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsVUFBVSxTQUFWQSxVQUFVOztJQUNoRixJQUFnQ0MsR0FBZSxrQkFBZkEsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUF4Q0MsUUFBUSxHQUFpQkQsR0FBZSxHQUFoQyxFQUFFRSxXQUFXLEdBQUlGLEdBQWUsR0FBbkI7SUFFNUIsSUFBTUcsT0FBTyxHQUFHO1FBQ1pDLEVBQUUsRUFBRVQsZ0JBQWdCO1FBQ3BCVSxFQUFFLEVBQUVULGFBQWE7UUFDakJVLEVBQUUsRUFBRVQsU0FBUztRQUNiVSxFQUFFLEVBQUVULFVBQVU7UUFDZFUsRUFBRSxFQUFFVCxVQUFVO0tBQ2pCO0lBRUQsSUFBTVUsS0FBSyxHQUFHZCxnQkFBZ0IsQ0FBQ2UsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLO0lBRXBELHFCQUFPOzswQkFDSCw4REFBQ3BCLHdEQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDcUIsS0FBRztnQkFBQ0MsS0FBSyxFQUFDLGdCQUFnQjs7b0JBQ3RCSCxLQUFLLGtCQUFJLDhEQUFDaEIsOERBQVU7d0JBQUNVLE9BQU8sRUFBRUEsT0FBTzs7Ozs7NkJBQUc7b0JBQ3hDTSxLQUFLLGtCQUFJLDhEQUFDakIsaUVBQWE7d0JBQUNxQixPQUFPLEVBQUUsS0FBSzt3QkFBRVYsT0FBTyxFQUFFQSxPQUFPO3dCQUFFRCxXQUFXLEVBQUVBLFdBQVc7Ozs7OzZCQUFHOzs7Ozs7cUJBQ3BGOzBCQUNOLDhEQUFDWSxJQUFFOzs7O3FCQUFHO1lBQ0xMLEtBQUssa0JBQUksOERBQUNsQixvRUFBYTtnQkFBQ1ksT0FBTyxFQUFFQSxPQUFPOzs7OztxQkFBRztZQUMzQyxDQUFDTSxLQUFLLGtCQUFJLDhEQUFDTSxJQUFFOzBCQUFDLGlGQUErRTs7Ozs7cUJBQUs7MEJBQ25HLDhEQUFDRCxJQUFFOzs7O3FCQUFHO1lBQ0xiLFFBQVEsa0JBQ0wsOERBQUNlLEdBQUM7O29CQUFDLGtEQUFnRDtvQkFBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFBQyxPQUFLO29CQUFDQSxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUFDLE9BQUs7b0JBQUNBLFdBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7OztxQkFBSztZQUdwSGhCLFFBQVEsa0JBQ0wsOERBQUNlLEdBQUM7O29CQUFDLG9DQUFrQztvQkFBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFBQyxPQUFLO29CQUFDQSxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUFDLE9BQUs7b0JBQUNBLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7OztxQkFBSzswQkFFM0YsOERBQUM5QixrREFBSTtnQkFBQytCLElBQUksRUFBQyxHQUFHOzBCQUFDLGNBQVk7Ozs7O3FCQUFPOztvQkFFbkM7Q0FDTjtHQWpDS3pCLE9BQU87QUE4RGIsSUFBTTBCLGVBQWU7ZUFBRyxzTEFBT1YsTUFBTSxFQUFLO1lBQ2hDVyxHQUFHLEVBQ0hDLEdBQUc7Ozs7OzJCQURTQyxLQUFLLENBQUMsNkRBQTRELENBQW9CQyxNQUF5QixDQUEzQ2QsTUFBTSxFQUFDLFdBQVMsQ0FBNEIsUUFBMUJjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLENBQUUsQ0FBQzs7b0JBQTlITCxHQUFHLFlBQTJIOzsyQkFDbEhBLEdBQUcsQ0FBQ00sSUFBSSxFQUFFOztvQkFBdEJMLEdBQUcsWUFBbUI7b0JBQzVCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsR0FBRyxDQUFDO2lEQUNULENBQUM7Ozs7OztLQUNYO29CQUxLRixlQUFlLENBQVVWLE1BQU07OztHQUtwQzs7QUFFRCwrREFBZWhCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5hbHlzaXMvW3N5bWJvbF0vaW5kZXguanM/NDc3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NlcnZlcn0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9NZXRhJ1xuaW1wb3J0IHsgU3RvY2tBbmFseXplciB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1N0b2NrQW5hbHl6ZXJcIlxuaW1wb3J0IEFuYWx5emVSZXN1bHQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BbmFseXplUmVzdWx0J1xuaW1wb3J0IFN0b2NrVGl0bGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU3RvY2tUaXRsZVwiXG5cblxuY29uc3QgYXJ0aWNsZSA9ICh7aW5jb21lX3N0YXRlbWVudCwgYmFsYW5jZV9zaGVldCwgY2FzaF9mbG93LCBzdG9ja19pbmZvLCBwcmljZV9pbmZvLH0pID0+IHtcbiAgICBjb25zdCBbYW5hbHl6ZWQsIHNldEFuYWx5emVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHJlcG9ydHMgPSB7XG4gICAgICAgIElTOiBpbmNvbWVfc3RhdGVtZW50LFxuICAgICAgICBCUzogYmFsYW5jZV9zaGVldCxcbiAgICAgICAgQ0Y6IGNhc2hfZmxvdyxcbiAgICAgICAgU0k6IHN0b2NrX2luZm8sXG4gICAgICAgIFBJOiBwcmljZV9pbmZvLFxuICAgIH1cblxuICAgIGNvbnN0IGZvdW5kID0gaW5jb21lX3N0YXRlbWVudC5zeW1ib2wgPyB0cnVlIDogZmFsc2UgIFxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2ZvdW5kICYmIDxTdG9ja1RpdGxlIHJlcG9ydHM9e3JlcG9ydHN9Lz59XG4gICAgICAgICAgICB7Zm91bmQgJiYgPEFuYWx5emVSZXN1bHQgcHJlc3NlZD17ZmFsc2V9IHJlcG9ydHM9e3JlcG9ydHN9IHNldEFuYWx5emVkPXtzZXRBbmFseXplZH0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7Zm91bmQgJiYgPFN0b2NrQW5hbHl6ZXIgcmVwb3J0cz17cmVwb3J0c30vPn1cbiAgICAgICAgeyFmb3VuZCAmJiA8aDI+V2UgY291bGRuJ3QgZmluZCB0aGUgc3ltYm9sIHlvdSB0eXBlZC4gUGxlYXNlIHRyeSBhZ2FpbiB3aXRoIGEgZGlmZmVyZW50IHN5bWJvbDwvaDI+fVxuICAgICAgICA8YnIgLz5cbiAgICAgICAge2FuYWx5emVkICYmIChcbiAgICAgICAgICAgIDxwPkVhcm5pbmcgTXVsdGlwbGVzIFZhbHVhdGlvbiAobG93ICYgbWlkICYgaGlnaCk6IHtlYXJuaW5nVmFsc1swXX0gYW5kIHtlYXJuaW5nVmFsc1sxXX0gYW5kIHtlYXJuaW5nVmFsc1syXX08L3A+XG4gICAgICAgICl9XG5cbiAgICAgICAge2FuYWx5emVkICYmIChcbiAgICAgICAgICAgIDxwPkRDRiBWYWx1YXRpb24gKGxvdyAmIG1pZCAmIGhpZ2gpOiB7ZmNmVmFsc1swXX0gYW5kIHtmY2ZWYWxzWzFdfSBhbmQge2ZjZlZhbHNbMl19PC9wPlxuICAgICAgICApfSBcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+R28gQmFjayBIb21lPC9MaW5rPlxuICAgICAgICBcbiAgICA8Lz5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249SU5DT01FX1NUQVRFTUVOVCZzeW1ib2w9JHtjb250ZXh0LnBhcmFtcy5zeW1ib2x9JmFwaWtleT0ke3Byb2Nlc3MuZW52LkFMUEhBX0FQSV9LRVl9YClcbiAgICBjb25zdCBpbmNvbWVfc3RhdGVtZW50ID0gYXdhaXQgcmVzMS5qc29uKClcblxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPUJBTEFOQ0VfU0hFRVQmc3ltYm9sPSR7Y29udGV4dC5wYXJhbXMuc3ltYm9sfSZhcGlrZXk9JHtwcm9jZXNzLmVudi5BTFBIQV9BUElfS0VZfWApXG4gICAgY29uc3QgYmFsYW5jZV9zaGVldCA9IGF3YWl0IHJlczIuanNvbigpXG5cbiAgICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1DQVNIX0ZMT1cmc3ltYm9sPSR7Y29udGV4dC5wYXJhbXMuc3ltYm9sfSZhcGlrZXk9JHtwcm9jZXNzLmVudi5BTFBIQV9BUElfS0VZfWApXG4gICAgY29uc3QgY2FzaF9mbG93ID0gYXdhaXQgcmVzMy5qc29uKClcblxuICAgIGNvbnN0IHJlczUgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPU9WRVJWSUVXJnN5bWJvbD0ke2NvbnRleHQucGFyYW1zLnN5bWJvbH0mYXBpa2V5PSR7cHJvY2Vzcy5lbnYuQUxQSEFfQVBJX0tFWX1gKVxuICAgIGNvbnN0IHN0b2NrX2luZm8gPSBhd2FpdCByZXM1Lmpzb24oKVxuXG4gICAgY29uc3QgcmVzNiA9IGF3YWl0IGZldGNoKGBodHRwczovL2Zpbm5odWIuaW8vYXBpL3YxL3F1b3RlP3N5bWJvbD0ke2NvbnRleHQucGFyYW1zLnN5bWJvbH0mdG9rZW49JHtwcm9jZXNzLmVudi5GSU5OSFVCX1RPS0VOfWApXG4gICAgY29uc3QgcHJpY2VfaW5mbyA9IGF3YWl0IHJlczYuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5jb21lX3N0YXRlbWVudCwgXG4gICAgICAgICAgICBiYWxhbmNlX3NoZWV0LFxuICAgICAgICAgICAgY2FzaF9mbG93LFxuICAgICAgICAgICAgc3RvY2tfaW5mbyxcbiAgICAgICAgICAgIHByaWNlX2luZm8sXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGdldENvbXBhbnlTdGF0cyA9IGFzeW5jIChzeW1ib2wpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPU9WRVJWSUVXJnN5bWJvbD0ke3N5bWJvbH19JmFwaWtleT0ke3Byb2Nlc3MuZW52LkFMUEhBX0FQSV9LRVl9YClcbiAgICBjb25zdCBvYmogPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc29sZS5sb2cob2JqKVxuICAgIHJldHVybiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGUiXSwibmFtZXMiOlsic2VydmVyIiwiTGluayIsInVzZVJvdXRlciIsIk1ldGEiLCJTdG9ja0FuYWx5emVyIiwiQW5hbHl6ZVJlc3VsdCIsIlN0b2NrVGl0bGUiLCJhcnRpY2xlIiwiaW5jb21lX3N0YXRlbWVudCIsImJhbGFuY2Vfc2hlZXQiLCJjYXNoX2Zsb3ciLCJzdG9ja19pbmZvIiwicHJpY2VfaW5mbyIsInVzZVN0YXRlIiwiYW5hbHl6ZWQiLCJzZXRBbmFseXplZCIsInJlcG9ydHMiLCJJUyIsIkJTIiwiQ0YiLCJTSSIsIlBJIiwiZm91bmQiLCJzeW1ib2wiLCJkaXYiLCJjbGFzcyIsInByZXNzZWQiLCJiciIsImgyIiwicCIsImVhcm5pbmdWYWxzIiwiZmNmVmFscyIsImhyZWYiLCJnZXRDb21wYW55U3RhdHMiLCJyZXMiLCJvYmoiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJBTFBIQV9BUElfS0VZIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/analysis/[symbol]/index.js\n");

/***/ })

});