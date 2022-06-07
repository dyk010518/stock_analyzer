"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 9759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./prefix.js
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
/* harmony default export */ const prefix_0 = (prefix);

;// CONCATENATED MODULE: ./components/Meta.js



const Meta = ({ title , keywords , description  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: prefix_0 + "/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            })
        ]
    });
};
Meta.defaultProps = {
    title: "WebDev Mewz",
    keywords: "web development, programming",
    desctiption: "Get the latest news in web dev"
};
/* harmony default export */ const components_Meta = (Meta);


/***/ })

};
;