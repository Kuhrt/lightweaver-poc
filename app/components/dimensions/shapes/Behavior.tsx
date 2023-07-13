'use client';

import { Shape } from 'three';

export const Behavior = () => {
  const shape = new Shape();
  shape.moveTo(0.43, 0);
  shape.lineTo(1.725, 0.03);
  shape.lineTo(2.2, 1);
  shape.lineTo(1.3, 2.325);
  shape.lineTo(0, 1.9);
  return <shapeGeometry args={[shape]} />;
};

export default Behavior;
