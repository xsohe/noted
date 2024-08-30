import { useState } from 'react';

export default function Form({ onAddTodo }) {
  const [body, setBody] = useState('');

  function handleSubmitTodo(e) {
    e.preventDefault();

    if (!body) return;

    const newTodo = { body, id: Date.now(), checked: false };
    onAddTodo(newTodo);

    setBody('');
  }

  return (
    <form className="w-full max-w-md flex space-x-4 mb-4" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 border-2 border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 shadow-[5px_5px_0px_rgba(31,41,55,1)]"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" className="bg-orange-200 border-2 border-gray-800 text-gray-800 py-2 px-4 rounded-md hover:bg-orange-300 shadow-[5px_5px_0px_rgba(31,41,55,1)]">
        Add
      </button>
    </form>
  );
}
