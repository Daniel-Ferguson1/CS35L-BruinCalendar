// Effect Hook https://reactjs.org/docs/hooks-effect.html
import { useState, useEffect } from 'react';
import { authListener } from './authListener';
// Don't Do something like firebase.auth().currentUser. Professor Eggert talekd about 'vendor lock'.
import { getCurrentUser } from './getCurrentUser';


// useAuth, Listener
// https://stackoverflow.com/questions/59977856/firebase-listener-with-react-hooks#60029676
export const useAuth = () => {
    const [authState, setAuthState] = useState(() => {
        const user = getCurrentUser();
        const initializing = !user;
        return { initializing , user };
    });
    useEffect(() => {
        const unsubscribe = authListener(user => {
            setAuthState({ initializing: false, user });
        });

        return unsubscribe;
    }, []); // only execute and add event listener when the component first mounts 
    return authState;
}