import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { injectGlobal } from 'styled-components'

import { Provider } from 'react-redux'
import store from './store'

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
    color: ${color.gray8};
    transition: all .2s ease;

    &:hover {
      color: #77c241;
    }
  }
`

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
  registerServiceWorker()
