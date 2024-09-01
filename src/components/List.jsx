export default function ListTodo({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <li className="flex items-center space-x-4 cursor-pointer" key={todo.id}>
      <span className="relative flex items-center justify-center">
        <input type="checkbox" checked={todo.checked} className="accent-green-300 form-checkbox h-5 w-5 checked:bg-green-500 rounded z-10" onChange={() => onToggleTodo(todo.id)} />
        <span className="absolute h-full w-full rounded shadow-[3px_3px_0px_rgba(31,41,55,1)]"></span>
      </span>
      <span style={todo.checked ? { textDecoration: 'line-through' } : {}} className="text-gray-700 flex-1">
        {todo.body}
      </span>
      <button className="rounded-full hover:text-red-500 font-bold text-red-400" onClick={() => onDeleteTodo(todo.id)}>
        <box-icon name="x" color="#ff7676"></box-icon>
      </button>
    </li>
  );
}
