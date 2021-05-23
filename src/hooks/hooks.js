import React, { useState, useEffect } from "react";

const HookTest = () => {
  const listTodos = [
    {
      id: 1,
      text: 'learn javascript',
    },
    {
      id: 2,
      text: 'learn react'
    },
    {
      id: 3,
      text: 'learn css'
    }
  ]
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(listTodos)

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function handleAddTodo() {
    const newTodo = {
      id: Date.now(),
      text: 'learn html'
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button 
        style={{
          color: 'red',
          fontSize: '20px'
        }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>

      <h1>list & keys</h1>
      <ul>
        <li>learn javascript</li>
        <li>learn react</li>
        <li>learn css</li>
      </ul>

        <button type="button" onClick={handleAddTodo}>add todo</button>
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => {
            return (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                </li>
            )
          })
        ) : <div>this is not list</div> }
      </ul>
    </div>
  );
};

export default HookTest;
