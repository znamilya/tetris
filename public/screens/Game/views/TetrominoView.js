import BlockView from './BlockView.js';
class TetrominoView {
    constructor(context) {
        this.context = context;
        this.blockView = new BlockView(this.context);
    }
    render(tetromino, offsetX = 0, offsetY = 0) {
        tetromino.iterate((x, y, value) => {
            if (value > 0) {
                this.blockView.render(value, offsetX + x * 20, offsetY + y * 20);
            }
        });
    }
}
export default TetrominoView;
