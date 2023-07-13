'use client';

import { Shape } from 'three';

export const Benefit = () => {
  const shape = new Shape();
  shape.moveTo(0.33, 0);
  shape.lineTo(1.625, 0.03);
  shape.lineTo(2.2, 0.97);
  shape.lineTo(0.9, 2.325);
  shape.lineTo(0, 0.92);
  return <shapeGeometry args={[shape]} />;
};

export default Benefit;
