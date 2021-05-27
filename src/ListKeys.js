import React, { useState } from 'react';

import LiftingStateHook from './LiftingStateHook';

export default function ListKeys() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'learn javascript'
    }
  ])

  function handleDeleteTodo(todoId) {
    const newTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodos);
  }

  function handleAddTodo() {
    setText('');
    const newTodo = {
      id: Date.now(),
      text
    }
    setTodos([...todos, newTodo])
  }

  function handleChangeText(event) {
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChangeText} />
      <button type="button" onClick={handleAddTodo}>Add Todo</button>
      {todos.length > 0 && todos.map(todo => {
        return (
          <div key={todo.id}>
             <LiftingStateHook todo={todo} handleDeleteTodo={handleDeleteTodo} />
          </div>
        )
      })}
    
    </div>
  )
}