import { BLOCK_SIZE } from '../../../contants.js';

class BlockView {
  static colorMap: Record<string, string> = {
    1: 'cyan',
    2: 'blue',
    3: 'orange',
    4: 'purple',
    5: 'red',
    6: 'green',
    7: 'yellow',
  };

  constructor(private context: CanvasRenderingContext2D) {}

  render(value: number, offsetX: number, offsetY: number) {
    this.context.fillStyle = BlockView.colorMap[value];
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 1;
    this.context.fillRect(offsetX, offsetY, BLOCK_SIZE, BLOCK_SIZE);
    this.context.strokeRect(offsetX, offsetY, BLOCK_SIZE, BLOCK_SIZE);
  }
}

export default BlockView;
