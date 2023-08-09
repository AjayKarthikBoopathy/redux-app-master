import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './Reducers/userReducer';

//redux toolkit - updated version of redux
const store = configureStore({
  reducer : {                 //reducer(object) - holds multiple objects
    userInfo : userReducer    //userSlice imported with the name userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(                //same like context provider & store is inbuild
  <React.StrictMode>
  <Provider store={store}>    
      <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//npm i redux 
//npm i react-redux 
//npm i @reduxjs/toolkit

//Steps:-
//create store
//create reducer
//create slice
//create selector - print data in UI
//create dispatch - take data from I/P