import { Line, LineConfig, Pencil, PencilConfig, Rectangle, RectangleConfig } from '../types';

export const DEFAULT_LINE_CONFIG: LineConfig = {
  color: '#dd0000',
  lineWidth: 1,
};

export const DEFAULT_RECTANGLE_CONFIG: RectangleConfig = {
  borderColor: '#333333',
  borderWidth: 1,
  color: '#ddffff',
};

export const DEFAULT_PENCIL_CONFIG: PencilConfig = {
  color: '#dd0000',
  lineWidth: 1,
};

export const EMPTY_LINE_LAYER: Line = {
  tool: 'line',
  config: DEFAULT_LINE_CONFIG,
  endPoint: { x: 0, y: 0 },
  startPoint: { x: 0, y: 0 },
};

export const EMPTY_RECTANGLE_LAYER: Rectangle = {
  tool: 'rectangle',
  config: DEFAULT_RECTANGLE_CONFIG,
  endPoint: { x: 0, y: 0 },
  startPoint: { x: 0, y: 0 },
};

export const EMPTY_PENCIL_LAYER: Pencil = {
  tool: 'pencil',
  config: DEFAULT_PENCIL_CONFIG,
  points: [],
};
