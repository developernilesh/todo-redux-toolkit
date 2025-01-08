import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import filterReducer from './filterSlice';
import { localStorageMiddleware, loadState } from './localStorageMiddleware';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
  preloadedState: {
    todos: loadState() || [],
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});