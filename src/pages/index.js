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

const FirstSection = styled.section`
  background: url(${props => props.background});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 70%;
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
    <SEO
      description="I am Nikolas junior frontend developer based in Wroclaw, Poland"
      lang="en"
      title="Nikolas Barwicki - personal portfolio"
    />
    <Header location={location} />
    <ReactFullpage
      licenseKey={process.env.GATSBY_FULLPAGE_API_KEY}
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
            <FirstSection className="section" background={data.file.publicURL}>
              <Home />
            </FirstSection>
            <section className="section">
              <Projects />
            </section>
            <section style={{ backgroundColor: "#f1f5fe" }} className="section">
              <Skills />
            </section>
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
