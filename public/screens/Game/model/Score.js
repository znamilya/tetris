let Score = /** @class */ (() => {
    class Score {
        constructor() {
            this._value = 0;
        }
        get value() {
            return this._value;
        }
        /* ----------------------------------------------------------------------------- *
         * PUBLIC                                                                        *
         * ----------------------------------------------------------------------------- */
        update(linesCount, level) {
            if (linesCount === 0)
                return;
            this._value += Score.linesNumberToScore[linesCount] * (level + 1);
        }
    }
    Score.linesNumberToScore = {
        1: 20,
        2: 40,
        3: 60,
        4: 120,
    };
    return Score;
})();
export default Score;
