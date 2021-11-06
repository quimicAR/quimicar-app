/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {ViroARScene, ViroARImageMarker} from '@viro-community/react-viro';
import {AtomAR} from '../../components/ar';
import {IAtom, INeutron, IProton, IRing} from '../../interfaces';
import uuid from 'react-native-uuid';
import '../../config/viro-ar';
interface AtomSceneProps {
  atom: IAtom;
}

const AtomScene: React.FC<AtomSceneProps> = ({atom}): JSX.Element => {
  const [neutrons, setNeutrons] = useState<INeutron[]>([]);
  const [protons, setProtons] = useState<IProton[]>([]);
  const [rings, setRings] = useState<IRing[]>([]);

  const {number: atomicNumber, shells, name, atomic_mass: atomicMass} = atom;

  const getRandomPosition = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const createRings = useCallback(() => {
    let baseScale: number = 0.01;
    const ringsArray = shells.map((numOfEletrons: number, index: number) => {
      baseScale += 0.003;
      return {
        id: uuid.v4().toString(),
        scale: [baseScale, baseScale, 0.01],
        animation: {
          name: index % 2 === 0 ? 'loopRotateY' : 'loopRotateZ',
          run: true,
          loop: true,
          interruptible: false,
        },
        rotation: index % 2 !== 0 ? [30, 0, 0] : [90, 0, 0],
        numberOfEletrons: numOfEletrons,
      };
    });
    setRings(ringsArray);
  }, [shells]);

  const createProtons = useCallback(() => {
    const protonsArray: IProton[] = [];
    for (let i = 1; i <= atomicNumber; i++) {
      protonsArray.push({
        id: uuid.v4().toString(),
        position: [0.0087, 0.0087, 0.02],
        // [-+0.0087, 0.0087, 0.02]
      });
    }
    setProtons(protonsArray);
  }, [protons, atomicNumber]);

  const createNeutrons = useCallback(() => {
    // Neutrons = Mass Atomic - Atomic Number
    const numberOfNeutrons = Math.round(atomicMass - atomicNumber);
    console.log({numberOfNeutrons});
    const neutronsArray: INeutron[] = [];
    for (let i = 1; i <= numberOfNeutrons; i++) {
      neutronsArray.push({
        id: uuid.v4().toString(),
        position: [
          getRandomPosition(-0.005, 0.005),
          getRandomPosition(-0.005, 0.005),
          0.02,
        ],
      });
    }

    setNeutrons(neutronsArray);
  }, [atomicMass, atomicNumber, neutrons]);

  useEffect(() => {
    createNeutrons();
    createProtons();
    createRings();
  }, []);

  useEffect(() => {
    console.log(name, atomicNumber, shells);
  }, []);

  return (
    <ViroARScene>
      <ViroARImageMarker target={`${atom.number.toString()}`}>
        <AtomAR
          atom={atom}
          neutrons={neutrons}
          protons={protons}
          rings={rings}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default AtomScene;
