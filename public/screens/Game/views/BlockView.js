import { BLOCK_SIZE } from '../../../contants.js';
let BlockView = /** @class */ (() => {
    class BlockView {
        constructor(context) {
            this.context = context;
        }
        render(value, offsetX, offsetY) {
            this.context.fillStyle = BlockView.colorMap[value];
            this.context.strokeStyle = 'black';
            this.context.lineWidth = 1;
            this.context.fillRect(offsetX, offsetY, BLOCK_SIZE, BLOCK_SIZE);
            this.context.strokeRect(offsetX, offsetY, BLOCK_SIZE, BLOCK_SIZE);
        }
    }
    BlockView.colorMap = {
        1: 'cyan',
        2: 'blue',
        3: 'orange',
        4: 'purple',
        5: 'red',
        6: 'green',
        7: 'yellow',
    };
    return BlockView;
})();
export default BlockView;
