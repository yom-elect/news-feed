import {createTheme} from '@shopify/restyle';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

import * as COLORS from '../constant/colors';

const palette = {
  primary: COLORS.PRIMARY,
  primaryOpacity: COLORS.PRIMARY_OPACITY,
  secondary: COLORS.SECONDARY,
  tertiary: COLORS.TERTIARY,

  alt1: COLORS.ALT1,
  alt2: COLORS.ALT2,
  alt3: COLORS.ALT3,

  grey1: COLORS.GREY1,
  grey2: COLORS.GREY2,
  grey3: COLORS.GREY3,
  grey4: COLORS.GREY4,
  grey5: COLORS.GREY5,

  white: COLORS.WHITE,
  black: COLORS.BLACK,
  shadowLight: COLORS.SHADOW_COLOR_DARK,
  blackOpacity: COLORS.BLACK_OPACITY,
  blackOpacity2: COLORS.BLACK_OPACITY2,
  transparent: COLORS.TRANSPARENT,
  s1: COLORS.S1,
};

export const primaryTheme = createTheme({
  colors: {
    primary: palette.primary,
    primaryOpacity: palette.primaryOpacity,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    alt1: palette.alt1,
    alt2: palette.alt2,
    alt3: palette.alt3,
    grey1: palette.grey1,
    grey2: palette.grey2,
    grey3: palette.grey3,
    grey4: palette.grey4,
    grey5: palette.grey5,
    light: palette.white,
    shadowLight: palette.shadowLight,
    darkOpacity: palette.blackOpacity,
    darkOpacity2: palette.blackOpacity2,
    transparent: palette.transparent,
    s1: COLORS.S1,
  },
  spacing: {
    xs: RFValue(4),
    s: RFValue(8),
    m: RFValue(16),
    l: RFValue(24),
    xl: RFValue(40),

    '-xs': RFValue(-4),
    '-s': RFValue(-8),
    '-m': RFValue(-16),
    '-l': RFValue(-24),
    '-xl': RFValue(-40),
  },
  textVariants: {
    h1: {
      fontSize: RFValue(32),
      fontWeight: '700',
    },
    h2: {
      fontSize: RFValue(24),
      fontWeight: '700',
    },
    h3: {
      fontSize: RFValue(20),
      fontWeight: '700',
    },
    p: {
      fontSize: RFValue(16),
      //lineHeight: RFValue(25),
    },
    'p-sm': {
      fontSize: RFValue(14),
    },
    'p-xs': {
      fontSize: RFValue(12),
    },
  },
  // buttonVariants: {
  //   l: {
  //     padding: 'm',
  //     width: '100%',
  //     borderRadius: 'm',
  //   },
  // },
  breakpoints: {},
  zIndices: {
    s: 10,
  },
  borderRadii: {
    s: RFValue(6),
    m: RFValue(10),
    full: RFPercentage(50),
  },
});
