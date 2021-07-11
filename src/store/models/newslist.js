import axiosInstance from '../../utils/axiosInstance';
import { normalizeData } from '../../utils/normalizeData';

export const newsList = {
    state: {
        newsTimeline: [],
        comments: [],
        metaInfo: {},
        loading: false,
        errorMessage: null
    },
    reducers: {
        actionLoading(state){
                return {
                    ...state
                }
        },
        actionFailure (state,payload){
            return {...state, loading: false, errorMessage: payload.message}
        },
        actionSuccess (state, payload){
            return {
                ...state,
                newsTimeline: payload.result,
                metaInfo: payload.info,
                loading: false,
            }
        },
        actionMoreFeedSuccess (state, payload){
            return {
                ...state,
                newsTimeline: [...state.newsTimeline, ...payload.result],
                metaInfo: payload.info,
                loading:false
            }
        }
    },
    effects: (dispatch) => ({
        async getNewsFeed(page, rootState) {
          const isConnected = rootState.settings;
          if(isConnected){
              try {
                dispatch.newsList.actionLoading();
                const  {data} = await axiosInstance.get(
                    `/public/categories/10/articles?page=${page}&size=10`
                );

                if (data.status === "success"){
                    if(1 < page <= rootState.newsList.metaInfo.last_page){
                        dispatch.newsList.actionMoreFeedSuccess({
                            result: normalizeData(data.data.data),
                            info: data.data.metadata
                        }) 
                    }else {
                       dispatch.newsList.actionSuccess({
                        result: normalizeData(data.data.data),
                        info: data.data.metadata
                    }) 
                    }
                    
                }else {
                    const message = data?.message || "Couldn't get news timeline";
                    dispatch.newsList.actionFailure({message});
                }
              } catch (e) {
                let message = '';
                if (e.response) {
                message = e.response.data.message;
                } else if (e.request) {
                message = 'Network Error, Please try again';
                } else {
                message = "Couldn't get timeline";
                }
                dispatch.newsList.actionFailure({message});
              }
          }
        },
      }),
}