import { useState, useEffect } from 'react';
import { cold } from 'react-hot-loader'

const initialedState = {
  x: 0,
  y: 0,
};

export const useMousePosition = cold(() => {
  const [mousePosition, setMousePosition] = useState(initialedState);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []); 

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  };

  return mousePosition;
});