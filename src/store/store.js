import { combineReducers, createStore } from 'redux';
import { Reducer } from './reducers';
import { ThemeReducer } from './ThemeReducer';
const totalReducers = combineReducers({ Reducer, ThemeReducer });
export const mystore = createStore(totalReducers);
