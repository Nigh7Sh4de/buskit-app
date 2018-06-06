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
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
} from 'react-router-dom'

import Login from 'src/views/web/LoginView'

import { listenToLinkingEvents } from 'src/actions/NativeActions'

class App extends Component {
  render() {
    return (
      <Router>
        <View>
          <Route exact path="/" component={Login} />
          <Route exact path="/redirect" component={Login} />
        </View>
      </Router>
    )
  }
}

export default connect(({ user }) => ({

}), dispatch => ({
  listen: dispatch(listenToLinkingEvents()),
}))(App)