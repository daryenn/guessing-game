class GuessingGame {
    constructor() {
        this.result;
      }
    
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
    
      guess() {
        return this.result = Math.ceil((this.min+this.max)/2);
      }
    
      lower() {
        this.max = this.result;
      }
    
      greater() {
        this.min = this.result;
      }
}

module.exports = GuessingGame;
