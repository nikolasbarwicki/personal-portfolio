import React from "react"
import theme from "../assets/themes/theme"
import GlobalStyles from "../assets/styles/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import ReactFullpage from "@fullpage/react-fullpage"
import Header from "../components/Header"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import { graphql } from "gatsby"
import "../styles/global.css"
import SEO from "../components/seo"

const S1 = styled.section`
  background: url(${props => props.background});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 70%;
`
const S3 = styled.section`
  background-color: #f1f5fe;
`

export const query = graphql`
  {
    file(relativePath: { eq: "home-background.png" }) {
      publicURL
    }
  }
`

const IndexPage = ({ data, location }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SEO lang="en" />
    <Header location={location} />
    <ReactFullpage
      licenseKey={"5147266D-76274BA9-91276EF6-487CD09B"}
      scrollingSpeed={700}
      navigation={true}
      navigationPosition="left"
      anchors={["home", "projects", "skills", "contact"]}
      menu={"#myMenu"}
      loopBottom={true}
      scrollOverflow={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <S1 className="section" background={data.file.publicURL}>
              <Home />
            </S1>
            <section className="section">
              <Projects />
            </section>
            <S3 className="section">
              <Skills />
            </S3>
            <section className="section">
              <Contact />
            </section>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  </ThemeProvider>
)

export default IndexPage
