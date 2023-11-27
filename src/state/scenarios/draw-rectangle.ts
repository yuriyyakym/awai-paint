import { scenario } from 'awai';

import { draw, startDrawingRectangle, stopDrawing } from '../actions';
import { currentRectangleLayerState, rectangleConfigState } from '../state';

const TOOL_NAME = 'rectangle';

scenario(startDrawingRectangle.events.invoked, ({ arguments: [point] }) => {
  const config = rectangleConfigState.get();

  currentRectangleLayerState.set({
    tool: TOOL_NAME,
    startPoint: point,
    endPoint: point,
    config,
  });

  scenario(draw.events.invoked, stopDrawing.events.invoked, ({ arguments: [endPoint] }) => {
    currentRectangleLayerState.set((layer) => ({ ...layer, endPoint }));
  });
});
