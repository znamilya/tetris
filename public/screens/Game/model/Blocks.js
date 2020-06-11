class Blocks {
    constructor(_value) {
        this._value = _value;
    }
    get length() {
        return this._value.length;
    }
    /* ----------------------------------------------------------------------------- *
     * PUBLIC                                                                        *
     * ----------------------------------------------------------------------------- */
    hasCell(x, y) {
        return this._value[y] !== undefined && this._value[y][x] !== undefined;
    }
    hasCellValue(x, y) {
        return this.hasCell(x, y) && this.getCellValue(x, y) > 0;
    }
    getCellValue(x, y) {
        return this._value[y][x];
    }
    setCellValue(x, y, value) {
        if (!this.hasCell(x, y)) {
            throw new Error(`There is not a block with x ${x} and y ${y}`);
        }
        this._value[y][x] = value;
    }
    iterate(fn) {
        for (let y = 0; y < this._value.length; y++) {
            for (let x = 0; x < this._value[y].length; x++) {
                const value = this._value[y][x];
                fn(x, y, value);
            }
        }
    }
}
export default Blocks;
