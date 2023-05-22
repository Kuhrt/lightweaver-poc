'use client';

import { MathUtils, Vector3, Matrix4 } from 'three';
import { MeshProps, ThreeEvent } from '@react-three/fiber';
import { useState } from 'react';
import { Triplet, useBox } from '@react-three/cannon';
import { ElementUnion } from '@/models/enums/ElementType';
import { getElementColorFromUnion } from '@/utils/elements';

export type DimensionObjectProps = {
  elementType: ElementUnion;
};

export const DimensionObject = (props: MeshProps & DimensionObjectProps) => {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [vec, setVec] = useState(new Vector3());
  const [mat, setMat] = useState(new Matrix4());

  const [ref, api] = useBox(() => ({
    args: [2.5, 2.5, 2.5],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: !!props.position
      ? (props.position as Triplet)
      : [
          MathUtils.randFloatSpread(10),
          MathUtils.randFloatSpread(10),
          MathUtils.randFloatSpread(10)
        ]
  }));

  const onClickHandler = (e: ThreeEvent<MouseEvent>) => {
    click(!clicked);

    !!props.onClick && props.onClick(e);
  };

  return (
    <mesh
      {...props}
      // @ts-ignore
      ref={ref}
      castShadow
      receiveShadow
      onClick={onClickHandler}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      {props.children}
      <meshStandardMaterial
        color={getElementColorFromUnion(props.elementType)}
        transparent={true}
        opacity={hovered ? 0.8 : 1}
      />
    </mesh>
  );
};

export default DimensionObject;
