import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Projects from "../components/Projects/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Main />
        <Projects />
        <About />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
