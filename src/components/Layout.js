import React from "react"
import { ThemeProvider } from "styled-components"
import Seo from "../components/Seo"
import theme from "../assets/styles/theme"
import GlobalStyle from "../assets/styles/globalStyle"
import ScreenOrientationReact from 'screen-orientation-react'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo />
        <GlobalStyle />
        <ScreenOrientationReact options={{
          bgColor: "#16222a",
          color: "#e8e1e1",
          iconColor: "#e8e1e1",
        }} />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
