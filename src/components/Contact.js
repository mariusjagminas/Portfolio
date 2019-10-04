import React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Footer from "./Footer"

const Section = styled.section`
  width: 100%;
  height: ${({ topOffset, innerWindowHeight }) =>
    `calc(${innerWindowHeight}px - ${topOffset +
      80}px)`}; /*integer 80 is a footer height in pixels  */
  display: flex;
  justify-content: center;
  align-items: center;
`
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 10px; /* for sizing */
  ${({ theme }) => theme.mq.tablet} {
    font-size: 18px;
  }
`

const Li = styled.li`
  margin: 2.5em 0;
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
          <Link href="https://linkedin">
            <FaLinkedin />
            <Span>linkedin.com/mariusjagminas</Span>
          </Link>
        </Li>
      </Ul>
    </Section>
    <Footer />
  </>
)

export default Contact
// FIXME: update linkedin link and text in footer component
