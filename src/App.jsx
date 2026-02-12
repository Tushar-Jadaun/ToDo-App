import React from 'react'
import Todoinput from './components/Todoinput'
import Todoitem from './components/Todoitem'
import Todolist from './components/Todolist'


export default function App() {
  return (
    <div className='min-h-screen bg-gray-400 flex justify-center items-center'>
      <div className='h-80 w-80 bg-gray-300 rounded-2xl'>
            <h1 className='text-center rounded-2xl border p-2'>ToDo App 📝</h1>
            <div >
               <Todoinput addTodo={addTodo}/>
               <Todolist todo={todo} delete={deleteTodo} toggleTodo={toggleTodo}/>   
            </div>
      </div>
    </div>
  )
}
