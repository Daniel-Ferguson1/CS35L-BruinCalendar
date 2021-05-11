const firebase = require('firebase');
require('firebase/firestore');

const { events,} = require('./testData')
// === project setting provides config info (what's in the js tag)==
  var firebaseConfig = {
    apiKey: "AIzaSyAmUTvUmQ8amGkaO57mqQYcU7EaaxUGGsY",
    authDomain: "tutorial-prj-18159.firebaseapp.com",
    projectId: "tutorial-prj-18159",
    storageBucket: "tutorial-prj-18159.appspot.com",
    messagingSenderId: "680846972980",
    appId: "1:680846972980:web:cdc08feb58cb0c96b29261",
    measurementId: "G-X7WWFYBQR8"
  };
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
