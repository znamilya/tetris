import { BLOCK_SIZE, PLAYFIELD_BORDER_WIDTH, PLAYFIELD_WIDTH, PLAYFIELD_HEIGHT, } from '../../../contants.js';
import BlockView from './BlockView.js';
class PlayfieldView {
    constructor(context) {
        this.context = context;
        this.blockView = new BlockView(this.context);
    }
    render(playfield) {
        this.context.fillStyle = 'black';
        this.context.strokeStyle = 'white';
        this.context.lineWidth = PLAYFIELD_BORDER_WIDTH;
        this.context.fillRect(0, 0, PLAYFIELD_WIDTH, PLAYFIELD_HEIGHT);
        this.context.strokeRect(0, 0, PLAYFIELD_WIDTH, PLAYFIELD_HEIGHT);
        playfield.iterate((x, y, value) => {
            if (value) {
                this.blockView.render(value, PLAYFIELD_BORDER_WIDTH + x * BLOCK_SIZE, PLAYFIELD_BORDER_WIDTH + y * BLOCK_SIZE);
            }
        });
    }
}
export default PlayfieldView;
