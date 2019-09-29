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
    isMobile: true,
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
      new require("smooth-scroll")('a[href*="#"]', {
        offset: navHeight - 1,
        speed: 400,
      })

      this.setState({
        ...this.state,
        topOffset: navHeight,
        scrollSpyOffset: -(navHeight + 50),
        isVisible: true,
        isMobile: window.innerWidth < 600 ? true : false, // sets navbar to position fixed 'top' on small screen devices
      })
    }
  }

  render() {
    return (
      <Layout>
        <Main
          isSticky={this.state.isSticky}
          scrollSpyOffset={this.state.scrollSpyOffset}
          isVisible={this.state.isVisible}
          isMobile={this.state.isMobile}
        />
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
          topOffset={this.state.topOffset}
          bottomOffset={-30}
        />
        <Projects />
        <About />
        <Contact topOffset={this.state.topOffset} />
      </Layout>
    )
  }
}

export default IndexPage
