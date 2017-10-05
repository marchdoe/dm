import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Heading,
  Progress,
  Small,
  Text } from 'rebass'

import { color, border } from '../../theme'

import Positions from '../../components/Positions'

const Wrapper = styled(Flex)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`

const Content = styled(Box)``

const StyledSkills = styled(Box)`
  background-color: ${color.white};
  border-radius: ${border.largeRadius};
`

class About extends Component {
  render () {
    return (
      <Wrapper wrap>

        <Content w={[ 1 ]} p={3}>

          <Text color={'gray7'} f={[4, 5]} mb={4}>
            Ut erat justo, porta vel ligula congue, tempus aliquet sem. Pellentesque porta tristique orci. Mauris sed dui erat. Nulla arcu neque, vestibulum id laoreet id, tincidunt non diam. Vestibulum bibendum elit vel ex consectetur, venenatis finibus tellus facilisis.
          </Text>

          <StyledSkills py={1} mb={4}>
            <Heading pt={3} px={3} mb={1} f={1} is='h4' color={color.green} caps>Skills</Heading>
            <Flex mb={3} wrap>
              <Box w={[ 1, 1 / 3 ]} px={3} mt={3} mb={3}>
                <Text f={2}>HTML</Text>
                <Progress color={'#0088cc'} value={9 / 10} />
              </Box>
              <Box w={[ 1, 1 / 3 ]} px={3} mt={3} mb={3}>
                <Text f={2}>CSS</Text>
                <Progress color={'#0088cc'} value={9 / 10} />
              </Box>
              <Box w={[ 1, 1 / 3 ]} px={3} mt={3} mb={3}>
                <Text f={2}>Javascript</Text>
                <Progress color={'#0088cc'} value={4 / 10} />
              </Box>

              <Box w={[ 1, 1 / 3 ]} px={3} mt={3} mb={3}>
                <Text f={2}>HTML</Text>
                <Progress color={'#0088cc'} value={9 / 10} />
              </Box>
              <Box w={[ 1, 1 / 3 ]} px={3} mt={3} mb={3}>
                <Text f={2}>CSS</Text>
                <Progress color={'#0088cc'} value={9 / 10} />
              </Box>
              <Box w={[ 1, 1 / 3 ]} px={3} mt={3} mb={3}>
                <Text f={2}>Javascript</Text>
                <Progress color={'#0088cc'} value={4 / 10} />
              </Box>
            </Flex>
          </StyledSkills>

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

        </Content>
      </Wrapper>
    )
  }
}

export default About
