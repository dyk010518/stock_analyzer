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

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = "production" !== "production";
const server = dev ? "http://localhost:3000" : "https://danieldykim.com/stock_analyzer";


/***/ }),

/***/ 5295:
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
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1645);
;// CONCATENATED MODULE: external "next/Link"
const Link_namespaceObject = require("next/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
// EXTERNAL MODULE: ./styles/Article.module.css
var Article_module = __webpack_require__(7070);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
;// CONCATENATED MODULE: ./components/ArticleItem.js



const ArticleItem = ({ article  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
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

;// CONCATENATED MODULE: ./pages/index.js



// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
function Home({ articles  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleList, {
            articles: articles
        })
    });
};
const getStaticProps = async ()=>{
    const res = await fetch(`${config/* server */.f}/api/articles`);
    const articles = await res.json();
    return {
        props: {
            articles
        }
    };
} // export const getStaticProps = async () => {
 //   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
 //   const articles = await res.json()
 //   return {
 //     props: {
 //       articles
 //     }
 //   }
 // }
;


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
var __webpack_exports__ = (__webpack_exec__(5295));
module.exports = __webpack_exports__;

})();