import React, { useState, useEffect, useCallback } from "react";

const HookTest = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const handleClick = useCallback(() => setCount(c => c + 1), []);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(c => console.log(c))}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default HookTest;
