import { PLAYFIELD_WIDTH } from '../../../contants.js';
import TetrominoView from './TetrominoView.js';
class StatsView {
    constructor(context) {
        this.context = context;
        this._tetrominoView = new TetrominoView(this.context);
    }
    render({ level, lines, score, nextPiece }) {
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
