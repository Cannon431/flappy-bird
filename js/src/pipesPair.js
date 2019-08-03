export default class PipesPair {
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
