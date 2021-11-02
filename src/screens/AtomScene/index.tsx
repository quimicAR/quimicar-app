/* eslint-disable @typescript-eslint/naming-convention */
import React, {useEffect} from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAnimations,
} from '@viro-community/react-viro';
import {AtomAR} from '../../components/ar';
import {IAtom, IEletron, IProton, IRing, INeutron} from '../../interfaces';
import generateTargets from './generate-targets';

interface AtomSceneProps {
  atom: IAtom;
}

const AtomScene: React.FC<AtomSceneProps> = ({
  atom: {shells, name, atomic_mass, number},
}): JSX.Element => {
  const eletrons = (numOfEletrons: number): IEletron[] => {
    const eletronsArray: IEletron[] = [];
    for (let i = 1; i !== numOfEletrons; i++) {
      eletronsArray.push({
        id: i,
        position: [-0.02, 0, 0.02], // needs to randomize
      });
    }
    return eletronsArray;
  };

  const rings = (): IRing[] => {
    let baseScale: number = 0.01;
    const ringsArray = shells.map((numOfEletrons: number, index: number) => {
      baseScale += 0.01;
      return {
        id: index,
        scale: [baseScale, baseScale, 0.01],
        animation: {
          name: 'loopRotate',
          run: true,
          loop: true,
        },
        eletrons: eletrons(numOfEletrons),
      };
    });
    console.log(ringsArray);
    return ringsArray;
  };

  const protons = (): IProton[] => {
    const protonsArray: IProton[] = [];
    for (let i = 1; i !== number; i++) {
      protonsArray.push({
        id: i,
        position: [0, 0, 0.02], // needs to randonmize too
      });
    }
    return protonsArray;
  };

  const neutrons = (): INeutron[] => {
    const neutronsArray: INeutron[] = [];
    for (let i = 1; i !== number; i++) {
      neutronsArray.push({
        id: i,
        position: [0, 0, 0.02], // needs to randonmize too
      });
    }
    return neutronsArray;
  };

  return (
    <ViroARScene>
      <ViroARImageMarker target={`${number.toString()}`}>
        <AtomAR
          rings={rings()}
          protons={protons()}
          neutrons={neutrons()}
          text={{
            name,
            atomicMass: atomic_mass.toString(),
            atomicNum: number.toString(),
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
  '1': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/1.png'),
  },
  '2': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/2.png'),
  },
  '3': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/3.png'),
  },
  '4': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/4.png'),
  },
  '5': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/5.png'),
  },
  '6': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/6.png'),
  },
  '7': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/7.png'),
  },
  '8': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/8.png'),
  },
  '9': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/9.png'),
  },
  '10': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/10.png'),
  },
  '11': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/11.png'),
  },
  '12': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/12.png'),
  },
  '13': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/13.png'),
  },
  '14': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/14.png'),
  },
  '15': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/15.png'),
  },
  '16': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/16.png'),
  },
  '17': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/17.png'),
  },
  '18': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/18.png'),
  },
  '19': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/19.png'),
  },
  '20': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/20.png'),
  },
  '21': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/21.png'),
  },
  '22': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/22.png'),
  },
  '23': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/23.png'),
  },
  '24': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/24.png'),
  },
  '25': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/25.png'),
  },
  '26': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/26.png'),
  },
  '27': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/27.png'),
  },
  '28': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/28.png'),
  },
  '29': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/29.png'),
  },
  '30': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/30.png'),
  },
  '31': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/31.png'),
  },
  '32': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/32.png'),
  },
  '33': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/33.png'),
  },
  '34': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/34.png'),
  },
  '35': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/35.png'),
  },
  '36': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/36.png'),
  },
  '37': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/37.png'),
  },
  '38': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/38.png'),
  },
  '39': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/39.png'),
  },
  '40': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/40.png'),
  },
  '41': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/41.png'),
  },
  '42': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/42.png'),
  },
  '43': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/43.png'),
  },
  '44': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/44.png'),
  },
  '45': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/45.png'),
  },
  '46': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/46.png'),
  },
  '47': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/47.png'),
  },
  '48': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/48.png'),
  },
  '49': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/49.png'),
  },
  '50': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/50.png'),
  },
  '51': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/51.png'),
  },
  '52': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/52.png'),
  },
  '53': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/53.png'),
  },
  '54': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/54.png'),
  },
  '55': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/55.png'),
  },
  '56': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/56.png'),
  },
  '57': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/57.png'),
  },
  '58': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/58.png'),
  },
  '59': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/59.png'),
  },
  '60': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/60.png'),
  },
  '61': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/61.png'),
  },
  '62': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/62.png'),
  },
  '63': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/63.png'),
  },
  '64': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/64.png'),
  },
  '65': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/65.png'),
  },
  '66': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/66.png'),
  },
  '67': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/67.png'),
  },
  '68': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/68.png'),
  },
  '69': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/69.png'),
  },
  '70': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/70.png'),
  },
  '71': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/71.png'),
  },
  '72': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/72.png'),
  },
  '73': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/73.png'),
  },
  '74': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/74.png'),
  },
  '75': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/75.png'),
  },
  '76': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/76.png'),
  },
  '77': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/77.png'),
  },
  '78': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/78.png'),
  },
  '79': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/79.png'),
  },
  '80': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/80.png'),
  },
  '81': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/81.png'),
  },
  '82': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/82.png'),
  },
  '83': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/83.png'),
  },
  '84': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/84.png'),
  },
  '85': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/85.png'),
  },
  '86': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/86.png'),
  },
  '87': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/87.png'),
  },
  '88': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/88.png'),
  },
  '89': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/89.png'),
  },
  '90': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/90.png'),
  },
  '91': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/91.png'),
  },
  '92': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/92.png'),
  },
  '93': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/93.png'),
  },
  '94': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/94.png'),
  },
  '95': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/95.png'),
  },
  '96': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/96.png'),
  },
  '97': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/97.png'),
  },
  '98': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/98.png'),
  },
  '99': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/99.png'),
  },
  '100': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/100.png'),
  },
  '101': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/101.png'),
  },
  '102': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/102.png'),
  },
  '103': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/103.png'),
  },
  '104': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/104.png'),
  },
  '105': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/105.png'),
  },
  '106': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/106.png'),
  },
  '107': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/107.png'),
  },
  '108': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/108.png'),
  },
  '109': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/109.png'),
  },
  '110': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/110.png'),
  },
  '111': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/111.png'),
  },
  '112': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/112.png'),
  },
  '113': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/113.png'),
  },
  '114': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/114.png'),
  },
  '115': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/115.png'),
  },
  '116': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/116.png'),
  },
  '117': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/117.png'),
  },
  '118': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./res/118.png'),
  },
  // '119': {
  //   orientation: 'Up',
  //   physicalWidth: 0.1,
  //   source: './res/119.png',
  // },
});

export default AtomScene;
