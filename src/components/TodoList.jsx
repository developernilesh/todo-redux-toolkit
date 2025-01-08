import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const filteredTodos = filter === 'all' 
    ? todos 
    : todos.filter(todo => todo.state === filter);

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        {filter === 'all' ? 'No todos yet. Add one above!' : 'No todos match the current filter.'}
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;