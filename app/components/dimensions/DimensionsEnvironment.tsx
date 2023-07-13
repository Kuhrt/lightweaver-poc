import { memo } from 'react';
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment as EnvironmentImpl
} from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';

export type DimensionsEnvironmentProps = {
  direction?: Vector3;
};
export const DimensionsEnvironment = ({
  direction = [0, 10, 30]
}: DimensionsEnvironmentProps) => (
  <>
    <ambientLight color='#FFFFFF' intensity={0.5} />
    {/* <EnvironmentImpl preset="sunset" /> */}
  </>
);

export const DimensionsEnvironmentMemo = memo(DimensionsEnvironment);

export default DimensionsEnvironmentMemo;
