import React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Footer from "./Footer"

const Section = styled.section`
  width: 100%;
  min-height: ${({ sectionHeight }) => sectionHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 9px; 

  ${({ theme }) => theme.mq.tablet} {
    font-size: 12px;
  }
`

const Li = styled.li`
  margin: 3em 0;
`

const Link = styled.a`
  font-family: ${({ theme }) => theme.fontFamily2}; 
  font-size: 3em;
  text-decoration: none;
  color: ${({ theme }) => theme.c.navItem};
  background-color: ${({ theme }) => theme.c.card};
  padding: 0.4em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`

const Span = styled.span`
  font-size: ${({ theme }) => theme.f.em(8)};
  padding-left: 0.6em;
`

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      sectionHeight: "100vh",
    }
  }

  componentDidMount() {
    const navbarHeight = document.querySelector("#navigation").offsetHeight

    this.setState({
      sectionHeight: `${window.innerHeight - navbarHeight - 80}px`,
    })
  }

  render() {
    return (
      <>
        <Section
          id="contact"
          sectionHeight={this.state.sectionHeight}
        >
          <Ul>
            <Li>
              <Link href="mailto:mariusjagminas.it@gmail.com">
                <FaEnvelope />
                <Span>mariusjagminas.it@gmail.com</Span>
              </Link>
            </Li>
            <Li>
              <Link href="https://github.com/mariusjagminas">
                <FaGithub />
                <Span>github.com/mariusjagminas</Span>
              </Link>
            </Li>
            <Li>
              <Link href="https://www.linkedin.com/in/mariusjagminas/">
                <FaLinkedin />
                <Span>linkedin.com/in/mariusjagminas</Span>
              </Link>
            </Li>
          </Ul>
        </Section>
        <Footer />
      </>
    )
  }
}

export default Contact
