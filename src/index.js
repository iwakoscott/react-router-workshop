import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App.js';
import API from './components/API';

const rootElement = document.getElementById('root');
ReactDOM.render(<API>{methods => <App {...methods} />}</API>, rootElement);
