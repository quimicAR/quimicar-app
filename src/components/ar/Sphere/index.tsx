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
const Sphere: React.FC<ISphereProps & Record<string, any>> = ({
  materials,
  position,
  rotation,
  scale,
  opacity,
  animation,
  ...otherProps
}: ISphereProps): JSX.Element => {
  return (
    <ViroSphere
      position={position ?? [0, 0, 0.02]}
      scale={scale}
      opacity={opacity}
      materials={materials}
      rotation={rotation}
      animation={animation}
      dragType="FixedToPlane"
      {...otherProps}
    />
  );
};

export default Sphere;
