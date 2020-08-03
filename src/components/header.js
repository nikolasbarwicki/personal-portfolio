import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { IconContext } from "react-icons"
import Menu from "./Menu"

const Logo = styled(Img)`
  height: 5rem;
  width: 18rem;
`

const Nav = styled.nav``

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;

  @media only screen and (max-width: 37.5rem) {
    min-width: 0;
  }
`

const Icon = styled.a`
  display: flex;
  align-items: center;
  color: #07335d;

  transition: color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.colors.red};
  }

  @media only screen and (max-width: 37.5rem) {
    display: none;
  }
`

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 4rem 7rem 0 7rem;
  position: fixed;
  z-index: 9999;

  @media only screen and (max-width: 56.25rem) {
    padding: 4rem 6rem;
    background-color: white;
  }
  @media only screen and (max-width: 37.5rem) {
    padding: 2rem 3rem;
  }
`

const Header = ({ location }) => {
  const logo = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Link to="/">
        <Logo fluid={logo.file.childImageSharp.fluid} />
      </Link>

      <Nav>
        <Ul>
          <IconContext.Provider value={{ size: "3rem" }}>
            <li>
              <Icon href="https://github.com/nikolasbarwicki" target="blank">
                <FiGithub alt="Nikolas Barwicki github account"/>
              </Icon>
            </li>
            <li>
              <Icon
                href="https://linkedin.com/in/nikolas-barwicki"
                target="blank"
              >
                <FiLinkedin alt="Nikolas Barwicki linkedin account"/>
              </Icon>
            </li>
            <Menu location={location} />
          </IconContext.Provider>
        </Ul>
      </Nav>
    </Wrapper>
  )
}

export default Header
