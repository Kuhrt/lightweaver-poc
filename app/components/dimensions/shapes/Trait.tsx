'use client';

import { Shape } from 'three';

export const Trait = () => {
  const shape = new Shape();
  shape.moveTo(0.33, 0);
  shape.lineTo(1.625, 0.03);
  shape.lineTo(2, 0.97);
  shape.lineTo(1, 2.325);
  shape.lineTo(0, 1.03);
  shape.lineTo(0.33, 0);

  shape.extractPoints(1);
  return <shapeGeometry args={[shape]} />;
};

export default Trait;
