import React  from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButton, } from '../ui';

export const Land = ({
    heading,
    message,
    button,
    redirect,
}) => {
    const history = useHistory();
    return (
        <div>
        <h1>{heading}</h1>
        <p>{message}</p>
        <StyledButton onClick={() => {
            history.push(redirect);
        }}>{button}</StyledButton>
        </div>
    );
}