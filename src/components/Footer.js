import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.rgba2};
`

const Span = styled.span`
  color: ${({ theme }) => theme.rgba4};
`
class Footer extends React.Component {
  year = null
  componentDidMount() {
    this.year = new Date().getFullYear()
  }
  render() {
    return (
      <StyledFooter>
        <Span> &#169; Marius Jagminas {this.year}</Span>
      </StyledFooter>
    )
  }
}

export default Footer
