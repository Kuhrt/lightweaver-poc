'use client';

import { Shape } from 'three';

export const Event = () => {
  const shape = new Shape();
  shape.moveTo(0.33, 0);
  shape.lineTo(1.625, 0.03);
  shape.lineTo(2, 1.75);
  shape.lineTo(1.1, 2.325);
  shape.lineTo(0, 1.1);

  return <shapeGeometry args={[shape]} />;
};

export default Event;
