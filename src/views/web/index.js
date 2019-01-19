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

import { app as Style } from 'src/views/web/style'
import ProfileView from 'src/views/web/profile'
import StartView from 'src/views/web/start'
import StreamsView from 'src/views/web/streams'
import StreamDetails from 'src/views/web/streams/StreamDetails'
import NavbarView from 'src/views/web/nav'
import SecuredRoute from 'src/views/web/nav/SecuredRoute'
import LoginView from 'src/views/web/LoginView'


class Web extends Component {
  render() {
    return (
      <View>
        <Router>
          <View style={Style.container}>
            <Route path="/" component={NavbarView} />
            <Switch>
              <Route exact path="/login" component={LoginView} />
              <Route exact path="/redirect" component={LoginView} />
              <SecuredRoute exact path="/start" component={StartView} />
              
              <Route exact path="/" component={StreamsView} />
              <Route exact path="/profile/:id" component={ProfileView} />
              <Route exact path="/streams" component={StreamsView} />
              <Route exact path="/streams/:id" component={StreamDetails} />
            </Switch>
          </View>
        </Router>
      </View>
    )
  }
}

export default connect(
  ({ users }) => ({
    users
  }),
  dispatch => ({

  })
)(Web)