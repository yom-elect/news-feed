import React, {useState, useRef, useEffect, useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import SnackBar from 'react-native-snackbar-component'
import {
    SafeAreaView,
    FlatList,
    Box,
    ListSkeleton,
    ListEmpty,
    Post
  } from '../components';
  import store from '../store';

const NewsList = () => {
    const{ dispatch } = store;

    const {newsTimeline, metaInfo, errorMessage} = useSelector((state) => state.newsList);
    const settings = useSelector(state=> state.settings);

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
    const isScrolling = useRef(true);

    useEffect(() => {
        dispatch.newsList.getNewsFeed(1);
      }, [dispatch]);

    const handleRefresh = async () => {
      setIsRefreshing(true);
      try {
        dispatch.newsList.getNewsFeed(1);
        setCurrentPage(1);
      } catch (err) {} finally {
        setIsRefreshing(false);
      }
    };
    // Using the Endless list Approach :)
    const handlePagination = useCallback(async () => {
      if (!isLoadingNextPage && !isScrolling.current && currentPage < metaInfo.last_page) {
        setIsLoadingNextPage(true);
        try {
          await dispatch.newsList.getNewsFeed(currentPage + 1);
          if (newsTimeline?.length > 0) {
            setCurrentPage((prevPage) => prevPage + 1);
          }
          setIsLoadingNextPage(false);
        } catch (err) {
          setIsLoadingNextPage(false);
        }
      }
    },[dispatch]);
  
    const viewabilityConfig = useRef({
      minimumViewTime: 10,
      viewAreaCoveragePercentThreshold: 50,
    });

  const onViewableItemsChanged = useRef(
    (info) => {
      const {viewableItems} = info;
      const activeEl = viewableItems.find((el) => !!el.isViewable);

      if (activeEl && activeEl.index) {
        setActiveIndex(activeEl.index);
      }
    },
  );

    const renderFeed = ({item, index}) => (
      <Post
        {...item}
        isActive={index === activeIndex}
      />
    );

    
    const renderEmptyList = () => {
      return (
        <ListEmpty
          title="Sorry No Content"
          description="No news Content on your timeline"
        />
      );
    };
    
    const renderFootComponent = () => {
      return isLoadingNextPage ? (
        <ActivityIndicator
          size="large"
          style={{marginVertical: 20, alignSelf: 'center'}}
          color="#f4511e"
        />
      ) : null;
    };

    const onMomentumScrollBegin = () => {
      isScrolling.current = true;
    };
    
    return (
      <>
      <SafeAreaView>
        <Box flex={1} backgroundColor="light">
          {newsTimeline?.length === 0 &&
          currentPage === 1 ? (
            <ListSkeleton />
          ) : (
            <FlatList
              data={newsTimeline}
              initialNumToRender={4}
              refreshing={isRefreshing}
              ListEmptyComponent={renderEmptyList}
              keyExtractor={(item) => item.id.toString()}
              viewabilityConfig={viewabilityConfig.current}
              removeClippedSubviews={true}
              onEndReached={handlePagination}
              onEndReachedThreshold={0.5}
              onRefresh={handleRefresh}
              onViewableItemsChanged={onViewableItemsChanged.current}
              renderItem={renderFeed}
              ListFooterComponent={renderFootComponent}
              onMomentumScrollEnd={() => (isScrolling.current = false)}
              onMomentumScrollBegin={onMomentumScrollBegin}
            />
          )}
          {renderFootComponent()}
        </Box>
      </SafeAreaView>
      <SnackBar visible={!settings} textMessage={errorMessage} actionHandler={()=>{console.log("snackbar button clicked!")}}/>
    </>
    );
}

export default NewsList;
