import { useState } from 'react';
import Todo from './components/Todo';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TextInfo from './components/TextInfo';

const dataTodos = [
  {
    id: 1,
    body: 'Turu',
    checked: true,
  },
  {
    id: 2,
    body: 'Netflix & Chill',
    checked: false,
  },
  {
    id: 3,
    body: 'Learn Something New',
    checked: false,
  },
];
export default function App() {
  const [todos, setTodos] = useState(dataTodos);

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleToggleTodo(id) {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  }

  function handleClearAllTodo() {
    setTodos([]);
  }

  return (
    <div className="flex flex-col bg-gray-50 h-full md:h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1">
        <Hero />
        <Todo todos={todos} onAddTodo={handleAddTodo} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} onClearAllTodo={handleClearAllTodo} />
      </div>

      <TextInfo todos={todos} />
    </div>
  );
}
