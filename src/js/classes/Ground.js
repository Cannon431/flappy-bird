import GameObject from './GameObject';

export default class Ground extends GameObject {
    move() {
        this.x -= 1.8;
    }
}
