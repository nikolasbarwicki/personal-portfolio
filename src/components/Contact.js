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

const SubmitButton = styled.button`
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

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

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
          If you would like to work together or find out more about how I could
          help you please fill in the form below.
        </Paragraph>
        <Form
          onSubmit={e => onSubmit(e)}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
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

          <SubmitButton type="submit">SEND A MESSAGE</SubmitButton>
        </Form>
        <p>You can find me online in many places...</p>
        <IconsWrapper>
          <IconContext.Provider value={{ size: "30px" }}>
            <li>
              <Icon href="mailto:nikolas.barwicki@gmail.com">
                <FiMail alt="Nikolas Barwicki mail address" />
              </Icon>
            </li>
            <li>
              <Icon href="https://dribbble.com/barwicki" target="blank">
                <FaDribbble alt="Nikolas Barwicki dribble account" />
              </Icon>
            </li>
            <li>
              <Icon href="https://github.com/nikolasbarwicki" target="blank">
                <FiGithub alt="Nikolas Barwicki github account" />
              </Icon>
            </li>
            <li>
              <Icon
                href="https://linkedin.com/in/nikolas-barwicki"
                target="blank"
              >
                <FiLinkedin alt="Nikolas Barwicki linkedin account" />
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
