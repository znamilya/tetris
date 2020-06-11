import View from './View.js';

class MenuController {
  private _view: View;

  constructor(
    private readonly _context: CanvasRenderingContext2D,
    private readonly onStart: () => void,
  ) {
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

  private handleKeydown({ keyCode }: KeyboardEvent) {
    if (keyCode !== 13) return;

    this.onStart();
  }
}

export default MenuController;
