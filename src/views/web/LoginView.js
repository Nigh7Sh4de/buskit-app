import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'

import { login as Style } from 'src/views/web/style'
import { 
  login,
  onAuthResponse,
} from 'src/actions/UserActions'

class LoginView extends Component {
  componentWillMount() {
    if (this.props.match.path === '/redirect') {
      this.props.onAuthResponse(new URLSearchParams(this.props.location.search))
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.welcome}>
          <Text style={Style.welcomeText}>Welcome to </Text>
          <Image
            source={require('src/res/images/buskit-logo-colour.png')}
            style={{ height: 72, width: 256 }}
          />
        </View>
        <TouchableOpacity
          onPress={this.props.login}
        >
          <View style={Style.button}>
            <Image
              source={require('src/res/images/Glitch_White_RGB.png')}
              style={{ height: 24, width: 24 }}
            />
            <Text style={Style.buttonText}>Login with Twitch</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(({}) => ({
}), dispatch => ({
  login: () => dispatch(login()),
  onAuthResponse: code => dispatch(onAuthResponse(code)),
}))(LoginView)