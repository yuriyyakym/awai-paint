import { action } from 'awai';

import { Point } from '../types';
import { lineConfigState, pencilConfigState, rectangleConfigState, toolState } from './state';

export const startDrawingLine = action<[Point]>();

export const startDrawingPencil = action<[Point]>();

export const startDrawingRectangle = action<[Point]>();

export const startDrawing = action<[Point]>();

export const draw = action<[point: Point]>();

export const stopDrawing = action<[point: Point]>();

export const selectTool = action(toolState.set);

export const setLineConfig = action(lineConfigState.set);

export const setPencilConfig = action(pencilConfigState.set);

export const setRectangleConfig = action(rectangleConfigState.set);
