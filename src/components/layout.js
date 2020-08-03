import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Page = styled.aside`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(20px, 81px));
  grid-template-rows: ${props => (props.doubleRow ? props.doubleRow : "auto")};
  max-width: 1170px;
  grid-gap: 18px;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 14rem 0 10rem;

  @media only screen and (max-width: 75rem) {
    padding: 14rem 6rem 8rem 6rem;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 56.25rem) {
    grid-gap: 9px;
  }
  @media only screen and (max-width: 37.5rem) {
    padding: 10rem 3rem 8rem 3rem;
  }
`

const Span = styled.span`
  background-color: ${props => props.theme.colors.red};
  color: white;
  height: 8.5rem;
  width: 8.5rem;
  display: block;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;

  @media only screen and (max-width: 37.5rem) {
    display: none;
  }
`

const Layout = ({ children, pageNumber, doubleRow }) => {
  return (
    <Wrapper>
      <Grid doubleRow={doubleRow}>{children}</Grid>
      <Page>
        <Span>{pageNumber}</Span>
      </Page>
    </Wrapper>
  )
}

export default Layout
