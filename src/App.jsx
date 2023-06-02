import React, { memo, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import request from 'services';

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
    <div>
      <div className="header">Header</div>
      <div className="content">{useRoutes(routes)}</div>
      <div className="footer">Footer</div>
    </div>
  );
});

export default App;
