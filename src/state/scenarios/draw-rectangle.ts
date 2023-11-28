import { scenario } from 'awai';

import { draw, startDrawingRectangle, stopDrawing } from '../actions';
import { EMPTY_RECTANGLE_LAYER } from '../constants';
import { currentRectangleLayerState, layersState, rectangleConfigState } from '../state';

scenario(startDrawingRectangle.events.invoked, async ({ arguments: [point] }) => {
  const config = rectangleConfigState.get();

  currentRectangleLayerState.set({
    tool: 'rectangle',
    startPoint: point,
    endPoint: point,
    config,
  });

  const drawingScenario = scenario(
    draw.events.invoked,
    stopDrawing.events.invoked,
    ({ arguments: [endPoint] }) => {
      currentRectangleLayerState.set((layer) => ({ ...layer, endPoint }));
    },
  );

  await drawingScenario.events.expired;

  layersState.set((layers) => [...layers, currentRectangleLayerState.get()]);

  currentRectangleLayerState.set(EMPTY_RECTANGLE_LAYER);
});
