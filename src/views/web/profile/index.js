import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

class ProfileView extends Component {
  render() {
    const { user } = this.props

    return (
      <View>
        <Text>{JSON.stringify(user)}</Text>
      </View>
    )
  }
}

export default connect(
  ({ user }) => ({
    user: user.user,
  }),
  dispatch => ({

  })
)(ProfileView)