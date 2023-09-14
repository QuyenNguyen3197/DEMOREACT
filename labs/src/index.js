import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './exam/Clock';
import Sum from './exam/Sum';
import WorldClock from './exam/WorldClock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <Clock/>
      <Sum/>
      <WorldClock/>
    </React.StrictMode> 
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
