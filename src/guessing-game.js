class GuessingGame {
    constructor() {
        this.guessing = 1;
        this.min = 0;
        this.max = 2;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessing = Math.round(this.min + (this.max - this.min) / 2);
        return this.guessing;
    }

    lower() {
        this.max = this.guessing;
    }

    greater() {
        this.min = this.guessing;
    }
}

module.exports = GuessingGame;