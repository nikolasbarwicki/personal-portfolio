import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "./Layout"
import styled from "styled-components"
import ProjectDescription from "./ProjectDescription"

const Content = styled.div`
  grid-column: 1 / span 5;
  text-align: left;
  align-self: end;
  color: ${props => props.theme.colors.darkBlue};
`

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1 / span 12;
`

const ProjectHeading = styled.span`
  font-size: 2.2rem;
  font-weight: ${props => props.bold && "700"};
  color: ${props => props.theme.colors.darkBlue};
  transition: font-weight 0.3s ease;
  cursor: pointer;

  :hover {
    font-weight: 700;
  }
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
  const [activeProject, setActiveProject] = useState(1)

  const data = useStaticQuery(graphql`
    {
      project1: file(relativePath: { eq: "project1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      project2: file(relativePath: { eq: "project2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      project3: file(relativePath: { eq: "project3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      project4: file(relativePath: { eq: "project4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      background: file(relativePath: { eq: "portfolio-1-background.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout pageNumber="02" doubleRow="60% 40%">
      <Content>
        {activeProject === 1 && (
          <ProjectDescription
            secondary="Freelance Development & Web Design"
            primary="Skin Balance"
            desc="I've always been drawn to the overlap between design and
        development. Enjoy each aspect, and love building sites & mobile
        apps from start to finish, for clients come from all over the
        world."
            link="https://github.com/nikolasbarwicki/skin-balance"
          />
        )}
        {activeProject === 2 && (
          <ProjectDescription
            secondary="Frontend Development & Web Design"
            primary="Budgety App"
            desc="I've always been drawn to the overlap between design and
        development. Enjoy each aspect, and love building sites & mobile
        apps from start to finish, for clients come from all over the
        world."
            link="https://github.com/nikolasbarwicki/budget-app"
          />
        )}
        {activeProject === 3 && (
          <ProjectDescription
            secondary="Fullstack Development"
            primary="BeerNote"
            desc="I've always been drawn to the overlap between design and
          development. Enjoy each aspect, and love building sites & mobile
          apps from start to finish, for clients come from all over the
          world."
            link="https://github.com/nikolasbarwicki/beernote"
          />
        )}
        {activeProject === 4 && (
          <ProjectDescription
            secondary="Frontend Development & Web Design"
            primary="Pantry App"
            desc="I've always been drawn to the overlap between design and
        development. Enjoy each aspect, and love building sites & mobile
        apps from start to finish, for clients come from all over the
        world."
            link="https://github.com/nikolasbarwicki/pantry-app"
          />
        )}
      </Content>
      <ImageWrapper background={data.background.publicURL}>
        {activeProject === 1 && (
          <Image fluid={data.project1.childImageSharp.fluid} />
        )}
        {activeProject === 2 && (
          <Image fluid={data.project2.childImageSharp.fluid} />
        )}
        {activeProject === 3 && (
          <Image fluid={data.project3.childImageSharp.fluid} />
        )}
        {activeProject === 4 && (
          <Image fluid={data.project4.childImageSharp.fluid} />
        )}
      </ImageWrapper>
      <ProjectsWrapper>
        <div>
          <ProjectHeading
            onClick={() => setActiveProject(1)}
            bold={activeProject === 1}
          >
            01.
            <br />
            Skin Balance
          </ProjectHeading>
        </div>
        <div>
          <ProjectHeading
            onClick={() => setActiveProject(2)}
            bold={activeProject === 2}
          >
            02.
            <br />
            Budgety App
          </ProjectHeading>
        </div>
        <div>
          <ProjectHeading
            onClick={() => setActiveProject(3)}
            bold={activeProject === 3}
          >
            03.
            <br />
            BeerNote
          </ProjectHeading>
        </div>
        <div>
          <ProjectHeading
            onClick={() => setActiveProject(4)}
            bold={activeProject === 4}
          >
            04.
            <br />
            Pantry App
          </ProjectHeading>
        </div>
      </ProjectsWrapper>
    </Layout>
  )
}

export default Projects
