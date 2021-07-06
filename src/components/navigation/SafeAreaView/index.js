import React from 'react';
import {SafeAreaView as RNSafeAreaView} from 'react-native';
import {useTheme} from '@shopify/restyle';

const SafeAreaView = ({
  children,
  backgroundColor: color = 'light',
}) => {
  const theme = useTheme();
  const backgroundColor = theme.colors[color];

  return (
    <RNSafeAreaView style={{flex: 1, backgroundColor}}>
      {children}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
