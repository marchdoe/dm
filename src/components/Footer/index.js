import React, { Component } from 'react'
import styled from 'styled-components'

import { color } from '../../theme'

const StyledFooter = styled.footer`
  font-size: 11px;
  text-align: center;
  border-top: 2px solid ${color.gray2};
  background-color: ${color.white};
  color: ${color.gray8};
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;

  span {
    margin-right: .6rem;
    font-weight: bold;
    color: ${color.gray9};
  }
`

class Footer extends Component {
  render () {
    return (
      <StyledFooter>
        <span>doug march</span> design, development &amp; music intelligence
      </StyledFooter>
    )
  }
}

export default Footer
