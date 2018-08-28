import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import User from './reducers/User'
import { createLogger } from 'redux-logger'

const appReducer = combineReducers({
    user: User
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const logger = createLogger({collapsed: true})
const middlewares = [logger, ReduxThunk]

export default createStore(rootReducer, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(...middlewares));