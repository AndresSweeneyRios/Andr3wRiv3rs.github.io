webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.sass */ "./pages/projects/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../projects.js */ "./projects.js");







var _jsxFileName = "D:\\webdev\\poisonapple\\pages\\projects\\index.js";





var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var elements = document.querySelectorAll(".".concat(_index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.screenshots));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var screenshots = _step.value;
          screenshots.scrollInterval = setInterval(function () {
            return _this.scrollScreenshots(screenshots);
          }, 16.6);
        };

        for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(elements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "scrollScreenshots",
    value: function scrollScreenshots(screenshots) {
      var _screenshots$children = screenshots.children[0],
          top = _screenshots$children.style.top,
          clientHeight = _screenshots$children.clientHeight;
      top = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(top || 0) - 1;
      if (top * -1 >= clientHeight / 2) top = 0;
      screenshots.children[0].style.top = top + 'px';
    }
  }, {
    key: "getProjects",
    value: function getProjects() {
      var projects = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop2 = function _loop2() {
          var project = _step2.value;
          var screenshots = [],
              screenshotsDuplicate = [],
              links = [],
              handles = [];

          var Screenshot = function Screenshot(props) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
              key: props.key,
              className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.screenshot,
              style: {
                backgroundImage: "\n                            url(/static/projects/".concat(project.id, "/screenshots/").concat(props.screenshot, ".png)\n                        ")
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            });
          };

          if (project.screenshots) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(project.screenshots), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var screenshot = _step3.value;
                screenshots.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Screenshot, {
                  screenshot: screenshot,
                  key: screenshot,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: this
                }));
                screenshotsDuplicate.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Screenshot, {
                  screenshot: screenshot,
                  key: screenshot + '0',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                }));
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
          /* Duplicate screenshots for infinite scrolling */


          screenshots.push.apply(screenshots, screenshotsDuplicate);

          if (project.handles) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(project.handles), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var handle = _step4.value;
                handles.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
                  key: handle.value,
                  type: handle.type,
                  target: "_blank",
                  className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.handle,
                  href: {
                    twitter: "https://twitter.com/@",
                    instagram: "https://www.instagram.com/",
                    gamejolt: "https://gamejolt.com/@"
                  }[handle.type] + handle.value,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: this
                }, "@", handle.value));
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          }

          projects.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            key: project.id,
            className: "".concat(_index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.project),
            style: {
              backgroundImage: "url(/static/projects/".concat(project.id, "/").concat(project.id, ".png)")
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.info,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
            className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, project.title), project.links.map(function (link) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
              key: link.url,
              type: link.type,
              target: "_blank",
              className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.link,
              href: link.url,
              style: {
                backgroundImage: "url(/static/icons/".concat(link.type, "_circle.svg)")
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            });
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.description,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, project.description)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.screenshots,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, screenshots)))));
        };

        for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(_projects_js__WEBPACK_IMPORTED_MODULE_10__["default"]), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return projects;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.projects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, this.getProjects());
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=projects.js.466cf47b733f8bbdd9a4.hot-update.js.map