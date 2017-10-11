import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Heading } from 'rebass'

import { color } from '../../theme'

const Wrapper = styled.div`
  text-align: center;
`

const StyledHeading = styled(Heading)`
  border-bottom: 1px dotted ${color.gray2};
  color: ${color.gray7};
`

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'about'}>I make websites</Link>
        </StyledHeading>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'posts'}>find stuff</Link>
        </StyledHeading>
        {/* <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'projects'}>create things</Link>
        </StyledHeading> */}
      </Wrapper>
    )
  }
}

export default Home
