import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import { Waypoint } from "react-waypoint"
import SmoothScroll from "smooth-scroll"

class IndexPage extends React.Component {
  state = { isSticky: false, scrollSpyOffset: null }

  handleWaypointEnter = () => {
    this.setState({ isSticky: false })
  }

  handleWaypointLeave = () => {
    this.setState({ isSticky: true })
  }

  componentDidMount() {
    const navHeight = document.getElementById("navigation").offsetHeight
    new SmoothScroll('a[href*="#"]', { offset: navHeight, speed: 400 })

    this.setState({
      ...this.state,
      topOffset: navHeight,
      scrollSpyOffset: -(navHeight + 50),
    })
  }

  render() {
    return (
      <Layout>
        <Main
          isSticky={this.state.isSticky}
          scrollSpyOffset={this.state.scrollSpyOffset}
        />
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
          topOffset={this.state.topOffset}
          bottomOffset={-1}
        />
        <Projects />
        <About />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
