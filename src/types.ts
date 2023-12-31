export interface Point {
  x: number;
  y: number;
}

export interface LineConfig {
  color: string;
  lineWidth: number;
}

export interface RectangleConfig {
  color: string;
  borderWidth: number;
  borderColor: string;
}

export interface CurveConfig {
  color: string;
  lineWidth: number;
}

export interface PencilConfig extends CurveConfig {}

export interface Line {
  tool: 'line';
  config: LineConfig;
  startPoint: Point;
  endPoint: Point;
}

export interface Rectangle {
  tool: 'rectangle';
  config: RectangleConfig;
  startPoint: Point;
  endPoint: Point;
}

export interface Pencil {
  tool: 'pencil';
  config: PencilConfig;
  points: Point[];
}

export type Layer = Line | Rectangle | Pencil;
