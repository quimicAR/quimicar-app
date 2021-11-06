import React from 'react';
import {ViroSphere} from '@viro-community/react-viro';

interface ISphereProps {
  position?: number[];
  scale: number[];
  rotation?: number[];
  opacity?: number;
  materials: string[];
  animation?: any;
}
const Sphere = ({
  materials,
  position,
  rotation,
  scale,
  opacity,
  animation,
}: ISphereProps): JSX.Element => {
  return (
    <ViroSphere
      position={position ?? [0, 0, 0.02]}
      scale={scale}
      opacity={opacity}
      materials={materials}
      rotation={rotation}
      animation={animation}
      dragType="FixedToWorld"
      physicsBody={{
        type: 'Static',
        mass: 0,
        shape: {type: 'Sphere', params: [0.5]},
      }}
    />
  );
};

export default Sphere;
