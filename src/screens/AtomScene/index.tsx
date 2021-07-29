/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAnimations,
} from '@viro-community/react-viro';
import {AtomAR} from '../../components/ar';
import {IAtom, IProton, IRing} from '../../interfaces';

interface IAtomSceneProps {
  atom: IAtom;
}

interface IEnergeticLevel {
  id: number;
  name: string;
  maxElectrons: number;
}

/**
 * source -> ['https://sciencing.com/calculate-charge-ion-5955179.html', 'https://www.quora.com/What-is-the-formula-for-finding-the-number-of-shells-of-a-given-atomic-number#:~:text=an%20outer%20shell-,The%20chemical%20properties%20of%20the%20atom%20can%20determine%20by%20the,in%20the%20outer%20most%20shell%20.&text=For%20example%20if%20the%20shell,1)%5E2%3D2%20.']
 *
 * 1 - Method to calculate number of AtomRings
 * 2 - Eletrons and Protons = Atomic Number
 * 3 - Neutrons = round(Atomic Mass) - Atomic Number
 * 4 - To calculate number of AtomRings we need to know the max number of Electrons per Ring,
 *     to do this we need to do 2.n^2. Where (n) is the Ring number
 */

/**
 * Idea to Algorithm that calculate the AtomRing (Eletronic Configuration)
 * 1 - Get the Atomic Number
 * 2 - Calculate the number of Electrons per Ring (To do so we can iterate from 1 to 7, for each ring calculate 2.n^2 and if any electron remain we run the iteration again trying to alocate those remaining Electrons)
 * 3 - return an object w/:
 * {
 *  rings: [
 *    {
 *     id: 1,
 *     name: 'K',
 *     electrons: [...] // in the first ring we can only have 2 electrons
 *    }
 *  ]
 * }
 */

const AtomScene: React.FC<IAtomSceneProps> = ({atom}): JSX.Element => {
  const protons: IProton[] = [
    {
      id: 1,
      position: [0, 0, 0.02],
    },
  ];

  const rings: IRing[] = [
    {
      id: 1,
      scale: [0.04, 0.04, 0.04],
      animation: {
        name: 'loopRotate',
        run: true,
        loop: true,
      },
      eletrons: [
        {
          id: 1,
          position: [-0.02, 0, 0.02],
        },
      ],
    },
  ];

  const calculateAtomRings = (): any => {
    const energeticLevels: IEnergeticLevel[] = [
      {
        id: 1,
        name: 'K',
        maxElectrons: 2,
      },
      {
        id: 2,
        name: 'L',
        maxElectrons: 8,
      },
      {
        id: 3,
        name: 'M',
        maxElectrons: 18,
      },
      {
        id: 4,
        name: 'N',
        maxElectrons: 32,
      },
      {
        id: 5,
        name: 'O',
        maxElectrons: 32,
      },
      {
        id: 6,
        name: 'P',
        maxElectrons: 18,
      },
      {
        id: 7,
        name: 'Q',
        maxElectrons: 8,
      },
    ];
    const energeticSubLevels: IEnergeticLevel[] = [
      {
        id: 0,
        name: 's',
        maxElectrons: 2,
      },
      {
        id: 1,
        name: 'p',
        maxElectrons: 6,
      },
      {
        id: 2,
        name: 'd',
        maxElectrons: 10,
      },
      {
        id: 3,
        name: 'f',
        maxElectrons: 14,
      },
    ];
  };

  useEffect(() => {
    calculateAtomRings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ViroARScene>
      <ViroARImageMarker target={'hydrogen'}>
        <AtomAR
          rings={rings}
          protons={protons}
          text={{
            name: atom.name,
            atomicMass: atom.atomicMass,
            atomicNum: atom.atomicNumber,
          }}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

ViroAnimations.registerAnimations({
  loopRotate: {
    properties: {
      rotateY: '+=40',
    },
    duration: 500,
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 500,
  },
});

ViroARTrackingTargets.createTargets({
  hydrogen: {
    source: require('./res/hydrogen.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
});

export default AtomScene;

// let remainingElectrons = true; // flag to validate if we alocate all electrons

// // let electrons = [];
// // let ringsAux: any = [];
// for (
//   let ringNumber = 1;
//   ringNumber <= 7 && remainingElectrons;
//   ringNumber++
// ) {
//   const maxElectronsPerRing = 2 * ringNumber ** 2; // calculate max electrons per ring

//   electronsCount -= maxElectronsPerRing; // subtract the possible electrons for the specific ring

//   // if the number of electronsCount is not positive,
//   // it means we alocate all the electrons in a Ring, so we can break iteration
//   if (electronsCount <= 0) {
//     console.log('Electrons remaining: ', electronsCount);
//     remainingElectrons = false;
//   } else {
//     // if not
//     console.log(
//       `Max Electrons in Ring(${ringNumber}): `,
//       maxElectronsPerRing,
//     );
//     console.log('Electrons remaining: ', electronsCount);
//   }
// }
