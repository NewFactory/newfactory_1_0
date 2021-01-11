import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './components/top/top';
import Center from './components/center/center';
import Bottom from './components/bottom/bottom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>,
  document.getElementById('top')
);
ReactDOM.render(
  <React.StrictMode>
    <Center />
  </React.StrictMode>,
  document.getElementById('center')
);
ReactDOM.render(
  <React.StrictMode>
    <Bottom />
  </React.StrictMode>,
  document.getElementById('bottom')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
