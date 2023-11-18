import { action } from 'awai';
import type { MouseEvent } from 'react';

import { toolConfigState, toolState } from './state';

export const startDrawing = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const draw = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const stopDrawing = action<[event: MouseEvent<HTMLCanvasElement>]>();

export const selectTool = action(toolState.set);

export const setToolConfig = action(toolConfigState.set);
