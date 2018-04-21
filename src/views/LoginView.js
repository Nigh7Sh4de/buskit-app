import React, { Component } from 'react';

import {
  View,
  Text,
  Button,
  Linking,
} from 'react-native'

var url = 'https://id.twitch.tv/oauth2/authorize?client_id=k6zpqqplgc8nyknrnkag6qhfpesc9p&redirect_uri=buskit://buskit.tv/redirect&response_type=token+id_token&scope=openid'

export default class LoginView extends Component {
  login() {
    console.log('lets do this')
    Linking.openURL(url)
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="Login with Twitch"
          onPress={this.login.bind(this)}
          />
      </View>
    )
  }
}