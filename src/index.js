import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import reducers from './reducers'
import routes from './routes'
import promise from 'redux-promise'

import { injectGlobal } from 'styled-components'
import { color } from './theme'

injectGlobal`
  * { box-sizing: border-box; }

  body {
    margin: 0;
    padding: 0;
    background-color: ${color.lightGray}
  }

  a {
    text-decoration: none;
    color: #666;
    transition: all .2s ease;

    &:hover {
      color: #77c241;
    }
  }
`

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'))
