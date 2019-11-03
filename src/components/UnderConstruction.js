import React from "react"
import styled from "styled-components"

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800%;
  z-index: 999999;
  background-color: #283d4b;
  display: flex;
  justify-content: center;
  text-align: center;
`

const Text = styled.h1`
  margin-top: 200px;
  font-size: 35px;
  max-width: 300px;
  color: #ffffff;
`
const UnderConstruction = () => (
  <Background>
    <Text>Website is under construction</Text>
  </Background>
)

export default UnderConstruction
