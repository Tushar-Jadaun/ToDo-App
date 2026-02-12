export default function Todoitem({ todo, index, deleteTodo, toggleTodo }) {
  return (
    <div className='flex justify-center items-center mb-2 gap-2'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <span
        onClick={() => toggleTodo(index)}
        className={`cursor-pointer ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 font-bold rounded-2xl p-1 bg-white cursor-pointer"
      >
        ✕
      </button>

    </div>
  )
}
