export default function Filter({ onClearAllTodo, setFilterBy }) {
  return (
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
  );
}
