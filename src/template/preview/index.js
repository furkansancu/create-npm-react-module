import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const rootDOM = document.getElementById('root');
const root = ReactDOM.createRoot(rootDOM);
root.render( <React.StrictMode> <App /> </React.StrictMode> );