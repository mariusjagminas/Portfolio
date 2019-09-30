import React from "react"
import styled from "styled-components"
import ProjectBox from "../components/ProjectBox"
import { projects } from "../assets/projectsData"

const Section = styled.section`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  ${({ theme }) => theme.mq.desktop} {
    justify-content: space-between;
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

// TODO: Update images to a higher resolution images, set maxWidt property to graphql query
