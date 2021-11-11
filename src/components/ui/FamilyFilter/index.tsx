/* eslint-disable @typescript-eslint/no-floating-promises */
import {Text, Box, Avatar} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {handleBackground} from '../../../helpers/handle-background';
import api from '../../../services';
import {FamilyFilterContainer} from './styles';

export const FamilyFilter: React.FC = () => {
  const [family, setFamily] = useState<string[]>([]);

  const fetchData = async (): Promise<void> => {
    const {data} = await api.get('/categories');
    setFamily(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FamilyFilterContainer>
      <Text mb={5} fontWeight="bold">
        Groups
      </Text>
      <FlatList<string>
        data={family}
        renderItem={({item}) => (
          <Box mr={3} alignItems="center">
            <Avatar
              mb={1}
              backgroundColor={handleBackground(
                item.replace(' ', '').toLowerCase(),
              )}>
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
