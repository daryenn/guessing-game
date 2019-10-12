class GuessingGame {
    constructor() {
        this.result;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.result = Math.floor((this.min+this.max)/2);
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.mix = this.result;
    }
}

module.exports = GuessingGame;
