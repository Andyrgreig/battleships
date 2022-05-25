/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ship__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction Gameboard() {\r\n  this.boardSize = 10;\r\n  this.board = [],\r\n  this.carrier = new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(5),\r\n  this.battleship = new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(4),\r\n  this.cruiser = new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(3),\r\n  this.submarine = new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(3),\r\n  this.destroyer = new (_Ship__WEBPACK_IMPORTED_MODULE_0___default())(2),\r\n  this.misses = [],\r\n  \r\n  this.placeShip = function (row, col, isVertical, shipType) {\r\n    let count = 0;\r\n    \r\n    if (isVertical) {\r\n      for (let i = row; i < row + this[shipType].len; i++) {\r\n        this.board[i][col].push(`${shipType}`);\r\n        this.board[i][col].push(count);\r\n        count++;\r\n      }\r\n    } else {\r\n      for (let i = col; i < col + this[shipType].len; i++) {\r\n        this.board[row][i].push(`${shipType}`);\r\n        this.board[row][i].push(count) \r\n        count++;\r\n      }\r\n    }\r\n  },\r\n  \r\n  this.isSunk = function () {\r\n    if (this.hits.every((element) => element === 'hit')) {\r\n      this.sunk = true;\r\n    }\r\n  },\r\n\r\n  this.generateBoard = function () {\r\n    let arrayRow = []  \r\n    for (let x = 0; x < this.boardSize; x++) {\r\n      for (let y=0; y < this.boardSize; y++) {\r\n        arrayRow.push([\"\"]);\r\n      }\r\n      this.board.push(arrayRow);\r\n      arrayRow = [];\r\n    }\r\n  },\r\n\r\n  this.receiveAttack = function (row, col) {\r\n    const cell = this.board[row][col]\r\n    if (cell[1] !== undefined) {\r\n      const ship = cell[1];\r\n      const tile = cell[2];\r\n      cell[0] = \"hit\";\r\n      this.carrier.hit(tile);\r\n    } else {\r\n        this.misses.push(`${row}${col}`)\r\n        cell[0] = \"miss\";\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleships/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module) => {

eval("\nfunction Player (name) {\n    \n  this.name = name,\n  this.guessAttack = function(target) {\n      \n    var row = 0;\n    var col = 0;\n    \n    do {\n      row = Math.floor(Math.random() * target.boardSize) ;\n      col = Math.floor(Math.random() * target.boardSize) ;\n    }\n    while (target.board[row][col][0] !== \"\")\n\n    target.receiveAttack(row,col);\n  }\n}\n \nmodule.exports = Player;\n  \n\n\n\n//# sourceURL=webpack://battleships/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function Ship (len) {\r\n     \r\n  this.len = len,\r\n  this.hits =  [],\r\n  this.sunk = false,\r\n \r\n  this.hit = function(num) {\r\n    if (num < this.len) {\r\n      this.hits[num] = \"hit\";\r\n    }\r\n  },\r\n  \r\n  this.isSunk = function() {\r\n    if (this.hits.every((element) => element === 'hit') && this.hits.length === this.len) {\r\n      this.sunk = true;\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = Ship;\r\n\n\n//# sourceURL=webpack://battleships/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\n\n(0,_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Player__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nfunction init () {\n\n    const player1 = new (_Player__WEBPACK_IMPORTED_MODULE_1___default())(\"Bob\");\n    const player2 = new (_Player__WEBPACK_IMPORTED_MODULE_1___default())(\"Computer\");\n\n    const player1Board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    const player2Board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n    player1Board.generateBoard();\n    player2Board.generateBoard();\n\n    player1Board.placeShip(0, 0, false, \"carrier\");\n    player1Board.placeShip(6, 3, true, \"battleship\");\n    player1Board.placeShip(4, 6, false, \"cruiser\");\n    player1Board.placeShip(2, 2, true, \"submarine\");\n    player1Board.placeShip(8, 7, false, \"destroyer\");\n\n\n    player2Board.placeShip(4, 8, true, \"carrier\");\n    player2Board.placeShip(1, 4, true, \"battleship\");\n    player2Board.placeShip(6, 3, false, \"cruiser\");\n    player2Board.placeShip(8, 3, false, \"submarine\");\n    player2Board.placeShip(1, 7, false, \"destroyer\");\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://battleships/./src/init.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;