import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero>
        <Heading>Welcome to F1 Racing Live Viewer</Heading>
      </Hero>
    </>
  )
}

const Hero = styled.div`
  display: flex;
  justify-content: center;
  border: 4px solid blue;
`

const Heading = styled.h1`
  padding-bottom: 2px;
`

export default Home
