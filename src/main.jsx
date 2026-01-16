import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/**
 * Application Entry Point
 * 
 * Standard React 18 setup dengan:
 * - StrictMode untuk development warnings
 * - Root mounting
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);