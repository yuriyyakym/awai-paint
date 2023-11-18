import { scenario } from 'awai';

import type { Layer } from '../../types';
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
      if (layer.type === 'background') {
        drawRectangle(
          context,
          { x: 0, y: 0 },
          { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER },
          { backgroundColor: layer.color },
        );
      }

      if (layer.type === 'line') {
        drawLine(context, layer.start, layer.end, { color: layer.color });
      }

      if (layer.type === 'pencil') {
        drawCurve(context, layer.points, { color: layer.color });
      }
    }
  },
).events.failed.then(console.log);
