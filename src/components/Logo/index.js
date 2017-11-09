import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import LogoImg from './logo.png'

const StyledImg = styled.img`
  padding-left: 16px;
`

class Logo extends Component {
  render () {
    return (
      <Link to='/'>
        <StyledImg src={LogoImg} alt={'logo'} />
      </Link>
    )
  }
}

export default Logo
