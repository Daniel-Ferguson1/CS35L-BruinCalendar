import React from 'react';
import { Land } from '../ui';

const SuccessMessage = () => (
    <Land
        heading='Verified'
        message={`
            Back to Login
        `}
        buttonText='Log in'
        redirect='/log-in' />
);

const FailureMessage = () => (
    <Land
        heading='Email Failed'
        message={`
            You either try again or go away.
        `}
        buttonText='Create account'
        redirect='/create-account' />
);

export const EmailLanding = ({ success }) => {
        if(success)
            return<SuccessMessage />
        else
            return<FailureMessage />
}