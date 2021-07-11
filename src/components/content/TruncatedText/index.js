import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Button from '../../inputs/Button';
import Box from '../Box';
import Text from '../Text';
import * as DIMENSION from '../../../constant/dimensions';

const TruncatedText= ({
  content,
  excerptLength = 150,
}) => {
  const [fullText, toggleFullText] = useState(false);

  if (fullText || content.length <= excerptLength) {
    return (
      <Text
        variant="p-sm"
        color="tertiary"
        lineHeight={RFValue(DIMENSION.COMMENT_LINE_HEIGHT)}>
        {content}
      </Text>
    );
  }

  return (
    <Text
      variant="p-sm"
      color="tertiary"
      lineHeight={RFValue(DIMENSION.COMMENT_LINE_HEIGHT)}>
      {`${content.substr(0, excerptLength)}...`}
      <Box>
        <Button
          height={RFValue(DIMENSION.COMMENT_LINE_HEIGHT)}
          justifyContent="flex-end"
          onPress={() => toggleFullText(true)}>
          <Text variant="p-sm" color="primary">
            more
          </Text>
        </Button>
      </Box>
    </Text>
  );
};

export default TruncatedText;
