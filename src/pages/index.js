import React, { useEffect } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"

// const f1key = process.env.F1_API_KEY

/**
 * Formula one API information for getting real time stats
 * https://coverage-matrix.sportradar.com/
 */

const Home = () => {
  // Test getting some information from sportradar
  useEffect(() => {
    try {
      // const url = `https://api.sportradar.us/formula1/trial/v2/en/competitors/sr:competitor:7135/profile.json?api_key=${f1key}`

      const fetchData = async () => {
        const data = await fetch("/api")
          .then(res => res.json())
          .then(json => console.log(json))

        return data
      }

      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [])

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
