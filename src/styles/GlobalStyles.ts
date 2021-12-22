import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: #F8F8F8;
    color: #29292e;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  img {
    display: block;
    width: 100%;
  }

  ul, ol, li {
    list-style: none;
  }
`;
