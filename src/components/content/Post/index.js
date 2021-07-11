import React, {useRef, useState, useEffect, memo} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '@shopify/restyle';

import moment from 'moment';
import Carousel from 'react-native-snap-carousel';

import * as ROUTES from '../../../constant/routes';
import Button from '../../inputs/Button';
import Icon from '../Icon';
import Avatar from '../Avatar';
import Box from '../Box';
import Text from '../Text';
import TruncatedText from '../TruncatedText';

const Post = ({
  id,
  Views,
  tag: blocObj,
  source: postURL,
  headline,
  summary,
  username,
  createdAt,
  profilePicture: avatarURL,
  single = false,
  isActive = false,
  autoPlay = false,
}) => {
  const videoRef = useRef(null);
  const carousel = useRef(null);
  const [width, setWidth] = useState(Dimensions.get('window').width - RFValue(34));
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const navigation = useNavigation();
  const theme = useTheme();
  const {m} = theme.borderRadii;
  const {grey1} = theme.colors;
  const [paused, setPaused] = useState(!autoPlay);
  const [loaded, setLoaded] = useState(false);

  const [isPicture, setIsPicture] = useState(true);
  const [bookmark, setBookmark] = useState(false);
  const isVideoLoaded = !isPicture && loaded;
  const isPictureLoaded = isPicture && loaded;

  const [imageSource, setImageSource] = useState(() => {
    try {
      let parsedUrl = JSON.parse(postURL);
      if (typeof parsedUrl === 'string') {
        if (parsedUrl?.includes('mp4')) {
          setIsPicture(false);
        }
        return [parsedUrl?.replace('http', 'https')];
      } else {
        parsedUrl = parsedUrl?.map((src) => src.url.replace('http', 'https'));
        if (parsedUrl[0]?.includes('mp4')) {
          setIsPicture(false);
        }
        return parsedUrl;
      }
    } catch (err) {
      if (postURL?.includes('mp4')) {
        setIsPicture(false);
      }
      return [postURL];
    }
  });

  const postStyle = {
    width: '100%',
    aspectRatio: 1,
    borderRadius: m,
    backgroundColor: grey1,
  };

  const onEnd = () => {
    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  };


  const onPictureLoad = () => {
    setLoaded(true);
  };

  const handleComments = () => navigation.navigate(ROUTES.COMMENTS, {id});

  const boxWidth = (event) => {
    setWidth(event.nativeEvent.layout.width);
  };

  useEffect(() => {
    if (!paused && !isActive) {
      onEnd();
    }
  }, [isActive, paused]);

  const renderFilter = ({item, index}) => {
    return (
      <Box>
        <Image
          source={{uri: item.url}}
          style={postStyle}
          onLoadEnd={onPictureLoad}
        />
        {imageSource[0].length > 1 && (
          <Box
            padding={'xs'}
            paddingHorizontal={'s'}
            borderRadius={'m'}
            position="absolute"
            right={RFValue(10)}
            top={RFValue(13)}
            backgroundColor="darkOpacity2">
            <Text color={'light'} fontWeight="500" fontSize={RFValue(16)}>
              {index + 1} / {imageSource[0].length}
            </Text>
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box
      borderBottomColor="alt2"
      borderBottomWidth={single ? undefined : StyleSheet.hairlineWidth}>
      <Box paddingVertical={single ? 'm' : 'l'} paddingHorizontal="m">
        <Box
          flexWrap="nowrap"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          // marginHorizontal="-s"
        >
          <Box width="70%" paddingHorizontal="s">
            <Box flexDirection="row">
              <Button
                alignItems="center"
                flexDirection="row"
                onPress={()=>navigation.navigate(ROUTES.NEWS_SINGLE, {
                  id,
                  Views,
                  tag: blocObj,
                  source: postURL,
                  headline,
                  summary,
                  username,
                  createdAt,
                  profilePicture: avatarURL,
                  single:true,
                  isActive: true,
                  autoPlay: true
                })}>
                <Avatar imgSrc={{uri: avatarURL}} />
                <Box>
                  <Text
                    marginLeft="s"
                    variant="p-sm"
                    color="tertiary"
                    fontWeight="700"
                    numberOfLines={1}>
                    {
                      username
                    }
                  </Text>
                  {single ? null : (
                    <Text
                      marginLeft="s"
                      variant="p-xs"
                      color="primary"
                      fontWeight="500"
                      onPress={()=>{}}
                      numberOfLines={1}>
                      {blocObj.name}
                    </Text>
                  )}
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          marginVertical="m"
          position="relative"
          style={{zIndex: -999}}
          onLayout={boxWidth}>
          {isPicture ? (
            <Carousel
              ref={carousel}
              data={imageSource[0]}
              renderItem={renderFilter}
              keyExtractor={(item) => item.id.toString()}
              sliderWidth={width}
              itemWidth={width}
              onSnapToItem={setCurrImgIdx}
              useScrollView
            />
          ) : (
            <Video
              onEnd={onEnd}
              ref={videoRef}
              onSeek={onSeek}
              onLoad={onLoad}
              paused={paused}
              style={postStyle}
              onProgress={onProgress}
              source={{uri: imageSource[0]}}
              resizeMode={paused ? 'cover' : 'contain'}
            />
          )}

          {isVideoLoaded ? (
            <Box style={StyleSheet.absoluteFillObject}>
              <Box
                height="100%"
                position="relative"
                alignItems="center"
                justifyContent="center">
                {paused ? (
                  <Button onPress={() => setPaused(false)} padding="xs">
                    <Icon
                      color="light"
                      name="play__circle"
                      width={RFValue(30)}
                      height={RFValue(30)}
                    />
                  </Button>
                ) : null}

                <Box
                  style={{
                    top: RFValue(15),
                    right: RFValue(15),
                    position: 'absolute',
                  }}>
                  <Text
                    color="light"
                    variant="p-xs"
                    textShadowColor="darkOpacity"
                    textShadowRadius={RFValue(10)}
                    textShadowOffset={{width: RFValue(-1), height: RFValue(1)}}>
                    {secondsToMs(currentTime)}
                  </Text>
                </Box>
              </Box>
            </Box>
          ) : (
            !isPicture && (
              <Box
                style={StyleSheet.absoluteFillObject}
                alignItems="center"
                justifyContent="center">
                <Icon
                  color="darkOpacity"
                  name="video-off"
                  width={RFValue(30)}
                  height={RFValue(30)}
                />
              </Box>
            )
          )}

          {isPicture && !isPictureLoaded && (
            <Box
              style={StyleSheet.absoluteFillObject}
              alignItems="center"
              justifyContent="center">
              <Icon
                color="darkOpacity"
                name="camera-off"
                width={RFValue(30)}
                height={RFValue(30)}
              />
            </Box>
          )}

          <Box
            padding="m"
            backgroundColor="darkOpacity"
            style={{
              ...StyleSheet.absoluteFillObject,
              top: 'auto',
              borderBottomLeftRadius: m,
              borderBottomRightRadius: m,
            }}>
            <Text variant="h3" color="light" fontWeight="700" numberOfLines={1}>
              {headline}
            </Text>
          </Box>
        </Box>

        <Box
          flexWrap="wrap"
          marginBottom="m"
          flexDirection="row"
          alignItems="center"
          marginHorizontal="-s">
          <Box width="50%" height="100%" paddingHorizontal="s">
            <Text color="grey2">
              Posted {moment(createdAt).fromNow()}
            </Text>
          </Box>

          <Box
            width="50%"
            height="100%"
            flexDirection="row"
            alignItems="center"
            paddingHorizontal="s"
            justifyContent="flex-end">
            <Box marginRight="m" flexDirection="row" alignItems="center">
              <Icon
                color="grey4"
                name="eye__outline"
                width={RFValue(20)}
                height={RFValue(20)}
              />
              <Text marginLeft="xs">{Views}</Text>
            </Box>
          {single &&
            <Button
              onPress={handleComments}
              marginRight="m">
              <Icon
                color="grey4"
                name="message"
                width={RFValue(20)}
                height={RFValue(20)}
              />
            </Button>
          }

            <Button
              onPress={()=> setBookmark(!bookmark)}>
              <Icon
                color="grey4"
                name={bookmark ? 'bookmarked' : 'bookmark'}
                width={RFValue(20)}
                height={RFValue(20)}
              />
            </Button>
          </Box>
        </Box>

        {summary ? <TruncatedText content={summary} /> : null}
      </Box>
    </Box>
  );
};

export default memo(Post);
