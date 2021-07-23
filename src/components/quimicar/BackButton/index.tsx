import React from 'react';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return <Button onPress={() => navigation.goBack()} color="#333" />;
};
