import React from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: green;
`
const Main = ({ isSticky }) => {
  return (
    <Section id="main">
      <Navigation isSticky={isSticky} />
    </Section>
  )
}

export default Main
