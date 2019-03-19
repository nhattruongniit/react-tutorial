import React from 'react';


import { useMousePosition } from './HOC/MouseUseHook';

export const MousePositionHook = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>Use React Hook</h1>
      <h2>Move the mouse around!</h2> 
      <p style={{ background: 'orange' }}>
       share code logic with useHook ({x}, {y})
      </p>
    </div>
  )
};
