import { Triplet, usePlane } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

type PlaneProps = {
  color?: string;
  position?: Triplet;
  rotation?: Triplet;
};
function Plane({ color = '', position = [0, 0, 0], rotation }: PlaneProps) {
  const [, api] = usePlane(() => ({ position, rotation }));
  //@ts-ignore
  useEffect(() => api.position.set(...position), [api, position]);
}

export const DimensionsBorders = () => {
  const { viewport } = useThree();
  return (
    <>
      {/* @ts-ignore */}
      <Plane
        position={[0, viewport.height / 2 - 1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {/* @ts-ignore */}
      <Plane
        position={[0, -viewport.height / 2 + 1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* @ts-ignore */}
      <Plane
        position={[-viewport.width / 2 + 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      {/* @ts-ignore */}
      <Plane
        position={[viewport.width / 2 - 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      {/* @ts-ignore */}
      <Plane position={[0, 0, 0]} rotation={[0, 0, 0]} />
      {/* @ts-ignore */}
      <Plane position={[0, 0, 3]} rotation={[0, -Math.PI, 0]} />
    </>
  );
};

export default DimensionsBorders;
