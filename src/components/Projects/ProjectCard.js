import React from "react"
import PropTypes from 'prop-types'
import styled, { css } from "styled-components"
import Img from '../Img'
import { FaEye, FaGithub } from "react-icons/fa"
import Button from './Button'

const sharedStyles = css`
  width: 100%;
  transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
  transition-duration: .5s;
  transition-property: transform, opacity; 
  background-color: ${({ theme }) => theme.c.card};  
`;

const FrontFace = styled.div`
  ${sharedStyles};
  opacity:1;
  transform: rotateY(0deg);
  position: relative;

  ${({ theme }) => theme.mq.tablet}{
    height: ${({ theme }) => theme.f.em(370)};  
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.f.em(30)};
  background-color: ${({ titleBg }) => titleBg};
  color:  ${({ theme }) => theme.c.text};
  position: absolute;
  top: ${({ theme }) => theme.f.em(10)};
  right: ${({ theme }) => theme.f.em(10)};
  z-index: 5;
  padding: 0 ${({ theme }) => theme.f.em(5)};
`;

const Title2 = styled(Title)`
  top: ${({ theme }) => theme.f.em(40)};
`;

const List = styled.ul`
  margin: 0;
  padding: 0 ${({ theme }) => theme.f.em(70)};
  padding-top: ${({ theme }) => theme.f.em(26)};
  list-style: none;
 `;

const Item = styled.li`
   color: ${({ theme }) => theme.c.navItem};
   font-size: ${({ theme }) => theme.f.em(22)};
   text-align: center;
   padding: ${({ theme }) => theme.f.em(3)} ;
   
   &:nth-child(-n+3){
   border-bottom: 1px solid ${({ theme }) => theme.c.navItem};
   }
 `;

const BackFace = styled.div`
  ${sharedStyles};
  display: flex;
  flex-direction: column;
  opacity: 1;
  transform: rotateY(0deg);
  
  ${({ theme }) => theme.mq.tablet} {
    position: absolute;
    top: 0;
    opacity:0;
    transform: rotateY(180deg);
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.c.navItem};
  padding: ${({ theme }) => theme.f.em(10)};
  text-align: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between; /*Edge fallback */
  justify-content: space-evenly;
  height: ${({ theme }) => theme.f.em(70)};
`;

const Card = styled.div`
  font-size: 0.92rem;
  width: ${({ theme }) => theme.f.em(340)};
  position: relative;
  margin-bottom: ${({ theme }) => theme.f.em(60)};
  
  ${({ theme }) => theme.mq.tablet}{
    margin: ${({ theme }) => theme.f.em(20)};
    
    &:hover {
      ${FrontFace}{
        transform: rotateY(180deg); 
        opacity:0;   
      }

      ${BackFace}{
        transform: rotateY(0deg);
        opacity: 1;
      }
    }
  }

  ${({ theme }) => theme.mq.laptop}{
    font-size: 1rem;
    margin: ${({ theme }) => theme.f.em(30)};
  }
`;

const ProjectCard = ({
  data: {
    title,
    title2,
    titleBg,
    image,
    items,
    text,
    ghUrl,
    siteUrl
  }
}) => {
  return (
    <Card>
      <FrontFace >
        <Title titleBg={titleBg} >{title}</Title >
        <Title2 titleBg={titleBg}>{title2}</Title2>
        <Img imageName={image} />
        <List>
          {items.map(item => <Item key={item}>{item}</Item>)}
        </List>
      </FrontFace>
      <BackFace>
        <ContentWrapper>
          <Content>{text}</Content>
        </ContentWrapper>
        <BtnWrapper>
          <Button text="Github" icon={<FaGithub />} href={ghUrl} />
          <Button text="Live" icon={<FaEye />} href={siteUrl} />
        </BtnWrapper>
      </BackFace>
    </Card>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    titleBg: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired),
    text: PropTypes.string.isRequired,
    ghUrl: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired,
  })
}