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
      array = array.replace("|", "%7C");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIm1ldGFfZGVzY3JpcHRpb24iLCJzbGljZSIsImhlYWRpbmciLCJ3ZWVrX2RheXMiLCJtb250aHMiLCJ0aW1lcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJkYXkiLCJnZXREYXkiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0aW1lIiwicmVwbGFjZSIsInN0ciIsImFycmF5IiwiaSIsImxlbmd0aCIsInBhdGhuYW1lIiwidXNlcm5hbWUiLCJwYWRkaW5nIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQixNQUFJQyxXQUFKO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNJLGdCQUFOLENBQXVCQyxLQUF2QixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxDQUFaLEVBQWtETCxLQUFLLENBQUNNLE9BQXhEO0FBRUFMLGFBQVcsR0FBR0QsS0FBSyxDQUFDSSxnQkFBTixDQUF1QkMsS0FBdkIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsSUFBdUMsVUFBckQ7QUFFQSxNQUFNRSxTQUFTLEdBQUcsQ0FDaEIsUUFEZ0IsRUFFaEIsUUFGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsV0FKZ0IsRUFLaEIsVUFMZ0IsRUFNaEIsUUFOZ0IsRUFPaEIsVUFQZ0IsQ0FBbEI7QUFTQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixLQURhLEVBRWIsTUFGYSxFQUdiLE9BSGEsRUFJYixPQUphLEVBS2IsS0FMYSxFQU1iLE1BTmEsRUFPYixNQVBhLEVBUWIsTUFSYSxFQVNiLE9BVGEsRUFV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QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsS0FEUjtBQUVFLFVBQU0sRUFBQyxLQUZUO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFJRSxhQUFTLEVBQUMsY0FKWjtBQUtFLFFBQUksRUFBQyxjQUxQO0FBTUUsU0FBSyxFQUFDLDRCQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUNFLGlCQUFVLFNBRFo7QUFFRSxLQUFDLEVBQUMsZ0tBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBWUU7QUFDRSxpQkFBVSxTQURaO0FBRUUsS0FBQyxFQUFDLHVLQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLEVBaUJTLEdBakJULEVBa0JHcEIsS0FBSyxDQUFDMkIsUUFsQlQsQ0EzQkYsQ0FGRixFQWtERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUkxQixXQUFKLENBbERGLENBREYsRUFxREU7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFRCxLQUFLLENBQUNNLE9BRGI7QUFFRSxTQUFLLEVBQUU7QUFBRXNCLGFBQU8sRUFBRTtBQUFYLEtBRlQ7QUFHRSxPQUFHLEVBQUU1QixLQUFLLENBQUM2QixRQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXJERixDQURGLENBVEYsQ0FERixDQURGO0FBNkVELENBN0hEOztLQUFNOUIsSTtBQStIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTc5MTUxMDhmMWU4MWY4YmM1MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ2FyZCA9ICh7IHZhbHVlIH0pID0+IHtcbiAgdmFyIGRlc2NyaXB0aW9uO1xuICBjb25zb2xlLmxvZyh2YWx1ZS5tZXRhX2Rlc2NyaXB0aW9uLnNsaWNlKDAsIDE2MCksIHZhbHVlLmhlYWRpbmcpO1xuXG4gIGRlc2NyaXB0aW9uID0gdmFsdWUubWV0YV9kZXNjcmlwdGlvbi5zbGljZSgwLCAxNjApICsgXCIuLi4uLi4uLlwiO1xuXG4gIGNvbnN0IHdlZWtfZGF5cyA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViclwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Zy5cIixcbiAgICBcIlNlcHQuXCIsXG4gICAgXCJPY3QuXCIsXG4gICAgXCJOb3YuXCIsXG4gICAgXCJEZWMuXCIsXG4gIF07XG4gIGxldCB0aW1lcyA9IG5ldyBEYXRlKHZhbHVlLmNyZWF0ZWRBdCk7XG4gIGxldCBkYXkgPSB3ZWVrX2RheXNbdGltZXMuZ2V0RGF5KCldO1xuICBsZXQgZGF0ZSA9IHRpbWVzLmdldERhdGUoKTtcbiAgbGV0IG1vbnRoID0gbW9udGhzW3RpbWVzLmdldE1vbnRoKCldO1xuICBsZXQgeWVhciA9IHRpbWVzLmdldEZ1bGxZZWFyKCk7XG5cbiAgbGV0IHRpbWUgPSBgICR7ZGF0ZX0gJHttb250aH0gJHt5ZWFyfWA7XG4gIGNvbnN0IHJlcGxhY2UgPSAoc3RyKSA9PiB7XG4gICAgbGV0IGFycmF5ID0gc3RyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBcbiAgICAgIGFycmF5ID0gYXJyYXkucmVwbGFjZShcIiBcIiwgXCJfXCIpO1xuICAgICAgXG4gICAgICBcbiAgICAgIGFycmF5ID0gYXJyYXkucmVwbGFjZShcInxcIiwgXCIlN0NcIik7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IGAvYmxvZ3NbYmxvZ11gLFxuICAgICAgICB9fVxuICAgICAgICBhcz17e1xuICAgICAgICAgIHBhdGhuYW1lOiBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGAvJHtyZXBsYWNlKHZhbHVlLmhlYWRpbmcpfWAsXG4gICAgICAgIH19XG4gICAgICAgIHBhc3NIcmVmXG4gICAgICA+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJsb2ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1kZXNjcmlwdGlvbiBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e3ZhbHVlLmhlYWRpbmd9PC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZGVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWNhbGVuZGFyLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuODU0IDcuMTQ2YS41LjUgMCAwIDEgMCAuNzA4bC0zIDNhLjUuNSAwIDAgMS0uNzA4IDBsLTEuNS0xLjVhLjUuNSAwIDEgMSAuNzA4LS43MDhMNy41IDkuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwIDEgLjcwOCAwelwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEgNHYxMGExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTFWNEgxem0xLTNhMiAyIDAgMCAwLTIgMnYxMWEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWM2EyIDIgMCAwIDAtMi0ySDJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMy41IDBhLjUuNSAwIDAgMSAuNS41VjFhLjUuNSAwIDAgMS0xIDBWLjVhLjUuNSAwIDAgMSAuNS0uNXptOSAwYS41LjUgMCAwIDEgLjUuNVYxYS41LjUgMCAwIDEtMSAwVi41YS41LjUgMCAwIDEgLjUtLjV6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1wZW5jaWxcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMS4yOTMgMS4yOTNhMSAxIDAgMCAxIDEuNDE0IDBsMiAyYTEgMSAwIDAgMSAwIDEuNDE0bC05IDlhMSAxIDAgMCAxLS4zOS4yNDJsLTMgMWExIDEgMCAwIDEtMS4yNjYtMS4yNjVsMS0zYTEgMSAwIDAgMSAuMjQyLS4zOTFsOS05ek0xMiAybDIgMi05IDktMyAxIDEtMyA5LTl6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLjE0NiA2LjM1NGwtMi41LTIuNS43MDgtLjcwOCAyLjUgMi41LS43MDcuNzA4ek0zIDEwdi41YS41LjUgMCAwIDAgLjUuNUg0di41YS41LjUgMCAwIDAgLjUuNUg1di41YS41LjUgMCAwIDAgLjUuNUg2di0xLjVhLjUuNSAwIDAgMC0uNS0uNUg1di0uNWEuNS41IDAgMCAwLS41LS41SDN6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIHt2YWx1ZS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD17dmFsdWUuaGVhZGluZ31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXt2YWx1ZS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==