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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n    get getName() {\n        return this.name;\n    }\n    set setName(value){\n        if(value)\n        this.name = value;\n    }\n    get getTasks() {\n      return this.tasks;\n    }\n    set setTasks(value) {\n      if(value)\n      this.tasks.push(value);\n    }\n}\n\n//# sourceURL=webpack://projecttodo/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, description, dueDate, priority) {\n      this.name = name;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority\n    }\n    get getName() {\n      return this.name;\n    }\n    get getDescription() {\n      return this.description;\n    }\n    get getDueDate() {\n      return this.dueDate;\n    }\n    get getPriority() {\n      return this.priority;\n    }\n    set setName(value) {\n      if(value)\n      this.name = value;\n    }\n    set setDescription(value) {\n      if(value)\n      this.description = value;\n    }\n    set setDueDate(value) {\n      if(value)\n      this.dueDate = value;\n    }\n    set setPriority(value) {\n      if(value)\n      this.priority = value;\n    }\n}\n\n//# sourceURL=webpack://projecttodo/./src/Task.js?");

/***/ }),

/***/ "./src/addTasks.js":
/*!*************************!*\
  !*** ./src/addTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTasks\": () => (/* binding */ addTasks)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nconst addTasks = (prjct, task) => {\n    let currPj;\n    ___WEBPACK_IMPORTED_MODULE_0__.projects.forEach(pj => {\n        if(pj.name === prjct) currPj = pj\n    });   \n    currPj.setTasks = task\n};\n\n//# sourceURL=webpack://projecttodo/./src/addTasks.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst createElement = (type, content) => {\n    let newElement = document.createElement(type);\n\n    newElement.innerHTML = content;\n\n    return newElement\n}\n\n\n\n//# sourceURL=webpack://projecttodo/./src/createElement.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _renderProjects___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjects  */ \"./src/renderProjects .js\");\n\n\n\n\nconst createProject = (projectName) => {\n    const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);\n    ___WEBPACK_IMPORTED_MODULE_1__.projects.push(newProject);\n    (0,_renderProjects___WEBPACK_IMPORTED_MODULE_2__.renderProjects)();\n}\n\n//# sourceURL=webpack://projecttodo/./src/createProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _renderProjects___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProjects  */ \"./src/renderProjects .js\");\n/* harmony import */ var _addTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTasks */ \"./src/addTasks.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderTasks */ \"./src/renderTasks.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\n\n\n\n\n\n\n\nconst projectsDiv = document.getElementById('projectsDiv');\nconst newPjText = document.getElementById('newPjText');\nconst newPjBtn = document.getElementById('newPjBtn');\nconst currProjectDiv = document.getElementById('currProjectDiv');\nconst newTaskText = document.getElementById('newTaskText');\nconst newTaskBtn = document.getElementById('newTaskBtn');\nconst projectList = document.getElementById('projectList');\nconst projects = [];\n\nnewPjBtn.addEventListener('click', () => {\n    if(newPjText.value === '') return\n    ;(0,_createProject__WEBPACK_IMPORTED_MODULE_6__.createProject)(newPjText.value.trim().toUpperCase());\n    newPjText.value = ''\n});\n\n//# sourceURL=webpack://projecttodo/./src/index.js?");

/***/ }),

/***/ "./src/renderProjects .js":
/*!********************************!*\
  !*** ./src/renderProjects .js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\n\n\nconst renderProjects = () => {\n    ___WEBPACK_IMPORTED_MODULE_1__.projectList.innerHTML = '';\n    ___WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {\n        const pjAppend = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '');\n        const pjTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4', project.name);\n        const pjBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', `<i class=\"fas fa-trash delete\"></i>`)\n        pjAppend.appendChild(pjTitle);\n        pjAppend.appendChild(pjBtn)\n        ___WEBPACK_IMPORTED_MODULE_1__.projectList.appendChild(pjAppend)\n    })\n}\n\n//# sourceURL=webpack://projecttodo/./src/renderProjects_.js?");

/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\nconst renderTasks = (currPj) => {\n    console.log(currPj.getTasks)\n    // const taskLi = document.createElement('li');\n    // taskLi.innerHTML = `\n    //     ${task}\n    //     <i class=\"far fa-trash-alt delete\"></i>\n    //     <i class=\"fas fa-check complete\"></i>\n    //     <i class=\"fas fa-flag priority\"></i>\n    // `\n}\n\n//# sourceURL=webpack://projecttodo/./src/renderTasks.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;