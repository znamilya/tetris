class ScreenView {
  constructor(private context: CanvasRenderingContext2D) {}

  clear() {
    this.context.clearRect(0, 0, 330, 404);
  }
}

export default ScreenView;
