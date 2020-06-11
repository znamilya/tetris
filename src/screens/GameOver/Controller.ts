import View from './View.js';

class GameOverController {
  private _view: View;
  private _score: number = 0;

  constructor(
    private readonly _context: CanvasRenderingContext2D,
    private readonly onRestart: () => void,
  ) {
    this._view = new View(this._context);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  show(score: number) {
    this._score = score;

    document.addEventListener('keydown', this.handleKeydown);
    this._view.render(this._score);
  }

  hide() {
    document.removeEventListener('keydown', this.handleKeydown);
    this._view.clear();
  }

  private handleKeydown({ keyCode }: KeyboardEvent) {
    if (keyCode !== 13) return;

    this.onRestart();
  }
}

export default GameOverController;
