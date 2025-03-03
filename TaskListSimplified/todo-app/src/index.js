import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Isso assume que você terá um arquivo CSS básico com Tailwind importado

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);