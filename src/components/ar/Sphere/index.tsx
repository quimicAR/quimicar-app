import React from 'react';
import {ViroSphere, ViroMaterials} from '@viro-community/react-viro';

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
    />
  );
};

ViroMaterials.createMaterials({
  atom: {
    lightingModel: 'Lambert',
    diffuseColor: 'rgb(0,0,0)',
  },
  proton: {
    diffuseColor: 'rgb(20,115,230)',
  },
  neutron: {
    diffuseColor: 'rgb(252,194,22)',
  },
  electron: {
    diffuseColor: 'rgb(232,80,62)',
  },
});

export default Sphere;
