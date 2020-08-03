import React, { useState } from "react"
import Layout from "./Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { FaDribbble } from "react-icons/fa"
import { IconContext } from "react-icons"

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

const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 18px;
  margin: 4rem 0;
`

const Input = styled.input`
  grid-column: ${props => props.grid};
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.darkBlue};
  padding: 1rem 0;
  width: 100%;

  outline: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;

  ::placeholder {
    color: #07335d;
    opacity: 1;
  }
`

const Textarea = styled.textarea`
  grid-column: 1 / span 6;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-bottom: 1px solid ${props => props.theme.colors.darkBlue};
  padding: 1rem 0;

  ::placeholder {
    color: #07335d;
    opacity: 1;
  }
`

const SubmitButton = styled.input`
  grid-column: 1 / span 2;
  font-family: inherit;
  color: #07335d;
  border: none;
  outline: none;
  background: none;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.yellow};
  margin: 2rem 0;
  cursor: pointer;
  transition: color 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.red};
  }

  @media only screen and (max-width: 37.5rem) {
    grid-column: 1 / span 3;
  }
`

const IconsWrapper = styled.ul`
  display: flex;
  margin: 2rem 0;

  li {
    margin-right: 6rem;
    cursor: pointer;
  }
`

const Icon = styled.a`
  color: #07335d;
  transition: color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.colors.red};
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
  }

  const image = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "contact-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageNumber="04">
      <Content>
        <Heading>Get in touch</Heading>
        <Paragraph regular>
          Let's build something together! If you have any other questions, you
          can leave here.
        </Paragraph>
        <Form className="form" onSubmit={e => onSubmit(e)}>
          <Input
            grid={"1 / span 3"}
            type="name"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <Input
            grid={"4 / span 3"}
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />

          <Textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={e => onChange(e)}
            required
            rows="3"
          />

          <SubmitButton
            type="submit"
            className="btn btn-primary"
            value="SEND A MESSAGE"
          />
        </Form>
        <p>You can find me online in many places...</p>
        <IconsWrapper>
          <IconContext.Provider value={{ size: "30px" }}>
            <li>
              <Icon href="mailto:nikolas.barwicki@gmail.com">
                <FiMail />
              </Icon>
            </li>
            <li>
              <Icon href="https://dribbble.com/barwicki" target="blank">
                <FaDribbble />
              </Icon>
            </li>
            <li>
              <Icon href="https://github.com/nikolasbarwicki" target="blank">
                <FiGithub />
              </Icon>
            </li>
            <li>
              <Icon
                href="https://linkedin.com/in/nikolas-barwicki"
                target="blank"
              >
                <FiLinkedin />
              </Icon>
            </li>
          </IconContext.Provider>
        </IconsWrapper>
      </Content>

      <Image fluid={image.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default Contact
