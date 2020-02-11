import GameObject from './GameObject';

export default class Bird extends GameObject {
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
