import Tetromino from './Tetromino.js';
import Playfield from './Playfield.js';
import RandomRange from '../../../utils/RandomRange.js';
import Score from './Score.js';
class Game {
    constructor() {
        this._randomRange = new RandomRange(0, 6);
        this._score = new Score();
        this._lines = 0;
        this._isOver = false;
        this._currPiece = this.createRandomPiece();
        this._nextPiece = this.createRandomPiece();
        this._playfield = new Playfield([]);
        this.resetState();
    }
    get level() {
        return Math.floor(this._lines / 10);
    }
    get score() {
        return this._score.value;
    }
    get isOver() {
        return this._isOver;
    }
    /* ----------------------------------------------------------------------------- *
     * PUBLIC                                                                        *
     * ----------------------------------------------------------------------------- */
    movePieceLeft() {
        this._currPiece.moveLeft(this._playfield);
    }
    movePieceRight() {
        this._currPiece.moveRight(this._playfield);
    }
    rotatePieceRight() {
        this._currPiece.rotateRight(this._playfield);
    }
    movePieceDown() {
        const isMoved = this._currPiece.moveDown(this._playfield);
        if (!isMoved) {
            this.lockCurrPiece();
            const removedLinesCount = this._playfield.removeCompletedLines();
            this._lines += removedLinesCount;
            this._currPiece = this._nextPiece;
            this._nextPiece = this.createRandomPiece();
            this._score.update(removedLinesCount, this.level);
            const { x, y } = this._nextPiece.getCoords();
            if (this._nextPiece.hasCollision(x, y, this._nextPiece, this._playfield)) {
                this._isOver = true;
            }
        }
    }
    getPlayfieldShapshot() {
        const snapshot = this._playfield.clone();
        const { x, y } = this._currPiece.getCoords();
        this._currPiece.iterate((xIndex, yIndex, value) => {
            if (value > 0 && snapshot.hasCell(xIndex + x, yIndex + y)) {
                snapshot.setCellValue(xIndex + x, yIndex + y, value);
            }
        });
        return snapshot;
    }
    getState() {
        return {
            playfield: this.getPlayfieldShapshot(),
            score: this._score.value,
            lines: this._lines,
            level: this.level,
            nextPiece: this._nextPiece,
            isOver: this._isOver,
        };
    }
    lockCurrPiece() {
        this._playfield = this.getPlayfieldShapshot();
    }
    resetState() {
        this._score = new Score();
        this._lines = 0;
        this._isOver = false;
        this._currPiece = this.createRandomPiece();
        this._nextPiece = this.createRandomPiece();
        this._playfield = new Playfield([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]);
    }
    /* ----------------------------------------------------------------------------- *
     * PRIVATE                                                                       *
     * ----------------------------------------------------------------------------- */
    createRandomPiece() {
        const index = this._randomRange.generate();
        const variants = ['I', 'J', 'L', 'T', 'O', 'Z', 'S'];
        return Tetromino.create(variants[index]);
    }
}
export default Game;
