import React from 'react';
import {Switch as RNSwitch} from 'react-native';
import {useTheme} from '@shopify/restyle';


const Switch = ({
  value,
  onValueChange,
}) => {
  const theme = useTheme();
  const {primary, light, grey1} = theme.colors;

  return (
    <RNSwitch
      value={value}
      thumbColor={light}
      ios_backgroundColor={grey1}
      onValueChange={onValueChange}
      trackColor={{false: '#767577', true: primary}}
    />
  );
};

export default Switch;
