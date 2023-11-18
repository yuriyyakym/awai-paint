import type { Point, RectangleConfig } from '../../types';

const drawRectangle = (
  context: CanvasRenderingContext2D,
  startPoint: Point,
  endPoint: Point,
  config: Partial<RectangleConfig>,
): void => {
  const width = endPoint.x - startPoint.x;
  const height = endPoint.y - startPoint.y;

  context.lineWidth = config.borderWidth || 0;
  context.strokeStyle = config.borderColor || 'transparent';
  context.fillStyle = config.color || 'transparent';

  context.beginPath();
  context.rect(startPoint.x, startPoint.y, width, height);
  context.fill();
  context.stroke();
  context.closePath();
};

export default drawRectangle;
