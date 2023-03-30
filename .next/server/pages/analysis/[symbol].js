(() => {
var exports = {};
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 4195:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "AnalyzeReturn_table__szRqm",
	"top_row": "AnalyzeReturn_top_row__S3Ky8",
	"top_col": "AnalyzeReturn_top_col__HmleD",
	"row": "AnalyzeReturn_row__74pwV",
	"col": "AnalyzeReturn_col__IPcvZ"
};


/***/ }),

/***/ 7416:
/***/ ((module) => {

// Exports
module.exports = {
	"positive": "StockTitle_positive__SoQg_",
	"negative": "StockTitle_negative__S6hHo",
	"main_container": "StockTitle_main_container__mkfSN",
	"left_container": "StockTitle_left_container__0FSUA",
	"right_container": "StockTitle_right_container__i11Lk"
};


/***/ }),

/***/ 1932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _symbol_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Meta.js + 1 modules
var Meta = __webpack_require__(9759);
// EXTERNAL MODULE: ./components/StockAnalyzer.js + 6 modules
var StockAnalyzer = __webpack_require__(4506);
// EXTERNAL MODULE: ./components/AnalyzeButton.js
var AnalyzeButton = __webpack_require__(6704);
// EXTERNAL MODULE: ./styles/StockTitle.module.css
var StockTitle_module = __webpack_require__(7416);
var StockTitle_module_default = /*#__PURE__*/__webpack_require__.n(StockTitle_module);
;// CONCATENATED MODULE: ./components/StockTitle.js


const StockTitle = ({ reports  })=>{
    const symbol = reports.SI["Symbol"];
    const name = reports.SI["Name"];
    const exchange = reports.SI["Exchange"];
    const currency = reports.SI["Currency"];
    const current_price = Number(reports.PI["c"]).toFixed(2);
    const difference = Number(reports.PI["d"]).toFixed(2);
    const difference_percent = Number(reports.PI["dp"]).toFixed(2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (StockTitle_module_default()).main_container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (StockTitle_module_default()).left_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        children: [
                            name,
                            " (",
                            symbol,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            exchange,
                            " | Currency in ",
                            currency
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (StockTitle_module_default()).right_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: current_price
                    }),
                    difference >= 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (StockTitle_module_default()).positive,
                        children: [
                            difference,
                            " (",
                            difference_percent,
                            "%)"
                        ]
                    }),
                    difference < 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (StockTitle_module_default()).negative,
                        children: [
                            difference,
                            " (",
                            difference_percent,
                            "%)"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_StockTitle = (StockTitle);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/Table"
var Table_ = __webpack_require__(1553);
// EXTERNAL MODULE: ./styles/AnalyzeReturn.module.css
var AnalyzeReturn_module = __webpack_require__(4195);
var AnalyzeReturn_module_default = /*#__PURE__*/__webpack_require__.n(AnalyzeReturn_module);
;// CONCATENATED MODULE: ./components/AnalyzeReturn.js



const AnalyzeReturn = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        className: (AnalyzeReturn_module_default()).table,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    className: (AnalyzeReturn_module_default()).top_row,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            className: (AnalyzeReturn_module_default()).top_col
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            className: (AnalyzeReturn_module_default()).top_col,
                            children: "Low"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            className: (AnalyzeReturn_module_default()).top_col,
                            children: "Mid"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            className: (AnalyzeReturn_module_default()).top_col,
                            children: "High"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        className: (AnalyzeReturn_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p1", {
                                    children: "Multiples Valuation"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                    children: props.earningVals[0]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                    children: props.earningVals[1]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                    children: props.earningVals[2]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        className: (AnalyzeReturn_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p1", {
                                    children: "DCF Valuation"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                    children: props.fcfVals[0]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                    children: props.fcfVals[1]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: (AnalyzeReturn_module_default()).col,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                    children: props.fcfVals[2]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AnalyzeReturn = (AnalyzeReturn);

// EXTERNAL MODULE: ./components/SymbolSearch.js
var SymbolSearch = __webpack_require__(7919);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(1438);
;// CONCATENATED MODULE: ./pages/analysis/[symbol]/index.js












let earningVals, fcfVals;
const article = ({ income_statement , balance_sheet , cash_flow , stock_info , price_info ,  })=>{
    const { 0: analyzed , 1: setAnalyzed  } = (0,external_react_.useState)(false);
    const { 0: earningVals1 , 1: setEarningVals  } = (0,external_react_.useState)(false);
    const { 0: fcfVals1 , 1: setFcfVals  } = (0,external_react_.useState)(false);
    const handleClick = ()=>{
        const analysisResult = (0,utils/* getAnalyzedResults */.hZ)(income_statement, balance_sheet);
        setEarningVals(earningVals1 = analysisResult["earningsVals"]);
        setFcfVals(fcfVals1 = analysisResult["fcfVals"]);
        setAnalyzed(analyzed = true);
    };
    const AnalysisOff = ()=>{
        setAnalyzed(analyzed = false);
        found && (0,utils/* resetInputs */.yz)();
    };
    const reports = {
        IS: income_statement,
        BS: balance_sheet,
        CF: cash_flow,
        SI: stock_info,
        PI: price_info
    };
    const found = income_statement.symbol ? true : false;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SymbolSearch/* default */.Z, {
                AnalysisOff: AnalysisOff,
                individual: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "info-container",
                children: [
                    found && /*#__PURE__*/ jsx_runtime_.jsx(components_StockTitle, {
                        reports: reports
                    }),
                    found && /*#__PURE__*/ jsx_runtime_.jsx(AnalyzeButton/* default */.Z, {
                        pressed: false,
                        reports: reports,
                        handleClick: handleClick
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            found && /*#__PURE__*/ jsx_runtime_.jsx(StockAnalyzer/* default */.Z, {
                reports: reports
            }),
            !found && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "We couldn't find the symbol you typed. Please try again with a different symbol"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            analyzed && /*#__PURE__*/ jsx_runtime_.jsx(components_AnalyzeReturn, {
                earningVals: earningVals1,
                fcfVals: fcfVals1
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const res1 = await fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`);
    const income_statement = await res1.json();
    const res2 = await fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`);
    const balance_sheet = await res2.json();
    const res3 = await fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`);
    const cash_flow = await res3.json();
    const res5 = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`);
    const stock_info = await res5.json();
    const res6 = await fetch(`https://finnhub.io/api/v1/quote?symbol=${context.params.symbol}&token=${process.env.FINNHUB_TOKEN}`);
    const price_info = await res6.json();
    return {
        props: {
            income_statement,
            balance_sheet,
            cash_flow,
            stock_info,
            price_info
        }
    };
};
/* harmony default export */ const _symbol_ = (article);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 135:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1553:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,122,759,942], () => (__webpack_exec__(1932)));
module.exports = __webpack_exports__;

})();