import Screen from '../Screen.js';
import { CANVAS_WIDTH } from '../../contants.js';
class MenuView extends Screen {
    render() {
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillStyle = 'white';
        this.context.font = '12px "Press Start 2P"';
        this.context.fillText('Press ENTER to start', CANVAS_WIDTH / 2, 100);
    }
}
export default MenuView;
