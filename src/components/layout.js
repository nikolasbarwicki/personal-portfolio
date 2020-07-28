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
  grid-template-columns: repeat(12, 81px);
  grid-template-rows: ${props => (props.doubleRow ? props.doubleRow : "auto")};
  width: 100vw;
  grid-gap: 18px;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 14rem 0 10rem;
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
