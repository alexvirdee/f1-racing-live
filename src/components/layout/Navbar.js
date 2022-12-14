import React, { useState } from "react"
import styled from "styled-components"
import NavLinks from "./NavLinks"
import Logo from "./Logo"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <Navigation>
        <Logo />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavLinks />
          </Navbox>
        )}
      </Navigation>
    </>
  )
}

const Navigation = styled.nav`
  padding: 4px 4px 0px 4px;
  height: 8vh;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  z-index: 200;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    justify-content: space-between;
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

export default Navbar
