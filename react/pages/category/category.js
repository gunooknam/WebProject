import React from 'react';
import ReactDOM from 'react-dom';
import CategoryApp from './categoryApp';

var props = window.PROPS;

ReactDOM.hydrate((
  <CategoryApp data={props} />
), document.getElementById('root'));
