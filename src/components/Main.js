import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.dark};
`
const Main = () => {
  return (
    <Section>
      <Navigation />
    </Section>
  )
}

export default Main
