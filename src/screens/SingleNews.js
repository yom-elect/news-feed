import React from 'react';
import {ScrollView} from 'react-native';
import {
    SafeAreaView,
    Box,
    Post
  } from '../components';

const SingleNews = ({route}) => {
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                <Box flex={1} backgroundColor="light">
                    <Post {...route.params}/>
                </Box>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default SingleNews;
