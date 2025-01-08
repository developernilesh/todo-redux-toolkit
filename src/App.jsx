import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative p-8 bg-white shadow-lg sm:rounded-3xl">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Todo App</h1>
            <div className="w-[80vw] sm:w-[70vw] md:-[60vw] lg:w-[50vw] mx-auto">
              <TodoForm />
              <TodoFilter />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;