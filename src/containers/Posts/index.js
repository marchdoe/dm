import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchPosts } from '../../actions/actionCreators'

import CodeIcon from '../../components/Icon/Code'

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
  border-bottom: 2px dotted ${color.gray2};

  &:last-child { border: 0; }
`

const StyledHeading = styled(Heading)`
  color: #666;
`

const CodeSourceLink = styled(Link)`
  margin-left: 7px;
  display: inline-block;
`

class Posts extends Component {

  componentWillMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return this.props.posts.map((post, index) => {

      const hasCodeSource = post.fields.github
      const hasExcerpt = post.fields.excerpt

      return (
        <StyledArticle py={[3, 3, 4]} key={post.sys.id}>
          <StyledHeading f={4} is={'h2'}>
            <Link href={post.fields.source} target='_blank'>
              {post.fields.title}
            </Link>
            {hasCodeSource ? (<CodeSourceLink href={post.fields.github} target='_blank' pt={2} f={2}><CodeIcon /></CodeSourceLink>) : ('')}
            {hasExcerpt ? (<Text pt={2} f={2}>{post.fields.excerpt}</Text>) : ('')}
          </StyledHeading>
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
  return {posts: state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts})(Posts)
