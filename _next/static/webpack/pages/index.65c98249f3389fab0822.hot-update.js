webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Card.js":
/*!****************************!*\
  !*** ./Components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\self\\tech_master-master\\blogging\\Components\\Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Card = function Card(_ref) {
  var value = _ref.value;
  var description;
  console.log(value.meta_description.slice(0, 160), value.heading);
  description = value.meta_description.slice(0, 160) + "........";
  var week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["Jan", "Febr", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
  var times = new Date(value.createdAt);
  var day = week_days[times.getDay()];
  var date = times.getDate();
  var month = months[times.getMonth()];
  var year = times.getFullYear();
  var time = " ".concat(date, " ").concat(month, " ").concat(year);

  var replace = function replace(str) {
    var array = str;

    for (var i = 0; i < str.length; i++) {
      array = array.replace(" ", "_");
      console.log(array, "previous");
      array = array.replace("%7C", "|");
    }

    return array;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: "/blogs[blog]"
    },
    as: {
      pathname: "" + "/".concat(replace(value.heading))
    },
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " blog-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "component-description ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, value.heading), " ", __jsx("div", {
    className: "auth-des",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
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
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }
  })), " "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, time)), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
      columnNumber: 19
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  })), " ", value.username)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, description)), __jsx("div", {
    className: " image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: value.heading,
    style: {
      padding: 0
    },
    src: value.imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }))))));
};

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIm1ldGFfZGVzY3JpcHRpb24iLCJzbGljZSIsImhlYWRpbmciLCJ3ZWVrX2RheXMiLCJtb250aHMiLCJ0aW1lcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJkYXkiLCJnZXREYXkiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0aW1lIiwicmVwbGFjZSIsInN0ciIsImFycmF5IiwiaSIsImxlbmd0aCIsInBhdGhuYW1lIiwidXNlcm5hbWUiLCJwYWRkaW5nIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQixNQUFJQyxXQUFKO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNJLGdCQUFOLENBQXVCQyxLQUF2QixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxDQUFaLEVBQWtETCxLQUFLLENBQUNNLE9BQXhEO0FBRUFMLGFBQVcsR0FBR0QsS0FBSyxDQUFDSSxnQkFBTixDQUF1QkMsS0FBdkIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsSUFBdUMsVUFBckQ7QUFFQSxNQUFNRSxTQUFTLEdBQUcsQ0FDaEIsUUFEZ0IsRUFFaEIsUUFGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsV0FKZ0IsRUFLaEIsVUFMZ0IsRUFNaEIsUUFOZ0IsRUFPaEIsVUFQZ0IsQ0FBbEI7QUFTQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixLQURhLEVBRWIsTUFGYSxFQUdiLE9BSGEsRUFJYixPQUphLEVBS2IsS0FMYSxFQU1iLE1BTmEsRUFPYixNQVBhLEVBUWIsTUFSYSxFQVNiLE9BVGEsRUFV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SUFBUCxDQXhCRixDQURGLEVBMkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBQyxLQURSO0FBRUUsVUFBTSxFQUFDLEtBRlQ7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLGFBQVMsRUFBQyxjQUpaO0FBS0UsUUFBSSxFQUFDLGNBTFA7QUFNRSxTQUFLLEVBQUMsNEJBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQ0UsaUJBQVUsU0FEWjtBQUVFLEtBQUMsRUFBQyxnS0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFZRTtBQUNFLGlCQUFVLFNBRFo7QUFFRSxLQUFDLEVBQUMsdUtBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREYsRUFpQlMsR0FqQlQsRUFrQkdwQixLQUFLLENBQUMyQixRQWxCVCxDQTNCRixDQUZGLEVBa0RFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTFCLFdBQUosQ0FsREYsQ0FERixFQXFERTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVELEtBQUssQ0FBQ00sT0FEYjtBQUVFLFNBQUssRUFBRTtBQUFFc0IsYUFBTyxFQUFFO0FBQVgsS0FGVDtBQUdFLE9BQUcsRUFBRTVCLEtBQUssQ0FBQzZCLFFBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBckRGLENBREYsQ0FURixDQURGLENBREY7QUE2RUQsQ0E3SEQ7O0tBQU05QixJO0FBK0hTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NWM5ODI0OWYzMzg5ZmFiMDgyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBDYXJkID0gKHsgdmFsdWUgfSkgPT4ge1xuICB2YXIgZGVzY3JpcHRpb247XG4gIGNvbnNvbGUubG9nKHZhbHVlLm1ldGFfZGVzY3JpcHRpb24uc2xpY2UoMCwgMTYwKSwgdmFsdWUuaGVhZGluZyk7XG5cbiAgZGVzY3JpcHRpb24gPSB2YWx1ZS5tZXRhX2Rlc2NyaXB0aW9uLnNsaWNlKDAsIDE2MCkgKyBcIi4uLi4uLi4uXCI7XG5cbiAgY29uc3Qgd2Vla19kYXlzID0gW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXTtcbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJyXCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVnLlwiLFxuICAgIFwiU2VwdC5cIixcbiAgICBcIk9jdC5cIixcbiAgICBcIk5vdi5cIixcbiAgICBcIkRlYy5cIixcbiAgXTtcbiAgbGV0IHRpbWVzID0gbmV3IERhdGUodmFsdWUuY3JlYXRlZEF0KTtcbiAgbGV0IGRheSA9IHdlZWtfZGF5c1t0aW1lcy5nZXREYXkoKV07XG4gIGxldCBkYXRlID0gdGltZXMuZ2V0RGF0ZSgpO1xuICBsZXQgbW9udGggPSBtb250aHNbdGltZXMuZ2V0TW9udGgoKV07XG4gIGxldCB5ZWFyID0gdGltZXMuZ2V0RnVsbFllYXIoKTtcblxuICBsZXQgdGltZSA9IGAgJHtkYXRlfSAke21vbnRofSAke3llYXJ9YDtcbiAgY29uc3QgcmVwbGFjZSA9IChzdHIpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBzdHI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIFxuICAgICAgYXJyYXkgPSBhcnJheS5yZXBsYWNlKFwiIFwiLCBcIl9cIik7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGFycmF5LCBcInByZXZpb3VzXCIpO1xuICAgICAgYXJyYXkgPSBhcnJheS5yZXBsYWNlKFwiJTdDXCIsIFwifFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e3tcbiAgICAgICAgICBwYXRobmFtZTogYC9ibG9nc1tibG9nXWAsXG4gICAgICAgIH19XG4gICAgICAgIGFzPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgYC8ke3JlcGxhY2UodmFsdWUuaGVhZGluZyl9YCxcbiAgICAgICAgfX1cbiAgICAgICAgcGFzc0hyZWZcbiAgICAgID5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmxvZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWRlc2NyaXB0aW9uIFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj57dmFsdWUuaGVhZGluZ308L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1kZXNcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktY2FsZW5kYXItY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC44NTQgNy4xNDZhLjUuNSAwIDAgMSAwIC43MDhsLTMgM2EuNS41IDAgMCAxLS43MDggMGwtMS41LTEuNWEuNS41IDAgMSAxIC43MDgtLjcwOEw3LjUgOS43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMSA0djEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY0SDF6bTEtM2EyIDIgMCAwIDAtMiAydjExYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYzYTIgMiAwIDAgMC0yLTJIMnpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zLjUgMGEuNS41IDAgMCAxIC41LjVWMWEuNS41IDAgMCAxLTEgMFYuNWEuNS41IDAgMCAxIC41LS41em05IDBhLjUuNSAwIDAgMSAuNS41VjFhLjUuNSAwIDAgMS0xIDBWLjVhLjUuNSAwIDAgMSAuNS0uNXpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLXBlbmNpbFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTExLjI5MyAxLjI5M2ExIDEgMCAwIDEgMS40MTQgMGwyIDJhMSAxIDAgMCAxIDAgMS40MTRsLTkgOWExIDEgMCAwIDEtLjM5LjI0MmwtMyAxYTEgMSAwIDAgMS0xLjI2Ni0xLjI2NWwxLTNhMSAxIDAgMCAxIC4yNDItLjM5MWw5LTl6TTEyIDJsMiAyLTkgOS0zIDEgMS0zIDktOXpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuMTQ2IDYuMzU0bC0yLjUtMi41LjcwOC0uNzA4IDIuNSAyLjUtLjcwNy43MDh6TTMgMTB2LjVhLjUuNSAwIDAgMCAuNS41SDR2LjVhLjUuNSAwIDAgMCAuNS41SDV2LjVhLjUuNSAwIDAgMCAuNS41SDZ2LTEuNWEuNS41IDAgMCAwLS41LS41SDV2LS41YS41LjUgMCAwIDAtLjUtLjVIM3pcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+e1wiIFwifVxuICAgICAgICAgICAgICAgICAge3ZhbHVlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXt2YWx1ZS5oZWFkaW5nfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e3ZhbHVlLmltYWdlVXJsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9