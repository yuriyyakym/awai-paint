import { scenario } from 'awai';

import { RectangleConfig } from '../../types';
import { draw, startDrawingRectangle, stopDrawing } from '../actions';
import { currentLayerState, toolsConfigsFamily } from '../state';

const TOOL_NAME = 'rectangle';

scenario(
  startDrawingRectangle.events.invoked,
  async ({ arguments: [point] }) => {
    const config = toolsConfigsFamily.getNode(TOOL_NAME).get() as RectangleConfig;

    currentLayerState.set({
      tool: TOOL_NAME,
      startPoint: point,
      endPoint: point,
      config,
    });

    const drawScenario = scenario(
      draw.events.invoked,
      ({ arguments: [endPoint] }) => {
        currentLayerState.set((layer) => ({ ...layer!, endPoint }));
      },
      { repeatUntil: stopDrawing.events.invoked },
    );

    await drawScenario.events.expired;
  },
  { strategy: 'cyclic' },
);
