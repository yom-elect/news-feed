import React from 'react';
import {Image, ActivityIndicator, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '@shopify/restyle';

const Avatar = ({size = 'sm', imgSrc, loading}) => {
  const theme = useTheme();
  const {full} = theme.borderRadii;

  const dimension = size === 'sm' ? RFValue(40) : RFValue(120);

  return (
    <>
      {loading && (
        <View
          style={{
            position: 'absolute',
            height: dimension,
            width: dimension,
            borderRadius: dimension / 2,
            backgroundColor: '#00000080',
            zIndex: 1000,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator color="white" />
        </View>
      )}
      <Image
        source={imgSrc}
        style={{
          height: dimension,
          width: dimension,
          borderRadius: full,
          backgroundColor: 'rgba(0,0,0, 0.2)',
        }}
      />
    </>
  );
};

export default Avatar;
