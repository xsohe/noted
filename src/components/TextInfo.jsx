export default function TextInfo({ todos }) {
  const totalTodo = todos.length;
  const completeTodo = todos.filter((todo) => todo.checked).length;
  const percentage = Math.round((completeTodo / totalTodo) * 100);

  if (totalTodo === 0) return <span className="text-center my-4 mx-2 text-gray-500 text-sm">Nothing yet todo</span>;

  return (
    <span className="text-center my-4 mx-2 text-gray-500 text-sm">
      You have a total of {totalTodo} tasks today, and {completeTodo} task has been <span className="text-green-500">{percentage}%</span> completed.
    </span>
  );
}
