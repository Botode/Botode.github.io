"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[826],{

/***/ 243:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(717);
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(638);
/** @format */



window.onload = function () {
  console.log($('#canv').text());
  // Get a reference to the canvas object
  var canvas = document.getElementById('canv');
  // Create an empty project and a view for the canvas:
  paper__WEBPACK_IMPORTED_MODULE_0___default().setup(canvas);
  // Create a Paper.js Path to draw a line into it:
  var path = new (paper__WEBPACK_IMPORTED_MODULE_0___default().Path)();
  // Give the stroke a color
  path.strokeColor = 'black';
  var start = new (paper__WEBPACK_IMPORTED_MODULE_0___default().Point)(100, 100);
  // Move to start and draw a line from there
  path.moveTo(start);
  // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:
  path.lineTo(start.add([200, -50]));
  // Draw the view now:
  paper__WEBPACK_IMPORTED_MODULE_0___default().view.draw();
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216,712], () => (__webpack_exec__(243)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGM1NzZhZDcxZWJlMDlmZTJiMjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRTBCO0FBQ0o7QUFFdEJDLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLFlBQVk7RUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRSxDQUFDO0VBQzlCO0VBQ0EsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUM7RUFDQVQsa0RBQVcsQ0FBQ08sTUFBTSxDQUFDO0VBQ25CO0VBQ0EsSUFBSUksSUFBSSxHQUFHLElBQUlYLG1EQUFVLEVBQUU7RUFDM0I7RUFDQVcsSUFBSSxDQUFDRSxXQUFXLEdBQUcsT0FBTztFQUMxQixJQUFJQyxLQUFLLEdBQUcsSUFBSWQsb0RBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3JDO0VBQ0FXLElBQUksQ0FBQ0ssTUFBTSxDQUFDRixLQUFLLENBQUM7RUFDbEI7RUFDQTtFQUNBSCxJQUFJLENBQUNNLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xDO0VBQ0FsQixzREFBZSxFQUFFO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgcGFwZXIgZnJvbSAncGFwZXInO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygkKCcjY2FudicpLnRleHQoKSk7XG4gIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgY2FudmFzIG9iamVjdFxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnYnKTtcbiAgLy8gQ3JlYXRlIGFuIGVtcHR5IHByb2plY3QgYW5kIGEgdmlldyBmb3IgdGhlIGNhbnZhczpcbiAgcGFwZXIuc2V0dXAoY2FudmFzKTtcbiAgLy8gQ3JlYXRlIGEgUGFwZXIuanMgUGF0aCB0byBkcmF3IGEgbGluZSBpbnRvIGl0OlxuICB2YXIgcGF0aCA9IG5ldyBwYXBlci5QYXRoKCk7XG4gIC8vIEdpdmUgdGhlIHN0cm9rZSBhIGNvbG9yXG4gIHBhdGguc3Ryb2tlQ29sb3IgPSAnYmxhY2snO1xuICB2YXIgc3RhcnQgPSBuZXcgcGFwZXIuUG9pbnQoMTAwLCAxMDApO1xuICAvLyBNb3ZlIHRvIHN0YXJ0IGFuZCBkcmF3IGEgbGluZSBmcm9tIHRoZXJlXG4gIHBhdGgubW92ZVRvKHN0YXJ0KTtcbiAgLy8gTm90ZSB0aGF0IHRoZSBwbHVzIG9wZXJhdG9yIG9uIFBvaW50IG9iamVjdHMgZG9lcyBub3Qgd29ya1xuICAvLyBpbiBKYXZhU2NyaXB0LiBJbnN0ZWFkLCB3ZSBuZWVkIHRvIGNhbGwgdGhlIGFkZCgpIGZ1bmN0aW9uOlxuICBwYXRoLmxpbmVUbyhzdGFydC5hZGQoWzIwMCwgLTUwXSkpO1xuICAvLyBEcmF3IHRoZSB2aWV3IG5vdzpcbiAgcGFwZXIudmlldy5kcmF3KCk7XG59O1xuIl0sIm5hbWVzIjpbInBhcGVyIiwid2luZG93Iiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsIiQiLCJ0ZXh0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldHVwIiwicGF0aCIsIlBhdGgiLCJzdHJva2VDb2xvciIsInN0YXJ0IiwiUG9pbnQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJhZGQiLCJ2aWV3IiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=