import { createContext, useContext, useMemo, useState } from 'react';

const CursorContext = createContext(null);

export function CursorProvider({ children }) {
  const [variant, setVariant] = useState('default');
  const value = useMemo(() => ({ variant, setVariant }), [variant]);
  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  return useContext(CursorContext);
}
