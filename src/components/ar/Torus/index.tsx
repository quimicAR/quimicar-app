import React from 'react';
import {Viro3DObject} from '@viro-community/react-viro';

interface ITorusProps {
  scale: number[];
}

const Torus = ({scale}: ITorusProps): JSX.Element => {
  return (
    <Viro3DObject
      source={require('./res/torus-base.obj')}
      resources={[require('./res/torus-base.mtl')]}
      position={[0, 0, 0]}
      scale={scale}
      rotation={[90, 0, 0]}
      type="OBJ"
    />
  );
};

export default Torus;
