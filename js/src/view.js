export default class View {
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
