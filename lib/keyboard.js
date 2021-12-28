(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mui"] = factory();
	else
		root["mui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/lib/keyboard/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/lib/keyboard/src/index.js":
/*!**********************************************!*\
  !*** ./components/lib/keyboard/src/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\nclass Keyboard {\r\n  constructor(obj) {\r\n    if (typeof obj !== 'object') {\r\n      console.error('aKeyboard: The obj parameter needs to be an object <In \"new aKeyboard()\">');\r\n      return;\r\n    }\r\n\r\n    this.obj = obj;\r\n\r\n    const el = document.querySelector(obj.el);\r\n\r\n    let keyboardStyle = '';\r\n    if (typeof obj.style === 'object') {\r\n      for (let i in obj.style) {\r\n        keyboardStyle += i + ': ' + obj.style[i] + ';';\r\n      }\r\n    }\r\n\r\n    let html = '<div class=\"akeyboard-keyboard' + (obj.fixedBottomCenter ? ' akeyboard-keyboard-fixedBottomCenter' : '') + '\" style=\"' + keyboardStyle + '\">';\r\n\r\n    // init keys\r\n    let numberKeys = [];\r\n    for (let i = 1; i < 10; i++) {\r\n      numberKeys.push(i.toString());\r\n    }\r\n    numberKeys.push('0');\r\n\r\n    const keys = obj.keys || [\r\n      ['`'].concat(numberKeys).concat([\r\n        '-', '=', 'Delete'\r\n      ]),\r\n      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\'],\r\n      ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter'],\r\n      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],\r\n      ['Space']\r\n    ];\r\n\r\n    let thisKeys;\r\n    const shiftKey = [],\r\n      capsKey = [];\r\n    for (let i = 0; i < keys.length; i++) {\r\n      shiftKey.push([]);\r\n      capsKey.push([]);\r\n      thisKeys = keys[i];\r\n      for (let a = 0; a < thisKeys.length; a++) {\r\n        if (thisKeys[a].length === 1) {\r\n          capsKey[i].push(thisKeys[a].toUpperCase());\r\n          switch (thisKeys[a]) {\r\n            case '`':\r\n              shiftKey[i].push('~');\r\n              continue;\r\n            case '1':\r\n              shiftKey[i].push('!');\r\n              continue;\r\n            case '2':\r\n              shiftKey[i].push('@');\r\n              continue;\r\n            case '3':\r\n              shiftKey[i].push('#');\r\n              continue;\r\n            case '4':\r\n              shiftKey[i].push('$');\r\n              continue;\r\n            case '5':\r\n              shiftKey[i].push('%');\r\n              continue;\r\n            case '6':\r\n              shiftKey[i].push('^');\r\n              continue;\r\n            case '7':\r\n              shiftKey[i].push('&');\r\n              continue;\r\n            case '8':\r\n              shiftKey[i].push('*');\r\n              continue;\r\n            case '9':\r\n              shiftKey[i].push('(');\r\n              continue;\r\n            case '0':\r\n              shiftKey[i].push(')');\r\n              continue;\r\n            case '-':\r\n              shiftKey[i].push('_');\r\n              continue;\r\n            case '=':\r\n              shiftKey[i].push('+');\r\n              continue;\r\n            case '[':\r\n              shiftKey[i].push('{');\r\n              continue;\r\n            case ']':\r\n              shiftKey[i].push('}');\r\n              continue;\r\n            case '\\\\':\r\n              shiftKey[i].push('|');\r\n              continue;\r\n            case ';':\r\n              shiftKey[i].push(':');\r\n              continue;\r\n            case '\\'':\r\n              shiftKey[i].push('\"');\r\n              continue;\r\n            case ',':\r\n              shiftKey[i].push('<');\r\n              continue;\r\n            case '.':\r\n              shiftKey[i].push('>');\r\n              continue;\r\n            case '/':\r\n              shiftKey[i].push('?');\r\n              continue;\r\n          }\r\n          shiftKey[i].push(thisKeys[a].toUpperCase());\r\n          continue;\r\n        }\r\n        shiftKey[i].push(thisKeys[a]);\r\n        capsKey[i].push(thisKeys[a]);\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < keys.length; i++) {\r\n      thisKeys = keys[i];\r\n      html += '<div class=\"akeyboard-keyboard-innerKeys\">';\r\n      for (let a = 0; a < thisKeys.length; a++) {\r\n        html += '<div class=\"akeyboard-keyboard-keys akeyboard-keyboard-keys-' + thisKeys[a] + '\">' + thisKeys[a] + '</div>';\r\n      }\r\n      html += '</div>';\r\n    }\r\n\r\n    html += '</div>';\r\n\r\n    el.innerHTML = html;\r\n\r\n    let containShift = false;\r\n    keys.forEach(key => {\r\n      if (key.includes('Shift')) {\r\n        containShift = true;\r\n        return;\r\n      }\r\n    });\r\n    if (containShift) {\r\n      // bind the shift and caps key\r\n      const elKeysEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-keys-Shift');\r\n\r\n      elKeysEl.forEach(el => {\r\n        el.onclick = function () {\r\n          if (!this.isShift) {\r\n            const caps = document.querySelector(obj.el + ' .akeyboard-keyboard-keys-Caps');\r\n            if (caps && caps.isCaps) {\r\n              return;\r\n            }\r\n\r\n            // shift\r\n            el.isShift = true;\r\n            el.innerHTML = 'SHIFT';\r\n            this.classList.add('keyboard-keyboard-keys-focus');\r\n\r\n            const keysInnerEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-innerKeys');\r\n\r\n            let thisEl;\r\n            for (let i = 0; i < keysInnerEl.length; i++) {\r\n              thisEl = keysInnerEl[i];\r\n              for (let a = 0; a < thisEl.childNodes.length; a++) {\r\n                if (shiftKey[i][a] === 'Shift') {\r\n                  continue;\r\n                }\r\n                thisEl.childNodes[a].innerHTML = shiftKey[i][a];\r\n              }\r\n            }\r\n\r\n            return;\r\n          }\r\n          el.isShift = false;\r\n          el.innerHTML = 'Shift';\r\n          this.classList.remove('keyboard-keyboard-keys-focus');\r\n\r\n          const keysInnerEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-innerKeys');\r\n\r\n          let thisEl;\r\n          for (let i = 0; i < keysInnerEl.length; i++) {\r\n            thisEl = keysInnerEl[i];\r\n            for (let a = 0; a < thisEl.childNodes.length; a++) {\r\n              thisEl.childNodes[a].innerHTML = keys[i][a];\r\n            }\r\n          }\r\n        };\r\n      });\r\n\r\n    }\r\n\r\n    let containCaps = false;\r\n    keys.forEach(key => {\r\n      if (key.includes('Caps')) {\r\n        containCaps = true;\r\n        return;\r\n      }\r\n    });\r\n    if (containCaps) {\r\n      const elCapsEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-keys-Caps');\r\n\r\n      elCapsEl.forEach(el => {\r\n        el.onclick = function () {\r\n          if (!this.isCaps) {\r\n            const shift = document.querySelector(obj.el + ' .akeyboard-keyboard-keys-Shift');\r\n            if (shift && shift.isShift) {\r\n              return;\r\n            }\r\n\r\n            // caps\r\n            this.isCaps = true;\r\n            this.classList.add('keyboard-keyboard-keys-focus');\r\n\r\n            const keysInnerEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-innerKeys');\r\n\r\n            let thisEl;\r\n            for (let i = 0; i < keysInnerEl.length; i++) {\r\n              thisEl = keysInnerEl[i];\r\n              for (let a = 0; a < thisEl.childNodes.length; a++) {\r\n                thisEl.childNodes[a].innerHTML = capsKey[i][a];\r\n              }\r\n            }\r\n\r\n            return;\r\n          }\r\n\r\n          this.isCaps = false;\r\n          this.classList.remove('keyboard-keyboard-keys-focus');\r\n\r\n          const keysInnerEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-innerKeys');\r\n\r\n          let thisEl;\r\n          for (let i = 0; i < keysInnerEl.length; i++) {\r\n            thisEl = keysInnerEl[i];\r\n            for (let a = 0; a < thisEl.childNodes.length; a++) {\r\n              thisEl.childNodes[a].innerHTML = keys[i][a];\r\n            }\r\n          }\r\n        };\r\n      });\r\n    }\r\n  }\r\n\r\n  inputOn (inputEle, type, fn, customClick) {\r\n    if (typeof inputEle !== 'string') {\r\n      console.error('aKeyboard: The inputEle parameter needs to be a string <In \"aKeyboard.inputOn()\">');\r\n      return;\r\n    }\r\n\r\n    if (typeof type !== 'string') {\r\n      console.error('aKeyboard: The type parameter needs to be a string <In \"aKeyboard.inputOn()\">');\r\n      return;\r\n    }\r\n\r\n    const inputEl = document.querySelector(inputEle),\r\n      elKeysEl = document.querySelectorAll(this.obj.el + ' .akeyboard-keyboard-keys');\r\n\r\n    for (let i = 0; i < elKeysEl.length; i++) {\r\n      if (['Shift', 'Caps'].includes(elKeysEl[i].innerHTML)) {\r\n        continue;\r\n      }\r\n\r\n      if (elKeysEl[i].innerHTML === 'Delete') {\r\n        elKeysEl[i].onclick = function () {\r\n          inputEl[type] = inputEl[type].substr(0, inputEl[type].length - 1);\r\n          fn('Delete', inputEl[type]);\r\n        };\r\n        continue;\r\n      }\r\n\r\n      if (elKeysEl[i].innerHTML === 'Tab') {\r\n        elKeysEl[i].onclick = function () {\r\n          inputEl[type] += '  ';\r\n          fn('Tab', inputEl[type]);\r\n        };\r\n        continue;\r\n      }\r\n\r\n      if (elKeysEl[i].innerHTML === 'Enter') {\r\n        elKeysEl[i].onclick = function () {\r\n          inputEl[type] += '\\n';\r\n          fn('Enter', inputEl[type]);\r\n        };\r\n        continue;\r\n      }\r\n\r\n      if (elKeysEl[i].innerHTML === 'Space') {\r\n        elKeysEl[i].onclick = function () {\r\n          inputEl[type] += ' ';\r\n          fn('Space', inputEl[type]);\r\n        };\r\n        continue;\r\n      }\r\n\r\n      if (customClick && typeof customClick === 'object' && Object.keys(customClick).length > 0 && customClick[elKeysEl[i].innerHTML]) {\r\n        elKeysEl[i].onclick = customClick[elKeysEl[i].innerHTML];\r\n      } else {\r\n        elKeysEl[i].onclick = function () {\r\n          inputEl[type] += this.innerText;\r\n          fn(this.innerText, inputEl[type]);\r\n        };\r\n      }\r\n    }\r\n  }\r\n\r\n  onclick (btn, fn) {\r\n    if (typeof btn !== 'string') {\r\n      console.error('aKeyboard: The btn parameter needs to be a string <In \"aKeyboard.onclick()\">');\r\n      return;\r\n    }\r\n\r\n    if (typeof fn !== 'function') {\r\n      console.error('aKeyboard: The fn parameter needs to be a function <In \"aKeyboard.onclick()\">');\r\n      return;\r\n    }\r\n\r\n    let elKeysEl = document.querySelector(this.obj.el + ' .akeyboard-keyboard-keys-' + btn);\r\n    if (elKeysEl) elKeysEl.onclick = fn;\r\n    else console.error('Can not find key: ' + btn);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://mui/./components/lib/keyboard/src/index.js?");

/***/ })

/******/ });
});