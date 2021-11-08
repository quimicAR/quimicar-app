/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import {Box, Text, Badge} from 'native-base';
import {AtomContainer, AtomSymbol} from './styles';
import AtomI from '../../../../interfaces/atom';
import {formatCategory} from '../../../../helpers/format-category';

interface AtomProps {
  data: AtomI;
  openAR: () => void;
}

export const Atom: React.FC<AtomProps> = ({data, openAR}: AtomProps) => {
  const {name, symbol, number, category, atomic_mass} = data;

  const handleBackground = (): string => {
    switch (formatCategory(category)) {
      case 'alkalineEarthMetals':
        return '#009cc7';
      case 'alkaliMetals':
        return '#fe1110';
      case 'nobleGases':
        return '#6f25a1';
      case 'nonMetal':
        return '#f5be25';
      case 'transitionMetals':
        return '#ff8000';
      case 'lanthanoids':
        return '#cf6142';
      case 'actinoids':
        return '#57733b';
      case 'postTransitionMetals':
        return '#006da4';
      case 'metalloid':
        return '#c41d3d';
      default:
        return '#a1d344';
    }
  };

  return (
    <AtomContainer onPress={() => openAR()}>
      <Box flexDirection="row">
        <AtomSymbol background={handleBackground()}>
          <Box w="full">
            <Text textAlign="right" fontSize={9} fontWeight={700}>
              {number}
            </Text>
          </Box>
          <Text mb={1} fontSize="lg" fontWeight={600}>
            {symbol}
          </Text>
          <Text fontSize="2xs">{atomic_mass.toFixed(4)}</Text>
        </AtomSymbol>
        <Box flexDirection="column" w="full">
          <Box flexDirection="row" m={1}>
            <Text fontSize="md" fontWeight={600} marginRight={2}>
              {name}
            </Text>
            <Badge colorScheme="coolGray">{category}</Badge>
          </Box>
        </Box>
      </Box>
    </AtomContainer>
  );
};
