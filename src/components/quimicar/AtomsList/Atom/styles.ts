import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const AtomContainer = styled(TouchableOpacity)`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const AtomSymbol = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a1d344; 
  padding: 5px;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 15px;
`;
