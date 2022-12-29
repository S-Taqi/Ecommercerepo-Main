import { combineReducers, createStore } from 'redux';
import { Reducer } from './reducers';
import { AuthReducers } from './AuthReducer';
import { LoginReducer } from './LoginReducer';
import { Previousdata } from './PreviousData';
const totalReducers = combineReducers({
  Reducer,
  AuthReducers,
  LoginReducer,
  Previousdata,
});
export const mystore = createStore(totalReducers);
