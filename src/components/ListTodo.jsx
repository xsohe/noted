import List from './List';

export default function ListTodo({ filterTodo, onDeleteTodo, onToggleTodo }) {
  return (
    <ul className="space-y-4 py-4 px-6">
      {filterTodo.map((todo) => (
        <List key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
}
