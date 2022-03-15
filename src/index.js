import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from '../src/root'
import Context from '../src/context'
ReactDOM.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

