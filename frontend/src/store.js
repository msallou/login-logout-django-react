import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(/* your middleware here */),
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
  // other configuration options if needed
});

export default store;