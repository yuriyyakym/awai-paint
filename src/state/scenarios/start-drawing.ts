import { scenario } from 'awai';

import {
  startDrawing,
  startDrawingLine,
  startDrawingPencil,
  startDrawingRectangle,
} from '../actions';
import { toolState } from '../state';

scenario(startDrawing.events.invoked, ({ arguments: [point] }) => {
  const tool = toolState.get();

  if (tool === 'line') {
    startDrawingLine(point);
  }

  if (tool === 'pencil') {
    startDrawingPencil(point);
  }

  if (tool === 'rectangle') {
    startDrawingRectangle(point);
  }

  throw new Error(`Tool "${tool}" is not handled`);
});
