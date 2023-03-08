import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './home';
import Dum from './home';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Srii from './Sign_Up/signup';
import Sri from './Sign_Up/updatesignup';
//import GetForm from './Sign_Up/getform';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
