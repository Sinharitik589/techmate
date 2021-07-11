webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Carousels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Carousels */ "./Components/Carousels.js");
/* harmony import */ var _Components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Card */ "./Components/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Footer */ "./Components/Footer.js");
var _jsxFileName = "D:\\important\\UI\\new-blog\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {
  _s();

  var posts = _ref.posts,
      featured = _ref.featured;
  var post = [];

  if (posts.length > 0) {
    post = posts.map(function (val) {
      return val;
    });
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      first = _useState[0],
      setFirst = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(posts.length > 10 ? 10 : posts.length),
      second = _useState2[0],
      setSecond = _useState2[1];

  var renderPosts = function renderPosts() {
    var array = [];

    for (var i = first; i < second; i++) {
      array.push(__jsx(_Components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "card_".concat(i),
        value: post[i],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 18
        }
      }));
    }

    return array;
  };

  var decrement = function decrement() {
    var prev = first - 10 >= 0 ? first - 10 : 0;
    setSecond(first);
    setFirst(prev);
  };

  var increment = function increment() {
    var next = second + 10 < posts.length ? second + 10 : posts.length;
    setFirst(second);
    setSecond(next);
  };

  var renderButtons = function renderButtons() {
    if (first > 0 && second < post.length) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: decrement,
        className: "mr-4",
        variant: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 12
        }
      }, "Previous"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: increment,
        variant: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, "Next"));
    }

    if (first > 0) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: decrement,
        className: "mr-4",
        variant: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 14
        }
      }, "Previous");
    }

    if (second < posts.length) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: increment,
        variant: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 14
        }
      }, "Next");
    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Tech Mates.We Compare You Choose"), __jsx("meta", {
    name: "description",
    data: "Presenting you the most effective comparison of your interest..",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "google-site-verification",
    content: "9SesUTFM8Ftoud6zand6o3AyfpjO2359xym9X32qv74",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-Z976GC3SQ6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "  window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());  gtag('config', 'G-Z976GC3SQ6');"), __jsx("script", {
    "data-ad-client": "ca-pub-5458112024334359",
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "./logo.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })), __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "logo",
    className: "logo_img",
    src: "./logo.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }))), __jsx("span", {
    className: "techmate",
    style: {
      color: "blue"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "<TECH_", __jsx("span", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "MATE/>")), __jsx("span", {
    className: "toggler_icon",
    onClick: function onClick() {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#header_toggle").slideToggle();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "2em",
    height: "2em",
    viewBox: "0 0 16 16",
    "class": "bi bi-list",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "desc_toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("span", {
    style: {
      color: "blue"
    },
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Contact"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "About"))))), __jsx("div", {
    id: "header_toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header_toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("span", {
    style: {
      color: "blue"
    },
    id: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "Contact"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }, "About"))))), __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-around category-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: {
      pathname: "/Categories/[category]"
    },
    as: {
      pathname: "/Categories/health"
    },
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      background: "#ffff url('./health.jpg') left top /cover no-repeat"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "categories_toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, "Health")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: {
      pathname: "/Categories/[category]"
    },
    as: {
      pathname: "/Categories/discover"
    },
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      background: "#ffff url('./discover.jpg') left top /cover no-repeat"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 14
    }
  }, __jsx("span", {
    className: "categories_toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, "Discover")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: {
      pathname: "/Categories/[category]"
    },
    as: {
      pathname: "/Categories/comparison"
    },
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      background: "#ffff url('./comparison.jpg') left top /cover no-repeat"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "categories_toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, "Comparison")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: {
      pathname: "/Categories/[category]"
    },
    as: {
      pathname: "/Categories/youtube_guide"
    },
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      background: "#ffff url('./youtube.jpg') left top /cover no-repeat"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "categories_toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 17
    }
  }, "Youtube Guide")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: {
      pathname: "/Categories/[category]"
    },
    as: {
      pathname: "/Categories/how_to"
    },
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      background: "#ffff url('./how to.jpg') left top /cover no-repeat"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "categories_toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, "How To")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: {
      pathname: "/Categories/[category]"
    },
    as: {
      pathname: "/Categories/more"
    },
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      background: "#ffff url('./more.jpg') left top /cover no-repeat"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "categories_toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, "More")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 9
    }
  }, __jsx(_Components_Carousels__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: featured,
    post: posts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, renderPosts())), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    noGutters: true,
    className: "mb-4 justify-content-end w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 11
    }
  }, renderButtons()))), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }));
}, "MJNg9vfOG2UQrFMhmIT9A2I1Xi8="));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicG9zdHMiLCJmZWF0dXJlZCIsInBvc3QiLCJsZW5ndGgiLCJtYXAiLCJ2YWwiLCJ1c2VTdGF0ZSIsImZpcnN0Iiwic2V0Rmlyc3QiLCJzZWNvbmQiLCJzZXRTZWNvbmQiLCJyZW5kZXJQb3N0cyIsImFycmF5IiwiaSIsInB1c2giLCJkZWNyZW1lbnQiLCJwcmV2IiwiaW5jcmVtZW50IiwibmV4dCIsInJlbmRlckJ1dHRvbnMiLCJjb2xvciIsIiQiLCJzbGlkZVRvZ2dsZSIsInBhdGhuYW1lIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxrRkFBeUI7QUFBQTs7QUFBQSxNQUF0QkEsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3RDLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE1BQUlGLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCRCxRQUFJLEdBQUdGLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLEdBQUcsRUFBSTtBQUN0QixhQUFPQSxHQUFQO0FBQ0QsS0FGTSxDQUFQO0FBSUQ7O0FBUHFDLGtCQVNkQyxzREFBUSxDQUFDLENBQUQsQ0FUTTtBQUFBLE1BU2pDQyxLQVRpQztBQUFBLE1BUzFCQyxRQVQwQjs7QUFBQSxtQkFVWkYsc0RBQVEsQ0FBRU4sS0FBSyxDQUFDRyxNQUFOLEdBQWUsRUFBaEIsR0FBc0IsRUFBdEIsR0FBMkJILEtBQUssQ0FBQ0csTUFBbEMsQ0FWSTtBQUFBLE1BVWpDTSxNQVZpQztBQUFBLE1BVXpCQyxTQVZ5Qjs7QUFXdEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxT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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMseUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQVRGLENBREYsQ0F0RkYsQ0FERixDQXRHRixFQWdORSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLFFBQUksRUFBRXZCLFFBQWpCO0FBQTJCLFFBQUksRUFBRUQsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWVFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dXLFdBQVcsRUFEZCxDQWZGLENBRkYsRUFzQkUsTUFBQyxtREFBRDtBQUFLLGFBQVMsTUFBZDtBQUFlLGFBQVMsRUFBQyxnQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJUSxhQUFhLEVBRGpCLENBdEJGLENBREYsQ0FoTkYsRUErT0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL09GLENBREY7QUFtUEQsQ0F0U0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjgwNjNhMDg4MDA5Zjc4YzRmZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDYXJvdXNlbHMgZnJvbSBcIi4uL0NvbXBvbmVudHMvQ2Fyb3VzZWxzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Db21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0ICh7IHBvc3RzLCBmZWF0dXJlZCB9KSA9PiB7XG4gIHZhciBwb3N0ID0gW107XG4gIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgcG9zdCA9IHBvc3RzLm1hcCh2YWwgPT4ge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9KVxuXG4gIH1cblxuICBsZXQgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZSgocG9zdHMubGVuZ3RoID4gMTApID8gMTAgOiBwb3N0cy5sZW5ndGgpO1xuICBjb25zdCByZW5kZXJQb3N0cyA9ICgpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGkgPSBmaXJzdDsgaSA8IHNlY29uZDsgaSsrKSB7XG4gICAgICBhcnJheS5wdXNoKDxDYXJkIGtleT17YGNhcmRfJHtpfWB9IHZhbHVlPXtwb3N0W2ldfSAvPilcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuXG4gIH1cblxuICBjb25zdCBkZWNyZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJldiA9IChmaXJzdCAtIDEwID49IDAgPyBmaXJzdCAtIDEwIDogMCk7XG4gICAgc2V0U2Vjb25kKGZpcnN0KTtcbiAgICBzZXRGaXJzdChwcmV2KVxuICB9XG4gIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gc2Vjb25kICsgMTAgPCBwb3N0cy5sZW5ndGggPyBzZWNvbmQgKyAxMCA6IHBvc3RzLmxlbmd0aFxuICAgIHNldEZpcnN0KHNlY29uZCk7XG4gICAgc2V0U2Vjb25kKG5leHQpO1xuICB9XG4gIGNvbnN0IHJlbmRlckJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgaWYgKGZpcnN0ID4gMCAmJiBzZWNvbmQgPCBwb3N0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD4gPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2RlY3JlbWVudH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCIgdmFyaWFudD1cInByaW1hcnlcIj5QcmV2aW91czwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aW5jcmVtZW50fSB2YXJpYW50PVwicHJpbWFyeVwiPk5leHQ8L0J1dHRvbj5cbiAgICAgICAgPC8+XG5cbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGZpcnN0ID4gMCkge1xuICAgICAgcmV0dXJuIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17ZGVjcmVtZW50fVxuICAgICAgICBjbGFzc05hbWU9XCJtci00XCIgdmFyaWFudD1cInByaW1hcnlcIj5QcmV2aW91czwvQnV0dG9uPlxuICAgIH1cbiAgICBpZiAoc2Vjb25kIDwgcG9zdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gPEJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnR9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+TmV4dDwvQnV0dG9uPlxuICAgIH1cblxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDx0aXRsZT5UZWNoIE1hdGVzLldlIENvbXBhcmUgWW91IENob29zZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBkYXRhPVwiUHJlc2VudGluZyB5b3UgdGhlIG1vc3QgZWZmZWN0aXZlIGNvbXBhcmlzb24gb2YgeW91ciBpbnRlcmVzdC4uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCI5U2VzVVRGTThGdG91ZDZ6YW5kNm8zQXlmcGpPMjM1OXh5bTlYMzJxdjc0XCIgLz5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctWjk3NkdDM1NRNlwiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IGFzeW5jPlxuICAgICAgICAgIHtcIiAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107ZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fWd0YWcoJ2pzJywgbmV3IERhdGUoKSk7ICBndGFnKCdjb25maWcnLCAnRy1aOTc2R0MzU1E2Jyk7XCJ9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IGRhdGEtYWQtY2xpZW50PVwiY2EtcHViLTU0NTgxMTIwMjQzMzQzNTlcIiBhc3luYyBzcmM9XCJodHRwczovL3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tL3BhZ2VhZC9qcy9hZHNieWdvb2dsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LURmWGR6Mmh0UEgwbHNTU3M1bkNUcHVqL3p5NEMrT0dwYW1vRlZ5MzhNVkJuRStJYmJWWVVldytPckNYYVJrZmpcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi4vbG9nby5qcGVnXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibG9nb19pbWdcIiBzcmM9XCIuL2xvZ28uanBlZ1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVjaG1hdGVcIiBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX0+XG4gICAgICAgICAge1wiPFRFQ0hfXCJ9XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT57XCJNQVRFLz5cIn08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZXJfaWNvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgJChcIiNoZWFkZXJfdG9nZ2xlXCIpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMmVtXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjJlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgIGNsYXNzPVwiYmkgYmktbGlzdFwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTIuNSAxMS41QS41LjUgMCAwIDEgMyAxMWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6bTAtNEEuNS41IDAgMCAxIDMgN2gxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6bTAtNEEuNS41IDAgMCAxIDMgM2gxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjX3RvZ2dsZXJcIj5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fSBjbGFzc05hbWU9XCJ0b2dnbGVyX21lbnVcIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvY29udGFjdFwifT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVyX21lbnVcIj5Db250YWN0PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvYWJvdXRcIn0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlcl9tZW51XCI+QWJvdXQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBpZD1cImhlYWRlcl90b2dnbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfdG9nZ2xlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fSBpZD1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvY29udGFjdFwifT5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiY29udGFjdFwiPkNvbnRhY3Q8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9hYm91dFwifT5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiYWJvdXRcIj5BYm91dDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1hcm91bmQgY2F0ZWdvcnktbGlua3NcIiA+XG5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezJ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL0NhdGVnb3JpZXMvW2NhdGVnb3J5XWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFzPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9DYXRlZ29yaWVzL2hlYWx0aGAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZmYgdXJsKCcuL2hlYWx0aC5qcGcnKSBsZWZ0IHRvcCAvY292ZXIgbm8tcmVwZWF0XCIgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcmllc190b2dnbGVyX21lbnVcIj5cbiAgICAgICAgICAgICAgICAgIEhlYWx0aFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezJ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL0NhdGVnb3JpZXMvW2NhdGVnb3J5XWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFzPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC9DYXRlZ29yaWVzL2Rpc2NvdmVyYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgID48YSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmZmZmIHVybCgnLi9kaXNjb3Zlci5qcGcnKSBsZWZ0IHRvcCAvY292ZXIgbm8tcmVwZWF0XCIgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcmllc190b2dnbGVyX21lbnVcIj5cbiAgICAgICAgICAgICAgICAgIERpc2NvdmVyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Mn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvQ2F0ZWdvcmllcy9bY2F0ZWdvcnldYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXM9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL0NhdGVnb3JpZXMvY29tcGFyaXNvbmAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZmYgdXJsKCcuL2NvbXBhcmlzb24uanBnJykgbGVmdCB0b3AgL2NvdmVyIG5vLXJlcGVhdFwiIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfdG9nZ2xlcl9tZW51XCI+XG4gICAgICAgICAgICAgICAgICBDb21wYXJpc29uXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Mn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvQ2F0ZWdvcmllcy9bY2F0ZWdvcnldYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXM9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL0NhdGVnb3JpZXMveW91dHViZV9ndWlkZWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZmYgdXJsKCcuL3lvdXR1YmUuanBnJykgbGVmdCB0b3AgL2NvdmVyIG5vLXJlcGVhdFwiIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfdG9nZ2xlcl9tZW51XCI+XG4gICAgICAgICAgICAgICAgICBZb3V0dWJlIEd1aWRlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Mn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvQ2F0ZWdvcmllcy9bY2F0ZWdvcnldYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXM9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL0NhdGVnb3JpZXMvaG93X3RvYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZmZmZiB1cmwoJy4vaG93IHRvLmpwZycpIGxlZnQgdG9wIC9jb3ZlciBuby1yZXBlYXRcIiB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX3RvZ2dsZXJfbWVudVwiPlxuICAgICAgICAgICAgICAgICAgSG93IFRvXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Mn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvQ2F0ZWdvcmllcy9bY2F0ZWdvcnldYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXM9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBgL0NhdGVnb3JpZXMvbW9yZWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZmYgdXJsKCcuL21vcmUuanBnJykgbGVmdCB0b3AgL2NvdmVyIG5vLXJlcGVhdFwiIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfdG9nZ2xlcl9tZW51XCI+XG4gICAgICAgICAgICAgICAgICBNb3JlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPENhcm91c2VscyBkYXRhPXtmZWF0dXJlZH0gcG9zdD17cG9zdHN9IC8+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Mn0+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFkdmVydFwiPlNwYWNlIGZvciBhZDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgey8qIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgICAgICA8aW5zIGNsYXNzPVwiYWRzYnlnb29nbGVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxuICAgICAgICAgICAgICAgIGRhdGEtYWQtY2xpZW50PVwiY2EtcHViLTU0NTgxMTIwMjQzMzQzNTlcIlxuICAgICAgICAgICAgICAgIGRhdGEtYWQtc2xvdD1cIjUyMzE2OTc0MTBcIlxuICAgICAgICAgICAgICAgIGRhdGEtYWQtZm9ybWF0PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgZGF0YS1mdWxsLXdpZHRoLXJlc3BvbnNpdmU9XCJ0cnVlXCI+PC9pbnM+XG4gICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAge2AoYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pYH1cbiAgICAgICAgICAgICAgPC9zY3JpcHQ+ICovfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezEwfT5cbiAgICAgICAgICAgICAge3JlbmRlclBvc3RzKCl9XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIGNsYXNzTmFtZT1cIm1iLTQganVzdGlmeS1jb250ZW50LWVuZCB3LTEwMFwiPlxuICAgICAgICAgICAgeyhyZW5kZXJCdXR0b25zKCkpfVxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIHsvKiA8TGluayBocmVmPVwiL2Fib3V0XCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvYWJvdXRcIn0+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz4gKi99XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgXCJodHRwczovL3plbi1uZXd0b24tNTcyM2ZlLm5ldGxpZnkuYXBwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9hcGkvXCJcbiAgKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuZGF0YS5hcnI7XG4gIGNvbnN0IGZlYXR1cmVkID0gYXdhaXQgcmVzLmRhdGEuZmVhdHVyZWQ7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgICAgZmVhdHVyZWQsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=