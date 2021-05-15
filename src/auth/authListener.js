import firebase from 'firebase/app';
import 'firebase/auth';
// https://rnfirebase.io/reference/auth/authlistenercallback
export const authListener = (callback) => {
    // Intermediate callback:
        // change state, take user object and pass it to actual callback
    const authListenerCallback = (user) => {
        if (user) {
            callback({});
        } else {
            callback(null);
        }
    }

    return firebase.auth().onAuthStateChanged(authListenerCallback);
}