import React from "react"
import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi"
import { IconContext } from "react-icons"

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
const Details = styled.a`
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.9;

  :hover {
    color: ${({ theme }) => theme.colors.red};
  }

  svg {
    margin-left: 1.5rem;
  }
`

const ProjectDescription = ({ secondary, primary, desc, link }) => {
  return (
    <>
      <h3>{secondary}</h3>
      <Heading>{primary}</Heading>
      <Paragraph regular padding={2}>
        {desc}
      </Paragraph>
      <Details href={link} target="blank">
        PROJECT DETAILS
        <IconContext.Provider value={{ size: "30px", color: "#FFDB66" }}>
          <FiArrowRight />
        </IconContext.Provider>
      </Details>
    </>
  )
}

export default ProjectDescription
