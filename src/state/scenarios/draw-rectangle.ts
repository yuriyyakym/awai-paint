import { scenario } from 'awai';

import { draw, startDrawingRectangle, stopDrawing } from '../actions';
import { currentLayerState, rectangleConfigState } from '../state';

const TOOL_NAME = 'rectangle';

scenario(
  startDrawingRectangle.events.invoked,
  async ({ arguments: [point] }) => {
    const config = rectangleConfigState.get();

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
