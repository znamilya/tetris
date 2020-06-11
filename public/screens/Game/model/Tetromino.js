import Blocks from './Blocks.js';
class Tetromino extends Blocks {
    constructor(value, _x = 0, _y = 0) {
        super(value);
        this._x = _x;
        this._y = _y;
    }
    static create(shape) {
        switch (shape) {
            case 'I': {
                return new Tetromino([
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ], 3, -1);
            }
            case 'J': {
                return new Tetromino([
                    [0, 2, 2],
                    [0, 2, 0],
                    [0, 2, 0],
                ], 3);
            }
            case 'L': {
                return new Tetromino([
                    [0, 3, 0],
                    [0, 3, 0],
                    [0, 3, 3],
                ], 3);
            }
            case 'T': {
                return new Tetromino([
                    [0, 4, 0],
                    [4, 4, 4],
                    [0, 0, 0],
                ], 3);
            }
            case 'Z': {
                return new Tetromino([
                    [5, 5, 0],
                    [0, 5, 5],
                    [0, 0, 0],
                ], 3);
            }
            case 'S': {
                return new Tetromino([
                    [0, 6, 6],
                    [6, 6, 0],
                    [0, 0, 0],
                ], 3);
            }
            case 'O': {
                return new Tetromino([
                    [7, 7],
                    [7, 7],
                ], 4);
            }
        }
    }
    /* ----------------------------------------------------------------------------- *
     * PUBLIC                                                                        *
     * ----------------------------------------------------------------------------- */
    getCoords() {
        return { x: this._x, y: this._y };
    }
    moveLeft(playfield) {
        const nextX = this._x - 1;
        if (this.hasCollision(nextX, this._y, this, playfield)) {
            return false;
        }
        this._x = nextX;
        return true;
    }
    moveRight(playfield) {
        const nextX = this._x + 1;
        if (this.hasCollision(nextX, this._y, this, playfield)) {
            return false;
        }
        this._x = nextX;
        return true;
    }
    moveDown(playfield) {
        const nextY = this._y + 1;
        if (this.hasCollision(this._x, nextY, this, playfield)) {
            return false;
        }
        this._y = nextY;
        return true;
    }
    rotateRight(playfield) {
        const length = this.length;
        const nextBlocks = [];
        const origBlocks = this._value;
        // Fill nextBlocks with empty lines
        for (let i = 0; i < length; i++) {
            nextBlocks[i] = new Array(length).fill(0);
        }
        // Copy cells from current blocks to next one
        this.iterate((xIndex, yIndex) => {
            nextBlocks[xIndex][yIndex] = this.getCellValue(xIndex, length - yIndex - 1);
        });
        if (this.hasCollision(this._x, this._y, new Tetromino(nextBlocks), playfield)) {
            this._value = origBlocks;
            return false;
        }
        this._value = nextBlocks;
        return true;
    }
    hasCollision(x, y, blocks, playfield) {
        let hasCollision = false;
        blocks.iterate((xIndex, yIndex, value) => {
            if (value === 0)
                return;
            if (playfield.hasCellValue(xIndex + x, yIndex + y) ||
                !playfield.hasCell(xIndex + x, yIndex + y)) {
                // console.log(`DEBUG: Collisions at [${x + xIndex}, ${yIndex + y}]`);
                hasCollision = true;
            }
        });
        return hasCollision;
    }
}
export default Tetromino;
