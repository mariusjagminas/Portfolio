import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import { icons } from "../assets/aboutSectionIcons"

const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.rgba1};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  /* Media queries */
  ${({ theme }) => theme.mq.laptop} {
    padding: ${({ theme }) => theme.spacing[1]} 0;
  }
`

const MainWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3.7px; /* for icons sizing */
  /* Media queries */
  ${({ theme }) => theme.mq.tablet} {
    font-size: 8px;
  }
`

const H3 = styled.h3`
  color: ${({ theme }) => theme.rgba4};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding: 0 10px;
  margin: 0;
`

const Text = styled.p`
  display: block;
  margin: ${({ theme }) => theme.spacing[3]} 0;
  padding: 0;
  text-align: center;
  color: ${({ theme }) => theme.rgba4};
  font-size: 20px;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: 92em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Li = styled.li`
  margin: 1.6em;
  background-color: ${({ theme }) => theme.dark};
  width: 18em;
  height: 18em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconTitle = styled.p`
  color: ${({ theme }) => theme.rgba4};
  font-size: 2em;
  margin: 0.4em 0 0 0;
`

const About = () => (
  <Section id="about">
    <MainWrapper>
      <H3>
        I am a self-taught Front-End Developer, generally working with React,
        Gatsby.js.
      </H3>
      <Text>Technologies that I use in my projects:</Text>
      <Ul>
        {icons.map(({ icon, name }) => (
          <Li key={name}>
            <Wrapper>
              <Icon width={"7em"} icon={icon} />
              <IconTitle>{name}</IconTitle>
            </Wrapper>
          </Li>
        ))}
      </Ul>
    </MainWrapper>
  </Section>
)

export default About
