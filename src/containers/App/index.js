import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Flex,
  Box,
  Provider } from 'rebass'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Home from '../../containers/Home'
import About from '../../containers/About'
import Posts from '../../containers/Posts'

import { color } from '../../theme'

const Wrapper = styled(Flex)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const StyledMain = styled(Box)`
  flex: 1;
  background-color: ${color.gray0};
`

class App extends Component {
  render () {
    return (
      <Provider>
        <Router>
          <Wrapper>

            <Header />

            <StyledMain>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About}/>
                <Route exact path='/posts' component={Posts}/>
            </StyledMain>

            <Footer />
          </Wrapper>
        </Router>
      </Provider>
    )
  }
}

export default App
