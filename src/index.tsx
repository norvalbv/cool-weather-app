import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from 'context/theme';
import App from './App';
import 'styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
