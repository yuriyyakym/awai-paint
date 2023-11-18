import { scenario } from 'awai';

import { stopDrawing } from '../actions';
import { currentLayerState, layersState } from '../state';

scenario(stopDrawing.events.invoked, () => {
  const currentLayer = currentLayerState.get();

  if (!currentLayer) {
    return;
  }

  currentLayerState.set(null);
  layersState.set((layers) => [...layers, currentLayer]);
});
