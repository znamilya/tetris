import Screen from '../Screen.js';
import { CANVAS_WIDTH } from '../../contants.js';

class GameOverView extends Screen {
  render(score: number) {
    this.clear();
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillStyle = 'white';
    this.context.font = '18px "Press Start 2P"';

    this.context.fillText('GAME OVER', CANVAS_WIDTH / 2, 100);

    this.context.font = '12px "Press Start 2P"';
    this.context.fillText(`Score: ${score}`, CANVAS_WIDTH / 2, 140);
  }
}

export default GameOverView;
