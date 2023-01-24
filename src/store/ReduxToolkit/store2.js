import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { jokesApi } from './jokesApi';
import reducerSlice from './reducerSlice2';
import authSlice from './authSlice2';
const store2 = configureStore({
  reducer: {
    cart2: reducerSlice,
    userid: authSlice,
    [jokesApi.reducerPath]: jokesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jokesApi.middleware),
});
setupListeners(store2.dispatch);
export default store2;
