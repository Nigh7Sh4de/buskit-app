import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Button,
} from 'react-native'

import { 
  login,
  gotCode,
} from 'src/actions/UserActions'

class LoginView extends Component {
  componentWillMount() {
    if (this.props.match.path.indexOf('redirect') > 0)
      this.props.onRedirect('TODO: parse code from search')
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
  onRedirect: code => dispatch(gotCode(code)),
}))(LoginView)