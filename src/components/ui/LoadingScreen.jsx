import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-screen ${loaded ? 'is-hidden' : ''}`} aria-hidden={loaded}>
      <span>SYA</span>
    </div>
  );
}
