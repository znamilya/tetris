import View from './View.js';
class GameOverController {
    constructor(_context, onRestart) {
        this._context = _context;
        this.onRestart = onRestart;
        this._score = 0;
        this._view = new View(this._context);
        this.handleKeydown = this.handleKeydown.bind(this);
    }
    show(score) {
        this._score = score;
        document.addEventListener('keydown', this.handleKeydown);
        this._view.render(this._score);
    }
    hide() {
        document.removeEventListener('keydown', this.handleKeydown);
        this._view.clear();
    }
    handleKeydown({ keyCode }) {
        if (keyCode !== 13)
            return;
        this.onRestart();
    }
}
export default GameOverController;
