import React, { Component } from 'react'
import {
  View,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import { logout } from 'src/actions/UserActions';
import { purgeStore } from 'src/lib/store'

class NavbarView extends Component {
  constructor(props) {
    super(props)
    this.gotoStreams = this._gotoStreams.bind(this)
    this.gotoProfile = this._gotoProfile.bind(this)
  }

  _gotoStreams() {
    this.props.history.push('/streams')
  }
  
  _gotoProfile() {
    this.props.history.push('/profile')
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <Button
          title="Streams"
          onPress={this.gotoStreams}
          />
        <Button
          title="Profile"
          onPress={this.gotoProfile}
          />
        <Button
          title="Logout"
          onPress={this.props.logout}
          />
      </View>
    )
  }
}

export default connect(
  ({ }) => ({

  }),
  dispatch => ({
    logout: () => {
      dispatch(logout())
      purgeStore()
    }
  })
)(NavbarView)