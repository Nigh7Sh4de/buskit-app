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
    this.gotoProfile = this._gotoProfile.bind(this)
    this.gotoStart = this._gotoStart.bind(this)
  }

  _gotoStreams() {
    this.props.history.push('/streams')
  }
  
  _gotoProfile() {
    this.props.history.push('/profile')
  }
  
  _gotoStart() {
    this.props.history.push('/start')
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
        <Search />
        <Button
          title="Start"
          onPress={this.gotoStart}
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