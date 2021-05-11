import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';

import firebase from 'firebase/app'// yes.
import 'firebase/analytics'        // firebase.analytics() required for basic setup.

  // Go to https://console.firebase.google.com/u/0/project/cs35l-6b371/settings/general/web:MDE2ZjVjZDMtNGNjYi00ODUxLTkyYjQtNzU0Yzg5NzQ0M2Jl
  // Paste everyhing what's inside script tag: <script>HERE</script>
  // ================ <PASTE> ==========================
  var firebaseConfig = {
    apiKey: "AIzaSyAmUTvUmQ8amGkaO57mqQYcU7EaaxUGGsY",
    authDomain: "tutorial-prj-18159.firebaseapp.com",
    projectId: "tutorial-prj-18159",
    storageBucket: "tutorial-prj-18159.appspot.com",
    messagingSenderId: "680846972980",
    appId: "1:680846972980:web:cdc08feb58cb0c96b29261",
    measurementId: "G-X7WWFYBQR8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // ================ <PASTE> ==========================

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);