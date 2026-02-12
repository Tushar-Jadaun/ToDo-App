import React from 'react'
import Todoitem from './Todoitem'
export default function Todolist({todos=[],deleteTodo,toggleTodo}) {
  return (
    <div >
      {todos.length === 0 && (<p className='text-red-500 text-center font-bold text-2xl'>No task</p>)}
      {todos.map((todo,index)=>(<Todoitem index={index} deleteTodo={deleteTodo} todo={todo} toggleTodo={toggleTodo}/>))}
    </div>
  )
}
