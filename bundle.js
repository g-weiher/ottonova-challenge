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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appointments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointments.js */ \"./src/js/appointments.js\");\n\nvar form = document.getElementById(\"appointment-form\");\nvar dateSelect = document.getElementById(\"date-selection\");\nvar timeSelect = document.getElementById(\"time-selection\");\nvar loadingOverlay = document.getElementById(\"loading-overlay\");\nvar dateLabel = document.getElementById(\"date-label\");\n\nvar createRadioButton = function createRadioButton(name, value, text) {\n  var checked = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  // create wrapping label\n  var label = document.createElement(\"label\");\n  label.className = \"select-option\"; //create radio input\n\n  var input = document.createElement(\"input\");\n  input.type = \"radio\";\n  input.name = name;\n  input.value = value;\n  if (checked) input.checked = \"checked\"; //create visual content\n\n  var content = document.createElement(\"div\");\n  content.className = \"select-content\";\n  content.innerText = text; //append notes\n\n  label.append(input, content);\n  return label;\n};\n\nvar populateDates = function populateDates() {\n  var options = new DocumentFragment();\n  _appointments_js__WEBPACK_IMPORTED_MODULE_0__.default.forEach(function (appointmentDay, index) {\n    var radioButton = createRadioButton(\"date\", index, appointmentDay.date, index === 0 ? true : false);\n    options.append(radioButton);\n  });\n  dateSelect.append(options);\n};\n\nvar populateTimes = function populateTimes(index) {\n  var skipAnimation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  // toggle opacity class for fade-in effect\n  if (!skipAnimation) timeSelect.classList.toggle(\"loading\");\n  var options = new DocumentFragment();\n  _appointments_js__WEBPACK_IMPORTED_MODULE_0__.default[index].appointments.forEach(function (appointmentTime, index) {\n    var radioButton = createRadioButton(\"time\", appointmentTime.value, appointmentTime.label, index === 0 ? true : false);\n    timeSelect.innerHTML = \"\";\n    options.append(radioButton);\n  });\n  timeSelect.append(options);\n\n  if (!skipAnimation) {\n    //make sure previous changes were rendered before toggling animation class\n    var tryToggleLoading = function tryToggleLoading() {\n      if (window.getComputedStyle(timeSelect).opacity === \"1\") {\n        window.requestAnimationFrame(tryToggleLoading);\n      } else {\n        timeSelect.classList.toggle(\"loading\");\n      }\n    };\n\n    window.requestAnimationFrame(tryToggleLoading);\n  }\n};\n\nvar onSubmit = function onSubmit() {\n  loadingOverlay.classList.remove(\"hidden\");\n  setTimeout(function () {\n    window.location.href = 'thankyou.html';\n    loadingOverlay.classList.add(\"hidden\");\n  }, 1000);\n};\n\nform.addEventListener(\"submit\", function (ev) {\n  ev.preventDefault();\n  onSubmit();\n});\n\nvar onTimeSelect = function onTimeSelect(dateSring) {\n  var date = new Date(dateSring);\n  dateLabel.innerText = \"Your appointment is at \".concat(date.toLocaleString());\n};\n\ndateSelect.addEventListener(\"change\", function (ev) {\n  populateTimes(ev.target.value);\n  onTimeSelect(_appointments_js__WEBPACK_IMPORTED_MODULE_0__.default[ev.target.value].appointments[0].value);\n});\ntimeSelect.addEventListener(\"change\", function (ev) {\n  onTimeSelect(ev.target.value);\n});\npopulateDates();\npopulateTimes(0, true);\nonTimeSelect(_appointments_js__WEBPACK_IMPORTED_MODULE_0__.default[0].appointments[0].value);\n\n//# sourceURL=webpack://ottonova-challenge/./src/js/app.js?");

/***/ }),

/***/ "./src/js/appointments.js":
/*!********************************!*\
  !*** ./src/js/appointments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dates_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates.json */ \"./src/js/dates.json\");\n\n\nvar parseAppointments = function parseAppointments(appointments) {\n  var outputData = [];\n  appointments.forEach(function (appointment) {\n    var currentDate = new Date(appointment.start);\n    if (!currentDate) return;\n    var currentDateString = currentDate.toLocaleDateString();\n    var currentTimeString = currentDate.toLocaleTimeString([], {\n      timeStyle: 'short'\n    });\n    var lastDateEntry = outputData[outputData.length - 1];\n\n    if (lastDateEntry && lastDateEntry.date === currentDateString) {\n      lastDateEntry.appointments.push({\n        label: currentTimeString,\n        value: appointment.start\n      });\n    } else {\n      outputData.push({\n        date: currentDateString,\n        appointments: [{\n          label: currentTimeString,\n          value: appointment.start\n        }]\n      });\n    }\n  });\n  return outputData;\n};\n\nvar appointments = parseAppointments(_dates_json__WEBPACK_IMPORTED_MODULE_0__.result);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appointments);\n\n//# sourceURL=webpack://ottonova-challenge/./src/js/appointments.js?");

/***/ }),

/***/ "./src/js/dates.json":
/*!***************************!*\
  !*** ./src/js/dates.json ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"result\":[{\"start\":\"2019-11-14T14:00:00+01:00\",\"end\":\"2019-11-14T14:30:00+01:00\"},{\"start\":\"2019-11-14T14:30:00+01:00\",\"end\":\"2019-11-14T15:00:00+01:00\"},{\"start\":\"2019-11-14T15:00:00+01:00\",\"end\":\"2019-11-14T15:30:00+01:00\"},{\"start\":\"2019-11-14T15:30:00+01:00\",\"end\":\"2019-11-14T16:00:00+01:00\"},{\"start\":\"2019-11-14T16:00:00+01:00\",\"end\":\"2019-11-14T16:30:00+01:00\"},{\"start\":\"2019-11-15T10:00:00+01:00\",\"end\":\"2019-11-15T10:30:00+01:00\"},{\"start\":\"2019-11-15T10:30:00+01:00\",\"end\":\"2019-11-15T11:00:00+01:00\"},{\"start\":\"2019-11-15T11:00:00+01:00\",\"end\":\"2019-11-15T11:30:00+01:00\"},{\"start\":\"2019-11-15T11:30:00+01:00\",\"end\":\"2019-11-15T12:00:00+01:00\"},{\"start\":\"2019-11-15T13:00:00+01:00\",\"end\":\"2019-11-15T13:30:00+01:00\"},{\"start\":\"2019-11-15T13:30:00+01:00\",\"end\":\"2019-11-15T14:00:00+01:00\"},{\"start\":\"2019-11-15T14:00:00+01:00\",\"end\":\"2019-11-15T14:30:00+01:00\"},{\"start\":\"2019-11-15T14:30:00+01:00\",\"end\":\"2019-11-15T15:00:00+01:00\"},{\"start\":\"2019-11-15T15:00:00+01:00\",\"end\":\"2019-11-15T15:30:00+01:00\"},{\"start\":\"2019-11-15T15:30:00+01:00\",\"end\":\"2019-11-15T16:00:00+01:00\"},{\"start\":\"2019-11-15T16:00:00+01:00\",\"end\":\"2019-11-15T16:30:00+01:00\"},{\"start\":\"2019-11-15T16:30:00+01:00\",\"end\":\"2019-11-15T17:00:00+01:00\"},{\"start\":\"2019-11-15T18:00:00+01:00\",\"end\":\"2019-11-15T18:30:00+01:00\"},{\"start\":\"2019-11-15T18:30:00+01:00\",\"end\":\"2019-11-15T19:00:00+01:00\"},{\"start\":\"2019-11-18T08:30:00+01:00\",\"end\":\"2019-11-18T09:00:00+01:00\"},{\"start\":\"2019-11-18T10:00:00+01:00\",\"end\":\"2019-11-18T10:30:00+01:00\"},{\"start\":\"2019-11-18T10:30:00+01:00\",\"end\":\"2019-11-18T11:00:00+01:00\"},{\"start\":\"2019-11-18T11:00:00+01:00\",\"end\":\"2019-11-18T11:30:00+01:00\"},{\"start\":\"2019-11-18T11:30:00+01:00\",\"end\":\"2019-11-18T12:00:00+01:00\"},{\"start\":\"2019-11-18T13:00:00+01:00\",\"end\":\"2019-11-18T13:30:00+01:00\"},{\"start\":\"2019-11-18T13:30:00+01:00\",\"end\":\"2019-11-18T14:00:00+01:00\"},{\"start\":\"2019-11-18T14:00:00+01:00\",\"end\":\"2019-11-18T14:30:00+01:00\"},{\"start\":\"2019-11-18T14:30:00+01:00\",\"end\":\"2019-11-18T15:00:00+01:00\"},{\"start\":\"2019-11-18T15:00:00+01:00\",\"end\":\"2019-11-18T15:30:00+01:00\"},{\"start\":\"2019-11-18T15:30:00+01:00\",\"end\":\"2019-11-18T16:00:00+01:00\"},{\"start\":\"2019-11-18T16:00:00+01:00\",\"end\":\"2019-11-18T16:30:00+01:00\"},{\"start\":\"2019-11-18T16:30:00+01:00\",\"end\":\"2019-11-18T17:00:00+01:00\"},{\"start\":\"2019-11-18T17:00:00+01:00\",\"end\":\"2019-11-18T17:30:00+01:00\"},{\"start\":\"2019-11-18T17:30:00+01:00\",\"end\":\"2019-11-18T18:00:00+01:00\"},{\"start\":\"2019-11-19T10:00:00+01:00\",\"end\":\"2019-11-19T10:30:00+01:00\"},{\"start\":\"2019-11-19T10:30:00+01:00\",\"end\":\"2019-11-19T11:00:00+01:00\"},{\"start\":\"2019-11-19T11:00:00+01:00\",\"end\":\"2019-11-19T11:30:00+01:00\"},{\"start\":\"2019-11-19T11:30:00+01:00\",\"end\":\"2019-11-19T12:00:00+01:00\"},{\"start\":\"2019-11-19T13:00:00+01:00\",\"end\":\"2019-11-19T13:30:00+01:00\"},{\"start\":\"2019-11-19T13:30:00+01:00\",\"end\":\"2019-11-19T14:00:00+01:00\"},{\"start\":\"2019-11-19T14:00:00+01:00\",\"end\":\"2019-11-19T14:30:00+01:00\"},{\"start\":\"2019-11-19T14:30:00+01:00\",\"end\":\"2019-11-19T15:00:00+01:00\"},{\"start\":\"2019-11-19T15:00:00+01:00\",\"end\":\"2019-11-19T15:30:00+01:00\"},{\"start\":\"2019-11-19T15:30:00+01:00\",\"end\":\"2019-11-19T16:00:00+01:00\"},{\"start\":\"2019-11-19T16:00:00+01:00\",\"end\":\"2019-11-19T16:30:00+01:00\"},{\"start\":\"2019-11-19T16:30:00+01:00\",\"end\":\"2019-11-19T17:00:00+01:00\"},{\"start\":\"2019-11-19T17:30:00+01:00\",\"end\":\"2019-11-19T18:00:00+01:00\"},{\"start\":\"2019-11-20T10:00:00+01:00\",\"end\":\"2019-11-20T10:30:00+01:00\"},{\"start\":\"2019-11-20T10:30:00+01:00\",\"end\":\"2019-11-20T11:00:00+01:00\"},{\"start\":\"2019-11-20T11:00:00+01:00\",\"end\":\"2019-11-20T11:30:00+01:00\"},{\"start\":\"2019-11-20T11:30:00+01:00\",\"end\":\"2019-11-20T12:00:00+01:00\"},{\"start\":\"2019-11-20T13:00:00+01:00\",\"end\":\"2019-11-20T13:30:00+01:00\"},{\"start\":\"2019-11-20T13:30:00+01:00\",\"end\":\"2019-11-20T14:00:00+01:00\"},{\"start\":\"2019-11-20T14:00:00+01:00\",\"end\":\"2019-11-20T14:30:00+01:00\"},{\"start\":\"2019-11-20T14:30:00+01:00\",\"end\":\"2019-11-20T15:00:00+01:00\"},{\"start\":\"2019-11-20T15:00:00+01:00\",\"end\":\"2019-11-20T15:30:00+01:00\"},{\"start\":\"2019-11-20T15:30:00+01:00\",\"end\":\"2019-11-20T16:00:00+01:00\"},{\"start\":\"2019-11-20T16:00:00+01:00\",\"end\":\"2019-11-20T16:30:00+01:00\"},{\"start\":\"2019-11-20T16:30:00+01:00\",\"end\":\"2019-11-20T17:00:00+01:00\"},{\"start\":\"2019-11-21T08:30:00+01:00\",\"end\":\"2019-11-21T09:00:00+01:00\"},{\"start\":\"2019-11-21T09:00:00+01:00\",\"end\":\"2019-11-21T09:30:00+01:00\"},{\"start\":\"2019-11-21T09:30:00+01:00\",\"end\":\"2019-11-21T10:00:00+01:00\"},{\"start\":\"2019-11-21T10:00:00+01:00\",\"end\":\"2019-11-21T10:30:00+01:00\"},{\"start\":\"2019-11-21T10:30:00+01:00\",\"end\":\"2019-11-21T11:00:00+01:00\"},{\"start\":\"2019-11-21T11:00:00+01:00\",\"end\":\"2019-11-21T11:30:00+01:00\"},{\"start\":\"2019-11-21T11:30:00+01:00\",\"end\":\"2019-11-21T12:00:00+01:00\"},{\"start\":\"2019-11-21T13:00:00+01:00\",\"end\":\"2019-11-21T13:30:00+01:00\"},{\"start\":\"2019-11-21T13:30:00+01:00\",\"end\":\"2019-11-21T14:00:00+01:00\"},{\"start\":\"2019-11-21T14:00:00+01:00\",\"end\":\"2019-11-21T14:30:00+01:00\"},{\"start\":\"2019-11-21T14:30:00+01:00\",\"end\":\"2019-11-21T15:00:00+01:00\"},{\"start\":\"2019-11-21T15:00:00+01:00\",\"end\":\"2019-11-21T15:30:00+01:00\"},{\"start\":\"2019-11-21T15:30:00+01:00\",\"end\":\"2019-11-21T16:00:00+01:00\"},{\"start\":\"2019-11-21T16:00:00+01:00\",\"end\":\"2019-11-21T16:30:00+01:00\"},{\"start\":\"2019-11-21T16:30:00+01:00\",\"end\":\"2019-11-21T17:00:00+01:00\"},{\"start\":\"2019-11-21T17:00:00+01:00\",\"end\":\"2019-11-21T17:30:00+01:00\"},{\"start\":\"2019-11-21T17:30:00+01:00\",\"end\":\"2019-11-21T18:00:00+01:00\"}]}');\n\n//# sourceURL=webpack://ottonova-challenge/./src/js/dates.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;