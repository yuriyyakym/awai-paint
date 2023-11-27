import { state } from 'awai';
import { Layer, LineConfig, PencilConfig, RectangleConfig } from '../types';
import { DEFAULT_LINE_CONFIG, DEFAULT_PENCIL_CONFIG, DEFAULT_RECTANGLE_CONFIG } from './constants';

export const canvasElementState = state<HTMLCanvasElement | null>(null);

export const toolState = state<'line' | 'rectangle' | 'pencil'>('pencil');

export const lineConfigState = state<LineConfig>(DEFAULT_LINE_CONFIG);

export const pencilConfigState = state<PencilConfig>(DEFAULT_PENCIL_CONFIG);

export const rectangleConfigState = state<RectangleConfig>(DEFAULT_RECTANGLE_CONFIG);

export const layersState = state<Layer[]>([]);

export const currentLayerState = state<Layer | null>(null);
