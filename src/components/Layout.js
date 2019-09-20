import React from "react"
import { ThemeProvider } from "styled-components"
import Seo from "../components/Seo"
import theme from "../assets/styles/theme"
import GlobalStyle from "../assets/styles/globalStyle"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Seo />
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
