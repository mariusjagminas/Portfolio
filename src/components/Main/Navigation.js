import React from "react"
import styled from "styled-components"
import "./navigation.css"
import Scrollspy from "react-scrollspy"
import { FaHome, FaImage, FaEnvelope, FaUserTie } from "react-icons/fa"

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.c.bg} ;
  border-top: 2px solid ${({ theme }) => theme.c.navLine};
  border-bottom: 10px solid ${({ theme }) => theme.c.navLine};  
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  
  ${({ theme }) => theme.mq.tablet} {
    background-color: ${({ theme }) => theme.c.navBg};
    position: absolute;
    top: initial;
    bottom: 0;
  }
`

const StyledScrollspy = styled(Scrollspy)`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  max-width: ${({ theme }) => theme.f.rem(680)};
`

const Li = styled.li`
  width: 25%;
  margin: 0;
`
const Link = styled.a`
  display: block;
  padding-top: 95%;
  border-left: 1px solid ${({ theme }) => theme.c.navLine};
  position: relative;
  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.c.navLine};
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
  /* Media queries */
  ${({ theme }) => theme.mq.tablet} {
    padding: 12px;
    font-size: 12px;
  }
`

const Navigation = ({ navbarHeight }) => {
  return (
    <Nav id="navigation">
      <StyledScrollspy
        items={["main", "projects", "about", "contact"]}
        currentClassName="active"
        offset={-navbarHeight - 10}
      >
        <Li>
          <Link href="#main">
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
          <Link href="#contact">
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
