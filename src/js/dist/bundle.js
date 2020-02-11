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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/Bird.js":
/*!********************************!*\
  !*** ./src/js/classes/Bird.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bird; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/js/classes/GameObject.js");


class Bird extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, images, riseCoefficient, fallCoefficient, fallLimit) {
        super(x, y, images[1]);

        this.riseCoefficient = riseCoefficient;
        this.fallCoefficient = fallCoefficient;

        this.fallLimit = fallLimit;

        this.images = images;

        this.isJumping = false;
        this.isFalling = false;

        this.riseCount = 10;
        this.fallCount = 0;

        this.animationCount = 0;
    }

    jump() {
        this.isJumping = true;
        this.isFalling = false;
        this.fallCount = 0;
        this.riseCount = 10;
    }

    rise() {
        if (this.riseCount < 0) {
            return;
        }

        this.y -= this.riseCount * this.riseCoefficient;
        this.riseCount--;

        if (this.riseCount <= 0) {
            this.isJumping = false;
            this.isFalling = true;
        }
    }

    fall() {
        let fallValue = this.fallCount * this.fallCount * .9;

        if (fallValue > this.fallLimit) {
            fallValue = this.fallLimit;
        }

        this.y += fallValue;

        this.fallCount += this.fallCoefficient;
    }
}


/***/ }),

/***/ "./src/js/classes/Canvas.js":
/*!**********************************!*\
  !*** ./src/js/classes/Canvas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
class Canvas {
    constructor(elementId, width, height) {
        this.element = document.querySelector('#' + elementId);
        this.element.width = width;
        this.element.height = height;

        this.width = width;
        this.height = height;

        this.ctx = this.element.getContext('2d');
    }
}


/***/ }),

/***/ "./src/js/classes/Game.js":
/*!********************************!*\
  !*** ./src/js/classes/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
class Game {
    constructor() {
        this.score = 0;
        this.started = false;
        this.end = false;
    }

    static get bestScore() {
        let bestScore = localStorage.getItem('bestScore');

        if (bestScore === null) {
            bestScore = 0;
        }

        return bestScore;
    }

    static set bestScore(score) {
        localStorage.setItem('bestScore', score);
    }
}


/***/ }),

/***/ "./src/js/classes/GameImage.js":
/*!*************************************!*\
  !*** ./src/js/classes/GameImage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameImage; });
class GameImage extends Image {
    constructor(src, width, height) {
        super(width, height);
        this.src = src;
    }
}


/***/ }),

/***/ "./src/js/classes/GameObject.js":
/*!**************************************!*\
  !*** ./src/js/classes/GameObject.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
class GameObject {
    constructor(x = 0, y = 0, image = null) {
        this.x = x;
        this.y = y;

        this.image = image || new Image();
    }

    get width() {
        return this.image.width;
    }

    get height() {
        return this.image.height;
    }

    get x2() {
        return this.x + this.width;
    }

    get y2() {
        return this.y + this.height;
    }

    intersectsWith(gameObject) {
        if (!(gameObject instanceof GameObject)) {
            throw new Error('Object must be instance of GameObject class');
        }

        return this.x < gameObject.x2 && this.x2 > gameObject.x && this.y < gameObject.y2 && this.y2 > gameObject.y;
    }
}


/***/ }),

/***/ "./src/js/classes/Ground.js":
/*!**********************************!*\
  !*** ./src/js/classes/Ground.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ground; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/js/classes/GameObject.js");


class Ground extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]{}


/***/ }),

/***/ "./src/js/classes/Pipe.js":
/*!********************************!*\
  !*** ./src/js/classes/Pipe.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pipe; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/js/classes/GameObject.js");


class Pipe extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {}


/***/ }),

/***/ "./src/js/classes/PipesPair.js":
/*!*************************************!*\
  !*** ./src/js/classes/PipesPair.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PipesPair; });
class PipesPair {
    constructor(topPipe, bottomPipe, x, image, speed, passed) {
        this.topPipe = topPipe;
        this.bottomPipe = bottomPipe;

        this.x = x;

        this.image = image;

        this.speed = speed;

        this.passed = passed;
    }

    move() {
        this.x -= this.speed;

        this.topPipe.x -= this.speed;
        this.bottomPipe.x -= this.speed;
    }
}


/***/ }),

/***/ "./src/js/classes/PipesPairFactory.js":
/*!********************************************!*\
  !*** ./src/js/classes/PipesPairFactory.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PipesPairFactory; });
/* harmony import */ var _Pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipe */ "./src/js/classes/Pipe.js");
/* harmony import */ var _PipesPair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PipesPair */ "./src/js/classes/PipesPair.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions.js */ "./src/js/functions.js");




class PipesPairFactory {
    constructor(extraHeight, spaceBetween, offset, speed, image, canvasHeight) {
        this.extraHeight = extraHeight;
        this.spaceBetween = spaceBetween;
        this.offset = offset;

        this.speed = speed;

        this.image = image;

        this.canvasHeight = canvasHeight;
    }

    get width() {
        return this.image.width;
    }

    get height() {
        return this.image.height;
    }

    create(x) {
        let offset = Object(_functions_js__WEBPACK_IMPORTED_MODULE_2__["random"])(this.offset[0], this.offset[1]);

        return new _PipesPair__WEBPACK_IMPORTED_MODULE_1__["default"](
            new _Pipe__WEBPACK_IMPORTED_MODULE_0__["default"](x, -this.spaceBetween - offset - this.extraHeight, this.image),
            new _Pipe__WEBPACK_IMPORTED_MODULE_0__["default"](x, this.canvasHeight / 2 - offset, this.image),
            x,
            this.image,
            this.speed,
            false
        );
    }
}


/***/ }),

/***/ "./src/js/classes/View.js":
/*!********************************!*\
  !*** ./src/js/classes/View.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
class View {
    constructor(canvas) {
        this.canvas = canvas;
    }

    renderObject(obj) {
        this.renderImage(obj.image, obj.x, obj.y);
    }

    renderImage(image, x, y) {
        this.canvas.ctx.drawImage(image, x, y);
    }

    renderText(text, x, y, fontSize, fontFamily, align, fillColor = null, strokeColor = null) {
        let ctx = this.canvas.ctx;

        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.font = fontSize + ' ' + fontFamily;
        ctx.textAlign = align;

        if (fillColor !== null) {
            ctx.fillText(text, x, y);
        }

        if (strokeColor !== null) {
            ctx.strokeText(text, x, y);
        }
    }

    renderBird(bird, state) {
        if (state === 0) {
            state = 1;
        }
        
        this.canvas.ctx.drawImage(bird.images[state - 1], bird.x, bird.y);
    }

    renderPipes(pipes) {
        this.renderImage(pipes.image, pipes.x, pipes.topPipe.y);
        this.renderImage(pipes.image, pipes.x, pipes.bottomPipe.y);
    }
}


/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! exports provided: random, randomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomElement", function() { return randomElement; });
function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function randomElement(array) {
    return array[random(0, array.length - 1)];
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_GameImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/GameImage */ "./src/js/classes/GameImage.js");
/* harmony import */ var _classes_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Canvas */ "./src/js/classes/Canvas.js");
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Game */ "./src/js/classes/Game.js");
/* harmony import */ var _classes_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/View */ "./src/js/classes/View.js");
/* harmony import */ var _classes_Bird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Bird */ "./src/js/classes/Bird.js");
/* harmony import */ var _classes_PipesPairFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/PipesPairFactory */ "./src/js/classes/PipesPairFactory.js");
/* harmony import */ var _classes_Ground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/Ground */ "./src/js/classes/Ground.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");









const birdColors = ['blue', 'red', 'yellow'],
    backgrounds = ['src/img/background-day.png', 'src/img/background-night.png'];

let backgroundImg = new _classes_GameImage__WEBPACK_IMPORTED_MODULE_0__["default"](Object(_functions__WEBPACK_IMPORTED_MODULE_7__["randomElement"])(backgrounds)),
    tapImg = new _classes_GameImage__WEBPACK_IMPORTED_MODULE_0__["default"]('src/img/tap.png'),
    pipeImg = new _classes_GameImage__WEBPACK_IMPORTED_MODULE_0__["default"]('src/img/pipe-green.png'),
    groundImg = new _classes_GameImage__WEBPACK_IMPORTED_MODULE_0__["default"]('src/img/ground.png'),
    gameOverImg = new _classes_GameImage__WEBPACK_IMPORTED_MODULE_0__["default"]('src/img/gameover.png');

let birdStates = [], birdColor = Object(_functions__WEBPACK_IMPORTED_MODULE_7__["randomElement"])(birdColors);
for (let i = 0; i < 3; i++) {
    birdStates[i] = new Image();
    birdStates[i].src = `src/img/${birdColor}bird-${i + 1}.png`;
}

let newScoreSound = new Audio('src/sounds/score.mp3'),
    hitSound = new Audio('src/sounds/hit.mp3'),
    dieSound = new Audio('src/sounds/die.mp3');

let canvas = new _classes_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]('canvas', 288, 450),
    game = new _classes_Game__WEBPACK_IMPORTED_MODULE_2__["default"](),
    view = new _classes_View__WEBPACK_IMPORTED_MODULE_3__["default"](canvas),
    bird = new _classes_Bird__WEBPACK_IMPORTED_MODULE_4__["default"](60, 200, birdStates, .9, .1, 10),
    ground = new _classes_Ground__WEBPACK_IMPORTED_MODULE_6__["default"](0, 375, groundImg),
    pipesFactory = new _classes_PipesPairFactory__WEBPACK_IMPORTED_MODULE_5__["default"](200, 100, [-100, 60], 1.8, pipeImg, canvas.height),
    pipes = [];

function frame() {
    // Creates first pipes
    if (game.started && pipes.length === 0) {
        pipes.push(pipesFactory.create(445));
    }

    if (!game.end) {
        if (bird.isJumping) {
            bird.rise();
        }

        if (bird.isFalling) {
            bird.fall();
        }

        bird.animationCount++;

        if (bird.animationCount > 15) {
            bird.animationCount = 0;
        }

        // Manipulation with pipes
        if (pipes.length !== 0) {
            pipes.forEach(pipesPair => pipesPair.move());

            // Removes pipes if they don't need to render
            let closestPipes = pipes.shift();
            if (closestPipes.x >= -pipesFactory.width) {
                pipes.unshift(closestPipes);
            }

            // Checking for bird passed pipes
            if (bird.x > closestPipes.x + pipesFactory.width && !closestPipes.passed) {
                closestPipes.passed = true;

                newScoreSound.play();
                game.score++;
            }

            // Creates new pipes pair
            let furtherPipes = pipes[pipes.length - 1];
            if (furtherPipes.x < canvas.width / 2 - 15) {
                pipes.push(pipesFactory.create(canvas.width));
            }

            // Checking for has collision with pipes
            if (!closestPipes.passed && (bird.intersectsWith(closestPipes.topPipe) || bird.intersectsWith(closestPipes.bottomPipe))) {
                end();
                setTimeout(() => dieSound.play(), 200);
            }
        }

        // Checking for has collision with ground
        if (bird.intersectsWith(ground)) {
            end();
        }
    } else {
        // Game over

        bird.y += bird.fallLimit;

        // Checking for ground collision
        if (bird.y + bird.height >= ground.y) {
            bird.y = ground.y - bird.height;
        }
    }

    render();
    requestAnimationFrame(frame);
}

function render() {
    view.renderImage(backgroundImg, 0, -25);
    pipes.forEach(pipesPair => view.renderPipes(pipesPair));

    view.renderObject(ground);

    view.renderBird(bird, Math.ceil(bird.animationCount / 5));

    if (game.started) {
        view.renderText(
            game.score,
            canvas.width / 2,
            50,
            '42px',
            'Arial',
            'center',
            'white',
        );
    }

    if (!game.started) {
        view.renderImage(tapImg, canvas.width / 2 - (tapImg.width / 2), 230);
    }

    if (game.end) {
        view.renderImage(
            gameOverImg,
            canvas.width / 2 - (gameOverImg.width / 2),
            canvas.height / 2 - gameOverImg.height - 50
        );
    }
}

function end() {
    game.end = true;

    bird.isJumping = false;
    bird.animationCount = 6;

    if (game.score > _classes_Game__WEBPACK_IMPORTED_MODULE_2__["default"].bestScore) {
        _classes_Game__WEBPACK_IMPORTED_MODULE_2__["default"].bestScore = game.score;
    }

    hitSound.play();
}

function jump() {
    if (game.end) {
        return;
    }

    game.started = true;

    if (bird.y < -bird.height) {
        return;
    }

    bird.jump();

    let flySound = new Audio('src/sounds/fly.mp3');
    flySound.play();
}

document.addEventListener('keydown', e => {
    if ([38, 87, 32, 13].indexOf(e.keyCode) !== -1) {
        jump();
    }
});

document.addEventListener('click', e => {
    e.preventDefault();
    jump();
});

requestAnimationFrame(frame);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQmlyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9HYW1lSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvUGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9QaXBlc1BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvUGlwZXNQYWlyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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O0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsdURBQU07QUFDdkIsZUFBZSxxREFBSTtBQUNuQixlQUFlLHFEQUFJO0FBQ25CLGVBQWUscURBQUk7QUFDbkIsaUJBQWlCLHVEQUFNO0FBQ3ZCLHVCQUF1QixpRUFBZ0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixxREFBSTtBQUN6QixRQUFRLHFEQUFJO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlyZCBleHRlbmRzIEdhbWVPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGltYWdlcywgcmlzZUNvZWZmaWNpZW50LCBmYWxsQ29lZmZpY2llbnQsIGZhbGxMaW1pdCkge1xuICAgICAgICBzdXBlcih4LCB5LCBpbWFnZXNbMV0pO1xuXG4gICAgICAgIHRoaXMucmlzZUNvZWZmaWNpZW50ID0gcmlzZUNvZWZmaWNpZW50O1xuICAgICAgICB0aGlzLmZhbGxDb2VmZmljaWVudCA9IGZhbGxDb2VmZmljaWVudDtcblxuICAgICAgICB0aGlzLmZhbGxMaW1pdCA9IGZhbGxMaW1pdDtcblxuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcblxuICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRmFsbGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucmlzZUNvdW50ID0gMTA7XG4gICAgICAgIHRoaXMuZmFsbENvdW50ID0gMDtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFsbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5yaXNlQ291bnQgPSAxMDtcbiAgICB9XG5cbiAgICByaXNlKCkge1xuICAgICAgICBpZiAodGhpcy5yaXNlQ291bnQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnkgLT0gdGhpcy5yaXNlQ291bnQgKiB0aGlzLnJpc2VDb2VmZmljaWVudDtcbiAgICAgICAgdGhpcy5yaXNlQ291bnQtLTtcblxuICAgICAgICBpZiAodGhpcy5yaXNlQ291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhbGwoKSB7XG4gICAgICAgIGxldCBmYWxsVmFsdWUgPSB0aGlzLmZhbGxDb3VudCAqIHRoaXMuZmFsbENvdW50ICogLjk7XG5cbiAgICAgICAgaWYgKGZhbGxWYWx1ZSA+IHRoaXMuZmFsbExpbWl0KSB7XG4gICAgICAgICAgICBmYWxsVmFsdWUgPSB0aGlzLmZhbGxMaW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSArPSBmYWxsVmFsdWU7XG5cbiAgICAgICAgdGhpcy5mYWxsQ291bnQgKz0gdGhpcy5mYWxsQ29lZmZpY2llbnQ7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50SWQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBlbGVtZW50SWQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGJlc3RTY29yZSgpIHtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZXN0U2NvcmUnKTtcblxuICAgICAgICBpZiAoYmVzdFNjb3JlID09PSBudWxsKSB7XG4gICAgICAgICAgICBiZXN0U2NvcmUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0IGJlc3RTY29yZShzY29yZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmVzdFNjb3JlJywgc2NvcmUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbWFnZSBleHRlbmRzIEltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgaW1hZ2UgPSBudWxsKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlIHx8IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCB4MigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IHkyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0c1dpdGgoZ2FtZU9iamVjdCkge1xuICAgICAgICBpZiAoIShnYW1lT2JqZWN0IGluc3RhbmNlb2YgR2FtZU9iamVjdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IG11c3QgYmUgaW5zdGFuY2Ugb2YgR2FtZU9iamVjdCBjbGFzcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMueCA8IGdhbWVPYmplY3QueDIgJiYgdGhpcy54MiA+IGdhbWVPYmplY3QueCAmJiB0aGlzLnkgPCBnYW1lT2JqZWN0LnkyICYmIHRoaXMueTIgPiBnYW1lT2JqZWN0Lnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kIGV4dGVuZHMgR2FtZU9iamVjdHt9XG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXBlIGV4dGVuZHMgR2FtZU9iamVjdCB7fVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlwZXNQYWlyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b3BQaXBlLCBib3R0b21QaXBlLCB4LCBpbWFnZSwgc3BlZWQsIHBhc3NlZCkge1xuICAgICAgICB0aGlzLnRvcFBpcGUgPSB0b3BQaXBlO1xuICAgICAgICB0aGlzLmJvdHRvbVBpcGUgPSBib3R0b21QaXBlO1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcblxuICAgICAgICB0aGlzLnBhc3NlZCA9IHBhc3NlZDtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcblxuICAgICAgICB0aGlzLnRvcFBpcGUueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmJvdHRvbVBpcGUueCAtPSB0aGlzLnNwZWVkO1xuICAgIH1cbn1cbiIsImltcG9ydCBQaXBlIGZyb20gJy4vUGlwZSc7XG5pbXBvcnQgUGlwZXNQYWlyIGZyb20gJy4vUGlwZXNQYWlyJztcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL2Z1bmN0aW9ucy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpcGVzUGFpckZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKGV4dHJhSGVpZ2h0LCBzcGFjZUJldHdlZW4sIG9mZnNldCwgc3BlZWQsIGltYWdlLCBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5leHRyYUhlaWdodCA9IGV4dHJhSGVpZ2h0O1xuICAgICAgICB0aGlzLnNwYWNlQmV0d2VlbiA9IHNwYWNlQmV0d2VlbjtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcblxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlLndpZHRoO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlLmhlaWdodDtcbiAgICB9XG5cbiAgICBjcmVhdGUoeCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gcmFuZG9tKHRoaXMub2Zmc2V0WzBdLCB0aGlzLm9mZnNldFsxXSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQaXBlc1BhaXIoXG4gICAgICAgICAgICBuZXcgUGlwZSh4LCAtdGhpcy5zcGFjZUJldHdlZW4gLSBvZmZzZXQgLSB0aGlzLmV4dHJhSGVpZ2h0LCB0aGlzLmltYWdlKSxcbiAgICAgICAgICAgIG5ldyBQaXBlKHgsIHRoaXMuY2FudmFzSGVpZ2h0IC8gMiAtIG9mZnNldCwgdGhpcy5pbWFnZSksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIHRoaXMuc3BlZWQsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB9XG5cbiAgICByZW5kZXJPYmplY3Qob2JqKSB7XG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2Uob2JqLmltYWdlLCBvYmoueCwgb2JqLnkpO1xuICAgIH1cblxuICAgIHJlbmRlckltYWdlKGltYWdlLCB4LCB5KSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpO1xuICAgIH1cblxuICAgIHJlbmRlclRleHQodGV4dCwgeCwgeSwgZm9udFNpemUsIGZvbnRGYW1pbHksIGFsaWduLCBmaWxsQ29sb3IgPSBudWxsLCBzdHJva2VDb2xvciA9IG51bGwpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZSArICcgJyArIGZvbnRGYW1pbHk7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBhbGlnbjtcblxuICAgICAgICBpZiAoZmlsbENvbG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3Ryb2tlQ29sb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KHRleHQsIHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQmlyZChiaXJkLCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jYW52YXMuY3R4LmRyYXdJbWFnZShiaXJkLmltYWdlc1tzdGF0ZSAtIDFdLCBiaXJkLngsIGJpcmQueSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGlwZXMocGlwZXMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZShwaXBlcy5pbWFnZSwgcGlwZXMueCwgcGlwZXMudG9wUGlwZS55KTtcbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZShwaXBlcy5pbWFnZSwgcGlwZXMueCwgcGlwZXMuYm90dG9tUGlwZS55KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21FbGVtZW50KGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W3JhbmRvbSgwLCBhcnJheS5sZW5ndGggLSAxKV07XG59XG4iLCJpbXBvcnQgR2FtZUltYWdlIGZyb20gJy4vY2xhc3Nlcy9HYW1lSW1hZ2UnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NsYXNzZXMvQ2FudmFzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vY2xhc3Nlcy9HYW1lJztcbmltcG9ydCBWaWV3IGZyb20gJy4vY2xhc3Nlcy9WaWV3JztcbmltcG9ydCBCaXJkIGZyb20gJy4vY2xhc3Nlcy9CaXJkJztcbmltcG9ydCBQaXBlc1BhaXJGYWN0b3J5IGZyb20gJy4vY2xhc3Nlcy9QaXBlc1BhaXJGYWN0b3J5JztcbmltcG9ydCBHcm91bmQgZnJvbSAnLi9jbGFzc2VzL0dyb3VuZCc7XG5pbXBvcnQgeyByYW5kb21FbGVtZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCBiaXJkQ29sb3JzID0gWydibHVlJywgJ3JlZCcsICd5ZWxsb3cnXSxcbiAgICBiYWNrZ3JvdW5kcyA9IFsnc3JjL2ltZy9iYWNrZ3JvdW5kLWRheS5wbmcnLCAnc3JjL2ltZy9iYWNrZ3JvdW5kLW5pZ2h0LnBuZyddO1xuXG5sZXQgYmFja2dyb3VuZEltZyA9IG5ldyBHYW1lSW1hZ2UocmFuZG9tRWxlbWVudChiYWNrZ3JvdW5kcykpLFxuICAgIHRhcEltZyA9IG5ldyBHYW1lSW1hZ2UoJ3NyYy9pbWcvdGFwLnBuZycpLFxuICAgIHBpcGVJbWcgPSBuZXcgR2FtZUltYWdlKCdzcmMvaW1nL3BpcGUtZ3JlZW4ucG5nJyksXG4gICAgZ3JvdW5kSW1nID0gbmV3IEdhbWVJbWFnZSgnc3JjL2ltZy9ncm91bmQucG5nJyksXG4gICAgZ2FtZU92ZXJJbWcgPSBuZXcgR2FtZUltYWdlKCdzcmMvaW1nL2dhbWVvdmVyLnBuZycpO1xuXG5sZXQgYmlyZFN0YXRlcyA9IFtdLCBiaXJkQ29sb3IgPSByYW5kb21FbGVtZW50KGJpcmRDb2xvcnMpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBiaXJkU3RhdGVzW2ldID0gbmV3IEltYWdlKCk7XG4gICAgYmlyZFN0YXRlc1tpXS5zcmMgPSBgc3JjL2ltZy8ke2JpcmRDb2xvcn1iaXJkLSR7aSArIDF9LnBuZ2A7XG59XG5cbmxldCBuZXdTY29yZVNvdW5kID0gbmV3IEF1ZGlvKCdzcmMvc291bmRzL3Njb3JlLm1wMycpLFxuICAgIGhpdFNvdW5kID0gbmV3IEF1ZGlvKCdzcmMvc291bmRzL2hpdC5tcDMnKSxcbiAgICBkaWVTb3VuZCA9IG5ldyBBdWRpbygnc3JjL3NvdW5kcy9kaWUubXAzJyk7XG5cbmxldCBjYW52YXMgPSBuZXcgQ2FudmFzKCdjYW52YXMnLCAyODgsIDQ1MCksXG4gICAgZ2FtZSA9IG5ldyBHYW1lKCksXG4gICAgdmlldyA9IG5ldyBWaWV3KGNhbnZhcyksXG4gICAgYmlyZCA9IG5ldyBCaXJkKDYwLCAyMDAsIGJpcmRTdGF0ZXMsIC45LCAuMSwgMTApLFxuICAgIGdyb3VuZCA9IG5ldyBHcm91bmQoMCwgMzc1LCBncm91bmRJbWcpLFxuICAgIHBpcGVzRmFjdG9yeSA9IG5ldyBQaXBlc1BhaXJGYWN0b3J5KDIwMCwgMTAwLCBbLTEwMCwgNjBdLCAxLjgsIHBpcGVJbWcsIGNhbnZhcy5oZWlnaHQpLFxuICAgIHBpcGVzID0gW107XG5cbmZ1bmN0aW9uIGZyYW1lKCkge1xuICAgIC8vIENyZWF0ZXMgZmlyc3QgcGlwZXNcbiAgICBpZiAoZ2FtZS5zdGFydGVkICYmIHBpcGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwaXBlcy5wdXNoKHBpcGVzRmFjdG9yeS5jcmVhdGUoNDQ1KSk7XG4gICAgfVxuXG4gICAgaWYgKCFnYW1lLmVuZCkge1xuICAgICAgICBpZiAoYmlyZC5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgIGJpcmQucmlzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpcmQuaXNGYWxsaW5nKSB7XG4gICAgICAgICAgICBiaXJkLmZhbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJpcmQuYW5pbWF0aW9uQ291bnQrKztcblxuICAgICAgICBpZiAoYmlyZC5hbmltYXRpb25Db3VudCA+IDE1KSB7XG4gICAgICAgICAgICBiaXJkLmFuaW1hdGlvbkNvdW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1hbmlwdWxhdGlvbiB3aXRoIHBpcGVzXG4gICAgICAgIGlmIChwaXBlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHBpcGVzLmZvckVhY2gocGlwZXNQYWlyID0+IHBpcGVzUGFpci5tb3ZlKCkpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmVzIHBpcGVzIGlmIHRoZXkgZG9uJ3QgbmVlZCB0byByZW5kZXJcbiAgICAgICAgICAgIGxldCBjbG9zZXN0UGlwZXMgPSBwaXBlcy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3RQaXBlcy54ID49IC1waXBlc0ZhY3Rvcnkud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBwaXBlcy51bnNoaWZ0KGNsb3Nlc3RQaXBlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNraW5nIGZvciBiaXJkIHBhc3NlZCBwaXBlc1xuICAgICAgICAgICAgaWYgKGJpcmQueCA+IGNsb3Nlc3RQaXBlcy54ICsgcGlwZXNGYWN0b3J5LndpZHRoICYmICFjbG9zZXN0UGlwZXMucGFzc2VkKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VzdFBpcGVzLnBhc3NlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBuZXdTY29yZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBnYW1lLnNjb3JlKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZXMgbmV3IHBpcGVzIHBhaXJcbiAgICAgICAgICAgIGxldCBmdXJ0aGVyUGlwZXMgPSBwaXBlc1twaXBlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChmdXJ0aGVyUGlwZXMueCA8IGNhbnZhcy53aWR0aCAvIDIgLSAxNSkge1xuICAgICAgICAgICAgICAgIHBpcGVzLnB1c2gocGlwZXNGYWN0b3J5LmNyZWF0ZShjYW52YXMud2lkdGgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2tpbmcgZm9yIGhhcyBjb2xsaXNpb24gd2l0aCBwaXBlc1xuICAgICAgICAgICAgaWYgKCFjbG9zZXN0UGlwZXMucGFzc2VkICYmIChiaXJkLmludGVyc2VjdHNXaXRoKGNsb3Nlc3RQaXBlcy50b3BQaXBlKSB8fCBiaXJkLmludGVyc2VjdHNXaXRoKGNsb3Nlc3RQaXBlcy5ib3R0b21QaXBlKSkpIHtcbiAgICAgICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpZVNvdW5kLnBsYXkoKSwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNraW5nIGZvciBoYXMgY29sbGlzaW9uIHdpdGggZ3JvdW5kXG4gICAgICAgIGlmIChiaXJkLmludGVyc2VjdHNXaXRoKGdyb3VuZCkpIHtcbiAgICAgICAgICAgIGVuZCgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gR2FtZSBvdmVyXG5cbiAgICAgICAgYmlyZC55ICs9IGJpcmQuZmFsbExpbWl0O1xuXG4gICAgICAgIC8vIENoZWNraW5nIGZvciBncm91bmQgY29sbGlzaW9uXG4gICAgICAgIGlmIChiaXJkLnkgKyBiaXJkLmhlaWdodCA+PSBncm91bmQueSkge1xuICAgICAgICAgICAgYmlyZC55ID0gZ3JvdW5kLnkgLSBiaXJkLmhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2aWV3LnJlbmRlckltYWdlKGJhY2tncm91bmRJbWcsIDAsIC0yNSk7XG4gICAgcGlwZXMuZm9yRWFjaChwaXBlc1BhaXIgPT4gdmlldy5yZW5kZXJQaXBlcyhwaXBlc1BhaXIpKTtcblxuICAgIHZpZXcucmVuZGVyT2JqZWN0KGdyb3VuZCk7XG5cbiAgICB2aWV3LnJlbmRlckJpcmQoYmlyZCwgTWF0aC5jZWlsKGJpcmQuYW5pbWF0aW9uQ291bnQgLyA1KSk7XG5cbiAgICBpZiAoZ2FtZS5zdGFydGVkKSB7XG4gICAgICAgIHZpZXcucmVuZGVyVGV4dChcbiAgICAgICAgICAgIGdhbWUuc2NvcmUsXG4gICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAnNDJweCcsXG4gICAgICAgICAgICAnQXJpYWwnLFxuICAgICAgICAgICAgJ2NlbnRlcicsXG4gICAgICAgICAgICAnd2hpdGUnLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICghZ2FtZS5zdGFydGVkKSB7XG4gICAgICAgIHZpZXcucmVuZGVySW1hZ2UodGFwSW1nLCBjYW52YXMud2lkdGggLyAyIC0gKHRhcEltZy53aWR0aCAvIDIpLCAyMzApO1xuICAgIH1cblxuICAgIGlmIChnYW1lLmVuZCkge1xuICAgICAgICB2aWV3LnJlbmRlckltYWdlKFxuICAgICAgICAgICAgZ2FtZU92ZXJJbWcsXG4gICAgICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gKGdhbWVPdmVySW1nLndpZHRoIC8gMiksXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiAtIGdhbWVPdmVySW1nLmhlaWdodCAtIDUwXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmQoKSB7XG4gICAgZ2FtZS5lbmQgPSB0cnVlO1xuXG4gICAgYmlyZC5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICBiaXJkLmFuaW1hdGlvbkNvdW50ID0gNjtcblxuICAgIGlmIChnYW1lLnNjb3JlID4gR2FtZS5iZXN0U2NvcmUpIHtcbiAgICAgICAgR2FtZS5iZXN0U2NvcmUgPSBnYW1lLnNjb3JlO1xuICAgIH1cblxuICAgIGhpdFNvdW5kLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24ganVtcCgpIHtcbiAgICBpZiAoZ2FtZS5lbmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdhbWUuc3RhcnRlZCA9IHRydWU7XG5cbiAgICBpZiAoYmlyZC55IDwgLWJpcmQuaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBiaXJkLmp1bXAoKTtcblxuICAgIGxldCBmbHlTb3VuZCA9IG5ldyBBdWRpbygnc3JjL3NvdW5kcy9mbHkubXAzJyk7XG4gICAgZmx5U291bmQucGxheSgpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKFszOCwgODcsIDMyLCAxM10uaW5kZXhPZihlLmtleUNvZGUpICE9PSAtMSkge1xuICAgICAgICBqdW1wKCk7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGp1bXAoKTtcbn0pO1xuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==