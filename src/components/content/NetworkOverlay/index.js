import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux';

const dimensions = Dimensions.get('window');

const NetworkOverlay = () => {
  const isConnected = useSelector((state) => state.settings);

  return !isConnected ? (
    <View style={styles.container}>
      <Text style={styles.text}>No internet connection</Text>
    </View>
  ) : null;
};

export default NetworkOverlay;

const styles = {
  container: {
    width: dimensions.width,
    height: RFValue(40),
    top: RFValue(3),
    right: 0,
    left: 0,
    zIndex: 999999,
    backgroundColor: '#FF401F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
};
