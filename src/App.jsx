import React, { useState, useEffect } from 'react'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { text, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className='min-h-screen bg-gray-400 flex justify-center items-center'>
      <div className='h-80 w-80 bg-gray-300 rounded-2xl'>
        <h1 className='text-center rounded-2xl border p-2'>ToDo App 📝</h1>
        <Todoinput addTodo={addTodo} />
        <Todolist
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}
