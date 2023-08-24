import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/slice';
import filterReducer from './filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
