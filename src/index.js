import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import 'normalize.css';
import 'assets/css/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<h3>loading</h3>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
