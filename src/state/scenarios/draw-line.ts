import { scenario } from 'awai';

import { draw, startDrawingLine, stopDrawing } from '../actions';
import { EMPTY_LINE_LAYER } from '../constants';
import { currentLineLayerState, layersState, lineConfigState } from '../state';

scenario(startDrawingLine.events.invoked, async ({ arguments: [point] }) => {
  const config = lineConfigState.get();

  currentLineLayerState.set({
    tool: 'line',
    startPoint: point,
    endPoint: point,
    config,
  });

  await scenario(draw.events.invoked, stopDrawing.events.invoked, ({ arguments: [endPoint] }) => {
    currentLineLayerState.set((layer) => ({ ...layer, endPoint }));
  });

  layersState.set((layers) => [...layers, currentLineLayerState.get()]);
  currentLineLayerState.set(EMPTY_LINE_LAYER);
});
