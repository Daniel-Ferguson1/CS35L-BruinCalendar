import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from './signIn';
import styled from 'styled-components';
import {
    StyledButton,
    StyledError,
    StyledInput,
    Modal,
} from '../ui';
import { ResetPassword } from './ResetPassword';

// https://www.freecodecamp.org/news/styled-components-essentials-in-three-steps/
const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

//refered SignInPage, index.js in auth

export const LogIn = () => {
    /* These are states https://reactjs.org/docs/hooks-state.html */
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const history = useHistory();

    // user place email and pw
    const onSignInClicked = async () => {
        try {
            await signIn(emailValue, passwordValue);
            history.push('/'); // redirect the user to the homepage 
        } catch (e) {
            setErrorMessage(e.message); // no no user wrong (Error signing in)
        }
    }
    // User click login button
    const onSignInWithGoogleClicked = async () => {
        //TODO
    }

    return (
        <div>
            <h1>GCal_Login_Heading</h1>
            {errorMessage
                ? <StyledError style={{
                    marginBottom: '16px',
                }}>
                    {errorMessage}
                </StyledError>
                : null}
            <StyledInput
                name='email'
                value={emailValue}
                placeholder='youremail@email.com'
                onChange={e => setEmailValue(e.target.value)} />
            <StyledInput
                name='password'
                type='password'
                value={passwordValue}
                placeholder='Password'
                onChange={e => setPasswordValue(e.target.value)} />
            <StyledButton
                type='transparent'
                //onClick={() => setOpenModal(true)}
            >Forgot password?</StyledButton>
            <StyledButton
                disabled={!emailValue || !passwordValue}
                
                onClick={onSignInClicked}
            >Sign In</StyledButton>
            <StyledButton
                onClick={onSignInWithGoogleClicked}
            >Sign In With Google</StyledButton>
            <StyledButton
                type='transparent'
                onClick={() => history.push('/create-account')}
            >Create an account</StyledButton>
           
            <Modal
                isOpen={openModal}
                onRequestClose={() => setOpenModal(false)}
            >
                
                <ResetPassword onClose={() => setOpenModal(false)} /> 
                
            </Modal>
          
        </div>
    );
}

//style={withTopMargin(8)}