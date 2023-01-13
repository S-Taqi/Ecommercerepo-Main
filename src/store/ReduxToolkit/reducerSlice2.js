import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const reducerSlice2 = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push(action.payload);
      } else {
        state[myindex].qty = action.payload + 1;
      }
      //state.push(action.payload);
    },
    removeCartItem(state, action) {
      return state.filter((item, index) => index !== action.payload);
    },
  },
});
export const { addCartItem, removeCartItem } = reducerSlice2.actions;
export default reducerSlice2.reducer;
