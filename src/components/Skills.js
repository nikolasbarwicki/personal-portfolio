import React from "react"
import Layout from "./Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: #fff;
  grid-gap: 5rem;
  padding: 5rem 7rem;
  position: relative;
  color: ${props => props.theme.colors.darkBlue};

  ::before {
    position: absolute;
    content: "";
    left: -80px;
    bottom: -50px;
    width: 190px;
    height: 190px;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;
    z-index: -1;
  }
`

const Content = styled.div`
  grid-column: 1 / span 12;
  text-align: center;
  position: relative;
  color: ${props => props.theme.colors.darkBlue};

  ::before {
    position: absolute;
    content: "";
    right: 0px;
    top: 0px;
    width: 270px;
    height: 270px;
    right: -25vw;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;
  }
`

const Paragraph = styled.p`
  padding: ${props => props.padding}rem 0;
  font-weight: ${props => props.regular && "400"};
  font-size: 1.6rem;
  position: relative;

  ::before {
    position: absolute;
    content: "";
    left: -80px;
    bottom: -650px;
    width: 190px;
    height: 190px;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;
  }
`

const ItemHeading = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 1.7rem 0 0.5rem;
`

const Item = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
`

const Image = styled(Img)``

const Skills = () => {
  const icons = useStaticQuery(graphql`
    {
      reactIcon: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reduxIcon: file(relativePath: { eq: "redux.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      styledIcon: file(relativePath: { eq: "styled.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      adobeIcon: file(relativePath: { eq: "adobe.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gatsbyIcon: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nodejsIcon: file(relativePath: { eq: "nodejs.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      htmlIcon: file(relativePath: { eq: "html.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubIcon: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      backgroundBlue: file(relativePath: { eq: "skills-background-blue.png" }) {
        publicURL
      }
      backgroundYellow: file(
        relativePath: { eq: "skills-background-yellow.png" }
      ) {
        publicURL
      }
    }
  `)

  return (
    <Layout pageNumber="03" doubleRow="20% 80%">
      <Content background={icons.backgroundBlue.publicURL}>
        <h2>My featured skills</h2>
        <Paragraph
          regular
          padding={2}
          background={icons.backgroundYellow.publicURL}
        >
          I specialize in helping early stage startups validate their riskiest
          assumptions.
        </Paragraph>
      </Content>

      <Wrapper>
        <Item>
          <Image fixed={icons.reactIcon.childImageSharp.fixed} />
          <ItemHeading>React JS</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
        <Item>
          <Image fixed={icons.reduxIcon.childImageSharp.fixed} />
          <ItemHeading>Redux</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
        <Item>
          <Image fixed={icons.styledIcon.childImageSharp.fixed} />
          <ItemHeading>styledcomponents</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
        <Item>
          <Image fixed={icons.adobeIcon.childImageSharp.fixed} />
          <ItemHeading>Adobe Suite</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
        <Item>
          <Image fixed={icons.gatsbyIcon.childImageSharp.fixed} />
          <ItemHeading>Gatsby JS</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
        <Item>
          <Image fixed={icons.nodejsIcon.childImageSharp.fixed} />
          <ItemHeading>Node.js</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
        <Item>
          <Image fixed={icons.htmlIcon.childImageSharp.fixed} />
          <ItemHeading>HTML & CSS</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
        <Item>
          <Image fixed={icons.githubIcon.childImageSharp.fixed} />
          <ItemHeading>Git & Unix terminal</ItemHeading>
          <Paragraph regular>
            I specialize in helping early stage startups validate
          </Paragraph>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default Skills
