import React from "react"
import Layout from "./Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Content = styled.div`
  grid-column: 1 / span 6;
  text-align: left;
  color: ${props => props.theme.colors.darkBlue};

  @media only screen and (max-width: 37.5rem) {
    grid-column: 1 / span 12;
  }
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
  grid-column: 7 / span 6;
  margin-left: 5rem;
  width: calc(100% - 5rem);

  @media only screen and (max-width: 37.5rem) {
    grid-column: 1 / span 12;
    width: 100%;
    margin-left: 0;
  }
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
          <br></br>I am Nikolas, <br></br>Junior Frontend Developer
        </Heading>
        <h3>Frontend Dev / UI/UX Designer / Freelancer</h3>
        <p>
          23 year old frontend developer and designer, based in Wroclaw, Poland.
          I'm passionate about improving the lives of others through coding and
          constantly looking to learn new things everyday. I am solution
          oriented and love a good challenge.
        </p>
        <Paragraph regular padding={2}>
          If you’d like to work on a project with me or just say hello, you can
          hit the contact section. Enjoy your stay.
        </Paragraph>
      </Content>

      <Image fluid={image.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default Home
