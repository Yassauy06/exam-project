import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './component/i18n' // Import the i18n configuration
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
