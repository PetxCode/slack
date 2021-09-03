import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/appCounter';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
