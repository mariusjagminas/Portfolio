import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import throttle from "lodash/throttle"

const Section = styled.div`
 width: 100%;
 height: 100vh;
 position: relative;
 overflow: hidden;
 `;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: ${({ isFixed }) => isFixed ? "fixed" : "absolute"};
  top: ${({ isFixed, heroHeight }) => isFixed ? `${-heroHeight}px` : "0"};
  z-index: 1000;
  background: ${({ theme }) => theme.c.bg2}; 
  `

const Containerin = styled.div`
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
  /* Media queries */
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
  /* Media queries */
  ${({ theme }) => theme.mq.tablet} {
    font-size: 25px;
  }
`


class Main extends React.Component {
  constructor() {
    super()
    this.heroHeight = 0

    this.state = {
      isFixed: false,
      navbarHeight: 0,
      heroHeight: 0,
    }
  }

  fixNavbar = () => {
    const isInStateToBeFixed = this.checkIfShouldBeFixed()
    if (isInStateToBeFixed === this.state.isFixed) return
    this.setState(prevState => ({ ...prevState, isFixed: !prevState.isFixed }))
  }

  checkIfShouldBeFixed = () => {
    return this.heroHeight < window.scrollY
  }

  initSmoothScroll = navbarHeight => {
    if (typeof window !== `undefined`) {
      const SmoothScroll = require("smooth-scroll")
      new SmoothScroll('a[href*="#"]', {
        offset: navbarHeight - 1,
        speed: window.innerWidth > 600 ? 300 : 40,
      })
    }
  }

  componentDidMount() {
    const sectionHeight = document.querySelector("#main").offsetHeight
    const navbarHeight = document.querySelector("#navigation").offsetHeight;
    this.heroHeight = sectionHeight - navbarHeight
    this.initSmoothScroll(navbarHeight)
    document.addEventListener("scroll", throttle(this.fixNavbar, 10))
    this.setState({
      isFixed: this.checkIfShouldBeFixed(),
      navbarHeight: navbarHeight,
      heroHeight: this.heroHeight
    })
  }

  render() {
    return (

      <Section id="main" >
        <Container
          isFixed={this.state.isFixed}
          heroHeight={this.state.heroHeight}
        >
          <Containerin>
            <Wrapper>
              <InnerWrapper>
                <H1>Marius Jagminas</H1>
              </InnerWrapper>
              <P>Front End JavaScript Developer</P>
            </Wrapper>
          </Containerin>
          <Navigation navbarHeight={this.state.navbarHeight} />
        </Container>
      </Section >
    )
  }
}


export default Main

