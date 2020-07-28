import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { IconContext } from "react-icons"
import MenuToggle from "./MenuToggle"

const Logo = styled(Img)`
  height: 5rem;
  width: 18rem;
`

const Nav = styled.nav``

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`

const A = styled.a`
  display: flex;
  align-items: center;
`

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 4rem 7rem 0 7rem;
  position: fixed;
  z-index: 9999;
`

const Header = () => {
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
      <Logo fluid={logo.file.childImageSharp.fluid} />

      <Nav>
        <Ul>
          <IconContext.Provider value={{ color: "#07335D", size: "30px" }}>
            <li>
              <A href="">
                <FiGithub />
              </A>
            </li>
            <li>
              <A href="">
                <FiLinkedin />
              </A>
            </li>

            <MenuToggle />
          </IconContext.Provider>
        </Ul>
      </Nav>
    </Wrapper>
  )
}

export default Header
