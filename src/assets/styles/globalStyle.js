import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,*::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
  }
`
export default GlobalStyle
