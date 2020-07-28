import React from "react"
import theme from "../assets/themes/theme"
import GlobalStyles from "../assets/styles/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import ReactFullpage from "@fullpage/react-fullpage"
import Header from "../components/Header"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { graphql } from "gatsby"

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

const IndexPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <ReactFullpage
      licenseKey={"KEY"}
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition=""
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
          </ReactFullpage.Wrapper>
        )
      }}
    />
  </ThemeProvider>
)

export default IndexPage
