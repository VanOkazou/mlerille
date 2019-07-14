// @flow
import styled, { createGlobalStyle, css } from 'styled-components';
import { space } from 'styled-system';
import { inherits } from 'util';

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-overflow-scrolling: touch;
    max-width: 100%;
  }

  html {
    font-size: 62.5%;
    font-size: 0.625em;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: normal;
    font-size: inherit;
  }

  a {
    text-decoration: none;
  }
`;

export default Reset;