import { action } from 'awai';
import type { MouseEvent } from 'react';

import type { Layer } from '../types';

import { drawBackground } from './lib';
import {
  canvasElementState,
  currentLayerState,
  layersState,
  toolConfigState,
  toolState,
} from './state';

export const startDrawing = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const draw = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const stopDrawing = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const selectTool = action(toolState.set);

export const setToolConfig = action(toolConfigState.set);

export const paint = action(() => {
  const canvas = canvasElementState.get();
  const context = canvas?.getContext('2d');

  if (!canvas || !context) {
    return;
  }

  const layers = [...layersState.get(), currentLayerState.get()].filter(Boolean) as Layer[];

  for (const layer of layers) {
    switch (layer.type) {
      case 'background':
        drawBackground(context, layer);
        break;
    }
  }
});
