import { useState } from "react"

export default function Todoitem({ todo, index, deleteTodo, toggleTodo ,editTodo,saveTodo}) {
  const[newText,setNewText]=useState("");
  return (
    <div className='flex justify-center items-center mb-2 gap-2'>
      {todo.isEdited==true?(<>
      <input
      value={newText}
      className="rounded-2xl p-2 border flex-1 mr-1"
      onChange={(e)=>setNewText(e.target.value)}
      />
      <button onClick={()=>saveTodo(index,newText)}className="text-green-600 font-bold cursor-pointer">✔</button>
      </>):(<>
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
      {/* <p>:</p> */}
      <button
      // type="checkbox"
      className="cursor-pointer"
      // checked={todo.isEdited}
      onClick={()=>editTodo(index)}>✏</button>
      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 font-bold rounded-2xl p-1 bg-white cursor-pointer"
      >
        ✕
      </button>
</>)}
    </div>
  )
}
