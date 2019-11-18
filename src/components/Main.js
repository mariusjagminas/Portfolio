import React from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
import Background from "gatsby-background-image"

const BackgroundImage = styled(Background)`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1000;
  overflow: hidden;
`
const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 44vh;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

const Wrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 6.3px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 10px;
    max-width: 500px;
  }
`

const InnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.color};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1.2em 4em;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background-color: ${({ theme }) => theme.color};
    top: 0;
    left: 100%;
    height: 100%;
    width: 1000px;
  }
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 4em;
  text-transform: uppercase;
  margin: 0;
`

const P = styled.p`
  padding: 0;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 25px;
  }
`

const Main = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <BackgroundImage
      id="main"
      Tag="section"
      fluid={[
        `linear-gradient(rgba(22, 34, 42,0.8),rgba(22, 34, 42,0.8))`,
        fluid,
      ]}
    >
      <Container>
        <Wrapper>
          <InnerWrapper>
            <H1>Marius Jagminas</H1>
          </InnerWrapper>
          <P>Front End JavaScript Developer</P>
        </Wrapper>
      </Container>
      <Navigation />
    </BackgroundImage>
  )
}

export default Main

export const query = graphql`
  query Main {
    file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
