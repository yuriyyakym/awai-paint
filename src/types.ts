export interface Point {
  x: number;
  y: number;
}

export interface Background {
  type: 'background';
  name: string;
  color: string;
}

export interface Line {
  type: 'line';
  name: string;
  color: string;
  start: Point;
  end: Point;
}

export interface Rectangle {
  type: 'rectangle';
  name: string;
  color: string;
  start: Point;
  end: Point;
}

export interface Pencil {
  type: 'pencil';
  name: string;
  color: string;
  points: Point[];
}

export type Layer = Background | Line | Rectangle | Pencil;
