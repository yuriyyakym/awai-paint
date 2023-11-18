import type { LineConfig, Point } from '../../types';

const drawLine = (
  context: CanvasRenderingContext2D,
  startPoint: Point,
  endPoint: Point,
  config: Partial<LineConfig>,
): void => {
  context.strokeStyle = config.color || 'transparent';
  context.lineWidth = config.lineWidth || 1;

  context.beginPath();
  context.moveTo(startPoint.x, startPoint.y);
  context.lineTo(endPoint.x, endPoint.y);
  context.stroke();
  context.closePath();
};

export default drawLine;
