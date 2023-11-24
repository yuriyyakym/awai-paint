import { scenario } from 'awai';

import type { LineConfig } from '../../types';
import { draw, startDrawingLine, stopDrawing } from '../actions';
import { currentLayerState, toolsConfigsFamily } from '../state';

const TOOL_NAME = 'line';

scenario(
  startDrawingLine.events.invoked,
  async ({ arguments: [point] }) => {
    const config = toolsConfigsFamily.getNode(TOOL_NAME).get() as LineConfig;

    currentLayerState.set({
      tool: TOOL_NAME,
      startPoint: point,
      endPoint: point,
      config,
    });

    const drawingScenario = scenario(
      draw.events.invoked,
      ({ arguments: [endPoint] }) => {
        currentLayerState.set((layer) => ({ ...layer!, endPoint }));
      },
      { repeatUntil: stopDrawing.events.invoked },
    );

    await drawingScenario.events.expired;
  },
  { strategy: 'cyclic' },
);
