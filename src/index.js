import React from 'react';
import ReactDOM from 'react-dom';
//Bootstrp3
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
