import React from "react"
import Layout from "./Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Content = styled.div`
  grid-column: 1 / span 6;
  text-align: left;
`
const Heading = styled.h2`
  span {
    color: ${props => props.theme.colors.yellow};
    font-size: inherit;
  }
`

const Paragraph = styled.p`
  padding: ${props => props.padding}rem 0;
  font-weight: ${props => props.regular && "400"};
`

const Image = styled(Img)`
  grid-column: 8 / span 5;
  width: 30vw;
`

const Home = () => {
  const image = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "portfolio-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageNumber="01">
      <Content>
        <span role="img" aria-label="waving_hand" style={{ fontSize: "3rem" }}>
          👋
        </span>
        <Heading>
          <span>Hi,</span>
          <br></br>I am Nikolas Barwicki Developer & Designer
        </Heading>
        <h3>Frontend Dev / UI/UX Designer / Freelancer</h3>
        <p>
          I've always been drawn to the overlap between design and development.
          Enjoy each aspect, and love building sites & mobile apps from start to
          finish, for clients come from all over the world.
        </p>
        <Paragraph regular padding={2}>
          I'm available for remote work - if you would like to build your own
          something together, <u>get in touch?</u>
        </Paragraph>
      </Content>

      <Image fluid={image.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default Home
