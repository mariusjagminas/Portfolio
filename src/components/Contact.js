import React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Footer from "./Footer"

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Ul = styled.ul`
  list-style: none;
  margin: 70px 0;
  padding: 0;
  font-size: 9px; /* for sizing */
  ${({ theme }) => theme.mq.tablet} {
    font-size: 18px;
  }
`

const Li = styled.li`
  margin: 4em 0;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.rgba4};
  font-size: 3em;
  display: flex;
  align-items: center;
`

const Span = styled.span`
  font-size: 0.52em;
  padding-left: 0.6em;
`

const Contact = ({ topOffset, innerWindowHeight }) => (
  <>
    <Section
      id="contact"
      topOffset={topOffset}
      innerWindowHeight={innerWindowHeight}
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

export default Contact
