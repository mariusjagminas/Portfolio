import React from "react"
import styled from "styled-components"
import SmoothScroll from "smooth-scroll"
import "./navigation.css"
import Scrollspy from "react-scrollspy"
import { FaHome, FaImage, FaEnvelope, FaUserTie } from "react-icons/fa"

const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.rgba1};
  border-top: 2px solid ${({ theme }) => theme.rgba2};
  border-bottom: 10px solid ${({ theme }) => theme.rgba2};
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  ${({ isSticky }) => (isSticky ? "top: 0" : "bottom: 0")}
`

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
  transition: color 0.1s ease-out, background-color 0.1s ease-out;
  &:before {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    bottom: -20px;
  }
  &:hover {
    opacity: 0.4;
  }
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

class Navigation extends React.Component {
  state = { offset: null }

  componentDidMount() {
    const navHeight = document.getElementById("navigation").clientHeight
    new SmoothScroll('a[href*="#"]', { offset: navHeight, speed: 400 })
    this.setState({ offset: navHeight + 50 })
  }

  render() {
    return (
      <Nav id="navigation" isSticky={this.props.isSticky}>
        <StyledScrollspy
          items={["main", "projects", "about", "contact"]}
          currentClassName="active"
          offset={-this.state.offset}
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
}

export default Navigation
