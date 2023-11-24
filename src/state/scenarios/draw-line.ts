import { scenario } from 'awai';

import { draw, startDrawingLine, stopDrawing } from '../actions';
import { currentLayerState, lineConfigState } from '../state';

const TOOL_NAME = 'line';

scenario(startDrawingLine.events.invoked, async ({ arguments: [point] }) => {
  const config = lineConfigState.get();

  currentLayerState.set({
    tool: TOOL_NAME,
    startPoint: point,
    endPoint: point,
    config,
  });

  scenario(
    draw.events.invoked,
    ({ arguments: [endPoint] }) => {
      currentLayerState.set((layer) => ({ ...layer!, endPoint }));
    },
    { repeatUntil: stopDrawing.events.invoked },
  );
});
