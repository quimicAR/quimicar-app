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
      <SphereAR scale={[0.01, 0.01, 0.01]} opacity={0.4} materials={['atom']} />
      <SphereAR scale={[0.03, 0.03, 0.03]} opacity={0.2} materials={['atom']} />
      {/* Atom Protons */}
      {protons.map(({id, position, scale}: IProton) => (
        <SphereAR
          key={id}
          position={position}
          scale={scale ?? [0.0012, 0.0012, 0.0012]}
          materials={['proton']}
          physicsBody={{
            type: 'Static',
            mass: 0,
            shape: {type: 'Sphere', params: [0.5]},
          }}
        />
      ))}
      {/* Atom Neutrons */}
      {neutrons?.map(({id, position, scale}: INeutron) => (
        <SphereAR
          key={id}
          position={position}
          scale={scale ?? [0.0012, 0.0012, 0.0012]}
          materials={['neutron']}
        />
      ))}
    </ViroNode>
  );
};

export default AtomNucleus;
