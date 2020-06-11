import Blocks from './Blocks.js';
class Playfield extends Blocks {
    constructor(value) {
        super(value);
    }
    /* ----------------------------------------------------------------------------- *
     * PUBLIC                                                                        *
     * ----------------------------------------------------------------------------- */
    /**
     * Check if all cells in a line with given index have values
     */
    isLineComplete(lineIndex) {
        return this._value[lineIndex].every((value) => value > 0);
    }
    clone() {
        return new Playfield(this.deepCopy(this._value));
    }
    /**
     * Remove line by index and move lines above down
     *
     * @param index Index of line which should squashed
     */
    squashLine(index) {
        this._value = [
            this.makeEmptyLine(),
            ...this._value.slice(0, index),
            ...this._value.slice(index + 1, this._value.length),
        ];
    }
    removeCompletedLines() {
        let lineIndex = this.length - 1;
        let clearedLines = 0;
        while (lineIndex >= 0) {
            if (this.isLineComplete(lineIndex)) {
                this.squashLine(lineIndex);
                clearedLines += 1;
            }
            else {
                lineIndex = lineIndex - 1;
            }
        }
        return clearedLines;
    }
    /* ----------------------------------------------------------------------------- *
     * PRIVATE                                                                       *
     * ----------------------------------------------------------------------------- */
    deepCopy(array) {
        let result = [];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            result[index] = Array.isArray(element) ? this.deepCopy(element) : element;
        }
        return result;
    }
    makeEmptyLine() {
        return new Array(this._value[0].length).fill(0);
    }
}
export default Playfield;
