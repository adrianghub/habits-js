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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const timerDisplay = document.querySelector('.display__time-left');\r\nconst endTime = document.querySelector('.display__end-time');\r\nconst buttons = document.querySelectorAll('[data-time]');\r\n\r\nlet countdown;\r\n\r\nfunction timer(seconds) {\r\n    // clear any existing timers\r\n    clearInterval(countdown);\r\n    now = Date.now();\r\n    then = now + (seconds * 1000);\r\n    displayTimeLeft(seconds);\r\n    displayEndTime(then);\r\n\r\n\r\n\r\n    countdown = setInterval(() => {\r\n        let secondsLeft = Math.round((then - Date.now()) / 1000);\r\n\r\n        // check if it should stop\r\n        if(secondsLeft < 0) {\r\n            clearInterval(countdown);\r\n            return;\r\n        }\r\n\r\n        // display timer\r\n        displayTimeLeft(secondsLeft);\r\n    }, 1000)\r\n}\r\n\r\nfunction displayTimeLeft(seconds) {\r\n    const minutes = Math.floor(seconds / 60);\r\n    const hours = Math.floor(minutes / 60);\r\n    const remainderMinutes = minutes % 60;\r\n    const remainderSeconds = seconds % 60;\r\n    let display = `${minutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;\r\n    minutes >= 60 ? \r\n    display = `${hours}:${remainderMinutes < 10 ? 0 : ''}${remainderMinutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`\r\n    : display;\r\n    document.title = display;\r\n    timerDisplay.textContent = display;\r\n}\r\n\r\nfunction displayEndTime(timestamp) {\r\n    const end = new Date(timestamp);\r\n    const hour = end.getHours();\r\n    const minutes = end.getMinutes();\r\n    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? 0 : ''}${minutes}`;\r\n}\r\n\r\nfunction startTimer() {\r\n    timer(this.dataset.time);\r\n}\r\n\r\n\r\nfunction random(property) {\r\n    return property[Math.floor(Math.random() * property.length)];\r\n}\r\n\r\nconst shape = ['circle', 'ellipse'];\r\n\r\nconst position = ['top', 'center', 'bottom', 'left', 'right'];\r\n\r\nfunction randomBg() {\r\n\r\n        const firstColor = {\r\n            r: Math.round(Math.random() * 255),\r\n            g: Math.round(Math.random() * 255),\r\n            b: Math.round(Math.random() * 255)\r\n        };\r\n        \r\n        const secondColor = {\r\n            r: Math.round(Math.random() * 255),\r\n            g: Math.round(Math.random() * 255),\r\n            b: Math.round(Math.random() * 255)\r\n        };\r\n        \r\n        firstColor.rgb = `rgb(${firstColor.r}, ${firstColor.g}, ${firstColor.b})`;\r\n        secondColor.rgb = `rgb(${secondColor.r}, ${secondColor.g}, ${secondColor.b})`;\r\n        \r\n        let randomBackground = `background: radial-gradient(${random(shape)} at ${random(position)}, ${firstColor.rgb}, ${secondColor.rgb})`;\r\n\r\n        document.body.classList.add('color-animation');\r\n        \r\n        document.body.style = randomBackground;\r\n        \r\n}\r\n\r\n\r\nbuttons.forEach(button => button.addEventListener('click', startTimer));\r\nbuttons.forEach(button => button.addEventListener('click', randomBg));\r\n\r\n\r\n\r\n\r\ndocument.customForm.addEventListener('submit', function(e) {\r\ne.preventDefault();\r\nconst mins = this.minutes.value;\r\ntimer(mins * 60);\r\nthis.reset();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });