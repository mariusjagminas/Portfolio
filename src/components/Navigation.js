import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: grey;
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
`

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="#main">Main</Link>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Navigation
