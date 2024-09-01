import { useState } from 'react';
import ListTodo from './ListTodo';
import Filter from './Filter';

export default function Todo({ todos, children, onClearAllTodo, onDeleteTodo, onToggleTodo }) {
  const [filterBy, setFilterBy] = useState('all');
  let filterTodo;

  switch (filterBy) {
    case 'completed':
      filterTodo = todos.slice().sort((a, b) => b.checked - a.checked);
      break;
    case 'incomplete':
      filterTodo = todos.slice().sort((a, b) => a.checked - b.checked);
      break;
    case 'alfabet':
      filterTodo = todos.slice().sort((a, b) => a.body.localeCompare(b.body));
      break;
    default:
      filterTodo = todos;
      break;
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md text-left mb-4">
        <p className="text-gray-700 text-lg md:text-2xl font-medium">What do you need to accomplish today?</p>
      </div>

      {/* Form Input */}
      {children}

      {/* Select Filter Dropdown */}
      <Filter onClearAllTodo={onClearAllTodo} setFilterBy={setFilterBy} />

      <div className="bg-amber-50 my-6 border-2 border-gray-800 rounded-xl w-full max-w-md shadow-[8px_8px_0px_rgba(31,41,55,1)]">
        <h1 className="text-2xl font-bold text-left pl-5 text-gray-800 mb-2 pt-4">Things to do</h1>
        <hr className="border-t-2 w-full border-gray-800" />

        <ListTodo filterTodo={filterTodo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      </div>
    </div>
  );
}
