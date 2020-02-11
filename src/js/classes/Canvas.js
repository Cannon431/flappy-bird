export default class Canvas {
    constructor(elementId, width, height) {
        this.element = document.querySelector('#' + elementId);
        this.element.width = width;
        this.element.height = height;

        this.width = width;
        this.height = height;

        this.ctx = this.element.getContext('2d');
    }
}
