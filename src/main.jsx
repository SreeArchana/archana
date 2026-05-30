import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { CursorProvider } from './context/CursorContext.jsx';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/globals.css';

const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CursorProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="route-loader">Loading portfolio</div>}>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CursorProvider>
  </ThemeProvider>
);
