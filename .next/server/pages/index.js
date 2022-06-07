(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7070:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Article_grid__kFo2I",
	"card": "Article_card__p_LF5",
	"logo": "Article_logo__TjePz"
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

/***/ 55:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "TopRow_row__Um3z1"
};


/***/ }),

/***/ 272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(7070);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
;// CONCATENATED MODULE: ./components/ArticleItem.js



const ArticleItem = ({ article  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/article/[id]",
        as: `/article/${article.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (Article_module_default()).card,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    children: [
                        article.title,
                        " \u2192"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: article.excerpt
                })
            ]
        })
    });
};
/* harmony default export */ const components_ArticleItem = (ArticleItem);

;// CONCATENATED MODULE: ./components/ArticleList.js



const ArticleList = ({ articles  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Article_module_default()).grid,
        children: articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ArticleItem, {
                article: article
            }, article.id)
        )
    });
};
/* harmony default export */ const components_ArticleList = (ArticleList);

// EXTERNAL MODULE: ./styles/StockAnalysis.module.css
var StockAnalysis_module = __webpack_require__(5722);
var StockAnalysis_module_default = /*#__PURE__*/__webpack_require__.n(StockAnalysis_module);
// EXTERNAL MODULE: ./styles/TopRow.module.css
var TopRow_module = __webpack_require__(55);
var TopRow_module_default = /*#__PURE__*/__webpack_require__.n(TopRow_module);
;// CONCATENATED MODULE: ./components/TopRow.js


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
                        className: (TopRow_module_default()).col,
                        children: "Past Numbers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                        className: (TopRow_module_default()).col,
                        children: "My Assumptions"
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
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Low"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Low"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Low"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_TopRow = (TopRow);

;// CONCATENATED MODULE: ./components/StockAnalysis.js




const StockAnalysis = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("table", {
        className: (StockAnalysis_module_default()).table,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_TopRow, {})
    });
};
/* harmony default export */ const components_StockAnalysis = (StockAnalysis);

;// CONCATENATED MODULE: ./pages/index.js




// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
function Home({ articles  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_StockAnalysis, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleList, {
                articles: articles
            })
        ]
    });
};
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }
const getStaticProps = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    const articles = await res.json();
    return {
        props: {
            articles
        }
    };
};


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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(272)));
module.exports = __webpack_exports__;

})();