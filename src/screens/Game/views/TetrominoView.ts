import Tetromino from '../model/Tetromino.js';
import BlockView from './BlockView.js';

class TetrominoView {
  private blockView: BlockView;

  constructor(private context: CanvasRenderingContext2D) {
    this.blockView = new BlockView(this.context);
  }

  render(tetromino: Tetromino, offsetX: number = 0, offsetY: number = 0) {
    tetromino.iterate((x, y, value) => {
      if (value > 0) {
        this.blockView.render(value, offsetX + x * 20, offsetY + y * 20);
      }
    });
  }
}

export default TetrominoView;
