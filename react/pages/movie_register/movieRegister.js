import React from 'react';
import ReactDOM from 'react-dom';
import MovieRegisterApp from './movieRegisterApp';

const props = window.PROPS;

ReactDOM.hydrate((
    <MovieRegisterApp data={props} />
), document.getElementById('root'));
