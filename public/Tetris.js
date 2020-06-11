import { CANVAS_WIDTH, CANVAS_HEIGHT } from './contants.js';
import MenuController from './screens/Menu/Controller.js';
import GameController from './screens/Game/Controller.js';
import PauseController from './screens/Pause/Controller.js';
import GameOverController from './screens/GameOver/Controller.js';
class Tetris {
    constructor(targetNode) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        targetNode.appendChild(canvas);
        this.startGame = this.startGame.bind(this);
        this.pauseGame = this.pauseGame.bind(this);
        this.continueGame = this.continueGame.bind(this);
        this.finishGame = this.finishGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this._menuController = new MenuController(context, this.startGame);
        this._gameController = new GameController(context, this.pauseGame, this.continueGame);
        this._pauseController = new PauseController(context, this.finishGame);
        this._gameOverController = new GameOverController(context, this.restartGame);
    }
    start() {
        this._menuController.show();
    }
    startGame() {
        this._menuController.hide();
        this._gameController.show();
    }
    pauseGame() {
        this._gameController.hide();
        this._pauseController.show();
    }
    continueGame(score) {
        this._gameController.hide();
        this._gameOverController.show(score);
    }
    finishGame() {
        this._pauseController.hide();
        this._gameController.show();
    }
    restartGame() {
        this._gameOverController.hide();
        this.start();
    }
}
export default Tetris;
