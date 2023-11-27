import { scenario } from 'awai';

import { stopDrawing } from '../actions';
import { currentToolLayerState, layersState } from '../state';

scenario(stopDrawing.events.invoked, () => {
  const currentToolLayer = currentToolLayerState.get();
  layersState.set((layers) => [...layers, currentToolLayer]);
});
