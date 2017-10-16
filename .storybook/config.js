import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options';

import { Provider } from 'rebass'

addDecorator((story) => (
  <Provider>
    <div style={{
      padding: 20
    }}>
      {story()}
    </div>
  </Provider>
))

setOptions({
  name: 'Doug March',
  url: 'https://doug-march.com',
  addonsPanelInRight: true,
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonsPanel: true,
  showSearchBox: false,
  sidebarAnimations: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./
});

function loadStories () {
  const req = require.context('../src/components', true, /(\.story\.js$)|(\.story\.jsx$)/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
