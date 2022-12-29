import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANG_AUTH,
  SAVE_USER_DATA,
  Previousorder,
} from './ActionTypes';

export const addItemsToCart = data => ({
  type: ADD_ITEM,
  payload: data,
});
export const DeleteitemFromcart = data => ({
  type: REMOVE_ITEM,
  payload: data,
});
export const changeAuth = data => ({
  type: CHANG_AUTH,
  payload: data,
});
export const LoginReducer = data => ({
  type: SAVE_USER_DATA,
  payload: data,
});
export const PreviousData = data => ({
  type: Previousorder,
  payload: data,
});
