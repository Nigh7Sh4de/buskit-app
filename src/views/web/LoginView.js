import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Button,
} from 'react-native'

import { 
  login,
  onAuthResponse,
} from 'src/actions/UserActions'

class LoginView extends Component {
  componentWillMount() {
    if (this.props.match.path === '/redirect')
      this.props.onAuthResponse(new URLSearchParams(this.props.location.search))
  }

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
  login: () => dispatch(login()),
  onAuthResponse: code => dispatch(onAuthResponse(code)),
}))(LoginView)