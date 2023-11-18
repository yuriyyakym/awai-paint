import { scenario } from 'awai';

import { draw, startDrawing, stopDrawing } from '../actions';
import { currentLayerState, toolConfigState, toolState } from '../state';
import { getEventPoint } from '../lib';

scenario(startDrawing.events.invoked, async ({ arguments: [event] }) => {
  const tool = toolState.get();

  if (tool !== 'line') {
    return;
  }

  currentLayerState.set({
    type: 'line',
    name: 'Line layer',
    color: toolConfigState.get().color,
    start: getEventPoint(event),
    end: getEventPoint(event),
  });

  const drawScenario = scenario(draw.events.invoked, ({ arguments: [event] }) => {
    currentLayerState.set((layer) => ({
      ...layer!,
      end: getEventPoint(event),
    }));
  });

  await stopDrawing.events.invoked;

  drawScenario.stop();
});
