import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.family};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.34;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    transition: background-color ${({ theme }) => theme.transitions.normal} ease;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, button, textarea {
    font-family: inherit;
  }

  button:focus,
  button:focus-visible,
  input:focus,
  textarea:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }

  input {
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  html, body {
    overflow-x: hidden;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 1;
  }
`;

export default GlobalStyles; 