import View from './View.js';
import Game from './model/Game.js';

class MenuController {
  private _game: Game;
  private _view: View;
  private _timerId: number = 0;

  constructor(
    private readonly _context: CanvasRenderingContext2D,
    private readonly onPause: () => void,
    private readonly onGameEnd: (score: number) => void,
  ) {
    this._game = new Game();
    this._view = new View(this._context);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  show() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keyup', this.handleKeyup);
    this._view.render(this._game.getState());
    this.startTimer();
  }

  hide() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('keyup', this.handleKeyup);
    this.stopTimer();
    this._view.clear();
  }

  private startTimer() {
    const speed = this.calcSpeed();

    this._timerId = setInterval(() => {
      this._game.movePieceDown();

      if (this._game.isOver) {
        this.onGameEnd(this._game.score);
        this._game.resetState();
      } else {
        this._view.render(this._game.getState());
      }
    }, speed);
  }

  private stopTimer() {
    clearInterval(this._timerId);
  }

  private calcSpeed() {
    return Math.max(1000 - this._game.level * 100, 100);
  }

  private handleKeydown({ keyCode }: KeyboardEvent) {
    switch (keyCode) {
      case 13: {
        this.onPause();
        break;
      }
      case 39: {
        this._game.movePieceRight();
        this._view.render(this._game.getState());
        break;
      }
      case 37: {
        this._game.movePieceLeft();
        this._view.render(this._game.getState());
        break;
      }
      case 38: {
        this._game.rotatePieceRight();
        this._view.render(this._game.getState());
        break;
      }
      case 40: {
        this.stopTimer();
        this._game.movePieceDown();

        if (this._game.isOver) {
          this.onGameEnd(this._game.score);
          this._game.resetState();
        } else {
          this._view.render(this._game.getState());
        }

        break;
      }
    }
  }

  private handleKeyup({ keyCode }: KeyboardEvent) {
    if (keyCode === 40) {
      this.startTimer();
    }
  }
}

export default MenuController;
