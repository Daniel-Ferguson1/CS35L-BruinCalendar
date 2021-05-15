import React from 'react';
import styled from 'styled-components';

// https://www.freecodecamp.org/news/styled-components-essentials-in-three-steps/
const ButtonBase = styled.button`
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
`;

const TransparentButton = styled(ButtonBase)`
    background-color: transparent;
    color: #aaa;
`;

const ShadowButton = styled(ButtonBase)`
    box-shadow: 0px 5px 5px #888;
`;

export const StyledButton = ({ type, children, ...rest }) => {
    switch (type) {
        case 'transparent':
            return <TransparentButton {...rest}>{children}</TransparentButton>
        case 'shadow':
            return <ShadowButton {...rest}>{children}</ShadowButton>
        case 'google-sign-in':
            return <ButtonBase {...rest} >Sign in with Google</ButtonBase>;
        default:
            return <ButtonBase {...rest} >{children}</ButtonBase>
    }
}

export const SignInWithGoogleButton = ({ ...rest }) => {
}