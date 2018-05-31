import React from 'react';
import ReactDOM from 'react-dom';
import AdminMainApp from './adminMainApp';

const props = window.PROPS;

ReactDOM.hydrate((
    <AdminMainApp data={props} />
), document.getElementById('root'));
