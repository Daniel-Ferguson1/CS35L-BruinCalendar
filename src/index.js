import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';

import 'firebase/auth';


import { App, } from './app';

var firebaseConfig = {
    apiKey: "AIzaSyAmUTvUmQ8amGkaO57mqQYcU7EaaxUGGsY",
    authDomain: "tutorial-prj-18159.firebaseapp.com",
    projectId: "tutorial-prj-18159",
    storageBucket: "tutorial-prj-18159.appspot.com",
    messagingSenderId: "680846972980",
    appId: "1:680846972980:web:cdc08feb58cb0c96b29261",
    measurementId: "G-X7WWFYBQR8",
  };

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )


// mport reportWebVitals from './reportWebVitals';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/*
// Render the app.
ReactDOM.render(
  <React.StrictMode
  >
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*


*/