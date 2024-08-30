import { useState } from 'react';
import Form from './Form';
import ListTodo from './ListTodo';

export default function Todo({ todos, onAddTodo, onDeleteTodo, onToggleTodo, onClearAllTodo }) {
  const [filterBy, setFilterBy] = useState('all');
  let filterTodo;

  if (filterBy === 'all') {
    filterTodo = todos;
  }

  if (filterBy === 'alfabet') {
    filterTodo = todos.slice().sort((a, b) => a.body.localeCompare(b.body));
  }

  if (filterBy === 'completed') {
    filterTodo = todos.slice().sort((a, b) => b.checked - a.checked);
  }

  if (filterBy === 'incomplete') {
    filterTodo = todos.slice().sort((a, b) => a.checked - b.checked);
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md text-left mb-4">
        <p className="text-gray-700 text-lg md:text-2xl font-medium">What do you need to accomplish today?</p>
      </div>

      {/* Form Input */}
      <Form onAddTodo={onAddTodo} />

      {/* Select Filter Dropdown */}
      <div className="flex items-center w-full max-w-md mb-4">
        <button onClick={onClearAllTodo} className="mr-3 bg-red-400 border-2 border-gray-800 text-gray-800 py-1 px-2 rounded-md hover:bg-red-500 shadow-[5px_5px_0px_rgba(31,41,55,1)] text-sm cursor-pointer">
          <box-icon name="trash" type="solid" color="#ffffff"></box-icon>
        </button>
        <select className="w-full px-4 py-2 border-2 border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 shadow-[5px_5px_0px_rgba(31,41,55,1)]" onChange={(e) => setFilterBy(e.target.value)}>
          <option value="all">Show All</option>
          <option value="completed">Show Completed</option>
          <option value="incomplete">Show Incomplete</option>
          <option value="alfabet">Show By Name(Alfabet)</option>
        </select>
      </div>

      <div className="bg-amber-50 my-6 border-2 border-gray-800 rounded-xl w-full max-w-md shadow-[8px_8px_0px_rgba(31,41,55,1)]">
        <h1 className="text-2xl font-bold text-left pl-5 text-gray-800 mb-2 pt-4">Things to do</h1>
        <hr className="border-t-2 w-full border-gray-800" />

        <ul className="space-y-4 py-4 px-6">
          {filterTodo.map((todo) => (
            <ListTodo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
