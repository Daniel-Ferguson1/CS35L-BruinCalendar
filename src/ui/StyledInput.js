import React from 'react';
import styled from 'styled-components';

// https://www.freecodecamp.org/news/styled-components-essentials-in-three-steps/
const Input = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;

  ::placeholder {
    color: #ddd;
}
`;

export const StyledInput = ({ ...rest }) => {
    return (
        <Input type='text' {...rest} />
    );
}