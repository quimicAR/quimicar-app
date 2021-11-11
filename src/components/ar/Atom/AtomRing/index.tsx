import React from 'react';
import {ViroNode} from '@viro-community/react-viro';
import {TorusAR} from '../..';

interface IAtomRingProps {
  scale: number[];
  numberOfEletrons: number;
  animation: any;
  rotation?: number[];
}

const AtomRing = ({
  scale,
  animation,
  numberOfEletrons,
  rotation,
}: IAtomRingProps): JSX.Element => {
  return (
    <ViroNode position={[0, 0, 0.02]} animation={animation}>
      <TorusAR
        scale={scale}
        animation={animation}
        numberOfEletrons={numberOfEletrons}
        rotation={rotation}
      />
    </ViroNode>
  );
};

export default AtomRing;
