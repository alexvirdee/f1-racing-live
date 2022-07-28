import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/schedule">Schedule</NavLink>
      <NavLink to="/drivers">Drivers</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  )
}

const NavLink = styled(Link)`
  text-decoration: none;
  color: #2a4362;
  display: inline-block;
  white-space: nowrap;
  margin: 0 0.42vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: #e10500;
    ::after {
      width: 100%;
    }
  }

  :last-child {
    padding-right: 5px;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 1.2rem;
    z-index: 6;
  }
`

export default NavLinks
