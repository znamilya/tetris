import Screen from '../Screen.js';
import PlayfieldView from './views/PlayfieldView.js';
import StatsView from './views/StatsView.js';
class GameView extends Screen {
    constructor(context) {
        super(context);
        this.context = context;
        this.playfieldView = new PlayfieldView(this.context);
        this.statsView = new StatsView(this.context);
    }
    render({ playfield, level, lines, score, nextPiece }) {
        this.clear();
        this.playfieldView.render(playfield);
        this.statsView.render({ level, lines, score, nextPiece });
    }
}
export default GameView;
