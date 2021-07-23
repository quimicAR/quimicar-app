/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Box, Text} from 'native-base';
import {AtomContainer, AtomSymbol} from './styles';
import AtomI from '../../../../interfaces/atom';
import HelloWorldSceneAR from '../../HelloWorld';

interface AtomProps {
  data: AtomI;
  openAR: any;
}

export const Atom: React.FC<AtomProps> = ({data, openAR}: AtomProps) => {
  const {name, symbol, atomicNumber} = data;

  return (
    <AtomContainer onPress={() => openAR()}>
      <Box flexDirection="row">
        <AtomSymbol>
          <Box justifyContent="flex-start" w={10}>
            <Text fontSize={10} fontWeight={300}>
              {atomicNumber}
            </Text>
          </Box>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            {symbol}
          </Text>
        </AtomSymbol>
        <Text>{name}</Text>
      </Box>
    </AtomContainer>
  );
};
