import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Button,
  Linking,
} from 'react-native'

import { 
  login,
} from 'src/actions/UserActions'

class LoginView extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="Login with Twitch"
          onPress={this.props.login}
          />
      </View>
    )
  }
}

export default connect(({}) => ({
}), dispatch => ({
  login: () => dispatch(login())
}))(LoginView)