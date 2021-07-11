import React from 'react';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import * as DIMENSIONS from '../../../constant/dimensions';
import Button from '../../inputs/Button';
import Box from '../Box';
import Text from '../Text';
import Avatar from '../Avatar';

const Comment = ({ data }) => {
  return (
    <Box paddingHorizontal="m">
      <Box
        paddingVertical="m"
        borderBottomColor="alt2"
        borderBottomWidth={StyleSheet.hairlineWidth}>
        <Box flexDirection="row" marginBottom="s">
          <Button alignItems="center" flexDirection="row" onPress={() => null}>
            <Avatar imgSrc={{uri: data.avatar}} />
            <Text
              marginLeft="s"
              variant="p-sm"
              color="tertiary"
              fontWeight="700"
              numberOfLines={1}>
              {data.name}
            </Text>
          </Button>
        </Box>

        <Text
          variant="p-sm"
          color="tertiary"
          lineHeight={RFValue(DIMENSIONS.COMMENT_LINE_HEIGHT)}>
          {data.comment}
        </Text>
      </Box>
    </Box>
  );
};

export default Comment;
