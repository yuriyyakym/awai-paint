import { scenario } from 'awai';

import type { CurveConfig, Pencil } from '../../types';
import { draw, startDrawingPencil, stopDrawing } from '../actions';
import { currentLayerState, toolsConfigsFamily } from '../state';

const TOOL_NAME = 'pencil';

scenario(
  startDrawingPencil.events.invoked,
  async ({ arguments: [point] }) => {
    const config = toolsConfigsFamily.getNode(TOOL_NAME).get() as CurveConfig;

    currentLayerState.set({
      tool: TOOL_NAME,
      points: [point],
      config,
    });

    const drawScenario = scenario(
      draw.events.invoked,
      ({ arguments: [point] }) => {
        currentLayerState.set((layer) => ({
          ...layer!,
          points: [...(layer as Pencil).points, point],
        }));
      },
      { repeatUntil: stopDrawing.events.invoked },
    );

    await drawScenario.events.expired;
  },
  { strategy: 'cyclic' },
);
