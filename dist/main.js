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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"deleteButton\": () => (/* binding */ deleteButton),\n/* harmony export */   \"addButton\": () => (/* binding */ addButton),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _renderInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderInput */ \"./src/renderInput.js\");\n/* harmony import */ var _renderProject___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProject  */ \"./src/renderProject .js\");\n/* harmony import */ var _addTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTasks */ \"./src/addTasks.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderTasks */ \"./src/renderTasks.js\");\n\n\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\nconst deleteButton = `<i class=\"fas fa-times delete\"></i>`;\nconst addButton = `plus`;\nconst projects = []\n\n\nconst newPrcjInput = (0,_renderInput__WEBPACK_IMPORTED_MODULE_3__.renderInput)('Project Name', addButton, 'newProject', 'newPrjctText');\n\ncontent.appendChild(newPrcjInput);\n\nwindow.addEventListener('click', (e) => {\n    if(e.target.classList.contains('newProject')){\n        const input = document.getElementById('newPrjctText')\n        const newPrjct = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(input.value.toUpperCase().trim())\n        ;(0,_renderProject___WEBPACK_IMPORTED_MODULE_4__.renderProject)(newPrjct);\n        projects.push(newPrjct)\n        input.value = ''\n    } else if(e.target.classList.contains('newTask')) {\n        const input = document.getElementById('newTask');\n        const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__.Task(input.value.toUpperCase().trim());\n        const currentProject = e.path[2].innerText.trim();\n        (0,_addTasks__WEBPACK_IMPORTED_MODULE_5__.addTasks)(currentProject, newTask)\n        input.value = ''  \n    } \n});\n\n\n\n//# sourceURL=webpack://projecttodo/./src/index.js?");

/***/ }),

/***/ "./src/renderInput.js":
/*!****************************!*\
  !*** ./src/renderInput.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderInput\": () => (/* binding */ renderInput)\n/* harmony export */ });\nconst renderInput = (placeholder, buttonType, classes, ids) => {\n    const newBTn = `<i class=\"fas fa-${buttonType} ${classes}\"></i>`\n    const mainInput = `\n        <input type=\"text\" id=\"${ids}\" placeholder=\"${placeholder}\"> \n        ${newBTn}\n        `\n    const inputDiv = document.createElement('div');\n\n    inputDiv.innerHTML = mainInput;\n    return inputDiv;\n}\n\n//# sourceURL=webpack://projecttodo/./src/renderInput.js?");

/***/ }),

/***/ "./src/renderOnPage.js":
/*!*****************************!*\
  !*** ./src/renderOnPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderOnPage\": () => (/* binding */ renderOnPage)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nconst renderOnPage = (parent, ...children) => {\n    const parentEl = document.createElement(parent)\n    children.forEach(child => {\n        parentEl.appendChild(child);\n    });\n    \n    ___WEBPACK_IMPORTED_MODULE_0__.content.appendChild(parentEl)\n}\n\n//# sourceURL=webpack://projecttodo/./src/renderOnPage.js?");

/***/ }),

/***/ "./src/renderProject .js":
/*!*******************************!*\
  !*** ./src/renderProject .js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject)\n/* harmony export */ });\n/* harmony import */ var _renderInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderInput */ \"./src/renderInput.js\");\n/* harmony import */ var _renderOnPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderOnPage */ \"./src/renderOnPage.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\n\n\nconst renderProject = (project) => {\n    const projectTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__.createElement)('h1', `${project.name} ${___WEBPACK_IMPORTED_MODULE_3__.deleteButton}`)\n    const projectInput = (0,_renderInput__WEBPACK_IMPORTED_MODULE_0__.renderInput)('New Task', ___WEBPACK_IMPORTED_MODULE_3__.addButton, 'newTask', 'newTask');\n    const projectList = document.createElement('ul');\n    // projectTitle.innerHTML = ;\n\n    (0,_renderOnPage__WEBPACK_IMPORTED_MODULE_1__.renderOnPage)('div', projectTitle, projectInput, projectList)\n}\n\n//# sourceURL=webpack://projecttodo/./src/renderProject_.js?");

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