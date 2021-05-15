import React, { useState } from 'react';
import {
    StyledButton,
    StyledInput,
} from '../ui';

export const ResetPassword = ({ onClose = () => {} }) => {
    const [emailAddress, setEmailAddress] = useState('');
    const onClickSend = async () => {
        // Firebase-related code goes here
    }
    return (
    <div>
    <h3>Reset Password</h3>
    <StyledInput
        onChange={e => setEmailAddress(e.target.value)}
        placeholder="email place holder" />
    <StyledButton onClick={onClickSend}>Send</StyledButton>
    </div>
    )
}