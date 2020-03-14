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


class Ground extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    move() {
        this.x -= 1.8;
    }
}


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
    grounds = [new _classes_Ground__WEBPACK_IMPORTED_MODULE_6__["default"](0, 375, groundImg)],
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

        grounds.forEach(ground => ground.move());
        if (grounds[grounds.length - 1].x2 <= canvas.width) {
            grounds.push(new _classes_Ground__WEBPACK_IMPORTED_MODULE_6__["default"](grounds[grounds.length - 1].x2, 375, groundImg))
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
        if (grounds.some(ground => bird.intersectsWith(ground))) {
            end();
        }
    } else {
        // Game over

        bird.y += bird.fallLimit;

        // Checking for ground collision
        grounds.forEach(ground => {
            if (bird.y + bird.height >= ground.y) {
                bird.y = ground.y - bird.height;
            }
        })
    }

    render();
    requestAnimationFrame(frame);
}

function render() {
    view.renderImage(backgroundImg, 0, -25);
    pipes.forEach(pipesPair => view.renderPipes(pipesPair));

    grounds.forEach(ground => view.renderObject(ground));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQmlyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9HYW1lSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvUGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9QaXBlc1BhaXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvUGlwZXNQYWlyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpcmQgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBpbWFnZXMsIHJpc2VDb2VmZmljaWVudCwgZmFsbENvZWZmaWNpZW50LCBmYWxsTGltaXQpIHtcbiAgICAgICAgc3VwZXIoeCwgeSwgaW1hZ2VzWzFdKTtcblxuICAgICAgICB0aGlzLnJpc2VDb2VmZmljaWVudCA9IHJpc2VDb2VmZmljaWVudDtcbiAgICAgICAgdGhpcy5mYWxsQ29lZmZpY2llbnQgPSBmYWxsQ29lZmZpY2llbnQ7XG5cbiAgICAgICAgdGhpcy5mYWxsTGltaXQgPSBmYWxsTGltaXQ7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG5cbiAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJpc2VDb3VudCA9IDEwO1xuICAgICAgICB0aGlzLmZhbGxDb3VudCA9IDA7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25Db3VudCA9IDA7XG4gICAgfVxuXG4gICAganVtcCgpIHtcbiAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhbGxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMucmlzZUNvdW50ID0gMTA7XG4gICAgfVxuXG4gICAgcmlzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmlzZUNvdW50IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55IC09IHRoaXMucmlzZUNvdW50ICogdGhpcy5yaXNlQ29lZmZpY2llbnQ7XG4gICAgICAgIHRoaXMucmlzZUNvdW50LS07XG5cbiAgICAgICAgaWYgKHRoaXMucmlzZUNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmYWxsKCkge1xuICAgICAgICBsZXQgZmFsbFZhbHVlID0gdGhpcy5mYWxsQ291bnQgKiB0aGlzLmZhbGxDb3VudCAqIC45O1xuXG4gICAgICAgIGlmIChmYWxsVmFsdWUgPiB0aGlzLmZhbGxMaW1pdCkge1xuICAgICAgICAgICAgZmFsbFZhbHVlID0gdGhpcy5mYWxsTGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnkgKz0gZmFsbFZhbHVlO1xuXG4gICAgICAgIHRoaXMuZmFsbENvdW50ICs9IHRoaXMuZmFsbENvZWZmaWNpZW50O1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudElkLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZWxlbWVudElkKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBiZXN0U2NvcmUoKSB7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmVzdFNjb3JlJyk7XG5cbiAgICAgICAgaWYgKGJlc3RTY29yZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldCBiZXN0U2NvcmUoc2NvcmUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jlc3RTY29yZScsIHNjb3JlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW1hZ2UgZXh0ZW5kcyBJbWFnZSB7XG4gICAgY29uc3RydWN0b3Ioc3JjLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIGltYWdlID0gbnVsbCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZSB8fCBuZXcgSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlLndpZHRoO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlLmhlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgeDIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGdldCB5MigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGludGVyc2VjdHNXaXRoKGdhbWVPYmplY3QpIHtcbiAgICAgICAgaWYgKCEoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIEdhbWVPYmplY3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBtdXN0IGJlIGluc3RhbmNlIG9mIEdhbWVPYmplY3QgY2xhc3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnggPCBnYW1lT2JqZWN0LngyICYmIHRoaXMueDIgPiBnYW1lT2JqZWN0LnggJiYgdGhpcy55IDwgZ2FtZU9iamVjdC55MiAmJiB0aGlzLnkyID4gZ2FtZU9iamVjdC55O1xuICAgIH1cbn1cbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZCBleHRlbmRzIEdhbWVPYmplY3Qge1xuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMueCAtPSAxLjg7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlwZSBleHRlbmRzIEdhbWVPYmplY3Qge31cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpcGVzUGFpciB7XG4gICAgY29uc3RydWN0b3IodG9wUGlwZSwgYm90dG9tUGlwZSwgeCwgaW1hZ2UsIHNwZWVkLCBwYXNzZWQpIHtcbiAgICAgICAgdGhpcy50b3BQaXBlID0gdG9wUGlwZTtcbiAgICAgICAgdGhpcy5ib3R0b21QaXBlID0gYm90dG9tUGlwZTtcblxuICAgICAgICB0aGlzLnggPSB4O1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG5cbiAgICAgICAgdGhpcy5wYXNzZWQgPSBwYXNzZWQ7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgdGhpcy50b3BQaXBlLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5ib3R0b21QaXBlLnggLT0gdGhpcy5zcGVlZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGlwZSBmcm9tICcuL1BpcGUnO1xuaW1wb3J0IFBpcGVzUGFpciBmcm9tICcuL1BpcGVzUGFpcic7XG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi9mdW5jdGlvbnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXBlc1BhaXJGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihleHRyYUhlaWdodCwgc3BhY2VCZXR3ZWVuLCBvZmZzZXQsIHNwZWVkLCBpbWFnZSwgY2FudmFzSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZXh0cmFIZWlnaHQgPSBleHRyYUhlaWdodDtcbiAgICAgICAgdGhpcy5zcGFjZUJldHdlZW4gPSBzcGFjZUJldHdlZW47XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcblxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG5cbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS53aWR0aDtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgY3JlYXRlKHgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHJhbmRvbSh0aGlzLm9mZnNldFswXSwgdGhpcy5vZmZzZXRbMV0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGlwZXNQYWlyKFxuICAgICAgICAgICAgbmV3IFBpcGUoeCwgLXRoaXMuc3BhY2VCZXR3ZWVuIC0gb2Zmc2V0IC0gdGhpcy5leHRyYUhlaWdodCwgdGhpcy5pbWFnZSksXG4gICAgICAgICAgICBuZXcgUGlwZSh4LCB0aGlzLmNhbnZhc0hlaWdodCAvIDIgLSBvZmZzZXQsIHRoaXMuaW1hZ2UpLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICB0aGlzLnNwZWVkLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgfVxuXG4gICAgcmVuZGVyT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLnJlbmRlckltYWdlKG9iai5pbWFnZSwgb2JqLngsIG9iai55KTtcbiAgICB9XG5cbiAgICByZW5kZXJJbWFnZShpbWFnZSwgeCwgeSkge1xuICAgICAgICB0aGlzLmNhbnZhcy5jdHguZHJhd0ltYWdlKGltYWdlLCB4LCB5KTtcbiAgICB9XG5cbiAgICByZW5kZXJUZXh0KHRleHQsIHgsIHksIGZvbnRTaXplLCBmb250RmFtaWx5LCBhbGlnbiwgZmlsbENvbG9yID0gbnVsbCwgc3Ryb2tlQ29sb3IgPSBudWxsKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gZm9udFNpemUgKyAnICcgKyBmb250RmFtaWx5O1xuICAgICAgICBjdHgudGV4dEFsaWduID0gYWxpZ247XG5cbiAgICAgICAgaWYgKGZpbGxDb2xvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cm9rZUNvbG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckJpcmQoYmlyZCwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FudmFzLmN0eC5kcmF3SW1hZ2UoYmlyZC5pbWFnZXNbc3RhdGUgLSAxXSwgYmlyZC54LCBiaXJkLnkpO1xuICAgIH1cblxuICAgIHJlbmRlclBpcGVzKHBpcGVzKSB7XG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2UocGlwZXMuaW1hZ2UsIHBpcGVzLngsIHBpcGVzLnRvcFBpcGUueSk7XG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2UocGlwZXMuaW1hZ2UsIHBpcGVzLngsIHBpcGVzLmJvdHRvbVBpcGUueSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tRWxlbWVudChhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtyYW5kb20oMCwgYXJyYXkubGVuZ3RoIC0gMSldO1xufVxuIiwiaW1wb3J0IEdhbWVJbWFnZSBmcm9tICcuL2NsYXNzZXMvR2FtZUltYWdlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jbGFzc2VzL0NhbnZhcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2NsYXNzZXMvR2FtZSc7XG5pbXBvcnQgVmlldyBmcm9tICcuL2NsYXNzZXMvVmlldyc7XG5pbXBvcnQgQmlyZCBmcm9tICcuL2NsYXNzZXMvQmlyZCc7XG5pbXBvcnQgUGlwZXNQYWlyRmFjdG9yeSBmcm9tICcuL2NsYXNzZXMvUGlwZXNQYWlyRmFjdG9yeSc7XG5pbXBvcnQgR3JvdW5kIGZyb20gJy4vY2xhc3Nlcy9Hcm91bmQnO1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3QgYmlyZENvbG9ycyA9IFsnYmx1ZScsICdyZWQnLCAneWVsbG93J10sXG4gICAgYmFja2dyb3VuZHMgPSBbJ3NyYy9pbWcvYmFja2dyb3VuZC1kYXkucG5nJywgJ3NyYy9pbWcvYmFja2dyb3VuZC1uaWdodC5wbmcnXTtcblxubGV0IGJhY2tncm91bmRJbWcgPSBuZXcgR2FtZUltYWdlKHJhbmRvbUVsZW1lbnQoYmFja2dyb3VuZHMpKSxcbiAgICB0YXBJbWcgPSBuZXcgR2FtZUltYWdlKCdzcmMvaW1nL3RhcC5wbmcnKSxcbiAgICBwaXBlSW1nID0gbmV3IEdhbWVJbWFnZSgnc3JjL2ltZy9waXBlLWdyZWVuLnBuZycpLFxuICAgIGdyb3VuZEltZyA9IG5ldyBHYW1lSW1hZ2UoJ3NyYy9pbWcvZ3JvdW5kLnBuZycpLFxuICAgIGdhbWVPdmVySW1nID0gbmV3IEdhbWVJbWFnZSgnc3JjL2ltZy9nYW1lb3Zlci5wbmcnKTtcblxubGV0IGJpcmRTdGF0ZXMgPSBbXSwgYmlyZENvbG9yID0gcmFuZG9tRWxlbWVudChiaXJkQ29sb3JzKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgYmlyZFN0YXRlc1tpXSA9IG5ldyBJbWFnZSgpO1xuICAgIGJpcmRTdGF0ZXNbaV0uc3JjID0gYHNyYy9pbWcvJHtiaXJkQ29sb3J9YmlyZC0ke2kgKyAxfS5wbmdgO1xufVxuXG5sZXQgbmV3U2NvcmVTb3VuZCA9IG5ldyBBdWRpbygnc3JjL3NvdW5kcy9zY29yZS5tcDMnKSxcbiAgICBoaXRTb3VuZCA9IG5ldyBBdWRpbygnc3JjL3NvdW5kcy9oaXQubXAzJyksXG4gICAgZGllU291bmQgPSBuZXcgQXVkaW8oJ3NyYy9zb3VuZHMvZGllLm1wMycpO1xuXG5sZXQgY2FudmFzID0gbmV3IENhbnZhcygnY2FudmFzJywgMjg4LCA0NTApLFxuICAgIGdhbWUgPSBuZXcgR2FtZSgpLFxuICAgIHZpZXcgPSBuZXcgVmlldyhjYW52YXMpLFxuICAgIGJpcmQgPSBuZXcgQmlyZCg2MCwgMjAwLCBiaXJkU3RhdGVzLCAuOSwgLjEsIDEwKSxcbiAgICBncm91bmRzID0gW25ldyBHcm91bmQoMCwgMzc1LCBncm91bmRJbWcpXSxcbiAgICBwaXBlc0ZhY3RvcnkgPSBuZXcgUGlwZXNQYWlyRmFjdG9yeSgyMDAsIDEwMCwgWy0xMDAsIDYwXSwgMS44LCBwaXBlSW1nLCBjYW52YXMuaGVpZ2h0KSxcbiAgICBwaXBlcyA9IFtdO1xuXG5mdW5jdGlvbiBmcmFtZSgpIHtcbiAgICAvLyBDcmVhdGVzIGZpcnN0IHBpcGVzXG4gICAgaWYgKGdhbWUuc3RhcnRlZCAmJiBwaXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGlwZXMucHVzaChwaXBlc0ZhY3RvcnkuY3JlYXRlKDQ0NSkpO1xuICAgIH1cblxuICAgIGlmICghZ2FtZS5lbmQpIHtcbiAgICAgICAgaWYgKGJpcmQuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICBiaXJkLnJpc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiaXJkLmlzRmFsbGluZykge1xuICAgICAgICAgICAgYmlyZC5mYWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBiaXJkLmFuaW1hdGlvbkNvdW50Kys7XG5cbiAgICAgICAgaWYgKGJpcmQuYW5pbWF0aW9uQ291bnQgPiAxNSkge1xuICAgICAgICAgICAgYmlyZC5hbmltYXRpb25Db3VudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBncm91bmRzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC5tb3ZlKCkpO1xuICAgICAgICBpZiAoZ3JvdW5kc1tncm91bmRzLmxlbmd0aCAtIDFdLngyIDw9IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgZ3JvdW5kcy5wdXNoKG5ldyBHcm91bmQoZ3JvdW5kc1tncm91bmRzLmxlbmd0aCAtIDFdLngyLCAzNzUsIGdyb3VuZEltZykpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYW5pcHVsYXRpb24gd2l0aCBwaXBlc1xuICAgICAgICBpZiAocGlwZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBwaXBlcy5mb3JFYWNoKHBpcGVzUGFpciA9PiBwaXBlc1BhaXIubW92ZSgpKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlcyBwaXBlcyBpZiB0aGV5IGRvbid0IG5lZWQgdG8gcmVuZGVyXG4gICAgICAgICAgICBsZXQgY2xvc2VzdFBpcGVzID0gcGlwZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0UGlwZXMueCA+PSAtcGlwZXNGYWN0b3J5LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcGlwZXMudW5zaGlmdChjbG9zZXN0UGlwZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVja2luZyBmb3IgYmlyZCBwYXNzZWQgcGlwZXNcbiAgICAgICAgICAgIGlmIChiaXJkLnggPiBjbG9zZXN0UGlwZXMueCArIHBpcGVzRmFjdG9yeS53aWR0aCAmJiAhY2xvc2VzdFBpcGVzLnBhc3NlZCkge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RQaXBlcy5wYXNzZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgbmV3U2NvcmVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgZ2FtZS5zY29yZSsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGVzIG5ldyBwaXBlcyBwYWlyXG4gICAgICAgICAgICBsZXQgZnVydGhlclBpcGVzID0gcGlwZXNbcGlwZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoZnVydGhlclBpcGVzLnggPCBjYW52YXMud2lkdGggLyAyIC0gMTUpIHtcbiAgICAgICAgICAgICAgICBwaXBlcy5wdXNoKHBpcGVzRmFjdG9yeS5jcmVhdGUoY2FudmFzLndpZHRoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNraW5nIGZvciBoYXMgY29sbGlzaW9uIHdpdGggcGlwZXNcbiAgICAgICAgICAgIGlmICghY2xvc2VzdFBpcGVzLnBhc3NlZCAmJiAoYmlyZC5pbnRlcnNlY3RzV2l0aChjbG9zZXN0UGlwZXMudG9wUGlwZSkgfHwgYmlyZC5pbnRlcnNlY3RzV2l0aChjbG9zZXN0UGlwZXMuYm90dG9tUGlwZSkpKSB7XG4gICAgICAgICAgICAgICAgZW5kKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaWVTb3VuZC5wbGF5KCksIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVja2luZyBmb3IgaGFzIGNvbGxpc2lvbiB3aXRoIGdyb3VuZFxuICAgICAgICBpZiAoZ3JvdW5kcy5zb21lKGdyb3VuZCA9PiBiaXJkLmludGVyc2VjdHNXaXRoKGdyb3VuZCkpKSB7XG4gICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEdhbWUgb3ZlclxuXG4gICAgICAgIGJpcmQueSArPSBiaXJkLmZhbGxMaW1pdDtcblxuICAgICAgICAvLyBDaGVja2luZyBmb3IgZ3JvdW5kIGNvbGxpc2lvblxuICAgICAgICBncm91bmRzLmZvckVhY2goZ3JvdW5kID0+IHtcbiAgICAgICAgICAgIGlmIChiaXJkLnkgKyBiaXJkLmhlaWdodCA+PSBncm91bmQueSkge1xuICAgICAgICAgICAgICAgIGJpcmQueSA9IGdyb3VuZC55IC0gYmlyZC5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZpZXcucmVuZGVySW1hZ2UoYmFja2dyb3VuZEltZywgMCwgLTI1KTtcbiAgICBwaXBlcy5mb3JFYWNoKHBpcGVzUGFpciA9PiB2aWV3LnJlbmRlclBpcGVzKHBpcGVzUGFpcikpO1xuXG4gICAgZ3JvdW5kcy5mb3JFYWNoKGdyb3VuZCA9PiB2aWV3LnJlbmRlck9iamVjdChncm91bmQpKTtcblxuICAgIHZpZXcucmVuZGVyQmlyZChiaXJkLCBNYXRoLmNlaWwoYmlyZC5hbmltYXRpb25Db3VudCAvIDUpKTtcblxuICAgIGlmIChnYW1lLnN0YXJ0ZWQpIHtcbiAgICAgICAgdmlldy5yZW5kZXJUZXh0KFxuICAgICAgICAgICAgZ2FtZS5zY29yZSxcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgICc0MnB4JyxcbiAgICAgICAgICAgICdBcmlhbCcsXG4gICAgICAgICAgICAnY2VudGVyJyxcbiAgICAgICAgICAgICd3aGl0ZScsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFnYW1lLnN0YXJ0ZWQpIHtcbiAgICAgICAgdmlldy5yZW5kZXJJbWFnZSh0YXBJbWcsIGNhbnZhcy53aWR0aCAvIDIgLSAodGFwSW1nLndpZHRoIC8gMiksIDIzMCk7XG4gICAgfVxuXG4gICAgaWYgKGdhbWUuZW5kKSB7XG4gICAgICAgIHZpZXcucmVuZGVySW1hZ2UoXG4gICAgICAgICAgICBnYW1lT3ZlckltZyxcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSAoZ2FtZU92ZXJJbWcud2lkdGggLyAyKSxcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gZ2FtZU92ZXJJbWcuaGVpZ2h0IC0gNTBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuZCgpIHtcbiAgICBnYW1lLmVuZCA9IHRydWU7XG5cbiAgICBiaXJkLmlzSnVtcGluZyA9IGZhbHNlO1xuICAgIGJpcmQuYW5pbWF0aW9uQ291bnQgPSA2O1xuXG4gICAgaWYgKGdhbWUuc2NvcmUgPiBHYW1lLmJlc3RTY29yZSkge1xuICAgICAgICBHYW1lLmJlc3RTY29yZSA9IGdhbWUuc2NvcmU7XG4gICAgfVxuXG4gICAgaGl0U291bmQucGxheSgpO1xufVxuXG5mdW5jdGlvbiBqdW1wKCkge1xuICAgIGlmIChnYW1lLmVuZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2FtZS5zdGFydGVkID0gdHJ1ZTtcblxuICAgIGlmIChiaXJkLnkgPCAtYmlyZC5oZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGJpcmQuanVtcCgpO1xuXG4gICAgbGV0IGZseVNvdW5kID0gbmV3IEF1ZGlvKCdzcmMvc291bmRzL2ZseS5tcDMnKTtcbiAgICBmbHlTb3VuZC5wbGF5KCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICBpZiAoWzM4LCA4NywgMzIsIDEzXS5pbmRleE9mKGUua2V5Q29kZSkgIT09IC0xKSB7XG4gICAgICAgIGp1bXAoKTtcbiAgICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAganVtcCgpO1xufSk7XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9