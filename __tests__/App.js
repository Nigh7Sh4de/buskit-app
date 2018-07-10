import 'react-native'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HomeView from 'src/views/web/home'

configure({ adapter: new Adapter() })

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.mock('react-redux', () => ({ 
  connect: () => view => view,
}))

it('renders correctly', () => {
  shallow(<HomeView />)
})
