import React from 'react';
import {
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView
} from 'react-native';

const KeyboardAvoidingView = ({
  children,
  behavior = Platform.OS === 'ios' ? 'padding' : 'height',
  ...props
}) => {
  return (
    <RNKeyboardAvoidingView behavior={behavior} style={{flex: 1}} {...props}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

export default KeyboardAvoidingView;
