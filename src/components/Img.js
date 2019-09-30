import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const Img = ({ imageName }) => {
  const {
    allFile: { images },
  } = useStaticQuery(query)

  const isMatchImage = element => {
    return element.node.file === imageName
  }

  return <GatsbyImage fluid={images.find(isMatchImage).node.img.fluid} />
}

export default Img

export const query = graphql`
  query Projects {
    allFile {
      images: edges {
        node {
          file: relativePath
          img: childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
