import { action } from 'awai';

import { Point } from '../types';
import { lineConfigState, pencilConfigState, rectangleConfigState, toolState } from './state';

export const startDrawingLine = action<[Point]>();

export const startDrawingPencil = action<[Point]>();

export const startDrawingRectangle = action<[Point]>();

export const startDrawing = action((point: Point) => {
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
});

export const draw = action<[point: Point]>();

export const stopDrawing = action<[point: Point]>();

export const selectTool = action(toolState.set);

export const setLineConfig = action(lineConfigState.set);

export const setPencilConfig = action(pencilConfigState.set);

export const setRectangleConfig = action(rectangleConfigState.set);
