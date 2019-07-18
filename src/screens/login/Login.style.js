// @flow
import styled from 'styled-components';

export const LoginInput = styled.input.attrs({ type: 'password', placeholder: 'Enter password' })`
  font-size: 2.5rem;
  border: none;
  font-weight: 100;
  text-align: center;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

export const LoginForm = styled.form`
  position: relative;

  p {
    position: absolute;
    bottom: -50px;
    text-align: center;
    width: 100%;
  }
`;