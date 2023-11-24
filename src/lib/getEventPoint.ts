import type { MouseEvent } from 'react';

import type { Point } from '../types';

const getEventPoint = (event: MouseEvent<HTMLCanvasElement>): Point => {
  const { left, top } = event.currentTarget.getBoundingClientRect();

  return {
    x: event.clientX - left,
    y: event.clientY - top,
  };
};

export default getEventPoint;
