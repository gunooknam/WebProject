import React from 'react';
import ReactDOM from 'react-dom';
import App from './mainApp';

var props = window.PROPS;
console.log("main.js")
ReactDOM.hydrate((
  <App data={props} />
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./mainApp.js', () => {
  })
}

export default App;
