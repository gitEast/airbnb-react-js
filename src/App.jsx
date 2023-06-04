import React, { memo, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import request from 'services';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

const App = memo(() => {
  useEffect(() => {
    request
      .get({
        url: '/home/highscore'
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
