import { scenario } from 'awai';

import { stopDrawing } from '../actions';
import { EMPTY_LINE_LAYER, EMPTY_PENCIL_LAYER, EMPTY_RECTANGLE_LAYER } from '../constants';
import {
  currentLineLayerState,
  currentPencilLayerState,
  currentRectangleLayerState,
  currentToolLayerState,
  layersState,
} from '../state';

scenario(stopDrawing.events.invoked, () => {
  const currentToolLayer = currentToolLayerState.get();

  currentLineLayerState.set(EMPTY_LINE_LAYER);
  currentRectangleLayerState.set(EMPTY_RECTANGLE_LAYER);
  currentPencilLayerState.set(EMPTY_PENCIL_LAYER);
  layersState.set((layers) => [...layers, currentToolLayer]);
});
