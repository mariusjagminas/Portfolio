import React from "react"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
  border: 10px solid black;
`
const Main = () => {
  return <Section id="main"></Section>
}

export default Main
