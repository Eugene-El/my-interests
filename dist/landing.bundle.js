/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/landing.ts":
/*!************************!*\
  !*** ./src/landing.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/themes */ \"./src/lib/themes.ts\");\n\r\n(0,_lib_themes__WEBPACK_IMPORTED_MODULE_0__.loadThemeSelector)();\r\n\n\n//# sourceURL=webpack://my-interests/./src/landing.ts?");

/***/ }),

/***/ "./src/lib/themes.ts":
/*!***************************!*\
  !*** ./src/lib/themes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadThemeSelector\": () => (/* binding */ loadThemeSelector)\n/* harmony export */ });\nfunction loadThemeSelector() {\r\n    var themeName = localStorage.getItem(\"theme\");\r\n    if (themeName)\r\n        document.documentElement.className = themeName;\r\n    var themeSelector = document.createElement(\"div\");\r\n    themeSelector.style.position = \"fixed\";\r\n    themeSelector.style.top = \"1em\";\r\n    themeSelector.style.right = \"1em\";\r\n    themeSelector.style.display = \"flex\";\r\n    themeSelector.style.gap = \"1em\";\r\n    [\r\n        { name: \"sleekAndFuturistic\", color1: \"#D9B08C\", color2: \"#FFCB9A\" },\r\n        { name: \"cleanAndModern\", color1: \"#DEF2F1\", color2: \"#FEFFFF\" },\r\n        { name: \"accentThatPop\", color1: \"#4C495D\", color2: \"#564F6F\" }\r\n    ].forEach(function (theme) {\r\n        var themeElement = document.createElement(\"div\");\r\n        themeElement.style.borderRadius = \"50%\";\r\n        themeElement.style.cursor = \"pointer\";\r\n        themeElement.style.width = \"2em\";\r\n        themeElement.style.height = \"2em\";\r\n        themeElement.style.borderWidth = \"2px\";\r\n        themeElement.style.backgroundColor = theme.color1;\r\n        themeElement.style.borderColor = theme.color2;\r\n        themeElement.addEventListener(\"click\", function () {\r\n            document.documentElement.className = theme.name;\r\n            localStorage.setItem(\"theme\", theme.name);\r\n        });\r\n        themeSelector.appendChild(themeElement);\r\n    });\r\n    document.body.appendChild(themeSelector);\r\n}\r\n\n\n//# sourceURL=webpack://my-interests/./src/lib/themes.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/landing.ts");
/******/ 	
/******/ })()
;