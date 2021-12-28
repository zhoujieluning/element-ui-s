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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/lib/video/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/lib/video/index.js":
/*!***************************************!*\
  !*** ./components/lib/video/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./components/lib/video/src/main.vue\");\n\r\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install =function(Vue){\r\n    Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name,_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://mui/./components/lib/video/index.js?");

/***/ }),

/***/ "./components/lib/video/src/main.vue":
/*!*******************************************!*\
  !*** ./components/lib/video/src/main.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_03bef65d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=03bef65d& */ \"./components/lib/video/src/main.vue?vue&type=template&id=03bef65d&\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ \"./components/lib/video/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_03bef65d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _main_vue_vue_type_template_id_03bef65d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/lib/video/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://mui/./components/lib/video/src/main.vue?");

/***/ }),

/***/ "./components/lib/video/src/main.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./components/lib/video/src/main.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/lib/video/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://mui/./components/lib/video/src/main.vue?");

/***/ }),

/***/ "./components/lib/video/src/main.vue?vue&type=template&id=03bef65d&":
/*!**************************************************************************!*\
  !*** ./components/lib/video/src/main.vue?vue&type=template&id=03bef65d& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_03bef65d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=03bef65d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/lib/video/src/main.vue?vue&type=template&id=03bef65d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_03bef65d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_03bef65d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://mui/./components/lib/video/src/main.vue?");

/***/ }),

/***/ "./components/lib/video/src/video.js":
/*!*******************************************!*\
  !*** ./components/lib/video/src/video.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecordVideo; });\nclass RecordVideo {\r\n\r\n    /**\r\n     * 构造函数\r\n     *\r\n     * @param  {Object}   videoObj 视频对象\r\n     */\r\n    constructor(videoObj) {\r\n      this.video = videoObj;\r\n      this.mediaRecorder = null;\r\n      this.chunks = [];\r\n    }\r\n  \r\n    /**\r\n     * 初始化\r\n     *\r\n     * @return {Object} promise\r\n     */\r\n    init() {\r\n      // 返回Promise对象\r\n      // resolve 正常处理\r\n      // reject 处理异常情况\r\n      return new Promise((resovle, reject) => {\r\n        navigator\r\n          .mediaDevices\r\n          .getUserMedia({\r\n            audio: true,\r\n            video: true\r\n            // video: {\r\n            //     width: this.videoWidth,\r\n            //     height: this.videoHeight\r\n            // }\r\n          })\r\n          // 返回一个媒体内容的流\r\n          .then(stream => {\r\n            // 检测是否支持 srcObject，该属性在新的浏览器支持\r\n            if ('srcObject' in this.video) {\r\n              this.video.srcObject = stream;\r\n            } else {\r\n              // 兼容旧的浏览器\r\n              this.video.src = window.URL.createObjectURL(stream);\r\n            }\r\n  \r\n            // 当视频的元数据已经加载时触发\r\n            this.video.addEventListener('loadmetadata', () => {\r\n              this.video.play();\r\n            });\r\n            this.mediaRecorder = new MediaRecorder(stream);\r\n            this.mediaRecorder.addEventListener('dataavailable', e => {\r\n              this.chunks.push(e.data);\r\n            });\r\n            resovle();\r\n          })\r\n          // 异常抓取，包括用于禁用麦克风、摄像头\r\n          .catch(error => {\r\n            reject(error);\r\n          });\r\n      });\r\n    }\r\n  \r\n    /**\r\n     * 视频开始录制\r\n     */\r\n    startRecord() {\r\n      if (this.mediaRecorder.state === 'inactive') {\r\n        this.mediaRecorder.start();\r\n      }\r\n    }\r\n  \r\n    /**\r\n     * 视频结束录制\r\n     */\r\n    stopRecord() {\r\n      if (this.mediaRecorder.state === 'recording') {\r\n        this.mediaRecorder.stop();\r\n      }\r\n    }\r\n  \r\n    /**\r\n     * 检测当前浏览器对否支持\r\n     *\r\n     * @return {boolean} 当前浏览器是否支持\r\n     */\r\n    isSupport() {\r\n      const flag = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;\r\n      if (flag) {\r\n        return true;\r\n      }\r\n    }\r\n  }\r\n  \n\n//# sourceURL=webpack://mui/./components/lib/video/src/video.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/lib/video/src/main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/lib/video/src/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video */ \"./components/lib/video/src/video.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: 'els-video',\r\n  props: {\r\n    background: {\r\n      type: String,\r\n    },\r\n    width: {\r\n      type: [String, Number],\r\n      default: 500,\r\n    },\r\n  },\r\n  computed: {\r\n    styleName() {\r\n      return {\r\n        width: this.setPx(this.width),\r\n      };\r\n    },\r\n    imgStyleName() {\r\n      console.log(this.setPx(this.width / 2));\r\n      return {\r\n        width: this.setPx(this.width / 2),\r\n      };\r\n    },\r\n    borderStyleName() {\r\n      return {\r\n        width: this.setPx(this.width / 15),\r\n        height: this.setPx(this.width / 15),\r\n        borderWidth: this.setPx(5),\r\n      };\r\n    },\r\n  },\r\n  data() {\r\n    return {\r\n      videoObj: null,\r\n    };\r\n  },\r\n  mounted() {\r\n    console.log(this.width);\r\n    this.init();\r\n  },\r\n  methods: {\r\n    init() {\r\n      this.videoObj = new _video__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.$refs.main);\r\n      const videoPromise = this.videoObj.init();\r\n      videoPromise.then(() => {\r\n        this.videoObj.mediaRecorder.addEventListener(\r\n          'stop',\r\n          this.getData,\r\n          false\r\n        );\r\n      });\r\n    },\r\n    startRecord() {\r\n      this.videoObj.startRecord();\r\n    },\r\n    stopRecord() {\r\n      this.videoObj.stopRecord();\r\n    },\r\n    getData() {\r\n      const blob = new Blob(this.videoObj.chunks, {\r\n        type: 'video/mp4',\r\n      });\r\n      const reader = new FileReader();\r\n      reader.readAsDataURL(blob);\r\n      reader.addEventListener('loadend', () => {\r\n        var video_base64 = reader.result;\r\n        this.$emit('data-change', video_base64);\r\n      });\r\n    },\r\n    setPx(val) {\r\n      val = val + '';\r\n      if (val.indexOf('%') === -1) {\r\n        val = val + 'px';\r\n      }\r\n      return val;\r\n    },\r\n    b(el, mods) {\r\n      const { name } = this.$options;\r\n      if (el && typeof el !== 'string') {\r\n        mods = el;\r\n        el = '';\r\n      }\r\n      const ELEMENT = '__';\r\n      const MODS = '--';\r\n      const join = (name, el, symbol) => (el ? name + symbol + el : name);\r\n      const prefix = (name, mods) => {\r\n        if (typeof mods === 'string') {\r\n          return join(name, mods, MODS);\r\n        }\r\n        if (Array.isArray(mods)) {\r\n          return mods.map((item) => prefix(name, item));\r\n        }\r\n        const ret = {};\r\n        Object.keys(mods || {}).forEach((key) => {\r\n          ret[name + MODS + key] = mods[key];\r\n        });\r\n        return ret;\r\n      };\r\n      el = join(name, el, ELEMENT);\r\n      return mods ? [el, prefix(el, mods)] : el;\r\n    },\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://mui/./components/lib/video/src/main.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/lib/video/src/main.vue?vue&type=template&id=03bef65d&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/lib/video/src/main.vue?vue&type=template&id=03bef65d& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { class: _vm.b(), style: _vm.styleName }, [\n    _c(\"div\", { class: _vm.b(\"border\") }, [\n      _c(\"span\", { style: _vm.borderStyleName }),\n      _vm._v(\" \"),\n      _c(\"span\", { style: _vm.borderStyleName }),\n      _vm._v(\" \"),\n      _c(\"span\", { style: _vm.borderStyleName }),\n      _vm._v(\" \"),\n      _c(\"span\", { style: _vm.borderStyleName }),\n    ]),\n    _vm._v(\" \"),\n    _c(\"img\", {\n      class: _vm.b(\"img\"),\n      style: _vm.imgStyleName,\n      attrs: { src: _vm.background },\n    }),\n    _vm._v(\" \"),\n    _c(\"video\", {\n      ref: \"main\",\n      class: _vm.b(\"main\"),\n      attrs: { autoplay: \"\", muted: \"\" },\n      domProps: { muted: true },\n    }),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://mui/./components/lib/video/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

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