/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {Text, Box, Avatar} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {FamilyFilterContainer} from './styles';
import AtomI from '../../../interfaces/atom';

export const FamilyFilter: React.FC = () => {
  const [family, setFamily] = useState<any[]>([]);

  const fetchData = async (): Promise<void> => {
    const resp = await fetch('https://periodic-table-api.herokuapp.com/');
    const data = await resp.json();
    const familys = [...new Set(data.map((atom: AtomI) => atom.groupBlock))];
    console.log(familys);
    setFamily(familys);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FamilyFilterContainer>
      <Text mb={3}>Familias</Text>
      <FlatList<string>
        data={family}
        renderItem={({item}) => (
          <Box mr={3} alignItems="center">
            <Avatar mb={1}>{item.charAt(0).toUpperCase()}</Avatar>
            <Text>{item}</Text>
          </Box>
        )}
        keyExtractor={index => index}
        horizontal
      />
    </FamilyFilterContainer>
  );
};
