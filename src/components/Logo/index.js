import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import LogoIcon from '../Icon/Logo'

const StyledLink = styled(Link)`
  padding-left: 18px;
`

class Logo extends Component {
  render () {
    return (
      <StyledLink to='/'>
        <LogoIcon />
      </StyledLink>
    )
  }
}

export default Logo
