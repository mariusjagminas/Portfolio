import React from "react"
import styled from "styled-components"
import "./navigation.css"
import Scrollspy from "react-scrollspy"
import { FaHome, FaImage, FaEnvelope, FaUserTie } from "react-icons/fa"

const Nav = styled.nav`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  width: 100%;
  background-color: ${({ isSticky, theme }) =>
    isSticky ? theme.dark1 : theme.rgba1};
  border-top: 2px solid ${({ theme }) => theme.rgba2};
  border-bottom: 10px solid ${({ theme }) => theme.rgba2};
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  ${({ isSticky }) => (isSticky ? "top: 0" : "bottom: 0")};
  transition: opacity 0.1s ease, background-color 0.1s ease-in-out;
`
// TODO: use css styled componets here, instead repeating code, with writing functions
const StyledScrollspy = styled(Scrollspy)`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  max-width: 680px;
`

const Li = styled.li`
  width: 25%;
  margin: 0;
`
const Link = styled.a`
  display: block;
  padding-top: 95%;
  border-left: 1px solid ${({ theme }) => theme.rgba2};
  position: relative;
  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.rgba2};
  }
`

const Box = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.rgba3};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  padding-top: 30%;
  background-color: none;
  &:before {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    bottom: -20px;
  }
  &:hover {
    opacity: 0.4;
  }
  transition: opacity 0.3s ease;
`
const Text = styled.p`
  font-size: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.rgba3};
  margin: 0;
  padding: 7px;
  ${({ theme }) => theme.mq.tablet} {
    padding: 12px;
    font-size: 12px;
  }
`

const Navigation = ({ scrollSpyOffset, isSticky, isVisible, setHeight }) => {
  return (
    <Nav id="navigation" isSticky={isSticky} isVisible={isVisible}>
      <StyledScrollspy
        items={["main", "projects", "about", "contact"]}
        currentClassName="active"
        offset={scrollSpyOffset}
      >
        <Li>
          <Link onClick={setHeight} href="#main">
            <Box className="active__item">
              <FaHome />
              <Text className="active__item">Home</Text>
            </Box>
          </Link>
        </Li>
        <Li>
          <Link href="#projects">
            <Box className="active__item">
              <FaImage />
              <Text className="active__item">projects</Text>
            </Box>
          </Link>
        </Li>
        <Li>
          <Link href="#about">
            <Box className="active__item">
              <FaUserTie />
              <Text className="active__item">about</Text>
            </Box>
          </Link>
        </Li>
        <Li>
          <Link href="#contact" onClick={setHeight}>
            <Box className="active__item">
              <FaEnvelope />
              <Text className="active__item">contact</Text>
            </Box>
          </Link>
        </Li>
      </StyledScrollspy>
    </Nav>
  )
}

export default Navigation
// FIXME Navbar 'jumps' when it changes position to fixed
// Adding or substracting aditional pixels from offset didn't produce any valuable results.
// This 'jump' bug is related to the performance.(css recalculation takes a moment)
// one of the solutions would be to remove smooth-scroll feature for mobile devices,
// and use it only on desktops. This will mask a bug.
