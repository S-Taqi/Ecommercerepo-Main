import { SAVE_USER_DATA } from './ActionTypes';
//let obj = {};
export const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      //console.log('action.payload', action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};
