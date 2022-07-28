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
      <Main>
        <RaceContent>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </RaceContent>
        <RaceContent>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </RaceContent>
        <RaceContent>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </RaceContent>
      </Main>
    </>
  )
}

const Hero = styled.div`
  display: flex;
  justify-content: center;
  border: 4px solid blue;
`

const Heading = styled.h3`
  padding-bottom: 8px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px dashed purple;
`

const RaceContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`

export default Home
