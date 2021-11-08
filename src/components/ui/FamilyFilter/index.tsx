/* eslint-disable @typescript-eslint/no-floating-promises */
import {Text, Box, Avatar} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {formatCategory} from '../../../helpers/format-category';
import api from '../../../services';
import {FamilyFilterContainer} from './styles';

export const FamilyFilter: React.FC = () => {
  const [family, setFamily] = useState<string[]>([]);

  const fetchData = async (): Promise<void> => {
    const {data} = await api.get('/categories');
    setFamily(data);
  };

  const handleBackground = (item: string): string => {
    const category = item.replace(' ', '').toLowerCase();
    switch (formatCategory(category)) {
      case 'alkalineEarthMetals'.toLowerCase():
        return '#009cc7';
      case 'alkaliMetals'.toLowerCase():
        return '#fe1110';
      case 'nobleGases'.toLowerCase():
        return '#6f25a1';
      case 'nonMetal'.toLowerCase():
        return '#f5be25';
      case 'transitionMetals'.toLowerCase():
        return '#ff8000';
      case 'lanthanoids':
        return '#cf6142';
      case 'actinoids':
        return '#57733b';
      case 'postTransitionMetals'.toLowerCase():
        return '#006da4';
      default:
        return '#a1d344';
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FamilyFilterContainer>
      <Text mb={3} fontWeight="bold">
        Groups
      </Text>
      <FlatList<string>
        data={family}
        renderItem={({item}) => (
          <Box mr={3} alignItems="center">
            <Avatar mb={1} backgroundColor={handleBackground(item)}>
              {item.charAt(0).toUpperCase()}
            </Avatar>
            <Text fontSize="xs">{item}</Text>
          </Box>
        )}
        keyExtractor={index => index}
        horizontal
      />
    </FamilyFilterContainer>
  );
};
