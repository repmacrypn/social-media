import { applyMiddleware, combineReducers, legacy_createStore, compose } from 'redux';
import profileReducer from './profileReducer.ts';
import dialogsReducer from './dialogsReducer.ts';
import sidebarReducer from './sidebarReducer.ts';
import searchForFriendsReducer from './searchForFriendsReducer.ts';
import authReducer from './authReducer.ts';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    searchForFriendsReducer,
    authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;