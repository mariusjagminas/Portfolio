import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import "./navigation.css"

const Nav = styled.nav`
  width: 100%;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  /* top: ${({ isSticky }) => (isSticky ? "0" : "auto")}; */
  ${({ isSticky }) => (isSticky ? "top: 0" : "bottom: 0")}
  background: black;
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
    console.log(navHeight)
    this.setState({
      links: [
        {
          to: "main",
          text: "Main",
          smooth: true,
          spy: true,
          offset: 0,
          duration: 300,
          activeClass: "active",
        },
        {
          to: "projects",
          text: "Projects",
          smooth: true,
          spy: true,
          offset: -navHeight,
          duration: 500,
          activeClass: "active",
        },
        {
          to: "about",
          text: "About",
          smooth: true,
          spy: true,
          offset: -navHeight,
          duration: 500,
          activeClass: "active",
        },
        {
          to: "contact",
          text: "Contact",
          smooth: true,
          spy: true,
          offset: -navHeight,
          duration: 500,
          activeClass: "active",
        },
      ],
    })
  }

  render() {
    return (
      <Nav id="navigation" isSticky={this.props.isSticky}>
        {this.state ? (
          <Ul>
            {this.state.links.map(e => (
              <Li key={e.to}>
                <Link
                  to={e.to}
                  smooth={e.smooth}
                  spy={e.spy}
                  offset={e.offset}
                  duration={e.duration}
                  activeClass={e.activeClass}
                >
                  {e.text}
                </Link>
              </Li>
            ))}
          </Ul>
        ) : null}
      </Nav>
    )
  }
}

export default Navigation
