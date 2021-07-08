/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text} from 'native-base';
import {AtomContainer, AtomSymbol} from './styles';
import AtomI from '../../../../interfaces/atom';

interface AtomProps {
  data: AtomI;
}

export const Atom: React.FC<AtomProps> = ({data}: AtomProps) => {
  const {name, symbol} = data;
  return (
    <AtomContainer>
      <AtomSymbol>
        <Text>{symbol}</Text>
      </AtomSymbol>
      <Text>{name}</Text>
    </AtomContainer>
  );
};
