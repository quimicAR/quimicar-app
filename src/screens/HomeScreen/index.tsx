import React, {useCallback, useEffect, useState} from 'react';
import {AtomsList, FamilyFilter, Search, Alert} from '../../components';
import {Box} from 'native-base';
import {IElement} from '../../interfaces';
import {getAllElements} from '../../services/elements/get-all';
import {SplashScreen} from '../SplashScreen';
import {useNavigation} from '@react-navigation/core';

const HomeScreen: React.FC = () => {
  const [atomsData, setAtomsData] = useState<IElement[]>([]);
  const [filteredAtoms, setFilteredAtoms] = useState<IElement[]>([]);
  const [searchAtoms, setSearchAtoms] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const loadElements = () => {
    getAllElements()
      .then(({data}) => {
        const filtered = data.filter(atom => atom.enabled);
        setAtomsData(filtered);
        setFilteredAtoms(filtered);
        setIsLoading(false);
      })
      .catch((error: any) => (
        <Alert status="error" title="Error!" text={error} />
      ));
  };

  const handleSearchAtoms = useCallback(() => {
    if (searchAtoms.length >= 1)
      setFilteredAtoms(
        atomsData.filter(
          atom =>
            atom.name === searchAtoms ||
            atom.number.toString() === searchAtoms ||
            atom.symbol === searchAtoms,
        ),
      );
    else loadElements();
  }, [atomsData, searchAtoms]);

  useEffect(() => {
    loadElements();
  }, []);

  useEffect(() => {
    handleSearchAtoms();
  }, [searchAtoms]);

  useEffect(() => {
    navigation.setOptions({headerShown: !isLoading});
  }, [isLoading]);

  return !isLoading ? (
    <Box flex={1}>
      <Search
        onChange={event => setSearchAtoms(event.nativeEvent.text)}
        value={searchAtoms}
      />
      <FamilyFilter />
      <AtomsList data={filteredAtoms} />
    </Box>
  ) : (
    <SplashScreen />
  );
};

export default HomeScreen;
