/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {AtomsList, FamilyFilter, Search} from '../../components';

const HomeScreen: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Search />
      <FamilyFilter />
      <AtomsList />
    </View>
  );
};

export default HomeScreen;
