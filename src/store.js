import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
  },
});

export default store;