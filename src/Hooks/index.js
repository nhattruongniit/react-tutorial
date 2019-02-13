import React, { useState } from 'react';

export const Hooks = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      text: 'Learn Hooks'
    }
  ]);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <div>
        {todos.map(val => (
          <p>{val.text}</p>
        ))}
      </div>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
};
