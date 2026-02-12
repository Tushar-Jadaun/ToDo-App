import React, { useState } from 'react'

export default function Todoinput({addTodo}) {
  const[todo,setTodo]=useState([]);
  const addingTodo = ()=>{
    addTodo(todo);
    setTodo("");
  }
  return (
    <div>
         <input 
         placeholder='Enter the input'
         value={todo}
         onChange={(e)=>setTodo(e.target.value)}
         className='p-2 border rounded flex-1'/>
         <button className='text-red-50 bg-white rounded-2xl px-4' onClick={addingTodo}>Add</button>
    </div>
  )
}
