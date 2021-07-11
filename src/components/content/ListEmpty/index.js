import React from 'react';
import Box from '../Box';
import Text from '../Text';

const ListEmpty = ({
  title,
  description,
}) => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Text textAlign="center" paddingTop="xl" fontSize={18} fontWeight="bold">
      {title}
    </Text>
    <Text textAlign="center" paddingTop="m">
      {description}
    </Text>
  </Box>
);

export default ListEmpty;
