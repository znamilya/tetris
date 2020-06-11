export type Value = number[][];
type iteratee = (y: number, x: number, value: number) => void;

class Blocks {
  get length() {
    return this._value.length;
  }

  constructor(public _value: Value) {}

  /* ----------------------------------------------------------------------------- *
   * PUBLIC                                                                        *
   * ----------------------------------------------------------------------------- */
  hasCell(x: number, y: number): boolean {
    return this._value[y] !== undefined && this._value[y][x] !== undefined;
  }

  hasCellValue(x: number, y: number): boolean {
    return this.hasCell(x, y) && this.getCellValue(x, y) > 0;
  }

  getCellValue(x: number, y: number): number {
    return this._value[y][x];
  }

  setCellValue(x: number, y: number, value: number) {
    if (!this.hasCell(x, y)) {
      throw new Error(`There is not a block with x ${x} and y ${y}`);
    }

    this._value[y][x] = value;
  }

  iterate(fn: iteratee) {
    for (let y = 0; y < this._value.length; y++) {
      for (let x = 0; x < this._value[y].length; x++) {
        const value = this._value[y][x];

        fn(x, y, value);
      }
    }
  }
}

export default Blocks;
