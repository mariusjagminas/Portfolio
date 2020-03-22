import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cabin|Roboto:400,700&display=swap');

  html {
    box-sizing: border-box;
    font-family: 'Roboto',sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  *,*::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    background: #16222a;
    letter-spacing: 0.1rem;
  }
`
export default GlobalStyle
