import {init} from '@rematch/core';
import {settings} from './models/settings';
import {newsList} from './models/newslist';

const models = {
    settings,
    newsList,
}

const store = init({
    models,
});

export default store;