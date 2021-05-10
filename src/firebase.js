import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
	apiKey: "AIzaSyAQ4QXGiyUkAViFC5nUmalWLWp1tK2uwnc",
    authDomain: "cs35l-6b371.firebaseapp.com",
    projectId: "cs35l-6b371",
    storageBucket: "cs35l-6b371.appspot.com",
    messagingSenderId: "67689612289",
    appId: "1:67689612289:web:49db3c0b25f7390138ec00",
    measurementId: "G-84LH8Y502Z"
})

export const auth = app.auth()
export default app