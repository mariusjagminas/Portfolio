import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import { Waypoint } from "react-waypoint"

class IndexPage extends React.Component {
  state = {
    isSticky: false,
    scrollSpyOffset: null,
    isVisible: false,
    innerWindowHeight: null,
  }

  handleWaypointEnter = () => {
    this.setState({ isSticky: false })
  }

  handleWaypointLeave = () => {
    this.setState({ isSticky: true })
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const navHeight = document.getElementById("navigation").offsetHeight
      const SmoothScroll = require("smooth-scroll")
      new SmoothScroll('a[href*="#"]', {
        offset: navHeight,
        speed: window.innerWidth > 600 ? 400 : 20,
      })
      this.setState({
        ...this.state,
        topOffset: navHeight,
        scrollSpyOffset: -(navHeight + 50),
        isVisible: true,
        innerWindowHeight: window.innerHeight,
      })
    }
  }

  setHeight = () => {
    this.setState({
      ...this.state,
      innerWindowHeight: window.innerHeight,
    })
  }

  render() {
    return (
      <Layout>
        <Main
          isSticky={this.state.isSticky}
          scrollSpyOffset={this.state.scrollSpyOffset}
          isVisible={this.state.isVisible}
          innerWindowHeight={this.state.innerWindowHeight}
          setHeight={this.setHeight}
        />
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
          topOffset={this.state.topOffset + 1}
          bottomOffset={-150}
        />
        <Projects />
        <About />
        <Contact
          topOffset={this.state.topOffset}
          innerWindowHeight={this.state.innerWindowHeight}
        />
      </Layout>
    )
  }
}

export default IndexPage

//TODO: Write 100vhOnMobile component and wrap main & contact sections in it, instead of
// passing a props to those components, and doing calculations in them.
