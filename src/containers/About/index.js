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

class About extends Component {
  render () {
    return (
      <Wrapper wrap>
        <Box w={[ 1 ]} p={3}>

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Experience</Heading>

          <Positions />

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Education</Heading>

          <Flex wrap mb={3}>
            <Box width={1}>
              <Heading mb={2} f={3} is='h2'>
                The University of Dayton
                <Small ml={2} f={1}>1995-1999</Small>
              </Heading>

              <Heading color={color.darkGray} f={2} is='h3'>Bachelor of Fine Arts</Heading>
              <Text f={1}>Concentration in Digital Imaging</Text>
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    )
  }
}

export default About
