// async/await approach
    // flutter ex. https://blog.codemagic.io/flutter-web-firebase-authentication-and-google-sign-in/
import firebase from 'firebase/app';
import 'firebase/auth';

export const signIn = async (email, password) => {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        return {};
    } catch (e) {
        throw new Error('Log-in Errorrrrr');
    }
}
