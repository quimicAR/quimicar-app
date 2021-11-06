import React from 'react';
import {Viro3DObject} from '@viro-community/react-viro';
import {buildObjPath, buildResourcePath} from '../../../config/viro-ar';
interface ITorusProps {
  scale: number[];
  animation?: any;
  numberOfEletrons: number;
  rotation?: number[];
}

const TorusAR = ({
  scale,
  animation,
  numberOfEletrons,
  rotation,
}: ITorusProps): JSX.Element => {
  return (
    <Viro3DObject
      source={buildObjPath(numberOfEletrons)}
      resources={[buildResourcePath(numberOfEletrons)]}
      position={[0, 0, 0]}
      scale={scale}
      rotation={rotation}
      type="OBJ"
      animation={animation}
    />
  );
};

export default TorusAR;
