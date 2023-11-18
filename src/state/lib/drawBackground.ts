import { Background } from '../../types';

const drawBackground = (context: CanvasRenderingContext2D, background: Background): void => {
  context.fillStyle = background.color;
  context.fillRect(0, 0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

export default drawBackground;
