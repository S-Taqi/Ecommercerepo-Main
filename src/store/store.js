import { combineReducers, createStore } from 'redux';
import { Reducer } from './reducers';
import { AuthReducers } from './AuthReducer';
import { LoginReducer } from './LoginReducer';
const totalReducers = combineReducers({ Reducer, AuthReducers, LoginReducer });
export const mystore = createStore(totalReducers);
