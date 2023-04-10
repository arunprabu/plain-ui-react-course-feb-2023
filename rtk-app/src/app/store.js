import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from "../features/users/usersSlice";

// store data should be made by combining reducers
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
