const firebase = require('firebase');
require('firebase/firestore');

const { events,} = require('./testData')
// === project setting provides config info (what's in the js tag)==
var firebaseConfig = {
  apiKey: "AIzaSyAQ4QXGiyUkAViFC5nUmalWLWp1tK2uwnc",
  authDomain: "cs35l-6b371.firebaseapp.com",
  projectId: "cs35l-6b371",
  storageBucket: "cs35l-6b371.appspot.com",
  messagingSenderId: "67689612289",
  appId: "1:67689612289:web:49db3c0b25f7390138ec00",
  measurementId: "G-84LH8Y502Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// =================================================================

  const db = firebase.firestore();
  
  function populateCollection(collectionName, items){
      return Promise.all(items.map(item => { // async insertion
          const {id, ...data } = item;
          return db.collection(collectionName)
          .doc(id)
          .set(data);
    }))
  }

  Promise.all([
      populateCollection('events', events),
  ])
  .then(() => {
      console.log('Populated.');
      process.exit(0);
  })
  .catch(err => {
      console.log(err); // return error message.
  });
