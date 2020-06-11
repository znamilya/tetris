import Screen from '../Screen.js';
import Playfield from './model/Playfield.js';
import Tetromino from './model/Tetromino.js';
import PlayfieldView from './views/PlayfieldView.js';
import StatsView from './views/StatsView.js';

type RenderData = {
  playfield: Playfield;
  level: number;
  lines: number;
  score: number;
  nextPiece: Tetromino;
};

class GameView extends Screen {
  playfieldView: PlayfieldView;
  statsView: StatsView;

  constructor(protected context: CanvasRenderingContext2D) {
    super(context);
    this.playfieldView = new PlayfieldView(this.context);
    this.statsView = new StatsView(this.context);
  }

  render({ playfield, level, lines, score, nextPiece }: RenderData) {
    this.clear();
    this.playfieldView.render(playfield);
    this.statsView.render({ level, lines, score, nextPiece });
  }
}

export default GameView;
