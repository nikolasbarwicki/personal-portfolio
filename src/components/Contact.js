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
`

const IconsWrapper = styled.ul`
  display: flex;
  margin: 2rem 0;

  li {
    margin-right: 6rem;
    cursor: pointer;
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
    <Layout pageNumber="01">
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
          <IconContext.Provider value={{ color: "#07335D", size: "30px" }}>
            <li>
              <FiMail />
            </li>
            <li>
              <FaDribbble />
            </li>
            <li>
              <FiGithub />
            </li>
            <li>
              <FiLinkedin />
            </li>
          </IconContext.Provider>
        </IconsWrapper>
      </Content>

      <Image fluid={image.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default Contact
