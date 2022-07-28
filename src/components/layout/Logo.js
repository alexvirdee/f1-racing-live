import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Logo = () => {
  return (
    <LogoWrapper as={Link} to="/">
      <StaticImage src="../../images/racing-flag.png" alt="racing-logo" />
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  padding-left: 12px;
  width: 85px;
  height: 75px;
`

export default Logo
