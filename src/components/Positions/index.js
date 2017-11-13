import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import styled from 'styled-components'
import { fetchPositions } from '../../actions/actionCreators'

import {
  Box,
  Flex,
  Heading,
  Small } from 'rebass'

import { color } from '../../theme'

const StyledTitle = styled(Heading)`
  color: ${color.gray9};
  font-weight: normal;
`

const StyledSecondaryTitle = styled(Small)`
  color: ${color.gray7};
  display: block;
  font-weight: normal;
`

const StyledPositionTitle = styled(Heading)`
  border-bottom: 1px solid ${color.gray1};
`

const StyledBox = styled(Box)`
  ul {
    margin: 0;
    list-style: none;
    padding-left: 1.0em;

    li {
      margin: 0 0 1rem 0;
    }

    li:before {
      content: "•";
      margin: 0 .5em 0 -1em;
      color: ${color.primary};
    }
  }
`

class Positions extends Component {
  componentWillMount () {
    this.props.fetchPositions()
  }

  renderMarkdown (content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  renderPositions () {
    return this.props.positions.sort((a, b) => a.fields.order > b.fields.order).map((position, index) => {
      return (
        <Flex wrap is='section' mb={[3, 3, 3, 4]} key={position.sys.id}>
          <StyledPositionTitle is='h2' w={1} pb={[1 ,2, 3]} mb={[1 ,2, 3]} f={3}>
            {position.fields.company}
            <Small ml={3} f={1}>{position.fields.date}</Small>
          </StyledPositionTitle>

          <Box mb={4} width={[1, 1 / 3, 1 / 4]}>
            <StyledTitle f={2} is='h3'>
              {position.fields.title}
              <StyledSecondaryTitle>
                {position.fields.secondaryTitle}
              </StyledSecondaryTitle>
            </StyledTitle>
          </Box>

          <StyledBox
            width={[1, 2 / 3, 3 / 4]}
            dangerouslySetInnerHTML={this.renderMarkdown(position.fields.description)}
          />
        </Flex>
      )
    })
  }

  render () {
    return (
      <div>
        {this.renderPositions()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { positions: state.positions.all }
}

export default connect(mapStateToProps, {fetchPositions})(Positions)
