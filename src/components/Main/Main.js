import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation/Navigation"
import throttle from "lodash/throttle"
import Particles from './Particles/Particles'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  position: ${({ isFixed }) => isFixed ? "fixed" : "absolute"};
  top: ${({ isFixed, heroHeight }) => isFixed ? `${-heroHeight}px` : "0"};
  z-index: 1000;
  background: ${({ theme }) => theme.c.bg}; 
  overflow: hidden;
  `

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 2.4vw;
  
  ${({ theme }) => theme.mq.tablet}{
    font-size: 2vw;
  }
  
  ${({ theme }) => theme.mq.laptop}{
    font-size: ${({ theme }) => theme.f.rem(16)};
    align-items: stretch;
    width: 50%;
  }
`

const Name = styled.h1`
  color: ${({ theme }) => theme.c.text};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.f.em(46)};
  background-color:${({ theme }) => theme.c.active};
  padding: 0 ${({ theme }) => theme.f.em(10)};
  
  ${({ theme }) => theme.mq.laptop}{
    font-size: ${({ theme }) => theme.f.em(43)};
    padding-left: ${({ theme }) => theme.f.em(30)};
  }
`

const Info = styled.p`
  padding: 0 ${({ theme }) => theme.f.em(10)};
  margin: 0;
  color: ${({ theme }) => theme.c.text};
  font-family: ${({ theme }) => theme.fontFamily2}; 
  font-size: ${({ theme }) => theme.f.em(40)};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.f.em(25)};
  }
`

class Main extends React.Component {
  constructor() {
    super()
    this.section = null;
    this.navbat = null;

    this.state = {
      sectionWidth: 0,
      sectionHeight: 0,
      isFixed: false,
      navbarHeight: 0,
      heroHeight: 0
    }
  }

  fixNavbar = () => {

    if ((this.state.heroHeight < window.scrollY) === this.state.isFixed) return
    this.setState(prevState => ({ ...prevState, isFixed: !prevState.isFixed }))
  }

  initSmoothScroll = (navHeight) => {
    if (typeof window == `undefined`) return
    const SmoothScroll = require("smooth-scroll")
    new SmoothScroll('a[href*="#"]', {
      offset: navHeight - 1,
      speed: window.innerWidth > 600 ? 300 : 10,
    })
  }

  setNewValues = () => {
    const heroHeight = this.section.offsetHeight - this.navbar.offsetHeight
    this.initSmoothScroll(this.navbar.offsetHeight)

    this.setState({
      sectionWidth: this.section.offsetWidth,
      sectionHeight: this.section.offsetHeight,
      isFixed: heroHeight < window.scrollY,
      navbarHeight: this.navbar.offsetHeight,
      heroHeight: heroHeight
    })
  }

  componentDidMount() {
    this.section = document.querySelector("#main")
    this.navbar = document.querySelector("#navigation")
    document.addEventListener("scroll", throttle(this.fixNavbar, 50))
    this.setNewValues()
  }

  render() {
    return (
      <Container id="main" >
        <Section
          isFixed={this.state.isFixed}
          heroHeight={this.state.heroHeight}
        >
          <Navigation navbarHeight={this.state.navbarHeight} />
          <Particles
            width={this.state.sectionWidth}
            height={this.state.sectionHeight}
          />
          <InnerContainer>
            <Name>Marius Jagminas</Name>
            <Info>JavaScript Developer</Info>
          </InnerContainer>
        </Section>
      </Container >
    )
  }
}


export default Main