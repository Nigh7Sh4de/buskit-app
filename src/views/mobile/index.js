import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
} from 'react-router-dom'

import HomeView from 'src/views/mobile/HomeView'
import LoginView from 'src/views/mobile/LoginView'


export default class extends Component {
  render() {
    return (
    <Router>
      <View>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/redirect" component={LoginView} />
      </View>
    </Router>
    )
  }
}

//DP: NOT GOOD. TODO: RECREATE ENTIRE FILE