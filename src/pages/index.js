import React, { useState } from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import { Waypoint } from "react-waypoint"

const IndexPage = () => {
  const [isSticky, setNavPosition] = useState(false)

  const handleWaypointEnter = () => {
    setNavPosition(false)
  }

  const handleWaypointLeave = () => {
    setNavPosition(true)
  }

  return (
    <Layout>
      <Main isSticky={isSticky} />
      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
        topOffset={100}
        bottomOffset={-1}
      />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage
