"use strict";
(() => {
var exports = {};
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 5935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./data.js
const articles = [
    {
        id: "1",
        title: "GitHub introduces dark mode and auto-merge pull request",
        excerpt: "GitHub today announced a bunch of new features at its virtual GitHub...",
        body: "GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?"
    },
    {
        id: "2",
        title: "What\u2019s multi-cloud? And why should developers care?",
        excerpt: "Most developers don\u2019t care about multi-cloud. But they should...",
        body: "Most developers don\u2019t care about multi-cloud. But they should. Whether developers know it or not, their companies likely already have a multi-cloud environment.    Multi-cloud is a strategy where a business selects different services from different cloud providers"
    },
    {
        id: "3",
        title: "Here is how to make your website more accessible",
        excerpt: "An accessible website is one that\u2019s optimized for all people, including those with disabilities...",
        body: "There are many things to consider when setting up a website, and accessibility is one factor that can sometimes be overlooked. An accessible website is one that\u2019s optimized for all people, including those with impaired vision or hearing, motor difficulties, or learning disabilities"
    },
    {
        id: "4",
        title: "Why open ecosystems are the future of app development",
        excerpt: "When app stores entered the mainstream tech culture, they exposed developers to an audience of millions...",
        body: "We can\u2019t get enough of our mobile apps. There were 204 billion apps downloads last year, and that number is rising in 2020.  When app stores entered the mainstream tech culture, they exposed developers to an audience of millions who were keen to adopt the innovative capabilities"
    }, 
];

;// CONCATENATED MODULE: ./pages/api/articles/index.js

function handler(req, res) {
    res.status(200).json(articles);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5935));
module.exports = __webpack_exports__;

})();