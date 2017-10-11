import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchPosts } from '../../actions/index'

import {
  Box,
  Heading,
  Link,
  Text } from 'rebass'

import { color } from '../../theme'

const Wrapper = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`

const StyledArticle = styled(Box)`
  border-bottom: 2px dotted ${color.gray1};

  &:last-child { border: 0; }
`

const StyledHeading = styled(Heading)`
  color: #666;
`

class Posts extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return this.props.posts.map((post, index) => {
      return (
        <StyledArticle py={[3, 3, 4]} key={post.sys.id}>
          <StyledHeading f={4} is={'h2'}>
            <Link href={post.fields.source}>
              {post.fields.title}
            </Link>
          </StyledHeading>
          <Text pt={2} f={2}>{post.fields.excerpt}</Text>
        </StyledArticle>
      )
    })
  }

  render () {
    return (
      <Wrapper p={3}>
        {this.renderPosts()}
      </Wrapper>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(Posts)
