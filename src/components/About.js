import React from "react"
import styled from "styled-components"

import { Icon, InlineIcon } from "@iconify/react"
import reactIcon from "@iconify/icons-logos/react"
import gitIcon from "@iconify/icons-logos/git-icon"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import javascriptIcon from "@iconify/icons-logos/javascript"
import nodejsIcon from "@iconify/icons-logos/nodejs-icon"
import sassIcon from "@iconify/icons-logos/sass"
import html5 from "@iconify/icons-logos/html-5"
import css3 from "@iconify/icons-logos/css-3"
import npmIcon from "@iconify/icons-logos/npm"
import graphqlIcon from "@iconify/icons-logos/graphql"
import visualStudioCode from "@iconify/icons-logos/visual-studio-code"
import contentfulIcon from "@iconify/icons-logos/contentful"
import netlifyIcon from "@iconify/icons-logos/netlify"
import materialUi from "@iconify/icons-logos/material-ui"
import es6Icon from "@iconify/icons-logos/es6"
import reduxIcon from "@iconify/icons-logos/redux"

import theme from "../assets/styles/theme"

const icons = [
  { icon: reactIcon, name: "React" },
  { icon: gatsbyIcon, name: "Gatsby.js" },
  { icon: javascriptIcon, name: "JavaScript" },
  { icon: graphqlIcon, name: "GraphQL" },
  { icon: materialUi, name: "Material-ui" },
  { icon: html5, name: "HTML5" },
  { icon: css3, name: "CSS3" },
  { icon: nodejsIcon, name: "Node.js" },
  { icon: gitIcon, name: "Git" },
  { icon: contentfulIcon, name: "Contenful" },
  { icon: netlifyIcon, name: "Netlify" },
  { icon: visualStudioCode, name: "VScode" },
  { icon: sassIcon, name: "SASS" },
  { icon: npmIcon, name: "NPM" },
  { icon: es6Icon, name: "ES6" },
  { icon: reduxIcon, name: "Redux" },
]

const Section = styled.section`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3.6px; /* for sizing */
  ${({ theme }) => theme.mq.tablet} {
    font-size: 8px;
  }
`
const H3 = styled.h3`
  color: ${({ theme }) => theme.rgba4};
  font-size: 28px;
  text-align: center;
  padding: 20px;
  margin: 30px 0 0 0;
`

const Text = styled.p`
  display: block;
  margin: 0 0 19px 0;
  padding: 20px;
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
  background-color: ${({ theme }) => theme.dark1};
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
    <H3>
      I'm a self-taught (1+ Year) front-end developer, generally working with
      React, Gatsby.js.
    </H3>
    <Text> Technologies that I use in my projects </Text>
    <Ul>
      {icons.map(({ icon, name }, i) => (
        <Li key={i}>
          <Wrapper>
            <Icon width={"7em"} icon={icon} />
            <IconTitle>{name}</IconTitle>
          </Wrapper>
        </Li>
      ))}
    </Ul>
  </Section>
)

export default About
