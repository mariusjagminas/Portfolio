import React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Footer from "./Footer"
import debounce from "lodash/debounce"

const Section = styled.section`
  opacity: ${isVisible => (isVisible ? 1 : 0)};
  width: 100%;
  min-height: ${({ sectionHeight }) => sectionHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease, height 0.2s ease-out;
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 9px; /* for sizing */
  /* Media queries */
  ${({ theme }) => theme.mq.tablet} {
    font-size: 12px;
  }
`

const Li = styled.li`
  margin: 3em 0;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.rgba4};
  font-size: 3em;
  background-color: ${({ theme }) => theme.dark1};
  padding: 0.4em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }
  transition: opacity 0.3s ease;
`

const Span = styled.span`
  font-size: 0.52em;
  padding-left: 0.6em;
`

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      sectionHeight: "100vh",
      isVisible: false,
    }
    this.navbarHeight = 0
  }

  setSectionHeight = () => {
    const sectionHeight = `${window.innerHeight - this.navbarHeight - 80}px`
    this.setState({
      sectionHeight: sectionHeight,
      isVisible: false,
    })
  }

  componentDidMount() {
    this.navbarHeight = document.querySelector("#navigation").offsetHeight
    this.setSectionHeight()
    window.addEventListener("resize", debounce(this.setSectionHeight, 150))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", debounce())
  }

  render() {
    return (
      <>
        <Section
          id="contact"
          sectionHeight={this.state.sectionHeight}
          isVisible={this.state.isVisible}
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
