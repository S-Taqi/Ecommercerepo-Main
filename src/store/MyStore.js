import { configureStore } from '@reduxjs/toolkit';
import MyProductReducer from '../store/MyProductSlice';
import MyCartReducer from '../store/MyCartSlice';

export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
  },
});
