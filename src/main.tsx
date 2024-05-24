import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import { theme } from './Theme/index.tsx';
import GlobalStyled from './components/GlobalStyled/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
