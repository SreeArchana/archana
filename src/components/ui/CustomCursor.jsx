import { useEffect, useState } from 'react';
import { useCursor } from '../../context/CursorContext.jsx';

export default function CustomCursor() {
  const { variant } = useCursor();
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return <div className={`cursor-dot ${variant}`} style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }} />;
}
