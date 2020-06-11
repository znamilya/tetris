import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../contants.js';
class Screen {
    constructor(context) {
        this.context = context;
    }
    render(...arg) {
        throw new Error('Must implement render method');
    }
    clear() {
        if (!this.context)
            return;
        this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
export default Screen;
