import {
  ViroARTrackingTargets,
  ViroAnimations,
  ViroMaterials,
} from '@viro-community/react-viro';

export const buildObjPath = (numberOfEletrons: number) => {
  switch (numberOfEletrons) {
    case 1:
      return require('./res/1/1.obj');
    case 2:
      return require('./res/2/2.obj');
    case 3:
      return require('./res/3/3.obj');
    case 4:
      return require('./res/4/4.obj');
    case 5:
      return require('./res/5/5.obj');
    case 6:
      return require('./res/6/6.obj');
    case 7:
      return require('./res/7/7.obj');
    case 8:
      return require('./res/8/8.obj');
    case 9:
      return require('./res/9/9.obj');
    case 10:
      return require('./res/10/10.obj');
    case 11:
      return require('./res/11/11.obj');
    case 12:
      return require('./res/12/12.obj');
    case 13:
      return require('./res/13/13.obj');
    case 14:
      return require('./res/14/14.obj');
    case 15:
      return require('./res/15/15.obj');
    case 16:
      return require('./res/16/16.obj');
    case 17:
      return require('./res/17/17.obj');
    case 18:
      return require('./res/18/18.obj');
  }
};

export const buildResourcePath = (numberOfEletrons: number) => {
  switch (numberOfEletrons) {
    case 1:
      return require('./res/1/1.mtl');
    case 2:
      return require('./res/2/2.mtl');
    case 3:
      return require('./res/3/3.mtl');
    case 4:
      return require('./res/4/4.mtl');
    case 5:
      return require('./res/5/5.mtl');
    case 6:
      return require('./res/6/6.mtl');
    case 7:
      return require('./res/7/7.mtl');
    case 8:
      return require('./res/8/8.mtl');
    case 9:
      return require('./res/9/9.mtl');
    case 10:
      return require('./res/10/10.mtl');
    case 11:
      return require('./res/11/11.mtl');
    case 12:
      return require('./res/12/12.mtl');
    case 13:
      return require('./res/13/13.mtl');
    case 14:
      return require('./res/14/14.mtl');
    case 15:
      return require('./res/15/15.mtl');
    case 16:
      return require('./res/16/16.mtl');
    case 17:
      return require('./res/17/17.mtl');
    case 18:
      return require('./res/18/18.mtl');
  }
};

ViroAnimations.registerAnimations({
  loopRotateY: {
    properties: {
      rotateY: '+=40',
    },
    duration: 1000,
  },
  loopRotateX: {
    properties: {
      rotateX: '+=40',
    },
    duration: 1000,
  },
  loopRotateZ: {
    properties: {
      rotateZ: '+=40',
    },
    duration: 1000,
  },
});

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

ViroARTrackingTargets.createTargets({
  '1': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/1.png'),
  },
  '2': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/2.png'),
  },
  '3': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/3.png'),
  },
  '4': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/4.png'),
  },
  '5': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/5.png'),
  },
  '6': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/6.png'),
  },
  '7': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/7.png'),
  },
  '8': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/8.png'),
  },
  '9': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/9.png'),
  },
  '10': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/10.png'),
  },
  '11': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/11.png'),
  },
  '12': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/12.png'),
  },
  '13': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/13.png'),
  },
  '14': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/14.png'),
  },
  '15': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/15.png'),
  },
  '16': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/16.png'),
  },
  '17': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/17.png'),
  },
  '18': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/18.png'),
  },
  '19': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/19.png'),
  },
  '20': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/20.png'),
  },
  '21': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/21.png'),
  },
  '22': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/22.png'),
  },
  '23': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/23.png'),
  },
  '24': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/24.png'),
  },
  '25': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/25.png'),
  },
  '26': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/26.png'),
  },
  '27': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/27.png'),
  },
  '28': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/28.png'),
  },
  '29': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/29.png'),
  },
  '30': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/30.png'),
  },
  '31': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/31.png'),
  },
  '32': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/32.png'),
  },
  '33': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/33.png'),
  },
  '34': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/34.png'),
  },
  '35': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/35.png'),
  },
  '36': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/36.png'),
  },
  '37': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/37.png'),
  },
  '38': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/38.png'),
  },
  '39': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/39.png'),
  },
  '40': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/40.png'),
  },
  '41': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/41.png'),
  },
  '42': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/42.png'),
  },
  '43': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/43.png'),
  },
  '44': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/44.png'),
  },
  '45': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/45.png'),
  },
  '46': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/46.png'),
  },
  '47': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/47.png'),
  },
  '48': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/48.png'),
  },
  '49': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/49.png'),
  },
  '50': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/50.png'),
  },
  '51': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/51.png'),
  },
  '52': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/52.png'),
  },
  '53': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/53.png'),
  },
  '54': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/54.png'),
  },
  '55': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/55.png'),
  },
  '56': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/56.png'),
  },
  '57': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/57.png'),
  },
  '58': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/58.png'),
  },
  '59': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/59.png'),
  },
  '60': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/60.png'),
  },
  '61': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/61.png'),
  },
  '62': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/62.png'),
  },
  '63': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/63.png'),
  },
  '64': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/64.png'),
  },
  '65': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/65.png'),
  },
  '66': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/66.png'),
  },
  '67': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/67.png'),
  },
  '68': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/68.png'),
  },
  '69': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/69.png'),
  },
  '70': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/70.png'),
  },
  '71': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/71.png'),
  },
  '72': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/72.png'),
  },
  '73': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/73.png'),
  },
  '74': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/74.png'),
  },
  '75': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/75.png'),
  },
  '76': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/76.png'),
  },
  '77': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/77.png'),
  },
  '78': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/78.png'),
  },
  '79': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/79.png'),
  },
  '80': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/80.png'),
  },
  '81': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/81.png'),
  },
  '82': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/82.png'),
  },
  '83': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/83.png'),
  },
  '84': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/84.png'),
  },
  '85': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/85.png'),
  },
  '86': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/86.png'),
  },
  '87': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/87.png'),
  },
  '88': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/88.png'),
  },
  '89': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/89.png'),
  },
  '90': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/90.png'),
  },
  '91': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/91.png'),
  },
  '92': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/92.png'),
  },
  '93': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/93.png'),
  },
  '94': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/94.png'),
  },
  '95': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/95.png'),
  },
  '96': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/96.png'),
  },
  '97': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/97.png'),
  },
  '98': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/98.png'),
  },
  '99': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/99.png'),
  },
  '100': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/100.png'),
  },
  '101': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/101.png'),
  },
  '102': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/102.png'),
  },
  '103': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/103.png'),
  },
  '104': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/104.png'),
  },
  '105': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/105.png'),
  },
  '106': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/106.png'),
  },
  '107': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/107.png'),
  },
  '108': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/108.png'),
  },
  '109': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/109.png'),
  },
  '110': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/110.png'),
  },
  '111': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/111.png'),
  },
  '112': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/112.png'),
  },
  '113': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/113.png'),
  },
  '114': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/114.png'),
  },
  '115': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/115.png'),
  },
  '116': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/116.png'),
  },
  '117': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/117.png'),
  },
  '118': {
    orientation: 'Up',
    physicalWidth: 0.1,
    source: require('./markers/118.png'),
  },
  // '119': {
  //   orientation: 'Up',
  //   physicalWidth: 0.1,
  //   source: './markers/119.png',
  // },
});
