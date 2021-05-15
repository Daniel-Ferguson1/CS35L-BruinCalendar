import firebase from 'firebase/app';
import React from 'react';
import { StyledButton } from '../ui';

export const LogOutButton = () => {
    const onClickLogOut = async () => {
        try {
            await LogOut();
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <StyledButton
            onClick={onClickLogOut}
            style={{ float: 'right' }}
        >Log Out</StyledButton>
    );
}

export const LogOut = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        throw new Error('LogOutError');
    }
}