// import {settingsActionsTypes} from '../actionTypes/settingsActionTypes';

export const settings = {
    state: true,
    reducers: {
        update(_state, payload){
            return payload
        }
    },
    effects: dispatch =>({
        updateNetInfo(payload, _rootState) {
            dispatch.settings.updateConnection(payload)
        }
    })
}