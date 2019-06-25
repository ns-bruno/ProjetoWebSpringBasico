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
/******/ 	return __webpack_require__(__webpack_require__.s = "../webapp/WEB-INF/pages/login/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../webapp/WEB-INF/components sync My[A-Z]\\w+\\.(vue|js)$":
/*!****************************************************************************!*\
  !*** ../webapp/WEB-INF/components sync nonrecursive My[A-Z]\w+\.(vue|js)$ ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./MyDialogReturnWebservice.vue": "../webapp/WEB-INF/components/MyDialogReturnWebservice.vue",
	"./MyNavigationDrawer.vue": "../webapp/WEB-INF/components/MyNavigationDrawer.vue",
	"./MySelect.vue": "../webapp/WEB-INF/components/MySelect.vue",
	"./MyTextField.vue": "../webapp/WEB-INF/components/MyTextField.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../webapp/WEB-INF/components sync My[A-Z]\\w+\\.(vue|js)$";

/***/ }),

/***/ "../webapp/WEB-INF/components/MyDialogReturnWebservice.vue":
/*!*****************************************************************!*\
  !*** ../webapp/WEB-INF/components/MyDialogReturnWebservice.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDialogReturnWebservice_vue_vue_type_template_id_2a8f4743___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743& */ "../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743&");
/* harmony import */ var _MyDialogReturnWebservice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyDialogReturnWebservice.vue?vue&type=script&lang=js& */ "../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyDialogReturnWebservice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyDialogReturnWebservice_vue_vue_type_template_id_2a8f4743___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyDialogReturnWebservice_vue_vue_type_template_id_2a8f4743___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "webapp/WEB-INF/components/MyDialogReturnWebservice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDialogReturnWebservice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/babel-loader/lib!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MyDialogReturnWebservice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDialogReturnWebservice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743&":
/*!************************************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDialogReturnWebservice_vue_vue_type_template_id_2a8f4743___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDialogReturnWebservice_vue_vue_type_template_id_2a8f4743___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDialogReturnWebservice_vue_vue_type_template_id_2a8f4743___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../webapp/WEB-INF/components/MyNavigationDrawer.vue":
/*!***********************************************************!*\
  !*** ../webapp/WEB-INF/components/MyNavigationDrawer.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyNavigationDrawer_vue_vue_type_template_id_10e8e34f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyNavigationDrawer.vue?vue&type=template&id=10e8e34f& */ "../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=template&id=10e8e34f&");
/* harmony import */ var _MyNavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyNavigationDrawer.vue?vue&type=script&lang=js& */ "../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyNavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyNavigationDrawer_vue_vue_type_template_id_10e8e34f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyNavigationDrawer_vue_vue_type_template_id_10e8e34f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "webapp/WEB-INF/components/MyNavigationDrawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/babel-loader/lib!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MyNavigationDrawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=template&id=10e8e34f&":
/*!******************************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=template&id=10e8e34f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNavigationDrawer_vue_vue_type_template_id_10e8e34f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MyNavigationDrawer.vue?vue&type=template&id=10e8e34f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=template&id=10e8e34f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNavigationDrawer_vue_vue_type_template_id_10e8e34f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNavigationDrawer_vue_vue_type_template_id_10e8e34f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../webapp/WEB-INF/components/MySelect.vue":
/*!*************************************************!*\
  !*** ../webapp/WEB-INF/components/MySelect.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MySelect_vue_vue_type_template_id_30441326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MySelect.vue?vue&type=template&id=30441326& */ "../webapp/WEB-INF/components/MySelect.vue?vue&type=template&id=30441326&");
/* harmony import */ var _MySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MySelect.vue?vue&type=script&lang=js& */ "../webapp/WEB-INF/components/MySelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MySelect_vue_vue_type_template_id_30441326___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MySelect_vue_vue_type_template_id_30441326___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "webapp/WEB-INF/components/MySelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../webapp/WEB-INF/components/MySelect.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MySelect.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/babel-loader/lib!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MySelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MySelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../webapp/WEB-INF/components/MySelect.vue?vue&type=template&id=30441326&":
/*!********************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MySelect.vue?vue&type=template&id=30441326& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MySelect_vue_vue_type_template_id_30441326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MySelect.vue?vue&type=template&id=30441326& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MySelect.vue?vue&type=template&id=30441326&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MySelect_vue_vue_type_template_id_30441326___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MySelect_vue_vue_type_template_id_30441326___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../webapp/WEB-INF/components/MyTextField.vue":
/*!****************************************************!*\
  !*** ../webapp/WEB-INF/components/MyTextField.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyTextField_vue_vue_type_template_id_046b5913___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyTextField.vue?vue&type=template&id=046b5913& */ "../webapp/WEB-INF/components/MyTextField.vue?vue&type=template&id=046b5913&");
/* harmony import */ var _MyTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyTextField.vue?vue&type=script&lang=js& */ "../webapp/WEB-INF/components/MyTextField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_resources_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyTextField_vue_vue_type_template_id_046b5913___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyTextField_vue_vue_type_template_id_046b5913___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "webapp/WEB-INF/components/MyTextField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../webapp/WEB-INF/components/MyTextField.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MyTextField.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/babel-loader/lib!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MyTextField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyTextField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_resources_node_modules_babel_loader_lib_index_js_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../webapp/WEB-INF/components/MyTextField.vue?vue&type=template&id=046b5913&":
/*!***********************************************************************************!*\
  !*** ../webapp/WEB-INF/components/MyTextField.vue?vue&type=template&id=046b5913& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTextField_vue_vue_type_template_id_046b5913___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../resources/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../resources/node_modules/vue-loader/lib??vue-loader-options!./MyTextField.vue?vue&type=template&id=046b5913& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyTextField.vue?vue&type=template&id=046b5913&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTextField_vue_vue_type_template_id_046b5913___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _resources_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_resources_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTextField_vue_vue_type_template_id_046b5913___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../webapp/WEB-INF/pages/globalComponents.js":
/*!***************************************************!*\
  !*** ../webapp/WEB-INF/pages/globalComponents.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/upperFirst */ "./node_modules/lodash/upperFirst.js");
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Document   : globalComponents
 * Created on : 10/05/2019, 13:03:38
 * Author     : Bruno Nogueira Silva
 */




const requireComponent = __webpack_require__("../webapp/WEB-INF/components sync My[A-Z]\\w+\\.(vue|js)$");

requireComponent.keys().forEach(fileName => {
  // Pega a configuração do componente
  const componentConfig = requireComponent(fileName); // Obtém nome em PascalCase do componente

  const componentName = lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1___default()(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default()( // Tira o início `./` e a extensão do nome do arquivo
  fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))); // Registra o componente globalmente

  vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(componentName, // Olha para as opções em `.default`, existentes
  // se o componente foi exportado com `export default`,
  // caso contrário usa o módulo raiz.
  componentConfig.default || componentConfig);
});

/***/ }),

/***/ "../webapp/WEB-INF/pages/login/login.js":
/*!**********************************************!*\
  !*** ../webapp/WEB-INF/pages/login/login.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.min.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalComponents */ "../webapp/WEB-INF/pages/globalComponents.js");
/* harmony import */ var services_webservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/webservice */ "../webapp/WEB-INF/services/webservice.js");
/* harmony import */ var services_baseMyService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/baseMyService */ "../webapp/WEB-INF/services/baseMyService.js");





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a, {
  iconfont: 'mdi'
});
var login = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#login',
  data: {
    showDispositivo: false,
    showSenha: false,
    valido: false,
    smausuar: {},
    smadispo: {}
  },
  mixins: [services_baseMyService__WEBPACK_IMPORTED_MODULE_4__["default"], services_webservice__WEBPACK_IMPORTED_MODULE_3__["default"]],
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },

    login() {
      // Limpa o retorno do webservice
      this.returnWebservice = null; // Envia o texto para o webservice para criptografar ou descriptografar.

      this.conectWebserviceJson('./Smausuar/Autenticador', // URL
      this.POST, // Metodo
      this.smadispo.identificacao, // Chave
      this.smausuar, // Dados
      {
        resume: true
      }) // Parametro
      .then(retorno => {
        console.log('Vai para outra tela');
        this.returnWebservice = retorno.object;
        console.log(this.returnWebservice);
        sessionStorage.setItem('usuarios', this.returnWebservice);
      }).catch(error => {
        //console.log('log encription do catch response: ' + JSON.stringify(error));
        if (error.statusRetorno) {
          this.returnWebserviceStatus = error.statusRetorno;
        } else {
          this.returnWebserviceStatus = error.toString();
        }

        this.dialogError = true;
      });
    }

  }
});

/***/ }),

/***/ "../webapp/WEB-INF/services/baseMyRules.js":
/*!*************************************************!*\
  !*** ../webapp/WEB-INF/services/baseMyRules.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    /**
     * Funcao para retorna uma mensagem caso o campo seja obrigatorio.
     * @param {type} value
     * @returns {String|Boolean}
     */
    requiredRules: function (value) {
      if (this.myrequired && ( // null or undefined
      value == null || // has length and it's zero
      value.hasOwnProperty('length') && value.length === 0 || // is an Object and has no keys
      value.constructor === Object && Object.keys(value).length === 0)) {
        //console.log('requiredRules ' + this.myrequired + ' ' + value);
        return "Campo é obrigatório!";
      } else {
        return false;
      }
    },

    /**
     * Valida se o email passado por parametro eh valido. Se nao for valido
     *  retorna uma mensagem(String), mas se for valido entao retorna false(Boolean).
     * @param {type} value
     * @returns {String|Boolean}
     */
    emailRules: function (value) {
      if (this.myisemail && !!value) {
        //console.log('emailRules ' + th.myisemail + ' ' + value);
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'E-mail invalido!';
      } else {
        return false;
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.toUpperCase();
    }
  }
});

/***/ }),

/***/ "../webapp/WEB-INF/services/baseMyService.js":
/*!***************************************************!*\
  !*** ../webapp/WEB-INF/services/baseMyService.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    dispositivo: null,
    drawer: null,
    dialogError: false,
    dialogDelete: false,
    returnWebservice: null,
    returnWebserviceStatus: {
      codigoRetorno: 0,
      errorMsg: '',
      errorMsgExtra: ''
    }
  },
  methods: {
    /**
     * Recebe a comunicacao do component MyDialogReturnWebservice.vue onde 
     * indica se eh pra fechar o dialog ou nao.
     * @param {type} dialogError
     * @returns {undefined}
     */
    closeDialogError: function (dialogError) {
      if (!dialogError) {
        this.dialogError = false;
        this.returnWebserviceStatus = {
          codigoRetorno: 0,
          errorMsg: '',
          errorMsgExtra: ''
        };
      }
    },

    /**
     * Pega os dados do dispositivo salvo no computador local.
     * @returns {DOMString}
     */
    getDispositivo: function () {
      // Checa se tem a cave salva no session storaege
      if (sessionStorage.getItem("dispositivo") === null) {
        return null;
      } else {
        return sessionStorage.getItem("dispositivo");
      }
    }
  }
});

/***/ }),

/***/ "../webapp/WEB-INF/services/webservice.js":
/*!************************************************!*\
  !*** ../webapp/WEB-INF/services/webservice.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/dist/axios.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Document   : webservice
 * Created on : 07/06/2019, 08:56:00
 * Author     : Bruno Nogueira Silva
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT'
  },
  methods: {
    /**
     * Funcao para buscar os dados na API rest (webservice).
     * Foi criado essa funcao com uma Promise (promessa) de returnar os dados do servidor 
     * ou retornar uma rejeição(erro).
     * 
     * @param {type} url
     * @param {type} metodo - 'GET', 'POST', 'DELETE', 'PUT'
     * @param {type} chave - Exemplo: 0123456789Aa
     * @param {type} dados
     * @param {type} parametrosUrl - Tem que ser passado no formato JSON. Exemplo: {resume: true, colunns: 'id, nome'}
     * @returns {Promise}
     */
    returnWebserviceJsonPromise: function (url, metodo, chave, dados, parametrosUrl) {
      dados = dados ? dados : {};
      parametrosUrl = parametrosUrl ? parametrosUrl : null;
      url = url + (chave ? "?dispositivo={identificacao=\'" + chave + "\'}" : "");
      let configuracoes = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };

      if (parametrosUrl) {
        var size = 0;

        for (var key in parametrosUrl) {
          // Pega o valor da chave
          var value = parametrosUrl[key]; // Checa se realmente tem algum valor no elemento

          if (value || typeof value === 'number') {
            if (!chave && size === 0) {
              url = url + "?";
            } else {
              url = url + "&";
            } //url = url + key + "=" + ((typeof (value) === 'string') ? "\"" + value + "\"" : value);


            url = url + key + "=" + value;
            size++;
          }
        }
      } // Codifica a url, substituindo os caracteres especiais


      url = encodeURI(url); // Cria uma nova promessa de retorno

      return new Promise((resolve, reject) => {
        if (metodo && (metodo === 'GET' || metodo === 'get')) {} else if (metodo && (metodo === 'POST' || metodo === 'post')) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, dados, configuracoes).then(function (response) {
            //console.log('log webservice do then axios response: ' + JSON.stringify(response));
            // Checa o status do header do rest
            if (response.status === 200) {
              if (response.data.statusRetorno.codigoRetorno === 200) {
                resolve({
                  statusRetorno: response.data.statusRetorno,
                  object: response.data.object,
                  page: response.data.page
                });
              } else {
                reject({
                  statusRetorno: {
                    codigoRetorno: response.data.statusRetorno.codigoRetorno,
                    mensagemRetorno: response.data.statusRetorno.mensagemRetorno,
                    extra: response.data.statusRetorno.extra
                  }
                });
              }
            } else {
              reject({
                statusRetorno: {
                  codigoRetorno: response.status,
                  mensagemRetorno: response.statusText,
                  extra: ''
                }
              });
            }
          }).catch(function (error) {
            //console.log('log webservice do catch axios response: ' + error);
            var msgRetorno = ''; // Verifica se tem mais algum dados importate para mostrar na mensagem de erro

            if (error.response) {
              msgRetorno = msgRetorno + '\n response.data: ' + error.response.data;
              msgRetorno = msgRetorno + '\n response.headers: ' + JSON.stringify(error.response.headers);
            } else if (error.request) {
              msgRetorno = msgRetorno + '\n request: ' + error.request;
            } else {
              msgRetorno = msgRetorno + '\n message: ' + error.message;
            }

            reject({
              statusRetorno: {
                codigoRetorno: 0,
                mensagemRetorno: error.toString(),
                extra: msgRetorno
              }
            });
          });
        } else {
          reject({
            statusRetorno: {
              codigoRetorno: 0,
              mensagemRetorno: 'Metodos não definido ou não encontramos este metodos: "' + metodo + '"',
              extra: ''
            }
          });
        }
      });
    },

    /**
     * Essa funcao foi criada com assyncrona para o codigo js parar e aguardar 
     * a execucao da funcao returnWebserviceJsonPromise que pega os dados do webservice (API Rest) 
     * quando os dados de sucesso ou erro eh retornado entao o javascript continua a sua sequencia
     * de execucao.
     * 
     * @param {type} url
     * @param {type} metodo
     * @param {type} chave
     * @param {type} dados
     * @param {type} parametrosUrl
     * @param {type} configuracoes
     * @returns {Promise}
     */
    conectWebserviceJson: async function (url, metodo, chave, dados, parametrosUrl, configuracoes) {
      try {
        return await this.returnWebserviceJsonPromise(url, metodo, chave, dados, parametrosUrl, configuracoes);
      } catch (error) {
        throw error;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/axios/dist/axios.js":
/*!******************************************!*\
  !*** ./node_modules/axios/dist/axios.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* axios v0.19.0 | (c) 2019 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var mergeConfig = __webpack_require__(22);
	var defaults = __webpack_require__(11);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(mergeConfig(axios.defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(10);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Function equal to merge with the difference being that no reference
	 * to original objects is kept.
	 *
	 * @see merge
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function deepMerge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = deepMerge(result[key], val);
	    } else if (typeof val === 'object') {
	      result[key] = deepMerge({}, val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  deepMerge: deepMerge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	
	module.exports = function isBuffer (obj) {
	  return obj != null && obj.constructor != null &&
	    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var buildURL = __webpack_require__(6);
	var InterceptorManager = __webpack_require__(7);
	var dispatchRequest = __webpack_require__(8);
	var mergeConfig = __webpack_require__(22);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
	  }
	
	  config = mergeConfig(this.defaults, config);
	  config.method = config.method ? config.method.toLowerCase() : 'get';
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	Axios.prototype.getUri = function getUri(config) {
	  config = mergeConfig(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }
	
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(9);
	var isCancel = __webpack_require__(10);
	var defaults = __webpack_require__(11);
	var isAbsoluteURL = __webpack_require__(20);
	var combineURLs = __webpack_require__(21);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(12);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  // Only Node.JS has a process variable that is of [[Class]] process
	  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(13);
	  } else if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(13);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(14);
	var buildURL = __webpack_require__(6);
	var parseHeaders = __webpack_require__(17);
	var isURLSameOrigin = __webpack_require__(18);
	var createError = __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }
	
	      reject(createError('Request aborted', config, 'ECONNABORTED', request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(19);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(15);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(16);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	
	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;
	
	  error.toJSON = function() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code
	    };
	  };
	  return error;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;
	
	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;
	
	        if (msie) {
	        // IE needs attribute set twice to normalize properties
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }
	
	        urlParsingNode.setAttribute('href', href);
	
	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	        return {
	          href: urlParsingNode.href,
	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	          host: urlParsingNode.host,
	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	          hostname: urlParsingNode.hostname,
	          port: urlParsingNode.port,
	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	            urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname
	        };
	      }
	
	      originURL = resolveURL(window.location.href);
	
	      /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));
	
	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }
	
	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }
	
	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }
	
	          if (secure === true) {
	            cookie.push('secure');
	          }
	
	          document.cookie = cookie.join('; ');
	        },
	
	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },
	
	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	module.exports = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};
	
	  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    }
	  });
	
	  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
	    if (utils.isObject(config2[prop])) {
	      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
	    } else if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (utils.isObject(config1[prop])) {
	      config[prop] = utils.deepMerge(config1[prop]);
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });
	
	  utils.forEach([
	    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
	    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
	    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
	    'socketPath'
	  ], function defaultToConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });
	
	  return config;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=axios.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'my-dialog-return-webservice',

  data() {
    return {
      mydialogerror: this.value
    };
  },

  props: {
    value: {},
    myreturnwebservicestatus: {
      type: Object,
      default: function () {
        return {
          codigoRetorno: 0,
          errorMsg: '',
          errorMsgExtra: ''
        };
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    emitMyClickClose(dialogError) {
      this.mydialogerror = dialogError;
      this.$emit('emit-myclick-close', dialogError);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "my-navigation-drawer",

  data() {
    return {
      dispositivo: null,
      drawer: null
    };
  },

  props: {
    value: {}
  },
  methods: {
    a: function () {
      console.log('MyNavigationDrawer - Method a');
    }
  },
  watch: {//value: function(newQuestion, oldQuestion) {
    //console.log('MyTextField - watch - new: ' + newQuestion + ' old: ' + oldQuestion);
    //console.log('MyTextField - watch - value: ' + this.value);
    //}
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MySelect.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MySelect.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_baseMyRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/baseMyRules */ "../webapp/WEB-INF/services/baseMyRules.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'my-select',

  data() {
    return {};
  },

  props: {
    value: {},
    myitems: {
      type: Array,
      default: []
    },
    mylabel: {
      type: String,
      default: 'My Select'
    },
    myrequired: {
      type: Boolean,
      default: false
    },
    myitemtext: {
      type: [String, Array, Function]
    },
    myitemvalue: {
      type: [String, Array, Function]
    },
    myhint: {
      type: String
    },
    mysingleline: {
      type: Boolean,
      default: false
    },
    myreturnobject: {
      type: Boolean,
      default: false
    },
    myuppercase: {
      type: Boolean,
      default: false
    },
    myloading: {
      type: Boolean,
      default: false
    },
    myplaceholder: {
      type: String
    },
    mypersistenthint: {
      type: Boolean,
      default: false
    }
  },
  mixins: [services_baseMyRules__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {},
  watch: {//value: function(newQuestion, oldQuestion) {
    //console.log('MyTextField - watch - new: ' + newQuestion + ' old: ' + oldQuestion);
    //console.log('MyTextField - watch - value: ' + this.value);
    //}
  },
  computed: {
    localValue: {
      get: function () {
        //console.log('component - computed get ' + this.value);
        return this.value;
      },
      set: function (value) {
        // Verifica se o campo eh pra deixar tudo em maiusculo
        if (this.myuppercase) {
          value = '' + value.toString().toUpperCase();
        } //console.log('component - computed set ' + value);


        this.$emit('input', value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyTextField.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MyTextField.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_baseMyRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/baseMyRules */ "../webapp/WEB-INF/services/baseMyRules.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'my-text-field',

  data() {
    return {};
  },

  props: {
    value: {},
    myuppercase: {
      type: Boolean,
      default: true
    },
    mylabel: {
      type: String,
      default: 'My Text Field'
    },
    myrequired: {
      type: Boolean,
      default: false
    },
    mymaxlength: {
      type: Number,
      default: 250
    },
    mycounter: {
      type: Boolean,
      default: true
    },
    myisemail: {
      type: Boolean,
      default: false
    },
    mytype: {
      type: String,
      default: 'text',
      validator: function (value) {
        // O valor precisa corresponder a alguma dessas Strings
        return ['text', 'number', 'email', 'password'].indexOf(value) !== -1;
      }
    },
    myclearable: {
      type: Boolean,
      default: true
    },
    myhint: {
      type: String,
      defatult: undefined
    },
    myappendicon: {
      type: String,
      default: undefined
    },
    myprependicon: {
      type: String,
      default: undefined
    }
  },
  mixins: [services_baseMyRules__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    clickAppend: function (event) {
      this.$emit('click:append', event);
    }
  },
  watch: {
    value: function (newQuestion, oldQuestion) {//console.log('MyTextField - watch - new: ' + newQuestion + ' old: ' + oldQuestion);
      //console.log('MyTextField - watch - value: ' + this.value);
    }
  },
  computed: {
    localValue: {
      get: function () {
        //console.log('component - computed get ' + this.value);
        return this.value;
      },
      set: function (value) {
        // Verifica se o campo eh pra deixar tudo em maiusculo
        if (this.myuppercase && (this.mytype === 'text' || this.mytype === 'password' || this.mytype === 'email') && value) {
          value = '' + value.toString().toUpperCase();
        } //console.log('component - computed set ' + value);


        this.$emit('input', value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(/*! ./capitalize */ "./node_modules/lodash/capitalize.js"),
    createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MyDialogReturnWebservice.vue?vue&type=template&id=2a8f4743& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    { attrs: { value: _vm.value, "max-width": "500", scrollable: "" } },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "headline error white--text" }, [
            _vm._v(
              "\n          Código do Retorno: " +
                _vm._s(this.myreturnwebservicestatus.codigoRetorno) +
                "\n      "
            )
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v(_vm._s(this.myreturnwebservicestatus.mensagemRetorno))
          ]),
          _vm._v(" "),
          this.myreturnwebservicestatus.extra
            ? _c(
                "v-expansion-panel",
                [
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                        _vm._v("Extra")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c("v-card-text", { staticClass: "grey lighten-3" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(this.myreturnwebservicestatus.extra) +
                                "\n              "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { outline: "", flat: "flat", color: "default" },
                  on: {
                    click: function($event) {
                      return _vm.emitMyClickClose(false)
                    }
                  }
                },
                [_vm._v("Fechar")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=template&id=10e8e34f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MyNavigationDrawer.vue?vue&type=template&id=10e8e34f& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.dispositivo == null
    ? _c(
        "v-navigation-drawer",
        {
          attrs: { fixed: "", app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-tile",
                { on: { click: _vm.a } },
                [
                  _c("v-list-tile-action", [_c("v-icon", [_vm._v("home")])], 1),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Home")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { on: { click: _vm.a } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("contact_mail")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Contact")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { on: { click: _vm.a } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("contact_mail")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-tile-content", [_c("v-list-tile-title")], 1)
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MySelect.vue?vue&type=template&id=30441326&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MySelect.vue?vue&type=template&id=30441326& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-autocomplete", {
    attrs: {
      value: _vm.value,
      label: _vm.mylabel,
      items: _vm.myitems,
      "item-text": _vm.myitemtext,
      "item-value": _vm.myitemvalue,
      loading: _vm.myloading,
      hint: _vm.myhint,
      placeholder: _vm.myplaceholder,
      "persistent-hint": _vm.mypersistenthint,
      rules: [_vm.requiredRules]
    },
    model: {
      value: _vm.localValue,
      callback: function($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../webapp/WEB-INF/components/MyTextField.vue?vue&type=template&id=046b5913&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../webapp/WEB-INF/components/MyTextField.vue?vue&type=template&id=046b5913& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-text-field", {
    attrs: {
      label: _vm.mylabel,
      maxlength: _vm.mymaxlength,
      rules: [_vm.requiredRules, _vm.emailRules],
      counter: _vm.mycounter,
      type: _vm.mytype,
      clearable: _vm.myclearable,
      hint: _vm.myhint,
      "append-icon": _vm.myappendicon,
      "prepend-icon": _vm.myprependicon,
      value: _vm.value
    },
    on: { "click:append": _vm.clickAppend },
    model: {
      value: _vm.localValue,
      callback: function($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.js":
/*!**************************************!*\
  !*** ./node_modules/vue/dist/vue.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.10';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving the component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuetify/dist/vuetify.min.js":
/*!**************************************************!*\
  !*** ./node_modules/vuetify/dist/vuetify.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* Vuetify v1.5.15
* Forged by John Leider
* Released under the MIT License.
*/
!function(t,e){ true?module.exports=e(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=76)}([function(e,i){e.exports=t},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"linear",function(){return at}),i.d(n,"easeInQuad",function(){return ot}),i.d(n,"easeOutQuad",function(){return lt}),i.d(n,"easeInOutQuad",function(){return ut}),i.d(n,"easeInCubic",function(){return ht}),i.d(n,"easeOutCubic",function(){return ct}),i.d(n,"easeInOutCubic",function(){return dt}),i.d(n,"easeInQuart",function(){return ft}),i.d(n,"easeOutQuart",function(){return pt}),i.d(n,"easeInOutQuart",function(){return vt}),i.d(n,"easeInQuint",function(){return mt}),i.d(n,"easeOutQuint",function(){return gt}),i.d(n,"easeInOutQuint",function(){return yt});var s={};i.r(s),i.d(s,"VApp",function(){return Jt}),i.d(s,"VAlert",function(){return fe}),i.d(s,"VAutocomplete",function(){return Rn}),i.d(s,"VAvatar",function(){return hn}),i.d(s,"VBadge",function(){return Yn}),i.d(s,"VBottomNav",function(){return is}),i.d(s,"VBottomSheet",function(){return os}),i.d(s,"VBreadcrumbs",function(){return hs}),i.d(s,"VBreadcrumbsItem",function(){return ls}),i.d(s,"VBreadcrumbsDivider",function(){return cs}),i.d(s,"VBtn",function(){return gs}),i.d(s,"VBtnToggle",function(){return xs}),i.d(s,"VCalendar",function(){return vr}),i.d(s,"VCalendarDaily",function(){return fr}),i.d(s,"VCalendarWeekly",function(){return or}),i.d(s,"VCalendarMonthly",function(){return lr}),i.d(s,"VCard",function(){return Sr}),i.d(s,"VCardMedia",function(){return Ir}),i.d(s,"VCardTitle",function(){return _r}),i.d(s,"VCardActions",function(){return Tr}),i.d(s,"VCardText",function(){return Ar}),i.d(s,"VCarousel",function(){return Vr}),i.d(s,"VCarouselItem",function(){return Lr}),i.d(s,"VCheckbox",function(){return wi}),i.d(s,"VChip",function(){return ve}),i.d(s,"VCombobox",function(){return Nr}),i.d(s,"VCounter",function(){return xn}),i.d(s,"VDataIterator",function(){return Gr}),i.d(s,"VDataTable",function(){return na}),i.d(s,"VEditDialog",function(){return sa}),i.d(s,"VTableOverflow",function(){return ra}),i.d(s,"VDatePicker",function(){return Ta}),i.d(s,"VDatePickerTitle",function(){return oa}),i.d(s,"VDatePickerHeader",function(){return va}),i.d(s,"VDatePickerDateTable",function(){return ba}),i.d(s,"VDatePickerMonthTable",function(){return xa}),i.d(s,"VDatePickerYears",function(){return wa}),i.d(s,"VDialog",function(){return rs}),i.d(s,"VDivider",function(){return Ci}),i.d(s,"VExpansionPanel",function(){return Ba}),i.d(s,"VExpansionPanelContent",function(){return Ea}),i.d(s,"VFooter",function(){return Pa}),i.d(s,"VForm",function(){return Ma}),i.d(s,"VContainer",function(){return Na}),i.d(s,"VContent",function(){return Ha}),i.d(s,"VFlex",function(){return ja}),i.d(s,"VLayout",function(){return za}),i.d(s,"VSpacer",function(){return Ra}),i.d(s,"VHover",function(){return Wa}),i.d(s,"VIcon",function(){return le}),i.d(s,"VImg",function(){return $r}),i.d(s,"VInput",function(){return ni}),i.d(s,"VItem",function(){return Ya}),i.d(s,"VItemGroup",function(){return ts}),i.d(s,"VJumbotron",function(){return Xa}),i.d(s,"VLabel",function(){return Ue}),i.d(s,"VList",function(){return Mi}),i.d(s,"VListGroup",function(){return ln}),i.d(s,"VListTile",function(){return Di}),i.d(s,"VListTileAction",function(){return Ei}),i.d(s,"VListTileAvatar",function(){return dn}),i.d(s,"VListTileActionText",function(){return fn}),i.d(s,"VListTileContent",function(){return pn}),i.d(s,"VListTileTitle",function(){return vn}),i.d(s,"VListTileSubTitle",function(){return mn}),i.d(s,"VMenu",function(){return We}),i.d(s,"VMessages",function(){return Ke}),i.d(s,"VNavigationDrawer",function(){return qa}),i.d(s,"VOverflowBtn",function(){return Hr}),i.d(s,"VPagination",function(){return Ja}),i.d(s,"VSheet",function(){return br}),i.d(s,"VParallax",function(){return Qa}),i.d(s,"VPicker",function(){return ka}),i.d(s,"VProgressCircular",function(){return ds}),i.d(s,"VProgressLinear",function(){return Bn}),i.d(s,"VRadioGroup",function(){return to}),i.d(s,"VRadio",function(){return so}),i.d(s,"VRangeSlider",function(){return lo}),i.d(s,"VRating",function(){return uo}),i.d(s,"VResponsive",function(){return kr}),i.d(s,"VSelect",function(){return Wr}),i.d(s,"VSlider",function(){return ao}),i.d(s,"VSnackbar",function(){return ho}),i.d(s,"VSparkline",function(){return xo}),i.d(s,"VSpeedDial",function(){return wo}),i.d(s,"VStepper",function(){return ko}),i.d(s,"VStepperContent",function(){return $o}),i.d(s,"VStepperStep",function(){return Co}),i.d(s,"VStepperHeader",function(){return Io}),i.d(s,"VStepperItems",function(){return _o}),i.d(s,"VSubheader",function(){return _i}),i.d(s,"VSwitch",function(){return Ao}),i.d(s,"VSystemBar",function(){return Oo}),i.d(s,"VTabs",function(){return No}),i.d(s,"VTab",function(){return Ho}),i.d(s,"VTabItem",function(){return jo}),i.d(s,"VTabsItems",function(){return Eo}),i.d(s,"VTabsSlider",function(){return Vo}),i.d(s,"VTextarea",function(){return Ro}),i.d(s,"VTextField",function(){return Wo}),i.d(s,"VTimeline",function(){return Xo}),i.d(s,"VTimelineItem",function(){return qo}),i.d(s,"VTimePicker",function(){return rl}),i.d(s,"VTimePickerClock",function(){return Zo}),i.d(s,"VTimePickerTitle",function(){return Ko}),i.d(s,"VToolbar",function(){return ll}),i.d(s,"VToolbarSideIcon",function(){return ul}),i.d(s,"VToolbarTitle",function(){return hl}),i.d(s,"VToolbarItems",function(){return cl}),i.d(s,"VTooltip",function(){return dl}),i.d(s,"VTreeview",function(){return Sl}),i.d(s,"VTreeviewNode",function(){return vl}),i.d(s,"VWindow",function(){return Er}),i.d(s,"VWindowItem",function(){return Pr}),i.d(s,"VBottomSheetTransition",function(){return Ni}),i.d(s,"VCarouselTransition",function(){return Fi}),i.d(s,"VCarouselReverseTransition",function(){return Hi}),i.d(s,"VTabTransition",function(){return ji}),i.d(s,"VTabReverseTransition",function(){return zi}),i.d(s,"VMenuTransition",function(){return Ri}),i.d(s,"VFabTransition",function(){return Wi}),i.d(s,"VDialogTransition",function(){return Yi}),i.d(s,"VDialogBottomTransition",function(){return Xi}),i.d(s,"VFadeTransition",function(){return Ui}),i.d(s,"VScaleTransition",function(){return qi}),i.d(s,"VScrollXTransition",function(){return Ki}),i.d(s,"VScrollXReverseTransition",function(){return Gi}),i.d(s,"VScrollYTransition",function(){return Zi}),i.d(s,"VScrollYReverseTransition",function(){return Ji}),i.d(s,"VSlideXTransition",function(){return Qi}),i.d(s,"VSlideXReverseTransition",function(){return tn}),i.d(s,"VSlideYTransition",function(){return en}),i.d(s,"VSlideYReverseTransition",function(){return nn}),i.d(s,"VExpandTransition",function(){return sn}),i.d(s,"VExpandXTransition",function(){return rn}),i.d(s,"VRowExpandTransition",function(){return an});i(8);var r=i(0),a=i.n(r),o={bar:0,bottom:0,footer:0,insetFooter:0,left:0,right:0,top:0,components:{bar:{},bottom:{},footer:{},insetFooter:{},left:{},right:{},top:{}},bind:function(t,e,i){var n;this.components[e]&&(this.components[e]=((n={})[t]=i,n),this.update(e))},unbind:function(t,e){null!=this.components[e][t]&&(delete this.components[e][t],this.update(e))},update:function(t){this[t]=Object.values(this.components[t]).reduce(function(t,e){return t+e},0)}},l=function(){return(l=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},u={thresholds:{xs:600,sm:960,md:1280,lg:1920},scrollbarWidth:16};function h(t){return void 0===t&&(t={}),t||(t={}),a.a.extend({data:function(){return l({clientHeight:d(),clientWidth:c(),resizeTimeout:void 0},u,t)},computed:{breakpoint:function(){var t,e=this.clientWidth<this.thresholds.xs,i=this.clientWidth<this.thresholds.sm&&!e,n=this.clientWidth<this.thresholds.md-this.scrollbarWidth&&!(i||e),s=this.clientWidth<this.thresholds.lg-this.scrollbarWidth&&!(n||i||e),r=this.clientWidth>=this.thresholds.lg-this.scrollbarWidth,a=e,o=i,l=(e||i)&&!(n||s||r),u=!e&&(i||n||s||r),h=n,c=(e||i||n)&&!(s||r),d=!(e||i)&&(n||s||r),f=s,p=(e||i||n||s)&&!r,v=!(e||i||n)&&(s||r),m=r;switch(!0){case e:t="xs";break;case i:t="sm";break;case n:t="md";break;case s:t="lg";break;default:t="xl"}return{xs:e,sm:i,md:n,lg:s,xl:r,name:t,xsOnly:a,smOnly:o,smAndDown:l,smAndUp:u,mdOnly:h,mdAndDown:c,mdAndUp:d,lgOnly:f,lgAndDown:p,lgAndUp:v,xlOnly:m,width:this.clientWidth,height:this.clientHeight,thresholds:this.thresholds,scrollbarWidth:this.scrollbarWidth}}},created:function(){"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.setDimensions,200)},setDimensions:function(){this.clientHeight=d(),this.clientWidth=c()}}})}function c(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function d(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}var f=function(){return(f=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},p={primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"};var v={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half"};var m={md:{complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached"},mdi:{complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half"},fa:v,fa4:{complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o"},faSvg:function(t,e){var i={};for(var n in e)i[n]={component:t,props:{icon:e[n].split(" fa-")}};return i}("font-awesome-icon",v)};function g(t,e){return void 0===t&&(t="md"),void 0===e&&(e={}),Object.assign({},m[t]||m.md,e)}var y=function(){return(y=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},b={minifyTheme:null,themeCache:null,customProperties:!1,cspNonce:null};var x={dataIterator:{rowsPerPageText:"Items per page:",rowsPerPageAll:"All",pageText:"{0}-{1} of {2}",noResultsText:"No matching records found",nextPage:"Next page",prevPage:"Previous page"},dataTable:{rowsPerPageText:"Rows per page:"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual"}},w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S=function(){return(S=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function k(t,e,i){return void 0===e&&(e="div"),a.a.extend({name:i||t.replace(/__/g,"-"),functional:!0,render:function(i,n){var s=n.data,r=n.children;return s.staticClass=(t+" "+(s.staticClass||"")).trim(),i(e,s,r)}})}function C(t,e){return Array.isArray(t)?t.concat(e):(t&&e.push(t),e)}function $(t,e,i){return void 0===e&&(e="top center 0"),{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render:function(e,i){var n="transition"+(i.props.group?"-group":"");i.data=i.data||{},i.data.props={name:t,mode:i.props.mode},i.data.on=i.data.on||{},Object.isExtensible(i.data.on)||(i.data.on=S({},i.data.on));var s=[],r=[];s.push(function(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}),i.props.leaveAbsolute&&r.push(function(t){return t.style.position="absolute"}),i.props.hideOnLeave&&r.push(function(t){return t.style.display="none"});var a=i.data.on,o=a.beforeEnter,l=a.leave;return i.data.on.beforeEnter=function(){return C(o,s)},i.data.on.leave=C(l,r),e(n,i.data,i.children)}}}function I(t,e,i){return void 0===i&&(i="in-out"),{name:t,functional:!0,props:{mode:{type:String,default:i}},render:function(i,n){return i("transition",{props:S({},n.props,{name:t}),on:e},n.children)}}}function _(t,e,i){t.addEventListener(e,function n(){i(),t.removeEventListener(e,n,!1)},!1)}var T=!1;try{if("undefined"!=typeof window){var A=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("testListener",A,A),window.removeEventListener("testListener",A,A)}}catch(t){console.warn(t)}function B(t,e,i){var n=e.length-1;if(n<0)return void 0===t?i:t;for(var s=0;s<n;s++){if(null==t)return i;t=t[e[s]]}return null==t?i:void 0===t[e[n]]?i:t[e[n]]}function O(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;var i=Object.keys(t);return i.length===Object.keys(e).length&&i.every(function(i){return O(t[i],e[i])})}function D(t,e,i){return e&&e.constructor===String?B(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i):i}function E(t,e,i){if(null==e)return void 0===t?i:t;if(t!==Object(t))return void 0===i?t:i;if("string"==typeof e)return D(t,e,i);if(Array.isArray(e))return B(t,e,i);if("function"!=typeof e)return i;var n=e(t,i);return void 0===n?i:n}function V(t){return Array.from({length:t},function(t,e){return e})}function P(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;var e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||P(t.parentNode)}var M={"&":"&amp;","<":"&lt;",">":"&gt;"};function L(t){return t.replace(/[&<>]/g,function(t){return M[t]||t})}function N(t,e){for(var i={},n=0;n<e.length;n++){var s=e[n];void 0!==t[s]&&(i[s]=t[s])}return i}function F(t,e){return void 0===e&&(e="px"),null==t||""===t?void 0:isNaN(+t)?String(t):""+Number(t)+e}function H(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var j=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34}),z="$vuetify.icons.";function R(t){return Object.keys(t)}var W=/-(\w)/g,Y=function(t){return t.replace(W,function(t,e){return e?e.toUpperCase():""})};function X(t){return t.charAt(0).toUpperCase()+t.slice(1)}function U(t,e,i){return t.$slots[e]&&t.$scopedSlots[e]&&t.$scopedSlots[e].name?i?"v-slot":"scoped":t.$slots[e]?"normal":t.$scopedSlots[e]?"scoped":void 0}function q(t,e,i){if(i&&(e={_isVue:!0,$parent:i,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return"[Vuetify] "+t+(e?function(t){if(t._isVue&&t.$parent){for(var e=[],i=0;t;){if(e.length>0){var n=e[e.length-1];if(n.constructor===t.constructor){i++,t=t.$parent;continue}i>0&&(e[e.length-1]=[n,i],i=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(function(t,e){return""+(0===e?"---\x3e ":" ".repeat(5+2*e))+(Array.isArray(t)?tt(t[0])+"... ("+t[1]+" recursive calls)":tt(t))}).join("\n")}return"\n\n(found in "+tt(t)+")"}(e):"")}function K(t,e,i){var n=q(t,e,i);null!=n&&console.warn(n)}function G(t,e,i){var n=q(t,e,i);null!=n&&console.error(n)}function Z(t,e,i,n){K("'"+t+"' is deprecated, use '"+e+"' instead",i,n)}var J=/(?:^|[-_])(\w)/g,Q=function(t){return t.replace(J,function(t){return t.toUpperCase()}).replace(/[-_]/g,"")};function tt(t,e){if(t.$root===t)return"<Root>";var i="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{},n=i.name||i._componentTag,s=i.__file;if(!n&&s){var r=s.match(/([^\/\\]+)\.vue$/);n=r&&r[1]}return(n?"<"+Q(n)+">":"<Anonymous>")+(s&&!1!==e?" at "+s:"")}var et=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},it=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(et(arguments[e]));return t},nt="$vuetify.",st=Symbol("Lang fallback");function rt(t){return void 0===t&&(t={}),{locales:Object.assign({en:x},t.locales),current:t.current||"en",t:function(e){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];return e.startsWith(nt)?t.t?t.t.apply(t,it([e],i)):function t(e,i,n){void 0===n&&(n=!1);var s=i.replace(nt,""),r=D(e,s,st);return r===st&&(n?(G('Translation key "'+s+'" not found in fallback'),r=i):(K('Translation key "'+s+'" not found, falling back to default'),r=t(x,i,!0))),r}(this.locales[this.current],e).replace(/\{(\d+)\}/g,function(t,e){return String(i[+e])}):e}}}var at=function(t){return t},ot=function(t){return t*t},lt=function(t){return t*(2-t)},ut=function(t){return t<.5?2*t*t:(4-2*t)*t-1},ht=function(t){return t*t*t},ct=function(t){return--t*t*t+1},dt=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},ft=function(t){return t*t*t*t},pt=function(t){return 1- --t*t*t*t},vt=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},mt=function(t){return t*t*t*t*t},gt=function(t){return 1+--t*t*t*t*t},yt=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t};function bt(t){return null==t?t:t.constructor.name}function xt(t){return"string"==typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}var wt=function(){return(wt=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function St(t,e){void 0===e&&(e={});var i=wt({container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0},e),s=function(t){var e=xt(t);if(e)return e;throw"string"==typeof t?new Error('Container element "'+t+'" not found.'):new TypeError("Container must be a Selector/HTMLElement/VueComponent, received "+bt(t)+" instead.")}(i.container);if(i.appOffset){var r=s.classList.contains("v-navigation-drawer"),o=s.classList.contains("v-navigation-drawer--clipped");i.offset+=a.a.prototype.$vuetify.application.bar,r&&!o||(i.offset+=a.a.prototype.$vuetify.application.top)}var l=performance.now(),u=function(t){if("number"==typeof t)return t;var e=xt(t);if(!e)throw"string"==typeof t?new Error('Target element "'+t+'" not found.'):new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received "+bt(t)+" instead.");for(var i=0;e;)i+=e.offsetTop,e=e.offsetParent;return i}(t)-i.offset,h=s.scrollTop;if(u===h)return Promise.resolve(u);var c="function"==typeof i.easing?i.easing:n[i.easing];if(!c)throw new TypeError('Easing function "'+i.easing+'" not found.');return new Promise(function(t){return requestAnimationFrame(function e(n){var r=n-l,a=Math.abs(i.duration?Math.min(r/i.duration,1):1);if(s.scrollTop=Math.floor(h+(u-h)*c(a)),1===a||s.clientHeight+s.scrollTop===s.scrollHeight)return t(u);requestAnimationFrame(e)})})}var kt={install:function(t,e){if(void 0===e&&(e={}),!this.installed){this.installed=!0,a.a!==t&&G("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this"),function(t,e){var i=e||"^2.5.18",n=i.split(".",3).map(function(t){return t.replace(/\D/g,"")}).map(Number),s=t.version.split(".",3).map(function(t){return parseInt(t,10)});s[0]===n[0]&&(s[1]>n[1]||s[1]===n[1]&&s[2]>=n[2])||K("Vuetify requires Vue version "+i)}(t);var i,n,s=rt(e.lang);if(t.prototype.$vuetify=new t({mixins:[h(e.breakpoint)],data:{application:o,dark:!1,icons:g(e.iconfont,e.icons),lang:s,options:(n=e.options,void 0===n&&(n={}),y({},b,n)),rtl:e.rtl,theme:(i=e.theme,void 0===i&&(i={}),!1!==i&&f({},p,i))},methods:{goTo:St,t:s.t.bind(s)}}),e.directives)for(var r in e.directives)t.directive(r,e.directives[r]);!function e(i){if(i){for(var n in i){var s=i[n];s&&!e(s.$_vuetify_subcomponents)&&t.component(n,s)}return!0}return!1}(e.components)}},version:"1.5.15"};i(9);function Ct(t){var e;if("number"==typeof t)e=t;else{if("string"!=typeof t)throw new TypeError("Colors can only be numbers or strings, recieved "+(null==t?t:t.constructor.name)+" instead");var i="#"===t[0]?t.substring(1):t;3===i.length&&(i=i.split("").map(function(t){return t+t}).join("")),6!==i.length&&K("'"+t+"' is not a valid rgb color"),e=parseInt(i,16)}return e<0?(K("Colors cannot be negative: '"+t+"'"),e=0):(e>16777215||isNaN(e))&&(K("'"+t+"' is not a valid rgb color"),e=16777215),e}function $t(t){var e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}var It=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],_t=function(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055},Tt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],At=function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)};function Bt(t){for(var e,i=Array(3),n=_t,s=It,r=0;r<3;++r)i[r]=Math.round(255*(e=n(s[r][0]*t[0]+s[r][1]*t[1]+s[r][2]*t[2]),Math.max(0,Math.min(1,e))));return(i[0]<<16)+(i[1]<<8)+(i[2]<<0)}function Ot(t){for(var e=[0,0,0],i=At,n=Tt,s=i((t>>16&255)/255),r=i((t>>8&255)/255),a=i((t>>0&255)/255),o=0;o<3;++o)e[o]=n[o][0]*s+n[o][1]*r+n[o][2]*a;return e}var Dt=function(t){return t>Math.pow(.20689655172413793,3)?Math.cbrt(t):t/(3*Math.pow(.20689655172413793,2))+4/29},Et=function(t){return t>.20689655172413793?Math.pow(t,3):3*Math.pow(.20689655172413793,2)*(t-4/29)};function Vt(t){var e=Dt,i=e(t[1]);return[116*i-16,500*(e(t[0]/.95047)-i),200*(i-e(t[2]/1.08883))]}function Pt(t){var e=Et,i=(t[0]+16)/116;return[.95047*e(i+t[1]/500),e(i),1.08883*e(i-t[2]/200)]}var Mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lt=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a};var Nt=function(t,e){return"\n."+t+" {\n  background-color: "+e+" !important;\n  border-color: "+e+" !important;\n}\n."+t+"--text {\n  color: "+e+" !important;\n  caret-color: "+e+" !important;\n}"},Ft=function(t,e,i){var n=Lt(e.split(/(\d)/,2),2),s=n[0],r=n[1];return"\n."+t+"."+s+"-"+r+" {\n  background-color: "+i+" !important;\n  border-color: "+i+" !important;\n}\n."+t+"--text.text--"+s+"-"+r+" {\n  color: "+i+" !important;\n  caret-color: "+i+" !important;\n}"},Ht=function(t,e){return void 0===e&&(e="base"),"--v-"+t+"-"+e},jt=function(t,e){return void 0===e&&(e="base"),"var("+Ht(t,e)+")"};function zt(t,e){for(var i={base:$t(e)},n=5;n>0;--n)i["lighten"+n]=$t(Rt(e,n));for(n=1;n<=4;++n)i["darken"+n]=$t(Wt(e,n));return i}function Rt(t,e){var i=Vt(Ot(t));return i[0]=i[0]+10*e,Bt(Pt(i))}function Wt(t,e){var i=Vt(Ot(t));return i[0]=i[0]-10*e,Bt(Pt(i))}var Yt={data:function(){return{style:null}},computed:{parsedTheme:function(){return function t(e,i){void 0===i&&(i=!1);for(var n=Object.keys(e),s={},r=0;r<n.length;++r){var a=n[r],o=e[a];i?("base"===a||a.startsWith("lighten")||a.startsWith("darken"))&&(s[a]=$t(Ct(o))):"object"===(void 0===o?"undefined":Mt(o))?s[a]=t(o,!0):s[a]=zt(0,Ct(o))}return s}(this.$vuetify.theme)},generatedStyles:function(){var t,e=this.parsedTheme;return null!=this.$vuetify.options.themeCache&&null!=(t=this.$vuetify.options.themeCache.get(e))?t:(t=function(t,e){void 0===e&&(e=!1);var i=Object.keys(t);if(!i.length)return"";var n="",s="";s+="a { color: "+(e?jt("primary"):t.primary.base)+"; }";for(var r=0;r<i.length;++r){var a=i[r],o=t[a];if("object"===(void 0===o?"undefined":Mt(o))){s+=Nt(a,e?jt(a):o.base),e&&(n+="  "+Ht(a)+": "+o.base+";\n");for(var l=Object.keys(o),u=0;u<l.length;++u){var h=l[u],c=o[h];"base"!==h&&(s+=Ft(a,h,e?jt(a,h):c),e&&(n+="  "+Ht(a,h)+": "+c+";\n"))}}}return e&&(n=":root {\n"+n+"}\n\n"),n+s}(e,this.$vuetify.options.customProperties),null!=this.$vuetify.options.minifyTheme&&(t=this.$vuetify.options.minifyTheme(t)),null!=this.$vuetify.options.themeCache&&this.$vuetify.options.themeCache.set(e,t),t)},vueMeta:function(){if(!1===this.$vuetify.theme)return{};var t={cssText:this.generatedStyles,id:"vuetify-theme-stylesheet",type:"text/css"};return this.$vuetify.options.cspNonce&&(t.nonce=this.$vuetify.options.cspNonce),{style:[t]}}},metaInfo:function(){return this.vueMeta},head:function(){return this.vueMeta},watch:{generatedStyles:function(){!this.meta&&this.applyTheme()}},created:function(){if(!1!==this.$vuetify.theme)if(this.$meta);else if("undefined"==typeof document&&this.$ssrContext){var t=this.$vuetify.options.cspNonce?' nonce="'+this.$vuetify.options.cspNonce+'"':"";this.$ssrContext.head=this.$ssrContext.head||"",this.$ssrContext.head+='<style type="text/css" id="vuetify-theme-stylesheet"'+t+">"+this.generatedStyles+"</style>"}else"undefined"!=typeof document&&(this.genStyle(),this.applyTheme())},methods:{applyTheme:function(){this.style&&(this.style.innerHTML=this.generatedStyles)},genStyle:function(){var t=document.getElementById("vuetify-theme-stylesheet");t||((t=document.createElement("style")).type="text/css",t.id="vuetify-theme-stylesheet",this.$vuetify.options.cspNonce&&t.setAttribute("nonce",this.$vuetify.options.cspNonce),document.head.appendChild(t)),this.style=t}}},Xt=function(){return(Xt=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function Ut(t){var e=Xt({},t.props,t.injections),i=qt.options.computed.isDark.call(e);return qt.options.computed.themeClasses.call({isDark:i})}var qt=a.a.extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.$vuetify.dark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),Kt=qt;var Gt={inserted:function(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()},unbind:function(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}},Zt=function(){return(Zt=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Jt={name:"v-app",directives:{Resize:Gt},mixins:[Yt,Kt],props:{id:{type:String,default:"app"},dark:Boolean},computed:{classes:function(){return Zt({"application--is-rtl":this.$vuetify.rtl},this.themeClasses)}},watch:{dark:function(){this.$vuetify.dark=this.dark}},mounted:function(){this.$vuetify.dark=this.dark},render:function(t){var e={staticClass:"application",class:this.classes,attrs:{"data-app":!0},domProps:{id:this.id}},i=t("div",{staticClass:"application--wrap"},this.$slots.default);return t("div",e,[i])}},Qt=(i(10),i(11),function(){return(Qt=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),te=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a};function ee(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var ie=a.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t,e){var i;return void 0===e&&(e={}),ee(t)?e.style=Qt({},e.style,{"background-color":""+t,"border-color":""+t}):t&&(e.class=Qt({},e.class,((i={})[t]=!0,i))),e},setTextColor:function(t,e){var i;if(void 0===e&&(e={}),ee(t))e.style=Qt({},e.style,{color:""+t,"caret-color":""+t});else if(t){var n=te(t.toString().trim().split(" ",2),2),s=n[0],r=n[1];e.class=Qt({},e.class,((i={})[s+"--text"]=!0,i)),r&&(e.class["text--"+r]=!0)}return e}}}),ne=a.a.extend({name:"sizeable",props:{large:Boolean,medium:Boolean,size:{type:[Number,String]},small:Boolean,xLarge:Boolean}});function se(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return a.a.extend({mixins:t})}var re,ae=function(){return(ae=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};!function(t){t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(re||(re={}));var oe=se(ie,ne,Kt).extend({name:"v-icon",props:{disabled:Boolean,left:Boolean,right:Boolean},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),function(t,e){return e.startsWith(z)?D(t,e,e):e}(this,t)},getSize:function(){var t={small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=R(t).find(function(e){return t[e]});return e&&re[e]||F(this.size)},getDefaultData:function(){return{staticClass:"v-icon",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.$listeners.click||this.$listeners["!click"],"v-icon--right":this.right},attrs:ae({"aria-hidden":!0},this.$attrs),on:this.$listeners}},applyColors:function(t){t.class=ae({},t.class,this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),s="material-icons",r=t.indexOf("-"),a=r<=-1;a?i.push(t):function(t){return["fas","far","fal","fab"].some(function(e){return t.includes(e)})}(s=t.slice(0,r))&&(s=""),n.class[s]=!0,n.class[t]=!a;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e("i",n,i)},renderSvgIcon:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(i.style={fontSize:n,height:n}),this.applyColors(i);var s=t.component;return i.props=t.props,i.nativeOn=i.on,e(s,i)}},render:function(t){var e=this.getIcon();return"string"==typeof e?this.renderFontIcon(e,t):this.renderSvgIcon(e,t)}}),le=a.a.extend({name:"v-icon",$_wrapperFor:oe,functional:!0,render:function(t,e){var i=e.data,n=e.children,s="";return i.domProps&&(s=i.domProps.textContent||i.domProps.innerHTML||s,delete i.domProps.textContent,delete i.domProps.innerHTML),t(oe,i,s?[s]:n)}}),ue=le;function he(t,e){var i,n;return void 0===t&&(t="value"),void 0===e&&(e="input"),a.a.extend({name:"toggleable",model:{prop:t,event:e},props:(i={},i[t]={required:!1},i),data:function(){return{isActive:!!this[t]}},watch:(n={},n[t]=function(t){this.isActive=!!t},n.isActive=function(i){!!i!==this[t]&&this.$emit(e,i)},n)})}var ce=he(),de=a.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),fe=se(ie,ce,de).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(ue,{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(ue,{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=t("div",(this.outline?this.setTextColor:this.setBackgroundColor)(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i}}),pe=(i(5),i(6),i(12),i(22),function(){return(pe=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),ve=se(ie,Kt,ce).extend({name:"v-chip",props:{close:Boolean,disabled:Boolean,label:Boolean,outline:Boolean,selected:Boolean,small:Boolean,textColor:String,value:{type:Boolean,default:!0}},computed:{classes:function(){return pe({"v-chip--disabled":this.disabled,"v-chip--selected":this.selected&&!this.disabled,"v-chip--label":this.label,"v-chip--outline":this.outline,"v-chip--small":this.small,"v-chip--removable":this.close},this.themeClasses)}},methods:{genClose:function(t){var e=this;return t("div",{staticClass:"v-chip__close",on:{click:function(t){t.stopPropagation(),e.$emit("input",!1)}}},[t(ue,"$vuetify.icons.delete")])},genContent:function(t){return t("span",{staticClass:"v-chip__content"},[this.$slots.default,this.close&&this.genClose(t)])}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-chip",class:this.classes,attrs:{tabindex:this.disabled?-1:0},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),i=this.textColor||this.outline&&this.color;return t("span",this.setTextColor(i,e),[this.genContent(t)])}}),me=ve,ge=(i(23),a.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})),ye=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},be=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(ye(arguments[e]));return t};var xe=se().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?function t(e){for(var i=[],n=0;n<e.length;n++){var s=e[n];s.isActive&&s.isDependent?i.push(s):i.push.apply(i,be(t(s.$children)))}return i}(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,be(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay),t.push.apply(t,be(this.getOpenDependentElements())),t}}}),we=a.a.extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}}),Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var ke={name:"detachable",mixins:[we],props:{attach:{type:null,default:!1,validator:function(t){var e=void 0===t?"undefined":Se(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this;this.$nextTick(function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach(function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)})})},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode)(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach(function(t){t.elm&&t.elm.parentNode.removeChild(t.elm)})}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t,e=this.$vnode&&this.$vnode.context.$options._scopeId;return e&&((t={})[e]="",t)},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):K("Unable to locate target "+(this.attach||"[data-app]"),this))}}},Ce={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function $e(t){return void 0===t&&(t=[]),a.a.extend({name:"positionable",props:t.length?N(Ce,t):Ce})}var Ie=$e(),_e=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},Te=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_e(arguments[e]));return t},Ae=a.a.extend().extend({name:"stackable",data:function(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:P(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(t){void 0===t&&(t=[]);for(var e=this.$el,i=[this.stackMinZIndex,P(e)],n=Te(document.getElementsByClassName(this.stackClass)),s=0;s<n.length;s++)t.includes(n[s])||i.push(P(n[s]));return Math.max.apply(Math,Te(i))}}}),Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe={activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},hasWindow:!1},De=a.a.extend({name:"menuable",mixins:[Ie,Ae],props:{activator:{default:null,validator:function(t){return["string","object"].includes(void 0===t?"undefined":Be(t))}},allowOverflow:Boolean,inputActivator:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatorFixed:!1,dimensions:Object.assign({},Oe),isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(this.isAttached?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){var r=isNaN(this.maxWidth)?t.width:Math.min(t.width,this.maxWidth);s+=this.left?-r:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),this.isAttached?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||this.activator||this.inputActivator},isAttached:function(){return!1!==this.attach}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.checkForWindow()},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return(this.isAttached?this.computedLeft:this.calcXOverflow(this.computedLeft,t))+"px"},calcTop:function(){return(this.isAttached?this.computedTop:this.calcYOverflow(this.computedTop))+"px"},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,r=i<t+s;return r&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):r&&!this.allowOverflow?t=i-s-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForWindow:function(){this.hasWindow||(this.hasWindow="undefined"!=typeof window)},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){for(var t=this.getActivator();t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},getActivator:function(t){if(this.inputActivator)return this.$el.querySelector(".v-input__slot");if(this.activator)return"string"==typeof this.activator?document.querySelector(this.activator):this.activator;if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t)return this.activatedBy=t.currentTarget||t.target,this.activatedBy;if(this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(this.isAttached){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame(function(){var i=e.$refs.content;if(!i||e.isShown(i))return t();i.style.display="inline-block",t(),i.style.display="none"})},startTransition:function(){var t=this;return new Promise(function(e){return requestAnimationFrame(function(){t.isContentActive=t.hasJustFocused=t.isActive,e()})})},isShown:function(t){return"none"!==t.style.display},updateDimensions:function(){var t=this;this.checkForWindow(),this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,this.isAttached?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek(function(){e.content=t.measure(t.$refs.content),t.dimensions=e})}}}),Ee=a.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout(function(){e.isActive=!1})}}}),Ve={methods:{activatorClickHandler:function(t){this.openOnClick&&!this.isActive?(this.getActivator(t).focus(),this.isActive=!0,this.absoluteX=t.clientX,this.absoluteY=t.clientY):this.closeOnClick&&this.isActive&&(this.getActivator(t).blur(),this.isActive=!1)},mouseEnterHandler:function(){var t=this;this.runDelay("open",function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)})},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame(function(){e.isActive=!1,e.callDeactivate()})})},addActivatorEvents:function(t){void 0===t&&(t=null),t&&!this.disabled&&t.addEventListener("click",this.activatorClickHandler)},removeActivatorEvents:function(t){void 0===t&&(t=null),t&&t.removeEventListener("click",this.activatorClickHandler)}}},Pe=function(){return(Pe=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Me=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},Le=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Me(arguments[e]));return t},Ne={methods:{genActivator:function(){if(!this.$slots.activator&&!this.$scopedSlots.activator)return null;var t={};if(this.disabled||(this.openOnHover?(t.mouseenter=this.mouseEnterHandler,t.mouseleave=this.mouseLeaveHandler):this.openOnClick&&(t.click=this.activatorClickHandler)),"scoped"===U(this,"activator")){t.keydown=this.onKeyDown;var e=this.$scopedSlots.activator({on:t});return this.activatorNode=e,e}return this.$createElement("div",{staticClass:"v-menu__activator",class:{"v-menu__activator--active":this.hasJustFocused||this.isActive,"v-menu__activator--disabled":this.disabled},ref:"activator",on:t},this.$slots.activator)},genTransition:function(){return this.transition?this.$createElement("transition",{props:{name:this.transition}},[this.genContent()]):this.genContent()},genDirectives:function(){var t=this,e=!this.openOnHover&&this.closeOnClick?[{name:"click-outside",value:function(){t.isActive=!1},args:{closeConditional:this.closeConditional,include:function(){return Le([t.$el],t.getOpenDependentElements())}}}]:[];return e.push({name:"show",value:this.isContentActive}),e},genContent:function(){var t,e=this,i={attrs:this.getScopeIdAttrs(),staticClass:"v-menu__content",class:Pe({},this.rootThemeClasses,(t={"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},t[this.contentClass.trim()]=!0,t)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(t){t.stopPropagation(),t.target.getAttribute("disabled")||e.closeOnContentClick&&(e.isActive=!1)},keydown:this.onKeyDown}};return!this.disabled&&this.openOnHover&&(i.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(i.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",i,this.showLazyContent(this.$slots.default))}}},Fe={props:{disableKeys:Boolean},data:function(){return{listIndex:-1,tiles:[]}},watch:{isActive:function(t){t||(this.listIndex=-1)},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list__tile--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list__tile--highlighted")}},methods:{onKeyDown:function(t){var e=this;if(t.keyCode===j.esc){setTimeout(function(){e.isActive=!1});var i=this.getActivator();this.$nextTick(function(){return i&&i.focus()})}else t.keyCode===j.tab?setTimeout(function(){e.$refs.content.contains(document.activeElement)||(e.isActive=!1)}):this.changeListIndex(t)},changeListIndex:function(t){if(this.getTiles(),t.keyCode===j.down&&this.listIndex<this.tiles.length-1)this.listIndex++;else if(t.keyCode===j.up&&this.listIndex>-1)this.listIndex--;else{if(t.keyCode!==j.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()},getTiles:function(){this.tiles=this.$refs.content.querySelectorAll(".v-list__tile")}}},He={data:function(){return{calculatedTopAuto:0}},methods:{calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return this.isAttached?0:parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list__tile--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list__tile").offsetTop;return this.computedTop-i-n}}};function je(){return!1}var ze={inserted:function(t,e){var i=function(i){return function(t,e,i){i.args=i.args||{};var n=i.args.closeConditional||je;if(t&&!1!==n(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var s=(i.args.include||function(){return[]})();s.push(e),!s.some(function(e){return e.contains(t.target)})&&setTimeout(function(){n(t)&&i.value&&i.value(t)},0)}}(i,t,e)};(document.querySelector("[data-app]")||document.body).addEventListener("click",i,!0),t._clickOutside=i},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}},Re=se(Kt).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:Kt.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(t){return!t.isComment&&" "!==t.text})}}),We=a.a.extend({name:"v-menu",provide:function(){return{theme:this.theme}},directives:{ClickOutside:ze,Resize:Gt},mixins:[Ve,xe,ge,ke,Ne,Fe,De,He,Ee,ce,Kt],props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,fullWidth:Boolean,maxHeight:{default:"auto"},openOnClick:{type:Boolean,default:!0},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{defaultOffset:8,hasJustFocused:!1,resizeTimeout:null}},computed:{calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?this.calcXOverflow(this.calcLeftAuto(),t)+"px":this.calcLeft(t)},calculatedMaxHeight:function(){return this.auto?"200px":F(this.maxHeight)},calculatedMaxWidth:function(){return isNaN(this.maxWidth)?this.maxWidth:this.maxWidth+"px"},calculatedMinWidth:function(){if(this.minWidth)return isNaN(this.minWidth)?this.minWidth:this.minWidth+"px";var t=Math.min(this.dimensions.activator.width+this.nudgeWidth+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Math.min(e,t)+"px"},calculatedTop:function(){return!this.auto||this.isAttached?this.calcTop():this.calcYOverflow(this.calculatedTopAuto)+"px"},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{activator:function(t,e){this.removeActivatorEvents(e),this.addActivatorEvents(t)},disabled:function(t){this.activator&&(t?this.removeActivatorEvents(this.activator):this.addActivatorEvents(this.activator))},isContentActive:function(t){this.hasJustFocused=t}},mounted:function(){this.isActive&&this.activate(),"v-slot"===U(this,"activator",!0)&&G("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){var t=this;this.getTiles(),this.updateDimensions(),requestAnimationFrame(function(){t.startTransition().then(function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))})})},closeConditional:function(t){return this.isActive&&this.closeOnClick&&!this.$refs.content.contains(t.target)},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateDimensions,100))}},render:function(t){return t("div",{staticClass:"v-menu",class:{"v-menu--inline":!this.fullWidth&&this.$slots.activator},directives:[{arg:500,name:"resize",value:this.onResize}],on:this.disableKeys?void 0:{keydown:this.onKeyDown}},[this.genActivator(),this.$createElement(Re,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])}}),Ye=We,Xe=(i(2),i(3),i(13),i(14),function(){return(Xe=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Ue=se(Kt).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var i=e.children,n=e.listeners,s=e.props,r={staticClass:"v-label",class:Xe({"v-label--active":s.value,"v-label--is-disabled":s.disabled},Ut(e)),attrs:{for:s.for,"aria-hidden":!s.for},on:n,style:{left:F(s.left),right:F(s.right),position:s.absolute?"absolute":"relative"}};return t("label",ie.options.methods.setTextColor(s.focused&&s.color,r),i)}}),qe=Ue,Ke=(i(15),se(ie,Kt).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e,domProps:{innerHTML:t}})}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),Ge=Ke;function Ze(t,e){return function(){return K("The "+t+" component must be used inside a "+e)}}function Je(t,e,i){var n,s=e&&i?{register:Ze(e,i),unregister:Ze(e,i)}:null;return a.a.extend({name:"registrable-inject",inject:(n={},n[t]={default:s},n)})}function Qe(t){return a.a.extend({name:"registrable-provide",methods:{register:null,unregister:null},provide:function(){var e;return(e={})[t]={register:this.register,unregister:this.unregister},e}})}var ti="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ei=se(ie,Je("form")).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return this.hasSuccess||this.shouldValidate&&this.hasError},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.color:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){O(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.disabled||this.readonly||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting:function(){var t=this;setTimeout(function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()},0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(t,e){void 0===t&&(t=!1);var i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var n=0;n<this.rules.length;n++){var s=this.rules[n],r="function"==typeof s?s(e):s;"string"==typeof r?i.push(r):"boolean"!=typeof r&&G("Rules should return a string or boolean, received '"+(void 0===r?"undefined":ti(r))+"' instead",this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}}),ii=function(){return(ii=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},ni=se(ie,Kt,ei).extend({name:"v-input",props:{appendIcon:String,appendIconCb:Function,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,prependIconCb:Function,value:{required:!1}},data:function(){return{attrsInput:{},lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return{}},classesInput:function(){return ii({},this.classes,{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly},this.themeClasses)},directivesInput:function(){return[]},hasHint:function(){return!this.hasMessages&&this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return Boolean(this.$slots.label||this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return Boolean(this.disabled||this.readonly)},isLabelActive:function(){return this.isDirty}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e,i){var n=this;void 0===i&&(i=!0);var s=this[t+"Icon"],r="click:"+H(t);e=e||this[t+"IconCb"],i&&t&&e&&Z(":"+t+"-icon-cb","@"+r,this);var a={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[r]||e?{click:function(t){t.preventDefault(),t.stopPropagation(),n.$emit(r,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0};return this.$createElement("div",{staticClass:"v-input__icon v-input__icon--"+H(t),key:""+t+s},[this.$createElement(ue,a,s)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:F(this.height)},directives:this.directivesInput,on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(qe,{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.$attrs.id,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){if(this.hideDetails)return null;var t=this.hasHint?[this.hint]:this.validations;return this.$createElement(Ge,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?t:[]}})},genSlot:function(t,e,i){if(!i.length)return null;var n=t+"-"+e;return this.$createElement("div",{staticClass:"v-input__"+n,ref:n},i)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",attrs:this.attrsInput,class:this.classesInput}),this.genContent())}}),si=ni,ri=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},ai=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(ri(arguments[e]));return t};function oi(t,e){t.style.transform=e,t.style.webkitTransform=e}function li(t,e){t.style.opacity=e.toString()}function ui(t){return"TouchEvent"===t.constructor.name}var hi={show:function(t,e,i){if(void 0===i&&(i={}),e._ripple&&e._ripple.enabled){var n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",i.class&&(n.className+=" "+i.class);var r=function(t,e,i){void 0===i&&(i={});var n=e.getBoundingClientRect(),s=ui(t)?t.touches[t.touches.length-1]:t,r=s.clientX-n.left,a=s.clientY-n.top,o=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt(Math.pow(r-o,2)+Math.pow(a-o,2))/4):o=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var u=(e.clientWidth-2*o)/2+"px",h=(e.clientHeight-2*o)/2+"px";return{radius:o,scale:l,x:i.center?u:r-o+"px",y:i.center?h:a-o+"px",centerX:u,centerY:h}}(t,e,i),a=r.radius,o=r.scale,l=r.x,u=r.y,h=r.centerX,c=r.centerY,d=2*a+"px";s.className="v-ripple__animation",s.style.width=d,s.style.height=d,e.appendChild(n);var f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),oi(s,"translate("+l+", "+u+") scale3d("+o+","+o+","+o+")"),li(s,0),s.dataset.activated=String(performance.now()),setTimeout(function(){s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),oi(s,"translate("+h+", "+c+") scale3d(1,1,1)"),li(s,.25)},0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var i=e[e.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),s=Math.max(250-n,0);setTimeout(function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),li(i,0),setTimeout(function(){1===t.getElementsByClassName("v-ripple__animation").length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)},300)},s)}}}}};function ci(t){return void 0===t||!!t}function di(t){var e={},i=t.currentTarget;i&&i._ripple&&!i._ripple.touched&&(ui(t)&&(i._ripple.touched=!0),e.center=i._ripple.centered,i._ripple.class&&(e.class=i._ripple.class),hi.show(t,i,e))}function fi(t){var e=t.currentTarget;e&&(window.setTimeout(function(){e._ripple&&(e._ripple.touched=!1)}),hi.hide(e))}function pi(t,e,i){var n=ci(e.value);n||hi.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),n&&!i?(t.addEventListener("touchstart",di,{passive:!0}),t.addEventListener("touchend",fi,{passive:!0}),t.addEventListener("touchcancel",fi),t.addEventListener("mousedown",di),t.addEventListener("mouseup",fi),t.addEventListener("mouseleave",fi),t.addEventListener("dragstart",fi,{passive:!0})):!n&&i&&vi(t)}function vi(t){t.removeEventListener("mousedown",di),t.removeEventListener("touchstart",fi),t.removeEventListener("touchend",fi),t.removeEventListener("touchcancel",fi),t.removeEventListener("mouseup",fi),t.removeEventListener("mouseleave",fi),t.removeEventListener("dragstart",fi)}var mi={bind:function(t,e,i){pi(t,e,!1),i.context&&i.context.$nextTick(function(){var e=window.getComputedStyle(t);if(e&&"inline"===e.display){var n=i.fnOptions?[i.fnOptions,i.context]:[i.componentInstance];K.apply(void 0,ai(["v-ripple can only be used on block-level elements"],n))}})},unbind:function(t){delete t._ripple,vi(t)},update:function(t,e){e.value!==e.oldValue&&pi(t,e,ci(e.oldValue))}},gi=a.a.extend({name:"rippleable",directives:{Ripple:mi},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(t){return void 0===t&&(t={}),this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),yi=a.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:O}}}),bi=si.extend({name:"selectable",mixins:[gi,yi],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return t.valueComparator(i,e)}):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var t=si.options.methods.genLabel.call(this);return t.data.on={click:this.onChange},t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;(i=i.filter(function(i){return!t.valueComparator(i,e)})).length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),xi=function(){return(xi=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},wi={name:"v-checkbox",mixins:[bi],props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data:function(t){return{inputIndeterminate:t.indeterminate}},computed:{classes:function(){return{"v-input--selection-controls":!0,"v-input--checkbox":!0}},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon}},watch:{indeterminate:function(t){this.inputIndeterminate=t}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",xi({},this.$attrs,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(ue,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}},Si=wi,ki=(i(18),function(){return(ki=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Ci=Kt.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){return t("hr",{class:ki({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}}),$i=Ci,Ii=(i(19),function(){return(Ii=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),_i=se(Kt).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Ii({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),Ti=_i,Ai=function(){return(Ai=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Bi=a.a.extend({name:"routable",directives:{Ripple:mi},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:[Boolean,Object],tag:String,target:String},computed:{computedRipple:function(){return!(!this.ripple||this.disabled)&&this.ripple}},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(t){var e,i,n=this.exact,s=((e={attrs:{disabled:this.disabled},class:t,props:{},directives:[{name:"ripple",value:this.computedRipple}]})[this.to?"nativeOn":"on"]=Ai({},this.$listeners,{click:this.click}),e);if(void 0===this.exact&&(n="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var r=this.activeClass,a=this.exactActiveClass||r;this.proxyClass&&(r+=" "+this.proxyClass,a+=" "+this.proxyClass),i=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:n,activeClass:r,exactActiveClass:a,append:this.append,replace:this.replace})}else"a"===(i=(this.href?"a":this.tag)||"a")&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:i,data:s}}}}),Oi=function(){return(Oi=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Di=se(ie,Bi,ce,Kt).extend({name:"v-list-tile",directives:{Ripple:mi},inheritAttrs:!1,props:{activeClass:{type:String,default:"primary--text"},avatar:Boolean,inactive:Boolean,tag:String},data:function(){return{proxyClass:"v-list__tile--active"}},computed:{listClasses:function(){return this.disabled?{"v-list--disabled":!0}:void 0},classes:function(){var t;return Oi({"v-list__tile":!0,"v-list__tile--link":this.isLink&&!this.inactive,"v-list__tile--avatar":this.avatar,"v-list__tile--disabled":this.disabled,"v-list__tile--active":!this.to&&this.isActive},this.themeClasses,((t={})[this.activeClass]=this.isActive,t))},isLink:function(){var t=this.$listeners&&(this.$listeners.click||this.$listeners["!click"]);return Boolean(this.href||this.to||t)}},render:function(t){var e=!this.inactive&&this.isLink?this.generateRouteLink(this.classes):{tag:this.tag||"div",data:{class:this.classes}},i=e.tag,n=e.data;return n.attrs=Object.assign({},n.attrs,this.$attrs),t("div",this.setTextColor(!this.disabled&&this.isActive&&this.color,{class:this.listClasses,attrs:{disabled:this.disabled,role:"listitem"}}),[t(i,n,this.$slots.default)])}}),Ei=a.a.extend({name:"v-list-tile-action",functional:!0,render:function(t,e){var i=e.data,n=e.children,s=void 0===n?[]:n;return i.staticClass=i.staticClass?"v-list__tile__action "+i.staticClass:"v-list__tile__action",s.filter(function(t){return!1===t.isComment&&" "!==t.text}).length>1&&(i.staticClass+=" v-list__tile__action--stack"),t("div",i,s)}}),Vi=(i(20),function(){return(Vi=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Pi=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],i=0;return e?e.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}},Mi=se(Qe("list"),Kt).extend({name:"v-list",provide:function(){return{listClick:this.listClick}},props:{dense:Boolean,expand:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Vi({"v-list--dense":this.dense,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine},this.themeClasses)}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex(function(e){return e._uid===t._uid});e>-1&&this.groups.splice(e,1)},listClick:function(t){var e,i;if(!this.expand)try{for(var n=Pi(this.groups),s=n.next();!s.done;s=n.next()){s.value.toggle(t)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}}},render:function(t){return t("div",{staticClass:"v-list",class:this.classes,attrs:{role:"list"}},[this.$slots.default])}}),Li=function(t,e){void 0===t&&(t=""),void 0===e&&(e=!1);var i=e?"width":"height";return{beforeEnter:function(t){var e;t._parent=t.parentNode,t._initialStyle=((e={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow})[i]=t.style[i],e)},enter:function(e){var n=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.visibility="hidden";var s=e["offset"+X(i)]+"px";e.style.visibility=n.visibility,e.style.overflow="hidden",e.style[i]=0,e.offsetHeight,e.style.transition=n.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(function(){e.style[i]=s})},afterEnter:s,enterCancelled:s,leave:function(t){var e;t._initialStyle=((e={overflow:t.style.overflow})[i]=t.style[i],e),t.style.overflow="hidden",t.style[i]=t["offset"+X(i)]+"px",t.offsetHeight,requestAnimationFrame(function(){return t.style[i]=0})},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){t.style.overflow=t._initialStyle.overflow,t.style[i]=t._initialStyle[i],delete t._initialStyle}},Ni=$("bottom-sheet-transition"),Fi=$("carousel-transition"),Hi=$("carousel-reverse-transition"),ji=$("tab-transition"),zi=$("tab-reverse-transition"),Ri=$("menu-transition"),Wi=$("fab-transition","center center","out-in"),Yi=$("dialog-transition"),Xi=$("dialog-bottom-transition"),Ui=$("fade-transition"),qi=$("scale-transition"),Ki=$("scroll-x-transition"),Gi=$("scroll-x-reverse-transition"),Zi=$("scroll-y-transition"),Ji=$("scroll-y-reverse-transition"),Qi=$("slide-x-transition"),tn=$("slide-x-reverse-transition"),en=$("slide-y-transition"),nn=$("slide-y-reverse-transition"),sn=I("expand-transition",Li()),rn=I("expand-x-transition",Li("",!0)),an=I("row-expand-transition",Li("datatable__expand-col--expanded")),on=function(){return(on=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},ln=se(we,Je("list","v-list-group","v-list"),ce).extend({name:"v-list-group",inject:["listClick"],props:{activeClass:{type:String,default:"primary--text"},appendIcon:{type:String,default:"$vuetify.icons.expand"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,subGroup:Boolean},data:function(){return{groups:[]}},computed:{groupClasses:function(){return{"v-list__group--active":this.isActive,"v-list__group--disabled":this.disabled}},headerClasses:function(){return{"v-list__group__header--active":this.isActive,"v-list__group__header--sub-group":this.subGroup}},itemsClasses:function(){return{"v-list__group__items--no-action":this.noAction}}},watch:{isActive:function(t){!this.subGroup&&t&&this.listClick(this._uid)},$route:function(t){var e=this.matchRoute(t.path);this.group&&(e&&this.isActive!==e&&this.listClick(this._uid),this.isActive=e)}},mounted:function(){this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list.unregister(this._uid)},methods:{click:function(t){this.disabled||(this.$emit("click",t),this.isActive=!this.isActive)},genIcon:function(t){return this.$createElement(ue,t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement("div",{staticClass:"v-list__group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genGroup:function(){return this.$createElement("div",{staticClass:"v-list__group__header",class:this.headerClasses,on:on({},this.$listeners,{click:this.click}),ref:"item"},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){return this.$createElement("div",{staticClass:"v-list__group__items",class:this.itemsClasses,directives:[{name:"show",value:this.isActive}],ref:"group"},this.showLazyContent(this.$slots.default))},genPrependIcon:function(){var t,e=this.prependIcon?this.prependIcon:!!this.subGroup&&"$vuetify.icons.subgroup";return e||this.$slots.prependIcon?this.$createElement("div",{staticClass:"v-list__group__header__prepend-icon",class:(t={},t[this.activeClass]=this.isActive,t)},[this.$slots.prependIcon||this.genIcon(e)]):null},toggle:function(t){this.isActive=this._uid===t},matchRoute:function(t){return!!this.group&&null!==t.match(this.group)}},render:function(t){return t("div",{staticClass:"v-list__group",class:this.groupClasses},[this.genGroup(),t(sn,[this.genItems()])])}}),un=(i(21),function(){return(un=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),hn=se(ie).extend({name:"v-avatar",functional:!0,props:{color:String,size:{type:[Number,String],default:48},tile:Boolean},render:function(t,e){var i=e.data,n=e.props,s=e.children;i.staticClass=("v-avatar "+(i.staticClass||"")).trim(),n.tile&&(i.staticClass+=" v-avatar--tile");var r=F(n.size);return i.style=un({height:r,width:r},i.style),t("div",ie.options.methods.setBackgroundColor(n.color,i),s)}}),cn=hn,dn=a.a.extend({name:"v-list-tile-avatar",functional:!0,props:{color:String,size:{type:[Number,String],default:40},tile:Boolean},render:function(t,e){var i=e.data,n=e.children,s=e.props;i.staticClass=("v-list__tile__avatar "+(i.staticClass||"")).trim();var r=t(cn,{props:{color:s.color,size:s.size,tile:s.tile}},[n]);return t("div",i,[r])}}),fn=k("v-list__tile__action-text","span"),pn=k("v-list__tile__content","div"),vn=k("v-list__tile__title","div"),mn=k("v-list__tile__sub-title","div"),gn=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],i=0;return e?e.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}},yn={name:"v-select-list",mixins:[ie,Kt],props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemAvatar:{type:[String,Array,Function],default:"avatar"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:{default:null},selectedItems:{type:Array,default:function(){return[]}}},computed:{parsedItems:function(){var t=this;return this.selectedItems.map(function(e){return t.getValue(e)})},tileActiveClass:function(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile:function(){return this.$createElement(Di,{on:{mousedown:function(t){return t.preventDefault()}}},[this.genTileContent(this.noDataText)])}},methods:{genAction:function(t,e){var i=this,n={on:{click:function(e){e.stopPropagation(),i.$emit("select",t)}}};return this.$createElement(Ei,n,[this.$createElement(Si,{props:{color:this.color,inputValue:e}})])},genDivider:function(t){return this.$createElement($i,{props:t})},genFilteredText:function(t){if(t=(t||"").toString(),!this.searchInput||this.noFilter)return L(t);var e=this.getMaskedCharacters(t),i=e.start,n=e.middle,s=e.end;return""+L(i)+this.genHighlight(n)+L(s)},genHeader:function(t){return this.$createElement(Ti,{props:t},t.header)},genHighlight:function(t){return'<span class="v-list__tile__mask">'+L(t)+"</span>"},getMaskedCharacters:function(t){var e=(this.searchInput||"").toString().toLocaleLowerCase(),i=t.toLocaleLowerCase().indexOf(e);return i<0?{start:"",middle:t,end:""}:{start:t.slice(0,i),middle:t.slice(i,i+e.length),end:t.slice(i+e.length)}},genTile:function(t,e,i,n){var s=this;void 0===e&&(e=null),void 0===i&&(i=!1),void 0===n&&(n=this.hasItem(t)),t===Object(t)&&(i=this.getAvatar(t),e=null!==e?e:this.getDisabled(t));var r={on:{mousedown:function(t){t.preventDefault()},click:function(){return e||s.$emit("select",t)}},props:{activeClass:this.tileActiveClass,avatar:i,disabled:e,ripple:!0,value:n,color:this.color}};if(!this.$scopedSlots.item)return this.$createElement(Di,r,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,n):null,this.genTileContent(t)]);var a=this.$scopedSlots.item({parent:this,item:t,tile:r});return this.needsTile(a)?this.$createElement(Di,r,a):a},genTileContent:function(t){var e=this.genFilteredText(this.getText(t));return this.$createElement(pn,[this.$createElement(vn,{domProps:{innerHTML:e}})])},hasItem:function(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile:function(t){return 1!==t.length||null==t[0].componentOptions||"v-list-tile"!==t[0].componentOptions.Ctor.options.name},getAvatar:function(t){return Boolean(E(t,this.itemAvatar,!1))},getDisabled:function(t){return Boolean(E(t,this.itemDisabled,!1))},getText:function(t){return String(E(t,this.itemText,t))},getValue:function(t){return E(t,this.itemValue,this.getText(t))}},render:function(){var t,e,i=[];try{for(var n=gn(this.items),s=n.next();!s.done;s=n.next()){var r=s.value;this.hideSelected&&this.hasItem(r)||(null==r?i.push(this.genTile(r)):r.header?i.push(this.genHeader(r)):r.divider?i.push(this.genDivider(r)):i.push(this.genTile(r)))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return i.length||i.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&i.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&i.push(this.$slots["append-item"]),this.$createElement("div",{staticClass:"v-select-list v-card",class:this.themeClasses},[this.$createElement(Mi,{props:{dense:this.dense}},i)])}},bn=(i(17),function(){return(bn=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),xn=se(Kt).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var i=e.props,n=parseInt(i.max,10),s=parseInt(i.value,10),r=n?s+" / "+n:String(i.value);return t("div",{staticClass:"v-counter",class:bn({"error--text":n&&s>n},Ut(e))},r)}}),wn=xn,Sn=/[-!$%^&*()_+|~=`{}[\]:";'<>?,.\/\\ ]/,kn=function(t){return!!t&&Sn.test(t)},Cn={"#":{test:function(t){return/[0-9]/.test(t)}},A:{test:function(t){return/[A-Z]/i.test(t)},convert:function(t){return t.toUpperCase()}},a:{test:function(t){return/[a-z]/i.test(t)},convert:function(t){return t.toLowerCase()}},N:{test:function(t){return/[0-9A-Z]/i.test(t)},convert:function(t){return t.toUpperCase()}},n:{test:function(t){return/[0-9a-z]/i.test(t)},convert:function(t){return t.toLowerCase()}},X:{test:kn}},$n=function(t){return Cn.hasOwnProperty(t)},In=function(t,e){return Cn[t].convert?Cn[t].convert(e):e},_n=function(t,e){return!(null==e||!$n(t))&&Cn[t].test(e)},Tn=function(t){return t?String(t).replace(new RegExp(Sn,"g"),""):t},An={name:"maskable",props:{dontFillMaskBlanks:Boolean,mask:{type:[Object,String],default:null},returnMaskedValue:Boolean,value:{required:!1}},data:function(t){return{selection:0,lazySelection:0,lazyValue:t.value,preDefined:{"credit-card":"#### - #### - #### - ####",date:"##/##/####","date-with-time":"##/##/#### ##:##",phone:"(###) ### - ####",social:"###-##-####",time:"##:##","time-with-seconds":"##:##:##"}}},computed:{masked:function(){return(this.preDefined[this.mask]||this.mask||"").split("")}},watch:{mask:function(){var t=this;if(this.$refs.input){for(var e=this.$refs.input.value,i=this.maskText(Tn(this.lazyValue)),n=0,s=this.selection,r=0;r<s;r++)kn(e[r])||n++;if(s=0,i)for(r=0;r<i.length&&(kn(i[r])||n--,s++,!(n<=0));r++);this.$nextTick(function(){t.$refs.input.value=i,t.setCaretPosition(s)})}}},beforeMount:function(){if(this.mask&&null!=this.value&&this.returnMaskedValue){var t=this.maskText(this.value);t!==this.value&&this.$emit("input",t)}},methods:{setCaretPosition:function(t){var e=this;this.selection=t,window.setTimeout(function(){e.$refs.input&&e.$refs.input.setSelectionRange(e.selection,e.selection)},0)},updateRange:function(){if(this.$refs.input){var t=this.maskText(this.lazyValue),e=0;if(this.$refs.input.value=t,t)for(var i=0;i<t.length&&!(this.lazySelection<=0);i++)kn(t[i])||this.lazySelection--,e++;this.setCaretPosition(e),this.$emit("input",this.returnMaskedValue?this.$refs.input.value:this.lazyValue)}},maskText:function(t){return this.mask?function(t,e,i){if(null==t)return"";if(t=String(t),!e.length||!t.length)return t;Array.isArray(e)||(e=e.split(""));for(var n=0,s=0,r="";s<e.length;){var a=e[s],o=t[n];if($n(a)||o!==a)if($n(a)||i){if(!_n(a,o))return r;r+=In(a,o),n++}else r+=a;else r+=a,n++;s++}return r}(t,this.masked,this.dontFillMaskBlanks):t},unmaskText:function(t){return this.mask&&!this.returnMaskedValue?Tn(t):t},setSelectionRange:function(){this.$nextTick(this.updateRange)},resetSelections:function(t){if(t.selectionEnd){this.selection=t.selectionEnd,this.lazySelection=0;for(var e=0;e<this.selection;e++)kn(t.value[e])||this.lazySelection++}}}},Bn=(i(16),se(ie).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:7},indeterminate:Boolean,query:Boolean,value:{type:[Number,String],default:0}},computed:{backgroundStyle:function(){var t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{height:this.active?F(this.height):0,opacity:t,width:this.normalizedBufer+"%"}},effectiveWidth:function(){return this.normalizedBufer?100*+this.normalizedValue/+this.normalizedBufer:0},normalizedBufer:function(){return this.bufferValue<0?0:this.bufferValue>100?100:parseFloat(this.bufferValue)},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBufer)||(t.width=this.normalizedBufer+"%"),t}},methods:{genDeterminate:function(t){return t("div",this.setBackgroundColor(this.color,{ref:"front",staticClass:"v-progress-linear__bar__determinate",style:{width:this.effectiveWidth+"%"}}))},genBar:function(t,e){var i;return t("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__bar__indeterminate",class:(i={},i[e]=!0,i)}))},genIndeterminate:function(t){return t("div",{ref:"front",staticClass:"v-progress-linear__bar__indeterminate",class:{"v-progress-linear__bar__indeterminate--active":this.active}},[this.genBar(t,"long"),this.genBar(t,"short")])}},render:function(t){var e=t(Ui,this.indeterminate?[this.genIndeterminate(t)]:[]),i=t(Qi,this.indeterminate?[]:[this.genDeterminate(t)]),n=t("div",{staticClass:"v-progress-linear__bar",style:this.styles},[e,i]),s=t("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle})),r=this.$slots.default&&t("div",{staticClass:"v-progress-linear__content"},this.$slots.default);return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBufer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:{"v-progress-linear--query":this.query},style:{height:F(this.height)},on:this.$listeners},[s,n,r])}})),On=Bn,Dn=a.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(On,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:2,indeterminate:!0}})}}}),En=function(){return(En=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Vn=["color","file","time","date","datetime-local","week","month"],Pn=si.extend({name:"v-text-field",directives:{Ripple:mi},mixins:[An,Dn],inheritAttrs:!1,props:{appendOuterIcon:String,appendOuterIconCb:Function,autofocus:Boolean,box:Boolean,browserAutocomplete:String,clearable:Boolean,clearIcon:{type:String,default:"$vuetify.icons.clear"},clearIconCb:Function,color:{type:String,default:"primary"},counter:[Boolean,Number,String],flat:Boolean,fullWidth:Boolean,label:String,outline:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,prependInnerIconCb:Function,reverse:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,initialValue:null,internalChange:!1,isClearing:!1}},computed:{classes:function(){return{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--box":this.box,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outline":this.hasOutline,"v-text-field--placeholder":this.placeholder}},counterValue:function(){return(this.internalValue||"").toString().length},directivesInput:function(){return[]},hasOutline:function(){return this.outline||this.textarea},internalValue:{get:function(){return this.lazyValue},set:function(t){this.mask&&t!==this.lazyValue?(this.lazyValue=this.unmaskText(this.maskText(this.unmaskText(t))),this.setSelectionRange()):(this.lazyValue=t,this.$emit("input",this.lazyValue))}},isDirty:function(){return null!=this.lazyValue&&this.lazyValue.toString().length>0||this.badInput},isEnclosed:function(){return this.box||this.isSolo||this.hasOutline||this.fullWidth},isLabelActive:function(){return this.isDirty||Vn.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return!this.$vuetify.rtl!=!this.reverse?{left:"auto",right:t}:{left:t,right:"auto"}},showLabel:function(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder&&!this.prefixLabel)},labelValue:function(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder||this.prefixLabel)},prefixWidth:function(){if(this.prefix||this.$refs.prefix)return this.$refs.prefix.offsetWidth},prefixLabel:function(){return this.prefix&&!this.value}},watch:{isFocused:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},value:function(t){var e=this;if(this.mask&&!this.internalChange){var i=this.maskText(this.unmaskText(t));this.lazyValue=this.unmaskText(i),String(t)!==this.lazyValue&&this.$nextTick(function(){e.$refs.input.value=i,e.$emit("input",e.lazyValue)})}else this.lazyValue=t}},mounted:function(){this.autofocus&&this.onFocus()},methods:{focus:function(){this.onFocus()},blur:function(){this.$refs.input?this.$refs.input.blur():this.onBlur()},clearableCallback:function(){var t=this;this.internalValue=null,this.$nextTick(function(){return t.$refs.input.focus()})},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=si.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&t.children.unshift(e),t},genClearIcon:function(){if(!this.clearable)return null;var t=!!this.isDirty&&"clear";return this.clearIconCb&&Z(":clear-icon-cb","@click:clear",this),this.genSlot("append","inner",[this.genIcon(t,!this.$listeners["click:clear"]&&this.clearIconCb||this.clearableCallback,!1)])},genCounter:function(){if(!1===this.counter||null==this.counter)return null;var t=!0===this.counter?this.$attrs.maxlength:this.counter;return this.$createElement(wn,{props:{dark:this.dark,light:this.light,max:t,value:this.counterValue}})},genDefaultSlot:function(){return[this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.disabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$attrs.id&&(t.props.for=this.$attrs.id),this.$createElement(qe,t,this.$slots.label||this.label)},genInput:function(){var t=Object.assign({},this.$listeners);delete t.change;var e={style:{},domProps:{value:this.maskText(this.lazyValue)},attrs:En({"aria-label":(!this.$attrs||!this.$attrs.id)&&this.label},this.$attrs,{autofocus:this.autofocus,disabled:this.disabled,readonly:this.readonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"};return this.placeholder&&(e.attrs.placeholder=this.placeholder),this.mask&&(e.attrs.maxlength=this.masked.length),this.browserAutocomplete&&(e.attrs.autocomplete=this.browserAutocomplete),this.$createElement("input",e)},genMessages:function(){return this.hideDetails?null:this.$createElement("div",{staticClass:"v-text-field__details"},[si.options.methods.genMessages.call(this),this.genCounter()])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__"+t,ref:t},this[t])},onBlur:function(t){this.isFocused=!1,this.internalChange=!1,this.$emit("blur",t)},onClick:function(){this.isFocused||this.disabled||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,this.$emit("focus",t)))},onInput:function(t){this.internalChange=!0,this.mask&&this.resetSelections(t.target),this.internalValue=t.target.value,this.badInput=t.target.validity&&t.target.validity.badInput},onKeyDown:function(t){this.internalChange=!0,t.keyCode===j.enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),si.options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),si.options.methods.onMouseUp.call(this,t)}}}),Mn=a.a.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),Ln=function(){return(Ln=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Nn=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],i=0;return e?e.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}},Fn={closeOnClick:!1,closeOnContentClick:!1,openOnClick:!1,maxHeight:300},Hn=Pn.extend({name:"v-select",directives:{ClickOutside:ze},mixins:[yi,Mn],props:{appendIcon:{type:String,default:"$vuetify.icons.dropdown"},appendIconCb:Function,attach:{type:null,default:!1},browserAutocomplete:{type:String,default:"on"},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemAvatar:{type:[String,Array,Function],default:"avatar"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:function(){return Fn}},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,searchInput:{default:null},smallChips:Boolean},data:function(t){return{attrsInput:{role:"combobox"},cachedItems:t.cacheItems?t.items:[],content:null,isBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==t.value?t.value:t.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems:function(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes:function(){return Object.assign({},Pn.options.computed.classes.call(this),{"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive})},computedItems:function(){return this.allItems},counterValue:function(){return this.multiple?this.selectedItems.length:(this.getText(this.selectedItems[0])||"").toString().length},directives:function(){return this.isFocused?[{name:"click-outside",value:this.blur,args:{closeConditional:this.closeConditional}}]:void 0},dynamicHeight:function(){return"auto"},hasChips:function(){return this.chips||this.smallChips},hasSlot:function(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty:function(){return this.selectedItems.length>0},listData:function(){var t,e=this.$vnode&&this.$vnode.context.$options._scopeId;return{attrs:e?(t={},t[e]=!0,t):null,props:{action:this.multiple&&!this.isHidingSelected,color:this.color,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,noDataText:this.$vuetify.t(this.noDataText),selectedItems:this.selectedItems,itemAvatar:this.itemAvatar,itemDisabled:this.itemDisabled,itemValue:this.itemValue,itemText:this.itemText},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList:function(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&G("assert: staticList should not be called if slots are used"),this.$createElement(yn,this.listData)},virtualizedItems:function(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:function(){return!0},$_menuProps:function(){var t;return t="string"==typeof this.menuProps?this.menuProps.split(","):this.menuProps,Array.isArray(t)&&(t=t.reduce(function(t,e){return t[e.trim()]=!0,t},{})),Ln({},Fn,{value:this.menuCanShow&&this.isMenuActive,nudgeBottom:this.nudgeBottom?this.nudgeBottom:t.offsetY?1:0},t)}},watch:{internalValue:function(t){this.initialValue=t,this.setSelectedItems()},isBooted:function(){var t=this;this.$nextTick(function(){t.content&&t.content.addEventListener&&t.content.addEventListener("scroll",t.onScroll,!1)})},isMenuActive:function(t){t&&(this.isBooted=!0)},items:{immediate:!0,handler:function(t){this.cacheItems&&(this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))),this.setSelectedItems()}}},mounted:function(){this.content=this.$refs.menu&&this.$refs.menu.$refs.content},methods:{blur:function(t){this.isMenuActive=!1,this.isFocused=!1,this.$refs.input&&this.$refs.input.blur(),this.selectedIndex=-1,this.onBlur(t)},activateMenu:function(){this.isMenuActive=!0},clearableCallback:function(){var t=this;this.setValue(this.multiple?[]:void 0),this.$nextTick(function(){return t.$refs.input.focus()}),this.openOnClear&&(this.isMenuActive=!0)},closeConditional:function(t){return!(!this.content||this.content.contains(t.target)||!this.$el||this.$el.contains(t.target)||t.target===this.$el)},filterDuplicates:function(t){for(var e=new Map,i=0;i<t.length;++i){var n=t[i],s=this.getValue(n);!e.has(s)&&e.set(s,n)}return Array.from(e.values())},findExistingIndex:function(t){var e=this,i=this.getValue(t);return(this.internalValue||[]).findIndex(function(t){return e.valueComparator(e.getValue(t),i)})},genChipSelection:function(t,e){var i=this,n=this.disabled||this.readonly||this.getDisabled(t);return this.$createElement(me,{staticClass:"v-chip--select-multi",attrs:{tabindex:-1},props:{close:this.deletableChips&&!n,disabled:n,selected:e===this.selectedIndex,small:this.smallChips},on:{click:function(t){n||(t.stopPropagation(),i.selectedIndex=e)},input:function(){return i.onChipInput(t)}},key:this.getValue(t)},this.getText(t))},genCommaSelection:function(t,e,i){var n=JSON.stringify(this.getValue(t)),s=e===this.selectedIndex&&this.color,r=this.disabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(s,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":r},key:n}),this.getText(t)+(i?"":", "))},genDefaultSlot:function(){var t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot()]),this.genMenu(),this.genProgress()]},genInput:function(){var t=Pn.options.methods.genInput.call(this);return t.data.domProps.value=null,t.data.attrs.readonly=!0,t.data.attrs["aria-readonly"]=String(this.readonly),t.data.on.keypress=this.onKeyPress,t},genList:function(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot:function(){var t=this,e=["prepend-item","no-data","append-item"].filter(function(e){return t.$slots[e]}).map(function(e){return t.$createElement("template",{slot:e},t.$slots[e])});return this.$createElement(yn,Ln({},this.listData),e)},genMenu:function(){var t,e,i=this,n=this.$_menuProps;n.activator=this.$refs["input-slot"];var s=Object.keys(Ye.options.props),r=Object.keys(this.$attrs).reduce(function(t,e){return s.includes(Y(e))&&t.push(e),t},[]);try{for(var a=Nn(r),o=a.next();!o.done;o=a.next()){var l=o.value;n[Y(l)]=this.$attrs[l]}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return""===this.attach||!0===this.attach||"attach"===this.attach?n.attach=this.$el:n.attach=this.attach,this.$createElement(Ye,{props:n,on:{input:function(t){i.isMenuActive=t,i.isFocused=t}},ref:"menu"},[this.genList()])},genSelections:function(){var t,e=this.selectedItems.length,i=new Array(e);for(t=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;e--;)i[e]=t(this.selectedItems[e],e,e===i.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},i)},genSlotSelection:function(t,e){return this.$scopedSlots.selection({parent:this,item:t,index:e,selected:e===this.selectedIndex,disabled:this.disabled||this.readonly})},getMenuIndex:function(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled:function(t){return E(t,this.itemDisabled,!1)},getText:function(t){return E(t,this.itemText,t)},getValue:function(t){return E(t,this.itemValue,this.getText(t))},onBlur:function(t){this.$emit("blur",t)},onChipInput:function(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick:function(){this.isDisabled||(this.isMenuActive=!0,this.isFocused||(this.isFocused=!0,this.$emit("focus")))},onEnterDown:function(){this.onBlur()},onEscDown:function(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress:function(t){var e=this;if(!this.multiple){var i=performance.now();i-this.keyboardLookupLastTime>1e3&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=i;var n=this.allItems.findIndex(function(t){return e.getText(t).toLowerCase().startsWith(e.keyboardLookupPrefix)}),s=this.allItems[n];-1!==n&&(this.setValue(this.returnObject?s:this.getValue(s)),setTimeout(function(){return e.setMenuIndex(n)}))}},onKeyDown:function(t){var e=t.keyCode;return this.readonly||this.isMenuActive||![j.enter,j.space,j.up,j.down].includes(e)||this.activateMenu(),this.isMenuActive&&this.$refs.menu&&this.$refs.menu.changeListIndex(t),e===j.enter?this.onEnterDown(t):e===j.esc?this.onEscDown(t):e===j.tab?this.onTabDown(t):void 0},onMouseUp:function(t){var e=this;if(this.hasMouseDown){var i=this.$refs["append-inner"];this.isMenuActive&&i&&(i===t.target||i.contains(t.target))?this.$nextTick(function(){return e.isMenuActive=!e.isMenuActive}):this.isEnclosed&&!this.isDisabled&&(this.isMenuActive=!0)}Pn.options.methods.onMouseUp.call(this,t)},onScroll:function(){var t=this;if(this.isMenuActive){if(this.lastItem>=this.computedItems.length)return;this.content.scrollHeight-(this.content.scrollTop+this.content.clientHeight)<200&&(this.lastItem+=20)}else requestAnimationFrame(function(){return t.content.scrollTop=0})},onTabDown:function(t){var e=this.getMenuIndex(),i=this.$refs.menu.tiles[e];i&&i.className.indexOf("v-list__tile--highlighted")>-1&&this.isMenuActive&&e>-1?(t.preventDefault(),t.stopPropagation(),i.click()):this.blur(t)},selectItem:function(t){var e=this;if(this.multiple){var i=(this.internalValue||[]).slice(),n=this.findExistingIndex(t);-1!==n?i.splice(n,1):i.push(t),this.setValue(i.map(function(t){return e.returnObject?t:e.getValue(t)})),this.$nextTick(function(){e.$refs.menu&&e.$refs.menu.updateDimensions()})}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex:function(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems:function(){var t,e,i=this,n=[],s=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue],r=function(t){var e=a.allItems.findIndex(function(e){return i.valueComparator(i.getValue(e),i.getValue(t))});e>-1&&n.push(a.allItems[e])},a=this;try{for(var o=Nn(s),l=o.next();!l.done;l=o.next()){r(l.value)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}this.selectedItems=n},setValue:function(t){var e=this.internalValue;this.internalValue=t,t!==e&&this.$emit("change",t)}}}),jn=function(){return(jn=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},zn=jn({},Fn,{offsetY:!0,offsetOverflow:!0,transition:!1}),Rn=Hn.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},browserAutocomplete:{type:String,default:"off"},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,noFilter:Boolean,searchInput:{default:void 0},menuProps:{type:Hn.options.props.menuProps.type,default:function(){return zn}},autoSelectFirst:{type:Boolean,default:!1}},data:function(t){return{attrsInput:null,lazySearch:t.searchInput}},computed:{classes:function(){return Object.assign({},Hn.options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map(function(e){return t.getValue(e)})},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some(function(e){return!t.hasItem(e)}):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:this.getText(this.selectedItem).toString().length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(function(e){return t.filter(e,t.internalSearch.toString(),t.getText(e).toString())})},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:searchInput",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple?this.searchIsDirty:this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=Hn.options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),jn({},zn,t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find(function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))})},listData:function(){var t=Hn.options.computed.listData.call(this);return Object.assign(t.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:function(t){this.onFilteredItemsChanged(t)},internalValue:function(){this.setSearch()},isFocused:function(t){t?this.$refs.input&&this.$refs.input.select():this.updateSelf()},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:function(t){this.onInternalSearchChanged(t)},itemText:function(){this.updateSelf()}},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t){var e=this;this.setMenuIndex(-1),this.$nextTick(function(){e.setMenuIndex(t.length>0&&(1===t.length||e.autoSelectFirst)?0:-1)})},onInternalSearchChanged:function(t){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){if(!this.searchIsDirty&&[j.backspace,j.left,j.right,j.delete].includes(t)){var e=this.selectedItems.length-1;if(t===j.left)this.selectedIndex=-1===this.selectedIndex?e:this.selectedIndex-1;else if(t===j.right)this.selectedIndex=this.selectedIndex>=e?-1:this.selectedIndex+1;else if(-1===this.selectedIndex)return void(this.selectedIndex=e);var i=this.selectedItems[this.selectedIndex];if([j.backspace,j.delete].includes(t)&&!this.getDisabled(i)){var n=this.selectedIndex===e?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(i),this.selectedIndex=n}}},clearableCallback:function(){this.internalSearch=void 0,Hn.options.methods.clearableCallback.call(this)},genInput:function(){var t=Pn.options.methods.genInput.call(this);return t.data.attrs.role="combobox",t.data.domProps.value=this.internalSearch,t},genSelections:function(){return this.hasSlot||this.multiple?Hn.options.methods.genSelections.call(this):[]},onClick:function(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onEnterDown:function(){},onInput:function(t){this.selectedIndex>-1||(t.target.value&&(this.activateMenu(),this.isAnyValueAllowed||this.setMenuIndex(0)),this.mask&&this.resetSelections(t.target),this.internalSearch=t.target.value,this.badInput=t.target.validity&&t.target.validity.badInput)},onKeyDown:function(t){var e=t.keyCode;Hn.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onTabDown:function(t){Hn.options.methods.onTabDown.call(this,t),this.updateSelf()},setSelectedItems:function(){Hn.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick(function(){t.internalSearch=t.multiple&&t.internalSearch&&t.isMenuActive?t.internalSearch:!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem)})},updateSelf:function(){this.updateAutocomplete()},updateAutocomplete:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1}}}),Wn=Rn,Yn=(i(24),se(ie,ce,$e(["left","bottom"]),de).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes:function(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render:function(t){var e=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},e)])}}));i(25);function Xn(t,e){return void 0===e&&(e=[]),se($e(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unbind(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.bind(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(t){void 0===t&&(t=!1),(t||this.app)&&this.$vuetify.application.unbind(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}i(26);var Un,qn,Kn,Gn,Zn=(void 0===Un&&(Un="value"),void 0===qn&&(qn="change"),a.a.extend({name:"proxyable",model:{prop:Un,event:qn},props:(Kn={},Kn[Un]={required:!1},Kn),data:function(){return{internalLazyValue:this[Un]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(qn,t))}}},watch:(Gn={},Gn[Un]=function(t){this.internalLazyValue=t},Gn)})),Jn=function(){return(Jn=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Qn=se(Zn,Kt).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Jn({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,i){return t.toggleMethod(t.getValue(e,i))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&K("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,i)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(i)<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==i}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),i=e.findIndex(function(e){return e===t});this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),ts=Qn.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),es=Qn.extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return Qn.options.computed.classes.call(this)}}}),is=se(Xn("bottom",["height","value"]),ie,Kt).extend({name:"v-bottom-nav",props:{active:[Number,String],mandatory:Boolean,height:{default:56,type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},shift:Boolean,value:null},computed:{classes:function(){return{"v-bottom-nav--absolute":this.absolute,"v-bottom-nav--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-nav--shift":this.shift,"v-bottom-nav--active":this.value}},computedHeight:function(){return parseInt(this.height)}},methods:{updateApplication:function(){return this.value?this.computedHeight:0},updateValue:function(t){this.$emit("update:active",t)}},render:function(t){return t(es,this.setBackgroundColor(this.color,{staticClass:"v-bottom-nav",class:this.classes,style:{height:parseInt(this.computedHeight)+"px"},props:{mandatory:Boolean(this.mandatory||void 0!==this.active),value:this.active},on:{change:this.updateValue}}),this.$slots.default)}}),ns=(i(27),i(28),i(29),a.a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:void 0,overlayTransitionDuration:650}},watch:{hideOverlay:function(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this;if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active");this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=String(t.activeZIndex-1)))}),!0},removeOverlay:function(t){var e=this;if(void 0===t&&(t=!0),!this.overlay)return t&&this.showScroll();this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=window.setTimeout(function(){try{e.overlay&&e.overlay.parentNode&&e.overlay.parentNode.removeChild(e.overlay),e.overlay=null,t&&e.showScroll()}catch(t){console.log(t)}clearTimeout(e.overlayTimeout),e.overlayTimeout=void 0},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[j.up,j.pageup],i=[j.down,j.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,s=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(s,n))||this.shouldScroll(n,i)}for(var r=0;r<e.length;r++){var a=e[r];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return this.shouldScroll(a,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){var t,e,i,n;this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(t=window,e="wheel",i=this.scrollListener,n={passive:!1},t.addEventListener(e,i,!!T&&n),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})),ss=function(){return(ss=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},rs={name:"v-dialog",directives:{ClickOutside:ze},mixins:[xe,ke,ns,Ee,Ae,ce],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return(t={})[("v-dialog "+this.contentClass).trim()]=!0,t["v-dialog--active"]=this.isActive,t["v-dialog--persistent"]=this.persistent,t["v-dialog--fullscreen"]=this.fullscreen,t["v-dialog--scrollable"]=this.scrollable,t["v-dialog--animated"]=this.animate,t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===U(this,"activator",!0)&&G("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):ns.options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===j.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick(function(){return e&&e.focus()})}this.$emit("keydown",t)},onFocusin:function(t){var e=t.target;if(![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(function(t){return t.contains(e)})){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');i.length&&i[0].focus()}},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}return null},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===U(this,"activator")){var i=this.$scopedSlots.activator({on:e});return this.activatorNode=i,i}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,i=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:F(this.maxWidth),width:"auto"===this.width?void 0:F(this.width)}),i.push(this.genActivator());var s=t("div",n,this.showLazyContent(this.$slots.default));return this.transition&&(s=t("transition",{props:{name:this.transition,origin:this.origin}},[s])),i.push(t("div",{class:this.contentClasses,attrs:ss({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(Re,{props:{root:!0,light:this.light,dark:this.dark}},[s])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},i)}},as=function(){return(as=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},os={name:"v-bottom-sheet",props:{disabled:Boolean,fullWidth:Boolean,hideOverlay:Boolean,inset:Boolean,lazy:Boolean,maxWidth:{type:[String,Number],default:"auto"},persistent:Boolean,value:null},render:function(t){var e=t("template",{slot:"activator"},this.$slots.activator),i=["v-bottom-sheet",this.inset?"v-bottom-sheet--inset":""].join(" ");return t(rs,{attrs:as({},this.$props),on:as({},this.$listeners),props:{contentClass:i,noClickAnimation:!0,transition:"bottom-sheet-transition",value:this.value}},[e,this.$slots.default])}},ls=(i(30),se(Bi).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){var t;return(t={"v-breadcrumbs__item":!0})[this.activeClass]=this.disabled,t}},render:function(t){var e=this.generateRouteLink(this.classes);return t("li",[t(e.tag,e.data,this.$slots.default)])}})),us=function(){return(us=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},hs=se(Kt).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return us({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Z("justify-center",'class="justify-center"',this),this.justifyEnd&&Z("justify-end",'class="justify-end"',this),this.$slots.default&&Z("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var n=this.$slots.default[i];n.componentOptions&&"v-breadcrumbs-item"===n.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(n),e=!0):t.push(n)}return t}},genDivider:function(){return this.$createElement(cs,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],n=0;n<this.items.length;n++){var s=this.items[n];i.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(ls,{key:i.join("."),props:s},[s.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),cs=k("v-breadcrumbs__divider","li"),ds=(i(31),i(32),se(ie).extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},radius:function(){return 20},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:this.calculatedSize+"px",width:this.calculatedSize+"px"}},svgStyles:function(){return{transform:"rotate("+Number(this.rotate)+"deg)"}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e,i){return t("circle",{class:"v-progress-circular__"+e,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":i}})},genSvg:function(t){var e=[this.indeterminate||this.genCircle(t,"underlay",0),this.genCircle(t,"overlay",this.strokeDashOffset)];return t("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:this.viewBoxSize+" "+this.viewBoxSize+" "+2*this.viewBoxSize+" "+2*this.viewBoxSize}},e)}},render:function(t){var e=t("div",{staticClass:"v-progress-circular__info"},this.$slots.default),i=this.genSvg(t);return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[i,e])}})),fs=ds;function ps(t,e,i){return Je(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){var t;return this.activeClass?((t={})[this.activeClass]=this.isActive,t):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}ps("itemGroup");var vs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms=function(){return(ms=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},gs=se(ie,Bi,Ie,Kt,ps("btnToggle"),he("inputValue")).extend().extend({name:"v-btn",props:{activeClass:{type:String,default:"v-btn--active"},block:Boolean,depressed:Boolean,fab:Boolean,flat:Boolean,icon:Boolean,large:Boolean,loading:Boolean,outline:Boolean,ripple:{type:[Boolean,Object],default:null},round:Boolean,small:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"button"},value:null},computed:{classes:function(){var t;return ms(((t={"v-btn":!0})[this.activeClass]=this.isActive,t["v-btn--absolute"]=this.absolute,t["v-btn--block"]=this.block,t["v-btn--bottom"]=this.bottom,t["v-btn--disabled"]=this.disabled,t["v-btn--flat"]=this.flat,t["v-btn--floating"]=this.fab,t["v-btn--fixed"]=this.fixed,t["v-btn--icon"]=this.icon,t["v-btn--large"]=this.large,t["v-btn--left"]=this.left,t["v-btn--loader"]=this.loading,t["v-btn--outline"]=this.outline,t["v-btn--depressed"]=this.depressed&&!this.flat||this.outline,t["v-btn--right"]=this.right,t["v-btn--round"]=this.round,t["v-btn--router"]=this.to,t["v-btn--small"]=this.small,t["v-btn--top"]=this.top,t),this.themeClasses)},computedRipple:function(){var t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==this.ripple?this.ripple:t)}},watch:{$route:"onRouteChange"},methods:{click:function(t){!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("div",{class:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loading"},this.$slots.loader||[this.$createElement(fs,{props:{indeterminate:!0,size:23,width:2}})])},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass;this.$nextTick(function(){D(t.$refs.link,e)&&t.toggle()})}}},render:function(t){var e=this.outline||this.flat||this.disabled?this.setTextColor:this.setBackgroundColor,i=this.generateRouteLink(this.classes),n=i.tag,s=i.data,r=[this.genContent(),this.loading&&this.genLoader()];return"button"===n&&(s.attrs.type=this.type),s.attrs.value=["string","number"].includes(vs(this.value))?this.value:JSON.stringify(this.value),this.btnToggle&&(s.ref="link"),t(n,e(this.color,s),r)}}),ys=gs,bs=(i(33),function(){return(bs=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),xs=es.extend({name:"v-btn-toggle",props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return bs({},es.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--only-child":1===this.selectedItems.length,"v-btn-toggle--selected":this.selectedItems.length>0})}}}),ws="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ss=/^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/,ks=/(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,Cs=[0,31,28,31,30,31,30,31,31,30,31,30,31],$s=[0,31,29,31,30,31,30,31,31,30,31,30,31],Is=28,_s=12,Ts=1,As=1,Bs=7,Os=60;function Ds(t){var e=Ws(t);return e.day=As,js(e),zs(e),e}function Es(t){var e=Ws(t);return e.day=Rs(e.year,e.month),js(e),zs(e),e}function Vs(t){return!!Ss.exec(t)}function Ps(t,e){var i=Ss.exec(t);if(!i)return null;var n={date:t,time:"",year:parseInt(i[1]),month:parseInt(i[2]),day:parseInt(i[4])||1,hour:parseInt(i[6])||0,minute:parseInt(i[8])||0,weekday:0,hasDay:!!i[4],hasTime:!(!i[6]||!i[8]),past:!1,present:!1,future:!1};return js(n),zs(n),e&&Fs(n,e,n.hasTime),n}function Ms(t){return zs({date:"",time:"",year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),weekday:t.getDay(),hour:t.getHours(),minute:t.getMinutes(),hasDay:!0,hasTime:!0,past:!1,present:!0,future:!1})}function Ls(t){return 1e4*t.year+100*t.month+t.day}function Ns(t){return 100*t.hour+t.minute}function Fs(t,e,i){void 0===i&&(i=!1);var n=Ls(e),s=Ls(t),r=n===s;return t.hasTime&&i&&r&&(r=(n=Ns(e))===(s=Ns(t))),t.past=s<n,t.present=r,t.future=s>n,t}function Hs(t,e,i){return t.hasTime=!0,t.hour=Math.floor(e/Os),t.minute=e%Os,t.time=Xs(t),i&&Fs(t,i,!0),t}function js(t){return t.weekday=function(t){if(t.hasDay){var e=Math.floor,i=t.day,n=(t.month+9)%_s+1,s=e(t.year/100),r=t.year%100-(t.month<=2?1:0);return((i+e(2.6*n-.2)-2*s+r+e(r/4)+e(s/4))%7+7)%7}return t.weekday}(t),t}function zs(t){return t.time=Xs(t),t.date=function(t){var e=Ys(t.year,4)+"-"+Ys(t.month,2);t.hasDay&&(e+="-"+Ys(t.day,2));return e}(t),t}function Rs(t,e){return function(t){return t%4==0&&t%100!=0||t%400==0}(t)?$s[e]:Cs[e]}function Ws(t){return{date:t.date,time:t.time,year:t.year,month:t.month,day:t.day,weekday:t.weekday,hour:t.hour,minute:t.minute,hasDay:t.hasDay,hasTime:t.hasTime,past:t.past,present:t.present,future:t.future}}function Ys(t,e){for(var i=String(t);i.length<e;)i="0"+i;return i}function Xs(t){return t.hasTime?Ys(t.hour,2)+":"+Ys(t.minute,2):""}function Us(t){return t.day++,t.weekday=(t.weekday+1)%Bs,t.day>Is&&t.day>Rs(t.year,t.month)&&(t.day=As,t.month++,t.month>_s&&(t.month=Ts,t.year++)),t}function qs(t){return t.day--,t.weekday=(t.weekday+6)%Bs,t.day<As&&(t.month--,t.month<Ts&&(t.year--,t.month=_s),t.day=Rs(t.year,t.month)),t}function Ks(t,e,i){for(void 0===e&&(e=Us),void 0===i&&(i=1);--i>=0;)e(t);return t}function Gs(t,e,i,n){for(void 0===i&&(i=Us),void 0===n&&(n=6);t.weekday!==e&&--n>=0;)i(t);return t}function Zs(t,e,i,n,s,r){void 0===s&&(s=42),void 0===r&&(r=0);var a=Ls(e),o=[],l=Ws(t),u=0,h=u===a;if(a<Ls(t))return o;for(;(!h||o.length<r)&&o.length<s;)if(u=Ls(l),h=h||u===a,0!==n[l.weekday]){var c=Ws(l);zs(c),Fs(c,i),o.push(c),l=Ks(l,Us,n[l.weekday])}else l=Us(l);return o}function Js(t,e){return"undefined"==typeof Intl||void 0===Intl.DateTimeFormat?function(t,e){return""}:function(i,n){try{var s=new Intl.DateTimeFormat(t||void 0,e(i,n)),r=Ys(i.hour,2)+":"+Ys(i.minute,2),a=i.date;return s.format(new Date(a+"T"+r+":00+00:00"))}catch(t){return""}}}var Qs=a.a.extend({name:"times",props:{now:{type:String,validator:Vs}},data:function(){return{times:{now:Ps("0000-00-00 00:00"),today:Ps("0000-00-00")}}},computed:{parsedNow:function(){return this.now?Ps(this.now):null}},watch:{parsedNow:"updateTimes"},created:function(){this.updateTimes(),this.setPresent()},methods:{setPresent:function(){this.times.now.present=this.times.today.present=!0,this.times.now.past=this.times.today.past=!1,this.times.now.future=this.times.today.future=!1},updateTimes:function(){var t=this.parsedNow||this.getNow();this.updateDay(t,this.times.now),this.updateTime(t,this.times.now),this.updateDay(t,this.times.today)},getNow:function(){return Ms(new Date)},updateDay:function(t,e){t.date!==e.date&&(e.year=t.year,e.month=t.month,e.day=t.day,e.weekday=t.weekday,e.date=t.date)},updateTime:function(t,e){t.time!==e.time&&(e.hour=t.hour,e.minute=t.minute,e.time=t.time)}}}),tr=a.a.extend({name:"mouse",methods:{getDefaultMouseEventHandlers:function(t,e){var i;return this.getMouseEventHandlers(((i={})["click"+t]={event:"click"},i["contextmenu"+t]={event:"contextmenu",prevent:!0,result:!1},i["mousedown"+t]={event:"mousedown"},i["mousemove"+t]={event:"mousemove"},i["mouseup"+t]={event:"mouseup"},i["mouseenter"+t]={event:"mouseenter"},i["mouseleave"+t]={event:"mouseleave"},i["touchstart"+t]={event:"touchstart"},i["touchmove"+t]={event:"touchmove"},i["touchend"+t]={event:"touchend"},i),e)},getMouseEventHandlers:function(t,e){var i=this,n={},s=function(s){var a=t[s];if(!r.$listeners[s])return"continue";var o=(a.passive?"&":(a.once?"~":"")+(a.capture?"!":""))+a.event,l=function(t){var n=t;return(void 0===a.button||n.buttons>0&&n.button===a.button)&&(a.prevent&&t.preventDefault(),a.stop&&t.stopPropagation(),i.$emit(s,e(t))),a.result};o in n?Array.isArray(n[o])?n[o].push(l):n[o]=[n[o],l]:n[o]=l},r=this;for(var a in t)s(a);return n}}}),er={base:{start:{type:String,validate:Vs,default:function(){return Ms(new Date).date}},end:{type:String,validate:Vs,default:"0000-00-00"},weekdays:{type:Array,default:function(){return[0,1,2,3,4,5,6]}},hideHeader:{type:Boolean,default:!1},shortWeekdays:{type:Boolean,default:!0},weekdayFormat:{type:Function,default:null},dayFormat:{type:Function,default:null},locale:{type:String,default:"en-us"}},intervals:{maxDays:{type:Number,default:7},shortIntervals:{type:Boolean,default:!0},intervalHeight:{type:[Number,String],default:40,validate:ir},intervalMinutes:{type:[Number,String],default:60,validate:ir},firstInterval:{type:[Number,String],default:0,validate:ir},intervalCount:{type:[Number,String],default:24,validate:ir},intervalFormat:{type:Function,default:null},intervalStyle:{type:Function,default:null},showIntervalLabel:{type:Function,default:null}},weeks:{minWeeks:{validate:ir,default:1},shortMonths:{type:Boolean,default:!0},showMonthOnFirst:{type:Boolean,default:!0},monthFormat:{type:Function,default:null}},calendar:{type:{type:String,default:"month"},value:{type:String,validate:Vs}}};function ir(t){return isFinite(parseInt(t))}var nr=se(ie,Kt,Qs,tr).extend({name:"calendar-base",props:er.base,computed:{weekdaySkips:function(){return function(t){for(var e=[1,1,1,1,1,1,1],i=[0,0,0,0,0,0,0],n=0;n<t.length;n++)i[t[n]]=1;for(var s=0;s<Bs;s++){for(var r=1,a=1;a<Bs&&!i[(s+a)%Bs];a++)r++;e[s]=i[s]*r}return e}(this.weekdays)},parsedStart:function(){return Ps(this.start)},parsedEnd:function(){return Ps(this.end)},days:function(){return Zs(this.parsedStart,this.parsedEnd,this.times.today,this.weekdaySkips)},dayFormatter:function(){if(this.dayFormat)return this.dayFormat;var t={timeZone:"UTC",day:"numeric"};return Js(this.locale,function(e,i){return t})},weekdayFormatter:function(){if(this.weekdayFormat)return this.weekdayFormat;var t={timeZone:"UTC",weekday:"long"},e={timeZone:"UTC",weekday:"short"};return Js(this.locale,function(i,n){return n?e:t})}},methods:{getRelativeClasses:function(t,e){return void 0===e&&(e=!1),{"v-present":t.present,"v-past":t.past,"v-future":t.future,"v-outside":e}},getStartOfWeek:function(t){return function(t,e,i){var n=Ws(t);return Gs(n,e[0],qs),zs(n),i&&Fs(n,i,n.hasTime),n}(t,this.weekdays,this.times.today)},getEndOfWeek:function(t){return function(t,e,i){var n=Ws(t);return Gs(n,e[e.length-1]),zs(n),i&&Fs(n,i,n.hasTime),n}(t,this.weekdays,this.times.today)}}}),sr=(i(7),function(){return(sr=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),rr=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},ar=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(rr(arguments[e]));return t},or=nr.extend({name:"v-calendar-weekly",props:er.weeks,computed:{staticClass:function(){return"v-calendar-weekly"},classes:function(){return this.themeClasses},parsedMinWeeks:function(){return parseInt(this.minWeeks)},days:function(){var t=this.parsedMinWeeks*this.weekdays.length;return Zs(this.getStartOfWeek(this.parsedStart),this.getEndOfWeek(this.parsedEnd),this.times.today,this.weekdaySkips,Number.MAX_SAFE_INTEGER,t)},todayWeek:function(){var t=this.times.today;return Zs(this.getStartOfWeek(t),this.getEndOfWeek(t),t,this.weekdaySkips,this.weekdays.length,this.weekdays.length)},monthFormatter:function(){if(this.monthFormat)return this.monthFormat;var t={timeZone:"UTC",month:"long"},e={timeZone:"UTC",month:"short"};return Js(this.locale,function(i,n){return n?e:t})}},methods:{isOutside:function(t){var e=Ls(t);return e<Ls(this.parsedStart)||e>Ls(this.parsedEnd)},genHead:function(){return this.$createElement("div",{staticClass:"v-calendar-weekly__head"},this.genHeadDays())},genHeadDays:function(){return this.todayWeek.map(this.genHeadDay)},genHeadDay:function(t,e){var i=this.isOutside(this.days[e]),n=t.present?this.color:void 0;return this.$createElement("div",this.setTextColor(n,{key:t.date,staticClass:"v-calendar-weekly__head-weekday",class:this.getRelativeClasses(t,i)}),this.weekdayFormatter(t,this.shortWeekdays))},genWeeks:function(){for(var t=this.days,e=this.weekdays.length,i=[],n=0;n<t.length;n+=e)i.push(this.genWeek(t.slice(n,n+e)));return i},genWeek:function(t){return this.$createElement("div",{key:t[0].date,staticClass:"v-calendar-weekly__week"},t.map(this.genDay))},genDay:function(t){var e=this.isOutside(t),i=this.$scopedSlots.day,n=sr({outside:e},t),s=1===t.day&&this.showMonthOnFirst;return this.$createElement("div",{key:t.date,staticClass:"v-calendar-weekly__day",class:this.getRelativeClasses(t,e),on:this.getDefaultMouseEventHandlers(":day",function(e){return t})},[this.genDayLabel(t),s?this.genDayMonth(t):"",i?i(n):""])},genDayLabel:function(t){var e=t.present?this.color:void 0,i=this.$scopedSlots.dayLabel;return this.$createElement("div",this.setTextColor(e,{staticClass:"v-calendar-weekly__day-label",on:this.getMouseEventHandlers({"click:date":{event:"click",stop:!0},"contextmenu:date":{event:"contextmenu",stop:!0,prevent:!0,result:!1}},function(e){return t})}),i?i(t):this.dayFormatter(t,!1))},genDayMonth:function(t){var e=t.present?this.color:void 0,i=this.$scopedSlots.dayMonth;return this.$createElement("div",this.setTextColor(e,{staticClass:"v-calendar-weekly__day-month"}),i?i(t):this.monthFormatter(t,this.shortMonths))}},render:function(t){return t("div",{staticClass:this.staticClass,class:this.classes,nativeOn:{dragstart:function(t){t.preventDefault()}}},ar([this.hideHeader?"":this.genHead()],this.genWeeks()))}}),lr=or.extend({name:"v-calendar-monthly",computed:{staticClass:function(){return"v-calendar-monthly v-calendar-weekly"},parsedStart:function(){return Ds(Ps(this.start))},parsedEnd:function(){return Es(Ps(this.end))}}}),ur=(i(34),nr.extend({name:"calendar-with-intervals",props:er.intervals,computed:{parsedFirstInterval:function(){return parseInt(this.firstInterval)},parsedIntervalMinutes:function(){return parseInt(this.intervalMinutes)},parsedIntervalCount:function(){return parseInt(this.intervalCount)},parsedIntervalHeight:function(){return parseFloat(this.intervalHeight)},firstMinute:function(){return this.parsedFirstInterval*this.parsedIntervalMinutes},bodyHeight:function(){return this.parsedIntervalCount*this.parsedIntervalHeight},days:function(){return Zs(this.parsedStart,this.parsedEnd,this.times.today,this.weekdaySkips,this.maxDays)},intervals:function(){var t=this.days,e=this.parsedFirstInterval,i=this.parsedIntervalMinutes,n=this.parsedIntervalCount,s=this.times.now;return t.map(function(t){return function(t,e,i,n,s){for(var r=[],a=0;a<n;a++){var o=(e+a)*i,l=Ws(t);r.push(Hs(l,o,s))}return r}(t,e,i,n,s)})},intervalFormatter:function(){if(this.intervalFormat)return this.intervalFormat;var t={timeZone:"UTC",hour12:!0,hour:"2-digit",minute:"2-digit"},e={timeZone:"UTC",hour12:!0,hour:"numeric",minute:"2-digit"},i={timeZone:"UTC",hour12:!0,hour:"numeric"};return Js(this.locale,function(n,s){return s?0===n.minute?i:e:t})}},methods:{showIntervalLabelDefault:function(t){var e=this.intervals[0][0];return!(e.hour===t.hour&&e.minute===t.minute)&&0===t.minute},intervalStyleDefault:function(t){},getTimestampAtEvent:function(t,e){var i=Ws(e),n=t.currentTarget.getBoundingClientRect(),s=this.firstMinute,r=t,a=t,o=r.changedTouches||r.touches,l=((o&&o[0]?o[0].clientY:a.clientY)-n.top)/this.parsedIntervalHeight;return Hs(i,s+Math.floor(l*this.parsedIntervalMinutes),this.times.now)},getSlotScope:function(t){var e=Ws(t);return e.timeToY=this.timeToY,e.minutesToPixels=this.minutesToPixels,e},scrollToTime:function(t){var e=this.timeToY(t),i=this.$refs.scrollArea;return!(!1===e||!i)&&(i.scrollTop=e,!0)},minutesToPixels:function(t){return t/this.parsedIntervalMinutes*this.parsedIntervalHeight},timeToY:function(t,e){void 0===e&&(e=!0);var i=function(t){if("number"==typeof t)return t;if("string"==typeof t){var e=ks.exec(t);return!!e&&60*parseInt(e[1])+parseInt(e[3]||0)}return"object"===(void 0===t?"undefined":ws(t))&&"number"==typeof t.hour&&"number"==typeof t.minute&&60*t.hour+t.minute}(t);if(!1===i)return!1;var n=(i-this.firstMinute)/(this.parsedIntervalCount*this.parsedIntervalMinutes)*this.bodyHeight;return e&&(n<0&&(n=0),n>this.bodyHeight&&(n=this.bodyHeight)),n}}})),hr=function(){return(hr=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},cr=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},dr=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(cr(arguments[e]));return t},fr=ur.extend({name:"v-calendar-daily",directives:{Resize:Gt},data:function(){return{scrollPush:0}},computed:{classes:function(){return hr({"v-calendar-daily":!0},this.themeClasses)}},mounted:function(){this.init()},methods:{init:function(){this.$nextTick(this.onResize)},onResize:function(){this.scrollPush=this.getScrollPush()},getScrollPush:function(){var t=this.$refs.scrollArea,e=this.$refs.pane;return t&&e?t.offsetWidth-e.offsetWidth:0},genHead:function(){return this.$createElement("div",{staticClass:"v-calendar-daily__head",style:{marginRight:this.scrollPush+"px"}},dr([this.genHeadIntervals()],this.genHeadDays()))},genHeadIntervals:function(){return this.$createElement("div",{staticClass:"v-calendar-daily__intervals-head"})},genHeadDays:function(){return this.days.map(this.genHeadDay)},genHeadDay:function(t){var e=this,i=this.$scopedSlots.dayHeader;return this.$createElement("div",{key:t.date,staticClass:"v-calendar-daily_head-day",class:this.getRelativeClasses(t),on:this.getDefaultMouseEventHandlers(":day",function(i){return e.getSlotScope(t)})},[this.genHeadWeekday(t),this.genHeadDayLabel(t),i?i(t):""])},genHeadWeekday:function(t){var e=t.present?this.color:void 0;return this.$createElement("div",this.setTextColor(e,{staticClass:"v-calendar-daily_head-weekday"}),this.weekdayFormatter(t,this.shortWeekdays))},genHeadDayLabel:function(t){var e=t.present?this.color:void 0;return this.$createElement("div",this.setTextColor(e,{staticClass:"v-calendar-daily_head-day-label",on:this.getMouseEventHandlers({"click:date":{event:"click",stop:!0},"contextmenu:date":{event:"contextmenu",stop:!0,prevent:!0,result:!1}},function(e){return t})}),this.dayFormatter(t,!1))},genBody:function(){return this.$createElement("div",{staticClass:"v-calendar-daily__body"},[this.genScrollArea()])},genScrollArea:function(){return this.$createElement("div",{ref:"scrollArea",staticClass:"v-calendar-daily__scroll-area"},[this.genPane()])},genPane:function(){return this.$createElement("div",{ref:"pane",staticClass:"v-calendar-daily__pane",style:{height:F(this.bodyHeight)}},[this.genDayContainer()])},genDayContainer:function(){return this.$createElement("div",{staticClass:"v-calendar-daily__day-container"},dr([this.genBodyIntervals()],this.genDays()))},genDays:function(){return this.days.map(this.genDay)},genDay:function(t,e){var i=this,n=this.$scopedSlots.dayBody,s=this.getSlotScope(t);return this.$createElement("div",{key:t.date,staticClass:"v-calendar-daily__day",class:this.getRelativeClasses(t),on:this.getDefaultMouseEventHandlers(":time",function(e){return i.getSlotScope(i.getTimestampAtEvent(e,t))})},dr(this.genDayIntervals(e),[n?n(s):""]))},genDayIntervals:function(t){return this.intervals[t].map(this.genDayInterval)},genDayInterval:function(t){var e=F(this.intervalHeight),i=this.intervalStyle||this.intervalStyleDefault,n=this.$scopedSlots.interval,s=this.getSlotScope(t),r={key:t.time,staticClass:"v-calendar-daily__day-interval",style:hr({height:e},i(t))},a=n?n(s):void 0;return this.$createElement("div",r,a)},genBodyIntervals:function(){var t=this,e={staticClass:"v-calendar-daily__intervals-body",on:this.getDefaultMouseEventHandlers(":interval",function(e){return t.getTimestampAtEvent(e,t.parsedStart)})};return this.$createElement("div",e,this.genIntervalLabels())},genIntervalLabels:function(){return this.intervals[0].map(this.genIntervalLabel)},genIntervalLabel:function(t){var e=F(this.intervalHeight),i=this.shortIntervals,n=(this.showIntervalLabel||this.showIntervalLabelDefault)(t)?this.intervalFormatter(t,i):void 0;return this.$createElement("div",{key:t.time,staticClass:"v-calendar-daily__interval",style:{height:e}},[this.$createElement("div",{staticClass:"v-calendar-daily__interval-text"},n)])}},render:function(t){return t("div",{class:this.classes,nativeOn:{dragstart:function(t){t.preventDefault()}},directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}]},[this.hideHeader?"":this.genHead(),this.genBody()])}}),pr=function(){return(pr=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},vr=nr.extend({name:"v-calendar",props:pr({},er.calendar,er.weeks,er.intervals),data:function(){return{lastStart:null,lastEnd:null}},computed:{parsedValue:function(){return Ps(this.value)||this.parsedStart||this.times.today},renderProps:function(){var t=this.parsedValue,e="div",i=this.maxDays,n=t,s=t;switch(this.type){case"month":e=lr,n=Ds(t),s=Es(t);break;case"week":e=fr,n=this.getStartOfWeek(t),s=this.getEndOfWeek(t),i=7;break;case"day":e=fr,i=1;break;case"4day":e=fr,zs(s=Ks(Ws(s),Us,4)),i=4;break;case"custom-weekly":e=or,n=this.parsedStart||t,s=this.parsedEnd;break;case"custom-daily":e=fr,n=this.parsedStart||t,s=this.parsedEnd}return{component:e,start:n,end:s,maxDays:i}}},watch:{renderProps:"checkChange"},methods:{checkChange:function(){var t=this.renderProps,e=t.start,i=t.end;e===this.lastStart&&i===this.lastEnd||(this.lastStart=e,this.lastEnd=i,this.$emit("change",{start:e,end:i}))},move:function(t){void 0===t&&(t=1);for(var e=Ws(this.parsedValue),i=t>0,n=i?Us:qs,s=i?31:As,r=i?t:-t;--r>=0;)switch(this.type){case"month":e.day=s,n(e);break;case"week":Ks(e,n,Bs);break;case"day":n(e);break;case"4day":Ks(e,n,4)}js(e),zs(e),Fs(e,this.times.now),this.$emit("input",e.date),this.$emit("moved",e)},next:function(t){void 0===t&&(t=1),this.move(t)},prev:function(t){void 0===t&&(t=1),this.move(-t)},timeToY:function(t,e){void 0===e&&(e=!0);var i=this.$children[0];return!(!i||!i.timeToY)&&i.timeToY(t,e)},minutesToPixels:function(t){var e=this.$children[0];return e&&e.minutesToPixels?e.minutesToPixels(t):-1},scrollToTime:function(t){var e=this.$children[0];return!(!e||!e.scrollToTime)&&e.scrollToTime(t)}},render:function(t){var e=this,i=this.renderProps,n=i.start,s=i.end,r=i.maxDays;return t(i.component,{staticClass:"v-calendar",props:pr({},this.$props,{start:n.date,end:s.date,maxDays:r}),on:pr({},this.$listeners,{"click:date":function(t){e.$listeners.input&&e.$emit("input",t.date),e.$listeners["click:date"]&&e.$emit("click:date",t)}}),scopedSlots:this.$scopedSlots})}}),mr=(i(35),a.a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t;return this.computedElevation?((t={})["elevation-"+this.computedElevation]=!0,t):{}}}})),gr=a.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=F(this.height),i=F(this.minHeight),n=F(this.minWidth),s=F(this.maxHeight),r=F(this.maxWidth),a=F(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),s&&(t.maxHeight=s),r&&(t.maxWidth=r),a&&(t.width=a),t}}}),yr=function(){return(yr=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},br=se(ie,mr,gr,Kt).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return yr({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),xr=br,wr=function(){return(wr=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Sr=se(Bi,xr).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return wr({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},xr.options.computed.classes.call(this))},styles:function(){var t=wr({},xr.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,n=e.data;return n.style=this.styles,t(i,this.setBackgroundColor(this.color,n),this.$slots.default)}}),kr=(i(36),i(37),se(gr).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})),Cr=kr,$r=Cr.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){G("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){K("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t,e){var i=this;void 0===e&&(e=100);!function n(){var s=t.naturalHeight,r=t.naturalWidth;s||r?i.calculatedAspectRatio=r/s:null!=e&&setTimeout(n,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=Cr.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),Ir=$r.extend({name:"v-card-media",mounted:function(){Z("v-card-media",this.src?"v-img":"v-responsive",this)}}),_r=a.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,n=e.props,s=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),n.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,s)}}),Tr=k("v-card__actions"),Ar=k("v-card__text"),Br=(i(38),i(39),function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&i<e-16&&t.left(t),t.right&&i>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&s<n-16&&t.up(t),t.down&&s>n+16&&t.down(t))});function Or(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return function(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),Br(e)}(t,e)},touchmove:function(t){return function(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var Dr={inserted:function(t,e,i){var n=e.value,s=n.parent?t.parentElement:t,r=n.options||{passive:!0};if(s){var a=Or(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=a,R(a).forEach(function(t){s.addEventListener(t,a[t],r)})}},unbind:function(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var s=n._touchHandlers[i.context._uid];R(s).forEach(function(t){n.removeEventListener(t,s[t])}),delete n._touchHandlers[i.context._uid]}}},Er=Qn.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:Dr},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){return this.isBooted?"v-window-"+(this.vertical?"y":"x")+(this.internalReverse===!this.$vuetify.rtl?"-reverse":"")+"-transition":""},internalIndex:function(){var t=this;return this.items.findIndex(function(e,i){return t.internalValue===t.getValue(e,i)})},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick(function(){return t.isBooted=!0})},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}}),Vr=Er.extend({name:"v-carousel",props:{cycle:{type:Boolean,default:!0},delimiterIcon:{type:String,default:"$vuetify.icons.delimiter"},height:{type:[Number,String],default:500},hideControls:Boolean,hideDelimiters:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$vuetify.icons.next"},prevIcon:{type:[Boolean,String],default:"$vuetify.icons.prev"}},data:function(){return{changedByDelimiters:!1,internalHeight:this.height,slideTimeout:void 0}},computed:{isDark:function(){return this.dark||!this.light}},watch:{internalValue:function(t){this.restartTimeout(),this.$listeners.input&&this.$emit("input",t)},interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},mounted:function(){this.$listeners.input&&Z("@input","@change",this),this.startTimeout()},methods:{genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls"},[this.genItems()])},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-carousel__"+t},[this.$createElement(ys,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.t("$vuetify.carousel."+t)},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(ue,{props:{size:"46px"}},e)])])},genIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;e&&"string"==typeof e&&t.push(this.genIcon("prev",e,this.prev));var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;return i&&"string"==typeof i&&t.push(this.genIcon("next",i,this.next)),t},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(ys,{class:{"v-carousel__controls__item":!0},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(ue,{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(es,{props:{value:this.internalValue},on:{change:function(e){t.internalValue=e}}},i)},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,(requestAnimationFrame||setTimeout)(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:Er.options.methods.updateReverse.call(this,t,e)}},render:function(t){var e=[],i={staticClass:"v-window v-carousel",style:{height:F(this.height)},directives:[]};return this.touchless||i.directives.push({name:"touch",value:{left:this.next,right:this.prev}}),this.hideControls||e.push(this.genIcons()),this.hideDelimiters||e.push(this.genDelimiters()),t("div",i,[this.genContainer(),e])}}),Pr=se(we,ps("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:Dr},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=F(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var i=this,n=this.windowGroup.isBooted;n&&(this.done=e),requestAnimationFrame(function(){if(!i.computedTransition)return e();i.windowGroup.internalHeight=F(t.clientHeight),!n&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var e=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[e])}}),Mr=function(){return(Mr=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Lr=Pr.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement($r,{staticClass:"v-carousel__item",props:Mr({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners},this.$slots.default)]},onBeforeEnter:function(){},onEnter:function(){},onAfterEnter:function(){},onBeforeLeave:function(){},onEnterCancelled:function(){}}}),Nr={name:"v-combobox",extends:Rn,props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{counterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return Hn.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onFilteredItemsChanged:function(){},onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find(function(e){return t.endsWith(e)});null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genChipSelection:function(t,e){var i=this,n=Hn.options.methods.genChipSelection.call(this,t,e);return this.multiple&&(n.componentOptions.listeners.dblclick=function(){i.editingIndex=e,i.internalSearch=i.getText(t),i.selectedIndex=-1}),n},onChipInput:function(t){Hn.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),Hn.options.methods.onEnterDown.call(this),this.getMenuIndex()>-1||this.updateSelf()},onKeyDown:function(t){var e=t.keyCode;Hn.options.methods.onKeyDown.call(this,t),this.multiple&&e===j.left&&0===this.$refs.input.selectionStart&&this.updateSelf(),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();Rn.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():Hn.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){void 0===t&&(t=this.internalSearch),Hn.options.methods.setValue.call(this,t)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var i=this.internalValue.slice();i.splice(e,1),this.setValue(i)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}}}},Fr=Nr,Hr=(i(40),i(41),Wn.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:Hn.options.props.transition},computed:{classes:function(){return Object.assign(Wn.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||Wn.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=Wn.options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?Wn.options.methods.genSelections.call(this):Hn.options.methods.genSelections.call(this)},genCommaSelection:function(t,e,i){return this.segmented?this.genSegmentedBtn(t):Hn.options.methods.genCommaSelection.call(this,t,e,i)},genInput:function(){var t=Pn.options.methods.genInput.call(this);return t.data.domProps.value=this.editable?this.internalSearch:"",t.data.attrs.readonly=!this.isAnyValueAllowed,t},genLabel:function(){if(this.editable&&this.isFocused)return null;var t=Pn.options.methods.genLabel.call(this);return t?(t.data.style={},t):t},genSegmentedBtn:function(t){var e=this,i=this.getValue(t),n=this.computedItems.find(function(t){return e.getValue(t)===i})||t;return n.text&&n.callback?this.$createElement(ys,{props:{flat:!0},on:{click:function(t){t.stopPropagation(),n.callback(t)}}},[n.text]):(K("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}})),jr=Hr;function zr(t,e){var i=[];for(var n in t)t.hasOwnProperty(n)&&i.push(e("template",{slot:n},t[n]));return i}function Rr(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){var e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}var Wr={functional:!0,$_wrapperFor:Hn,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(t,e){var i=e.props,n=e.data,s=e.slots,r=e.parent;Rr(n);var a=zr(s(),t);return i.autocomplete&&Z("<v-select autocomplete>","<v-autocomplete>",Wr,r),i.combobox&&Z("<v-select combobox>","<v-combobox>",Wr,r),i.tags&&Z("<v-select tags>","<v-combobox multiple>",Wr,r),i.overflow&&Z("<v-select overflow>","<v-overflow-btn>",Wr,r),i.segmented&&Z("<v-select segmented>","<v-overflow-btn segmented>",Wr,r),i.editable&&Z("<v-select editable>","<v-overflow-btn editable>",Wr,r),n.attrs=n.attrs||{},i.combobox||i.tags?(n.attrs.multiple=i.tags,t(Fr,n,a)):i.autocomplete?(n.attrs.multiple=i.multiple,t(Wn,n,a)):i.overflow||i.segmented||i.editable?(n.attrs.segmented=i.segmented,n.attrs.editable=i.editable,t(jr,n,a)):(n.attrs.multiple=i.multiple,t(Hn,n,a))}},Yr=Wr,Xr=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},Ur=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Xr(arguments[e]));return t},qr={name:"data-iterable",mixins:[Mn,Dn,Kt],props:{expand:Boolean,hideActions:Boolean,disableInitialSort:Boolean,mustSort:Boolean,noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},rowsPerPageItems:{type:Array,default:function(){return[5,10,25,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}]}},rowsPerPageText:{type:String,default:"$vuetify.dataIterator.rowsPerPageText"},selectAll:[Boolean,String],search:{required:!1},filter:{type:Function,default:function(t,e){return null!=t&&"boolean"!=typeof t&&-1!==t.toString().toLowerCase().indexOf(e)}},customFilter:{type:Function,default:function(t,e,i){return""===(e=e.toString().toLowerCase()).trim()?t:t.filter(function(t){return Object.keys(t).some(function(n){return i(t[n],e)})})}},customSort:{type:Function,default:function(t,e,i){return null===e?t:t.sort(function(t,n){var s,r,a=D(t,e),o=D(n,e);return i&&(a=(s=Xr([o,a],2))[0],o=s[1]),isNaN(a)||isNaN(o)?null===a&&null===o?0:(r=Xr([a,o].map(function(t){return(t||"").toString().toLocaleLowerCase()}),2),(a=r[0])>(o=r[1])?1:a<o?-1:0):a-o})}},value:{type:Array,default:function(){return[]}},items:{type:Array,required:!0,default:function(){return[]}},totalItems:{type:Number,default:null},itemKey:{type:String,default:"id"},pagination:{type:Object,default:function(){}}},data:function(){return{searchLength:0,defaultPagination:{descending:!1,page:1,rowsPerPage:5,sortBy:null,totalItems:0},expanded:{},actionsClasses:"v-data-iterator__actions",actionsRangeControlsClasses:"v-data-iterator__actions__range-controls",actionsSelectClasses:"v-data-iterator__actions__select",actionsPaginationClasses:"v-data-iterator__actions__pagination"}},computed:{computedPagination:function(){return this.hasPagination?this.pagination:this.defaultPagination},computedRowsPerPageItems:function(){var t=this;return this.rowsPerPageItems.map(function(e){return null!==(i=e)&&"object"===(void 0===i?"undefined":w(i))?Object.assign({},e,{text:t.$vuetify.t(e.text)}):{value:e,text:Number(e).toLocaleString(t.$vuetify.lang.current)};var i})},hasPagination:function(){var t=this.pagination||{};return Object.keys(t).length>0},hasSelectAll:function(){return void 0!==this.selectAll&&!1!==this.selectAll},itemsLength:function(){return this.hasSearch?this.searchLength:this.totalItems||this.items.length},indeterminate:function(){return this.hasSelectAll&&this.someItems&&!this.everyItem},everyItem:function(){var t=this;return this.filteredItems.length&&this.filteredItems.every(function(e){return t.isSelected(e)})},someItems:function(){var t=this;return this.filteredItems.some(function(e){return t.isSelected(e)})},getPage:function(){var t=this.computedPagination.rowsPerPage;return t===Object(t)?t.value:t},pageStart:function(){return-1===this.getPage?0:(this.computedPagination.page-1)*this.getPage},pageStop:function(){return-1===this.getPage?this.itemsLength:this.computedPagination.page*this.getPage},filteredItems:function(){return this.filteredItemsImpl()},selected:function(){for(var t={},e=0;e<this.value.length;e++){t[D(this.value[e],this.itemKey)]=!0}return t},hasSearch:function(){return null!=this.search}},watch:{items:function(){var t=this;this.pageStart>=this.itemsLength&&this.resetPagination();var e=new Set(this.items.map(function(e){return D(e,t.itemKey)})),i=this.value.filter(function(i){return e.has(D(i,t.itemKey))});i.length!==this.value.length&&this.$emit("input",i)},search:function(){var t=this;this.$nextTick(function(){t.updatePagination({page:1,totalItems:t.itemsLength})})},"computedPagination.sortBy":"resetPagination","computedPagination.descending":"resetPagination"},methods:{initPagination:function(){this.rowsPerPageItems.length?this.defaultPagination.rowsPerPage=this.rowsPerPageItems[0]:K("The prop 'rows-per-page-items' can not be empty",this),this.defaultPagination.totalItems=this.items.length,this.updatePagination(Object.assign({},this.defaultPagination,this.pagination))},updatePagination:function(t){var e=this.hasPagination?this.pagination:this.defaultPagination,i=Object.assign({},e,t);this.$emit("update:pagination",i),this.hasPagination||(this.defaultPagination=i)},isSelected:function(t){return this.selected[D(t,this.itemKey)]},isExpanded:function(t){return this.expanded[D(t,this.itemKey)]},filteredItemsImpl:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(this.totalItems)return this.items;var i=this.items.slice();return this.hasSearch&&(i=this.customFilter.apply(this,Ur([i,this.search,this.filter],t)),this.searchLength=i.length),i=this.customSort(i,this.computedPagination.sortBy,this.computedPagination.descending),this.hideActions&&!this.hasPagination?i:i.slice(this.pageStart,this.pageStop)},resetPagination:function(){1!==this.computedPagination.page&&this.updatePagination({page:1})},sort:function(t){var e=this.computedPagination,i=e.sortBy,n=e.descending;null===i?this.updatePagination({sortBy:t,descending:!1}):i!==t||n?i!==t?this.updatePagination({sortBy:t,descending:!1}):this.mustSort?this.updatePagination({sortBy:t,descending:!1}):this.updatePagination({sortBy:null,descending:null}):this.updatePagination({descending:!0})},toggle:function(t){for(var e=this,i=Object.assign({},this.selected),n=0;n<this.filteredItems.length;n++){var s=D(this.filteredItems[n],this.itemKey);i[s]=t}this.$emit("input",this.items.filter(function(t){var n=D(t,e.itemKey);return i[n]}))},createProps:function(t,e){var i=this,n={item:t,index:e},s=this.itemKey,r=D(t,s);return Object.defineProperty(n,"selected",{get:function(){return i.selected[r]},set:function(e){null==r&&K('"'+s+'" attribute must be defined for item',i);var n=i.value.slice();e?n.push(t):n=n.filter(function(t){return D(t,s)!==r}),i.$emit("input",n)}}),Object.defineProperty(n,"expanded",{get:function(){return i.expanded[r]},set:function(t){if(null==r&&K('"'+s+'" attribute must be defined for item',i),!i.expand)for(var e in i.expanded)i.expanded.hasOwnProperty(e)&&i.$set(i.expanded,e,!1);i.$set(i.expanded,r,t)}}),n},genItems:function(){if(!this.itemsLength&&!this.items.length){var t=this.$slots["no-data"]||this.$vuetify.t(this.noDataText);return[this.genEmptyItems(t)]}if(!this.filteredItems.length){var e=this.$slots["no-results"]||this.$vuetify.t(this.noResultsText);return[this.genEmptyItems(e)]}return this.genFilteredItems()},genPrevIcon:function(){var t=this;return this.$createElement(ys,{props:{disabled:1===this.computedPagination.page,icon:!0,flat:!0},on:{click:function(){var e=t.computedPagination.page;t.updatePagination({page:e-1})}},attrs:{"aria-label":this.$vuetify.t("$vuetify.dataIterator.prevPage")}},[this.$createElement(ue,this.$vuetify.rtl?this.nextIcon:this.prevIcon)])},genNextIcon:function(){var t=this,e=this.computedPagination,i=e.rowsPerPage<0||e.page*e.rowsPerPage>=this.itemsLength||this.pageStop<0;return this.$createElement(ys,{props:{disabled:i,icon:!0,flat:!0},on:{click:function(){var e=t.computedPagination.page;t.updatePagination({page:e+1})}},attrs:{"aria-label":this.$vuetify.t("$vuetify.dataIterator.nextPage")}},[this.$createElement(ue,this.$vuetify.rtl?this.prevIcon:this.nextIcon)])},genSelect:function(){var t=this;return this.$createElement("div",{class:this.actionsSelectClasses},[this.$vuetify.t(this.rowsPerPageText),this.$createElement(Yr,{attrs:{"aria-label":this.$vuetify.t(this.rowsPerPageText)},props:{items:this.computedRowsPerPageItems,value:this.computedPagination.rowsPerPage,hideDetails:!0,menuProps:{auto:!0,dark:this.dark,light:this.light,minWidth:"75px"}},on:{input:function(e){t.updatePagination({page:1,rowsPerPage:e})}}})])},genPagination:function(){var t,e=this,i="–";if(this.itemsLength){var n=this.itemsLength<this.pageStop||this.pageStop<0?this.itemsLength:this.pageStop;i=this.$scopedSlots.pageText?this.$scopedSlots.pageText({pageStart:this.pageStart+1,pageStop:n,itemsLength:this.itemsLength}):(t=this.$vuetify).t.apply(t,Ur(["$vuetify.dataIterator.pageText"],[this.pageStart+1,n,this.itemsLength].map(function(t){return Number(t).toLocaleString(e.$vuetify.lang.current)})))}return this.$createElement("div",{class:this.actionsPaginationClasses},[i])},genActions:function(){var t=this.$createElement("div",{class:this.actionsRangeControlsClasses},[this.genPagination(),this.genPrevIcon(),this.genNextIcon()]);return[this.$createElement("div",{class:this.actionsClasses},[this.$slots["actions-prepend"]?this.$createElement("div",{},this.$slots["actions-prepend"]):null,this.rowsPerPageItems.length>1?this.genSelect():null,t,this.$slots["actions-append"]?this.$createElement("div",{},this.$slots["actions-append"]):null])]}}},Kr=function(){return(Kr=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Gr={name:"v-data-iterator",mixins:[qr],inheritAttrs:!1,props:{contentTag:{type:String,default:"div"},contentProps:{type:Object,required:!1},contentClass:{type:String,required:!1}},computed:{classes:function(){return Kr({"v-data-iterator":!0,"v-data-iterator--select-all":!1!==this.selectAll},this.themeClasses)}},created:function(){this.initPagination()},methods:{genContent:function(){var t=this.genItems(),e={class:this.contentClass,attrs:this.$attrs,on:this.$listeners,props:this.contentProps};return this.$createElement(this.contentTag,e,t)},genEmptyItems:function(t){return[this.$createElement("div",{class:"text-xs-center",style:"width: 100%"},t)]},genFilteredItems:function(){if(!this.$scopedSlots.item)return null;for(var t=[],e=0,i=this.filteredItems.length;e<i;++e){var n=this.filteredItems[e],s=this.createProps(n,e);t.push(this.$scopedSlots.item(s))}return t},genFooter:function(){var t=[];return this.$slots.footer&&t.push(this.$slots.footer),this.hideActions||t.push(this.genActions()),t.length?this.$createElement("div",t):null},genHeader:function(){var t=[];return this.$slots.header&&t.push(this.$slots.header),t.length?this.$createElement("div",t):null}},render:function(t){return t("div",{class:this.classes},[this.genHeader(),this.genContent(),this.genFooter()])}},Zr=(i(42),i(43),function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a}),Jr=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Zr(arguments[e]));return t},Qr={props:{sortIcon:{type:String,default:"$vuetify.icons.sort"}},methods:{genTHead:function(){var t=this;if(!this.hideHeaders){var e=[];if(this.$scopedSlots.headers){var i=this.$scopedSlots.headers({headers:this.headers,indeterminate:this.indeterminate,all:this.everyItem});e=[this.hasTag(i,"th")?this.genTR(i):i,this.genTProgress()]}else{i=this.headers.map(function(e,i){return t.genHeader(e,t.headerKey?e[t.headerKey]:i)});var n=this.$createElement(Si,{props:{dark:this.dark,light:this.light,color:!0===this.selectAll?"":this.selectAll,hideDetails:!0,inputValue:this.everyItem,indeterminate:this.indeterminate},on:{change:this.toggle}});this.hasSelectAll&&i.unshift(this.$createElement("th",[n])),e=[this.genTR(i),this.genTProgress()]}return this.$createElement("thead",[e])}},genHeader:function(t,e){var i=[this.$scopedSlots.headerCell?this.$scopedSlots.headerCell({header:t}):t[this.headerText]];return this.$createElement.apply(this,Jr(["th"],this.genHeaderData(t,i,e)))},genHeaderData:function(t,e,i){var n=["column"],s={key:i,attrs:{role:"columnheader",scope:"col",width:t.width||null,"aria-label":t[this.headerText]||"","aria-sort":"none"}};return null==t.sortable||t.sortable?this.genHeaderSortingData(t,e,s,n):s.attrs["aria-label"]+=": Not sorted.",n.push("text-xs-"+(t.align||"left")),Array.isArray(t.class)?n.push.apply(n,Jr(t.class)):t.class&&n.push(t.class),s.class=n,[s,e]},genHeaderSortingData:function(t,e,i,n){var s=this;"value"in t||K("Headers must have a value property that corresponds to a value in the v-model array",this),i.attrs.tabIndex=0,i.on={click:function(){s.expanded={},s.sort(t.value)},keydown:function(e){32===e.keyCode&&(e.preventDefault(),s.sort(t.value))}},n.push("sortable");var r=this.$createElement(ue,{props:{small:!0}},this.sortIcon);t.align&&"left"!==t.align?e.unshift(r):e.push(r);var a=this.computedPagination;a.sortBy===t.value?(n.push("active"),a.descending?(n.push("desc"),i.attrs["aria-sort"]="descending",i.attrs["aria-label"]+=": Sorted descending. Activate to remove sorting."):(n.push("asc"),i.attrs["aria-sort"]="ascending",i.attrs["aria-label"]+=": Sorted ascending. Activate to sort descending.")):i.attrs["aria-label"]+=": Not sorted. Activate to sort ascending."}}},ta={methods:{genTBody:function(){var t=this.genItems();return this.$createElement("tbody",t)},genExpandedRow:function(t){var e=[];if(this.isExpanded(t.item)){var i=this.$createElement("div",{class:"v-datatable__expand-content",key:D(t.item,this.itemKey)},[this.$scopedSlots.expand(t)]);e.push(i)}var n=this.$createElement("transition-group",{class:"v-datatable__expand-col",attrs:{colspan:this.headerColumns},props:{tag:"td"},on:Li("v-datatable__expand-col--expanded")},e);return this.genTR([n],{class:"v-datatable__expand-row"})},genFilteredItems:function(){if(!this.$scopedSlots.items)return null;for(var t=[],e=0,i=this.filteredItems.length;e<i;++e){var n=this.filteredItems[e],s=this.createProps(n,e),r=this.$scopedSlots.items(s);if(t.push(this.hasTag(r,"td")?this.genTR(r,{key:this.itemKey?D(s.item,this.itemKey):e,attrs:{active:this.isSelected(n)}}):r),this.$scopedSlots.expand){var a=this.genExpandedRow(s);t.push(a)}}return t},genEmptyItems:function(t){return this.hasTag(t,"tr")?t:this.hasTag(t,"td")?this.genTR(t):this.genTR([this.$createElement("td",{class:{"text-xs-center":"string"==typeof t},attrs:{colspan:this.headerColumns}},t)])}}},ea=function(){return(ea=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},ia=k("v-table__overflow"),na={name:"v-data-table",mixins:[qr,Qr,ta,{methods:{genTFoot:function(){if(!this.$slots.footer)return null;var t=this.$slots.footer,e=this.hasTag(t,"td")?this.genTR(t):t;return this.$createElement("tfoot",[e])},genActionsFooter:function(){return this.hideActions?null:this.$createElement("div",{class:this.classes},this.genActions())}}},{methods:{genTProgress:function(){var t=this.$createElement("th",{staticClass:"column",attrs:{colspan:this.headerColumns}},[this.genProgress()]);return this.genTR([t],{staticClass:"v-datatable__progress"})}}}],props:{headers:{type:Array,default:function(){return[]}},headersLength:{type:Number},headerText:{type:String,default:"text"},headerKey:{type:String,default:null},hideHeaders:Boolean,rowsPerPageText:{type:String,default:"$vuetify.dataTable.rowsPerPageText"},customFilter:{type:Function,default:function(t,e,i,n){if(""===(e=e.toString().toLowerCase()).trim())return t;var s=n.map(function(t){return t.value});return t.filter(function(t){return s.some(function(n){return i(D(t,n,t[n]),e)})})}}},data:function(){return{actionsClasses:"v-datatable__actions",actionsRangeControlsClasses:"v-datatable__actions__range-controls",actionsSelectClasses:"v-datatable__actions__select",actionsPaginationClasses:"v-datatable__actions__pagination"}},computed:{classes:function(){return ea({"v-datatable v-table":!0,"v-datatable--select-all":!1!==this.selectAll},this.themeClasses)},filteredItems:function(){return this.filteredItemsImpl(this.headers)},headerColumns:function(){return this.headersLength||this.headers.length+(!1!==this.selectAll)}},created:function(){var t=this.headers.find(function(t){return!("sortable"in t)||t.sortable});this.defaultPagination.sortBy=!this.disableInitialSort&&t?t.value:null,this.initPagination()},methods:{hasTag:function(t,e){return Array.isArray(t)&&t.find(function(t){return t.tag===e})},genTR:function(t,e){return void 0===e&&(e={}),this.$createElement("tr",e,t)}},render:function(t){var e=t(ia,{},[t("table",{class:this.classes},[this.genTHead(),this.genTBody(),this.genTFoot()])]);return t("div",[e,this.genActionsFooter()])}},sa=(i(44),{name:"v-edit-dialog",mixins:[Ee,Kt],props:{cancelText:{default:"Cancel"},large:Boolean,lazy:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var t=this.$refs.content.querySelector("input");t&&t.focus()},genButton:function(t,e){return this.$createElement(ys,{props:{flat:!0,color:"primary",light:!0},on:{click:t}},e)},genActions:function(){var t=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton(function(){t.save(t.returnValue),t.$emit("save")},this.saveText)])},genContent:function(){var t=this;return this.$createElement("div",{on:{keydown:function(e){var i=t.$refs.content.querySelector("input");e.keyCode===j.esc&&t.cancel(),e.keyCode===j.enter&&i&&(t.save(i.value),t.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(t){var e=this;return t(Ye,{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,lazy:this.lazy,light:this.light,dark:this.dark},on:{input:function(t){return e.isActive=t}}},[t("a",{slot:"activator"},this.$slots.default),this.genContent(),this.large?this.genActions():null])}}),ra=k("v-table__overflow"),aa=(i(46),se(ie).extend({methods:{genPickerButton:function(t,e,i,n,s){var r=this;void 0===n&&(n=!1),void 0===s&&(s="");var a=this[t]===e;return this.$createElement("div",{staticClass:("v-picker__title__btn "+s).trim(),class:{"v-picker__title__btn--active":a,"v-picker__title__btn--readonly":n},on:a||n?void 0:{click:function(i){i.stopPropagation(),r.$emit("update:"+t,e)}}},Array.isArray(i)?i:[i])}}})),oa=se(aa).extend({name:"v-date-picker-title",props:{date:{type:String,default:""},disabled:Boolean,readonly:Boolean,selectingYear:Boolean,value:{type:String},year:{type:[Number,String],default:""},yearIcon:{type:String}},data:function(){return{isReversing:!1}},computed:{computedTransition:function(){return this.isReversing?"picker-reverse-transition":"picker-transition"}},watch:{value:function(t,e){this.isReversing=t<e}},methods:{genYearIcon:function(){return this.$createElement(ue,{props:{dark:!0}},this.yearIcon)},getYearBtn:function(){return this.genPickerButton("selectingYear",!0,[String(this.year),this.yearIcon?this.genYearIcon():null],!1,"v-date-picker-title__year")},genTitleText:function(){return this.$createElement("transition",{props:{name:this.computedTransition}},[this.$createElement("div",{domProps:{innerHTML:this.date||"&nbsp;"},key:this.value})])},genTitleDate:function(){return this.genPickerButton("selectingYear",!1,[this.genTitleText()],!1,"v-date-picker-title__date")}},render:function(t){return t("div",{staticClass:"v-date-picker-title",class:{"v-date-picker-title--disabled":this.disabled}},[this.getYearBtn(),this.genTitleDate()])}}),la=(i(47),function(t,e){return void 0===e&&(e=2),i=t,n=e,s="0",n>>=0,i=String(i),s=String(s),i.length>n?String(i):((n-=i.length)>s.length&&(s+=s.repeat(n/s.length)),s.slice(0,n)+String(i));var i,n,s}),ua=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a};var ha=function(t,e,i){void 0===i&&(i={start:0,length:0});var n=function(t){var e=ua(t.trim().split(" ")[0].split("-"),3),i=e[0],n=e[1],s=e[2];return[la(i,4),la(n||1),la(s||1)].join("-")};try{var s=new Intl.DateTimeFormat(t||void 0,e);return function(t){return s.format(new Date(n(t)+"T00:00:00+00:00"))}}catch(t){return i.start||i.length?function(t){return n(t).substr(i.start||0,i.length)}:void 0}},ca=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},da=function(t,e){var i=ca(t.split("-").map(Number),2),n=i[0],s=i[1];return s+e===0?n-1+"-12":s+e===13?n+1+"-01":n+"-"+la(s+e)},fa=function(){return(fa=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},pa=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},va=se(ie,Kt).extend({name:"v-date-picker-header",props:{disabled:Boolean,format:Function,locale:{type:String,default:"en-us"},min:String,max:String,nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},readonly:Boolean,value:{type:[Number,String],required:!0}},data:function(){return{isReversing:!1}},computed:{formatter:function(){return this.format?this.format:String(this.value).split("-")[1]?ha(this.locale,{month:"long",year:"numeric",timeZone:"UTC"},{length:7}):ha(this.locale,{year:"numeric",timeZone:"UTC"},{length:4})}},watch:{value:function(t,e){this.isReversing=t<e}},methods:{genBtn:function(t){var e=this,i=this.disabled||t<0&&this.min&&this.calculateChange(t)<this.min||t>0&&this.max&&this.calculateChange(t)>this.max;return this.$createElement(ys,{props:{dark:this.dark,disabled:i,icon:!0,light:this.light},nativeOn:{click:function(i){i.stopPropagation(),e.$emit("input",e.calculateChange(t))}}},[this.$createElement(ue,t<0==!this.$vuetify.rtl?this.prevIcon:this.nextIcon)])},calculateChange:function(t){var e=pa(String(this.value).split("-").map(Number),2),i=e[0];return null==e[1]?""+(i+t):da(String(this.value),t)},genHeader:function(){var t=this,e=!this.disabled&&(this.color||"accent"),i=this.$createElement("div",this.setTextColor(e,{key:String(this.value)}),[this.$createElement("button",{attrs:{type:"button"},on:{click:function(){return t.$emit("toggle")}}},[this.$slots.default||this.formatter(String(this.value))])]),n=this.$createElement("transition",{props:{name:this.isReversing===!this.$vuetify.rtl?"tab-reverse-transition":"tab-transition"}},[i]);return this.$createElement("div",{staticClass:"v-date-picker-header__value",class:{"v-date-picker-header__value--disabled":this.disabled}},[n])}},render:function(){return this.$createElement("div",{staticClass:"v-date-picker-header",class:fa({"v-date-picker-header--disabled":this.disabled},this.themeClasses)},[this.genBtn(-1),this.genHeader(),this.genBtn(1)])}});i(48);function ma(t,e,i,n){return(!n||n(t))&&(!e||t>=e)&&(!i||t<=i)}var ga=function(){return(ga=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},ya=se(ie,Kt).extend({directives:{Touch:Dr},props:{allowedDates:Function,current:String,disabled:Boolean,format:Function,events:{type:[Array,Function,Object],default:function(){return null}},eventColor:{type:[Array,Function,Object,String],default:function(){return"warning"}},locale:{type:String,default:"en-us"},min:String,max:String,readonly:Boolean,scrollable:Boolean,tableDate:{type:String,required:!0},value:[String,Array]},data:function(){return{isReversing:!1}},computed:{computedTransition:function(){return this.isReversing===!this.$vuetify.rtl?"tab-reverse-transition":"tab-transition"},displayedMonth:function(){return Number(this.tableDate.split("-")[1])-1},displayedYear:function(){return Number(this.tableDate.split("-")[0])}},watch:{tableDate:function(t,e){this.isReversing=t<e}},methods:{genButtonClasses:function(t,e,i,n){return ga({"v-btn--active":i,"v-btn--flat":!i,"v-btn--icon":i&&t&&e,"v-btn--floating":e,"v-btn--depressed":!e&&i,"v-btn--disabled":!t||this.disabled&&i,"v-btn--outline":n&&!i},this.themeClasses)},genButtonEvents:function(t,e,i){var n=this;if(!this.disabled)return{click:function(){e&&!n.readonly&&n.$emit("input",t),n.$emit("click:"+i,t)},dblclick:function(){return n.$emit("dblclick:"+i,t)}}},genButton:function(t,e,i,n){var s=ma(t,this.min,this.max,this.allowedDates),r=t===this.value||Array.isArray(this.value)&&-1!==this.value.indexOf(t),a=t===this.current,o=r?this.setBackgroundColor:this.setTextColor,l=(r||a)&&(this.color||"accent");return this.$createElement("button",o(l,{staticClass:"v-btn",class:this.genButtonClasses(s,e,r,a),attrs:{type:"button"},domProps:{disabled:this.disabled||!s},on:this.genButtonEvents(t,s,i)}),[this.$createElement("div",{staticClass:"v-btn__content"},[n(t)]),this.genEvents(t)])},getEventColors:function(t){var e,i=function(t){return Array.isArray(t)?t:[t]};return(e=Array.isArray(this.events)?this.events.includes(t):this.events instanceof Function?this.events(t)||!1:this.events&&this.events[t]||!1)?(!0!==e?i(e):"string"==typeof this.eventColor?[this.eventColor]:"function"==typeof this.eventColor?i(this.eventColor(t)):Array.isArray(this.eventColor)?this.eventColor:i(this.eventColor[t])).filter(function(t){return t}):[]},genEvents:function(t){var e=this,i=this.getEventColors(t);return i.length?this.$createElement("div",{staticClass:"v-date-picker-table__events"},i.map(function(t){return e.$createElement("div",e.setBackgroundColor(t))})):null},wheel:function(t,e){t.preventDefault(),this.$emit("tableDate",e(t.deltaY))},touch:function(t,e){this.$emit("tableDate",e(t))},genTable:function(t,e,i){var n=this,s=this.$createElement("transition",{props:{name:this.computedTransition}},[this.$createElement("table",{key:this.tableDate},e)]),r={name:"touch",value:{left:function(t){return t.offsetX<-15&&n.touch(1,i)},right:function(t){return t.offsetX>15&&n.touch(-1,i)}}};return this.$createElement("div",{staticClass:t,class:ga({"v-date-picker-table--disabled":this.disabled},this.themeClasses),on:!this.disabled&&this.scrollable?{wheel:function(t){return n.wheel(t,i)}}:void 0,directives:[r]},[s])}}}),ba=se(ya).extend({name:"v-date-picker-date-table",props:{firstDayOfWeek:{type:[String,Number],default:0},showWeek:Boolean,weekdayFormat:Function},computed:{formatter:function(){return this.format||ha(this.locale,{day:"numeric",timeZone:"UTC"},{start:8,length:2})},weekdayFormatter:function(){return this.weekdayFormat||ha(this.locale,{weekday:"narrow",timeZone:"UTC"})},weekDays:function(){var t=this,e=parseInt(this.firstDayOfWeek,10);return this.weekdayFormatter?V(7).map(function(i){return t.weekdayFormatter("2017-01-"+(e+i+15))}):V(7).map(function(t){return["S","M","T","W","T","F","S"][(t+e)%7]})}},methods:{calculateTableDate:function(t){return da(this.tableDate,Math.sign(t||1))},genTHead:function(){var t=this,e=this.weekDays.map(function(e){return t.$createElement("th",e)});return this.showWeek&&e.unshift(this.$createElement("th")),this.$createElement("thead",this.genTR(e))},weekDaysBeforeFirstDayOfTheMonth:function(){return(new Date(this.displayedYear+"-"+la(this.displayedMonth+1)+"-01T00:00:00+00:00").getUTCDay()-parseInt(this.firstDayOfWeek)+7)%7},getWeekNumber:function(){var t=[0,31,59,90,120,151,181,212,243,273,304,334][this.displayedMonth];this.displayedMonth>1&&(this.displayedYear%4==0&&this.displayedYear%100!=0||this.displayedYear%400==0)&&t++;var e=(this.displayedYear+(this.displayedYear-1>>2)-Math.floor((this.displayedYear-1)/100)+Math.floor((this.displayedYear-1)/400)-Number(this.firstDayOfWeek))%7;return Math.floor((t+e)/7)+1},genWeekNumber:function(t){return this.$createElement("td",[this.$createElement("small",{staticClass:"v-date-picker-table--date__week"},String(t).padStart(2,"0"))])},genTBody:function(){var t=[],e=new Date(this.displayedYear,this.displayedMonth+1,0).getDate(),i=[],n=this.weekDaysBeforeFirstDayOfTheMonth(),s=this.getWeekNumber();for(this.showWeek&&i.push(this.genWeekNumber(s++));n--;)i.push(this.$createElement("td"));for(n=1;n<=e;n++){var r=this.displayedYear+"-"+la(this.displayedMonth+1)+"-"+la(n);i.push(this.$createElement("td",[this.genButton(r,!0,"date",this.formatter)])),i.length%(this.showWeek?8:7)==0&&(t.push(this.genTR(i)),i=[],n<e&&this.showWeek&&i.push(this.genWeekNumber(s++)))}return i.length&&t.push(this.genTR(i)),this.$createElement("tbody",t)},genTR:function(t){return[this.$createElement("tr",t)]}},render:function(){return this.genTable("v-date-picker-table v-date-picker-table--date",[this.genTHead(),this.genTBody()],this.calculateTableDate)}}),xa=se(ya).extend({name:"v-date-picker-month-table",computed:{formatter:function(){return this.format||ha(this.locale,{month:"short",timeZone:"UTC"},{start:5,length:2})}},methods:{calculateTableDate:function(t){return""+(parseInt(this.tableDate,10)+Math.sign(t||1))},genTBody:function(){for(var t=this,e=[],i=Array(3).fill(null),n=12/i.length,s=function(n){var s=i.map(function(e,s){var r=n*i.length+s,a=t.displayedYear+"-"+la(r+1);return t.$createElement("td",{key:r},[t.genButton(a,!1,"month",t.formatter)])});e.push(r.$createElement("tr",{key:n},s))},r=this,a=0;a<n;a++)s(a);return this.$createElement("tbody",e)}},render:function(){return this.genTable("v-date-picker-table v-date-picker-table--month",[this.genTBody()],this.calculateTableDate)}}),wa=(i(49),se(ie).extend({name:"v-date-picker-years",props:{format:Function,locale:{type:String,default:"en-us"},min:[Number,String],max:[Number,String],readonly:Boolean,value:[Number,String]},data:function(){return{defaultColor:"primary"}},computed:{formatter:function(){return this.format||ha(this.locale,{year:"numeric",timeZone:"UTC"},{length:4})}},mounted:function(){var t=this;setTimeout(function(){var e=t.$el.getElementsByClassName("active")[0];t.$el.scrollTop=e?e.offsetTop-t.$el.offsetHeight/2+e.offsetHeight/2:t.$el.scrollHeight/2-t.$el.offsetHeight/2})},methods:{genYearItem:function(t){var e=this,i=this.formatter(""+t),n=parseInt(this.value,10)===t,s=n&&(this.color||"primary");return this.$createElement("li",this.setTextColor(s,{key:t,class:{active:n},on:{click:function(){return e.$emit("input",t)}}}),i)},genYearItems:function(){for(var t=[],e=this.value?parseInt(this.value,10):(new Date).getFullYear(),i=this.max?parseInt(this.max,10):e+100,n=Math.min(i,this.min?parseInt(this.min,10):e-100),s=i;s>=n;s--)t.push(this.genYearItem(s));return t}},render:function(){return this.$createElement("ul",{staticClass:"v-date-picker-years",ref:"years"},this.genYearItems())}})),Sa=(i(45),function(){return(Sa=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),ka=se(ie,Kt).extend({name:"v-picker",props:{fullWidth:Boolean,landscape:Boolean,transition:{type:String,default:"fade-transition"},width:{type:[Number,String],default:290}},computed:{computedTitleColor:function(){var t=!this.isDark&&(this.color||"primary");return this.color||t}},methods:{genTitle:function(){return this.$createElement("div",this.setBackgroundColor(this.computedTitleColor,{staticClass:"v-picker__title",class:{"v-picker__title--landscape":this.landscape}}),this.$slots.title)},genBodyTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},this.$slots.default)},genBody:function(){return this.$createElement("div",{staticClass:"v-picker__body",class:this.themeClasses,style:this.fullWidth?void 0:{width:F(this.width)}},[this.genBodyTransition()])},genActions:function(){return this.$createElement("div",{staticClass:"v-picker__actions v-card__actions"},this.$slots.actions)}},render:function(t){return t("div",{staticClass:"v-picker v-card",class:Sa({"v-picker--landscape":this.landscape,"v-picker--full-width":this.fullWidth},this.themeClasses)},[this.$slots.title?this.genTitle():null,this.genBody(),this.$slots.actions?this.genActions():null])}}),Ca=ka,$a=se(ie,Kt).extend({name:"picker",props:{fullWidth:Boolean,headerColor:String,landscape:Boolean,noTitle:Boolean,width:{type:[Number,String],default:290}},methods:{genPickerTitle:function(){return null},genPickerBody:function(){return null},genPickerActionsSlot:function(){return this.$scopedSlots.default?this.$scopedSlots.default({save:this.save,cancel:this.cancel}):this.$slots.default},genPicker:function(t){var e=[];if(!this.noTitle){var i=this.genPickerTitle();i&&e.push(i)}var n=this.genPickerBody();return n&&e.push(n),e.push(this.$createElement("template",{slot:"actions"},[this.genPickerActionsSlot()])),this.$createElement(Ca,{staticClass:t,props:{color:this.headerColor||this.color,dark:this.dark,fullWidth:this.fullWidth,landscape:this.landscape,light:this.light,width:this.width}},e)}}}),Ia=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a};function _a(t,e){var i=Ia(t.split("-"),3),n=i[0],s=i[1],r=void 0===s?1:s,a=i[2],o=void 0===a?1:a;return(n+"-"+la(r)+"-"+la(o)).substr(0,{date:10,month:7,year:4}[e])}var Ta=se($a).extend({name:"v-date-picker",props:{allowedDates:Function,dayFormat:Function,disabled:Boolean,events:{type:[Array,Function,Object],default:function(){return null}},eventColor:{type:[Array,Function,Object,String],default:function(){return"warning"}},firstDayOfWeek:{type:[String,Number],default:0},headerDateFormat:Function,locale:{type:String,default:"en-us"},max:String,min:String,monthFormat:Function,multiple:Boolean,nextIcon:{type:String,default:"$vuetify.icons.next"},pickerDate:String,prevIcon:{type:String,default:"$vuetify.icons.prev"},reactive:Boolean,readonly:Boolean,scrollable:Boolean,showCurrent:{type:[Boolean,String],default:!0},showWeek:Boolean,titleDateFormat:Function,type:{type:String,default:"date",validator:function(t){return["date","month"].includes(t)}},value:[Array,String],weekdayFormat:Function,yearFormat:Function,yearIcon:String},data:function(){var t=this,e=new Date;return{activePicker:this.type.toUpperCase(),inputDay:null,inputMonth:null,inputYear:null,isReversing:!1,now:e,tableDate:t.pickerDate?t.pickerDate:_a((t.multiple?t.value[t.value.length-1]:t.value)||e.getFullYear()+"-"+(e.getMonth()+1),"date"===t.type?"month":"year")}},computed:{lastValue:function(){return this.multiple?this.value[this.value.length-1]:this.value},selectedMonths:function(){return this.value&&this.value.length&&"month"!==this.type?this.multiple?this.value.map(function(t){return t.substr(0,7)}):this.value.substr(0,7):this.value},current:function(){return!0===this.showCurrent?_a(this.now.getFullYear()+"-"+(this.now.getMonth()+1)+"-"+this.now.getDate(),this.type):this.showCurrent||null},inputDate:function(){return"date"===this.type?this.inputYear+"-"+la(this.inputMonth+1)+"-"+la(this.inputDay):this.inputYear+"-"+la(this.inputMonth+1)},tableMonth:function(){return Number((this.pickerDate||this.tableDate).split("-")[1])-1},tableYear:function(){return Number((this.pickerDate||this.tableDate).split("-")[0])},minMonth:function(){return this.min?_a(this.min,"month"):null},maxMonth:function(){return this.max?_a(this.max,"month"):null},minYear:function(){return this.min?_a(this.min,"year"):null},maxYear:function(){return this.max?_a(this.max,"year"):null},formatters:function(){return{year:this.yearFormat||ha(this.locale,{year:"numeric",timeZone:"UTC"},{length:4}),titleDate:this.titleDateFormat||(this.multiple?this.defaultTitleMultipleDateFormatter:this.defaultTitleDateFormatter)}},defaultTitleMultipleDateFormatter:function(){var t=this;return this.value.length<2?function(e){return e.length?t.defaultTitleDateFormatter(e[0]):"0 selected"}:function(t){return t.length+" selected"}},defaultTitleDateFormatter:function(){var t=ha(this.locale,{year:{year:"numeric",timeZone:"UTC"},month:{month:"long",timeZone:"UTC"},date:{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}}[this.type],{start:0,length:{date:10,month:7,year:4}[this.type]});return this.landscape?function(e){return t(e).replace(/([^\d\s])([\d])/g,function(t,e,i){return e+" "+i}).replace(", ",",<br>")}:t}},watch:{tableDate:function(t,e){var i="month"===this.type?"year":"month";this.isReversing=_a(t,i)<_a(e,i),this.$emit("update:pickerDate",t)},pickerDate:function(t){t?this.tableDate=t:this.lastValue&&"date"===this.type?this.tableDate=_a(this.lastValue,"month"):this.lastValue&&"month"===this.type&&(this.tableDate=_a(this.lastValue,"year"))},value:function(t,e){this.checkMultipleProp(),this.setInputDate(),this.multiple||!this.value||this.pickerDate?this.multiple&&this.value.length&&!e.length&&!this.pickerDate&&(this.tableDate=_a(this.inputDate,"month"===this.type?"year":"month")):this.tableDate=_a(this.inputDate,"month"===this.type?"year":"month")},type:function(t){if(this.activePicker=t.toUpperCase(),this.value&&this.value.length){var e=(this.multiple?this.value:[this.value]).map(function(e){return _a(e,t)}).filter(this.isDateAllowed);this.$emit("input",this.multiple?e:e[0])}}},created:function(){this.checkMultipleProp(),this.pickerDate!==this.tableDate&&this.$emit("update:pickerDate",this.tableDate),this.setInputDate()},methods:{emitInput:function(t){var e=this.multiple?-1===this.value.indexOf(t)?this.value.concat([t]):this.value.filter(function(e){return e!==t}):t;this.$emit("input",e),this.multiple||this.$emit("change",t)},checkMultipleProp:function(){if(null!=this.value){var t=this.value.constructor.name,e=this.multiple?"Array":"String";t!==e&&K("Value must be "+(this.multiple?"an":"a")+" "+e+", got "+t,this)}},isDateAllowed:function(t){return ma(t,this.min,this.max,this.allowedDates)},yearClick:function(t){this.inputYear=t,"month"===this.type?this.tableDate=""+t:this.tableDate=t+"-"+la((this.tableMonth||0)+1),this.activePicker="MONTH",this.reactive&&!this.readonly&&!this.multiple&&this.isDateAllowed(this.inputDate)&&this.$emit("input",this.inputDate)},monthClick:function(t){this.inputYear=parseInt(t.split("-")[0],10),this.inputMonth=parseInt(t.split("-")[1],10)-1,"date"===this.type?(this.inputDay&&(this.inputDay=Math.min(this.inputDay,Rs(this.inputYear,this.inputMonth+1))),this.tableDate=t,this.activePicker="DATE",this.reactive&&!this.readonly&&!this.multiple&&this.isDateAllowed(this.inputDate)&&this.$emit("input",this.inputDate)):this.emitInput(this.inputDate)},dateClick:function(t){this.inputYear=parseInt(t.split("-")[0],10),this.inputMonth=parseInt(t.split("-")[1],10)-1,this.inputDay=parseInt(t.split("-")[2],10),this.emitInput(this.inputDate)},genPickerTitle:function(){var t=this;return this.$createElement(oa,{props:{date:this.value?this.formatters.titleDate(this.value):"",disabled:this.disabled,readonly:this.readonly,selectingYear:"YEAR"===this.activePicker,year:this.formatters.year(this.value?""+this.inputYear:this.tableDate),yearIcon:this.yearIcon,value:this.multiple?this.value[0]:this.value},slot:"title",on:{"update:selectingYear":function(e){return t.activePicker=e?"YEAR":t.type.toUpperCase()}}})},genTableHeader:function(){var t=this;return this.$createElement(va,{props:{nextIcon:this.nextIcon,color:this.color,dark:this.dark,disabled:this.disabled,format:this.headerDateFormat,light:this.light,locale:this.locale,min:"DATE"===this.activePicker?this.minMonth:this.minYear,max:"DATE"===this.activePicker?this.maxMonth:this.maxYear,prevIcon:this.prevIcon,readonly:this.readonly,value:"DATE"===this.activePicker?la(this.tableYear,4)+"-"+la(this.tableMonth+1):""+la(this.tableYear,4)},on:{toggle:function(){return t.activePicker="DATE"===t.activePicker?"MONTH":"YEAR"},input:function(e){return t.tableDate=e}}})},genDateTable:function(){var t=this;return this.$createElement(ba,{props:{allowedDates:this.allowedDates,color:this.color,current:this.current,dark:this.dark,disabled:this.disabled,events:this.events,eventColor:this.eventColor,firstDayOfWeek:this.firstDayOfWeek,format:this.dayFormat,light:this.light,locale:this.locale,min:this.min,max:this.max,readonly:this.readonly,scrollable:this.scrollable,showWeek:this.showWeek,tableDate:la(this.tableYear,4)+"-"+la(this.tableMonth+1),value:this.value,weekdayFormat:this.weekdayFormat},ref:"table",on:{input:this.dateClick,tableDate:function(e){return t.tableDate=e},"click:date":function(e){return t.$emit("click:date",e)},"dblclick:date":function(e){return t.$emit("dblclick:date",e)}}})},genMonthTable:function(){var t=this;return this.$createElement(xa,{props:{allowedDates:"month"===this.type?this.allowedDates:null,color:this.color,current:this.current?_a(this.current,"month"):null,dark:this.dark,disabled:this.disabled,events:"month"===this.type?this.events:null,eventColor:"month"===this.type?this.eventColor:null,format:this.monthFormat,light:this.light,locale:this.locale,min:this.minMonth,max:this.maxMonth,readonly:this.readonly&&"month"===this.type,scrollable:this.scrollable,value:this.selectedMonths,tableDate:""+la(this.tableYear,4)},ref:"table",on:{input:this.monthClick,tableDate:function(e){return t.tableDate=e},"click:month":function(e){return t.$emit("click:month",e)},"dblclick:month":function(e){return t.$emit("dblclick:month",e)}}})},genYears:function(){return this.$createElement(wa,{props:{color:this.color,format:this.yearFormat,locale:this.locale,min:this.minYear,max:this.maxYear,value:this.tableYear},on:{input:this.yearClick}})},genPickerBody:function(){var t="YEAR"===this.activePicker?[this.genYears()]:[this.genTableHeader(),"DATE"===this.activePicker?this.genDateTable():this.genMonthTable()];return this.$createElement("div",{key:this.activePicker},t)},setInputDate:function(){if(this.lastValue){var t=this.lastValue.split("-");this.inputYear=parseInt(t[0],10),this.inputMonth=parseInt(t[1],10)-1,"date"===this.type&&(this.inputDay=parseInt(t[2],10))}else this.inputYear=this.inputYear||this.now.getFullYear(),this.inputMonth=null==this.inputMonth?this.inputMonth:this.now.getMonth(),this.inputDay=this.inputDay||this.now.getDate()}},render:function(){return this.genPicker("v-picker--date")}}),Aa=(i(50),function(){return(Aa=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Ba=se(Kt,Qe("expansionPanel")).extend({name:"v-expansion-panel",provide:function(){return{expansionPanel:this}},props:{disabled:Boolean,readonly:Boolean,expand:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,value:{type:[Number,Array],default:function(){return null}}},data:function(){return{items:[],open:[]}},computed:{classes:function(){return Aa({"v-expansion-panel--focusable":this.focusable,"v-expansion-panel--popout":this.popout,"v-expansion-panel--inset":this.inset},this.themeClasses)}},watch:{expand:function(t){var e=-1;if(!t){var i=this.open.reduce(function(t,e){return e?t+1:t},0),n=Array(this.items.length).fill(!1);1===i&&(e=this.open.indexOf(!0)),e>-1&&(n[e]=!0),this.open=n}this.$emit("input",t?this.open:e>-1?e:null)},value:function(t){this.updateFromValue(t)}},mounted:function(){null!==this.value&&this.updateFromValue(this.value)},methods:{updateFromValue:function(t){if(!Array.isArray(t)||this.expand){var e=Array(this.items.length).fill(!1);"number"==typeof t?e[t]=!0:null!==t&&(e=t),this.updatePanels(e)}},updatePanels:function(t){this.open=t;for(var e=0;e<this.items.length;e++)this.items[e].toggle(t&&t[e])},panelClick:function(t){for(var e=this.expand?this.open.slice():Array(this.items.length).fill(!1),i=0;i<this.items.length;i++)this.items[i]._uid===t&&(e[i]=!this.open[i],!this.expand&&this.$emit("input",e[i]?i:null));this.updatePanels(e),this.expand&&this.$emit("input",e)},register:function(t){var e=this.items.push(t)-1;null!==this.value&&this.updateFromValue(this.value),t.toggle(!!this.open[e])},unregister:function(t){var e=this.items.findIndex(function(e){return e._uid===t._uid});this.items.splice(e,1),this.open.splice(e,1)}},render:function(t){return t("ul",{staticClass:"v-expansion-panel",class:this.classes},this.$slots.default)}}),Oa=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},Da=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Oa(arguments[e]));return t},Ea=se(we,ce,gi,Je("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend({name:"v-expansion-panel-content",props:{disabled:Boolean,readonly:Boolean,expandIcon:{type:String,default:"$vuetify.icons.expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{height:"auto"}},computed:{containerClasses:function(){return{"v-expansion-panel__container--active":this.isActive,"v-expansion-panel__container--disabled":this.isDisabled}},isDisabled:function(){return this.expansionPanel.disabled||this.disabled},isReadonly:function(){return this.expansionPanel.readonly||this.readonly}},beforeMount:function(){this.expansionPanel.register(this),void 0!==this.value&&K("v-model has been deprecated",this)},beforeDestroy:function(){this.expansionPanel.unregister(this)},methods:{onKeydown:function(t){13===t.keyCode&&this.$el===document.activeElement&&this.expansionPanel.panelClick(this._uid)},onHeaderClick:function(){this.isReadonly||this.expansionPanel.panelClick(this._uid)},genBody:function(){return this.$createElement("div",{ref:"body",class:"v-expansion-panel__body",directives:[{name:"show",value:this.isActive}]},this.showLazyContent(this.$slots.default))},genHeader:function(){var t=Da(this.$slots.header||[]);return this.hideActions||t.push(this.genIcon()),this.$createElement("div",{staticClass:"v-expansion-panel__header",directives:[{name:"ripple",value:this.ripple}],on:{click:this.onHeaderClick}},t)},genIcon:function(){var t=this.$slots.actions||[this.$createElement(ue,this.expandIcon)];return this.$createElement("transition",{attrs:{name:"fade-transition"}},[this.$createElement("div",{staticClass:"v-expansion-panel__header__icon",directives:[{name:"show",value:!this.isDisabled}]},t)])},toggle:function(t){var e=this;t&&(this.isBooted=!0),this.$nextTick(function(){return e.isActive=t})}},render:function(t){return t("li",{staticClass:"v-expansion-panel__container",class:this.containerClasses,attrs:{tabindex:this.isReadonly||this.isDisabled?null:0,"aria-expanded":Boolean(this.isActive)},on:{keydown:this.onKeydown}},[this.$slots.header&&this.genHeader(),t(sn,[this.genBody()])])}}),Va=(i(51),function(){return(Va=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Pa={name:"v-footer",mixins:[Xn(null,["height","inset"]),ie,Kt],props:{height:{default:32,type:[Number,String]},inset:Boolean},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},computedMarginBottom:function(){if(this.app)return this.$vuetify.application.bottom},computedPaddingLeft:function(){return this.app&&this.inset?this.$vuetify.application.left:0},computedPaddingRight:function(){return this.app&&this.inset?this.$vuetify.application.right:0},styles:function(){var t={height:isNaN(this.height)?this.height:this.height+"px"};return this.computedPaddingLeft&&(t.paddingLeft=this.computedPaddingLeft+"px"),this.computedPaddingRight&&(t.paddingRight=this.computedPaddingRight+"px"),this.computedMarginBottom&&(t.marginBottom=this.computedMarginBottom+"px"),t}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){return t("footer",this.setBackgroundColor(this.color,{staticClass:"v-footer",class:Va({"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--inset":this.inset},this.themeClasses),style:this.styles,ref:"content"}),this.$slots.default)}},Ma=(i(52),{name:"v-form",mixins:[Qe("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",function(i){e.$set(e.errorBag,t._uid,i)},{immediate:!0})},n={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))}):n.valid=i(t),n},validate:function(){return!this.inputs.filter(function(t){return!t.validate(!0)}).length},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var i=this.watchers.find(function(t){return t._uid===e._uid});i.valid&&i.valid(),i.shouldValidate&&i.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}});i(4);function La(t){return{name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,s=i.data,r=i.children;s.staticClass=(t+" "+(s.staticClass||"")).trim();var a=s.attrs;if(a){s.attrs={};var o=Object.keys(a).filter(function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"==typeof e});o.length&&(s.staticClass+=" "+o.join(" "))}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,r)}}}var Na=La("container"),Fa=(i(53),a.a.extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame(function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0})}})),Ha={name:"v-content",mixins:[Fa],props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar;return{paddingTop:t.top+e+"px",paddingRight:t.right+"px",paddingBottom:t.footer+t.insetFooter+t.bottom+"px",paddingLeft:t.left+"px"}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}},ja=La("flex"),za=La("layout"),Ra=k("spacer","div","v-spacer"),Wa=se(ge,ce).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(K("v-hover should only contain a single element",this),t)):(K("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),Ya=se(ps("itemGroup","v-item","v-item-group")).extend({name:"v-item",props:{value:{required:!1}},render:function(){var t,e;return this.$scopedSlots.default?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(e.data=this._b(e.data||{},e.tag,{class:(t={},t[this.activeClass]=this.isActive,t)}),e):(K("v-item should only contain a single element",this),e)):(K("v-item is missing a default scopedSlot",this),null)}}),Xa=(i(54),{name:"v-jumbotron",mixins:[ie,Bi,Kt],props:{gradient:String,height:{type:[Number,String],default:"400px"},src:String,tag:{type:String,default:"div"}},computed:{backgroundStyles:function(){var t={};return this.gradient&&(t.background="linear-gradient("+this.gradient+")"),t},classes:function(){return this.themeClasses},styles:function(){return{height:this.height}}},mounted:function(){Z("v-jumbotron",this.src?"v-img":"v-responsive",this)},methods:{genBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-jumbotron__background",style:this.backgroundStyles}))},genContent:function(){return this.$createElement("div",{staticClass:"v-jumbotron__content"},this.$slots.default)},genImage:function(){return this.src?this.$slots.img?this.$slots.img({src:this.src}):this.$createElement("img",{staticClass:"v-jumbotron__image",attrs:{src:this.src}}):null},genWrapper:function(){return this.$createElement("div",{staticClass:"v-jumbotron__wrapper"},[this.genImage(),this.genBackground(),this.genContent()])}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,n=e.data;return n.staticClass="v-jumbotron",n.style=this.styles,t(i,n,[this.genWrapper()])}}),Ua=(i(55),function(){return(Ua=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),qa=se(Xn("left",["miniVariant","right","width"]),xe,ns,Fa,Kt).extend({name:"v-navigation-drawer",directives:{ClickOutside:ze,Resize:Gt,Touch:Dr},props:{clipped:Boolean,disableRouteWatcher:Boolean,disableResizeWatcher:Boolean,height:{type:[Number,String],default:"100%"},floating:Boolean,miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:80},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,stateless:Boolean,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:300},value:{required:!1}},data:function(){return{isActive:!1,touchArea:{left:0,right:0}}},computed:{applicationProperty:function(){return this.right?"right":"left"},calculatedTransform:function(){return this.isActive?0:this.right?this.calculatedWidth:-this.calculatedWidth},calculatedWidth:function(){return parseInt(this.miniVariant?this.miniVariantWidth:this.width)},classes:function(){return Ua({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--mini-variant":this.miniVariant,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isMobile:function(){return!this.stateless&&!this.permanent&&!this.temporary&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},marginTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},maxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return!(this.disableResizeWatcher||this.stateless||this.permanent||this.temporary)},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},resizeIsDisabled:function(){return this.disableResizeWatcher||this.stateless},showOverlay:function(){return this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t={height:F(this.height),marginTop:this.marginTop+"px",maxHeight:null!=this.maxHeight?"calc(100% - "+ +this.maxHeight+"px)":void 0,transform:"translateX("+this.calculatedTransform+"px)",width:this.calculatedWidth+"px"};return t}},watch:{$route:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},isActive:function(t){this.$emit("input",t),this.callUpdate()},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&!this.resizeIsDisabled&&this.reactsToMobile&&(this.isActive=!t,this.callUpdate())},permanent:function(t){t&&(this.isActive=!0),this.callUpdate()},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},temporary:function(){this.callUpdate()},value:function(t){if(!this.permanent){if(null==t)return this.init();t!==this.isActive&&(this.isActive=t)}}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){if(this.$el.parentNode){var t=this.$el.parentNode.getBoundingClientRect();this.touchArea={left:t.left+50,right:t.right-50}}},closeConditional:function(){return this.isActive&&this.reactsToClick},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return!this.touchless&&e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){return!this.isActive||this.temporary||this.isMobile?0:this.calculatedWidth}},render:function(t){var e=this;return t("aside",{class:this.classes,style:this.styles,directives:this.genDirectives(),on:{click:function(){e.miniVariant&&e.$emit("update:miniVariant",!1)},transitionend:function(t){if(t.target===t.currentTarget){e.$emit("transitionend",t);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}}},[this.$slots.default,t("div",{class:"v-navigation-drawer__border"})])}}),Ka=(i(56),function(){return(Ka=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Ga=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},Za=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Ga(arguments[e]));return t},Ja=se(ie,Kt).extend({name:"v-pagination",directives:{Resize:Gt},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Ka({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var e=t%2==0?1:0,i=Math.floor(t/2),n=this.length-i+1+e;if(this.value>i&&this.value<n){var s=this.value-i+2,r=this.value+i-2-e;return Za([1,"..."],this.range(s,r),["...",this.length])}if(this.value===i){r=this.value+i-1-e;return Za(this.range(1,r),["...",this.length])}if(this.value===n){s=this.value-i+1;return Za([1,"..."],this.range(s,this.length))}return Za(this.range(1,i),["..."],this.range(n,this.length))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var i=[],n=t=t>0?t:1;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button"},on:i?{}:{click:n}},[t(ue,[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map(function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])})}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}}),Qa=(i(57),se(a.a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})).extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, "+this.parallax+"px)"}}},watch:{parallax:function(){this.isBooted=!0}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=this.$refs.img;e&&(e.complete?(this.translate(),this.listeners()):e.addEventListener("load",function(){t.translate(),t.listeners()},!1))},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"})]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[e,i])}})),to=(i(58),si.extend({name:"v-radio-group",mixins:[yi,Qe("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},si.options.methods.genDefaultSlot.call(this))},onRadioChange:function(t){this.disabled||(this.hasInput=!0,this.internalValue=t,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(t){t.relatedTarget&&t.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",t))},register:function(t){t.isActive=this.valueComparator(this.internalValue,t.value),t.$on("change",this.onRadioChange),t.$on("blur",this.onRadioBlur),this.radios.push(t)},setErrorState:function(t){for(var e=this.radios.length;--e>=0;)this.radios[e].parentError=t},setActiveRadio:function(){for(var t=this.radios.length;--t>=0;){var e=this.radios[t];e.isActive=this.valueComparator(this.internalValue,e.value)}},unregister:function(t){t.$off("change",this.onRadioChange),t.$off("blur",this.onRadioBlur);var e=this.radios.findIndex(function(e){return e===t});e>-1&&this.radios.splice(e,1)}}})),eo=(i(59),function(){return(eo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),io=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},no=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(io(arguments[e]));return t},so={name:"v-radio",mixins:[ie,gi,Je("radio","v-radio","v-radio-group"),Kt],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:eo({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return(t=bi.options.methods.genInput).call.apply(t,no([this],e))},genLabel:function(){return this.$createElement(qe,{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||"",dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",eo({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(ue,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(t){return t("div",this.computedData,[this.genRadio(),this.genLabel()])}},ro=(i(60),i(61),function(){return(ro=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),ao=si.extend({name:"v-slider",directives:{ClickOutside:ze},mixins:[Dn],props:{alwaysDirty:Boolean,inverseLabel:Boolean,label:String,min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"==typeof t||"always"===t}},tickLabels:{type:Array,default:function(){return[]}},tickSize:{type:[Number,String],default:1},thumbColor:{type:String,default:null},thumbLabel:{type:[Boolean,String],default:null,validator:function(t){return"boolean"==typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},trackColor:{type:String,default:null},value:[Number,String]},data:function(t){return{app:{},isActive:!1,keyPressed:0,lazyValue:void 0!==t.value?t.value:Number(t.min),oldValue:null}},computed:{classes:function(){return{"v-input--slider":!0,"v-input--slider--ticks":this.showTicks,"v-input--slider--inverse-label":this.inverseLabel,"v-input--slider--ticks-labels":this.tickLabels.length>0,"v-input--slider--thumb-label":this.thumbLabel||this.$scopedSlots.thumbLabel}},showTicks:function(){return this.tickLabels.length>0||!this.disabled&&this.stepNumeric&&!!this.ticks},showThumbLabel:function(){return!this.disabled&&(!!this.thumbLabel||""===this.thumbLabel||this.$scopedSlots["thumb-label"])},computedColor:function(){return this.disabled?null:this.validationState||this.color||"primary"},computedTrackColor:function(){return this.disabled?null:this.trackColor||null},computedThumbColor:function(){return this.disabled||!this.isDirty?null:this.validationState||this.thumbColor||this.color||"primary"},internalValue:{get:function(){return this.lazyValue},set:function(t){var e=this.min,i=this.max,n=this.roundValue(Math.min(Math.max(t,e),i));n!==this.lazyValue&&(this.lazyValue=n,this.$emit("input",n),this.validate())}},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},trackFillStyles:function(){var t=this.$vuetify.rtl?"auto":0,e=this.$vuetify.rtl?0:"auto",i=this.inputWidth+"%";return this.disabled&&(i="calc("+this.inputWidth+"% - 8px)"),{transition:this.trackTransition,left:t,right:e,width:i}},trackPadding:function(){return this.isActive||this.inputWidth>0||this.disabled?0:7},trackStyles:function(){var t=this.disabled?"calc("+this.inputWidth+"% + 8px)":this.trackPadding+"px",e=this.$vuetify.rtl?"auto":t,i=this.$vuetify.rtl?t:"auto",n=this.disabled?"calc("+(100-this.inputWidth)+"% - 8px)":"100%";return{transition:this.trackTransition,left:e,right:i,width:n}},tickStyles:function(){var t=Number(this.tickSize);return{"border-width":t+"px","border-radius":t>1?"50%":null,transform:t>1?"translateX(-"+t+"px) translateY(-"+(t-1)+"px)":null}},trackTransition:function(){return this.keyPressed>=2?"none":""},numTicks:function(){return Math.ceil((this.max-this.min)/this.stepNumeric)},inputWidth:function(){return(this.roundValue(this.internalValue)-this.min)/(this.max-this.min)*100},isDirty:function(){return this.internalValue>this.min||this.alwaysDirty}},watch:{min:function(t){t>this.internalValue&&this.$emit("input",parseFloat(t))},max:function(t){t<this.internalValue&&this.$emit("input",parseFloat(t))},value:function(t){this.internalValue=t}},mounted:function(){this.app=document.querySelector("[data-app]")||K("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genListeners:function(){return{blur:this.onBlur,click:this.onSliderClick,focus:this.onFocus,keydown:this.onKeyDown,keyup:this.onKeyUp}},genInput:function(){return this.$createElement("input",{attrs:ro({"aria-label":this.label,name:this.name,role:"slider",tabindex:this.disabled?-1:this.$attrs.tabindex,value:this.internalValue,readonly:!0,"aria-readonly":String(this.readonly),"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue},this.$attrs),on:this.genListeners(),ref:"input"})},genSlider:function(){return this.$createElement("div",{staticClass:"v-slider",class:{"v-slider--is-active":this.isActive},directives:[{name:"click-outside",value:this.onBlur}]},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isFocused||this.isActive,this.onThumbMouseDown)]},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=V(this.numTicks+1).map(function(e){var i=[];return t.tickLabels[e]&&i.push(t.$createElement("span",t.tickLabels[e])),t.$createElement("span",{key:e,staticClass:"v-slider__ticks",class:{"v-slider__ticks--always-show":"always"===t.ticks||t.tickLabels.length>0},style:ro({},t.tickStyles,{left:e*(100/t.numTicks)+"%"})},i)});return this.$createElement("div",{staticClass:"v-slider__ticks-container"},e)},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},genThumbContainer:function(t,e,i,n){var s=[this.genThumb()],r=this.getLabel(t);return this.showThumbLabel&&s.push(this.genThumbLabel(r)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--is-active":i,"v-slider__thumb-container--show-label":this.showThumbLabel},style:{transition:this.trackTransition,left:(this.$vuetify.rtl?100-e:e)+"%"},on:{touchstart:n,mousedown:n}}),s)},genThumbLabel:function(t){var e=F(this.thumbSize);return this.$createElement(qi,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label__container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e}}),[t])])])},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track__container",ref:"track"},t)},getLabel:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):this.$createElement("span",t)},onBlur:function(t){2!==this.keyPressed&&(this.isActive=!1,this.isFocused=!1,this.$emit("blur",t))},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onThumbMouseDown:function(t){this.oldValue=this.internalValue,this.keyPressed=2;var e={passive:!0};this.isActive=!0,this.isFocused=!1,"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,e),_(this.app,"touchend",this.onSliderMouseUp)):(this.app.addEventListener("mousemove",this.onMouseMove,e),_(this.app,"mouseup",this.onSliderMouseUp)),this.$emit("start",this.internalValue)},onSliderMouseUp:function(){this.keyPressed=0;var t={passive:!0};this.isActive=!1,this.isFocused=!1,this.app.removeEventListener("touchmove",this.onMouseMove,t),this.app.removeEventListener("mousemove",this.onMouseMove,t),this.$emit("end",this.internalValue),O(this.oldValue,this.internalValue)||this.$emit("change",this.internalValue)},onMouseMove:function(t){var e=this.parseMouseMove(t),i=e.value;e.isInsideTrack&&this.setInternalValue(i)},onKeyDown:function(t){if(!this.disabled&&!this.readonly){var e=this.parseKeyDown(t);null!=e&&(this.setInternalValue(e),this.$emit("change",e))}},onKeyUp:function(){this.keyPressed=0},onSliderClick:function(t){this.isFocused=!0,this.onMouseMove(t),this.$emit("change",this.internalValue)},parseMouseMove:function(t){var e=this.$refs.track.getBoundingClientRect(),i=e.left,n=e.width,s="touches"in t?t.touches[0].clientX:t.clientX,r=Math.min(Math.max((s-i)/n,0),1)||0;this.$vuetify.rtl&&(r=1-r);var a=s>=i-8&&s<=i+n+8;return{value:parseFloat(this.min)+r*(this.max-this.min),isInsideTrack:a}},parseKeyDown:function(t,e){if(void 0===e&&(e=this.internalValue),!this.disabled){var i=j.pageup,n=j.pagedown,s=j.end,r=j.home,a=j.left,o=j.right,l=j.down,u=j.up;if([i,n,s,r,a,o,l,u].includes(t.keyCode)){t.preventDefault();var h=this.stepNumeric||1,c=(this.max-this.min)/h;if([a,o,l,u].includes(t.keyCode))this.keyPressed+=1,e+=((this.$vuetify.rtl?[a,u]:[o,u]).includes(t.keyCode)?1:-1)*h*(t.shiftKey?3:t.ctrlKey?2:1);else if(t.keyCode===r)e=parseFloat(this.min);else if(t.keyCode===s)e=parseFloat(this.max);else{e-=(t.keyCode===n?1:-1)*h*(c>100?c/10:10)}return e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,n=this.min%this.stepNumeric,s=Math.round((t-n)/this.stepNumeric)*this.stepNumeric+n;return parseFloat(Math.max(Math.min(s,this.max),this.min).toFixed(i))},setInternalValue:function(t){this.internalValue=t}}}),oo=ao,lo={name:"v-range-slider",extends:oo,props:{value:{type:Array,default:function(){return[]}}},data:function(t){return{activeThumb:null,lazyValue:t.value.length?t.value:[0,0]}},computed:{classes:function(){return Object.assign({},{"v-input--range-slider":!0},oo.options.computed.classes.call(this))},internalValue:{get:function(){return this.lazyValue},set:function(t){var e=this,i=this.min,n=this.max,s=t.map(function(t){return e.roundValue(Math.min(Math.max(t,i),n))});(s[0]>s[1]||s[1]<s[0])&&(null!==this.activeThumb&&(this.activeThumb=1===this.activeThumb?0:1),s=[s[1],s[0]]),this.lazyValue=s,O(s,this.value)||this.$emit("input",s),this.validate()}},inputWidth:function(){var t=this;return this.internalValue.map(function(e){return(t.roundValue(e)-t.min)/(t.max-t.min)*100})},isDirty:function(){var t=this;return this.internalValue.some(function(e){return e!==t.min})||this.alwaysDirty},trackFillStyles:function(){var t=oo.options.computed.trackFillStyles.call(this),e=Math.abs(this.inputWidth[0]-this.inputWidth[1]);return t.width="calc("+e+"% - "+this.trackPadding+"px)",t[this.$vuetify.rtl?"right":"left"]=this.inputWidth[0]+"%",t},trackPadding:function(){return this.isDirty||this.internalValue[0]?0:oo.options.computed.trackPadding.call(this)}},methods:{getIndexOfClosestValue:function(t,e){return Math.abs(t[0]-e)<Math.abs(t[1]-e)?0:1},genInput:function(){var t=this;return V(2).map(function(e){var i=oo.options.methods.genInput.call(t);return i.data.attrs.value=t.internalValue[e],i.data.on.focus=function(i){t.activeThumb=e,oo.options.methods.onFocus.call(t,i)},i})},genChildren:function(){var t=this;return[this.genInput(),this.genTrackContainer(),this.genSteps(),V(2).map(function(e){var i=t.internalValue[e],n=t.inputWidth[e],s=(t.isFocused||t.isActive)&&t.activeThumb===e;return t.genThumbContainer(i,n,s,function(i){t.isActive=!0,t.activeThumb=e,t.onThumbMouseDown(i)})})]},onSliderClick:function(t){this.isActive||(this.isFocused=!0,this.onMouseMove(t,!0),this.$emit("change",this.internalValue))},onMouseMove:function(t,e){void 0===e&&(e=!1);var i=this.parseMouseMove(t),n=i.value;i.isInsideTrack&&(e&&(this.activeThumb=this.getIndexOfClosestValue(this.internalValue,n)),this.setInternalValue(n))},onKeyDown:function(t){var e=this.parseKeyDown(t,this.internalValue[this.activeThumb]);null!=e&&this.setInternalValue(e)},setInternalValue:function(t){var e=this;this.internalValue=this.internalValue.map(function(i,n){return n===e.activeThumb?t:Number(i)})}}},uo=(i(62),se(ie,ge,gi,ne,Kt).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},dense:Boolean,emptyIcon:{type:String,default:"$vuetify.icons.ratingEmpty"},fullIcon:{type:String,default:"$vuetify.icons.ratingFull"},halfIcon:{type:String,default:"$vuetify.icons.ratingHalf"},halfIncrements:Boolean,length:{type:[Number,String],default:5},clearable:Boolean,readonly:Boolean,hover:Boolean,value:{type:Number,default:0}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,i=t.medium,n=t.large,s=t.light,r=t.small;return{dark:e,medium:i,large:n,light:s,size:t.size,small:r,xLarge:t.xLarge}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(t){var e=this;return function(i){if(!e.readonly){var n=e.genHoverIndex(i,t);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(t){var e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex:function(t,e){return e+(this.isHalfEvent(t)?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter:function(t,e){var i=this;this.runDelay("open",function(){i.hoverIndex=i.genHoverIndex(t,e)})},onMouseLeave:function(){var t=this;this.runDelay("close",function(){return t.hoverIndex=-1})},genItem:function(t){var e=this,i=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(i);var n={click:i.click};return this.hover&&(n.mouseenter=function(i){return e.onMouseEnter(i,t)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(i){return e.onMouseEnter(i,t)})),this.$createElement(ue,this.setTextColor(this.getColor(i),{directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(i)])}},render:function(t){var e=this,i=V(Number(this.length)).map(function(t){return e.genItem(t)});return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},i)}})),ho=(i(63),se(ie,ce,$e(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){t.isActive=!1},this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})),co=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},fo=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(co(arguments[e]));return t};function po(t,e,i){var n=e.minX,s=e.minY,r=e.maxX,a=e.maxY,o=t.map(function(t){return"number"==typeof t?t:t.value}),l=o.length,u=Math.max.apply(Math,fo(o))+1,h=Math.min.apply(Math,fo(o));h&&(h-=1);var c=(r-n)/(l-1);"bar"===i&&(c=r/l);var d=(a-s)/(u-h);return o.map(function(t,e){return{x:n+e*c,y:a-(t-h)*d+1e-5*+(e===l-1)-1e-5*+(0===e),value:t}})}function vo(t){return parseInt(t,10)}function mo(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function go(t,e,i){var n=t.x-e.x,s=t.y-e.y,r=Math.sqrt(n*n+s*s),a=n/r,o=s/r;return{x:e.x+a*i,y:e.y+o*i}}function yo(t,e,i,n){void 0===i&&(i=!1),void 0===n&&(n=75);var s=t.shift(),r=t[t.length-1];return(i?"M"+s.x+" "+n+" L"+s.x+" "+s.y:"M"+s.x+" "+s.y)+t.map(function(i,n){var r,a,o,l=t[n+1],u=t[n-1]||s,h=l&&(a=i,o=u,vo((r=l).x+o.x)===vo(2*a.x)&&vo(r.y+o.y)===vo(2*a.y));if(!l||h)return"L"+i.x+" "+i.y;var c=Math.min(mo(u,i),mo(l,i)),d=c/2<e?c/2:e,f=go(u,i,d),p=go(l,i,d);return"L"+f.x+" "+f.y+"S"+i.x+" "+i.y+" "+p.x+" "+p.y}).join("")+(i?"L"+r.x+" "+n+" Z":"")}var bo=function(){return(bo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},xo=se(ie).extend({name:"VSparkline",props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},smooth:{type:[Boolean,Number,String],default:!1},showLabels:Boolean,type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300},labelSize:{type:[Number,String],default:7}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},totalBars:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalBars+1);return(this.parsedWidth-t)/this.totalBars}return Number(this.lineWidth)||4},boundary:function(){var t=Number(this.height);return{minX:this.parsedPadding,minY:this.parsedPadding,maxX:this.parsedWidth-this.parsedPadding,maxY:t-this.parsedPadding}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this.points,i=e.length,n=0;t.length<i;n++){var s=e[n],r=this.labels[n];r||(r=s===Object(s)?s.value:s),t.push(bo({},s,{value:String(r)}))}return t},points:function(){return po(this.value.slice(),this.boundary,this.type)},textY:function(){return this.boundary.maxY+6}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick(function(){if(t.autoDraw&&"bar"!==t.type){var e=t.$refs.path,i=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform "+t.autoDrawDuration+"ms "+t.autoDrawEasing,e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=i+" "+i,e.style.strokeDashoffset=Math.abs(i-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset "+t.autoDrawDuration+"ms "+t.autoDrawEasing,e.style.strokeDashoffset="0"),t.lastLength=i}})}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,i=this.gradient.slice();i.length||i.push("");var n=Math.max(i.length-1,1),s=i.reverse().map(function(e,i){return t.$createElement("stop",{attrs:{offset:i/n,"stop-color":e||t.color||"currentColor"}})});return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,x1:+("left"===e),y1:+("top"===e),x2:+("right"===e),y2:+("bottom"===e)}},s)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:this.color||"currentColor"}},t)},genLabels:function(){if(this.hasLabels)return this.genG(this.parsedLabels.map(this.genText))},genPath:function(){var t=!0===this.smooth?8:Number(this.smooth);return this.$createElement("path",{attrs:{id:this._uid,d:yo(this.points.slice(),t,this.fill,Number(this.height)),fill:this.fill?"url(#"+this._uid+")":"none",stroke:this.fill?"none":"url(#"+this._uid+")"},ref:"path"})},genText:function(t,e){var i=this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value;return this.$createElement("text",{attrs:{x:t.x,y:this.textY}},[i])},genBar:function(){if(this.value&&!(this.totalBars<2)){var t=this.width,e=this.height,i=this.parsedPadding,n=this._lineWidth,s=t||this.totalBars*i*2,r=e||75,a={minX:i,minY:i,maxX:Number(s)-i,maxY:Number(r)-i},o=bo({},this.$props);o.points=po(this.value,a,this.type);var l=a.maxX/(o.points.length-1);return o.boundary=a,o.lineWidth=n||l-Number(i||5),o.offsetX=0,this.autoLineWidth||(o.offsetX=a.maxX/this.totalBars/2-a.minX),this.$createElement("svg",{attrs:{width:"100%",height:"25%",viewBox:"0 0 "+s+" "+r}},[this.genGradient(),this.genClipPath(o.offsetX,o.lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genBarLabels(o):void 0,this.$createElement("g",{attrs:{transform:"scale(1,-1) translate(0,-"+a.maxY+")","clip-path":"url(#sparkline-bar-"+this._uid+"-clip)",fill:"url(#"+this._uid+")"}},[this.$createElement("rect",{attrs:{x:0,y:0,width:s,height:r}})])])}},genClipPath:function(t,e,i){var n=this,s=this.boundary.maxY,r="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:i+"-clip"}},this.points.map(function(i){return n.$createElement("rect",{attrs:{x:i.x+t,y:0,width:e,height:Math.max(s-i.y,0),rx:r,ry:r}},[n.autoDraw?n.$createElement("animate",{attrs:{attributeName:"height",from:0,to:s-i.y,dur:n.autoDrawDuration+"ms",fill:"freeze"}}):void 0])}))},genBarLabels:function(t){var e=this,i=t.offsetX||0,n=t.points.map(function(n){return e.$createElement("text",{attrs:{x:n.x+i+e._lineWidth/2,y:t.boundary.maxY+(Number(e.labelSize)||7),"font-size":Number(e.labelSize)||7}},n.value.toString())});return this.genG(n)},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:{"stroke-width":this._lineWidth||1,width:"100%",height:"25%",viewBox:"0 0 "+this.width+" "+this.height}}),[this.genGradient(),this.genLabels(),this.genPath()])}},render:function(t){if(!(this.totalBars<2))return"trend"===this.type?this.genTrend():this.genBar()}}),wo=(i(64),{name:"v-speed-dial",directives:{ClickOutside:ze},mixins:[Ie,ce,de],props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return(t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed})["v-speed-dial--direction-"+this.direction]=!0,t}},render:function(t){var e=this,i=[],n={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(n.on.mouseenter=function(){return e.isActive=!0},n.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var s=0;i=(this.$slots.default||[]).map(function(e,i){return e.tag&&void 0!==e.componentOptions&&"v-btn"===e.componentOptions.Ctor.options.name?t("div",{style:{transitionDelay:.05*++s+"s"},key:i},[e]):(e.key=i,e)})}var r=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},i);return t("div",n,[this.$slots.activator,r])}}),So=(i(65),function(){return(So=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),ko=se(Qe("stepper"),Kt).extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{nonLinear:Boolean,altLabels:Boolean,vertical:Boolean,value:[Number,String]},data:function(){return{inputValue:null,isBooted:!1,steps:[],content:[],isReverse:!1}},computed:{classes:function(){return So({"v-stepper":!0,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{inputValue:function(t,e){this.isReverse=Number(t)<Number(e);for(var i=this.steps.length;--i>=0;)this.steps[i].toggle(this.inputValue);for(i=this.content.length;--i>=0;)this.content[i].toggle(this.inputValue,this.isReverse);this.$emit("input",this.inputValue),e&&(this.isBooted=!0)},value:function(){var t=this;this.$nextTick(function(){return t.inputValue=t.value})}},mounted:function(){this.inputValue=this.value||this.steps[0].step||1},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter(function(e){return e!==t}):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter(function(e){return e!==t}))},stepClick:function(t){var e=this;this.$nextTick(function(){return e.inputValue=t})}},render:function(t){return t("div",{class:this.classes},this.$slots.default)}}),Co=se(ie,Je("stepper","v-stepper-step","v-stepper")).extend({name:"v-stepper-step",directives:{Ripple:mi},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$vuetify.icons.complete"},editIcon:{type:String,default:"$vuetify.icons.edit"},errorIcon:{type:String,default:"$vuetify.icons.error"},editable:Boolean,rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step":!0,"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error":this.hasError,"v-stepper__step--complete":this.complete,"error--text":this.hasError}},hasError:function(){return this.rules.some(function(t){return!0!==t()})}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){var e,i={class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}};e=this.hasError?[t(ue,{},this.errorIcon)]:this.complete?this.editable?[t(ue,{},this.editIcon)]:[t(ue,{},this.completeIcon)]:String(this.step);var n=!(this.hasError||!this.complete&&!this.isActive)&&this.color,s=t("span",this.setBackgroundColor(n,{staticClass:"v-stepper__step__step"}),e),r=t("div",{staticClass:"v-stepper__label"},this.$slots.default);return t("div",i,[s,r])}}),$o=se(Je("stepper","v-stepper-content","v-stepper")).extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{classes:function(){return{"v-stepper__content":!0}},computedTransition:function(){return this.isReverse?zi:ji},styles:function(){return this.isVertical?{height:F(this.height)}:{}},wrapperClasses:function(){return{"v-stepper__wrapper":!0}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame(function(){e=t.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(function(){return t.isActive&&(t.height=e||"auto")},450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout(function(){return t.height=0},10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={class:this.classes},i={class:this.wrapperClasses,style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var n=t("div",i,[this.$slots.default]),s=t("div",e,[n]);return t(this.computedTransition,{on:this.$listeners},[s])}}),Io=k("v-stepper__header"),_o=k("v-stepper__items"),To=(i(66),function(){return(To=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Ao={name:"v-switch",directives:{Touch:Dr},mixins:[bi],props:{loading:{type:[Boolean,String],default:!1}},computed:{classes:function(){return{"v-input--selection-controls v-input--switch":!0}},switchData:function(){return this.setTextColor(this.loading?void 0:this.computedColor,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",this.$attrs),this.genRipple(this.setTextColor(this.computedColor,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",To({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",To({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(Wi,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(ds,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===j.left&&this.isActive||t.keyCode===j.right&&!this.isActive)&&this.onChange()}}},Bo=(i(67),function(){return(Bo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Oo=se(Xn("bar",["height","window"]),ie,Kt).extend({name:"v-system-bar",props:{height:{type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},lightsOut:Boolean,status:Boolean,window:Boolean},computed:{classes:function(){return Bo({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--status":this.status,"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?parseInt(this.height):this.window?32:24}},methods:{updateApplication:function(){return this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:{height:this.computedHeight+"px"}};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),Do=(i(68),{computed:{activeTab:function(){if(this.selectedItems.length)return this.selectedItems[0]},containerStyles:function(){return this.height?{height:parseInt(this.height,10)+"px"}:null},hasArrows:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint},sliderStyles:function(){return{left:this.sliderLeft+"px",transition:null!=this.sliderLeft?null:"none",width:this.sliderWidth+"px"}}}}),Eo=Er.extend({name:"v-tabs-items",inject:{registerItems:{default:null},tabProxy:{default:null},unregisterItems:{default:null}},props:{cycle:Boolean},watch:{internalValue:function(t){this.tabProxy&&this.tabProxy(t)}},created:function(){this.registerItems&&this.registerItems(this.changeModel)},beforeDestroy:function(){this.unregisterItems&&this.unregisterItems()},methods:{changeModel:function(t){this.internalValue=t},getValue:function(t,e){return t.id?t.id:Er.options.methods.getValue.call(this,t,e)},next:function(){(this.cycle||this.internalIndex!==this.items.length-1)&&Er.options.methods.next.call(this)},prev:function(){(this.cycle||0!==this.internalIndex)&&Er.options.methods.prev.call(this)}}}),Vo={name:"v-tabs-slider",mixins:[ie],render:function(t){return t("div",this.setBackgroundColor(this.color||"accent",{staticClass:"v-tabs__slider"}))}},Po={methods:{genBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs__bar",class:this.themeClasses,ref:"bar"}),[this.genTransition("prev"),this.genWrapper(this.genContainer(t)),this.genTransition("next")])},genContainer:function(t){return this.$createElement("div",{staticClass:"v-tabs__container",class:{"v-tabs__container--align-with-title":this.alignWithTitle,"v-tabs__container--centered":this.centered,"v-tabs__container--fixed-tabs":this.fixedTabs,"v-tabs__container--grow":this.grow,"v-tabs__container--icons-and-text":this.iconsAndText,"v-tabs__container--overflow":this.isOverflowing,"v-tabs__container--right":this.right},style:this.containerStyles,ref:"container"},t)},genIcon:function(t){var e=this;return this.hasArrows&&this[t+"IconVisible"]?this.$createElement(ue,{staticClass:"v-tabs__icon v-tabs__icon--"+t,props:{disabled:!this[t+"IconVisible"]},on:{click:function(){return e.scrollTo(t)}}},this[t+"Icon"]):null},genItems:function(t,e){return t.length>0?t:e.length?this.$createElement(Eo,e):null},genTransition:function(t){return this.$createElement("transition",{props:{name:"fade-transition"}},[this.genIcon(t)])},genWrapper:function(t){var e=this;return this.$createElement("div",{staticClass:"v-tabs__wrapper",class:{"v-tabs__wrapper--show-arrows":this.hasArrows},ref:"wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}]},[t])},genSlider:function(t){return t.length||(t=[this.$createElement(Vo,{props:{color:this.sliderColor}})]),this.$createElement("div",{staticClass:"v-tabs__slider-wrapper",style:this.sliderStyles},t)}}},Mo={props:{activeClass:{type:String,default:"v-tabs__item--active"},alignWithTitle:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0,validator:function(t){return!isNaN(parseInt(t))}},hideSlider:Boolean,iconsAndText:Boolean,mandatory:{type:Boolean,default:!0},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},right:Boolean,showArrows:Boolean,sliderColor:{type:String,default:"accent"},value:[Number,String]}},Lo={methods:{newOffset:function(t){var e=this.$refs.wrapper.clientWidth;return"prev"===t?Math.max(this.scrollOffset-e,0):Math.min(this.scrollOffset+e,this.$refs.container.clientWidth-e)},onTouchStart:function(t){this.startX=this.scrollOffset+t.touchstartX,this.$refs.container.style.transition="none",this.$refs.container.style.willChange="transform"},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs.container,e=this.$refs.wrapper,i=t.clientWidth-e.clientWidth;t.style.transition=null,t.style.willChange=null,this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)}}},No=Qn.extend({name:"v-tabs",directives:{Resize:Gt,Touch:Dr},mixins:[ie,Fa,Do,Mo,Po,Lo,{watch:{activeTab:function(t,e){this.setOverflow(),t&&(this.tabItems&&this.tabItems(this.getValue(t,this.items.indexOf(t))),null!=e&&this.updateTabsView())},alignWithTitle:"callSlider",centered:"callSlider",fixedTabs:"callSlider",hasArrows:function(t){t||(this.scrollOffset=0)},internalValue:function(t){this.$listeners.input&&this.$emit("input",t)},lazyValue:"updateTabs",right:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize",scrollOffset:function(t){this.$refs.container.style.transform="translateX("+-t+"px)",this.hasArrows&&(this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon())}}},Kt],provide:function(){return{tabGroup:this,tabProxy:this.tabProxy,registerItems:this.registerItems,unregisterItems:this.unregisterItems}},data:function(){return{bar:[],content:[],isOverflowing:!1,nextIconVisible:!1,prevIconVisible:!1,resizeTimeout:null,scrollOffset:0,sliderWidth:null,sliderLeft:null,startX:0,tabItems:null,transitionTime:300,widths:{bar:0,container:0,wrapper:0}}},watch:{items:"onResize",tabs:"onResize"},mounted:function(){this.init()},methods:{checkIcons:function(){this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon()},checkPrevIcon:function(){return this.scrollOffset>0},checkNextIcon:function(){return this.widths.container>this.scrollOffset+this.widths.wrapper},callSlider:function(){var t=this;if(this.hideSlider||!this.activeTab)return!1;var e=this.activeTab;this.$nextTick(function(){e&&e.$el&&(t.sliderWidth=e.$el.scrollWidth,t.sliderLeft=e.$el.offsetLeft)})},init:function(){this.$listeners.input&&Z("@input","@change",this)},onResize:function(){if(!this._isDestroyed){this.setWidths();var t=this.isBooted?this.transitionTime:0;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateTabsView,t)}},overflowCheck:function(t,e){this.isOverflowing&&e(t)},scrollTo:function(t){this.scrollOffset=this.newOffset(t)},setOverflow:function(){this.isOverflowing=this.widths.bar<this.widths.container},setWidths:function(){var t=this.$refs.bar?this.$refs.bar.clientWidth:0,e=this.$refs.container?this.$refs.container.clientWidth:0,i=this.$refs.wrapper?this.$refs.wrapper.clientWidth:0;this.widths={bar:t,container:e,wrapper:i},this.setOverflow()},parseNodes:function(){for(var t=[],e=[],i=[],n=[],s=(this.$slots.default||[]).length,r=0;r<s;r++){var a=this.$slots.default[r];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":i.push(a);break;case"v-tabs-items":e.push(a);break;case"v-tab-item":t.push(a);break;default:n.push(a)}else n.push(a)}return{tab:n,slider:i,items:e,item:t}},registerItems:function(t){this.tabItems=t,t(this.internalValue)},unregisterItems:function(){this.tabItems=null},updateTabsView:function(){this.callSlider(),this.scrollIntoView(),this.checkIcons()},scrollIntoView:function(){if(this.activeTab){if(!this.isOverflowing)return this.scrollOffset=0;var t=this.widths.wrapper+this.scrollOffset,e=this.activeTab.$el,i=e.clientWidth,n=e.offsetLeft,s=i+n,r=.3*i;this.activeTab===this.items[this.items.length-1]&&(r=0),n<this.scrollOffset?this.scrollOffset=Math.max(n-r,0):t<s&&(this.scrollOffset-=t-s-r)}},tabProxy:function(t){this.internalValue=t}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,r=e.item;return t("div",{staticClass:"v-tabs",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar([this.hideSlider?null:this.genSlider(n),i]),t(Re,{props:{dark:this.theme.isDark,light:!this.theme.isDark}},[this.genItems(s,r)])])}}),Fo=function(){return(Fo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},Ho={name:"v-tab",mixins:[Bi,ps("tabGroup"),Kt],props:{ripple:{type:[Boolean,Object],default:!0}},computed:{classes:function(){return Fo({"v-tabs__item":!0,"v-tabs__item--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";this.$router&&this.to===Object(this.to)&&(t=this.$router.resolve(this.to,this.$route,this.append).href);return t.replace("#","")}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),this.$emit("click",t),this.to||this.toggle()},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass;this.$nextTick(function(){D(t.$refs.link,e)&&t.toggle()})}}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.data,n=this.disabled?"div":e.tag;return i.ref="link",t("div",{staticClass:"v-tabs__div"},[t(n,i,this.$slots.default)])}},jo=Pr.extend({name:"v-tab-item",props:{id:String},render:function(t){var e=Pr.options.render.call(this,t);return this.id&&(Z("id","value",this),e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id),e}}),zo=(i(69),function(){return(zo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Ro={name:"v-textarea",extends:Pn,props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return zo({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},Pn.options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||Pn.options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t,e,i=this;setTimeout(function(){i.autoGrow&&i.calculateInputHeight()},0),this.autoGrow&&this.noResize&&null!=(e=q('"no-resize" is now implied when using "auto-grow", and can be removed',this,t))&&console.info(e)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=Pn.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){Pn.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},Wo={functional:!0,$_wrapperFor:Pn,props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var i=e.props,n=e.data,s=e.slots,r=e.parent;Rr(n);var a=zr(s(),t);return i.textarea&&Z("<v-text-field textarea>","<v-textarea outline>",Wo,r),i.multiLine&&Z("<v-text-field multi-line>","<v-textarea>",Wo,r),i.textarea||i.multiLine?(n.attrs.outline=i.textarea,t(Ro,n,a)):t(Pn,n,a)}},Yo=(i(70),function(){return(Yo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Xo=se(Kt).extend({name:"v-timeline",props:{alignTop:Boolean,dense:Boolean},computed:{classes:function(){return Yo({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),Uo=function(){return(Uo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},qo=se(ie,Kt).extend({name:"v-timeline-item",props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(ue,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Uo({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody()];return this.hideDot||e.unshift(this.genDot()),this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Uo({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--left":this.left,"v-timeline-item--right":this.right},this.themeClasses)},e)}}),Ko=(i(72),se(aa).extend({name:"v-time-picker-title",props:{ampm:Boolean,disabled:Boolean,hour:Number,minute:Number,second:Number,period:{type:String,validator:function(t){return"am"===t||"pm"===t}},readonly:Boolean,useSeconds:Boolean,selecting:Number},methods:{genTime:function(){var t=this.hour;this.ampm&&(t=t?(t-1)%12+1:12);var e=null==this.hour?"--":this.ampm?String(t):la(t),i=null==this.minute?"--":la(this.minute),n=[this.genPickerButton("selecting",nl.hour,e,this.disabled),this.$createElement("span",":"),this.genPickerButton("selecting",nl.minute,i,this.disabled)];if(this.useSeconds){var s=null==this.second?"--":la(this.second);n.push(this.$createElement("span",":")),n.push(this.genPickerButton("selecting",nl.second,s,this.disabled))}return this.$createElement("div",{class:"v-time-picker-title__time"},n)},genAmPm:function(){return this.$createElement("div",{staticClass:"v-time-picker-title__ampm"},[this.genPickerButton("period","am","am",this.disabled||this.readonly),this.genPickerButton("period","pm","pm",this.disabled||this.readonly)])}},render:function(t){var e=[this.genTime()];return this.ampm&&e.push(this.genAmPm()),t("div",{staticClass:"v-time-picker-title"},e)}})),Go=(i(71),function(){return(Go=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),Zo=se(ie,Kt).extend({name:"v-time-picker-clock",props:{allowedValues:Function,disabled:Boolean,double:Boolean,format:{type:Function,default:function(t){return t}},max:{type:Number,required:!0},min:{type:Number,required:!0},scrollable:Boolean,readonly:Boolean,rotate:{type:Number,default:0},step:{type:Number,default:1},value:Number},data:function(){return{inputValue:this.value,isDragging:!1,valueOnMouseDown:null,valueOnMouseUp:null}},computed:{count:function(){return this.max-this.min+1},degreesPerUnit:function(){return 360/this.roundCount},degrees:function(){return this.degreesPerUnit*Math.PI/180},displayedValue:function(){return null==this.value?this.min:this.value},innerRadiusScale:function(){return.62},roundCount:function(){return this.double?this.count/2:this.count}},watch:{value:function(t){this.inputValue=t}},methods:{wheel:function(t){t.preventDefault();var e=Math.sign(-t.deltaY||1),i=this.displayedValue;do{i=((i+=e)-this.min+this.count)%this.count+this.min}while(!this.isAllowed(i)&&i!==this.displayedValue);i!==this.displayedValue&&this.update(i)},isInner:function(t){return this.double&&t-this.min>=this.roundCount},handScale:function(t){return this.isInner(t)?this.innerRadiusScale:1},isAllowed:function(t){return!this.allowedValues||this.allowedValues(t)},genValues:function(){for(var t=[],e=this.min;e<=this.max;e+=this.step){var i=e===this.value&&(this.color||"accent");t.push(this.$createElement("span",this.setBackgroundColor(i,{staticClass:"v-time-picker-clock__item",class:{"v-time-picker-clock__item--active":e===this.displayedValue,"v-time-picker-clock__item--disabled":this.disabled||!this.isAllowed(e)},style:this.getTransform(e),domProps:{innerHTML:"<span>"+this.format(e)+"</span>"}})))}return t},genHand:function(){var t="scaleY("+this.handScale(this.displayedValue)+")",e=this.rotate+this.degreesPerUnit*(this.displayedValue-this.min),i=null!=this.value&&(this.color||"accent");return this.$createElement("div",this.setBackgroundColor(i,{staticClass:"v-time-picker-clock__hand",class:{"v-time-picker-clock__hand--inner":this.isInner(this.value)},style:{transform:"rotate("+e+"deg) "+t}}))},getTransform:function(t){var e=this.getPosition(t);return{left:50+50*e.x+"%",top:50+50*e.y+"%"}},getPosition:function(t){var e=this.rotate*Math.PI/180;return{x:Math.sin((t-this.min)*this.degrees+e)*this.handScale(t),y:-Math.cos((t-this.min)*this.degrees+e)*this.handScale(t)}},onMouseDown:function(t){t.preventDefault(),this.valueOnMouseDown=null,this.valueOnMouseUp=null,this.isDragging=!0,this.onDragMove(t)},onMouseUp:function(){this.isDragging=!1,null!==this.valueOnMouseUp&&this.isAllowed(this.valueOnMouseUp)&&this.$emit("change",this.valueOnMouseUp)},onDragMove:function(t){if(t.preventDefault(),this.isDragging||"click"===t.type){var e,i=this.$refs.clock.getBoundingClientRect(),n=i.width,s=i.top,r=i.left,a=this.$refs.innerClock.getBoundingClientRect().width,o="touches"in t?t.touches[0]:t,l={x:n/2,y:-n/2},u={x:o.clientX-r,y:s-o.clientY},h=Math.round(this.angle(l,u)-this.rotate+360)%360,c=this.double&&this.euclidean(l,u)<(a+a*this.innerRadiusScale)/4,d=(Math.round(h/this.degreesPerUnit)+(c?this.roundCount:0))%this.count+this.min;e=h>=360-this.degreesPerUnit/2?c?this.max-this.roundCount+1:this.min:d,this.isAllowed(d)&&(null===this.valueOnMouseDown&&(this.valueOnMouseDown=e),this.valueOnMouseUp=e,this.update(e))}},update:function(t){this.inputValue!==t&&(this.inputValue=t,this.$emit("input",t))},euclidean:function(t,e){var i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)},angle:function(t,e){var i=2*Math.atan2(e.y-t.y-this.euclidean(t,e),e.x-t.x);return Math.abs(180*i/Math.PI)}},render:function(t){var e=this;return t("div",{staticClass:"v-time-picker-clock",class:Go({"v-time-picker-clock--indeterminate":null==this.value},this.themeClasses),on:this.readonly||this.disabled?void 0:Object.assign({mousedown:this.onMouseDown,mouseup:this.onMouseUp,mouseleave:function(){return e.isDragging&&e.onMouseUp()},touchstart:this.onMouseDown,touchend:this.onMouseUp,mousemove:this.onDragMove,touchmove:this.onDragMove},this.scrollable?{wheel:this.wheel}:{}),ref:"clock"},[t("div",{staticClass:"v-time-picker-clock__inner",ref:"innerClock"},[this.genHand(),this.genValues()])])}}),Jo=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},Qo=V(24),tl=V(12),el=tl.map(function(t){return t+12}),il=V(60),nl={hour:1,minute:2,second:3},sl={1:"hour",2:"minute",3:"second"},rl=se($a).extend({name:"v-time-picker",props:{allowedHours:Function,allowedMinutes:Function,allowedSeconds:Function,disabled:Boolean,format:{type:String,default:"ampm",validator:function(t){return["ampm","24hr"].includes(t)}},min:String,max:String,readonly:Boolean,scrollable:Boolean,useSeconds:Boolean,value:null},data:function(){return{inputHour:null,inputMinute:null,inputSecond:null,lazyInputHour:null,lazyInputMinute:null,lazyInputSecond:null,period:"am",selecting:nl.hour}},computed:{selectingHour:{get:function(){return this.selecting===nl.hour},set:function(t){this.selecting=nl.hour}},selectingMinute:{get:function(){return this.selecting===nl.minute},set:function(t){this.selecting=nl.minute}},selectingSecond:{get:function(){return this.selecting===nl.second},set:function(t){this.selecting=nl.second}},isAllowedHourCb:function(){var t=this;if(!this.min&&!this.max)return this.allowedHours;var e=this.min?Number(this.min.split(":")[0]):0,i=this.max?Number(this.max.split(":")[0]):23;return function(n){return n>=1*e&&n<=1*i&&(!t.allowedHours||t.allowedHours(n))}},isAllowedMinuteCb:function(){var t=this,e=!this.allowedHours||this.allowedHours(this.inputHour);if(!this.min&&!this.max)return e?this.allowedMinutes:function(){return!1};var i=Jo(this.min?this.min.split(":").map(Number):[0,0],2),n=i[0],s=i[1],r=Jo(this.max?this.max.split(":").map(Number):[23,59],2),a=r[0],o=r[1],l=60*n+1*s,u=60*a+1*o;return function(i){var n=60*t.inputHour+i;return n>=l&&n<=u&&e&&(!t.allowedMinutes||t.allowedMinutes(i))}},isAllowedSecondCb:function(){var t=this,e=!this.allowedHours||this.allowedHours(this.inputHour),i=!this.allowedMinutes||this.allowedMinutes(this.inputMinute);if(!this.min&&!this.max)return e&&i?this.allowedSeconds:function(){return!1};var n=Jo(this.min?this.min.split(":").map(Number):[0,0,0],3),s=n[0],r=n[1],a=n[2],o=Jo(this.max?this.max.split(":").map(Number):[23,59,59],3),l=o[0],u=o[1],h=o[2],c=3600*s+60*r+1*(a||0),d=3600*l+60*u+1*(h||0);return function(n){var s=3600*t.inputHour+60*t.inputMinute+n;return s>=c&&s<=d&&e&&i&&(!t.allowedSeconds||t.allowedSeconds(n))}},isAmPm:function(){return"ampm"===this.format}},watch:{value:"setInputData"},mounted:function(){this.setInputData(this.value)},methods:{genValue:function(){return null==this.inputHour||null==this.inputMinute||this.useSeconds&&null==this.inputSecond?null:la(this.inputHour)+":"+la(this.inputMinute)+(this.useSeconds?":"+la(this.inputSecond):"")},emitValue:function(){var t=this.genValue();null!==t&&this.$emit("input",t)},setPeriod:function(t){if(this.period=t,null!=this.inputHour){var e=this.inputHour+("am"===t?-12:12);this.inputHour=this.firstAllowed("hour",e),this.emitValue()}},setInputData:function(t){if(null==t||""===t)this.inputHour=null,this.inputMinute=null,this.inputSecond=null;else if(t instanceof Date)this.inputHour=t.getHours(),this.inputMinute=t.getMinutes(),this.inputSecond=t.getSeconds();else{var e=Jo(t.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/)||new Array(6),6),i=e[1],n=e[2],s=e[4],r=e[5];this.inputHour=r?this.convert12to24(parseInt(i,10),r):parseInt(i,10),this.inputMinute=parseInt(n,10),this.inputSecond=parseInt(s||0,10)}this.period=null==this.inputHour||this.inputHour<12?"am":"pm"},convert24to12:function(t){return t?(t-1)%12+1:12},convert12to24:function(t,e){return t%12+("pm"===e?12:0)},onInput:function(t){this.selecting===nl.hour?this.inputHour=this.isAmPm?this.convert12to24(t,this.period):t:this.selecting===nl.minute?this.inputMinute=t:this.inputSecond=t,this.emitValue()},onChange:function(t){this.$emit("click:"+sl[this.selecting],t);var e=this.selecting===(this.useSeconds?nl.second:nl.minute);if(this.selecting===nl.hour?this.selecting=nl.minute:this.useSeconds&&this.selecting===nl.minute&&(this.selecting=nl.second),this.inputHour!==this.lazyInputHour||this.inputMinute!==this.lazyInputMinute||this.useSeconds&&this.inputSecond!==this.lazyInputSecond){var i=this.genValue();null!==i&&(this.lazyInputHour=this.inputHour,this.lazyInputMinute=this.inputMinute,this.useSeconds&&(this.lazyInputSecond=this.inputSecond),e&&this.$emit("change",i))}},firstAllowed:function(t,e){var i="hour"===t?this.isAllowedHourCb:"minute"===t?this.isAllowedMinuteCb:this.isAllowedSecondCb;if(!i)return e;var n="minute"===t?il:"second"===t?il:this.isAmPm?e<12?tl:el:Qo;return((n.find(function(t){return i((t+e)%n.length+n[0])})||0)+e)%n.length+n[0]},genClock:function(){return this.$createElement(Zo,{props:{allowedValues:this.selecting===nl.hour?this.isAllowedHourCb:this.selecting===nl.minute?this.isAllowedMinuteCb:this.isAllowedSecondCb,color:this.color,dark:this.dark,disabled:this.disabled,double:this.selecting===nl.hour&&!this.isAmPm,format:this.selecting===nl.hour?this.isAmPm?this.convert24to12:function(t){return t}:function(t){return la(t,2)},light:this.light,max:this.selecting===nl.hour?this.isAmPm&&"am"===this.period?11:23:59,min:this.selecting===nl.hour&&this.isAmPm&&"pm"===this.period?12:0,readonly:this.readonly,scrollable:this.scrollable,size:Number(this.width)-(!this.fullWidth&&this.landscape?80:20),step:this.selecting===nl.hour?1:5,value:this.selecting===nl.hour?this.inputHour:this.selecting===nl.minute?this.inputMinute:this.inputSecond},on:{input:this.onInput,change:this.onChange},ref:"clock"})},genPickerBody:function(){return this.$createElement("div",{staticClass:"v-time-picker-clock__container",key:this.selecting},[this.genClock()])},genPickerTitle:function(){var t=this;return this.$createElement(Ko,{props:{ampm:this.isAmPm,disabled:this.disabled,hour:this.inputHour,minute:this.inputMinute,second:this.inputSecond,period:this.period,readonly:this.readonly,useSeconds:this.useSeconds,selecting:this.selecting},on:{"update:selecting":function(e){return t.selecting=e},"update:period":this.setPeriod},ref:"title",slot:"title"})}},render:function(){return this.genPicker("v-picker--time")}});i(73);var al={inserted:function(t,e){var i=e.value,n=e.options||{passive:!0},s=e.arg?document.querySelector(e.arg):window;s&&(s.addEventListener("scroll",i,n),t._onScroll={callback:i,options:n,target:s})},unbind:function(t){if(t._onScroll){var e=t._onScroll,i=e.callback,n=e.options;e.target.removeEventListener("scroll",i,n),delete t._onScroll}}},ol=function(){return(ol=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},ll=se(Xn("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","manualScroll"]),ie,Fa,Kt).extend({name:"v-toolbar",directives:{Scroll:al},props:{card:Boolean,clippedLeft:Boolean,clippedRight:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},flat:Boolean,floating:Boolean,height:{type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},invertedScroll:Boolean,manualScroll:Boolean,prominent:Boolean,scrollOffScreen:Boolean,scrollToolbarOffScreen:Boolean,scrollTarget:String,scrollThreshold:{type:Number,default:300},tabs:Boolean},data:function(){return{activeTimeout:null,currentScroll:0,heights:{mobileLandscape:48,mobile:56,desktop:64,dense:48},isActive:!0,isExtended:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return this.scrollToolbarOffScreen?(Z("scrollToolbarOffScreen","scrollOffScreen",this),!0):this.scrollOffScreen||this.invertedScroll},computedContentHeight:function(){return this.height?parseInt(this.height):this.dense?this.heights.dense:this.prominent||this.$vuetify.breakpoint.mdAndUp?this.heights.desktop:this.$vuetify.breakpoint.smAndDown&&this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height?this.heights.mobileLandscape:this.heights.mobile},computedExtensionHeight:function(){return this.tabs?48:this.extensionHeight?parseInt(this.extensionHeight):this.computedContentHeight},computedHeight:function(){return this.isExtended?this.computedContentHeight+this.computedExtensionHeight:this.computedContentHeight},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},classes:function(){return ol({"v-toolbar":!0,"elevation-0":this.flat||!this.isActive&&!this.tabs&&this.canScroll,"v-toolbar--absolute":this.absolute,"v-toolbar--card":this.card,"v-toolbar--clipped":this.clippedLeft||this.clippedRight,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--fixed":!this.absolute&&(this.app||this.fixed),"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.prominent},this.themeClasses)},computedPaddingLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedPaddingRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedTransform:function(){return this.isActive?0:this.canScroll?-this.computedContentHeight:-this.computedHeight},currentThreshold:function(){return Math.abs(this.currentScroll-this.savedScroll)},styles:function(){return{marginTop:this.computedMarginTop+"px",paddingRight:this.computedPaddingRight+"px",paddingLeft:this.computedPaddingLeft+"px",transform:"translateY("+this.computedTransform+"px)"}}},watch:{currentThreshold:function(t){this.invertedScroll?this.isActive=this.currentScroll>this.scrollThreshold:t<this.scrollThreshold||!this.isBooted||(this.isActive=this.isScrollingUp,this.savedScroll=this.currentScroll)},isActive:function(){this.savedScroll=0},invertedScroll:function(t){this.isActive=!t},manualScroll:function(t){this.isActive=!t},isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll}},created:function(){(this.invertedScroll||this.manualScroll)&&(this.isActive=!1)},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget))},methods:{onScroll:function(){this.canScroll&&!this.manualScroll&&"undefined"!=typeof window&&(this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.previousScroll=this.currentScroll)},updateApplication:function(){return this.invertedScroll||this.manualScroll?0:this.computedHeight}},render:function(t){this.isExtended=this.extended||!!this.$slots.extension;var e=[],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return i.directives=[{arg:this.scrollTarget,name:"scroll",value:this.onScroll}],e.push(t("div",{staticClass:"v-toolbar__content",style:{height:this.computedContentHeight+"px"},ref:"content"},this.$slots.default)),this.isExtended&&e.push(t("div",{staticClass:"v-toolbar__extension",style:{height:this.computedExtensionHeight+"px"}},this.$slots.extension)),t("nav",i,e)}}),ul=a.a.extend({name:"v-toolbar-side-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,s=e.props,r=e.data,a=r.staticClass?r.staticClass+" v-toolbar__side-icon":"v-toolbar__side-icon",o=Object.assign(r,{staticClass:a,props:Object.assign(s,{icon:!0}),on:n}),l=i().default;return t(ys,o,l||[t(ue,"$vuetify.icons.menu")])}}),hl=k("v-toolbar__title"),cl=k("v-toolbar__items"),dl=(i(74),{name:"v-tooltip",mixins:[ie,ge,xe,ke,De,ce],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!(this.bottom||this.left||this.top||this.right),s=this.isAttached?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=s+e.width/2-i.width/2:(this.left||this.right)&&(r=s+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),this.calcXOverflow(r,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=this.isAttached?e.offsetTop:e.top,s=0;return this.top||this.bottom?s=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=n+e.height/2-i.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:F(this.maxWidth),minWidth:F(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick(function(){t.value&&t.callActivate()})},mounted:function(){"v-slot"===U(this,"activator",!0)&&G("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}};if("scoped"===U(this,"activator")){var i=this.$scopedSlots.activator({on:e});return this.activatorNode=i,i}return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,i=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},e[this.contentClass]=!0,e.menuable__content__active=this.isActive,e["v-tooltip__content--fixed"]=this.activatorFixed,e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[i]),this.genActivator()])}}),fl=(i(75),function(){return(fl=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}),pl={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},selectable:Boolean,selectedColor:{type:String,default:"accent"},indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"},expandIcon:{type:String,default:"$vuetify.icons.subgroup"},loadingIcon:{type:String,default:"$vuetify.icons.loading"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},itemChildren:{type:String,default:"children"},loadChildren:Function,openOnClick:Boolean,transition:Boolean},vl=se(Je("treeview")).extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:fl({item:{type:Object,default:function(){return null}}},pl),data:function(){return{isOpen:!1,isSelected:!1,isIndeterminate:!1,isActive:!1,isLoading:!1,hasLoaded:!1}},computed:{key:function(){return D(this.item,this.itemKey)},children:function(){return D(this.item,this.itemChildren)},text:function(){return D(this.item,this.itemText)},scopedProps:function(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon:function(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren:function(){return!(!this.children||!this.children.length&&!this.loadChildren)}},created:function(){this.treeview.register(this)},beforeDestroy:function(){this.treeview.unregister(this)},methods:{checkChildren:function(){var t=this;return new Promise(function(e){if(!t.children||t.children.length||!t.loadChildren||t.hasLoaded)return e();t.isLoading=!0,e(t.loadChildren(t.item))}).then(function(){t.isLoading=!1,t.hasLoaded=!0})},open:function(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel:function(){var t=[];return this.$scopedSlots.label?t.push(this.$scopedSlots.label(this.scopedProps)):t.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},t)},genContent:function(){var t=[this.$scopedSlots.prepend&&this.$scopedSlots.prepend(this.scopedProps),this.genLabel(),this.$scopedSlots.append&&this.$scopedSlots.append(this.scopedProps)];return this.$createElement("div",{staticClass:"v-treeview-node__content"},t)},genToggle:function(){var t=this;return this.$createElement(le,{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:function(e){e.stopPropagation(),t.isLoading||t.checkChildren().then(function(){return t.open()})}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox:function(){var t=this;return this.$createElement(le,{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected?this.selectedColor:void 0},on:{click:function(e){e.stopPropagation(),t.isLoading||t.checkChildren().then(function(){t.$nextTick(function(){t.isSelected=!t.isSelected,t.isIndeterminate=!1,t.treeview.updateSelected(t.key,t.isSelected),t.treeview.emitSelected()})})}}},[this.computedIcon])},genNode:function(){var t,e=this,i=[this.genContent()];return this.selectable&&i.unshift(this.genCheckbox()),this.hasChildren&&i.unshift(this.genToggle()),this.$createElement("div",{staticClass:"v-treeview-node__root",class:(t={},t[this.activeClass]=this.isActive,t),on:{click:function(){e.openOnClick&&e.children?e.open():e.activatable&&(e.isActive=!e.isActive,e.treeview.updateActive(e.key,e.isActive),e.treeview.emitActive())}}},i)},genChild:function(t){return this.$createElement(vl,{key:D(t,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:t,selectable:this.selectable,selectedColor:this.selectedColor,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick},scopedSlots:this.$scopedSlots})},genChildrenWrapper:function(){if(!this.isOpen||!this.children)return null;var t=[this.children.map(this.genChild)];return this.$createElement("div",{staticClass:"v-treeview-node__children"},t)},genTransition:function(){return this.$createElement(sn,[this.genChildrenWrapper()])}},render:function(t){var e=[this.genNode()];return this.transition?e.push(this.genTransition()):e.push(this.genChildrenWrapper()),t("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--selected":this.isSelected,"v-treeview-node--excluded":this.treeview.isExcluded(this.key)}},e)}});function ml(t,e,i){return D(t,i).toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}function gl(t,e,i,n,s,r,a){if(t(e,i,s))return!0;var o=D(e,r);if(o){for(var l=!1,u=0;u<o.length;u++)gl(t,o[u],i,n,s,r,a)&&(l=!0);if(l)return!0}return a.add(D(e,n)),!1}var yl=function(){return(yl=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},bl=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,s,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){s={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return a},xl=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(bl(arguments[e]));return t},wl=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],i=0;return e?e.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}},Sl=se(Qe("treeview"),Kt).extend({name:"v-treeview",provide:function(){return{treeview:this}},props:yl({active:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},hoverable:Boolean,multipleActive:Boolean,open:{type:Array,default:function(){return[]}},openAll:Boolean,returnObject:{type:Boolean,default:!1},value:{type:Array,default:function(){return[]}},search:String,filter:Function},pl),data:function(){return{nodes:{},selectedCache:new Set,activeCache:new Set,openCache:new Set}},computed:{excludedItems:function(){var t=new Set;if(!this.search)return t;for(var e=0;e<this.items.length;e++)gl(this.filter||ml,this.items[e],this.search,this.itemKey,this.itemText,this.itemChildren,t);return t}},watch:{items:{handler:function(){var t=this,e=Object.keys(this.nodes).map(function(e){return D(t.nodes[e].item,t.itemKey)}),i=this.getKeys(this.items),n=function(t,e){for(var i=[],n=0;n<e.length;n++)t.indexOf(e[n])<0&&i.push(e[n]);return i}(i,e);if(n.length||!(i.length<e.length)){n.forEach(function(e){return delete t.nodes[e]});var s=xl(this.selectedCache);this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),O(s,xl(this.selectedCache))||this.emitSelected()}},deep:!0},active:function(t){this.handleNodeCacheWatcher(t,this.activeCache,this.updateActive,this.emitActive)},value:function(t){this.handleNodeCacheWatcher(t,this.selectedCache,this.updateSelected,this.emitSelected)},open:function(t){this.handleNodeCacheWatcher(t,this.openCache,this.updateOpen,this.emitOpen)}},created:function(){var t=this;this.buildTree(this.items),this.value.forEach(function(e){return t.updateSelected(e,!0)}),this.emitSelected(),this.active.forEach(function(e){return t.updateActive(e,!0)}),this.emitActive()},mounted:function(){var t=this;(this.$slots.prepend||this.$slots.append)&&K("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach(function(e){return t.updateOpen(e,!0)}),this.emitOpen())},methods:{updateAll:function(t){var e=this;Object.keys(this.nodes).forEach(function(i){return e.updateOpen(D(e.nodes[i].item,e.itemKey),t)}),this.emitOpen()},getKeys:function(t,e){void 0===e&&(e=[]);for(var i=0;i<t.length;i++){var n=D(t[i],this.itemKey);e.push(n);var s=D(t[i],this.itemChildren);s&&e.push.apply(e,xl(this.getKeys(s)))}return e},buildTree:function(t,e){var i=this;void 0===e&&(e=null);for(var n=0;n<t.length;n++){var s=t[n],r=D(s,this.itemKey),a=D(s,this.itemChildren,[]),o=this.nodes.hasOwnProperty(r)?this.nodes[r]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},l={vnode:o.vnode,parent:e,children:a.map(function(t){return D(t,i.itemKey)}),item:s};this.buildTree(a,r),!this.nodes.hasOwnProperty(r)&&null!==e&&this.nodes.hasOwnProperty(e)?(l.isSelected=this.nodes[e].isSelected,l.isIndeterminate=this.nodes[e].isIndeterminate):(l.isSelected=o.isSelected,l.isIndeterminate=o.isIndeterminate),l.isActive=o.isActive,l.isOpen=o.isOpen,this.nodes[r]=a.length?this.calculateState(l,this.nodes):l,this.nodes[r].isSelected&&this.selectedCache.add(r),this.nodes[r].isActive&&this.activeCache.add(r),this.nodes[r].isOpen&&this.openCache.add(r),this.updateVnodeState(r)}},calculateState:function(t,e){var i=t.children.reduce(function(t,i){return t[0]+=+Boolean(e[i].isSelected),t[1]+=+Boolean(e[i].isIndeterminate),t},[0,0]);return t.isSelected=!!t.children.length&&i[0]===t.children.length,t.isIndeterminate=!t.isSelected&&(i[0]>0||i[1]>0),t},emitOpen:function(){this.emitNodeCache("update:open",this.openCache)},emitSelected:function(){this.emitNodeCache("input",this.selectedCache)},emitActive:function(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache:function(t,e){var i=this;this.$emit(t,this.returnObject?xl(e).map(function(t){return i.nodes[t].item}):xl(e))},handleNodeCacheWatcher:function(t,e,i,n){var s=this;t=this.returnObject?t.map(function(t){return D(t,s.itemKey)}):t;var r=xl(e);O(r,t)||(r.forEach(function(t){return i(t,!1)}),t.forEach(function(t){return i(t,!0)}),n())},getDescendants:function(t,e){void 0===e&&(e=[]);var i=this.nodes[t].children;e.push.apply(e,xl(i));for(var n=0;n<i.length;n++)e=this.getDescendants(i[n],e);return e},getParents:function(t){for(var e=this.nodes[t].parent,i=[];null!==e;)i.push(e),e=this.nodes[e].parent;return i},register:function(t){var e=D(t.item,this.itemKey);this.nodes[e].vnode=t,this.updateVnodeState(e)},unregister:function(t){var e=D(t.item,this.itemKey);this.nodes[e]&&(this.nodes[e].vnode=null)},updateActive:function(t,e){var i=this;if(this.nodes.hasOwnProperty(t)){this.multipleActive||this.activeCache.forEach(function(t){i.nodes[t].isActive=!1,i.updateVnodeState(t),i.activeCache.delete(t)});var n=this.nodes[t];n&&(e?this.activeCache.add(t):this.activeCache.delete(t),n.isActive=e,this.updateVnodeState(t))}},updateSelected:function(t,e){var i,n,s=this;if(this.nodes.hasOwnProperty(t)){var r=new Map,a=xl([t],this.getDescendants(t));a.forEach(function(t){s.nodes[t].isSelected=e,s.nodes[t].isIndeterminate=!1,r.set(t,e)});var o=this.getParents(t);o.forEach(function(t){s.nodes[t]=s.calculateState(s.nodes[t],s.nodes),r.set(t,s.nodes[t].isSelected)}),xl([t],a,o).forEach(this.updateVnodeState);try{for(var l=wl(r.entries()),u=l.next();!u.done;u=l.next()){var h=bl(u.value,2),c=h[0];!0===h[1]?this.selectedCache.add(c):this.selectedCache.delete(c)}}catch(t){i={error:t}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(i)throw i.error}}}},updateOpen:function(t,e){var i=this;if(this.nodes.hasOwnProperty(t)){var n=this.nodes[t],s=D(n.item,this.itemChildren);s&&!s.length&&n.vnode&&!n.vnode.hasLoaded?n.vnode.checkChildren().then(function(){return i.updateOpen(t,e)}):s&&s.length&&(n.isOpen=e,n.isOpen?this.openCache.add(t):this.openCache.delete(t),this.updateVnodeState(t))}},updateVnodeState:function(t){var e=this.nodes[t];e&&e.vnode&&(e.vnode.isSelected=e.isSelected,e.vnode.isIndeterminate=e.isIndeterminate,e.vnode.isActive=e.isActive,e.vnode.isOpen=e.isOpen)},isExcluded:function(t){return!!this.search&&this.excludedItems.has(t)}},render:function(t){var e=this.items.length?this.items.map(vl.options.methods.genChild.bind(this)):this.$slots.default;return t("div",{staticClass:"v-treeview",class:yl({"v-treeview--hoverable":this.hoverable},this.themeClasses)},e)}}),kl={ClickOutside:ze,Ripple:mi,Resize:Gt,Scroll:al,Touch:Dr},Cl=function(){return(Cl=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},$l={install:function(t,e){t.use(kt,Cl({components:s,directives:kl},e))},version:"1.5.15"};"undefined"!=typeof window&&window.Vue&&window.Vue.use($l);e.default=$l}]).default});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=login.js.map