/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IAtom} from '../../interfaces';
import AtomScene from '../AtomScene';

type ParamsList = {
  ARNavigator: {
    atomData: IAtom;
  };
};

export default function ARNavigator(): JSX.Element {
  const route = useRoute<RouteProp<ParamsList, 'ARNavigator'>>();

  const {atomData} = route.params;
  console.log(atomData.name);
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: () => <AtomScene atom={atomData} />,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
    />
  );
}
