import React from 'react';
import {useTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

import * as DIMENSIONS from '../../../constant/dimensions';
import Alert from './Alert';
import Bell from './Bell';
import BlackWhite from './BlackWhite';
import Bloc from './Bloc';
import BlocBold from './BlocBold';
import BlocJoin from './BlocJoin';
import Bookmark from './Bookmark';
import Bookmarked from './Bookmarked';
import Camera from './Camera';
import Check from './Check';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import Close from './Close';
import Cog from './Cog';
import Ellipsis from './Ellipsis';
import Explore from './Explore';
import ExploreBold from './ExploreBold';
import Eye from './Eye';
import EyeFilled from './EyeFilled';
import EyeOutline from './EyeOutline';
import FlashOff from './FlashOff';
import FlashOn from './FlashOn';
import FlipVertical from './FlipVertical';
import Home from './Home';
import HomeBold from './HomeBold';
import Message from './Message';
import MinusCircle from './MinusCircle';
import PlayCircle from './PlayCircle';
import Profile from './Profile';
import ProfileBold from './ProfileBold';
import CameraOff from './CameraOff';
import ArrowUpRight from './ArrowUpRight';
import Dots from './Dots';
import Mute from './Mute';
import Flag from './Flag';
import Cancel from './Cancel';
import Done from './Done';

const Icon = ({
  name,
  color = 'tertiary',
  width = RFValue(DIMENSIONS.ICON_DEFAULT_HEIGHT),
  height = RFValue(DIMENSIONS.ICON_DEFAULT_HEIGHT),
  onPress,
}) => {
  const theme = useTheme();

  const rFWidth = RFValue(width);
  const rFHeight = RFValue(height);
  const xmlColor = theme.colors[color];

  switch (name) {
    case 'alert':
      return <Alert width={rFWidth} height={rFHeight} color={xmlColor} />;
    case 'bell':
      return <Bell width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'black_white':
      return <BlackWhite width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'bloc':
      return <Bloc width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'bloc__bold':
      return <BlocBold width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'bloc_join':
      return <BlocJoin width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'bookmark':
      return <Bookmark width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'bookmarked':
      return <Bookmarked width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'camera':
      return <Camera width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'check':
      return <Check width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'chevron-left':
      return <ChevronLeft width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'chevron-right':
      return (
        <ChevronRight width={rFWidth} height={rFHeight} color={xmlColor} />
      );

    case 'close':
      return <Close width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'cog':
      return <Cog width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'ellipsis':
      return <Ellipsis width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'explore':
      return <Explore width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'explore__bold':
      return <ExploreBold width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'eye':
      return <Eye width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'eye-filled':
      return <EyeFilled width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'eye__outline':
      return <EyeOutline width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'flash__off':
      return <FlashOff width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'flash__on':
      return <FlashOn width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'flip_vertical':
      return (
        <FlipVertical width={rFWidth} height={rFHeight} color={xmlColor} />
      );

    case 'home':
      return <Home width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'home__bold':
      return <HomeBold width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'message':
      return <Message width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'minus__circle':
      return <MinusCircle width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'play__circle':
      return <PlayCircle width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'profile':
      return <Profile width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'profile__bold':
      return <ProfileBold width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'camera-off':
      return <CameraOff width={rFWidth} height={rFHeight} color={xmlColor} />;

    case 'arrow-up-right':
      return (
        <ArrowUpRight width={rFWidth} height={rFHeight} color={xmlColor} />
      );
    case 'dots':
      return (
        <Dots
          onPress={onPress}
          width={rFWidth}
          height={rFHeight}
          color={xmlColor}
        />
      );
    case 'mute':
      return <Mute width={rFWidth} height={rFHeight} color={xmlColor} />;
    case 'flag':
      return <Flag width={rFWidth} height={rFHeight} color={xmlColor} />;
    case 'cancel':
      return <Cancel width={rFWidth} height={rFHeight} color={xmlColor} />;
    case 'done':
      return <Done width={rFWidth} height={rFHeight} color={xmlColor} />;
    default:
      return <ChevronLeft width={rFWidth} height={rFHeight} color={xmlColor} />;
  }
};

export default Icon;
