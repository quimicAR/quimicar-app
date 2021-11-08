import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Atom} from './Atom';
import {IAtom} from '../../../interfaces';
import {AtomListContainer} from './styles';
import {getAllElements} from '../../../services/elements/get-all';

const ITEM_HEIGHT = 119;
export const AtomsList: React.FC = () => {
  const [atomsData, setAtomsData] = useState<IAtom[]>([]);
  const navigation = useNavigation();

  const loadElements = () => {
    getAllElements()
      .then(({data}) => {
        const filtered = data.filter(atom => atom.enabled);
        setAtomsData(filtered);
      })
      .catch((error: any) => console.log(error));
  };

  const renderItem = useCallback(
    ({item}) => (
      <Atom
        openAR={() => {
          navigation.navigate('Atom', {atomData: item, title: item.name});
        }}
        data={item}
      />
    ),
    [navigation],
  );

  const keyExtractor = useCallback(({number}) => number.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  useEffect(() => {
    loadElements();
  }, []);

  return (
    <AtomListContainer>
      <FlatList<IAtom>
        data={atomsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
      />
    </AtomListContainer>
  );
};
