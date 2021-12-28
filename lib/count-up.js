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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/lib/count-up/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/lib/count-up/index.js":
/*!******************************************!*\
  !*** ./components/lib/count-up/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./components/lib/count-up/src/main.vue\");\n\r\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install =function(Vue){\r\n    Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name,_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://mui/./components/lib/count-up/index.js?");

/***/ }),

/***/ "./components/lib/count-up/src/main.vue":
/*!**********************************************!*\
  !*** ./components/lib/count-up/src/main.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_ce0b75f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=ce0b75f6& */ \"./components/lib/count-up/src/main.vue?vue&type=template&id=ce0b75f6&\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ \"./components/lib/count-up/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_ce0b75f6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _main_vue_vue_type_template_id_ce0b75f6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/lib/count-up/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://mui/./components/lib/count-up/src/main.vue?");

/***/ }),

/***/ "./components/lib/count-up/src/main.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./components/lib/count-up/src/main.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/lib/count-up/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://mui/./components/lib/count-up/src/main.vue?");

/***/ }),

/***/ "./components/lib/count-up/src/main.vue?vue&type=template&id=ce0b75f6&":
/*!*****************************************************************************!*\
  !*** ./components/lib/count-up/src/main.vue?vue&type=template&id=ce0b75f6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_ce0b75f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=ce0b75f6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/lib/count-up/src/main.vue?vue&type=template&id=ce0b75f6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_ce0b75f6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_ce0b75f6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://mui/./components/lib/count-up/src/main.vue?");

/***/ }),

/***/ "./components/lib/count-up/src/requestAnimationFrame.js":
/*!**************************************************************!*\
  !*** ./components/lib/count-up/src/requestAnimationFrame.js ***!
  \**************************************************************/
/*! exports provided: requestAnimationFrame, cancelAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestAnimationFrame\", function() { return requestAnimationFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cancelAnimationFrame\", function() { return cancelAnimationFrame; });\nlet lastTime = 0\r\nconst prefixes = 'webkit moz ms o'.split(' ') // 各浏览器前缀\r\n\r\nlet requestAnimationFrame\r\nlet cancelAnimationFrame\r\n\r\nconst isServer = typeof window === 'undefined'\r\nif (isServer) {\r\n  requestAnimationFrame = function() {\r\n    return\r\n  }\r\n  cancelAnimationFrame = function() {\r\n    return\r\n  }\r\n} else {\r\n  requestAnimationFrame = window.requestAnimationFrame\r\n  cancelAnimationFrame = window.cancelAnimationFrame\r\n  let prefix\r\n    // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式\r\n  for (let i = 0; i < prefixes.length; i++) {\r\n    if (requestAnimationFrame && cancelAnimationFrame) { break }\r\n    prefix = prefixes[i]\r\n    requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame']\r\n    cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']\r\n  }\r\n\r\n  // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout\r\n  if (!requestAnimationFrame || !cancelAnimationFrame) {\r\n    requestAnimationFrame = function(callback) {\r\n      const currTime = new Date().getTime()\r\n      // 为了使setTimteout的尽可能的接近每秒60帧的效果\r\n      const timeToCall = Math.max(0, 16 - (currTime - lastTime))\r\n      const id = window.setTimeout(() => {\r\n        callback(currTime + timeToCall)\r\n      }, timeToCall)\r\n      lastTime = currTime + timeToCall\r\n      return id\r\n    }\r\n\r\n    cancelAnimationFrame = function(id) {\r\n      window.clearTimeout(id)\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://mui/./components/lib/count-up/src/requestAnimationFrame.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/lib/count-up/src/main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/lib/count-up/src/main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestAnimationFrame.js */ \"./components/lib/count-up/src/requestAnimationFrame.js\");\n//\n//\n//\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: 'els-count-up',\r\n  props: {\r\n    startVal: {\r\n      type: Number,\r\n      required: false,\r\n      default: 0,\r\n    },\r\n    endVal: {\r\n      type: Number,\r\n      required: false,\r\n      default: 1080,\r\n    },\r\n    duration: {\r\n      type: Number,\r\n      required: false,\r\n      default: 3000,\r\n    },\r\n    autoplay: {\r\n      type: Boolean,\r\n      required: false,\r\n      default: true,\r\n    },\r\n    decimals: {\r\n      type: Number,\r\n      required: false,\r\n      default: 0,\r\n      validator(value) {\r\n        return value >= 0;\r\n      },\r\n    },\r\n    decimal: {\r\n      type: String,\r\n      required: false,\r\n      default: '.',\r\n    },\r\n    separator: {\r\n      type: String,\r\n      required: false,\r\n      default: ',',\r\n    },\r\n    prefix: {\r\n      type: String,\r\n      required: false,\r\n      default: '',\r\n    },\r\n    suffix: {\r\n      type: String,\r\n      required: false,\r\n      default: '',\r\n    },\r\n    useEasing: {\r\n      type: Boolean,\r\n      required: false,\r\n      default: true,\r\n    },\r\n    easingFn: {\r\n      type: Function,\r\n      default(t, b, c, d) {\r\n        return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;\r\n      },\r\n    },\r\n  },\r\n  data() {\r\n    return {\r\n      localStartVal: this.startVal,\r\n      displayValue: this.formatNumber(this.startVal),\r\n      printVal: null,\r\n      paused: false,\r\n      localDuration: this.duration,\r\n      startTime: null,\r\n      timestamp: null,\r\n      remaining: null,\r\n      rAF: null,\r\n    };\r\n  },\r\n  computed: {\r\n    countDown() {\r\n      return this.startVal > this.endVal;\r\n    },\r\n  },\r\n  watch: {\r\n    startVal() {\r\n      if (this.autoplay) {\r\n        this.start();\r\n      }\r\n    },\r\n    endVal() {\r\n      if (this.autoplay) {\r\n        this.start();\r\n      }\r\n    },\r\n  },\r\n  mounted() {\r\n    if (this.autoplay) {\r\n      this.start();\r\n    }\r\n    this.$emit('mountedCallback');\r\n  },\r\n  methods: {\r\n    start() {\r\n      this.localStartVal = this.startVal;\r\n      this.startTime = null;\r\n      this.localDuration = this.duration;\r\n      this.paused = false;\r\n      this.rAF = Object(_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__[\"requestAnimationFrame\"])(this.count);\r\n    },\r\n    pauseResume() {\r\n      if (this.paused) {\r\n        this.resume();\r\n        this.paused = false;\r\n      } else {\r\n        this.pause();\r\n        this.paused = true;\r\n      }\r\n    },\r\n    pause() {\r\n      Object(_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__[\"cancelAnimationFrame\"])(this.rAF);\r\n    },\r\n    resume() {\r\n      this.startTime = null;\r\n      this.localDuration = +this.remaining;\r\n      this.localStartVal = +this.printVal;\r\n      Object(_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__[\"requestAnimationFrame\"])(this.count);\r\n    },\r\n    reset() {\r\n      this.startTime = null;\r\n      Object(_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__[\"cancelAnimationFrame\"])(this.rAF);\r\n      this.displayValue = this.formatNumber(this.startVal);\r\n    },\r\n    count(timestamp) {\r\n      if (!this.startTime) this.startTime = timestamp;\r\n      this.timestamp = timestamp;\r\n      const progress = timestamp - this.startTime;\r\n      this.remaining = this.localDuration - progress;\r\n\r\n      if (this.useEasing) {\r\n        if (this.countDown) {\r\n          this.printVal =\r\n            this.localStartVal -\r\n            this.easingFn(\r\n              progress,\r\n              0,\r\n              this.localStartVal - this.endVal,\r\n              this.localDuration\r\n            );\r\n        } else {\r\n          this.printVal = this.easingFn(\r\n            progress,\r\n            this.localStartVal,\r\n            this.endVal - this.localStartVal,\r\n            this.localDuration\r\n          );\r\n        }\r\n      } else {\r\n        if (this.countDown) {\r\n          this.printVal =\r\n            this.localStartVal -\r\n            (this.localStartVal - this.endVal) *\r\n              (progress / this.localDuration);\r\n        } else {\r\n          this.printVal =\r\n            this.localStartVal +\r\n            (this.endVal - this.localStartVal) *\r\n              (progress / this.localDuration);\r\n        }\r\n      }\r\n      if (this.countDown) {\r\n        this.printVal =\r\n          this.printVal < this.endVal ? this.endVal : this.printVal;\r\n      } else {\r\n        this.printVal =\r\n          this.printVal > this.endVal ? this.endVal : this.printVal;\r\n      }\r\n\r\n      this.displayValue = this.formatNumber(this.printVal);\r\n      if (progress < this.localDuration) {\r\n        this.rAF = Object(_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__[\"requestAnimationFrame\"])(this.count);\r\n      } else {\r\n        this.$emit('callback');\r\n      }\r\n    },\r\n    isNumber(val) {\r\n      return !isNaN(parseFloat(val));\r\n    },\r\n    formatNumber(num) {\r\n      num = num.toFixed(this.decimals);\r\n      num += '';\r\n      const x = num.split('.');\r\n      let x1 = x[0];\r\n      const x2 = x.length > 1 ? this.decimal + x[1] : '';\r\n      const rgx = /(\\d+)(\\d{3})/;\r\n      if (this.separator && !this.isNumber(this.separator)) {\r\n        while (rgx.test(x1)) {\r\n          x1 = x1.replace(rgx, '$1' + this.separator + '$2');\r\n        }\r\n      }\r\n      return this.prefix + x1 + x2 + this.suffix;\r\n    },\r\n  },\r\n  destroyed() {\r\n    Object(_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_0__[\"cancelAnimationFrame\"])(this.rAF);\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://mui/./components/lib/count-up/src/main.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/lib/count-up/src/main.vue?vue&type=template&id=ce0b75f6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/lib/count-up/src/main.vue?vue&type=template&id=ce0b75f6& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"span\", { staticClass: \"els-count-up\" }, [\n    _vm._v(_vm._s(_vm.displayValue)),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://mui/./components/lib/count-up/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://mui/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });
});