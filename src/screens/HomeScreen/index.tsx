import React, {useCallback, useEffect, useState} from 'react';
import {AtomsList, FamilyFilter, Search, Alert} from '../../components';
import {Box} from 'native-base';
import {IElement} from '../../interfaces';
import {getAllElements} from '../../services/elements/get-all';

const HomeScreen: React.FC = () => {
  const [atomsData, setAtomsData] = useState<IElement[]>([]);
  const [filteredAtoms, setFilteredAtoms] = useState<IElement[]>([]);
  const [searchAtoms, setSearchAtoms] = useState('');

  const loadElements = () => {
    getAllElements()
      .then(({data}) => {
        const filtered = data.filter(atom => atom.enabled);
        setAtomsData(filtered);
        setFilteredAtoms(filtered);
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

  return (
    <Box flex={1}>
      <Search
        onChange={event => setSearchAtoms(event.nativeEvent.text)}
        value={searchAtoms}
      />
      <FamilyFilter />
      <AtomsList data={filteredAtoms} />
    </Box>
  );
};

export default HomeScreen;
