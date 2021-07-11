import React, {useEffect, useRef, useState} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

import * as DIMENSIONS from '../../../constant/dimensions';
import Box from '../../content/Box';
import Text from '../../content/Text';
import Button from '../Button';
import KeyboardAvoidingView from '../../navigation/KeyboardAvoidingView';

const Comment = ({handleComment}) => {
  const theme = useTheme();
  const {colors, textVariants} = theme;
  const {secondary, tertiary} = colors;
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  }, []);

  const [comment, setComment] = useState('');

  const submitComment = (comment) => {
    handleComment(comment);
    setComment('');
  };

  return (
    <KeyboardAvoidingView>
       <Box
      alignItems="center"
      borderRadius="full"
      flexDirection="row"
      paddingHorizontal="m"
      backgroundColor="grey1"
      minHeight={RFValue(DIMENSIONS.COMMENT_INPUT_HEIGHT)}>
      <RNTextInput
        ref={inputRef}
        defaultValue={comment}
        onChangeText={setComment}
        returnKeyType="send"
        placeholder="Add comment"
        placeholderTextColor={secondary}
        style={{
          flex: 1,
          height: '100%',
          color: tertiary,
          ...textVariants['p-xs'],
          marginRight: RFValue(16),
        }}
      />

      <Button onPress={() => submitComment(comment)} paddingHorizontal="xs">
        <Text variant="p-xs" color="primary">
          Post
        </Text>
      </Button>
    </Box>
    </KeyboardAvoidingView>
  );
};

export default Comment;
