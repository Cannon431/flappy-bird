export default class GameObject {
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
