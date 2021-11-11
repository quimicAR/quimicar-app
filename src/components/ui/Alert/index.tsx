import React from 'react';
import {Box, Text, VStack} from 'native-base';
import {Alert as AlertNB} from 'native-base/src/components/composites/Alert';

interface AlertProps {
  title: string;
  status: 'success' | 'error' | 'info' | 'warning';
  text: string;
}

export const Alert: React.FC<AlertProps> = ({status, text, title}) => {
  return (
    <AlertNB w="100%" status={status}>
      <VStack space={1} flexShrink={1} w="100%" alignItems="center">
        <AlertNB.Icon size="md" />
        <Text
          fontSize="md"
          fontWeight="medium"
          _dark={{
            color: 'coolGray.800',
          }}>
          {title}
        </Text>

        <Box
          _text={{
            textAlign: 'center',
          }}
          _dark={{
            _text: {
              color: 'coolGray.600',
            },
          }}>
          {text}
        </Box>
      </VStack>
    </AlertNB>
  );
};
