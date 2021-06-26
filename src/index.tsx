import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BarChart from './components/bar-chart';  // bar chart
import ScatterChart from './components/scatter-chart'; //scatter chart
import reportWebVitals from './reportWebVitals';
//import { render } from '@testing-library/react';

ReactDOM.render(
  // components App: for heading , BarChart : for bar chart , ScatterChart:for Scatter chart
  <div>
    <App />
    <BarChart />
    <ScatterChart />
  </div>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
