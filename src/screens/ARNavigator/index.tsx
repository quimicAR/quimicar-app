import React, {useEffect} from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {IAtom} from '../../interfaces';
import AtomScene from '../AtomScene';

type ParamsList = {
  ARNavigator: {
    atomData: IAtom;
  };
};

export default function ARNavigator(): JSX.Element {
  const route = useRoute<RouteProp<ParamsList, 'ARNavigator'>>();
  const navigation = useNavigation();

  const {atomData} = route.params;

  useEffect(() => {
    navigation.setOptions({title: atomData.name});
  }, [atomData.name, navigation]);

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: () => <AtomScene atom={atomData} />,
      }}
      key={atomData.number}
      style={{flex: 1}}
    />
  );
}
