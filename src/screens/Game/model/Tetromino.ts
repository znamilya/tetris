import Blocks, { Value } from './Blocks.js';
import Playfield from './Playfield.js';

export type Shape = 'I' | 'J' | 'L' | 'T' | 'O' | 'Z' | 'S';

class Tetromino extends Blocks {
  static create(shape: 'I' | 'J' | 'L' | 'T' | 'O' | 'Z' | 'S'): Tetromino {
    switch (shape) {
      case 'I': {
        return new Tetromino(
          [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
          3,
          -1,
        );
      }
      case 'J': {
        return new Tetromino(
          [
            [0, 2, 2],
            [0, 2, 0],
            [0, 2, 0],
          ],
          3,
        );
      }
      case 'L': {
        return new Tetromino(
          [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
          ],
          3,
        );
      }
      case 'T': {
        return new Tetromino(
          [
            [0, 4, 0],
            [4, 4, 4],
            [0, 0, 0],
          ],
          3,
        );
      }
      case 'Z': {
        return new Tetromino(
          [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
          ],
          3,
        );
      }
      case 'S': {
        return new Tetromino(
          [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
          ],
          3,
        );
      }
      case 'O': {
        return new Tetromino(
          [
            [7, 7],
            [7, 7],
          ],
          4,
        );
      }
    }
  }

  constructor(value: Value, private _x: number = 0, private _y: number = 0) {
    super(value);
  }

  /* ----------------------------------------------------------------------------- *
   * PUBLIC                                                                        *
   * ----------------------------------------------------------------------------- */
  getCoords() {
    return { x: this._x, y: this._y };
  }

  moveLeft(playfield: Playfield): boolean {
    const nextX = this._x - 1;

    if (this.hasCollision(nextX, this._y, this, playfield)) {
      return false;
    }

    this._x = nextX;

    return true;
  }

  moveRight(playfield: Playfield): boolean {
    const nextX = this._x + 1;

    if (this.hasCollision(nextX, this._y, this, playfield)) {
      return false;
    }

    this._x = nextX;

    return true;
  }

  moveDown(playfield: Playfield): boolean {
    const nextY = this._y + 1;

    if (this.hasCollision(this._x, nextY, this, playfield)) {
      return false;
    }

    this._y = nextY;

    return true;
  }

  rotateRight(playfield: Playfield): boolean {
    const length = this.length;
    const nextBlocks: number[][] = [];
    const origBlocks = this._value;

    // Fill nextBlocks with empty lines
    for (let i = 0; i < length; i++) {
      nextBlocks[i] = new Array(length).fill(0);
    }

    // Copy cells from current blocks to next one
    this.iterate((xIndex, yIndex) => {
      nextBlocks[xIndex][yIndex] = this.getCellValue(
        xIndex,
        length - yIndex - 1,
      );
    });

    if (
      this.hasCollision(this._x, this._y, new Tetromino(nextBlocks), playfield)
    ) {
      this._value = origBlocks;

      return false;
    }

    this._value = nextBlocks;

    return true;
  }

  hasCollision(
    x: number,
    y: number,
    blocks: Blocks,
    playfield: Playfield,
  ): boolean {
    let hasCollision = false;

    blocks.iterate((xIndex: number, yIndex: number, value: number) => {
      if (value === 0) return;

      if (
        playfield.hasCellValue(xIndex + x, yIndex + y) ||
        !playfield.hasCell(xIndex + x, yIndex + y)
      ) {
        // console.log(`DEBUG: Collisions at [${x + xIndex}, ${yIndex + y}]`);
        hasCollision = true;
      }
    });

    return hasCollision;
  }
}

export default Tetromino;
