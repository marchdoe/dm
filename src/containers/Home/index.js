import React, { Component } from 'react'
import styled from 'styled-components'
import { Heading } from 'rebass'

import { Link } from 'react-router-dom'

import { color } from '../../theme'

const Wrapper = styled.div`
  text-align: center;
`

const StyledHeading = styled(Heading)`
  border-bottom: 2px dotted ${color.gray2};
  color: ${color.gray7};
`

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to='/about'>About</Link>
        </StyledHeading>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to='/posts'>Random Links</Link>
        </StyledHeading>
      </Wrapper>
    )
  }
}

export default Home
