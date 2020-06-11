import View from './View.js';
class PauseController {
    constructor(_context, onContinue) {
        this._context = _context;
        this.onContinue = onContinue;
        this._view = new View(this._context);
        this.handleKeydown = this.handleKeydown.bind(this);
    }
    show() {
        document.addEventListener('keydown', this.handleKeydown);
        this._view.render();
    }
    hide() {
        document.removeEventListener('keydown', this.handleKeydown);
        this._view.clear();
    }
    handleKeydown({ keyCode }) {
        if (keyCode !== 13)
            return;
        this.onContinue();
    }
}
export default PauseController;
