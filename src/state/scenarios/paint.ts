import { scenario } from 'awai';

import type { Layer } from '../../types';
import { draw, startDrawing, stopDrawing } from '../actions';
import { drawBackground, drawLine } from '../lib';
import { canvasElementState, currentLayerState, layersState } from '../state';

scenario(
  () =>
    Promise.race([
      canvasElementState.events.changed,
      startDrawing.events.invoked,
      draw.events.invoked,
      stopDrawing.events.invoked,
    ]),
  () => {
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
        case 'line':
          drawLine(context, layer);
          break;
      }
    }
  },
);
