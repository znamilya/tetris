import View from './View.js';
class MenuController {
    constructor(_context, onStart) {
        this._context = _context;
        this.onStart = onStart;
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
        this.onStart();
    }
}
export default MenuController;
