import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  layout,
  backgroundColor,
} from '@shopify/restyle';

import * as DIMENSIONS from '../../../constant/dimensions';
import Box from '../../content/Box';

const restyleFunctions = [spacing, border, layout, backgroundColor];

const Button = ({onPress, children, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={DIMENSIONS.ACTIVE_OPACITY}>
      <Box {...props}>{children}</Box>
    </TouchableOpacity>
  );
};

export default Button;
