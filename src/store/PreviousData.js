import { Previousorder } from './ActionTypes';

export const Previousdata = (state = [], action) => {
  switch (action.type) {
    case Previousorder:
      return [...state, action.payload];

    default:
      return state;
  }
};
