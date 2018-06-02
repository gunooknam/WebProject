import React from 'react';
import ReactDOM from 'react-dom';
import WishlistApp from './wishlistApp';

var props = window.PROPS;

console.log(props);
ReactDOM.hydrate((
  <WishlistApp data={props} />
), document.getElementById('root'));
