import React, {useState, useRef, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

const NewsList = () => {

    useEffect(() => {
        dispatch(GetMediaFeedRequest(currentPage));
      }, []);
    
    return (
        <div>
            Chisom Baby marry me
        </div>
    );
}

export default NewsList;
