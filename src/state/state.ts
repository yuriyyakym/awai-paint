import { selector, state } from 'awai';

import {
  Layer,
  Line,
  LineConfig,
  Pencil,
  PencilConfig,
  Rectangle,
  RectangleConfig,
} from '../types';
import {
  DEFAULT_LINE_CONFIG,
  DEFAULT_PENCIL_CONFIG,
  DEFAULT_RECTANGLE_CONFIG,
  EMPTY_LINE_LAYER,
  EMPTY_PENCIL_LAYER,
  EMPTY_RECTANGLE_LAYER,
} from './constants';

export const canvasElementState = state<HTMLCanvasElement | null>(null);

export const toolState = state<'line' | 'rectangle' | 'pencil'>('pencil');

export const lineConfigState = state<LineConfig>(DEFAULT_LINE_CONFIG);

export const pencilConfigState = state<PencilConfig>(DEFAULT_PENCIL_CONFIG);

export const rectangleConfigState = state<RectangleConfig>(DEFAULT_RECTANGLE_CONFIG);

export const layersState = state<Layer[]>([]);

export const currentLineLayerState = state<Line>(EMPTY_LINE_LAYER);

export const currentRectangleLayerState = state<Rectangle>(EMPTY_RECTANGLE_LAYER);

export const currentPencilLayerState = state<Pencil>(EMPTY_PENCIL_LAYER);

export const currentToolLayerState = selector(
  [toolState, currentLineLayerState, currentRectangleLayerState, currentPencilLayerState],
  (tool, lineLayer, rectangleLayer, pencilLayer): Layer => {
    if (tool === 'line') {
      return lineLayer;
    }

    if (tool === 'pencil') {
      return pencilLayer;
    }

    return rectangleLayer;
  },
);
