import type { Point } from '../../types';

type Config = {
  color?: string;
  lineWidth?: number;
};

const drawLine = (
  context: CanvasRenderingContext2D,
  startPoint: Point,
  endPoint: Point,
  config: Config,
): void => {
  context.strokeStyle = config.color || '#000';
  context.lineWidth = config.lineWidth || 1;
  context.beginPath();
  context.moveTo(startPoint.x, startPoint.y);
  context.lineTo(endPoint.x, endPoint.y);
  context.stroke();
};

export default drawLine;
