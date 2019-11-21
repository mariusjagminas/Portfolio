import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Background from "gatsby-background-image"
import { Link } from "gatsby"

const BackgroundImage = styled(Background)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  font-size: 15px;
  width: 100%;
  max-width: 35em;
  background-color: ${({ theme }) => theme.dark1};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Media queries */
  ${({ theme }) => theme.mq.laptop} {
    font-size: 20px;
  }
`

const H1 = styled.h1`
  font-size: 4em;
  color: ${({ theme }) => theme.white};
  text-align: center;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-size: 1em;
  font-weight: 800;
  border: 2px solid;
  border-color: ${({ theme }) => theme.color};
  border-radius: 5px;
  padding: 0.5em 0.7em;
  margin-bottom: 4em;
  /* Media queries */
  ${({ theme }) => theme.mq.laptop} {
    &:hover {
      border-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.white};
    }
  }
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
`

const Span = styled.span`
  padding-left: 0.3em;
`

const NotFoundPage = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Layout>
      <BackgroundImage
        id="main"
        Tag="section"
        fluid={[
          `linear-gradient(rgba(22, 34, 42,0.8),rgba(22, 34, 42,0.8))`,
          fluid,
        ]}
      >
        <Card>
          <H1>404 not found</H1>
          <StyledLink to={"/"}>
            <Span>Go to Home page</Span>
          </StyledLink>
        </Card>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query NotFoundPage {
    file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default NotFoundPage
