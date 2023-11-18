import { action } from 'awai';
import type { MouseEvent } from 'react';

import { Layer } from '../types';
import { toolState, toolsConfigsFamily } from './state';

export const startDrawing = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const draw = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const stopDrawing = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const selectTool = action(toolState.set);

export const setToolConfig = action((tool: Layer['tool'], config: Layer['config']) => {
  toolsConfigsFamily.getNode(tool).set(config);
});
