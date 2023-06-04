import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import App from './App';
import 'assets/css/index.less';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<h3>loading</h3>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
