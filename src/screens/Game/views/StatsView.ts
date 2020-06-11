import { PLAYFIELD_WIDTH } from '../../../contants.js';
import Tetromino from '../model/Tetromino';
import TetrominoView from './TetrominoView.js';

type RenderData = {
  level: number;
  lines: number;
  score: number;
  nextPiece: Tetromino;
};

class StatsView {
  private _tetrominoView: TetrominoView;

  constructor(private context: CanvasRenderingContext2D) {
    this._tetrominoView = new TetrominoView(this.context);
  }

  render({ level, lines, score, nextPiece }: RenderData) {
    const offsetX = PLAYFIELD_WIDTH + 10;
    const offsetY = 0;
    this.context.textAlign = 'start';
    this.context.textBaseline = 'top';
    this.context.fillStyle = 'white';
    this.context.font = '10px "Press Start 2P"';

    this.context.fillText(`Score: ${score}`, offsetX, offsetY + 0);
    this.context.fillText(`Lines: ${lines}`, offsetX, offsetY + 20);
    this.context.fillText(`Level: ${level + 1}`, offsetX, offsetY + 40);
    this.context.fillText(`Next`, offsetX, offsetY + 80);

    this._tetrominoView.render(nextPiece, offsetX, offsetY + 100);
  }
}

export default StatsView;
