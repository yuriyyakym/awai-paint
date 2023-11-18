import { state } from 'awai';
import { Background, Layer } from '../types';

const BACKGROUND_LAYER: Background = {
  name: 'Backgrond',
  type: 'background',
  color: '#fff',
};

export const canvasElementState = state<HTMLCanvasElement | null>(null);

export const toolState = state<'line' | 'rectangle' | 'pencil'>('pencil');

export const toolConfigState = state<{ color: string }>({ color: '#ff0000' });

export const layersState = state<Layer[]>([BACKGROUND_LAYER]);

export const currentLayerState = state<Layer | null>(null);
