class Score {
  static linesNumberToScore: Record<string, number> = {
    1: 20,
    2: 40,
    3: 60,
    4: 120,
  };

  private _value: number = 0;

  get value(): number {
    return this._value;
  }

  /* ----------------------------------------------------------------------------- *
   * PUBLIC                                                                        *
   * ----------------------------------------------------------------------------- */
  update(linesCount: number, level: number) {
    if (linesCount === 0) return;

    this._value += Score.linesNumberToScore[linesCount] * (level + 1);
  }
}

export default Score;
