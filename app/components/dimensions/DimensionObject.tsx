'use client';

import { MathUtils, Shape, TextureLoader } from 'three';
import { MeshProps, ThreeEvent, useLoader } from '@react-three/fiber';
import { useLayoutEffect, useState } from 'react';
import { Triplet, useBox, usePlane } from '@react-three/cannon';
import {
  getElementColorFromUnion,
  getElementEmissiveFromUnion
} from '@/utils/elements';
import { ProfileElementUnion } from '@/models/enums/ProfileElementTypeEnum';
import { useTexture } from '@react-three/drei';

export type DimensionObjectProps = {
  elementType: ProfileElementUnion;
};

export const DimensionObject = (props: MeshProps & DimensionObjectProps) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClick] = useState(false);

  // const texture = useLoader(
  //   TextureLoader,
  //   '/images/dimensions/traits-texture.svg'
  // );

  // const texture = useTexture('/images/dimensions/traits-texture.svg')

  const [ref, api] = useBox(() => ({
    args: [1, 1, 1],
    mass: 1,
    fixedRotation: true,
    rotation: [0, 0, MathUtils.randFloatSpread(30)],
    position: !!props.position
      ? (props.position as Triplet)
      : [MathUtils.randFloatSpread(1), MathUtils.randFloatSpread(1), 0]
  }));

  const onClickHandler = (e: ThreeEvent<MouseEvent>) => {
    setClick(!clicked);

    !!props.onClick && props.onClick(e);
  };

  return (
    <mesh
      {...props}
      //@ts-ignore
      ref={ref}
      castShadow
      onClick={onClickHandler}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    >
      {props.children}
      <meshPhysicalMaterial
        attach="material"
        color={getElementColorFromUnion(props.elementType)}
        emissive={getElementEmissiveFromUnion(props.elementType)}
        transparent={true}
        opacity={0.75}
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={1}
      />
    </mesh>
  );
};

export default DimensionObject;
