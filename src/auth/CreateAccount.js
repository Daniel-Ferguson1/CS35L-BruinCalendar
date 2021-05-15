import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { validate as isEmail } from 'isemail';
import {
    StyledButton,
    StyledError,
    StyledInput,
} from '../ui';


export const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bio, setBio] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    // check email and print messages
    const emailCheck = () => {
        if (!firstName || !lastName || !emailAddress) return 'At lead one is not filled';
        if (!isEmail(emailAddress)) return 'Invalid Email';
        if (password !== confirmPassword) return 'Wrong passwoerxd';
        return null;
    }
    // email check error
    const onClickCreate = async () => {
        setErrorMessage('');
        const emailCheckError = emailCheck();
        if (emailCheckError) {
            setErrorMessage(emailCheckError);
            return;
        }
    }

    return (
        <div>
            <div>
                <h3>Create Account</h3>
                {errorMessage
                    ? <StyledError style={{
                        marginBottom: '16px',
                    }}>
                        {errorMessage}
                    </StyledError>
                    : null}
                <table>
                    <tbody>
                        <tr>
                            <td>feirst name:</td>
                            <td>
                                <StyledInput
                                    value={firstName}
                                    placeholder='John'
                                    onChange={e => setFirstName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Naame IAm sleepy:</td>
                            <td>
                                <StyledInput
                                    value={lastName}
                                    placeholder='Doe'
                                    onChange={e => setLastName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email Address:</td>
                            <td>
                                <StyledInput
                                    value={emailAddress}
                                    placeholder='john.doe@gmail.com'
                                    onChange={e => setEmailAddress(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <StyledInput
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password Conirfrm:</td>
                            <td>
                                <StyledInput
                                    type='password'
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Bio:</td>
                            <td>
                                <textarea
                                    rows='5'
                                    value={bio}
                                    placeholder='I am a ucla student and I like me.'
                                    style={{ width: '100%' }}
                                    onChange={e => setBio(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <StyledButton
                    onClick={onClickCreate}
                >Ccera accoutn</StyledButton>
            </div>
        </div>
    )
}