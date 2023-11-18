import type { Point } from '../../types';

interface Config {
  backgroundColor: string;
}

const drawRectangle = (
  context: CanvasRenderingContext2D,
  startPoint: Point,
  endPoint: Point,
  config: Config,
): void => {
  const width = endPoint.x - startPoint.x;
  const height = endPoint.y - startPoint.y;

  context.fillStyle = config.backgroundColor;
  context.fillRect(startPoint.x, startPoint.y, width, height);
};

export default drawRectangle;
