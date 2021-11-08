import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';
import {Box} from 'native-base';

export const AtomContainer = styled(TouchableOpacity)`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 8px;
`;

interface AtomContainerProps {
  background: string;
}

export const AtomSymbol = styled(Box)<AtomContainerProps>`
  ${({background}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 75px;
    height: 75px;
    border-radius: 5px;
    margin-right: 15px;
    background-color: rgba(30, 30, 30, 0.03);
    border-bottom-color: ${background};
    border-bottom-width: 3px;
  `}
`;
