import React from 'react';

export default function LiftingStateHook({ todo, handleDeleteTodo }) {
  return (
    <div>
      {todo.text}
      <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </div>
  )
}