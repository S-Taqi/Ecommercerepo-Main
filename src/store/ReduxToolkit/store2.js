import { configureStore } from '@reduxjs/toolkit';
import reducerSlice from './reducerSlice2';
import authSlice from './authSlice2';
const store2 = configureStore({
  reducer: {
    cart2: reducerSlice,
    userid: authSlice,
  },
});
export default store2;
