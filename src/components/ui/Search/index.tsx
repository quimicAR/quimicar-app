import React from 'react';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

interface SearchProps {
  value: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const Search: React.FC<SearchProps> = ({
  onChange,
  value,
}): JSX.Element => {
  return (
    <Input
      w="94%"
      h="12"
      m={3}
      pr={10}
      variant="filled"
      placeholder="Search element..."
      value={value}
      onChange={onChange}
      InputRightElement={<Icon name="search" color="#333" size={25} />}
      _light={{
        placeholderTextColor: 'blueGray.400',
      }}
      _dark={{
        placeholderTextColor: 'blueGray.50',
      }}
    />
  );
};
