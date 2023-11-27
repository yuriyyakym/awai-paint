import { scenario } from 'awai';

import { draw, startDrawingPencil, stopDrawing } from '../actions';
import { currentPencilLayerState, pencilConfigState } from '../state';

const TOOL_NAME = 'pencil';

scenario(startDrawingPencil.events.invoked, ({ arguments: [point] }) => {
  const config = pencilConfigState.get();

  currentPencilLayerState.set({
    tool: TOOL_NAME,
    points: [point],
    config,
  });

  scenario(draw.events.invoked, stopDrawing.events.invoked, ({ arguments: [point] }) => {
    currentPencilLayerState.set((layer) => ({
      ...layer,
      points: [...layer.points, point],
    }));
  });
});
