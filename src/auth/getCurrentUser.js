import firebase from 'firebase/app';
import 'firebase/auth';
export const getCurrentUser = () => {
    const user = firebase.auth().currentUser;
    if (!user) return null;
    return {
        id: user.uid,
    };
}