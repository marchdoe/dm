import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Heading,
  Small,
  Text } from 'rebass'

import { color } from '../../theme'

import Positions from '../../components/Positions'

const Wrapper = styled(Flex)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  letter-spacing: .2em;
`

class About extends Component {
  render () {
    return (
      <Wrapper flexWrap='wrap'>
        <Box w={[ 1 ]} p={3}>

          <StyledHeading mb={3} fontSize={1} is='h4' color={color.secondary}>Experience</StyledHeading>

          <Positions />

          <StyledHeading mb={3} fontSize={1} is='h4' color={color.secondary}>Education</StyledHeading>

          <Flex flexWrap='wrap' mb={3}>
            <Box width={1}>
              <Heading mb={2} fontSize={3} is='h2'>
                The University of Dayton
                <Small ml={2} fontSize={1}>1995-1999</Small>
              </Heading>

              <Heading color={color.darkGray} fontSize={2} is='h3'>Bachelor of Fine Arts</Heading>
              <Text fontSize={1}>Concentration in Digital Imaging</Text>
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    )
  }
}

export default About
