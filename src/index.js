import React from 'react'
import ReactDOM from 'react-dom'

import promise from 'redux-promise'
import { injectGlobal } from 'styled-components'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import App from './containers/App'
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
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.getElementById('root'))
