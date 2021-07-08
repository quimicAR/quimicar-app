/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Atom} from './Atom';
import AtomI from '../../../interfaces/atom';
import {AtomListContainer} from './styles';

export const AtomsList: React.FC = () => {
  const [atomsData, setAtomsData] = useState<any[]>([]);

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
      <FlatList<AtomI>
        data={atomsData}
        renderItem={({item}) => <Atom data={item} />}
        keyExtractor={({atomicNumber}) => atomicNumber}
        extraData={atomsData}
        removeClippedSubviews
        maxToRenderPerBatch={15}
      />
    </AtomListContainer>
  );
};
