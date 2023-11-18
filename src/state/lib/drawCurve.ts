import { CurveConfig, Point } from '../../types';

const drawCurve = (
  context: CanvasRenderingContext2D,
  points: Point[],
  config: Partial<CurveConfig>,
): void => {
  context.strokeStyle = config.color || 'transparent';
  context.lineWidth = config.lineWidth || 1;

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach((point) => {
    context.lineTo(point.x, point.y);
  });
  context.stroke();
  context.closePath();
};

export default drawCurve;
