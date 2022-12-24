import { ADD_ITEM, REMOVE_ITEM } from './ActionTypes';

export const Reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      const itemIndex = state.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state[itemIndex].count += 1;
      } else {
        const obj = { ...action.payload, count: 1 };
        return [...state, obj];
      }

    case REMOVE_ITEM:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray;

    default:
      return state;
  }
};
