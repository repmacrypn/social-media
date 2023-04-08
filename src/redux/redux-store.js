import { applyMiddleware, combineReducers, legacy_createStore, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import searchForFriendsReducer from './searchForFriendsReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import appReducer from './appReducer';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    searchForFriendsReducer,
    authReducer,
    appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;