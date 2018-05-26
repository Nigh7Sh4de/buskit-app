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

import { listenToLinkingEvents } from 'src/actions/UserActions'

import LoginView from 'src/views/LoginView'
import HomeView from 'src/views/HomeView'


const scenes = Actions.create(
  <Stack key='root'>
    <Scene key='home' path="/" component={HomeView} title="Home" />
    <Scene key='login' path="/login" component={LoginView} title="Login" />
  </Stack>
)

class App extends Component {
  componentWillmount() {
    this.props.listen()
  }

  render() {
    return (
      <Router scenes={scenes} />
    )
  }
}

export default connect(({ user }) => ({

}), dispatch => ({
  listen: dispatch(listenToLinkingEvents())
}))(App)