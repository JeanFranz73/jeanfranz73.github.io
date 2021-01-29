/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/checkbox.js":
/*!****************************!*\
  !*** ./src/js/checkbox.js ***!
  \****************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dampMultiple = 0.8;
var Checkbox = /*#__PURE__*/function () {
  function Checkbox(_ref) {
    var _this = this;

    var x = _ref.x,
        y = _ref.y,
        _ref$dx = _ref.dx,
        dx = _ref$dx === void 0 ? 0 : _ref$dx,
        _ref$dy = _ref.dy,
        dy = _ref$dy === void 0 ? 0 : _ref$dy;

    _classCallCheck(this, Checkbox);

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.children = [];
    this.elem = document.createElement("input");
    this.elem.type = "checkbox";
    this.elem.classList.add('checkbox');
    this.elem.classList.add('form-check-input');
    this.elem.style.top = this.y + 'px';
    this.elem.style.left = this.x + 'px';

    this.onChecked = function () {};

    this.onUnChecked = function () {};

    this.elem.onchange = function () {
      if (_this.elem.checked) {
        _this.onChecked(_this);
      } else {
        _this.onUnChecked(_this);
      }
    };
  }

  _createClass(Checkbox, [{
    key: "pullTowards",
    value: function pullTowards(parent) {
      var xDiff = this.x - parent.x;
      var yDiff = this.y - parent.y;
      var dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
      var desiredDist = 20;
      var push = desiredDist - dist;
      this.dx += 0.01 * push * (xDiff / dist);
      this.dy += 0.01 * push * (yDiff / dist);
    }
  }, {
    key: "pushAway",
    value: function pushAway(other) {
      var xDiff = this.x - other.x;
      var yDiff = this.y - other.y;
      var dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
      this.dx += 1 / dist * (xDiff / dist);
      this.dy += 1 / dist * (yDiff / dist);
    }
  }, {
    key: "update",
    value: function update() {
      var _iterator = _createForOfIteratorHelper(this.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          child.pullTowards(this);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.elem.checked) {
        this.dx = 0;
        this.dy = 0;
        return;
      }

      this.x += this.dx;
      this.y += this.dy;
      this.dx *= dampMultiple;
      this.dy *= dampMultiple;
      this.elem.style.left = this.x + 'px';
      this.elem.style.top = this.y + 'px';
    }
  }, {
    key: "makeChild",
    value: function makeChild() {
      var child = new Checkbox({
        x: this.x + Math.random() - 0.5,
        y: this.y + Math.random() - 0.5
      });
      return child;
    }
  }]);

  return Checkbox;
}();

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ "./src/js/checkbox.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.container = document.querySelector('#content');
    this.checkboxes = [];
    this.addCheckbox(new _checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]({
      x: 0,
      y: 0
    }));
  }
  /**
   * Simulate time passing.
   */


  _createClass(Controller, [{
    key: "update",
    value: function update() {
      var _iterator = _createForOfIteratorHelper(this.checkboxes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var checkbox = _step.value;
          checkbox.update();

          if (!checkbox.elem.checked) {
            var _iterator2 = _createForOfIteratorHelper(this.checkboxes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var other = _step2.value;

                if (other === checkbox) {
                  continue;
                }

                checkbox.pushAway(other);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "addCheckbox",
    value: function addCheckbox(checkbox) {
      var _this = this;

      this.container.append(checkbox.elem);

      checkbox.onChecked = function (checkbox) {
        var numChildren = Math.floor(2 + 2 * Math.random());

        for (var i = 0; i < numChildren; i++) {
          var child = checkbox.makeChild();
          checkbox.children.push(child);

          _this.addCheckbox(child);
        }
      };

      checkbox.onUnChecked = function (checkbox) {
        var _iterator3 = _createForOfIteratorHelper(checkbox.children),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var child = _step3.value;

            _this.removeCheckbox(child);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        checkbox.children = [];
      };

      this.checkboxes.push(checkbox);
    }
  }, {
    key: "removeCheckbox",
    value: function removeCheckbox(checkbox) {
      // Remove all its children (and their children, etc)
      var _iterator4 = _createForOfIteratorHelper(checkbox.children),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var child = _step4.value;
          this.removeCheckbox(child);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.container.removeChild(checkbox.elem);
      this.checkboxes.splice(this.checkboxes.indexOf(checkbox), 1);
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/js/controller.js");

var lastTime;
var controller;

function init() {
  lastTime = Date.now();
  controller = new _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"](); // Kick off the update loop

  window.requestAnimationFrame(everyFrame);
} // TODO: Make tweak this to allow frame skipping for slow computers. Maybe.


function everyFrame() {
  update();
  requestAnimationFrame(everyFrame);
}

function update() {
  var curTime = Date.now();
  var dt = (curTime - lastTime) / 1000;
  controller.update(dt);
  lastTime = curTime;
}

init();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map