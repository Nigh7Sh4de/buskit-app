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
import ProfileView from 'src/views/web/profile'
import StreamsView from 'src/views/web/streams'
import StreamDetails from 'src/views/web/streams/StreamDetails'
import NavbarView from 'src/views/web/nav'
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
          <Route path="/" component={NavbarView} />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/profile" component={ProfileView} />
            <Route exact path="/streams" component={StreamsView} />
            <Route exact path="/streams/:id" component={StreamDetails} />
          </Switch>
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