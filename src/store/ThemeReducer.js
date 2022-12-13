import {CHANG_THEME} from './ActionTypes';

export const ThemeReducer = (state = false, action) => {
  switch (action.type) {
    case CHANG_THEME:
      return action.payload;
    default:
      return state;
  }
};
