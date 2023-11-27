export interface Point {
  x: number;
  y: number;
}

export interface BackgroundConfig {
  color: string;
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

export interface Background {
  tool: 'background';
  config: BackgroundConfig;
}

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

export type Layer = Background | Line | Rectangle | Pencil;
