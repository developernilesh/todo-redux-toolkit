import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../store/todosSlice';
import { FaEdit, FaSave } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(updateTodo({ id: todo.id, updates: { text: editText } }));
    }
    setIsEditing(!isEditing);
  };

  const handleStateChange = (e) => {
    dispatch(updateTodo({ id: todo.id, updates: { state: e.target.value } }));
  };

  const getBackgroundColor = () => {
    switch (todo.state) {
      case 'not started':
        return 'bg-red-100';
      case 'in progress':
        return 'bg-blue-100';
      case 'completed':
        return 'bg-green-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <li className={`mb-4 p-4 rounded-lg shadow ${getBackgroundColor()}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <p className="text-lg font-medium text-gray-900 truncate">{todo.text}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <select
            value={todo.state}
            onChange={handleStateChange}
            className="block w-full sm:w-auto p-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button
            onClick={handleEdit}
            className="w-full sm:w-auto px-2 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isEditing ? <FaSave /> : <FaEdit />}
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="w-full sm:w-auto px-2 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;