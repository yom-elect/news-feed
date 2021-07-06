import React from 'react';
import {FlatList as RNFlatList} from 'react-native';

const FlatList = ({showsVerticalScrollIndicator = false, ...props}) => {
  return (
    <RNFlatList
      {...props}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
};

export default FlatList;
