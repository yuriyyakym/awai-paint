import { scenario } from 'awai';

import type { Layer, Point } from '../../types';
import { drawCurve, drawLine, drawRectangle } from '../lib';
import { canvasElementState, currentLayerState, layersState } from '../state';

scenario(
  () =>
    Promise.race([
      canvasElementState.events.changed,
      currentLayerState.events.changed,
      layersState.events.changed,
    ]),
  () => {
    const canvas = canvasElementState.get();
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    const layers = [...layersState.get(), currentLayerState.get()].filter(Boolean) as Layer[];

    for (const layer of layers) {
      if (layer.tool === 'background') {
        const startPoint: Point = { x: 0, y: 0 };
        const endPoint: Point = { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER };
        drawRectangle(context, startPoint, endPoint, layer.config);
      }

      if (layer.tool === 'line') {
        const { config, endPoint, startPoint } = layer;
        drawLine(context, startPoint, endPoint, config);
      }

      if (layer.tool === 'pencil') {
        const { config, points } = layer;
        drawCurve(context, points, config);
      }
    }
  },
);
