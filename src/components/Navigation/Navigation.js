import React from "react"
import styled from "styled-components"
import SmoothScroll from "smooth-scroll"
import "./navigation.css"

const Nav = styled.nav`
  width: 100%;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  /* top: ${({ isSticky }) => (isSticky ? "0" : "auto")}; */
  ${({ isSticky }) => (isSticky ? "top: 0" : "bottom: 0")}
  border:1px solid black;
  height: 100px;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  margin: 0;
  padding: 0;
  color: white;
`

class Navigation extends React.Component {
  state = null

  componentDidMount() {
    const navHeight = document.getElementById("navigation").clientHeight
    new SmoothScroll('a[href*="#"]', { offset: navHeight })
    console.log(navHeight)
    this.setState({})
  }

  render() {
    return (
      <Nav id="navigation" isSticky={this.props.isSticky}>
        {this.state ? (
          <Ul>
            <Li>
              <a href="#main">Main</a>
            </Li>
            <Li>
              <a href="#projects">Projects</a>
            </Li>
            <Li>
              <a href="#about">About</a>
            </Li>
            <Li>
              <a href="#contact">Contact</a>
            </Li>
          </Ul>
        ) : null}
      </Nav>
    )
  }
}

export default Navigation
