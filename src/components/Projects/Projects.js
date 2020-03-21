import React from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"
import projectsData from './projectsData'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.mobile1} 0;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: ${({ theme }) => theme.f.rem(1300)};
    margin: 0 auto;  
  }

  ${({ theme }) => theme.mq.laptop}{
    padding: ${({ theme }) => theme.padding.laptop1} 0;
    padding-top: ${({ theme }) => theme.f.rem(50)};
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      {projectsData
        .map(data => <ProjectCard data={data} key={data.title} />)
      }
    </Container >
  )
}

export default Projects