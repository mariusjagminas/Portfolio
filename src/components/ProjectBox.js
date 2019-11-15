import React from "react"
import styled from "styled-components"
import { FaEye, FaGithub } from "react-icons/fa"
import Img from "./Img"

const Box = styled.div`
  width: 100%;
  max-width: 340px;
  margin: 20px 0;
  background: ${({ theme }) => theme.dark1};
  border: 7px solid ${({ theme }) => theme.dark1};
  border-radius: 5px;
  ${({ theme }) => theme.mq.tablet} {
    margin: 20px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 10px;
`

const Title = styled.h3`
  font-size: 25px;
  margin: 10px 0;
  padding-bottom: 17px;
  color: ${({ theme }) => theme.rgba4};
  border-bottom: 1px solid ${({ theme }) => theme.rgba4};
`

const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.rgba4};
`

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.rgba4};
  border: 1px solid ${({ theme }) => theme.rgba4};
  border-radius: 5px;
  width: 110px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.color};
  }
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
`
const TextWrapper = styled.div`
  width: 100%;
  height: 115px;
`
const Text = styled.span`
  text-transform: uppercase;
  margin-left: 10px;
`

const ProjectBox = ({ title, description, siteUrl, ghUrl, imageName }) => {
  return (
    <Box>
      <Img imageName={imageName} />
      <Wrapper>
        <Title>{title}</Title>
        <TextWrapper>
          <Description>{description} </Description>
        </TextWrapper>
        <BtnWrapper>
          <Link href={siteUrl}>
            <FaEye />
            <Text>Live</Text>
          </Link>
          <Link href={ghUrl}>
            <FaGithub />
            <Text>GitHub</Text>
          </Link>
        </BtnWrapper>
      </Wrapper>
    </Box>
  )
}

export default ProjectBox
