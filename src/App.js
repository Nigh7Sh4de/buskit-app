import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native'
import { connect } from 'react-redux'

import LoginView from 'src/views/LoginView.js'
import HomeView from 'src/views/HomeView.js'

import { Actions, Router, Scene, Stack } from 'react-native-router-flux'

const ReduxRouter = connect((state) => ({ state: state.route }))(Router);

const navigator = Actions.create(
  <Stack key='root'>
    <Scene key='home' path="/" component={HomeView} title="Home" />
    <Scene key='login' path="/login" component={LoginView} title="Login" />
  </Stack>
)

var parseUrl = url_string => {
  var result = { params: {} }
  var scheme = url_string.indexOf('buskit.tv/') + 10
  var start = url_string.indexOf('#', scheme)
  var i = start + 1
  
  result.destination = url_string.substring(scheme, start)

  while (i > 1) {
    var eq = url_string.indexOf('=', i)
    var next = url_string.indexOf('&', eq)
    result.params[url_string.substring(i, eq)] = url_string.substring(eq + 1, next < 0 ? url_string.length : next)
    i = next + 1
  }

  return result
}

export default class App extends Component {
  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL)
  }

  handleOpenURL(event) {
    var url = parseUrl(event.url)
    switch (url.destination) {
      case 'redirect':
          console.log('Got a redirect!', url)
        break;
      default: Actions[url.destination](url.params)
    }
  }

  render() {
    return (
      <ReduxRouter navigator={navigator} />
    )
  }
}