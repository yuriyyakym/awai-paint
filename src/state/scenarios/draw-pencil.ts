import { scenario } from 'awai';

import { draw, startDrawing, stopDrawing } from '../actions';
import { currentLayerState, toolConfigState, toolState } from '../state';
import { getEventPoint } from '../lib';
import { Pencil } from '../../types';

scenario(startDrawing.events.invoked, async ({ arguments: [event] }) => {
  const tool = toolState.get();

  if (tool !== 'pencil') {
    return;
  }

  currentLayerState.set({
    type: 'pencil',
    name: 'Pencil layer',
    color: toolConfigState.get().color,
    points: [getEventPoint(event)],
  });

  const drawScenario = scenario(draw.events.invoked, ({ arguments: [event] }) => {
    currentLayerState.set((layer) => ({
      ...layer!,
      points: [...(layer as Pencil).points, getEventPoint(event)],
    }));
  });

  await stopDrawing.events.invoked;

  drawScenario.stop();
});
