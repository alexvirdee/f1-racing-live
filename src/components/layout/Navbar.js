import React from "React"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Container>
      <Gradient>
        <Logo>Logo</Logo>
      </Gradient>
      <NavLinks>
        <Link>Home</Link>
        <Link>Schedule</Link>
        <Link>Drivers</Link>
        <Link>About</Link>
      </NavLinks>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  height: 6vh;
  border-bottom: 2px solid #000;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
`

const Gradient = styled.span`
  padding: 0 1em;
  position: relative;
  right: 1em;
  margin-right: auto;

  &:hover {
    animation-name: logo-hover;
    animation-duration: 0.3s;
    animation-fill-model: forwards;
    animation-timing-functional: cubic-bezier(0.17, 0.57, 0.31, 0.85);
  }
`

const Logo = styled.h1`
  font-weight: 300;
  font-size: 1.75em;
  line-height: 0.75em;
  color: #000;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Link = styled.p`
  color: blue;
  margin: 4px;
`

export default Navbar
