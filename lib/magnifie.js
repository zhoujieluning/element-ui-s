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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/lib/magnifie/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./packages/lib/magnifie/src/main.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./packages/lib/magnifie/src/main.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: 'els-magnifie',\r\n  props: {\r\n    url: {\r\n      type: String,\r\n      default: '',\r\n    },\r\n    highUrl: {\r\n      type: String,\r\n      default: '',\r\n    },\r\n    width: {\r\n      type: Number,\r\n      default: 168,\r\n    },\r\n    type: {\r\n      type: String,\r\n      default: 'circle',\r\n      validator: function (value) {\r\n        return ['circle', 'square'].indexOf(value) !== -1;\r\n      },\r\n    },\r\n    selectorStyle: {\r\n      type: Object,\r\n      default() {\r\n        return {};\r\n      },\r\n    },\r\n    outShowStyle: {},\r\n    scale: {\r\n      type: Number,\r\n      default: 3,\r\n    },\r\n    lazyload: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    moveEvent: {\r\n      type: [Object],\r\n      default: null,\r\n    },\r\n    leaveEvent: {\r\n      type: [Object],\r\n      default: null,\r\n    },\r\n    hideZoom: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    outShow: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    pointer: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    baseline: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n  },\r\n  data() {\r\n    return {\r\n      selector: {\r\n        width: this.width,\r\n        top: 0,\r\n        left: 0,\r\n        bgTop: 0,\r\n        bgLeft: 0,\r\n        rightBound: 0,\r\n        bottomBound: 0,\r\n        absoluteLeft: 0,\r\n        absoluteTop: 0,\r\n      },\r\n      imgInfo: {},\r\n      $img: null,\r\n      // screenWidth: document.body.clientWidth,\r\n      screenWidth: '',\r\n      outShowInitTop: 0,\r\n      outShowTop: 0,\r\n      hideOutShow: true,\r\n      imgLoadedFlag: false,\r\n      highImgLoadedFlag: false,\r\n      hideSelector: true,\r\n      timer: null,\r\n    };\r\n  },\r\n  computed: {\r\n    addWidth() {\r\n      return !this.outShow ? (this.width / 2) * (1 - this.scale) : 0;\r\n    },\r\n    imgSelectorPosition() {\r\n      const { top, left } = this.selector;\r\n      return {\r\n        top: `${top}px`,\r\n        left: `${left}px`,\r\n      };\r\n    },\r\n    imgSelectorSize() {\r\n      const width = this.selector.width;\r\n      return {\r\n        width: `${width}px`,\r\n        height: `${width}px`,\r\n      };\r\n    },\r\n    imgSelectorStyle() {\r\n      return this.selectorStyle;\r\n    },\r\n    imgOutShowSize() {\r\n      const {\r\n        scale,\r\n        selector: { width },\r\n      } = this;\r\n      return {\r\n        width: `${width * scale}px`,\r\n        height: `${width * scale}px`,\r\n      };\r\n    },\r\n    imgOutShowPosition() {\r\n      return {\r\n        top: `${this.outShowTop}px`,\r\n        right: `${-8}px`,\r\n      };\r\n    },\r\n    imgBg() {\r\n      return {\r\n        backgroundImage: `url(${this.highUrl || this.url})`,\r\n      };\r\n    },\r\n    imgBgSize() {\r\n      const {\r\n        scale,\r\n        imgInfo: { height, width },\r\n      } = this;\r\n      return {\r\n        backgroundSize: `${width * scale}px ${height * scale}px`,\r\n      };\r\n    },\r\n    imgBgPosition() {\r\n      const { bgLeft, bgTop } = this.selector;\r\n      return {\r\n        backgroundPosition: `${bgLeft}px ${bgTop}px`,\r\n      };\r\n    },\r\n  },\r\n  watch: {\r\n    moveEvent(e) {\r\n      this.mouseMove(e);\r\n    },\r\n    leaveEvent(e) {\r\n      this.mouseLeave(e);\r\n    },\r\n    url() {\r\n      this.handlerUrlChange();\r\n    },\r\n    width(n) {\r\n      this.initSelectorProperty(n);\r\n    },\r\n    screenWidth(val) {\r\n      if (!this.timer) {\r\n        this.screenWidth = val;\r\n        this.timer = setTimeout(() => {\r\n          this.imgLoaded();\r\n          clearTimeout(this.timer);\r\n          this.timer = null;\r\n        }, 400);\r\n      }\r\n    },\r\n  },\r\n  created() {\r\n    this.url && this.lazyload && this.handlerUrlChange();\r\n  },\r\n  mounted() {\r\n    this.screenWidth = document.body.clientWidth;\r\n    this.$img = this.$refs['img'];\r\n  },\r\n  methods: {\r\n    handlerUrlChange() {\r\n      this.imgLoadedFlag = false;\r\n      this.lazyload &&\r\n        this.loadImg(this.url).then(this.imgLoaded, (err) =>\r\n          console.error(err)\r\n        );\r\n    },\r\n    loadImg(url) {\r\n      return new Promise((resolve, reject) => {\r\n        const img = document.createElement('img');\r\n        img.addEventListener('load', resolve);\r\n        img.addEventListener('error', reject);\r\n        img.src = url;\r\n      });\r\n    },\r\n    imgLoaded() {\r\n      const imgInfo = this.$img.getBoundingClientRect();\r\n      if (JSON.stringify(this.imgInfo) != JSON.stringify(imgInfo)) {\r\n        this.imgInfo = imgInfo;\r\n        this.initSelectorProperty(this.width);\r\n        this.resetOutShowInitPosition();\r\n      }\r\n      if (!this.imgLoadedFlag) {\r\n        this.imgLoadedFlag = true;\r\n        this.$emit('created', imgInfo);\r\n      }\r\n    },\r\n    mouseMove(e) {\r\n      if (!this.hideZoom && this.imgLoadedFlag) {\r\n        this.imgLoaded();\r\n        const { pageX, pageY, clientY } = e;\r\n        const { scale, selector, outShow, addWidth, outShowAutoScroll } = this;\r\n        let { outShowInitTop } = this;\r\n        const scrollTop = pageY - clientY;\r\n        const { absoluteLeft, absoluteTop, rightBound, bottomBound } = selector;\r\n        const x = pageX - absoluteLeft; // 选择器的x坐标 相对于图片\r\n        const y = pageY - absoluteTop; // 选择器的y坐标\r\n        if (outShow) {\r\n          if (!outShowInitTop) {\r\n            outShowInitTop = this.outShowInitTop = scrollTop + this.imgInfo.top;\r\n          }\r\n          this.hideOutShow && (this.hideOutShow = false);\r\n          this.outShowTop =\r\n            scrollTop > outShowInitTop ? scrollTop - outShowInitTop : 0;\r\n        }\r\n        this.hideSelector && (this.hideSelector = false);\r\n        selector.top = y > 0 ? (y < bottomBound ? y : bottomBound) : 0;\r\n        selector.left = x > 0 ? (x < rightBound ? x : rightBound) : 0;\r\n        selector.bgLeft = addWidth - x * scale; // 选择器图片的坐标位置\r\n        selector.bgTop = addWidth - y * scale;\r\n      }\r\n    },\r\n    initSelectorProperty(selectorWidth) {\r\n      const selectorHalfWidth = selectorWidth / 2;\r\n      const selector = this.selector;\r\n      const { width, height, left, top } = this.imgInfo;\r\n      const scrollTop =\r\n        document.documentElement.scrollTop ||\r\n        window.pageYOffset ||\r\n        document.body.scrollTop;\r\n      const scrollLeft =\r\n        document.documentElement.scrollLeft ||\r\n        window.pageXOffset ||\r\n        document.body.scrollLeft;\r\n      selector.width = selectorWidth;\r\n      selector.rightBound = width - selectorWidth;\r\n      selector.bottomBound = height - selectorWidth;\r\n      selector.absoluteLeft = left + selectorHalfWidth + scrollLeft;\r\n      selector.absoluteTop = top + selectorHalfWidth + scrollTop;\r\n    },\r\n    mouseLeave() {\r\n      this.hideSelector = true;\r\n      if (this.outShow) {\r\n        this.hideOutShow = true;\r\n      }\r\n    },\r\n    reset() {\r\n      Object.assign(this.selector, {\r\n        top: 0,\r\n        left: 0,\r\n        bgLeft: 0,\r\n        bgTop: 0,\r\n      });\r\n      this.resetOutShowInitPosition();\r\n    },\r\n    resetOutShowInitPosition() {\r\n      this.outShowInitTop = 0;\r\n    },\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://mui/./packages/lib/magnifie/src/main.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/lib/magnifie/src/main.vue?vue&type=template&id=611e6aa1&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/lib/magnifie/src/main.vue?vue&type=template&id=611e6aa1& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"pic-img\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"img-container\",\n        on: {\n          mousemove: function ($event) {\n            !_vm.moveEvent && _vm.mouseMove($event)\n          },\n          mouseleave: function ($event) {\n            !_vm.leaveEvent && _vm.mouseLeave($event)\n          },\n        },\n      },\n      [\n        _c(\"img\", {\n          ref: \"img\",\n          staticStyle: { width: \"100%\" },\n          attrs: {\n            src: !_vm.lazyload ? _vm.url : _vm.imgLoadedFlag && _vm.url,\n          },\n          on: {\n            load: function ($event) {\n              !_vm.lazyload && _vm.imgLoaded($event)\n            },\n          },\n        }),\n        _vm._v(\" \"),\n        !_vm.hideZoom && _vm.imgLoadedFlag && !_vm.hideSelector\n          ? _c(\n              \"div\",\n              {\n                class: [\"img-selector\", { circle: _vm.type === \"circle\" }],\n                style: [\n                  _vm.imgSelectorStyle,\n                  _vm.imgSelectorSize,\n                  _vm.imgSelectorPosition,\n                  !_vm.outShow && _vm.imgBg,\n                  !_vm.outShow && _vm.imgBgSize,\n                  !_vm.outShow && _vm.imgBgPosition,\n                ],\n              },\n              [_vm._t(\"default\")],\n              2\n            )\n          : _vm._e(),\n        _vm._v(\" \"),\n        _vm.outShow\n          ? _c(\n              \"div\",\n              {\n                directives: [\n                  {\n                    name: \"show\",\n                    rawName: \"v-show\",\n                    value: !_vm.hideOutShow,\n                    expression: \"!hideOutShow\",\n                  },\n                ],\n                class: [\"img-out-show\", { \"base-line\": _vm.baseline }],\n                style: [\n                  _vm.imgOutShowSize,\n                  _vm.imgOutShowPosition,\n                  _vm.imgBg,\n                  _vm.imgBgSize,\n                  _vm.imgBgPosition,\n                ],\n              },\n              [\n                _vm.pointer\n                  ? _c(\"div\", { staticClass: \"img-selector-point\" })\n                  : _vm._e(),\n              ]\n            )\n          : _vm._e(),\n      ]\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://mui/./packages/lib/magnifie/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://mui/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./packages/lib/magnifie/index.js":
/*!****************************************!*\
  !*** ./packages/lib/magnifie/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./packages/lib/magnifie/src/main.vue\");\n\r\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install =function(Vue){\r\n    Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name,_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://mui/./packages/lib/magnifie/index.js?");

/***/ }),

/***/ "./packages/lib/magnifie/src/main.vue":
/*!********************************************!*\
  !*** ./packages/lib/magnifie/src/main.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_611e6aa1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=611e6aa1& */ \"./packages/lib/magnifie/src/main.vue?vue&type=template&id=611e6aa1&\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ \"./packages/lib/magnifie/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_611e6aa1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _main_vue_vue_type_template_id_611e6aa1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/lib/magnifie/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://mui/./packages/lib/magnifie/src/main.vue?");

/***/ }),

/***/ "./packages/lib/magnifie/src/main.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./packages/lib/magnifie/src/main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./packages/lib/magnifie/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://mui/./packages/lib/magnifie/src/main.vue?");

/***/ }),

/***/ "./packages/lib/magnifie/src/main.vue?vue&type=template&id=611e6aa1&":
/*!***************************************************************************!*\
  !*** ./packages/lib/magnifie/src/main.vue?vue&type=template&id=611e6aa1& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_611e6aa1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=611e6aa1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/lib/magnifie/src/main.vue?vue&type=template&id=611e6aa1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_611e6aa1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_611e6aa1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://mui/./packages/lib/magnifie/src/main.vue?");

/***/ })

/******/ });
});