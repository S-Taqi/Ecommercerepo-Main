import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const authSlice2 = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    addUserId(state, action) {
      state.push(action.payload);
    },
  },
});
export const { addUserId } = authSlice2.actions;
export default authSlice2.reducer;
