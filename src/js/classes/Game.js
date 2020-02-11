export default class Game {
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
