import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native'

import LoginView from 'src/views/LoginView.js'
import HomeView from 'src/views/HomeView.js'

import { Actions, Router, Scene, Stack } from 'react-native-router-flux'

const scenes = Actions.create(
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
    result.params[url_string.substring(i, eq)] = url_string.substring(eq + 1, next)
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
    
    // console.log('Got intent-ed biatch', event)
    // const key_at = 'access_token='
    // const key_id = 'id_token='
    // const key_sc = 'scope='
    // const index_at = event.url.indexOf(key_at)
    // const index_id = event.url.indexOf(key_id)
    // const access_token = event.url.substr(index_at + key_at.length, index_id - 1)
    // const id_token = event.url.substr(index_id + key_id.length, event.url.length)
    // console.log('at', access_token, 'id', id_token)
  }

  render() {
    return (
      <Router scenes={scenes} />
    )
  }
}
