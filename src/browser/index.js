import React from 'react';
import ReactDom from 'react-dom';
import App from './../shared/App';

ReactDom.hydrate(
  <App data={window.__INITIAL_DATA__} />,
  document.getElementById('app'),
);
