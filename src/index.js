import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import App from "./Swiggy/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import FoodCartReducer from "./Swiggy/redux";



let CartStore = configureStore({
  reducer:FoodCartReducer

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
   <Provider store={CartStore}>
   <App/>
   </Provider>
   
   
    
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
