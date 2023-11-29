import { scenario } from 'awai';

import { draw, startDrawingPencil, stopDrawing } from '../actions';
import { EMPTY_PENCIL_LAYER } from '../constants';
import { currentPencilLayerState, layersState, pencilConfigState } from '../state';

scenario(startDrawingPencil.events.invoked, async ({ arguments: [point] }) => {
  const config = pencilConfigState.get();

  currentPencilLayerState.set({
    tool: 'pencil',
    points: [point],
    config,
  });

  await scenario(draw.events.invoked, stopDrawing.events.invoked, ({ arguments: [point] }) => {
    currentPencilLayerState.set((layer) => ({
      ...layer,
      points: [...layer.points, point],
    }));
  });

  layersState.set((layers) => [...layers, currentPencilLayerState.get()]);
  currentPencilLayerState.set(EMPTY_PENCIL_LAYER);
});
