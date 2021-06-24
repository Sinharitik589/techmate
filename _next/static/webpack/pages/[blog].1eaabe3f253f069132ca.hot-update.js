webpackHotUpdate_N_E("pages/[blog]",{

/***/ "./pages/[blog].js":
/*!*************************!*\
  !*** ./pages/[blog].js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\important\\UI\\new-blog\\pages\\[blog].js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var blog = _ref.blog;

  var replace = function replace(str) {
    var array = str;

    for (var i = 0; i < str.length; i++) {
      array = array.replace(" ", "_");
    }

    return array;
  };

  var imageInsert = function imageInsert(url, title) {
    if (url) {
      return __jsx("img", {
        alt: title,
        src: url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 14
        }
      });
    }
  };

  var openAnswer = function openAnswer(index) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#answer_".concat(index)).toggle();

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#answer_".concat(index)).is(":hidden")) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#question_button_".concat(index)).html("<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" className=\"bi bi-chevron-down\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/>\n</svg>");
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#question_button_".concat(index)).html("<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" className=\"bi bi-chevron-up\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z\"/>\n</svg>");
    }
  };

  var replaceContentUrl = function replaceContentUrl(str) {
    var string = str;
    blog.urls.map(function (value) {
      console.log(value, "value");
      string = string.replace("".concat(value.keyword), "<a href=".concat(value.url, ">").concat(value.keyword, "</a>"));
    });
    return string;
  };

  var renderConclusion = function renderConclusion(conclusion_final) {
    if (conclusion_final.length > 0) {
      return __jsx("div", {
        className: "subheading",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }, "Conclusion"), __jsx("p", {
        dangerouslySetInnerHTML: {
          __html: conclusion_final
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }));
    }
  };

  var renderButton = function renderButton(flipkart, amazon) {
    if (flipkart.length > 0 && amazon.length > 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", {
        href: amazon,
        className: "col-md-4 buy-button",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx("img", {
        style: {
          margin: 0,
          padding: 0
        },
        src: "https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",
        alt: "buy on amazon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, "Buy on amazon")), __jsx("a", {
        className: "col-md-4 offset-md-4 buy-button",
        href: flipkart,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, __jsx("img", {
        style: {
          margin: 0,
          padding: 0
        },
        src: "https://latestnews.fresherslive.com/images/articles/ians/origin/2020/07/14/walmart-led-investors-pump-in-12-bn-in-flipkart-group-5f0da8994d322-1594730649.jpg",
        alt: "buy on flipkart",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }), __jsx("div", {
        style: {
          backgroundColor: "#0b275b",
          color: "white"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, "Buy on flipkart")));
    }
  };

  var renderList = function renderList(key_feature, value, col) {
    if (key_feature.length > 0) {
      var key_feature_arr = key_feature.split(",");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
        style: {
          backgroundColor: col
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }
      }, value), __jsx("ul", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }
      }, key_feature_arr.map(function (val) {
        if (val.length > 0) {
          return __jsx("li", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 24
            }
          }, val);
        }
      })));
    }
  };

  var week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var times = new Date(blog.createdAt);
  var day = week_days[times.getDay()];
  var date = times.getDate();
  var month = months[times.getMonth()];
  var year = times.getFullYear();
  var time = "".concat(day, " ").concat(date, " ").concat(month, " ").concat(year);
  var description_new = blog.description.split("\n").join("<br/>");
  return __jsx("div", {
    className: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, blog.heading), __jsx("meta", {
    name: "title",
    content: blog.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: blog.meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://thtechmates.in/".concat(replace(blog.heading)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: blog.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: blog.meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: blog.imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: "https://thtechmates.in/".concat(replace(blog.heading)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: blog.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: blog.meta_description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: blog.imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-Z976GC3SQ6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }), __jsx("script", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, "  window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());  gtag('config', 'G-Z976GC3SQ6');"), __jsx("script", {
    "data-ad-client": "ca-pub-5458112024334359",
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
    integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 193,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "../logo.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  })), __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "logo",
    className: "logo_img",
    src: "../logo.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
      lineNumber: 208,
      columnNumber: 9
    }
  }, "<TECH_", __jsx("span", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, "MATE/>")), __jsx("span", {
    className: "toggler_icon",
    onClick: function onClick() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#header_toggle").slideToggle();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "2em",
    height: "2em",
    viewBox: "0 0 16 16",
    className: "bi bi-list",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "desc_toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, "Contact"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, "About"))))), __jsx("div", {
    id: "header_toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header_toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx("span", {
    style: {
      color: "black"
    },
    id: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, "Contact"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, "About"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }, __jsx("h3", {
    id: "heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }, blog.heading), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }), __jsx("h5", {
    className: "time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-calendar-check",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 19
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 21
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  })), time), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-pencil",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 19
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  })), blog.username)), __jsx("img", {
    className: "heading_img",
    alt: blog.heading,
    src: blog.imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "icon_container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareButton"], {
    url: "https://thtechmates.in/blogs/".concat(blog.heading),
    quote: blog.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"], {
    size: 50,
    round: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappShareButton"], {
    url: "https://thtechmates.in/blogs/".concat(replace(blog.heading)),
    title: blog.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 19
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappIcon"], {
    size: 50,
    round: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 21
    }
  }))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterShareButton"], {
    url: "https://thtechmates.in/blogs/".concat(replace(blog.heading)),
    title: blog.heading,
    via: "dspeakingsoul",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 19
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"], {
    size: 50,
    round: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 21
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "subheading description_sub",
    dangerouslySetInnerHTML: {
      __html: description_new
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 15
    }
  }), blog.subheading.map(function (value) {
    var title = value.title,
        content = value.content,
        key_feature = value.key_feature,
        pros = value.pros,
        cons = value.cons,
        flipkart = value.flipkart,
        amazon = value.amazon;
    var content_new = content.split("\n").join("<br/>");
    var content_final = replaceContentUrl(content_new);
    return __jsx("div", {
      className: "subheading",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 19
      }
    }, __jsx("h3", {
      dangerouslySetInnerHTML: {
        __html: title
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "subheading-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 21
      }
    }, imageInsert(value.url, title)), __jsx("p", {
      dangerouslySetInnerHTML: {
        __html: content_final
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "pro-con",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 21
      }
    }, renderList(key_feature, "Key Features", "blue")), __jsx("div", {
      className: "pro-con",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 21
      }
    }, renderList(pros, "Pros", "green")), __jsx("div", {
      className: "pro-con",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 21
      }
    }, renderList(cons, "Cons", "red")), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 21
      }
    }, renderButton(flipkart, amazon)));
  }), renderConclusion(blog.conclusion)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "quest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 17
    }
  }, blog.questions.map(function (value, index) {
    return __jsx("div", {
      className: "quest-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 23
      }
    }, __jsx("div", {
      id: "question_".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 25
      }
    }, value.question, __jsx("span", {
      id: "question_button_".concat(index),
      onClick: function onClick() {
        openAnswer(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 27
      }
    }, __jsx("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      className: "bi bi-chevron-down",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 29
      }
    }, __jsx("path", {
      "fill-rule": "evenodd",
      d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 31
      }
    })))), __jsx("p", {
      id: "answer_".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 25
      }
    }, value.answer));
  }))))))), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/tech-mate-9846731b6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 11
    }
  }, __jsx("svg", {
    id: "Bold",
    "enable-background": "new 0 0 24 24",
    height: "25",
    viewBox: "0 0 24 24",
    width: "25",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 15
    }
  }), __jsx("path", {
    d: "m.396 7.977h4.976v16.023h-4.976z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 15
    }
  }), __jsx("path", {
    d: "m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 15
    }
  }))), __jsx("a", {
    href: "https://twitter.com/the_tech_mate_?s=08",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "twitter",
    src: "../twitter.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/Tech_Mate-101184858397572/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "facebook",
    src: "../facebook.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/the_tech_mate_/?hl=en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "instagram",
    src: "../instagram.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "#808080",
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 13
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "#808080",
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 13
    }
  }, "Contact")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/privacy",
    as: "/privacy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "#808080",
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 13
    }
  }, "Privacy"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 9
    }
  }, __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: "&#169Copyright 2020 All rights reserved"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 11
    }
  }))));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2Jsb2ddLmpzIl0sIm5hbWVzIjpbImJsb2ciLCJyZXBsYWNlIiwic3RyIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaW1hZ2VJbnNlcnQiLCJ1cmwiLCJ0aXRsZSIsIm9wZW5BbnN3ZXIiLCJpbmRleCIsIiQiLCJ0b2dnbGUiLCJpcyIsImh0bWwiLCJyZXBsYWNlQ29udGVudFVybCIsInN0cmluZyIsInVybHMiLCJtYXAiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJrZXl3b3JkIiwicmVuZGVyQ29uY2x1c2lvbiIsImNvbmNsdXNpb25fZmluYWwiLCJfX2h0bWwiLCJyZW5kZXJCdXR0b24iLCJmbGlwa2FydCIsImFtYXpvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInJlbmRlckxpc3QiLCJrZXlfZmVhdHVyZSIsImNvbCIsImtleV9mZWF0dXJlX2FyciIsInNwbGl0IiwidmFsIiwid2Vla19kYXlzIiwibW9udGhzIiwidGltZXMiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZGF5IiwiZ2V0RGF5IiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidGltZSIsImRlc2NyaXB0aW9uX25ldyIsImRlc2NyaXB0aW9uIiwiam9pbiIsImhlYWRpbmciLCJtZXRhX2Rlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJzbGlkZVRvZ2dsZSIsInVzZXJuYW1lIiwic3ViaGVhZGluZyIsImNvbnRlbnQiLCJwcm9zIiwiY29ucyIsImNvbnRlbnRfbmV3IiwiY29udGVudF9maW5hbCIsImNvbmNsdXNpb24iLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlciIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTtBQUNBOztBQUVlLCtFQUFjO0FBQUEsTUFB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QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixNQUFFLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFNBQUssRUFBRTtBQUFFdkMsV0FBSyxFQUFFLFNBQVQ7QUFBb0J1QyxnQkFBVSxFQUFFO0FBQWhDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBSkYsRUFPRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsTUFBRSxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxTQUFLLEVBQUU7QUFBRXZDLFdBQUssRUFBRSxTQUFUO0FBQW9CdUMsZ0JBQVUsRUFBRTtBQUFoQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVBGLENBM0JGLEVBc0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLDJCQUF1QixFQUFFO0FBQ3ZCOUMsWUFBTSxFQUFFO0FBRGUsS0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdENGLENBelNGLENBREY7QUEwVkQsQ0ExZEQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2Jsb2ddLjFlYWFiZTNmMjUzZjA2OTEzMmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge1xyXG4gIEZhY2Vib29rU2hhcmVCdXR0b24sXHJcbiAgRmFjZWJvb2tJY29uLFxyXG4gIFR3aXR0ZXJJY29uLFxyXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcclxuICBXaGF0c2FwcEljb24sXHJcbiAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcclxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFJvdywgQ29sLCBDb250YWluZXIsIERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBibG9nIH0pID0+IHtcclxuXHJcbiAgY29uc3QgcmVwbGFjZSA9IChzdHIpID0+IHtcclxuICAgIGxldCBhcnJheSA9IHN0cjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFycmF5ID0gYXJyYXkucmVwbGFjZShcIiBcIiwgXCJfXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH07XHJcbiAgY29uc3QgaW1hZ2VJbnNlcnQgPSAodXJsLCB0aXRsZSkgPT4ge1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICByZXR1cm4gPGltZyBhbHQ9e3RpdGxlfSBzcmM9e3VybH0+PC9pbWc+O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb3BlbkFuc3dlciA9IChpbmRleCkgPT4ge1xyXG4gICAgJChgI2Fuc3dlcl8ke2luZGV4fWApLnRvZ2dsZSgpO1xyXG4gICAgaWYgKCQoYCNhbnN3ZXJfJHtpbmRleH1gKS5pcyhcIjpoaWRkZW5cIikpIHtcclxuICAgICAgJChgI3F1ZXN0aW9uX2J1dHRvbl8ke2luZGV4fWApXHJcbiAgICAgICAgLmh0bWwoYDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3NOYW1lPVwiYmkgYmktY2hldnJvbi1kb3duXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHpcIi8+XHJcbjwvc3ZnPmApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChgI3F1ZXN0aW9uX2J1dHRvbl8ke2luZGV4fWApXHJcbiAgICAgICAgLmh0bWwoYDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3NOYW1lPVwiYmkgYmktY2hldnJvbi11cFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNy42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA1LjcwN2wtNS42NDYgNS42NDdhLjUuNSAwIDAgMS0uNzA4LS43MDhsNi02elwiLz5cclxuPC9zdmc+YCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZXBsYWNlQ29udGVudFVybCA9IChzdHIpID0+IHtcclxuICAgIGxldCBzdHJpbmcgPSBzdHI7XHJcblxyXG4gICAgYmxvZy51cmxzLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWUsIFwidmFsdWVcIik7XHJcbiAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKFxyXG4gICAgICAgIGAke3ZhbHVlLmtleXdvcmR9YCxcclxuICAgICAgICBgPGEgaHJlZj0ke3ZhbHVlLnVybH0+JHt2YWx1ZS5rZXl3b3JkfTwvYT5gXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvbmNsdXNpb24gPSAoY29uY2x1c2lvbl9maW5hbCkgPT4ge1xyXG4gICAgaWYgKGNvbmNsdXNpb25fZmluYWwubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgPGgzPkNvbmNsdXNpb248L2gzPlxyXG4gICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb25jbHVzaW9uX2ZpbmFsIH19PjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJCdXR0b24gPSAoZmxpcGthcnQsIGFtYXpvbikgPT4ge1xyXG4gICAgaWYgKGZsaXBrYXJ0Lmxlbmd0aCA+IDAgJiYgYW1hem9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGEgaHJlZj17YW1hem9ufSBjbGFzc05hbWU9XCJjb2wtbWQtNCBidXktYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IDAsIHBhZGRpbmc6IDAgfX1cclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvMDgvNWYvZDgvMDg1ZmQ4Zjc4MTlkZWUzYjcxNmRhNzNkM2IyZGU2MWMuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJidXkgb24gYW1hem9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5CdXkgb24gYW1hem9uPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjb2wtbWQtNCBvZmZzZXQtbWQtNCBidXktYnV0dG9uXCIgaHJlZj17ZmxpcGthcnR9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAwLCBwYWRkaW5nOiAwIH19XHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sYXRlc3RuZXdzLmZyZXNoZXJzbGl2ZS5jb20vaW1hZ2VzL2FydGljbGVzL2lhbnMvb3JpZ2luLzIwMjAvMDcvMTQvd2FsbWFydC1sZWQtaW52ZXN0b3JzLXB1bXAtaW4tMTItYm4taW4tZmxpcGthcnQtZ3JvdXAtNWYwZGE4OTk0ZDMyMi0xNTk0NzMwNjQ5LmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiYnV5IG9uIGZsaXBrYXJ0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBiMjc1YlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgIEJ1eSBvbiBmbGlwa2FydFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJMaXN0ID0gKGtleV9mZWF0dXJlLCB2YWx1ZSwgY29sKSA9PiB7XHJcbiAgICBpZiAoa2V5X2ZlYXR1cmUubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQga2V5X2ZlYXR1cmVfYXJyID0ga2V5X2ZlYXR1cmUuc3BsaXQoXCIsXCIpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sIH19Pnt2YWx1ZX08L2Rpdj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2tleV9mZWF0dXJlX2Fyci5tYXAoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT57dmFsfTwvbGk+O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgd2Vla19kYXlzID0gW1xyXG4gICAgXCJTdW5kYXlcIixcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gIF07XHJcbiAgY29uc3QgbW9udGhzID0gW1xyXG4gICAgXCJKYW51YXJ5XCIsXHJcbiAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICBcIk1hcmNoXCIsXHJcbiAgICBcIkFwcmlsXCIsXHJcbiAgICBcIk1heVwiLFxyXG4gICAgXCJKdW5lXCIsXHJcbiAgICBcIkp1bHlcIixcclxuICAgIFwiQXVndXN0XCIsXHJcbiAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgXCJPY3RvYmVyXCIsXHJcbiAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICBcIkRlY2VtYmVyXCIsXHJcbiAgXTtcclxuICBsZXQgdGltZXMgPSBuZXcgRGF0ZShibG9nLmNyZWF0ZWRBdCk7XHJcbiAgbGV0IGRheSA9IHdlZWtfZGF5c1t0aW1lcy5nZXREYXkoKV07XHJcbiAgbGV0IGRhdGUgPSB0aW1lcy5nZXREYXRlKCk7XHJcbiAgbGV0IG1vbnRoID0gbW9udGhzW3RpbWVzLmdldE1vbnRoKCldO1xyXG4gIGxldCB5ZWFyID0gdGltZXMuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgbGV0IHRpbWUgPSBgJHtkYXl9ICR7ZGF0ZX0gJHttb250aH0gJHt5ZWFyfWA7XHJcbiAgbGV0IGRlc2NyaXB0aW9uX25ldyA9IGJsb2cuZGVzY3JpcHRpb24uc3BsaXQoXCJcXG5cIikuam9pbihcIjxici8+XCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8dGl0bGU+e2Jsb2cuaGVhZGluZ308L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Jsb2cuaGVhZGluZ30gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1ldGFfZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgey8qIE9wZW4gR3JhcGggLyBGYWNlYm9vayAqL31cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL3RodGVjaG1hdGVzLmluLyR7cmVwbGFjZShibG9nLmhlYWRpbmcpfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YmxvZy5oZWFkaW5nfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1ldGFfZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Jsb2cuaW1hZ2VVcmx9IC8+XHJcbiAgICAgICAgey8qIFR3aXR0ZXIgKi99XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vdGh0ZWNobWF0ZXMuaW4vJHtyZXBsYWNlKGJsb2cuaGVhZGluZyl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2Jsb2cuaGVhZGluZ30gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1ldGFfZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17YmxvZy5pbWFnZVVybH0gLz5cclxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1aOTc2R0MzU1E2XCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdD5cclxuICAgICAgICAgIHtcIiAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107ZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fWd0YWcoJ2pzJywgbmV3IERhdGUoKSk7ICBndGFnKCdjb25maWcnLCAnRy1aOTc2R0MzU1E2Jyk7XCJ9XHJcbiAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBkYXRhLWFkLWNsaWVudD1cImNhLXB1Yi01NDU4MTEyMDI0MzM0MzU5XCIgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LURmWGR6Mmh0UEgwbHNTU3M1bkNUcHVqL3p5NEMrT0dwYW1vRlZ5MzhNVkJuRStJYmJWWVVldytPckNYYVJrZmpcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9qcy9ib290c3RyYXAubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1PZ1ZSdnVBVFAxejdKakhMa3VPVTdYdzcwNCtoODM1THIrNlFMOVV2WWpaRTNJcHU2VHA3NWo3Qmgva1IwSktJXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuLi9sb2dvLmpwZWdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibG9nb19pbWdcIiBzcmM9XCIuLi9sb2dvLmpwZWdcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVjaG1hdGVcIiBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX0+XHJcbiAgICAgICAgICB7XCI8VEVDSF9cIn1cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e1wiTUFURS8+XCJ9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidG9nZ2xlcl9pY29uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgJChcIiNoZWFkZXJfdG9nZ2xlXCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIyZW1cIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyZW1cIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktbGlzdFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTIuNSAxMS41QS41LjUgMCAwIDEgMyAxMWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6bTAtNEEuNS41IDAgMCAxIDMgN2gxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6bTAtNEEuNS41IDAgMCAxIDMgM2gxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NfdG9nZ2xlclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZXJfbWVudVwiPkhvbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2NvbnRhY3RcIn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZXJfbWVudVwiPkNvbnRhY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9hYm91dFwifT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlcl9tZW51XCI+QWJvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJfdG9nZ2xlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfdG9nZ2xlclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0gaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9jb250YWN0XCJ9PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiY29udGFjdFwiPkNvbnRhY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9hYm91dFwifT5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICA8c3BhbiBpZD1cImFib3V0XCI+QWJvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxoMyBpZD1cImhlYWRpbmdcIj57YmxvZy5oZWFkaW5nfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktY2FsZW5kYXItY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC44NTQgNy4xNDZhLjUuNSAwIDAgMSAwIC43MDhsLTMgM2EuNS41IDAgMCAxLS43MDggMGwtMS41LTEuNWEuNS41IDAgMSAxIC43MDgtLjcwOEw3LjUgOS43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMSA0djEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY0SDF6bTEtM2EyIDIgMCAwIDAtMiAydjExYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYzYTIgMiAwIDAgMC0yLTJIMnpcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0zLjUgMGEuNS41IDAgMCAxIC41LjVWMWEuNS41IDAgMCAxLTEgMFYuNWEuNS41IDAgMCAxIC41LS41em05IDBhLjUuNSAwIDAgMSAuNS41VjFhLjUuNSAwIDAgMS0xIDBWLjVhLjUuNSAwIDAgMSAuNS0uNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktcGVuY2lsXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEuMjkzIDEuMjkzYTEgMSAwIDAgMSAxLjQxNCAwbDIgMmExIDEgMCAwIDEgMCAxLjQxNGwtOSA5YTEgMSAwIDAgMS0uMzkuMjQybC0zIDFhMSAxIDAgMCAxLTEuMjY2LTEuMjY1bDEtM2ExIDEgMCAwIDEgLjI0Mi0uMzkxbDktOXpNMTIgMmwyIDItOSA5LTMgMSAxLTMgOS05elwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLjE0NiA2LjM1NGwtMi41LTIuNS43MDgtLjcwOCAyLjUgMi41LS43MDcuNzA4ek0zIDEwdi41YS41LjUgMCAwIDAgLjUuNUg0di41YS41LjUgMCAwIDAgLjUuNUg1di41YS41LjUgMCAwIDAgLjUuNUg2di0xLjVhLjUuNSAwIDAgMC0uNS0uNUg1di0uNWEuNS41IDAgMCAwLS41LS41SDN6XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAge2Jsb2cudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkaW5nX2ltZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Jsb2cuaGVhZGluZ31cclxuICAgICAgICAgICAgICAgIHNyYz17YmxvZy5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbl9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vdGh0ZWNobWF0ZXMuaW4vYmxvZ3MvJHtibG9nLmhlYWRpbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17YmxvZy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXs1MH0gcm91bmQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3RodGVjaG1hdGVzLmluL2Jsb2dzLyR7cmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgIGJsb2cuaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YmxvZy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwSWNvbiBzaXplPXs1MH0gcm91bmQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvV2hhdHNhcHBTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly90aHRlY2htYXRlcy5pbi9ibG9ncy8ke3JlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICBibG9nLmhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cuaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICB2aWE9XCJkc3BlYWtpbmdzb3VsXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBzaXplPXs1MH0gcm91bmQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJoZWFkaW5nIGRlc2NyaXB0aW9uX3N1YlwiXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uX25ldyB9fVxyXG4gICAgICAgICAgICAgID48L3A+XHJcbiAgICAgICAgICAgICAge2Jsb2cuc3ViaGVhZGluZy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgICAga2V5X2ZlYXR1cmUsXHJcbiAgICAgICAgICAgICAgICAgIHByb3MsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnMsXHJcbiAgICAgICAgICAgICAgICAgIGZsaXBrYXJ0LFxyXG4gICAgICAgICAgICAgICAgICBhbWF6b24sXHJcbiAgICAgICAgICAgICAgICB9ID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnRfbmV3ID0gY29udGVudC5zcGxpdChcIlxcblwiKS5qb2luKFwiPGJyLz5cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudF9maW5hbCA9IHJlcGxhY2VDb250ZW50VXJsKGNvbnRlbnRfbmV3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19PjwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ltYWdlSW5zZXJ0KHZhbHVlLnVybCwgdGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudF9maW5hbCB9fT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm8tY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChrZXlfZmVhdHVyZSwgXCJLZXkgRmVhdHVyZXNcIiwgXCJibHVlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByby1jb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KHByb3MsIFwiUHJvc1wiLCBcImdyZWVuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvLWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlckxpc3QoY29ucywgXCJDb25zXCIsIFwicmVkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3JlbmRlckJ1dHRvbihmbGlwa2FydCwgYW1hem9uKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICB7cmVuZGVyQ29uY2x1c2lvbihibG9nLmNvbmNsdXNpb24pfVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJxdWVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7YmxvZy5xdWVzdGlvbnMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YHF1ZXN0aW9uXyR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHF1ZXN0aW9uX2J1dHRvbl8ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5BbnN3ZXIoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWNoZXZyb24tZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD17YGFuc3dlcl8ke2luZGV4fWB9Pnt2YWx1ZS5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RlY2gtbWF0ZS05ODQ2NzMxYjZcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGlkPVwiQm9sZFwiXHJcbiAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwibTIzLjk5NCAyNHYtLjAwMWguMDA2di04LjgwMmMwLTQuMzA2LS45MjctNy42MjMtNS45NjEtNy42MjMtMi40MiAwLTQuMDQ0IDEuMzI4LTQuNzA3IDIuNTg3aC0uMDd2LTIuMTg1aC00Ljc3M3YxNi4wMjNoNC45N3YtNy45MzRjMC0yLjA4OS4zOTYtNC4xMDkgMi45ODMtNC4xMDkgMi41NDkgMCAyLjU4NyAyLjM4NCAyLjU4NyA0LjI0M3Y3LjgwMXpcIiAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2elwiIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIm0yLjg4MiAwYy0xLjU5MSAwLTIuODgyIDEuMjkxLTIuODgyIDIuODgyczEuMjkxIDIuOTA5IDIuODgyIDIuOTA5IDIuODgyLTEuMzE4IDIuODgyLTIuOTA5Yy0uMDAxLTEuNTkxLTEuMjkyLTIuODgyLTIuODgyLTIuODgyelwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdGhlX3RlY2hfbWF0ZV8/cz0wOFwiPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cInR3aXR0ZXJcIiBzcmM9XCIuLi90d2l0dGVyLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UZWNoX01hdGUtMTAxMTg0ODU4Mzk3NTcyL1wiPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cImZhY2Vib29rXCIgc3JjPVwiLi4vZmFjZWJvb2suc3ZnXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RoZV90ZWNoX21hdGVfLz9obD1lblwiPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cImluc3RhZ3JhbVwiIHNyYz1cIi4uL2luc3RhZ3JhbS5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvYWJvdXRcIn0+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcIiM4MDgwODBcIiwgbWFyZ2luTGVmdDogMTAgfX0+QWJvdXQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9jb250YWN0XCJ9PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCIjODA4MDgwXCIsIG1hcmdpbkxlZnQ6IDEwIH19PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3lcIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9wcml2YWN5XCJ9PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCIjODA4MDgwXCIsIG1hcmdpbkxlZnQ6IDEwIH19PlByaXZhY3k8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgX19odG1sOiBcIiYjMTY5Q29weXJpZ2h0IDIwMjAgQWxsIHJpZ2h0cyByZXNlcnZlZFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXBsYWNlID0gKHN0cikgPT4ge1xyXG4gICAgbGV0IGFycmF5ID0gc3RyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJyYXkgPSBhcnJheS5yZXBsYWNlKFwiX1wiLCBcIiBcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0W1wicGFyYW1zXCJdW1wiYmxvZ1wiXSwgXCJjb250ZXh0XCIpO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL3plbi1uZXd0b24tNTcyM2ZlLm5ldGxpZnkuYXBwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9hcGkvYmxvZz9oZWFkaW5nPSR7cmVwbGFjZShcclxuICAgICAgY29udGV4dFtcInBhcmFtc1wiXVtcImJsb2dcIl1cclxuICAgICl9YFxyXG4gICk7XHJcbiAgY29uc3QgYmxvZyA9IGF3YWl0IHJlcy5kYXRhWzBdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYmxvZyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcGxhY2UgPSAoc3RyKSA9PiB7XHJcbiAgICBsZXQgYXJyYXkgPSBzdHI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJheSA9IGFycmF5LnJlcGxhY2UoXCIgXCIsIFwiX1wiKTtcclxuICAgICAgYXJyYXkgPSBhcnJheS5yZXBsYWNlKFwifFwiLCBcIiU3Q1wiKTtcclxuICAgICAgYXJyYXkgPSBhcnJheS5yZXBsYWNlKFwiP1wiLCBcIiUzRlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9O1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIFwiaHR0cHM6Ly96ZW4tbmV3dG9uLTU3MjNmZS5uZXRsaWZ5LmFwcC8ubmV0bGlmeS9mdW5jdGlvbnMvYXBpL1wiXHJcbiAgKTtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5kYXRhLmFycjtcclxuXHJcbiAgY29uc3QgYXJyYXkgPSBwb3N0cy5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBgLyR7cmVwbGFjZSh2YWwubmFtZSl9YDtcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coYXJyYXksIFwiaXMgYXJyYXlcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBhcnJheSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==