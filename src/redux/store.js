import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { counterSlice } from './slice';

export const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  },
})