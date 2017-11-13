import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

import { color } from '../../theme'

const StyledHeader = styled.header`
  background-color: ${color.white};
  border-bottom: 8px solid ${color.gray2};
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

class Header extends Component {
  render () {
    return (
      <StyledHeader>
        <Logo />
      </StyledHeader>
    )
  }
}

export default Header
