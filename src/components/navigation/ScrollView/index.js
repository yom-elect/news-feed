import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';

const ScrollView = ({children, showsVerticalScrollIndicator = false, ...props}) => {
  return (
    <RNScrollView
      {...props}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
