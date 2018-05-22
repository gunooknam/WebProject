import React from 'react';
import ReactDOM from 'react-dom';
import App from './mainApp';

var props = window.PROPS;

ReactDOM.hydrate((
  <App data={props} />
), document.getElementById('root'))
