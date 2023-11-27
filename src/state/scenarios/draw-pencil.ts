import { scenario } from 'awai';

import type { Pencil } from '../../types';
import { draw, startDrawingPencil, stopDrawing } from '../actions';
import { currentLayerState, pencilConfigState } from '../state';

const TOOL_NAME = 'pencil';

scenario(startDrawingPencil.events.invoked, ({ arguments: [point] }) => {
  const config = pencilConfigState.get();

  currentLayerState.set({
    tool: TOOL_NAME,
    points: [point],
    config,
  });

  scenario(draw.events.invoked, stopDrawing.events.invoked, ({ arguments: [point] }) => {
    currentLayerState.set((layer) => ({
      ...layer!,
      points: [...(layer as Pencil).points, point],
    }));
  });
});
