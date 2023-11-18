import { Line } from '../../types';

const drawLine = (context: CanvasRenderingContext2D, line: Line): void => {
  const { color, end, start } = line;

  context.strokeStyle = color;
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.stroke();
};

export default drawLine;
