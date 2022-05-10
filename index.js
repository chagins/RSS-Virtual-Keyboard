/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/js/key.js":
/*!***********************!*\
  !*** ./src/js/key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Key)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Key = /*#__PURE__*/function () {
  /**
   * Represents a virtual keyboard key
   * @constructor
   * @param {Object} key - the virtual keyboard key
   * @param {String} key.code - code of key {@link Key#code}
   * @param {String} key.key - label of key
   * @param {String} key.size - size of key (standard|medium|wide|full|space)
   * @param {String} key.type - type of key (text|control)
   * @param {String} key.shiftAnalogue - key shift analogue (text|control)
   * @param {HTMLElement} key.parentContainer - DOM parent element
   */
  function Key(_ref) {
    var code = _ref.code,
        key = _ref.key,
        size = _ref.size,
        type = _ref.type,
        shiftAnalogue = _ref.shiftAnalogue,
        parentContainer = _ref.parentContainer;

    _classCallCheck(this, Key);

    this.code = code;
    this.key = key;
    this.size = size;
    this.type = type;
    this.shiftAnalogue = shiftAnalogue;
    this.parentContainer = parentContainer;
    this.backupKey = key;
    this.button = null;
  }
  /**
   * Creates a virtual key and places it in the container
   * @return {HTMLElement} DOM element of the key
   */


  _createClass(Key, [{
    key: "create",
    value: function create() {
      var key = document.createElement('button');
      key.id = this.code;
      key.classList.add('key', "".concat(this.size));
      key.innerText = this.key;
      this.parentContainer.appendChild(key);
      this.button = key;
      return key;
    }
    /**
     * Call a virtual button press
     * @param {Object} key - the virtual key
     * @param {Boolean} key.altKey - ALT key flag
     * @param {Boolean} key.ctrlKey - CTRL key flag
     * @param {Boolean} key.shiftKey - SHIFT key flag
     * @param {Boolean} key.repeat - repeated key flag
     */

  }, {
    key: "keyDown",
    value: function keyDown(_ref2) {
      var altKey = _ref2.altKey,
          ctrlKey = _ref2.ctrlKey,
          shiftKey = _ref2.shiftKey,
          repeat = _ref2.repeat;
      this.button.classList.add('active');
      this.altKey = altKey;
      this.ctrlKey = ctrlKey;
      this.shiftKey = shiftKey;
      this.repeat = repeat;
    }
    /**
     * Call a virtual button up
     * @param {Object} key - the virtual key
     * @param {Boolean} key.altKey - ALT key flag
     * @param {Boolean} key.ctrlKey - CTRL key flag
     * @param {Boolean} key.shiftKey - SHIFT key flag
     */

  }, {
    key: "keyUp",
    value: function keyUp(_ref3) {
      var altKey = _ref3.altKey,
          ctrlKey = _ref3.ctrlKey,
          shiftKey = _ref3.shiftKey;
      this.button.classList.remove('active');
      this.altKey = altKey;
      this.ctrlKey = ctrlKey;
      this.shiftKey = shiftKey;
    }
  }]);

  return Key;
}();



/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/js/key.js");
/* harmony import */ var _keycodes_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycodes_en */ "./src/js/keycodes_en.js");
/* harmony import */ var _keycodes_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keycodes_ru */ "./src/js/keycodes_ru.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea */ "./src/js/textarea.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





/** local storage variable for language settings
 * @constant
 * @type {string}
 * @default
 */

var LANG_LOCAL_VAR = 'RSS_LANGUAGE';
/** default language for keys
 * @constant
 * @type {string}
 * @default
 */

var DEFAULT_LANG = 'EN';
/** keys data arrays for different languages
 * @constant
 * @type {object}
 * @default
 */

var KEY_CODES = {
  EN: _keycodes_en__WEBPACK_IMPORTED_MODULE_1__["default"],
  RU: _keycodes_ru__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/** Class represents a virtual keyboard */

var Keyboard = /*#__PURE__*/function () {
  /**
   * initialize a virtual keyboard object
   * @constructor
   * @param {Object} keyboard - the virtual keyboard
   * @param {String} keyboard.id - element id
   * @param {HTMLElement} keyboard.parentContainer - DOM parent element
   */
  function Keyboard(_ref) {
    var id = _ref.id,
        parentContainer = _ref.parentContainer;

    _classCallCheck(this, Keyboard);

    this.id = id;
    this.parentContainer = parentContainer;
    this.keys = new Map();
    this.keyboard = null;
    this.isCapsLockOn = false;
    this.language = null;
  }
  /**
   * Creates a virtual keyboard and fills it with keys
   * @return {HTMLElement} DOM element of the keyboard container
   */


  _createClass(Keyboard, [{
    key: "create",
    value: function create() {
      var keyboard = document.createElement('div');
      keyboard.id = this.id;
      this.parentContainer.appendChild(keyboard);
      this.keyboard = keyboard;
      this.loadKeys();
      this.keyboard.addEventListener('mousedown', this.keyVirtualDown.bind(this));
      this.keyboard.addEventListener('mouseup', this.keyVirtualUp.bind(this));
      return keyboard;
    }
    /**
     * Call a virtual button press from physical button
     * @event document#keydown - keyboard keydown event
     */

  }, {
    key: "keyDown",
    value: function keyDown(_ref2) {
      var event = _ref2.event;
      if (!event.code) return;
      var key = this.keys.get(event.code);

      if (key) {
        event.preventDefault();
        _textarea__WEBPACK_IMPORTED_MODULE_3__["default"].activateTextArea();
        this.keyVirtualDown(event);
      }
    }
    /**
     * Call a virtual button up from physical button
     * @event document#keyup - keyboard keyup event
     */

  }, {
    key: "keyUp",
    value: function keyUp(_ref3) {
      var event = _ref3.event;
      if (!event.code) return;
      var key = this.keys.get(event.code);

      if (key) {
        event.preventDefault();
        _textarea__WEBPACK_IMPORTED_MODULE_3__["default"].activateTextArea();
        this.keyVirtualUp(event);
      }
    }
    /**
     * Processing control keys down
     * @param {Object} key - the virtual key (Shift, CapsLock and etc)
     */

  }, {
    key: "keyDownControl",
    value: function keyDownControl(_ref4) {
      var key = _ref4.key,
          event = _ref4.event;

      switch (key.key) {
        case 'Shift':
          this.switchToUpperCase();
          this.keyboard.classList.add('upper');
          this.switchOnShiftKeys();
          break;

        case 'CapsLock':
          if (this.isCapsLockOn) {
            this.switchToLowerCase();
            this.keyboard.classList.remove('caps', 'upper');
            this.isCapsLockOn = false;
          } else {
            this.switchToUpperCase();
            this.keyboard.classList.add('caps', 'upper');
            this.isCapsLockOn = true;
          }

          break;

        case 'Tab':
          if (event) {
            event.preventDefault();
            _textarea__WEBPACK_IMPORTED_MODULE_3__["default"].controlInput('Tab');
          }

          break;

        default:
          break;
      }
    }
    /**
     * Processing control keys up
     * @param {Object} key - the virtual key (Shift, CapsLock and etc)
     */

  }, {
    key: "keyUpControl",
    value: function keyUpControl(_ref5) {
      var key = _ref5.key;

      switch (key.key) {
        case 'Shift':
          this.switchToLowerCase();
          this.keyboard.classList.remove('upper');
          this.switchOffShiftKeys();
          break;

        case 'Alt':
          if (key.ctrlKey) {
            this.switchLanguage();
          }

          break;

        default:
          break;
      }

      _textarea__WEBPACK_IMPORTED_MODULE_3__["default"].activateTextArea();
    }
    /**
     * Call a virtual button press from mouse
     * @event document#mousedown - mouse mousedown event
     */

  }, {
    key: "keyVirtualDown",
    value: function keyVirtualDown(event) {
      var code = null;

      if (event.type === 'mousedown') {
        code = event.target.id;
      } else if (event.type === 'keydown') {
        code = event.code;
      }

      if (!code) return;
      var key = this.keys.get(code);

      if (key) {
        key.keyDown({
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          shiftKey: event.shiftKey,
          repeat: event.repeat
        });

        switch (key.type) {
          case 'text':
            _textarea__WEBPACK_IMPORTED_MODULE_3__["default"].textInput(key.key);
            break;

          case 'control':
            _textarea__WEBPACK_IMPORTED_MODULE_3__["default"].controlInput(code);
            this.keyDownControl({
              key: key
            });
            break;

          default:
            break;
        }
      }
    }
    /**
     * Call a virtual button up from mouse
     * @event document#mouseup - mouse mouseup event
     */

  }, {
    key: "keyVirtualUp",
    value: function keyVirtualUp(event) {
      var code = null;

      if (event.type === 'mouseup') {
        code = event.target.id;
      } else if (event.type === 'keyup') {
        code = event.code;
      }

      if (!code) return;
      var key = this.keys.get(code);

      if (key) {
        key.keyUp({
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          shiftKey: event.shiftKey
        });

        switch (key.type) {
          case 'lang':
            this.switchLanguage();
            break;

          case 'control':
            this.keyUpControl({
              key: key
            });
            break;

          default:
            break;
        }
      }

      _textarea__WEBPACK_IMPORTED_MODULE_3__["default"].activateTextArea();
    }
    /**
     * Switch keyboard keys to upper case
     */

  }, {
    key: "switchToUpperCase",
    value: function switchToUpperCase() {
      var _this = this;

      this.keys.forEach(function (value, key) {
        var btnKey = _this.keys.get(key);

        if (btnKey.type === 'text') {
          btnKey.key = btnKey.key.toUpperCase();
        }
      });
    }
    /**
     * Switch keyboard keys to lower case
     */

  }, {
    key: "switchToLowerCase",
    value: function switchToLowerCase() {
      var _this2 = this;

      this.keys.forEach(function (value, key) {
        var btnKey = _this2.keys.get(key);

        if (btnKey.type === 'text') {
          btnKey.key = btnKey.key.toLowerCase();
        }
      });
    }
    /**
     * Show shift analogue keyboard keys
     */

  }, {
    key: "switchOnShiftKeys",
    value: function switchOnShiftKeys() {
      var _this3 = this;

      this.keys.forEach(function (value, key) {
        var btnKey = _this3.keys.get(key);

        if (btnKey.shiftAnalogue) {
          btnKey.button.innerText = btnKey.shiftAnalogue; // btnKey.backupKey = btnKey.key;

          btnKey.key = btnKey.shiftAnalogue;
        }
      });
    }
    /**
     * Hide shift analogue keyboard keys
     */

  }, {
    key: "switchOffShiftKeys",
    value: function switchOffShiftKeys() {
      var _this4 = this;

      this.keys.forEach(function (value, key) {
        var btnKey = _this4.keys.get(key);

        if (btnKey.shiftAnalogue) {
          btnKey.key = btnKey.backupKey;
          btnKey.button.innerText = btnKey.key;
        }
      });
    }
    /**
     * Switch language keys
     */

  }, {
    key: "switchLanguage",
    value: function switchLanguage() {
      switch (this.language) {
        case 'EN':
          this.language = 'RU';
          break;

        case 'RU':
          this.language = 'EN';
          break;

        default:
          break;
      }

      this.createKeys(KEY_CODES[this.language]);
    }
    /**
     * Load storage settings and run key's creation
     */

  }, {
    key: "loadKeys",
    value: function loadKeys() {
      if (localStorage.getItem(LANG_LOCAL_VAR)) {
        this.language = localStorage.getItem(LANG_LOCAL_VAR);
      }

      if (this.language in KEY_CODES) {
        this.createKeys(KEY_CODES[this.language]);
      } else {
        this.language = DEFAULT_LANG;
        this.createKeys(KEY_CODES[this.language]);
      }
    }
    /**
     * Save storage settings
     */

  }, {
    key: "saveKeys",
    value: function saveKeys() {
      localStorage.setItem(LANG_LOCAL_VAR, this.language);
    }
    /**
     * Create keyboard keys
     * @param {Array} keyCodesLang - array with keys language data
     */

  }, {
    key: "createKeys",
    value: function createKeys(keyCodesLang) {
      var _this5 = this;

      this.keys.clear();
      this.keyboard.innerHTML = '';
      keyCodesLang.forEach(function (item) {
        var key = new _key__WEBPACK_IMPORTED_MODULE_0__["default"]({
          code: item.code,
          key: item.key,
          size: item.size,
          type: item.type,
          shiftAnalogue: item.shiftAnalogue,
          parentContainer: _this5.keyboard
        });
        key.create();

        _this5.keys.set(key.code, key);
      });

      if (this.isCapsLockOn) {
        this.switchToUpperCase();
        this.keyboard.classList.add('caps', 'upper');
        this.isCapsLockOn = true;
      }

      this.saveKeys();
    }
  }]);

  return Keyboard;
}();



/***/ }),

/***/ "./src/js/keycodes_en.js":
/*!*******************************!*\
  !*** ./src/js/keycodes_en.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  code: 'Backquote',
  key: '`',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '~'
}, {
  code: 'Digit1',
  key: '1',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '!'
}, {
  code: 'Digit2',
  key: '2',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '@'
}, {
  code: 'Digit3',
  key: '3',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '#'
}, {
  code: 'Digit4',
  key: '4',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '$'
}, {
  code: 'Digit5',
  key: '5',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '%'
}, {
  code: 'Digit6',
  key: '6',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '^'
}, {
  code: 'Digit7',
  key: '7',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '&'
}, {
  code: 'Digit8',
  key: '8',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '*'
}, {
  code: 'Digit9',
  key: '9',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '('
}, {
  code: 'Digit0',
  key: '0',
  size: 'standard',
  type: 'text',
  shiftAnalogue: ')'
}, {
  code: 'Minus',
  key: '-',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '_'
}, {
  code: 'Equal',
  key: '=',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '+'
}, {
  code: 'Backspace',
  key: 'Backspace',
  size: 'wide',
  type: 'control'
}, {
  code: 'Tab',
  key: 'Tab',
  size: 'medium',
  type: 'control'
}, {
  code: 'KeyQ',
  key: 'q',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyW',
  key: 'w',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyE',
  key: 'e',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyR',
  key: 'r',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyT',
  key: 't',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyY',
  key: 'y',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyU',
  key: 'u',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyI',
  key: 'i',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyO',
  key: 'o',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyP',
  key: 'p',
  size: 'standard',
  type: 'text'
}, {
  code: 'BracketLeft',
  key: '[',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '{'
}, {
  code: 'BracketRight',
  key: ']',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '}'
}, {
  code: 'Backslash',
  key: '\\',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '|'
}, {
  code: 'Delete',
  key: 'Del',
  size: 'standard',
  type: 'control'
}, {
  code: 'CapsLock',
  key: 'CapsLock',
  size: 'double',
  type: 'control'
}, {
  code: 'KeyA',
  key: 'a',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyS',
  key: 's',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyD',
  key: 'd',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyF',
  key: 'f',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyG',
  key: 'g',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyH',
  key: 'h',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyJ',
  key: 'j',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyK',
  key: 'k',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyL',
  key: 'l',
  size: 'standard',
  type: 'text'
}, {
  code: 'Semicolon',
  key: ';',
  size: 'standard',
  type: 'text',
  shiftAnalogue: ':'
}, {
  code: 'Quote',
  key: "'",
  size: 'standard',
  type: 'text',
  shiftAnalogue: '"'
}, {
  code: 'Enter',
  key: 'Enter',
  size: 'wide',
  type: 'control'
}, {
  code: 'ShiftLeft',
  key: 'Shift',
  size: 'wide',
  type: 'control'
}, {
  code: 'KeyZ',
  key: 'z',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyX',
  key: 'x',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyC',
  key: 'c',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyV',
  key: 'v',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyB',
  key: 'b',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyN',
  key: 'n',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyM',
  key: 'm',
  size: 'standard',
  type: 'text'
}, {
  code: 'Comma',
  key: ',',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '<'
}, {
  code: 'Period',
  key: '.',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '>'
}, {
  code: 'Slash',
  key: '/',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '?'
}, {
  code: 'ArrowUp',
  key: '▲',
  size: 'standard',
  type: 'text'
}, {
  code: 'ShiftRight',
  key: 'Shift',
  size: 'double',
  type: 'control'
}, {
  code: 'ControlLeft',
  key: 'Ctrl',
  size: 'standard',
  type: 'control'
}, {
  code: 'MetaLeft',
  key: 'Win',
  size: 'standard',
  type: 'control'
}, {
  code: 'Language',
  key: '🌐',
  size: 'standard',
  type: 'lang'
}, {
  code: 'AltLeft',
  key: 'Alt',
  size: 'standard',
  type: 'control'
}, {
  code: 'Space',
  key: ' ',
  size: 'space',
  type: 'control'
}, {
  code: 'AltRight',
  key: 'Alt',
  size: 'standard',
  type: 'control'
}, {
  code: 'ArrowLeft',
  key: '◀',
  size: 'standard',
  type: 'text'
}, {
  code: 'ArrowDown',
  key: '▼',
  size: 'standard',
  type: 'text'
}, {
  code: 'ArrowRight',
  key: '▶',
  size: 'standard',
  type: 'text'
}, {
  code: 'ControlRight',
  key: 'Ctrl',
  size: 'standard',
  type: 'control'
}]);

/***/ }),

/***/ "./src/js/keycodes_ru.js":
/*!*******************************!*\
  !*** ./src/js/keycodes_ru.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  code: 'Backquote',
  key: 'ё',
  size: 'standard',
  type: 'text'
}, {
  code: 'Digit1',
  key: '1',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '!'
}, {
  code: 'Digit2',
  key: '2',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '"'
}, {
  code: 'Digit3',
  key: '3',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '№'
}, {
  code: 'Digit4',
  key: '4',
  size: 'standard',
  type: 'text',
  shiftAnalogue: ';'
}, {
  code: 'Digit5',
  key: '5',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '%'
}, {
  code: 'Digit6',
  key: '6',
  size: 'standard',
  type: 'text',
  shiftAnalogue: ':'
}, {
  code: 'Digit7',
  key: '7',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '?'
}, {
  code: 'Digit8',
  key: '8',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '*'
}, {
  code: 'Digit9',
  key: '9',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '('
}, {
  code: 'Digit0',
  key: '0',
  size: 'standard',
  type: 'text',
  shiftAnalogue: ')'
}, {
  code: 'Minus',
  key: '-',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '_'
}, {
  code: 'Equal',
  key: '=',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '+'
}, {
  code: 'Backspace',
  key: 'Backspace',
  size: 'wide',
  type: 'control'
}, {
  code: 'Tab',
  key: 'Tab',
  size: 'medium',
  type: 'control'
}, {
  code: 'KeyQ',
  key: 'й',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyW',
  key: 'ц',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyE',
  key: 'у',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyR',
  key: 'к',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyT',
  key: 'е',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyY',
  key: 'н',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyU',
  key: 'г',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyI',
  key: 'ш',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyO',
  key: 'щ',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyP',
  key: 'з',
  size: 'standard',
  type: 'text'
}, {
  code: 'BracketLeft',
  key: 'х',
  size: 'standard',
  type: 'text'
}, {
  code: 'BracketRight',
  key: 'ъ',
  size: 'standard',
  type: 'text'
}, {
  code: 'Backslash',
  key: '\\',
  size: 'standard',
  type: 'text',
  shiftAnalogue: '/'
}, {
  code: 'Delete',
  key: 'Del',
  size: 'standard',
  type: 'control'
}, {
  code: 'CapsLock',
  key: 'CapsLock',
  size: 'double',
  type: 'control'
}, {
  code: 'KeyA',
  key: 'ф',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyS',
  key: 'ы',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyD',
  key: 'в',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyF',
  key: 'а',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyG',
  key: 'п',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyH',
  key: 'р',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyJ',
  key: 'о',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyK',
  key: 'л',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyL',
  key: 'д',
  size: 'standard',
  type: 'text'
}, {
  code: 'Semicolon',
  key: 'ж',
  size: 'standard',
  type: 'text'
}, {
  code: 'Quote',
  key: 'э',
  size: 'standard',
  type: 'text'
}, {
  code: 'Enter',
  key: 'Enter',
  size: 'wide',
  type: 'control'
}, {
  code: 'ShiftLeft',
  key: 'Shift',
  size: 'wide',
  type: 'control'
}, {
  code: 'KeyZ',
  key: 'я',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyX',
  key: 'ч',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyC',
  key: 'с',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyV',
  key: 'м',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyB',
  key: 'и',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyN',
  key: 'т',
  size: 'standard',
  type: 'text'
}, {
  code: 'KeyM',
  key: 'ь',
  size: 'standard',
  type: 'text'
}, {
  code: 'Comma',
  key: 'б',
  size: 'standard',
  type: 'text'
}, {
  code: 'Period',
  key: 'ю',
  size: 'standard',
  type: 'text'
}, {
  code: 'Slash',
  key: '.',
  size: 'standard',
  type: 'text',
  shiftAnalogue: ','
}, {
  code: 'ArrowUp',
  key: '▲',
  size: 'standard',
  type: 'text'
}, {
  code: 'ShiftRight',
  key: 'Shift',
  size: 'double',
  type: 'control'
}, {
  code: 'ControlLeft',
  key: 'Ctrl',
  size: 'standard',
  type: 'control'
}, {
  code: 'MetaLeft',
  key: 'Win',
  size: 'standard',
  type: 'control'
}, {
  code: 'Language',
  key: '🌐',
  size: 'standard',
  type: 'lang'
}, {
  code: 'AltLeft',
  key: 'Alt',
  size: 'standard',
  type: 'control'
}, {
  code: 'Space',
  key: ' ',
  size: 'space',
  type: 'control'
}, {
  code: 'AltRight',
  key: 'Alt',
  size: 'standard',
  type: 'control'
}, {
  code: 'ArrowLeft',
  key: '◀',
  size: 'standard',
  type: 'text'
}, {
  code: 'ArrowDown',
  key: '▼',
  size: 'standard',
  type: 'text'
}, {
  code: 'ArrowRight',
  key: '▶',
  size: 'standard',
  type: 'text'
}, {
  code: 'ControlRight',
  key: 'Ctrl',
  size: 'standard',
  type: 'control'
}]);

/***/ }),

/***/ "./src/js/page.js":
/*!************************!*\
  !*** ./src/js/page.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Page = /*#__PURE__*/function () {
  /**
   * Represents a page of site
   * @constructor
   * @param {HTMLDivElement} container - DOM parent div element
   */
  function Page(_ref) {
    var parentContainer = _ref.parentContainer;

    _classCallCheck(this, Page);

    this.parentContainer = parentContainer;
  }
  /**
   * Creates a standart page with header, title, main and footer
   * @return {{Object}} page's elements object: header, title, main, footer
   */


  _createClass(Page, [{
    key: "create",
    value: function create() {
      var header = document.createElement('header');
      header.id = 'header';
      this.parentContainer.appendChild(header);
      var title = document.createElement('h1');
      title.id = 'title';
      title.innerText = 'RSS Virtual Keyboard';
      header.appendChild(title);
      var main = document.createElement('main');
      main.id = 'main';
      this.parentContainer.appendChild(main);
      var footer = document.createElement('footer');
      footer.id = 'footer';
      this.parentContainer.appendChild(footer);
      return {
        header: header,
        title: title,
        main: main,
        footer: footer
      };
    }
  }]);

  return Page;
}();



/***/ }),

/***/ "./src/js/textarea.js":
/*!****************************!*\
  !*** ./src/js/textarea.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextArea)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var TextArea = /*#__PURE__*/function () {
  /**
   * Represents a text area
   * @constructor
   * @param {Object} textarea - the textarea element
   * @param {String} textarea.id - element id
   * @param {HTMLElement} textarea.parentContainer - DOM parent element
   */
  function TextArea(_ref) {
    var id = _ref.id,
        parentContainer = _ref.parentContainer;

    _classCallCheck(this, TextArea);

    this.id = id;
    this.parentContainer = parentContainer;

    _classStaticPrivateFieldSpecSet(TextArea, TextArea, _self, this);
  }
  /**
   * Creates a text field with the ability to enter text
   * @return {HTMLElement} DOM element of the textarea
   */


  _createClass(TextArea, [{
    key: "create",
    value: function create() {
      _classStaticPrivateFieldSpecSet(TextArea, TextArea, _textarea, document.createElement('textarea'));

      _classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea).id = this.id;
      _classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea).autofocus = true;
      this.parentContainer.appendChild(_classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea));
      return _classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea);
    }
    /**
     * Allows to enter text
     * @param {String} symbol - new letter for input
     */

  }], [{
    key: "textInput",
    value: function textInput(symbol) {
      var textArea = _classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea);

      var str = textArea.value;
      var start = textArea.selectionStart;
      var end = textArea.selectionEnd;
      str = "".concat(str.slice(0, start)).concat(symbol).concat(str.slice(end));
      textArea.value = str;
      textArea.selectionStart = start + 1;
      textArea.selectionEnd = start + 1;
    }
    /**
     * Allows to use control/edit buttons
     * @param {String} symbol - control button code
     */

  }, {
    key: "controlInput",
    value: function controlInput(symbol) {
      var textArea = _classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea);

      var str = textArea.value;
      var start = textArea.selectionStart;
      var end = textArea.selectionEnd;

      switch (symbol) {
        case 'Backspace':
          if (end === 0) break;

          if (start === end) {
            str = "".concat(str.slice(0, start - 1)).concat(str.slice(end));
            textArea.value = str;
            textArea.selectionStart = start - 1;
            textArea.selectionEnd = start - 1;
          } else {
            str = "".concat(str.slice(0, start)).concat(str.slice(end));
            textArea.value = str;
            textArea.selectionStart = start;
            textArea.selectionEnd = start;
          }

          break;

        case 'Tab':
          str = "".concat(str.slice(0, start), "\t").concat(str.slice(end));
          textArea.value = str;
          textArea.selectionStart = start + 1;
          textArea.selectionEnd = start + 1;
          break;

        case 'Enter':
          str = "".concat(str.slice(0, start), "\r\n").concat(str.slice(end));
          textArea.value = str;
          textArea.selectionStart = start + 1;
          textArea.selectionEnd = start + 1;
          break;

        case 'Space':
          str = "".concat(str.slice(0, start), " ").concat(str.slice(end));
          textArea.value = str;
          textArea.selectionStart = start + 1;
          textArea.selectionEnd = start + 1;
          break;

        case 'Delete':
          if (start === end) {
            str = "".concat(str.slice(0, start)).concat(str.slice(end + 1));
          } else {
            str = "".concat(str.slice(0, start)).concat(str.slice(end));
          }

          textArea.value = str;
          textArea.selectionStart = start;
          textArea.selectionEnd = start;
          break;

        default:
          break;
      }
    }
  }, {
    key: "getTextArea",
    value: function getTextArea() {
      return _classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea);
    }
  }, {
    key: "getSelf",
    value: function getSelf() {
      return _classStaticPrivateFieldSpecGet(TextArea, TextArea, _self);
    }
  }, {
    key: "activateTextArea",
    value: function activateTextArea() {
      _classStaticPrivateFieldSpecGet(TextArea, TextArea, _textarea).focus();
    }
  }]);

  return TextArea;
}();

var _textarea = {
  writable: true,
  value: null
};
var _self = {
  writable: true,
  value: null
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/RobotoMono-Regular.eot */ "./src/assets/fonts/RobotoMono-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/RobotoMono-Regular.woff */ "./src/assets/fonts/RobotoMono-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/RobotoMono-Regular.ttf */ "./src/assets/fonts/RobotoMono-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n/*! reset.css*/\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 14px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: \"Roboto Mono\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: local(\"Roboto Mono\"), local(\"RobotoMono-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  padding: 5px;\n}\n\n#container {\n  margin: 0 auto;\n  padding: 5px;\n  max-width: 768px;\n  height: fit-content;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  border: 3px solid #000;\n  border-radius: 10px;\n  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n}\n#container #title {\n  text-align: center;\n  font-weight: normal;\n  font-size: 20px;\n}\n#container #main {\n  margin: 0 auto;\n  width: fit-content;\n}\n#container #textarea {\n  padding: 5px;\n  width: 700px;\n  max-width: 700px;\n  height: 100px;\n  min-height: 100px;\n  display: block;\n  margin: 0 auto;\n  font-size: 12px;\n  border: 1px solid #000;\n  border-radius: 5px;\n}\n#container #keyboard {\n  margin: 0 auto;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: repeat(47, 10px);\n  grid-template-rows: repeat(5, 40px);\n  gap: 5px;\n}\n#container #keyboard.caps #CapsLock {\n  color: #0067ee;\n  background-color: #fff;\n}\n#container .key {\n  height: 40px;\n  color: #000;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  background-color: #f3f3f3;\n  border: 2px solid #000;\n  border-radius: 7px;\n  cursor: pointer;\n  box-shadow: 0 4px #292929;\n  user-select: none;\n}\n#container .key:hover {\n  color: #0067ee;\n  background-color: #fff;\n}\n#container .key.active {\n  box-shadow: 0 1px #292929;\n  transform: translateY(3px);\n}\n#container .key.standard {\n  grid-column: span 3;\n  font-size: 13px;\n}\n#container #keyboard.upper .key.standard {\n  text-transform: capitalize;\n}\n#container .key.medium {\n  grid-column: span 5;\n}\n#container .key.double {\n  grid-column: span 6;\n}\n#container .key.wide {\n  grid-column: span 8;\n}\n#container .key.space {\n  grid-column: span 20;\n}\n#container #footer {\n  padding: 10px 0 5px;\n  margin: 0 auto;\n  width: 700px;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: justify;\n}\n#container #hintDiscord {\n  align-self: flex-end;\n  position: relative;\n}\n#container #hintDiscord a {\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/styles/_normalize.scss","webpack://./src/styles/style.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_dimensions.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA;EAAmB,MAAA;EACnB,8BAAA;EAAgC,MAAA;ACAlC;;ADGA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ACFF;;ADKA;;EAAA;AAIA;EACE,cAAA;ACHF;;ADMA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;ACJF;;ADOA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA;EAAyB,MAAA;EACzB,SAAA;EAAW,MAAA;EACX,iBAAA;EAAmB,MAAA;ACHrB;;ADMA;;;EAAA;AAKA;EACE,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;ACFlB;;ADKA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;ACJF;;ADOA;;;EAAA;AAKA;EACE,mBAAA;EAAqB,MAAA;EACrB,0BAAA;EAA4B,MAAA;EAC5B,iCAAA;EAAmC,MAAA;ACFrC;;ADKA;;EAAA;AAIA;;EAEE,mBAAA;ACHF;;ADMA;;;EAAA;AAKA;;;EAGE,iCAAA;EAAmC,MAAA;EACnC,cAAA;EAAgB,MAAA;ACFlB;;ADKA;;EAAA;AAIA;EACE,cAAA;ACHF;;ADMA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ACJF;;ADOA;EACE,eAAA;ACJF;;ADOA;EACE,WAAA;ACJF;;ADOA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;ACNF;;ADSA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA;EAAsB,MAAA;EACtB,eAAA;EAAiB,MAAA;EACjB,iBAAA;EAAmB,MAAA;EACnB,SAAA;EAAW,MAAA;ACJb;;ADOA;;;EAAA;AAKA;;EACQ,MAAA;EACN,iBAAA;ACJF;;ADOA;;;EAAA;AAKA;;EACS,MAAA;EACP,oBAAA;ACJF;;ADOA;;EAAA;AAIA;;;;EAIE,0BAAA;ACLF;;ADQA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;ACNF;;ADSA;;EAAA;AAIA;;;;EAIE,8BAAA;ACPF;;ADUA;;EAAA;AAIA;EACE,8BAAA;ACRF;;ADWA;;;;;EAAA;AAOA;EACE,sBAAA;EAAwB,MAAA;EACxB,cAAA;EAAgB,MAAA;EAChB,cAAA;EAAgB,MAAA;EAChB,eAAA;EAAiB,MAAA;EACjB,UAAA;EAAY,MAAA;EACZ,mBAAA;EAAqB,MAAA;ACHvB;;ADMA;;EAAA;AAIA;EACE,wBAAA;ACJF;;ADOA;;EAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;EAAA;AAKA;;EAEE,sBAAA;EAAwB,MAAA;EACxB,UAAA;EAAY,MAAA;ACJd;;ADOA;;EAAA;AAIA;;EAEE,YAAA;ACLF;;ADQA;;;EAAA;AAKA;EACE,6BAAA;EAA+B,MAAA;EAC/B,oBAAA;EAAsB,MAAA;ACJxB;;ADOA;;EAAA;AAIA;EACE,wBAAA;ACLF;;ADQA;;;EAAA;AAKA;EACE,0BAAA;EAA4B,MAAA;EAC5B,aAAA;EAAe,MAAA;ACJjB;;ADOA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ACNF;;ADSA;;EAAA;AAIA;EACE,kBAAA;ACPF;;ADUA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ACTF;;ADYA;;EAAA;AAIA;EACE,aAAA;ACVF;;ACjVA,cAAA;AACA;EACC,UAAA;EACA,SAAA;EACA,SAAA;ADoVD;;AClVA;EACC,2BAAA;EACA,8BAAA;EACA,sBAAA;ADqVD;;ACnVA;EAAe,aAAA;ADuVf;;ACtVA;EAAiB,aAAA;AD0VjB;;ACxVA;EAAwB,cAAA;AD4VxB;;AC1VA;EACC,YAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,0BAAA;EACA,2BAAA;EACA,8BAAA;AD6VD;;AC3VA;EAAsB,oBAAA;AD+VtB;;AC7VA;EAAiB,aAAA;ADiWjB;;AChWA;EAAO,eAAA;ADoWP;;ACnWA;EAA0B,UAAA;EAAU,SAAA;ADwWpC;;ACvWA;EAAa,qBAAA;AD2Wb;;AC1WA;EAAQ,qBAAA;AD8WR;;AC7WA;EAAM,gBAAA;ADiXN;;AChXA;EAAI,mBAAA;ADoXJ;;AClXA;EAAkB,kBAAA;EAAkB,gBAAA;ADuXpC;;AE3ZA;EACE,0BAAA;EACA,4CAAA;EACA,+OAAA;EAIA,mBAAA;EACA,kBAAA;AF2ZF;AA9ZA;EACE,YAAA;AAgaF;;AA7ZA;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,0BAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,yDAAA;EACA,sDAAA;EACA,iDAAA;AAgaF;AA9ZE;EACE,kBAAA;EACA,mBAAA;EACA,eAAA;AAgaJ;AA7ZE;EACE,cAAA;EACA,kBAAA;AA+ZJ;AA5ZE;EACE,YAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,cAAA;EACA,cAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;AA8ZJ;AA3ZE;EACE,cAAA;EACA,YAAA;EACA,aAAA;EACA,uCAAA;EACA,mCAAA;EACA,QAAA;AA6ZJ;AAzZI;EACE,cGxDQ;EHyDR,sBGvDY;AHkdlB;AAvZE;EACE,YGzDO;EH0DP,WGhEU;EHiEV,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBGlEQ;EHmER,sBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,iBAAA;AAyZJ;AAvZI;EACE,cG3EQ;EH4ER,sBG1EY;AHmelB;AAtZI;EACE,yBAAA;EACA,0BAAA;AAwZN;AApZE;EACE,mBAAA;EACA,eAAA;AAsZJ;AAnZE;EACE,0BAAA;AAqZJ;AAlZE;EACE,mBAAA;AAoZJ;AAjZE;EACE,mBAAA;AAmZJ;AAhZE;EACE,mBAAA;AAkZJ;AA/YE;EACE,oBAAA;AAiZJ;AA9YE;EACE,mBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;AAgZJ;AA7YE;EACE,oBAAA;EACA,kBAAA;AA+YJ;AA7YI;EACE,0BAAA;AA+YN","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import \"normalize.scss\";\n@import \"reset.scss\";\n@import \"fonts.scss\";\n@import \"dimensions.scss\";\n\nbody {\n  padding: 5px;\n}\n\n#container {\n  margin: 0 auto;\n  padding: 5px;\n  max-width: 768px;\n  height: fit-content;\n  font-family: 'Roboto Mono';\n  font-size:16px;\n  border: 3px solid $color-black;\n  border-radius: 10px;\n  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n\n  #title {\n    text-align: center;\n    font-weight: normal;\n    font-size:20px;\n  }\n\n  #main {\n    margin: 0 auto;\n    width: fit-content;\n  }\n\n  #textarea {\n    padding: 5px;\n    width: 700px;\n    max-width: 700px;\n    height: 100px;\n    min-height: 100px;\n    display: block;\n    margin: 0 auto;\n    font-size: 12px;\n    border: 1px solid $color-black;\n    border-radius: 5px;\n  }\n\n  #keyboard {\n    margin: 0 auto;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: repeat(47, $size-column);\n    grid-template-rows: repeat(5, $size-row);\n    gap: 5px;\n  }\n\n  #keyboard.caps {\n    #CapsLock {\n      color: $color-hover;\n      background-color: $color-bkg-hover;\n    }\n  }\n\n  .key {\n    height: $size-row;\n    color: $color-black;\n    text-align: center;\n    font-size: 12px;\n    font-weight: bold;\n    background-color: $color-bkg;\n    border: 2px solid $color-black;\n    border-radius: 7px;\n    cursor: pointer;\n    box-shadow: 0 4px #292929;\n    user-select: none;\n\n    &:hover {\n      color: $color-hover;\n      background-color: $color-bkg-hover;\n    }\n\n    &.active {\n      box-shadow: 0 1px $color-shadow;\n      transform: translateY(3px);\n    }\n  }\n\n  .key.standard {\n    grid-column: span $columns-key-standart;\n    font-size: 13px;\n  }\n\n  #keyboard.upper .key.standard {\n    text-transform: capitalize;\n  }\n\n  .key.medium {\n    grid-column: span $columns-key-medium;\n  }\n\n  .key.double {\n    grid-column: span $columns-key-double;\n  }\n\n  .key.wide {\n    grid-column: span $columns-key-wide;\n  }\n\n  .key.space {\n    grid-column: span $columns-key-space;\n  }\n\n  #footer {\n    padding: 10px 0 5px;\n    margin: 0 auto;\n    width: 700px;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    font-size: 12px;\n    line-height: 16px;\n    text-align: justify;\n  }\n\n  #hintDiscord {\n    align-self: flex-end;\n    position: relative;\n\n    a {\n      text-decoration: underline;\n    }\n  }\n}\n\n\n\n","/*! reset.css*/\n*{\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n}\n*,*:before,*:after{\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\n:focus,:active{outline: none;}\na:focus,a:active{outline: none;}\n\nnav,footer,header,aside{display: block;}\n\nhtml,body{\n\theight: 100%;\n\twidth: 100%;\n\tfont-size: 100%;\n\tline-height: 1;\n\tfont-size: 14px;\n\t-ms-text-size-adjust: 100%;\n\t-moz-text-size-adjust: 100%;\n\t-webkit-text-size-adjust: 100%;\n}\ninput,button,textarea{font-family:inherit;}\n\ninput::-ms-clear{display: none;}\nbutton{cursor: pointer;}\nbutton::-moz-focus-inner {padding:0;border:0;}\na, a:visited{text-decoration: none;}\na:hover{text-decoration: none;}\nul li{list-style: none;}\nimg{vertical-align: top;}\n\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}\n","@font-face {\n  font-family: 'Roboto Mono';\n  src: url('../assets/fonts/RobotoMono-Regular.eot');\n  src: local('Roboto Mono'), local('RobotoMono-Regular'),\n      url('../assets/fonts/RobotoMono-Regular.eot?#iefix') format('embedded-opentype'),\n      url('../assets/fonts/RobotoMono-Regular.woff') format('woff'),\n      url('../assets/fonts/RobotoMono-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}","$color-black: #000;\n$color-hover: #0067ee;\n$color-bkg: #f3f3f3;\n$color-bkg-hover: #fff;\n$color-shadow: #292929;\n\n$size-row: 40px;\n$size-column: 10px;\n$columns-key-standart: 3;\n$columns-key-medium: 5;\n$columns-key-double: 6;\n$columns-key-wide: 8;\n$columns-key-space: 20;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.ico";

/***/ }),

/***/ "./src/assets/fonts/RobotoMono-Regular.eot":
/*!*************************************************!*\
  !*** ./src/assets/fonts/RobotoMono-Regular.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/RobotoMono-Regular.eot";

/***/ }),

/***/ "./src/assets/fonts/RobotoMono-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/RobotoMono-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/RobotoMono-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/RobotoMono-Regular.woff":
/*!**************************************************!*\
  !*** ./src/assets/fonts/RobotoMono-Regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/RobotoMono-Regular.woff";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/favicon.ico */ "./src/assets/favicon.ico");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _js_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/page */ "./src/js/page.js");
/* harmony import */ var _js_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/keyboard */ "./src/js/keyboard.js");
/* harmony import */ var _js_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/textarea */ "./src/js/textarea.js");





var container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
var page = new _js_page__WEBPACK_IMPORTED_MODULE_2__["default"]({
  parentContainer: container
});

var _page$create = page.create(),
    main = _page$create.main,
    footer = _page$create.footer;

var textArea = new _js_textarea__WEBPACK_IMPORTED_MODULE_4__["default"]({
  id: 'textarea',
  parentContainer: main
});
textArea.create();
var keyboard = new _js_keyboard__WEBPACK_IMPORTED_MODULE_3__["default"]({
  id: 'keyboard',
  parentContainer: main
});
keyboard.create();
var hintLang = document.createElement('p');
hintLang.id = 'hintlang';
hintLang.innerText = 'Press the CTRL + ALT or 🌐 button for change the language.';
footer.appendChild(hintLang);
var hintEnv = document.createElement('p');
hintEnv.id = 'hintenv';
hintEnv.innerText = 'The keyboard was made on ⊞ Windows 11.';
footer.appendChild(hintEnv);
var hintDiscord = document.createElement('p');
hintDiscord.id = 'hintDiscord';
hintDiscord.innerHTML = 'Please,' + '👉<a href="https://discordapp.com/users/878959404060405801">DISCORD</a> ' + 'me if you find any errors.';
footer.appendChild(hintDiscord);
document.addEventListener('keydown', function (e) {
  keyboard.keyDown({
    event: e
  });
});
document.addEventListener('keyup', function (e) {
  keyboard.keyUp({
    event: e
  });
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map