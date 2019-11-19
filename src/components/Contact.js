import React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Footer from "./Footer"

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 9px; /* for sizing */
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

const Contact = () => (
  <>
    <Section id="contact">
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
