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
        <Text>Say hello to {user.display_name}!</Text>
      </View>
    )
  }
}

export default connect(
  ({ user }, ownProps) => ({
      user: user.data.find(i => i.id === ownProps.match.params.id),
  }),
  dispatch => ({

  })
)(ProfileView)