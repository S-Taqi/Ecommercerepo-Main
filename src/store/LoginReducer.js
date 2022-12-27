import { SAVE_USER_DATA } from './ActionTypes';

export const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return [...state, action.payload];

    default:
      return state;
  }
};
