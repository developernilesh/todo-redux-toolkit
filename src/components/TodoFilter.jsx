import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/filterSlice';

const TodoFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const buttonClass = (buttonFilter) =>
    `px-4 py-2 text-sm font-medium rounded-md ${
      filter === buttonFilter
        ? 'bg-indigo-600 text-white'
        : 'bg-white text-gray-700 hover:bg-gray-50'
    }`;

  return (
    <div className="flex justify-center space-x-2 mb-6">
      <button
        className={buttonClass('all')}
        onClick={() => dispatch(setFilter('all'))}
      >
        All
      </button>
      <button
        className={buttonClass('not started')}
        onClick={() => dispatch(setFilter('not started'))}
      >
        Not Started
      </button>
      <button
        className={buttonClass('in progress')}
        onClick={() => dispatch(setFilter('in progress'))}
      >
        In Progress
      </button>
      <button
        className={buttonClass('completed')}
        onClick={() => dispatch(setFilter('completed'))}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;