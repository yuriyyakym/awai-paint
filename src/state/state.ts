import { state } from 'awai';
import { Background, CurveConfig, Layer, LineConfig, RectangleConfig } from '../types';
import {
  DEFAULT_BACKGROUND_CONFIG,
  DEFAULT_LINE_CONFIG,
  DEFAULT_PENCIL_CONFIG,
  DEFAULT_RECTANGLE_CONFIG,
} from './constants';

const BACKGROUND_LAYER: Background = {
  tool: 'background',
  config: DEFAULT_BACKGROUND_CONFIG,
};

export const canvasElementState = state<HTMLCanvasElement | null>(null);

export const toolState = state<'line' | 'rectangle' | 'pencil'>('pencil');

export const lineConfigState = state<LineConfig>(DEFAULT_LINE_CONFIG);

export const pencilConfigState = state<CurveConfig>(DEFAULT_PENCIL_CONFIG);

export const rectangleConfigState = state<RectangleConfig>(DEFAULT_RECTANGLE_CONFIG);

export const layersState = state<Layer[]>([BACKGROUND_LAYER]);

export const currentLayerState = state<Layer | null>(null);
