import {ADD_ITEM, CHANG_THEME, REMOVE_ITEM} from './ActionTypes';

export const addItemsToCart = data => ({
  type: ADD_ITEM,
  payload: data,
});
export const DeleteitemFromcart = data => ({
  type: REMOVE_ITEM,
  payload: data,
});
export const changeTheme = data => ({
  type: CHANG_THEME,
  payload: data,
});
