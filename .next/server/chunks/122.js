exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 2533:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "StockStats_row__GEx3h",
	"col1": "StockStats_col1__5bRne",
	"col": "StockStats_col__4mLOF"
};


/***/ }),

/***/ 6122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_StockStats_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2533);
/* harmony import */ var _styles_StockStats_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_StockStats_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1438);



const Revenue = (props)=>{
    const revenueGrowth = getRevenueNumbers(props.reports.IS);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            className: (_styles_StockStats_module_css__WEBPACK_IMPORTED_MODULE_1___default().row),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: (_styles_StockStats_module_css__WEBPACK_IMPORTED_MODULE_1___default().col),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p1", {
                        children: "Annual Revenue Growth (%)"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                    className: (_styles_StockStats_module_css__WEBPACK_IMPORTED_MODULE_1___default().col),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p2", {
                            children: [
                                revenueGrowth[0],
                                "%"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p2", {
                            children: [
                                revenueGrowth[1],
                                "%"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p2", {
                            children: [
                                revenueGrowth[2],
                                "%"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                    className: (_styles_StockStats_module_css__WEBPACK_IMPORTED_MODULE_1___default().col),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    id: "revenue_input_low",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    id: "revenue_input_mid",
                                    name: "quantity"
                                }),
                                "  %"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    id: "revenue_input_high",
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
const getRevenueNumbers = (IS)=>{
    const number_of_quarters = IS.quarterlyReports.length;
    const year_one = number_of_quarters >= 4 ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAverage */ .A5)([
        getQuarterlyRevenue(IS, 0),
        getQuarterlyRevenue(IS, 1),
        getQuarterlyRevenue(IS, 2),
        getQuarterlyRevenue(IS, 3)
    ]) * 4 : undefined;
    const year_two = number_of_quarters >= 8 ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAverage */ .A5)([
        getQuarterlyRevenue(IS, 4),
        getQuarterlyRevenue(IS, 5),
        getQuarterlyRevenue(IS, 6),
        getQuarterlyRevenue(IS, 7)
    ]) * 4 : undefined;
    const year_three = number_of_quarters >= 12 ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAverage */ .A5)([
        getQuarterlyRevenue(IS, 8),
        getQuarterlyRevenue(IS, 9),
        getQuarterlyRevenue(IS, 10),
        getQuarterlyRevenue(IS, 11)
    ]) * 4 : undefined;
    const year_five = number_of_quarters >= 20 ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAverage */ .A5)([
        getQuarterlyRevenue(IS, 16),
        getQuarterlyRevenue(IS, 17),
        getQuarterlyRevenue(IS, 18),
        getQuarterlyRevenue(IS, 19)
    ]) * 4 : undefined;
    const growth_one = year_one && year_two ? ((year_one / year_two - 1) * 100).toFixed(2) : "N/A";
    const growth_two = year_one && year_three ? (((year_one / year_three) ** (1 / 2) - 1) * 100).toFixed(2) : "N/A";
    const growth_four = year_one && year_five ? (((year_one / year_five) ** (1 / 4) - 1) * 100).toFixed(2) : "N/A";
    return [
        growth_one,
        growth_two,
        growth_four
    ];
};
const getQuarterlyRevenue = (IS, quarter)=>{
    return IS.quarterlyReports[quarter].totalRevenue != "None" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Revenue);


/***/ }),

/***/ 1438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A5": () => (/* binding */ getAverage),
/* harmony export */   "hZ": () => (/* binding */ getAnalyzedResults),
/* harmony export */   "yz": () => (/* binding */ resetInputs)
/* harmony export */ });
const resetInputs = ()=>{
    const element_ids = [
        "revenue_input_low",
        "revenue_input_mid",
        "revenue_input_high",
        "ProfitMargin_input_low",
        "ProfitMargin_input_mid",
        "ProfitMargin_input_high",
        "FCFMargin_input_low",
        "FCFMargin_input_mid",
        "FCFMargin_input_high",
        "PE_input_low",
        "PE_input_mid",
        "PE_input_high",
        "PFCF_input_low",
        "PFCF_input_mid",
        "PFCF_input_high",
        "AnnualReturn_input_low",
        "AnnualReturn_input_mid",
        "AnnualReturn_input_high"
    ];
    for(var i = 0; i < element_ids.length; i++){
        document.getElementById(element_ids[i]).value = document.getElementById(element_ids[i]).defaultValue;
    }
};
const getAnalyzedResults = (IS, BS)=>{
    const number_of_quarters = IS.quarterlyReports.length;
    const last_revenue = number_of_quarters >= 4 ? getAverage([
        getQuarterlyRevenue(IS, 0),
        getQuarterlyRevenue(IS, 1),
        getQuarterlyRevenue(IS, 2),
        getQuarterlyRevenue(IS, 3)
    ]) * 4 : undefined;
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined;
    const [growth_low, growth_mid, growth_high] = [
        Number(document.getElementById("revenue_input_low").value) / 100,
        Number(document.getElementById("revenue_input_mid").value) / 100,
        Number(document.getElementById("revenue_input_high").value) / 100
    ];
    const [p_margin_low, p_margin_mid, p_margin_high] = [
        Number(document.getElementById("ProfitMargin_input_low").value) / 100,
        Number(document.getElementById("ProfitMargin_input_mid").value) / 100,
        Number(document.getElementById("ProfitMargin_input_high").value) / 100
    ];
    const [fcf_margin_low, fcf_margin_mid, fcf_margin_high] = [
        Number(document.getElementById("FCFMargin_input_low").value) / 100,
        Number(document.getElementById("FCFMargin_input_mid").value) / 100,
        Number(document.getElementById("FCFMargin_input_high").value) / 100
    ];
    const [pe_low, pe_mid, pe_high] = [
        Number(document.getElementById("PE_input_low").value),
        Number(document.getElementById("PE_input_mid").value),
        Number(document.getElementById("PE_input_high").value)
    ];
    const [pfcf_low, pfcf_mid, pfcf_high] = [
        Number(document.getElementById("PFCF_input_low").value),
        Number(document.getElementById("PFCF_input_mid").value),
        Number(document.getElementById("PFCF_input_high").value)
    ];
    const [discount_low, discount_mid, discount_high] = [
        Number(document.getElementById("AnnualReturn_input_low").value) / 100,
        Number(document.getElementById("AnnualReturn_input_mid").value) / 100,
        Number(document.getElementById("AnnualReturn_input_high").value) / 100
    ];
    return {
        "earningsVals": [
            getDiscountedVal(last_revenue, shares, growth_low, p_margin_low, pe_low, discount_low),
            getDiscountedVal(last_revenue, shares, growth_mid, p_margin_mid, pe_mid, discount_mid),
            getDiscountedVal(last_revenue, shares, growth_high, p_margin_high, pe_high, discount_high)
        ],
        "fcfVals": [
            getDiscountedVal(last_revenue, shares, growth_low, fcf_margin_low, pfcf_low, discount_low),
            getDiscountedVal(last_revenue, shares, growth_mid, fcf_margin_mid, pfcf_mid, discount_mid),
            getDiscountedVal(last_revenue, shares, growth_high, fcf_margin_high, pfcf_high, discount_high)
        ]
    };
};
const getAverage = (input_array)=>{
    let sum = 0;
    let irrelevant = 0;
    for(var i = 0; i < input_array.length; i++){
        if (typeof input_array[i] == "number") sum += input_array[i];
        if (typeof input_array[i] != "number") irrelevant++;
    }
    return input_array.length != irrelevant ? sum / (input_array.length - irrelevant) : undefined;
};
const getDiscountedVal = (revenue, shares, growth, margin, multiple, discount)=>{
    let rev = revenue;
    let cumulative_val = 0;
    for(var time = 1; time <= 11; time++){
        rev *= 1 + growth;
        let per_share = rev * margin / shares;
        if (time == 11) per_share *= multiple;
        cumulative_val += per_share / (1 + discount) ** time;
    }
    return cumulative_val.toFixed(2);
};
const getQuarterlyRevenue = (IS, quarter)=>{
    return IS.quarterlyReports[quarter].totalRevenue != "None" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined;
};


/***/ })

};
;