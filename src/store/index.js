import {init} from '@rematch/core';
import {settings} from './models/settings';

const models = {
    settings,
}

const store = init({
    models,
});

export default store;