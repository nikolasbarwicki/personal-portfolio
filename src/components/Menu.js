import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { IconContext } from "react-icons"
import MenuToggle from "./MenuToggle"

const Wrapper = styled.div`
  right: 0;
  transform: ${props =>
    props.menuOpened ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.4s ease-in-out;

  position: fixed;
  top: 0;
  height: 100vh;
  width: 450px;
  background-color: white;
  font-size: 3.2rem;
  font-family: inherit;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-bottom: 15px;
    padding: 0.7rem;
    color: ${props => props.theme.colors.darkBlue};
  }
`

const MenuLink = styled.a`
  padding: 1rem;
  background-color: ${({ href, location, theme }) =>
    href == location.hash ? theme.colors.yellow : null};

  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`

const IconsWrapper = styled.ul`
  display: flex;
  width: 100px;
  justify-content: space-between;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled(Img)`
  width: 20rem;
  height: 20rem;
`

const BottomWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 1.5rem;
  text-align: right;
`

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.6);
  position: fixed;
  top: 0;
  right: 0;
`

const InnerWrapper = styled.div``

const Menu = ({ location }) => {
  const shape = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "skills-background-blue.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [menuOpened, setMenuOpened] = useState(false)

  const toggle = () => {
    menuOpened ? setMenuOpened(false) : setMenuOpened(true)
  }

  return (
    <>
      <MenuToggle
        onClick={() => {
          toggle()
          console.log(menuOpened)
        }}
        menuOpened={menuOpened}
      />

      {menuOpened && <Overlay />}

      <Wrapper menuOpened={menuOpened}>
        <Nav>
          <ul id="myMenu">
            <li data-menuanchor="home">
              <MenuLink href="#home" location={location}>
                home
              </MenuLink>
            </li>
            <li data-menuanchor="projects">
              <MenuLink href="#projects" location={location}>
                projects
              </MenuLink>
            </li>
            <li data-menuanchor="skills">
              <MenuLink href="#skills" location={location}>
                skills
              </MenuLink>
            </li>
            <li data-menuanchor="contact">
              <MenuLink href="#contact" location={location}>
                contact
              </MenuLink>
            </li>
          </ul>
          <IconsWrapper>
            <IconContext.Provider value={{ color: "#07335D", size: "30px" }}>
              <li>
                <a href="">
                  <FiGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FiLinkedin />
                </a>
              </li>
            </IconContext.Provider>
          </IconsWrapper>
        </Nav>
        <BottomWrapper>
          <Image fixed={shape.file.childImageSharp.fixed} />
          <InnerWrapper>
            <p style={{ fontSize: "14px", fontWeight: "600" }}>
              hello@nikolasbarwicki.com
            </p>
            <p style={{ fontSize: "12px", fontWeight: "400" }}>
              © Nikolas Barwicki 2020
            </p>
          </InnerWrapper>
        </BottomWrapper>
      </Wrapper>
    </>
  )
}

export default Menu
