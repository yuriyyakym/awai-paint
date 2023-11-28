import { scenario } from 'awai';

import { drawCurve, drawLine, drawRectangle } from '../lib';
import { canvasElementState, currentToolLayerState, layersState } from '../state';

scenario(
  () =>
    Promise.race([
      canvasElementState.events.changed,
      currentToolLayerState.events.changed,
      layersState.events.changed,
    ]),
  () => {
    const canvas = canvasElementState.get();
    const context = canvas?.getContext('2d');

    if (!context) {
      return;
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const layers = [...layersState.get(), currentToolLayerState.get()];

    for (const layer of layers) {
      if (layer.tool === 'line') {
        const { config, endPoint, startPoint } = layer;
        drawLine(context, startPoint, endPoint, config);
      }

      if (layer.tool === 'pencil') {
        const { config, points } = layer;
        drawCurve(context, points, config);
      }

      if (layer.tool === 'rectangle') {
        const { config, endPoint, startPoint } = layer;
        drawRectangle(context, startPoint, endPoint, config);
      }
    }
  },
);
