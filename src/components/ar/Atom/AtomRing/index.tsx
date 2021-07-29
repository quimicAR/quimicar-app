import React from 'react';
import {ViroNode} from '@viro-community/react-viro';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IEletron} from '../../../../interfaces';
import {SphereAR, TorusAR} from '../..';

interface IAtomRingProps {
  // position: number[];
  scale: number[];
  eletrons: IEletron[];
  animation: any;
}

const AtomRing = ({
  // position,
  scale,
  animation,
  eletrons,
}: IAtomRingProps): JSX.Element => {
  return (
    <ViroNode position={[0, 0, 0.02]} animation={animation}>
      <TorusAR scale={scale} />
      {eletrons.map((eletron: IEletron) => (
        <SphereAR
          key={eletron.id}
          position={eletron.position}
          scale={[0.002, 0.002, 0.002]}
          materials={['electron']}
        />
      ))}
    </ViroNode>
  );
};

export default AtomRing;
