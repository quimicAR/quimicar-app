import {Box} from 'native-base';
import React from 'react';
import {AtomsList, FamilyFilter, Search} from '../../components';

const HomeScreen: React.FC = () => {
  return (
    <Box flex={1}>
      <Search />
      <FamilyFilter />
      <AtomsList />
    </Box>
  );
};

export default HomeScreen;
