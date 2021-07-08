import React from 'react';
import {View} from 'react-native';
import {AtomsList, FamilyFilter, Search} from '../../components';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Search />
      <FamilyFilter />
      <AtomsList />
    </View>
  );
};

export default HomeScreen;
