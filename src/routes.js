import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Posts from './containers/Posts'
// import Projects from './containers/Projects'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='posts' component={Posts} />
    {/* <Route path='projects' component={Projects} /> */}
  </Route>
)
