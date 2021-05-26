//Entry point to the react application
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //Imports the app from app.js
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/*fetches the app from app.js*/}
  </React.StrictMode>,
  document.getElementById('root') // fetches the div tag in index.html and inserts the app in it
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
