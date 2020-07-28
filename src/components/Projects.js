import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "./Layout"
import styled from "styled-components"

const Content = styled.div`
  grid-column: 1 / span 5;
  text-align: left;
  align-self: end;
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

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1 / span 12;
`

const ProjectHeading = styled.span`
  font-size: 2.2rem;
  font-weight: ${props => props.bold && "700"};
`

const ImageWrapper = styled.div`
  grid-column: 6 / span 7;
  position: relative;
  align-self: end;
  top: 80px;

  ::before {
    position: absolute;
    content: "";
    right: -80px;
    top: -80px;
    width: 450px;
    height: 450px;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;
  }
`

const Image = styled(Img)`
  max-width: 100%;
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "projects-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "portfolio-1-background.png" }) {
        publicURL
      }
    }
  `)

  console.log(data)

  return (
    <Layout pageNumber="02" doubleRow="60% 40%">
      <Content>
        <h3>Web Design & Development</h3>
        <Heading>Skin Balance</Heading>
        <Paragraph regular padding={2}>
          I've always been drawn to the overlap between design and development.
          Enjoy each aspect, and love building sites & mobile apps from start to
          finish, for clients come from all over the world.
        </Paragraph>
        <p>PROJECT DETAILS</p>
      </Content>
      <ImageWrapper background={data.background.publicURL}>
        <Image fluid={data.image.childImageSharp.fluid} />
      </ImageWrapper>
      <ProjectsWrapper>
        <div>
          <ProjectHeading>
            01.
            <br />
            Beer Note
          </ProjectHeading>
        </div>
        <div>
          <ProjectHeading bold>
            02.
            <br />
            Skin Balance
          </ProjectHeading>
        </div>
        <div>
          <ProjectHeading>
            03.
            <br />
            Budgety App
          </ProjectHeading>
        </div>
        <div>
          <ProjectHeading>
            04.
            <br />
            Awesome App
          </ProjectHeading>
        </div>
      </ProjectsWrapper>
    </Layout>
  )
}

export default Projects
