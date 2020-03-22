import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main/Main"
import Projects from "../components/Projects/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import ScreenOrientation from '../components/ScreenOrientation'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ScreenOrientation />
        <Main />
        <Projects />
        <About />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
