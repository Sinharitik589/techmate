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
      // console.log(value, "value");
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
    "data-ad-client": "ca-pub-5458112024334359",
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 181,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "../logo.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  })), __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "logo",
    className: "logo_img",
    src: "../logo.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      lineNumber: 196,
      columnNumber: 9
    }
  }, "<TECH_", __jsx("span", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      lineNumber: 200,
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
      lineNumber: 206,
      columnNumber: 11
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "desc_toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, "Contact"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "toggler_menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }, "About"))))), __jsx("div", {
    id: "header_toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header_toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
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
      lineNumber: 242,
      columnNumber: 15
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, "Contact"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, "About"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, __jsx("h3", {
    id: "heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, blog.heading), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 15
    }
  }), __jsx("h5", {
    className: "time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
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
      lineNumber: 267,
      columnNumber: 19
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  })), time), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
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
      lineNumber: 291,
      columnNumber: 19
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 21
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  })), blog.username)), __jsx("img", {
    className: "heading_img",
    alt: blog.heading,
    src: blog.imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "icon_container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareButton"], {
    url: "https://thtechmates.in/blogs/".concat(blog.heading),
    quote: blog.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 19
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"], {
    size: 50,
    round: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  }))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappShareButton"], {
    url: "https://thtechmates.in/blogs/".concat(replace(blog.heading)),
    title: blog.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 19
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappIcon"], {
    size: 50,
    round: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 21
    }
  }))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterShareButton"], {
    url: "https://thtechmates.in/blogs/".concat(replace(blog.heading)),
    title: blog.heading,
    via: "dspeakingsoul",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"], {
    size: 50,
    round: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
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
      lineNumber: 349,
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
        lineNumber: 367,
        columnNumber: 19
      }
    }, __jsx("h3", {
      dangerouslySetInnerHTML: {
        __html: title
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "subheading-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 21
      }
    }, imageInsert(value.url, title)), __jsx("p", {
      dangerouslySetInnerHTML: {
        __html: content_final
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "pro-con",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 21
      }
    }, renderList(key_feature, "Key Features", "blue")), __jsx("div", {
      className: "pro-con",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 21
      }
    }, renderList(pros, "Pros", "green")), __jsx("div", {
      className: "pro-con",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 21
      }
    }, renderList(cons, "Cons", "red")), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 21
      }
    }, renderButton(flipkart, amazon)));
  }), renderConclusion(blog.conclusion)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "quest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 17
    }
  }, blog.questions.map(function (value, index) {
    return __jsx("div", {
      className: "quest-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 23
      }
    }, __jsx("div", {
      id: "question_".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
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
        lineNumber: 401,
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
        lineNumber: 407,
        columnNumber: 29
      }
    }, __jsx("path", {
      "fill-rule": "evenodd",
      d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 31
      }
    })))), __jsx("p", {
      id: "answer_".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 25
      }
    }, value.answer));
  }))))))), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/tech-mate-9846731b6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
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
      lineNumber: 435,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 15
    }
  }), __jsx("path", {
    d: "m.396 7.977h4.976v16.023h-4.976z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 15
    }
  }), __jsx("path", {
    d: "m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 15
    }
  }))), __jsx("a", {
    href: "https://twitter.com/the_tech_mate_?s=08",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "twitter",
    src: "../twitter.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/Tech_Mate-101184858397572/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "facebook",
    src: "../facebook.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/the_tech_mate_/?hl=en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "instagram",
    src: "../instagram.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    as: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
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
      lineNumber: 461,
      columnNumber: 13
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    as: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
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
      lineNumber: 464,
      columnNumber: 13
    }
  }, "Contact")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/privacy",
    as: "/privacy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
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
      lineNumber: 467,
      columnNumber: 13
    }
  }, "Privacy"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 9
    }
  }, __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: "&#169Copyright 2020 All rights reserved"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2Jsb2ddLmpzIl0sIm5hbWVzIjpbImJsb2ciLCJyZXBsYWNlIiwic3RyIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaW1hZ2VJbnNlcnQiLCJ1cmwiLCJ0aXRsZSIsIm9wZW5BbnN3ZXIiLCJpbmRleCIsIiQiLCJ0b2dnbGUiLCJpcyIsImh0bWwiLCJyZXBsYWNlQ29udGVudFVybCIsInN0cmluZyIsInVybHMiLCJtYXAiLCJ2YWx1ZSIsImtleXdvcmQiLCJyZW5kZXJDb25jbHVzaW9uIiwiY29uY2x1c2lvbl9maW5hbCIsIl9faHRtbCIsInJlbmRlckJ1dHRvbiIsImZsaXBrYXJ0IiwiYW1hem9uIiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicmVuZGVyTGlzdCIsImtleV9mZWF0dXJlIiwiY29sIiwia2V5X2ZlYXR1cmVfYXJyIiwic3BsaXQiLCJ2YWwiLCJ3ZWVrX2RheXMiLCJtb250aHMiLCJ0aW1lcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJkYXkiLCJnZXREYXkiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0aW1lIiwiZGVzY3JpcHRpb25fbmV3IiwiZGVzY3JpcHRpb24iLCJqb2luIiwiaGVhZGluZyIsIm1ldGFfZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsInNsaWRlVG9nZ2xlIiwidXNlcm5hbWUiLCJzdWJoZWFkaW5nIiwiY29udGVudCIsInByb3MiLCJjb25zIiwiY29udGVudF9uZXciLCJjb250ZW50X2ZpbmFsIiwiY29uY2x1c2lvbiIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiYW5zd2VyIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7O0FBRWUsK0VBQWM7QUFBQSxNQUFYQSxJQUFXLFFBQVhBLElB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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsMkJBQXVCLEVBQUU7QUFDdkI5QyxZQUFNLEVBQUU7QUFEZSxLQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F0Q0YsQ0E3UkYsQ0FERjtBQThVRCxDQTljRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bYmxvZ10uNWUzYTMxMmQ3NmRlN2I0ZGY1MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcclxuICBGYWNlYm9va0ljb24sXHJcbiAgVHdpdHRlckljb24sXHJcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gIFdoYXRzYXBwSWNvbixcclxuICBXaGF0c2FwcFNoYXJlQnV0dG9uLFxyXG59IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgYmxvZyB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlcGxhY2UgPSAoc3RyKSA9PiB7XHJcbiAgICBsZXQgYXJyYXkgPSBzdHI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJheSA9IGFycmF5LnJlcGxhY2UoXCIgXCIsIFwiX1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9O1xyXG4gIGNvbnN0IGltYWdlSW5zZXJ0ID0gKHVybCwgdGl0bGUpID0+IHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgcmV0dXJuIDxpbWcgYWx0PXt0aXRsZX0gc3JjPXt1cmx9PjwvaW1nPjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9wZW5BbnN3ZXIgPSAoaW5kZXgpID0+IHtcclxuICAgICQoYCNhbnN3ZXJfJHtpbmRleH1gKS50b2dnbGUoKTtcclxuICAgIGlmICgkKGAjYW5zd2VyXyR7aW5kZXh9YCkuaXMoXCI6aGlkZGVuXCIpKSB7XHJcbiAgICAgICQoYCNxdWVzdGlvbl9idXR0b25fJHtpbmRleH1gKVxyXG4gICAgICAgIC5odG1sKGA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzTmFtZT1cImJpIGJpLWNoZXZyb24tZG93blwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6XCIvPlxyXG48L3N2Zz5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoYCNxdWVzdGlvbl9idXR0b25fJHtpbmRleH1gKVxyXG4gICAgICAgIC5odG1sKGA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzTmFtZT1cImJpIGJpLWNoZXZyb24tdXBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDYgNmEuNS41IDAgMCAxLS43MDguNzA4TDggNS43MDdsLTUuNjQ2IDUuNjQ3YS41LjUgMCAwIDEtLjcwOC0uNzA4bDYtNnpcIi8+XHJcbjwvc3ZnPmApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVwbGFjZUNvbnRlbnRVcmwgPSAoc3RyKSA9PiB7XHJcbiAgICBsZXQgc3RyaW5nID0gc3RyO1xyXG5cclxuICAgIGJsb2cudXJscy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCBcInZhbHVlXCIpO1xyXG4gICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShcclxuICAgICAgICBgJHt2YWx1ZS5rZXl3b3JkfWAsXHJcbiAgICAgICAgYDxhIGhyZWY9JHt2YWx1ZS51cmx9PiR7dmFsdWUua2V5d29yZH08L2E+YFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDb25jbHVzaW9uID0gKGNvbmNsdXNpb25fZmluYWwpID0+IHtcclxuICAgIGlmIChjb25jbHVzaW9uX2ZpbmFsLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgIDxoMz5Db25jbHVzaW9uPC9oMz5cclxuICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29uY2x1c2lvbl9maW5hbCB9fT48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKGZsaXBrYXJ0LCBhbWF6b24pID0+IHtcclxuICAgIGlmIChmbGlwa2FydC5sZW5ndGggPiAwICYmIGFtYXpvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxhIGhyZWY9e2FtYXpvbn0gY2xhc3NOYW1lPVwiY29sLW1kLTQgYnV5LWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAwLCBwYWRkaW5nOiAwIH19XHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzA4LzVmL2Q4LzA4NWZkOGY3ODE5ZGVlM2I3MTZkYTczZDNiMmRlNjFjLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiYnV5IG9uIGFtYXpvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+QnV5IG9uIGFtYXpvbjwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29sLW1kLTQgb2Zmc2V0LW1kLTQgYnV5LWJ1dHRvblwiIGhyZWY9e2ZsaXBrYXJ0fT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMCwgcGFkZGluZzogMCB9fVxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGF0ZXN0bmV3cy5mcmVzaGVyc2xpdmUuY29tL2ltYWdlcy9hcnRpY2xlcy9pYW5zL29yaWdpbi8yMDIwLzA3LzE0L3dhbG1hcnQtbGVkLWludmVzdG9ycy1wdW1wLWluLTEyLWJuLWluLWZsaXBrYXJ0LWdyb3VwLTVmMGRhODk5NGQzMjItMTU5NDczMDY0OS5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImJ1eSBvbiBmbGlwa2FydFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwYjI3NWJcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICBCdXkgb24gZmxpcGthcnRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGlzdCA9IChrZXlfZmVhdHVyZSwgdmFsdWUsIGNvbCkgPT4ge1xyXG4gICAgaWYgKGtleV9mZWF0dXJlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGtleV9mZWF0dXJlX2FyciA9IGtleV9mZWF0dXJlLnNwbGl0KFwiLFwiKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbCB9fT57dmFsdWV9PC9kaXY+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtrZXlfZmVhdHVyZV9hcnIubWFwKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+e3ZhbH08L2xpPjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHdlZWtfZGF5cyA9IFtcclxuICAgIFwiU3VuZGF5XCIsXHJcbiAgICBcIk1vbmRheVwiLFxyXG4gICAgXCJUdWVzZGF5XCIsXHJcbiAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgXCJUaHVyc2RheVwiLFxyXG4gICAgXCJGcmlkYXlcIixcclxuICAgIFwiU2F0dXJkYXlcIixcclxuICBdO1xyXG4gIGNvbnN0IG1vbnRocyA9IFtcclxuICAgIFwiSmFudWFyeVwiLFxyXG4gICAgXCJGZWJydWFyeVwiLFxyXG4gICAgXCJNYXJjaFwiLFxyXG4gICAgXCJBcHJpbFwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuZVwiLFxyXG4gICAgXCJKdWx5XCIsXHJcbiAgICBcIkF1Z3VzdFwiLFxyXG4gICAgXCJTZXB0ZW1iZXJcIixcclxuICAgIFwiT2N0b2JlclwiLFxyXG4gICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgXCJEZWNlbWJlclwiLFxyXG4gIF07XHJcbiAgbGV0IHRpbWVzID0gbmV3IERhdGUoYmxvZy5jcmVhdGVkQXQpO1xyXG4gIGxldCBkYXkgPSB3ZWVrX2RheXNbdGltZXMuZ2V0RGF5KCldO1xyXG4gIGxldCBkYXRlID0gdGltZXMuZ2V0RGF0ZSgpO1xyXG4gIGxldCBtb250aCA9IG1vbnRoc1t0aW1lcy5nZXRNb250aCgpXTtcclxuICBsZXQgeWVhciA9IHRpbWVzLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIGxldCB0aW1lID0gYCR7ZGF5fSAke2RhdGV9ICR7bW9udGh9ICR7eWVhcn1gO1xyXG4gIGxldCBkZXNjcmlwdGlvbl9uZXcgPSBibG9nLmRlc2NyaXB0aW9uLnNwbGl0KFwiXFxuXCIpLmpvaW4oXCI8YnIvPlwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPntibG9nLmhlYWRpbmd9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtibG9nLmhlYWRpbmd9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YmxvZy5tZXRhX2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIHsvKiBPcGVuIEdyYXBoIC8gRmFjZWJvb2sgKi99XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXHJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly90aHRlY2htYXRlcy5pbi8ke3JlcGxhY2UoYmxvZy5oZWFkaW5nKX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Jsb2cuaGVhZGluZ30gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YmxvZy5tZXRhX2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtibG9nLmltYWdlVXJsfSAvPlxyXG4gICAgICAgIHsvKiBUd2l0dGVyICovfVxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL3RodGVjaG1hdGVzLmluLyR7cmVwbGFjZShibG9nLmhlYWRpbmcpfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtibG9nLmhlYWRpbmd9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17YmxvZy5tZXRhX2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2Jsb2cuaW1hZ2VVcmx9IC8+XHJcblxyXG4gICAgICAgIDxzY3JpcHQgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNTQ1ODExMjAyNDMzNDM1OVwiIGFzeW5jIHNyYz1cImh0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLnNsaW0ubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1EZlhkejJodFBIMGxzU1NzNW5DVHB1ai96eTRDK09HcGFtb0ZWeTM4TVZCbkUrSWJiVllVZXcrT3JDWGFSa2ZqXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi4uL2xvZ28uanBlZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJsb2dvX2ltZ1wiIHNyYz1cIi4uL2xvZ28uanBlZ1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZWNobWF0ZVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5cclxuICAgICAgICAgIHtcIjxURUNIX1wifVxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT57XCJNQVRFLz5cIn08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0b2dnbGVyX2ljb25cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2hlYWRlcl90b2dnbGVcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjJlbVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjJlbVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1saXN0XCJcclxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMi41IDExLjVBLjUuNSAwIDAgMSAzIDExaDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXptMC00QS41LjUgMCAwIDEgMyA3aDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXptMC00QS41LjUgMCAwIDEgMyAzaDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXpcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY190b2dnbGVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlcl9tZW51XCI+SG9tZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvY29udGFjdFwifT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlcl9tZW51XCI+Q29udGFjdDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2Fib3V0XCJ9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVyX21lbnVcIj5BYm91dDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBpZD1cImhlYWRlcl90b2dnbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl90b2dnbGVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fSBpZD1cImhvbWVcIj5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2NvbnRhY3RcIn0+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2Fib3V0XCJ9PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiYWJvdXRcIj5BYm91dDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPGgzIGlkPVwiaGVhZGluZ1wiPntibG9nLmhlYWRpbmd9PC9oMz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1jYWxlbmRhci1jaGVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLjg1NCA3LjE0NmEuNS41IDAgMCAxIDAgLjcwOGwtMyAzYS41LjUgMCAwIDEtLjcwOCAwbC0xLjUtMS41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDcuNSA5Ljc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMCAxIC43MDggMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDR2MTBhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjRIMXptMS0zYTIgMiAwIDAgMC0yIDJ2MTFhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjNhMiAyIDAgMCAwLTItMkgyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMuNSAwYS41LjUgMCAwIDEgLjUuNVYxYS41LjUgMCAwIDEtMSAwVi41YS41LjUgMCAwIDEgLjUtLjV6bTkgMGEuNS41IDAgMCAxIC41LjVWMWEuNS41IDAgMCAxLTEgMFYuNWEuNS41IDAgMCAxIC41LS41elwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIHt0aW1lfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1wZW5jaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMS4yOTMgMS4yOTNhMSAxIDAgMCAxIDEuNDE0IDBsMiAyYTEgMSAwIDAgMSAwIDEuNDE0bC05IDlhMSAxIDAgMCAxLS4zOS4yNDJsLTMgMWExIDEgMCAwIDEtMS4yNjYtMS4yNjVsMS0zYTEgMSAwIDAgMSAuMjQyLS4zOTFsOS05ek0xMiAybDIgMi05IDktMyAxIDEtMyA5LTl6XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuMTQ2IDYuMzU0bC0yLjUtMi41LjcwOC0uNzA4IDIuNSAyLjUtLjcwNy43MDh6TTMgMTB2LjVhLjUuNSAwIDAgMCAuNS41SDR2LjVhLjUuNSAwIDAgMCAuNS41SDV2LjVhLjUuNSAwIDAgMCAuNS41SDZ2LTEuNWEuNS41IDAgMCAwLS41LS41SDV2LS41YS41LjUgMCAwIDAtLjUtLjVIM3pcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICB7YmxvZy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmdfaW1nXCJcclxuICAgICAgICAgICAgICAgIGFsdD17YmxvZy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtibG9nLmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly90aHRlY2htYXRlcy5pbi9ibG9ncy8ke2Jsb2cuaGVhZGluZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtibG9nLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezUwfSByb3VuZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vdGh0ZWNobWF0ZXMuaW4vYmxvZ3MvJHtyZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmxvZy5oZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtibG9nLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8V2hhdHNhcHBJY29uIHNpemU9ezUwfSByb3VuZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3RodGVjaG1hdGVzLmluL2Jsb2dzLyR7cmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgIGJsb2cuaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YmxvZy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHZpYT1cImRzcGVha2luZ3NvdWxcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIHNpemU9ezUwfSByb3VuZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Ud2l0dGVyU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1YmhlYWRpbmcgZGVzY3JpcHRpb25fc3ViXCJcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb25fbmV3IH19XHJcbiAgICAgICAgICAgICAgPjwvcD5cclxuICAgICAgICAgICAgICB7YmxvZy5zdWJoZWFkaW5nLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICBrZXlfZmVhdHVyZSxcclxuICAgICAgICAgICAgICAgICAgcHJvcyxcclxuICAgICAgICAgICAgICAgICAgY29ucyxcclxuICAgICAgICAgICAgICAgICAgZmxpcGthcnQsXHJcbiAgICAgICAgICAgICAgICAgIGFtYXpvbixcclxuICAgICAgICAgICAgICAgIH0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudF9uZXcgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpLmpvaW4oXCI8YnIvPlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50X2ZpbmFsID0gcmVwbGFjZUNvbnRlbnRVcmwoY29udGVudF9uZXcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX0+PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VJbnNlcnQodmFsdWUudXJsLCB0aXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50X2ZpbmFsIH19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByby1jb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KGtleV9mZWF0dXJlLCBcIktleSBGZWF0dXJlc1wiLCBcImJsdWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvLWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlckxpc3QocHJvcywgXCJQcm9zXCIsIFwiZ3JlZW5cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm8tY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChjb25zLCBcIkNvbnNcIiwgXCJyZWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj57cmVuZGVyQnV0dG9uKGZsaXBrYXJ0LCBhbWF6b24pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJDb25jbHVzaW9uKGJsb2cuY29uY2x1c2lvbil9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInF1ZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtibG9nLnF1ZXN0aW9ucy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgcXVlc3Rpb25fJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcXVlc3Rpb25fYnV0dG9uXyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkFuc3dlcihpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktY2hldnJvbi1kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPXtgYW5zd2VyXyR7aW5kZXh9YH0+e3ZhbHVlLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGVjaC1tYXRlLTk4NDY3MzFiNlwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaWQ9XCJCb2xkXCJcclxuICAgICAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMjMuOTk0IDI0di0uMDAxaC4wMDZ2LTguODAyYzAtNC4zMDYtLjkyNy03LjYyMy01Ljk2MS03LjYyMy0yLjQyIDAtNC4wNDQgMS4zMjgtNC43MDcgMi41ODdoLS4wN3YtMi4xODVoLTQuNzczdjE2LjAyM2g0Ljk3di03LjkzNGMwLTIuMDg5LjM5Ni00LjEwOSAyLjk4My00LjEwOSAyLjU0OSAwIDIuNTg3IDIuMzg0IDIuNTg3IDQuMjQzdjcuODAxelwiIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIm0uMzk2IDcuOTc3aDQuOTc2djE2LjAyM2gtNC45NzZ6XCIgLz5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90aGVfdGVjaF9tYXRlXz9zPTA4XCI+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwidHdpdHRlclwiIHNyYz1cIi4uL3R3aXR0ZXIuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1RlY2hfTWF0ZS0xMDExODQ4NTgzOTc1NzIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiZmFjZWJvb2tcIiBzcmM9XCIuLi9mYWNlYm9vay5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlX3RlY2hfbWF0ZV8vP2hsPWVuXCI+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiaW5zdGFncmFtXCIgc3JjPVwiLi4vaW5zdGFncmFtLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9hYm91dFwifT5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzgwODA4MFwiLCBtYXJnaW5MZWZ0OiAxMCB9fT5BYm91dDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2NvbnRhY3RcIn0+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcIiM4MDgwODBcIiwgbWFyZ2luTGVmdDogMTAgfX0+Q29udGFjdDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeVwiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL3ByaXZhY3lcIn0+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcIiM4MDgwODBcIiwgbWFyZ2luTGVmdDogMTAgfX0+UHJpdmFjeTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICBfX2h0bWw6IFwiJiMxNjlDb3B5cmlnaHQgMjAyMCBBbGwgcmlnaHRzIHJlc2VydmVkXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcGxhY2UgPSAoc3RyKSA9PiB7XHJcbiAgICBsZXQgYXJyYXkgPSBzdHI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJheSA9IGFycmF5LnJlcGxhY2UoXCJfXCIsIFwiIFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9Oy8qIFxyXG4gIGNvbnNvbGUubG9nKGNvbnRleHRbXCJwYXJhbXNcIl1bXCJibG9nXCJdLCBcImNvbnRleHRcIik7ICovXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vemVuLW5ld3Rvbi01NzIzZmUubmV0bGlmeS5hcHAvLm5ldGxpZnkvZnVuY3Rpb25zL2FwaS9ibG9nP2hlYWRpbmc9JHtyZXBsYWNlKFxyXG4gICAgICBjb250ZXh0W1wicGFyYW1zXCJdW1wiYmxvZ1wiXVxyXG4gICAgKX1gXHJcbiAgKTtcclxuICBjb25zdCBibG9nID0gYXdhaXQgcmVzLmRhdGFbMF07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBibG9nLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcmVwbGFjZSA9IChzdHIpID0+IHtcclxuICAgIGxldCBhcnJheSA9IHN0cjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFycmF5ID0gYXJyYXkucmVwbGFjZShcIiBcIiwgXCJfXCIpO1xyXG4gICAgICBhcnJheSA9IGFycmF5LnJlcGxhY2UoXCJ8XCIsIFwiJTdDXCIpO1xyXG4gICAgICBhcnJheSA9IGFycmF5LnJlcGxhY2UoXCI/XCIsIFwiJTNGXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH07XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgXCJodHRwczovL3plbi1uZXd0b24tNTcyM2ZlLm5ldGxpZnkuYXBwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9hcGkvXCJcclxuICApO1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmRhdGEuYXJyO1xyXG5cclxuICBjb25zdCBhcnJheSA9IHBvc3RzLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIGAvJHtyZXBsYWNlKHZhbC5uYW1lKX1gO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhhcnJheSwgXCJpcyBhcnJheVwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGFycmF5LFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9