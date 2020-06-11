import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../contants.js';

class Screen {
  constructor(protected context: CanvasRenderingContext2D) {}

  render(...arg: any[]) {
    throw new Error('Must implement render method');
  }

  clear() {
    if (!this.context) return;

    this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

export default Screen;
