import React from 'react';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import * as DIMENSIONS from '../../../constant/dimensions';
import Box from '../../content/Box';
import Button from '../../inputs/Button';
import Icon from '../../content/Icon';
import Text from '../../content/Text';

import NetworkOverlay from '../../content/NetworkOverlay';

const Header = ({
  scene,
  previous,
  navigation,
  RightEl,
  LeftEl = undefined,
  bottomBorderType = 'fullWithPadding',
}) => {
  const noBottomBorder = bottomBorderType === 'none';

  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Box>
      <Box
        paddingHorizontal="m"
        backgroundColor="light"
        borderBottomColor="alt2"
        justifyContent="flex-end"
        height={RFValue(DIMENSIONS.HEADER_HEIGHT)}
        borderBottomWidth={noBottomBorder ? 0 : StyleSheet.hairlineWidth}>
        <Box
          flexWrap="wrap"
          alignItems="center"
          flexDirection="row"
          marginHorizontal="-s"
          height={RFValue(DIMENSIONS.HEADER_HEIGHT / 2)}>
          <Box
            width="25%"
            height="100%"
            alignItems="center"
            flexDirection="row"
            paddingHorizontal="s">
            {previous && LeftEl === undefined ? (
              <Button marginLeft="-s" onPress={navigation.goBack}>
                <Icon
                  color="grey3"
                  name="chevron-left"
                  width={RFValue(30)}
                  height={RFValue(30)}
                />
              </Button>
            ) : (
              LeftEl
            )}
          </Box>

          <Box
            width="50%"
            height="100%"
            paddingHorizontal="s"
            justifyContent="center">
            <Text
              variant="p"
              fontWeight="700"
              color="tertiary"
              textAlign="center"
              style={{lineHeight: RFValue(17)}}>
              {title}
            </Text>
          </Box>

          <Box
            width="25%"
            height="100%"
            paddingHorizontal="s"
            alignItems="flex-end"
            justifyContent="center">
            {RightEl}
          </Box>
        </Box>
      </Box>
      <NetworkOverlay />
    </Box>
  );
};

export default Header;
