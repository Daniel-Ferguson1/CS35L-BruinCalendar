import firebase from "firebase/app"
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    //Enter your personal variables here!
  }

  const app = firebase.initializeApp(firebaseConfig)

  export const auth = app.auth()
  export default app