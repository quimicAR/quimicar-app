import {View} from 'react-native';
import styled from 'styled-components/native';

export const AtomContainer = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

export const AtomSymbol = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a1d344;
  padding: 5px;
  width: 55px;
  height: 55px;
  border-radius: 5px;
  margin-right: 15px;
`;
