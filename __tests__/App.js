import 'react-native'
import React from 'react'

import HomeView from 'src/views/web/home'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.mock('react-redux', () => ({ 
  connect: () => view => view,
}))

it('renders correctly', () => {
  const tree = renderer.create(
    <HomeView />
  )
})
