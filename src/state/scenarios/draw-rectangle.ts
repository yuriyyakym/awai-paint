import { scenario } from 'awai';

import { RectangleConfig } from '../../types';
import { draw, startDrawing, stopDrawing } from '../actions';
import { getEventPoint } from '../lib';
import { currentLayerState, toolState, toolsConfigsFamily } from '../state';

const TOOL_NAME = 'rectangle';

scenario(
  startDrawing.events.invoked,
  async ({ arguments: [event] }) => {
    const tool = toolState.get();

    if (tool !== TOOL_NAME) {
      return;
    }

    const config = toolsConfigsFamily.getNode(TOOL_NAME).get() as RectangleConfig;

    currentLayerState.set({
      tool: TOOL_NAME,
      startPoint: getEventPoint(event),
      endPoint: getEventPoint(event),
      config,
    });

    const drawScenario = scenario(
      draw.events.invoked,
      ({ arguments: [event] }) => {
        currentLayerState.set((layer) => ({
          ...layer!,
          endPoint: getEventPoint(event),
        }));
      },
      { repeatUntil: stopDrawing.events.invoked },
    );

    await drawScenario.events.expired;
  },
  { strategy: 'cyclic' },
);
