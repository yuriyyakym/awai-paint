import { scenario } from 'awai';

import type { LineConfig } from '../../types';
import { draw, startDrawing, stopDrawing } from '../actions';
import { currentLayerState, toolState, toolsConfigsFamily } from '../state';
import { getEventPoint } from '../lib';

const TOOL_NAME = 'line';

scenario(startDrawing.events.invoked, async ({ arguments: [event] }) => {
  const tool = toolState.get();

  if (tool !== TOOL_NAME) {
    return;
  }

  const config = toolsConfigsFamily.getNode(TOOL_NAME).get() as LineConfig;

  currentLayerState.set({
    tool: TOOL_NAME,
    startPoint: getEventPoint(event),
    endPoint: getEventPoint(event),
    config,
  });

  const drawScenario = scenario(draw.events.invoked, ({ arguments: [event] }) => {
    currentLayerState.set((layer) => ({
      ...layer!,
      endPoint: getEventPoint(event),
    }));
  });

  await stopDrawing.events.invoked;

  drawScenario.stop();
});
