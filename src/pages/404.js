import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const pageNotFound = () => {
  return (
    <>
      <NotFound>Page could not be found!</NotFound>
      <Link to="/">Home</Link>
    </>
  )
}

const NotFound = styled.h1`
    font-size; 28px;
    color: #E10500;
`

export default pageNotFound
