import GameImage from './classes/GameImage';
import Canvas from './classes/Canvas';
import Game from './classes/Game';
import View from './classes/View';
import Bird from './classes/Bird';
import PipesPairFactory from './classes/PipesPairFactory';
import Ground from './classes/Ground';
import { randomElement } from './functions';

const birdColors = ['blue', 'red', 'yellow'],
    backgrounds = ['src/img/background-day.png', 'src/img/background-night.png'];

let backgroundImg = new GameImage(randomElement(backgrounds)),
    tapImg = new GameImage('src/img/tap.png'),
    pipeImg = new GameImage('src/img/pipe-green.png'),
    groundImg = new GameImage('src/img/ground.png'),
    gameOverImg = new GameImage('src/img/gameover.png');

let birdStates = [], birdColor = randomElement(birdColors);
for (let i = 0; i < 3; i++) {
    birdStates[i] = new Image();
    birdStates[i].src = `src/img/${birdColor}bird-${i + 1}.png`;
}

let newScoreSound = new Audio('src/sounds/score.mp3'),
    hitSound = new Audio('src/sounds/hit.mp3'),
    dieSound = new Audio('src/sounds/die.mp3');

let canvas = new Canvas('canvas', 288, 450),
    game = new Game(),
    view = new View(canvas),
    bird = new Bird(60, 200, birdStates, .9, .1, 10),
    ground = new Ground(0, 375, groundImg),
    pipesFactory = new PipesPairFactory(200, 100, [-100, 60], 1.8, pipeImg, canvas.height),
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

    if (game.score > Game.bestScore) {
        Game.bestScore = game.score;
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
