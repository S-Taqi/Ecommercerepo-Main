const { createSlice } = require('@reduxjs/toolkit');

const MyProductSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addMyProducts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addMyProducts } = MyProductSlice.actions;
export default MyProductSlice.reducer;
