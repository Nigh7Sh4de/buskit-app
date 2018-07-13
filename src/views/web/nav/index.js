import React, { Component } from 'react'
import {
  View,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import { logout } from 'src/actions/UserActions'
import { purgeStore } from 'src/lib/store'
import Search from 'src/views/web/nav/Search'

class NavbarView extends Component {
  constructor(props) {
    super(props)
    this.gotoStreams = this._gotoStreams.bind(this)
    this.gotoStart = this._gotoStart.bind(this)
    this.gotoLogin = this._gotoLogin.bind(this)
  }

  _gotoStreams() {
    this.props.history.push('/streams')
  }
  
  _gotoStart() {
    this.props.history.push('/start')
  }

  _gotoLogin() {
    this.props.history.push('/login')
  }

  render() {

    const { loggedIn } = this.props

    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <Button
          title="Home"
          onPress={this.gotoStreams}
          />
        <Search />
        <Button
          title="Start"
          onPress={this.gotoStart}
          />
        {
          loggedIn ? 
            <Button
              title="Logout"
              onPress={this.props.logout}
            />
          :
            <Button
              title="Login"
              onPress={this.gotoLogin}
            />
        }
      </View>
    )
  }
}

export default connect(
  ({ user }) => ({
    loggedIn: !!user.user,
  }),
  dispatch => ({
    logout: () => {
      dispatch(logout())
      purgeStore()
    }
  })
)(NavbarView)