import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
// import  './mysass.css';
// import './index.css';
import App from './App5';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
  //  document.getElementById('root');


ReactDOM.render(<App headerProps="Header from props" contentProps="Content from props"/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
 