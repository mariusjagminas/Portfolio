import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyBackground from "gatsby-background-image"
import { Link } from "gatsby"

const Background = styled(GatsbyBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5vw;

  ${({ theme }) => theme.mq.tablet}{
    font-size: ${({ theme }) => theme.f.rem(30)}; 
  }
`

const Text = styled.h1`
  font-size: ${({ theme }) => theme.f.em(40)};
  color: ${({ theme }) => theme.c.text};
  margin: 0;
`

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.f.em(15)};
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.c.active};
  border: 2px solid;
  border-color: ${({ theme }) => theme.c.active};
  border-radius: 5px;
  padding: ${({ theme }) => theme.f.em(10)};
  margin-top: ${({ theme }) => theme.f.em(15)};
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;

  ${({ theme }) => theme.mq.laptop} {

    &:hover {
      border-color: ${({ theme }) => theme.c.active};
      color: ${({ theme }) => theme.c.active};
    }
  }
`

const NotFoundPage = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Layout>
      <Background
        Tag="section"
        fluid={[
          `linear-gradient(rgba(22, 34, 42,0.9),rgba(22, 34, 42,0.9))`,
          fluid,
        ]}
      >
        <Text>404 not found</Text>
        <StyledLink to={"/"}>Go back to Home page</StyledLink>
      </Background>
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
