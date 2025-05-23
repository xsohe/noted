import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TextInfo from './components/TextInfo';
import Logo from './components/Logo';
import UserAvatar from './components/UserAvatar';
import Form from './components/Form';

const LOCAL_STORAGE_KEY = 'react-app-todos';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
      <Navbar>
        <Logo />
        <UserAvatar />
      </Navbar>
      <div className="flex flex-col md:flex-row flex-1">
        <Hero />
        <Todo todos={todos} onDeleteTodo={handleDeleteTodo} on onToggleTodo={handleToggleTodo} onClearAllTodo={handleClearAllTodo}>
          <Form onAddTodo={handleAddTodo} />
        </Todo>
      </div>

      <TextInfo todos={todos} />
    </div>
  );
}
