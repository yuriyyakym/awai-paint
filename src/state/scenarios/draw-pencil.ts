import { scenario } from 'awai';

import type { CurveConfig, Pencil } from '../../types';
import { draw, startDrawing, stopDrawing } from '../actions';
import { getEventPoint } from '../lib';
import { currentLayerState, toolState, toolsConfigsFamily } from '../state';

const TOOL_NAME = 'pencil';

scenario(
  startDrawing.events.invoked,
  async ({ arguments: [event] }) => {
    const tool = toolState.get();

    if (tool !== TOOL_NAME) {
      return;
    }

    const config = toolsConfigsFamily.getNode(TOOL_NAME).get() as CurveConfig;

    currentLayerState.set({
      tool: TOOL_NAME,
      points: [getEventPoint(event)],
      config,
    });

    const drawScenario = scenario(
      draw.events.invoked,
      ({ arguments: [event] }) => {
        currentLayerState.set((layer) => ({
          ...layer!,
          points: [...(layer as Pencil).points, getEventPoint(event)],
        }));
      },
      { repeatUntil: stopDrawing.events.invoked },
    );

    await drawScenario.events.expired;
  },
  { strategy: 'cyclic' },
);
