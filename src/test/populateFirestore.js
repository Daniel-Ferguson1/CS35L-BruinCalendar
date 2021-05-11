const firebase = require('firebase');
require('firebase/firestore');

const { events,} = require('./testData')
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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
