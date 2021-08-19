"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[826],{

/***/ 243:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(717);
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(638);
/** @format */



window.onload = function () {
  console.log($('#canv').text()); // Get a reference to the canvas object

  var canvas = document.getElementById('canv'); // Create an empty project and a view for the canvas:

  paper__WEBPACK_IMPORTED_MODULE_0___default().setup(canvas); // Create a Paper.js Path to draw a line into it:

  var path = new (paper__WEBPACK_IMPORTED_MODULE_0___default().Path)(); // Give the stroke a color

  path.strokeColor = 'black';
  var start = new (paper__WEBPACK_IMPORTED_MODULE_0___default().Point)(100, 100); // Move to start and draw a line from there

  path.moveTo(start); // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:

  path.lineTo(start.add([200, -50])); // Draw the view now:

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzkzMTFlMThlMGEyYTA0ZGQ2MjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV0MsSUFBWCxFQUFaLEVBRDBCLENBRTFCOztBQUNBLE1BQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWIsQ0FIMEIsQ0FJMUI7O0FBQ0FULEVBQUFBLGtEQUFBLENBQVlPLE1BQVosRUFMMEIsQ0FNMUI7O0FBQ0EsTUFBSUksSUFBSSxHQUFHLElBQUlYLG1EQUFKLEVBQVgsQ0FQMEIsQ0FRMUI7O0FBQ0FXLEVBQUFBLElBQUksQ0FBQ0UsV0FBTCxHQUFtQixPQUFuQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFJZCxvREFBSixDQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUFaLENBVjBCLENBVzFCOztBQUNBVyxFQUFBQSxJQUFJLENBQUNLLE1BQUwsQ0FBWUYsS0FBWixFQVowQixDQWExQjtBQUNBOztBQUNBSCxFQUFBQSxJQUFJLENBQUNNLE1BQUwsQ0FBWUgsS0FBSyxDQUFDSSxHQUFOLENBQVUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxFQUFQLENBQVYsQ0FBWixFQWYwQixDQWdCMUI7O0FBQ0FsQixFQUFBQSxzREFBQTtBQUNELENBbEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHBhcGVyIGZyb20gJ3BhcGVyJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJCgnI2NhbnYnKS50ZXh0KCkpO1xuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGNhbnZhcyBvYmplY3RcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52Jyk7XG4gIC8vIENyZWF0ZSBhbiBlbXB0eSBwcm9qZWN0IGFuZCBhIHZpZXcgZm9yIHRoZSBjYW52YXM6XG4gIHBhcGVyLnNldHVwKGNhbnZhcyk7XG4gIC8vIENyZWF0ZSBhIFBhcGVyLmpzIFBhdGggdG8gZHJhdyBhIGxpbmUgaW50byBpdDpcbiAgdmFyIHBhdGggPSBuZXcgcGFwZXIuUGF0aCgpO1xuICAvLyBHaXZlIHRoZSBzdHJva2UgYSBjb2xvclxuICBwYXRoLnN0cm9rZUNvbG9yID0gJ2JsYWNrJztcbiAgdmFyIHN0YXJ0ID0gbmV3IHBhcGVyLlBvaW50KDEwMCwgMTAwKTtcbiAgLy8gTW92ZSB0byBzdGFydCBhbmQgZHJhdyBhIGxpbmUgZnJvbSB0aGVyZVxuICBwYXRoLm1vdmVUbyhzdGFydCk7XG4gIC8vIE5vdGUgdGhhdCB0aGUgcGx1cyBvcGVyYXRvciBvbiBQb2ludCBvYmplY3RzIGRvZXMgbm90IHdvcmtcbiAgLy8gaW4gSmF2YVNjcmlwdC4gSW5zdGVhZCwgd2UgbmVlZCB0byBjYWxsIHRoZSBhZGQoKSBmdW5jdGlvbjpcbiAgcGF0aC5saW5lVG8oc3RhcnQuYWRkKFsyMDAsIC01MF0pKTtcbiAgLy8gRHJhdyB0aGUgdmlldyBub3c6XG4gIHBhcGVyLnZpZXcuZHJhdygpO1xufTtcbiJdLCJuYW1lcyI6WyJwYXBlciIsIndpbmRvdyIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCIkIiwidGV4dCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXR1cCIsInBhdGgiLCJQYXRoIiwic3Ryb2tlQ29sb3IiLCJzdGFydCIsIlBvaW50IiwibW92ZVRvIiwibGluZVRvIiwiYWRkIiwidmlldyIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9