import { CHANG_AUTH } from './ActionTypes';

export const AuthReducers = (state = false, action) => {
  switch (action.type) {
    case CHANG_AUTH:
      return action.payload;
    default:
      return state;
  }
};
