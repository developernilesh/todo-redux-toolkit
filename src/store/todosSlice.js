import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        state: 'not started',
      });
    },
    updateTodo: (state, action) => {
      const { id, updates } = action.payload;
      const todoToUpdate = state.find(todo => todo.id === id);
      if (todoToUpdate) {
        Object.assign(todoToUpdate, updates);
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;