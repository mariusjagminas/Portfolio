import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: none;

  @media (orientation: landscape) and (max-height: 400px){
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.c.bg};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.c.text};
  font-size: 4.5vw;
  text-align: center;
`;

const ScreenOrientation = () => {
  return (
    <Card >
      <Text>Landscape orientation is not supported.
      <br />
      Please rotate the device screen.
      </Text>
    </Card >)
}

export default ScreenOrientation