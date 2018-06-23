import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
} from 'react-native'
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import HomeView from 'src/views/web/HomeView'
import StreamsView from 'src/views/web/streams'
import StreamDetails from 'src/views/web/streams/StreamDetails'
import LoginView from 'src/views/web/LoginView'


class Web extends Component {
  render() {
    if (!this.props.user.user)
      return <Router>
        <View>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/redirect" component={LoginView} />
        </View>
      </Router>

    return (
      <Router>
        <View>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/streams" component={StreamsView} />
          <Route exact path="/streams/:id" component={StreamDetails} />
        </View>
      </Router>
    )
  }
}

export default connect(
  ({ user }) => ({
    user
  }),
  dispatch => ({

  })
)(Web)