import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import foto2 from "./component/images/foto2.png";
import Card2 from './component/card_slide/card2';
import Responsive from './component/card_slide/card_slide';
import HomePagePasien from './component/Home/HomePagePasien';
import Date_time from './component/date_time/date_time';
import Medical from './component/Home/HomePagePasien_Record';
import Card_record from './component/Home/card_record';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Medical/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
