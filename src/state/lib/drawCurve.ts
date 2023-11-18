import { Point } from '../../types';

type Config = {
  color?: string;
  lineWidth?: number;
};

const drawCurve = (context: CanvasRenderingContext2D, points: Point[], config: Config): void => {
  context.strokeStyle = config.color || '#000';
  context.lineWidth = config.lineWidth || 1;
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach((point) => {
    context.lineTo(point.x, point.y);
  });
  context.stroke();
};

export default drawCurve;
