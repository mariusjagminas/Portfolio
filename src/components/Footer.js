import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.f.rem(80)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.c.navLine};
`

const Copyright = styled.span`
  color: ${({ theme }) => theme.c.navItem};
`
class Footer extends React.Component {
  year = null
  componentDidMount() {
    this.year = new Date().getFullYear()
  }
  render() {
    return (
      <StyledFooter>
        <Copyright> &#169; Marius Jagminas {this.year}</Copyright>
      </StyledFooter>
    )
  }
}

export default Footer
