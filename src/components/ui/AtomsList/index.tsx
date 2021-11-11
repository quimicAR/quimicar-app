import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Atom} from './Atom';
import {IElement} from '../../../interfaces';
import {AtomListContainer} from './styles';

const ITEM_HEIGHT = 119;
interface AtomsListProps {
  data: IElement[];
}

export const AtomsList: React.FC<AtomsListProps> = ({data}) => {
  const navigation = useNavigation();

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
    (item, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <AtomListContainer>
      <FlatList<IElement>
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
      />
    </AtomListContainer>
  );
};
