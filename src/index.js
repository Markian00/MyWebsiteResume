import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Home from "./pages/Home"

//ReactDom.render(<Learn/>, document.getElementById("root"))
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Learn />
);
*/
const gap = {
    padding: '60px'
}

const back = {
    background: 'black'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div style={gap}></div>
    <App style={back}/>
      <Home style={back}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
