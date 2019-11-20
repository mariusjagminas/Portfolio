import React from "react"
import styled from "styled-components"
import ProjectBox from "../components/ProjectBox"
import { projects } from "../assets/projectsData"

const Section = styled.section`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 20px 0 ${({ theme }) => theme.spacing[2]} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Media queries */
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  ${({ theme }) => theme.mq.laptop} {
    padding: 50px 0 ${({ theme }) => theme.spacing[1]} 0;
  }
`

const Projects = () => {
  return (
    <Section id="projects">
      {projects.map(e => {
        return (
          <ProjectBox
            key={e.title}
            title={e.title}
            description={e.description}
            siteUrl={e.siteUrl}
            ghUrl={e.ghUrl}
            imageName={e.imageName}
          />
        )
      })}
    </Section>
  )
}

export default Projects
