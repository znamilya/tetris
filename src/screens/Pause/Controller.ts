import View from './View.js';

class PauseController {
  private _view: View;

  constructor(
    private readonly _context: CanvasRenderingContext2D,
    private readonly onContinue: () => void,
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

    this.onContinue();
  }
}

export default PauseController;
