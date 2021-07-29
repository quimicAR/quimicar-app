/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Atom} from './Atom';
import {IAtom} from '../../../interfaces';
import {AtomListContainer} from './styles';

export const AtomsList: React.FC = () => {
  const [atomsData, setAtomsData] = useState<IAtom[]>([]);
  const navigation = useNavigation();

  const fetchData = async (): Promise<void> => {
    const resp = await fetch('https://periodic-table-api.herokuapp.com/');
    const data = await resp.json();
    setAtomsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AtomListContainer>
      <FlatList<IAtom>
        data={atomsData}
        renderItem={({item}) => (
          <Atom
            openAR={() => navigation.navigate('Atom', {atomData: item})}
            data={item}
          />
        )}
        keyExtractor={({atomicNumber}) => atomicNumber}
        extraData={atomsData}
        removeClippedSubviews
        maxToRenderPerBatch={15}
      />
    </AtomListContainer>
  );
};
