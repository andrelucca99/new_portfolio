import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import GlobalStyled from './components/GlobalStyled/index.tsx';
import { theme } from './Theme/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
        <GlobalStyled />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
