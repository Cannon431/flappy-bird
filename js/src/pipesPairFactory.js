import Pipe from './pipe.js';
import PipesPair from './pipesPair.js';
import {random} from './functions.js';

export default class PipesPairFactory {
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
        let offset = random(this.offset[0], this.offset[1]);

        return new PipesPair(
            new Pipe(x, -this.spaceBetween - offset - this.extraHeight, this.image),
            new Pipe(x, this.canvasHeight / 2 - offset, this.image),
            x,
            this.image,
            this.speed,
            false
        );
    }
}
