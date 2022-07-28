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
  margin: 0 auto;
`

export default Logo
