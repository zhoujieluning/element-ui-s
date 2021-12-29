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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/lib/sign/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./packages/lib/sign/src/main.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./packages/lib/sign/src/main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: 'els-sign',\r\n  props: {\r\n    width: {\r\n      type: Number,\r\n      default: 600,\r\n    },\r\n    height: {\r\n      type: Number,\r\n      default: 400,\r\n    },\r\n  },\r\n  data() {\r\n    return {\r\n      linex: [],\r\n      liney: [],\r\n      linen: [],\r\n      canvas: {},\r\n      context: {},\r\n    };\r\n  },\r\n  computed: {\r\n    styleName() {\r\n      return {\r\n        width: this.setPx(this.width),\r\n        height: this.setPx(this.height),\r\n      };\r\n    },\r\n  },\r\n  mounted() {\r\n    this.init();\r\n  },\r\n  methods: {\r\n    getStar(text, text1, text2) {\r\n      var canvas = this.canvas;\r\n      var context = this.context;\r\n      // 绘制印章边框\r\n      var width = canvas.width / 2;\r\n      var height = canvas.height / 2;\r\n      context.lineWidth = 7;\r\n      context.strokeStyle = '#f00';\r\n      context.beginPath();\r\n      context.arc(width, height, 110, 0, Math.PI * 2);\r\n      context.stroke();\r\n\r\n      //画五角星\r\n      create5star(context, width, height, 20, '#f00', 0);\r\n\r\n      // 绘制印章名称\r\n      context.font = '18px 黑体';\r\n      context.textBaseline = 'middle'; //设置文本的垂直对齐方式\r\n      context.textAlign = 'center'; //设置文本的水平对对齐方式\r\n      context.lineWidth = 1;\r\n      context.strokeStyle = '#f00';\r\n      context.strokeText(text, width, height + 50);\r\n\r\n      // 绘制印章副属性名称\r\n      context.font = '14px 黑体';\r\n      context.textBaseline = 'middle'; //设置文本的垂直对齐方式\r\n      context.textAlign = 'center'; //设置文本的水平对对齐方式\r\n      context.lineWidth = 1;\r\n      context.strokeStyle = '#f00';\r\n      context.strokeText(text2, width, height + 80);\r\n\r\n      // 绘制印章单位\r\n      context.translate(width, height); // 平移到此位置,\r\n      context.font = '22px 黑体';\r\n      var count = text1.length; // 字数\r\n      var angle = (4 * Math.PI) / (3 * (count - 1)); // 字间角度\r\n      var chars = text1.split('');\r\n      var c;\r\n      for (var i = 0; i < count; i++) {\r\n        c = chars[i]; // 需要绘制的字符\r\n        if (i == 0) context.rotate((5 * Math.PI) / 6);\r\n        else context.rotate(angle); //\r\n        context.save();\r\n        context.translate(90, 0); // 平移到此位置,此时字和x轴垂直\r\n        context.rotate(Math.PI / 2); // 旋转90度,让字平行于x轴\r\n        context.strokeText(c, 0, 0); // 此点为字的中心点\r\n        context.restore();\r\n        context.save(); //锁画布(为了保存之前的画布状态)\r\n      }\r\n\r\n      //绘制五角星\r\n      /**\r\n       * 创建一个五角星形状. 该五角星的中心坐标为(sx,sy),中心到顶点的距离为radius,rotate=0时一个顶点在对称轴上\r\n       * rotate:绕对称轴旋转rotate弧度\r\n       */\r\n      function create5star(context, sx, sy, radius, color, rotato) {\r\n        context.save();\r\n        context.fillStyle = color;\r\n        context.translate(sx, sy); //移动坐标原点\r\n        context.rotate(Math.PI + rotato); //旋转\r\n        context.beginPath(); //创建路径\r\n        var x = Math.sin(0);\r\n        var y = Math.cos(0);\r\n        var dig = (Math.PI / 5) * 4;\r\n        for (var i = 0; i < 5; i++) {\r\n          //画五角星的五条边\r\n          var x = Math.sin(i * dig);\r\n          var y = Math.cos(i * dig);\r\n          context.lineTo(x * radius, y * radius);\r\n        }\r\n        context.closePath();\r\n        context.stroke();\r\n        context.fill();\r\n        context.restore();\r\n      }\r\n    },\r\n    submit(width, height) {\r\n      if (!width) width = this.width;\r\n      if (!height) height = this.height;\r\n      return this.canvas.toDataURL('i/png');\r\n    },\r\n    clear() {\r\n      this.linex = new Array();\r\n      this.liney = new Array();\r\n      this.linen = new Array();\r\n      this.canvas.width = this.canvas.width;\r\n    },\r\n    init() {\r\n      this.canvas = this.$refs.canvas;\r\n      var canvas = this.canvas;\r\n      var _safe = this;\r\n      //注册相关事件\r\n      if (typeof document.ontouchstart != 'undefined') {\r\n        //适配移动设备\r\n        canvas.addEventListener('touchmove', onMouseMove, false);\r\n        canvas.addEventListener('touchstart', onMouseDown, false);\r\n        canvas.addEventListener('touchend', onMouseUp, false);\r\n      } else {\r\n        //适配电脑\r\n        canvas.addEventListener('mousemove', onMouseMove, false);\r\n        canvas.addEventListener('mousedown', onMouseDown, false);\r\n        canvas.addEventListener('mouseup', onMouseUp, false);\r\n        canvas.addEventListener('mouseleave', onMouseUp, false);\r\n      }\r\n      //初始化上下文和参数\r\n      this.context = canvas.getContext('2d');\r\n      var context = this.context;\r\n      this.linex = new Array();\r\n      this.liney = new Array();\r\n      this.linen = new Array();\r\n      var lastX = 1;\r\n      var lastY = 30;\r\n      var flag = 0;\r\n\r\n      //根据鼠标坐标获取绘图坐标\r\n      function getCanvasPos(canvas, evt) {\r\n        var rect = canvas.getBoundingClientRect();\r\n        var x, y;\r\n        if (evt.targetTouches) {\r\n          x = evt.targetTouches[0].clientX;\r\n          y = evt.targetTouches[0].clientY;\r\n        } else {\r\n          x = evt.clientX;\r\n          y = evt.clientY;\r\n        }\r\n        return {\r\n          x: (x - rect.left) * (canvas.width / rect.width),\r\n          y: (y - rect.top) * (canvas.height / rect.height),\r\n        };\r\n      }\r\n\r\n      //鼠标移动的时候\r\n      function onMouseMove(evt) {\r\n        var x = getCanvasPos(canvas, evt).x,\r\n          y = getCanvasPos(canvas, evt).y;\r\n\r\n        //判断是否处于按下状态\r\n        if (flag == 1) {\r\n          //如果是则画图\r\n          _safe.linex.push(x);\r\n          _safe.liney.push(y);\r\n          _safe.linen.push(1);\r\n          context.save();\r\n          context.translate(\r\n            context.canvas.width / 2,\r\n            context.canvas.height / 2\r\n          );\r\n          context.translate(\r\n            -context.canvas.width / 2,\r\n            -context.canvas.height / 2\r\n          );\r\n          context.beginPath();\r\n          context.lineWidth = 2;\r\n          for (var i = 1; i < _safe.linex.length; i++) {\r\n            lastX = _safe.linex[i];\r\n            lastY = _safe.liney[i];\r\n            if (_safe.linen[i] == 0) context.moveTo(lastX, lastY);\r\n            else context.lineTo(lastX, lastY);\r\n          }\r\n          context.shadowBlur = 10;\r\n          context.stroke();\r\n          context.restore();\r\n        }\r\n        evt.preventDefault();\r\n      }\r\n\r\n      //当鼠标按下的时候修改按下标志，并开始记录坐标\r\n      function onMouseDown(evt) {\r\n        var x = getCanvasPos(canvas, evt).x,\r\n          y = getCanvasPos(canvas, evt).y;\r\n        flag = 1;\r\n        _safe.linex.push(x);\r\n        _safe.liney.push(y);\r\n        _safe.linen.push(0);\r\n      }\r\n\r\n      //鼠标松开清除标志\r\n      function onMouseUp() {\r\n        flag = 0;\r\n      }\r\n    },\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://mui/./packages/lib/sign/src/main.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/lib/sign/src/main.vue?vue&type=template&id=f1e3b110&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/lib/sign/src/main.vue?vue&type=template&id=f1e3b110& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"canvas\", {\n    ref: \"canvas\",\n    staticStyle: { border: \"1px solid #ccc\" },\n    attrs: { width: _vm.width, height: _vm.height },\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://mui/./packages/lib/sign/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

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

/***/ "./packages/lib/sign/index.js":
/*!************************************!*\
  !*** ./packages/lib/sign/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./packages/lib/sign/src/main.vue\");\n\r\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install =function(Vue){\r\n    Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name,_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://mui/./packages/lib/sign/index.js?");

/***/ }),

/***/ "./packages/lib/sign/src/main.vue":
/*!****************************************!*\
  !*** ./packages/lib/sign/src/main.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_f1e3b110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=f1e3b110& */ \"./packages/lib/sign/src/main.vue?vue&type=template&id=f1e3b110&\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ \"./packages/lib/sign/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_f1e3b110___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _main_vue_vue_type_template_id_f1e3b110___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/lib/sign/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://mui/./packages/lib/sign/src/main.vue?");

/***/ }),

/***/ "./packages/lib/sign/src/main.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./packages/lib/sign/src/main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./packages/lib/sign/src/main.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://mui/./packages/lib/sign/src/main.vue?");

/***/ }),

/***/ "./packages/lib/sign/src/main.vue?vue&type=template&id=f1e3b110&":
/*!***********************************************************************!*\
  !*** ./packages/lib/sign/src/main.vue?vue&type=template&id=f1e3b110& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_f1e3b110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=f1e3b110& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/lib/sign/src/main.vue?vue&type=template&id=f1e3b110&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_f1e3b110___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_f1e3b110___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://mui/./packages/lib/sign/src/main.vue?");

/***/ })

/******/ });
});