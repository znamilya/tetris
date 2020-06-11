class RandomRange {

  constructor(private min: number, private max: number) { }

  generate() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

export default RandomRange;