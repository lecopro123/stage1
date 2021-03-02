import * as ActionTypes from './ActionTypes';

export const Images = (state = { isLoading: true, Images: [], err: null }, action) => {
    switch (action.type) {
        case ActionTypes.img_add:
            return { ...state, Images: action.payload, err: null, isLoading: false }
        case ActionTypes.img_fail:
            return { ...state, Images: [], err: action.payload, isLoading: false }
        case ActionTypes.img_load:
            return { ...state, Images: [], err: null, isLoading: true }
        default:
            return state
    }
}