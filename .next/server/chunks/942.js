exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 8828:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AnalyzeButton_container___jgKy",
	"button": "AnalyzeButton_button__GAF7f"
};


/***/ }),

/***/ 5722:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "StockAnalysis_table__5aVZy",
	"grid": "StockAnalysis_grid__SRwbZ",
	"grid_container": "StockAnalysis_grid_container___94zy",
	"grid_top": "StockAnalysis_grid_top__xU_UL",
	"card": "StockAnalysis_card__1da04",
	"logo": "StockAnalysis_logo__JoLkl"
};


/***/ }),

/***/ 5254:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "SymbolSearch_container__yB5Av",
	"search": "SymbolSearch_search__fLF8K",
	"glass": "SymbolSearch_glass__OYJhU",
	"button": "SymbolSearch_button__SDlvh"
};


/***/ }),

/***/ 55:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "TopRow_row__Um3z1",
	"col1": "TopRow_col1__RFrru",
	"col": "TopRow_col__jckLV"
};


/***/ }),

/***/ 6704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_AnalyzeButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8828);
/* harmony import */ var _styles_AnalyzeButton_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AnalyzeButton_module_css__WEBPACK_IMPORTED_MODULE_1__);


const AnalyzeButton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_AnalyzeButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_AnalyzeButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),
            onClick: props.handleClick,
            children: "Analyze"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnalyzeButton);


/***/ }),

/***/ 4506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_StockAnalyzer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/StockAnalysis.module.css
var StockAnalysis_module = __webpack_require__(5722);
var StockAnalysis_module_default = /*#__PURE__*/__webpack_require__.n(StockAnalysis_module);
// EXTERNAL MODULE: ./styles/TopRow.module.css
var TopRow_module = __webpack_require__(55);
var TopRow_module_default = /*#__PURE__*/__webpack_require__.n(TopRow_module);
;// CONCATENATED MODULE: ./components/Analyzer_components/TopRow.js


const TopRow = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("thead", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                className: (TopRow_module_default()).row,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                        className: (TopRow_module_default()).col
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                        className: (TopRow_module_default()).col1,
                        children: "Past Numbers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                        className: (TopRow_module_default()).col1,
                        children: "My 10-Year Assumptions"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                className: (TopRow_module_default()).row,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                        className: (TopRow_module_default()).col
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                        className: (TopRow_module_default()).col,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                children: "1 year"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                children: "2 year"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                children: "4 year"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                        className: (TopRow_module_default()).col,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                children: "Low"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                children: "Mid"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                                children: "High"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Analyzer_components_TopRow = (TopRow);

// EXTERNAL MODULE: ./components/Analyzer_components/Revenue.js
var Revenue = __webpack_require__(6122);
// EXTERNAL MODULE: ./styles/StockStats.module.css
var StockStats_module = __webpack_require__(2533);
var StockStats_module_default = /*#__PURE__*/__webpack_require__.n(StockStats_module);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(1438);
;// CONCATENATED MODULE: ./components/Analyzer_components/ProfitMargin.js



const ProfitMargin = (props)=>{
    const profitMargins = getProfitMargins(props.reports.IS);
    return /*#__PURE__*/ jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: (StockStats_module_default()).row,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: (StockStats_module_default()).col,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p1", {
                        children: "Profit Margin (%)"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p2", {
                            children: [
                                profitMargins[0],
                                "%"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p2", {
                            children: [
                                profitMargins[1],
                                "%"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p2", {
                            children: [
                                profitMargins[2],
                                "%"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "ProfitMargin_input_low",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "ProfitMargin_input_mid",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "ProfitMargin_input_high",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const getProfitMargins = (IS)=>{
    const number_of_quarters = IS.quarterlyReports.length;
    const year_one = number_of_quarters >= 4 ? (0,utils/* getAverage */.A5)([
        getQuarterProfitMargin(IS, 0),
        getQuarterProfitMargin(IS, 1),
        getQuarterProfitMargin(IS, 2),
        getQuarterProfitMargin(IS, 3)
    ]) : undefined;
    const year_two = number_of_quarters >= 8 ? (0,utils/* getAverage */.A5)([
        getQuarterProfitMargin(IS, 4),
        getQuarterProfitMargin(IS, 5),
        getQuarterProfitMargin(IS, 6),
        getQuarterProfitMargin(IS, 7)
    ]) : undefined;
    const year_three = number_of_quarters >= 12 ? (0,utils/* getAverage */.A5)([
        getQuarterProfitMargin(IS, 8),
        getQuarterProfitMargin(IS, 9),
        getQuarterProfitMargin(IS, 10),
        getQuarterProfitMargin(IS, 11)
    ]) : undefined;
    const year_four = number_of_quarters >= 16 ? (0,utils/* getAverage */.A5)([
        getQuarterProfitMargin(IS, 12),
        getQuarterProfitMargin(IS, 13),
        getQuarterProfitMargin(IS, 14),
        getQuarterProfitMargin(IS, 15)
    ]) : undefined;
    const pm_one = year_one && year_two ? (year_one * 100).toFixed(2) : "N/A";
    const pm_two = year_one && year_two ? ((0,utils/* getAverage */.A5)([
        year_one,
        year_two
    ]) * 100).toFixed(2) : "N/A";
    const pm_four = year_one && year_two && year_three && year_four ? ((0,utils/* getAverage */.A5)([
        year_one,
        year_two,
        year_three,
        year_four
    ]) * 100).toFixed(2) : "N/A";
    return [
        pm_one,
        pm_two,
        pm_four
    ];
};
const getQuarterProfitMargin = (IS, quarter)=>{
    return IS.quarterlyReports[quarter].totalRevenue != "None" && IS.quarterlyReports[quarter].netIncome != "None" ? Number(IS.quarterlyReports[quarter].netIncome / IS.quarterlyReports[quarter].totalRevenue) : undefined;
};
/* harmony default export */ const Analyzer_components_ProfitMargin = (ProfitMargin);

;// CONCATENATED MODULE: ./components/Analyzer_components/FCFMargin.js



const FCFMargin = (props)=>{
    const FCFMargins = getFCFMargins(props.reports.IS, props.reports.CF);
    return /*#__PURE__*/ jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: (StockStats_module_default()).row,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: (StockStats_module_default()).col,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p1", {
                        children: "Free Cash Flow Margin (%)"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p2", {
                            children: [
                                FCFMargins[0],
                                "%"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p2", {
                            children: [
                                FCFMargins[1],
                                "%"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p2", {
                            children: [
                                FCFMargins[2],
                                "%"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "FCFMargin_input_low",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "FCFMargin_input_mid",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "FCFMargin_input_high",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const getFCFMargins = (IS, CF)=>{
    const number_of_quarters = Math.min(IS.quarterlyReports.length, CF.quarterlyReports.length);
    const year_one = number_of_quarters >= 4 ? (0,utils/* getAverage */.A5)([
        getQuarterlyFCFMargin(IS, CF, 0),
        getQuarterlyFCFMargin(IS, CF, 1),
        getQuarterlyFCFMargin(IS, CF, 2),
        getQuarterlyFCFMargin(IS, CF, 3)
    ]) : undefined;
    const year_two = number_of_quarters >= 8 ? (0,utils/* getAverage */.A5)([
        getQuarterlyFCFMargin(IS, CF, 4),
        getQuarterlyFCFMargin(IS, CF, 5),
        getQuarterlyFCFMargin(IS, CF, 6),
        getQuarterlyFCFMargin(IS, CF, 7)
    ]) : undefined;
    const year_three = number_of_quarters >= 12 ? (0,utils/* getAverage */.A5)([
        getQuarterlyFCFMargin(IS, CF, 8),
        getQuarterlyFCFMargin(IS, CF, 9),
        getQuarterlyFCFMargin(IS, CF, 10),
        getQuarterlyFCFMargin(IS, CF, 11)
    ]) : undefined;
    const year_four = number_of_quarters >= 16 ? (0,utils/* getAverage */.A5)([
        getQuarterlyFCFMargin(IS, CF, 12),
        getQuarterlyFCFMargin(IS, CF, 13),
        getQuarterlyFCFMargin(IS, CF, 14),
        getQuarterlyFCFMargin(IS, CF, 15)
    ]) : undefined;
    const fm_one = year_one && year_two ? (year_one * 100).toFixed(2) : "N/A";
    const fm_two = year_one && year_two ? ((0,utils/* getAverage */.A5)([
        year_one,
        year_two
    ]) * 100).toFixed(2) : "N/A";
    const fm_four = year_one && year_two && year_three && year_four ? ((0,utils/* getAverage */.A5)([
        year_one,
        year_two,
        year_three,
        year_four
    ]) * 100).toFixed(2) : "N/A";
    return [
        fm_one,
        fm_two,
        fm_four
    ];
};
const getQuarterlyFCFMargin = (IS, CF, quarter)=>{
    const quarterFCF = getQuarterFCF(CF, quarter);
    return IS.quarterlyReports[quarter].totalRevenue != "None" && quarterFCF ? Number(quarterFCF / IS.quarterlyReports[quarter].totalRevenue) : undefined;
};
const getQuarterFCF = (CF, quarter)=>{
    const OpCF = CF.quarterlyReports[quarter].operatingCashflow != "None" ? Number(CF.quarterlyReports[quarter].operatingCashflow) : undefined;
    const CapEx = CF.quarterlyReports[quarter].capitalExpenditures != "None" ? Number(CF.quarterlyReports[quarter].capitalExpenditures) : 0;
    return OpCF ? OpCF - CapEx : undefined;
};
/* harmony default export */ const Analyzer_components_FCFMargin = (FCFMargin);
const asd = {
    1: 123,
    2: 234
};
{
    1;
}
;// CONCATENATED MODULE: ./components/Analyzer_components/PERatio.js



const PERatio = (props)=>{
    const PERatio1 = getPERatio(props.reports.IS, props.reports.BS, props.reports.PI);
    return /*#__PURE__*/ jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: (StockStats_module_default()).row,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: (StockStats_module_default()).col,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p1", {
                        children: "P/E Ratio"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: PERatio1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: "-"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: "-"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "PE_input_low",
                                name: "quantity"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "PE_input_mid",
                                name: "quantity"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "PE_input_high",
                                name: "quantity"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const getPERatio = (IS, BS, PI)=>{
    const number_of_quarters = IS.quarterlyReports.length;
    if (number_of_quarters == 0) return "NA";
    const earning = getAnnualEarning(IS);
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined;
    const sharePrice = Number(PI["c"]);
    return earning != 0 && shares ? (sharePrice * shares / earning).toFixed(2) : "NA";
};
const getAnnualEarning = (IS)=>{
    const start_quarter = Math.min(4, IS.quarterlyReports.length);
    let earnings = 0;
    for(var quarter = 0; quarter < start_quarter; quarter++){
        if (IS.quarterlyReports[quarter].netIncome != "None") earnings = earnings + Number(IS.quarterlyReports[quarter].netIncome);
    }
    return earnings;
};
/* harmony default export */ const Analyzer_components_PERatio = (PERatio);

;// CONCATENATED MODULE: ./components/Analyzer_components/PFCFRatio.js


const PFCFRatio = (props)=>{
    const FCFRatio = getFCFRatio(props.reports.CF, props.reports.BS, props.reports.PI);
    return /*#__PURE__*/ jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: (StockStats_module_default()).row,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: (StockStats_module_default()).col,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p1", {
                        children: "P/FCF Ratio"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: FCFRatio
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: "-"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: "-"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "PFCF_input_low",
                                name: "quantity"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "PFCF_input_mid",
                                name: "quantity"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "PFCF_input_high",
                                name: "quantity"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const getFCFRatio = (CF, BS, PI)=>{
    const number_of_quarters = CF.quarterlyReports.length;
    if (number_of_quarters == 0) return "NA";
    const cash_flow = getAnnualCF(CF);
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined;
    const sharePrice = Number(PI["c"]);
    return cash_flow != 0 && shares ? (sharePrice * shares / cash_flow).toFixed(2) : "NA";
};
const getAnnualCF = (CF)=>{
    const start_quarter = Math.min(4, CF.quarterlyReports.length);
    let cash_flow = 0;
    for(var quarter = 0; quarter < start_quarter; quarter++){
        const OpCF = CF.quarterlyReports[quarter].operatingCashflow != "None" ? Number(CF.quarterlyReports[quarter].operatingCashflow) : undefined;
        const CapEx = CF.quarterlyReports[quarter].capitalExpenditures != "None" ? Number(CF.quarterlyReports[quarter].capitalExpenditures) : 0;
        if (OpCF) cash_flow = cash_flow + (OpCF - CapEx);
    }
    return cash_flow;
};
/* harmony default export */ const Analyzer_components_PFCFRatio = (PFCFRatio);

;// CONCATENATED MODULE: ./components/Analyzer_components/AnnualReturn.js


const AnnualReturn = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: (StockStats_module_default()).row,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: (StockStats_module_default()).col1,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p1", {
                        children: "Annual Return (%)"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col1,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: "-"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: "-"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p2", {
                            children: "-"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: (StockStats_module_default()).col1,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "AnnualReturn_input_low",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "AnnualReturn_input_mid",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    id: "AnnualReturn_input_high",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Analyzer_components_AnnualReturn = (AnnualReturn);

// EXTERNAL MODULE: external "react-bootstrap/Table"
var Table_ = __webpack_require__(1553);
;// CONCATENATED MODULE: ./components/StockAnalyzer.js











const StockAnalyzer = ({ reports  })=>{
    return(// <Table striped bordered hover>
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        className: (StockAnalysis_module_default()).table,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Analyzer_components_TopRow, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Revenue/* default */.Z, {
                reports: reports
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Analyzer_components_ProfitMargin, {
                reports: reports
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Analyzer_components_FCFMargin, {
                reports: reports
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Analyzer_components_PERatio, {
                reports: reports
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Analyzer_components_PFCFRatio, {
                reports: reports
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Analyzer_components_AnnualReturn, {
                reports: reports
            })
        ]
    }));
};
/* harmony default export */ const components_StockAnalyzer = (StockAnalyzer);


/***/ }),

/***/ 7919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SymbolSearch_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5254);
/* harmony import */ var _styles_SymbolSearch_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SymbolSearch_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const SymbolSearch = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleClick = (input)=>{
        /[a-zA-Z]/.test(input.value) && router.push(`/analysis/${input.value.toUpperCase()}`);
        input.value = "";
        if (props.individual) props.AnalysisOff();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_SymbolSearch_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                id: "userInput",
                placeholder: "Search Stock Symbol",
                className: (_styles_SymbolSearch_module_css__WEBPACK_IMPORTED_MODULE_3___default().search)
            }),
             false && (0),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_SymbolSearch_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                onClick: ()=>handleClick(document.getElementById("userInput"))
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/search.png",
                    className: (_styles_SymbolSearch_module_css__WEBPACK_IMPORTED_MODULE_3___default().glass)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SymbolSearch);


/***/ })

};
;