import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native'
import { Actions, Router, Scene, Stack } from 'react-native-router-flux'

import { listenToLinkingEvents } from 'src/actions/NativeActions'

import MobileScenes from 'src/views/mobile'
import WebScenes from 'src/views/web'

class App extends Component {
  componentWillmount() {
    this.props.listen()
  }

  render() {
    const scenes = {
      "ios": MobileScenes,
      "android": MobileScenes,
      "web": WebScenes,
    }
    return (
      <Router scenes={scenes[Platform.OS]} />
    )
  }
}

export default connect(({ user }) => ({

}), dispatch => ({
  listen: dispatch(listenToLinkingEvents())
}))(App)