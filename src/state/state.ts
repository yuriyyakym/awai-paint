import { familyState, state } from 'awai';
import { Background, Layer, ToolName } from '../types';
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

export const toolsConfigsFamily = familyState((tool) => {
  switch (tool as ToolName) {
    case 'background':
      return DEFAULT_BACKGROUND_CONFIG;
    case 'line':
      return DEFAULT_LINE_CONFIG;
    case 'pencil':
      return DEFAULT_PENCIL_CONFIG;
    case 'rectangle':
      return DEFAULT_RECTANGLE_CONFIG;
  }
});

export const layersState = state<Layer[]>([BACKGROUND_LAYER]);

export const currentLayerState = state<Layer | null>(null);
