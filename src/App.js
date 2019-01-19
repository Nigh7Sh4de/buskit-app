import React, { Component } from 'react'
import {
  Platform,
  View,
} from 'react-native'

import MobileViews from 'src/views/mobile'
import WebViews from 'src/views/web'

export default class App extends Component {
  render() {
    return Platform.select({
      ios: <MobileViews />,
      android: <MobileViews />,
      web: <WebViews />
    })
  }
}