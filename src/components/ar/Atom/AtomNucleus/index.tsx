/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ViroNode} from '@viro-community/react-viro';
import {SphereAR} from '../..';
import {INeutron, IProton} from '../../../../interfaces';

interface IAtomNucleusProps {
  protons: IProton[];
  neutrons?: INeutron[];
}

const AtomNucleus: React.FC<IAtomNucleusProps> = ({neutrons, protons}) => {
  return (
    <ViroNode>
      {/* Atom nucleus */}
      <SphereAR scale={[0.02, 0.02, 0.02]} opacity={0.2} materials={['atom']} />
      {/* Atom Protons */}
      {protons.map((proton: IProton) => (
        <SphereAR
          key={proton.id}
          position={proton.position}
          scale={[0.004, 0.004, 0.004]}
          materials={['proton']}
        />
      ))}
      {/* Atom Neutrons */}
      {neutrons?.map((neutron: INeutron) => (
        <SphereAR
          key={neutron.id}
          position={neutron.position}
          scale={[0.004, 0.004, 0.004]}
          materials={['neutron']}
        />
      ))}
    </ViroNode>
  );
};

export default AtomNucleus;
