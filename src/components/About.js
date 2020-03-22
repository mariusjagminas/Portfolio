import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import { icons } from "../assets/aboutSectionIcons"

const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.c.navBg};
  padding: ${({ theme }) => theme.padding.mobile1} 0;

  ${({ theme }) => theme.mq.laptop}{
    padding: ${({ theme }) => theme.padding.laptop1} 0;
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.f.rem(680)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.f.rem(3.7)}; 

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.f.rem(8)}; 
  }
`

const Description = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily2}; 
  font-size: ${({ theme }) => theme.f.rem(18)};
  color: ${({ theme }) => theme.c.navItem};
  font-weight: 400;
  text-align: center;
  padding: 0 ${({ theme }) => theme.f.rem(10)}; 
  padding-bottom: ${({ theme }) => theme.padding.mobile1};
  margin: 0;
  max-width: ${({ theme }) => theme.f.rem(420)};

  ${({ theme }) => theme.mq.laptop}{
    font-size: ${({ theme }) => theme.f.rem(25)};
    padding-bottom: ${({ theme }) => theme.padding.laptop1};
    max-width: 100%;
  }
`

const List = styled.ul`
  margin: -1.6em 0;
  padding:  0;
  list-style: none;
  width: 100%;
  max-width: 92em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Item = styled.li`
  margin: 1.6em;
  background-color: ${({ theme }) => theme.c.bg};
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

const IconName = styled.p`
  color: ${({ theme }) => theme.c.navItem};
  font-size: 2em;
  margin: 0.4em 0 0 0;
`

const About = () => (
  <Section id="about">
    <Container>
      <Description>
        Self-taught  front-end  JavaScript developer. I enjoy exploring new technologies, and implementing them in my projects
        </Description>
      <List>
        {icons.map(({ icon, name }) => (
          <Item key={name}>
            <Wrapper>
              <Icon width={"7em"} icon={icon} />
              <IconName>{name}</IconName>
            </Wrapper>
          </Item>
        ))}
      </List>
    </Container>
  </Section>
)

export default About
