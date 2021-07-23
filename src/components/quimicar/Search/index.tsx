import React from 'react';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Search: React.FC = (): JSX.Element => {
  return (
    <Input
      w="90%"
      m={3}
      pr={5}
      variant="filled"
      placeholder="Search..."
      InputRightElement={<Icon name="search" color="#333" size={30} />}
      _light={{
        placeholderTextColor: 'blueGray.400',
      }}
      _dark={{
        placeholderTextColor: 'blueGray.50',
      }}
    />
  );
};
