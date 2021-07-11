import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '@shopify/restyle';

import * as DIMENSIONS from '../constant/dimensions';
import {
  KeyboardAvoidingView,
  FlatList,
  Comment,
  Box,
  CommentInput,
  Text,
  CommentSkeleton,
} from '../components';

const CommentEmpty = () => {
  return (
    <Box flex={1} alignItems="center" marginTop="xl">
      <Text>No comments</Text>
    </Box>
  );
};

const Comments = ({route}) => {
  const theme = useTheme();
  const {m} = theme.borderRadii;

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState();

  const {id} = route.params;

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
    //   const newComments = await dispatch.newsList.GetMediaCommentsRequest(id);
        const newComments = [];
      setIsLoading(false);
        setComments(newComments);
    };
    getComments();
  }, []);

  const handleComment = async (comment) => {
    if (comment) {
      setComments([...comments, {
          newsId: id,
          name: "Jan Wuckert",
          avatar: "https://res.cloudinary.com/clane-company-ltd/image/upload/q_auto/1_oDL_zBQ8_M10ib1AXthTNw.jpg",
          comment
      }]);
    }
  };

  const renderComments = ({item}) => (
    <Comment data={item} />
  );

  const onLayout = (event) => {
    setOffset(event.nativeEvent.layout.height);
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={offset}>
      <Box flex={1} backgroundColor="light">
        {comments?.length === 0 && isLoading ? (
          <CommentSkeleton />
        ) : (
          <FlatList
            data={comments}
            keyExtractor={(item) => item.newsId.toString()}
            renderItem={renderComments}
            ListEmptyComponent={() => <CommentEmpty />}
          />
        )}
      </Box>

      <Box
        padding="m"
        paddingBottom="xl"
        shadowRadius={m}
        backgroundColor="light"
        shadowColor="shadowLight"
        justifyContent="flex-start"
        shadowOffset={{height: 1, width: 0}}
        height={RFValue(DIMENSIONS.TAB_HEIGHT)}
        onLayout={onLayout}
        shadowOpacity={DIMENSIONS.SHADOW_OPACITY}>
        <CommentInput handleComment={handleComment} />
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Comments;
