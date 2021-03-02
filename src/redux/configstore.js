import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Images } from './imgs';


export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            images: Images,
        }), applyMiddleware(thunk, logger)
    );
    return store;
}