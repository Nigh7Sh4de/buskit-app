import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';

var url = 'https://id.twitch.tv/oauth2/authorize?client_id=k6zpqqplgc8nyknrnkag6qhfpesc9p&redirect_uri=buskit://buskit.tv/redirect&response_type=token+id_token&scope=openid'

export default class App extends Component {
  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
  }

  handleOpenURL(event) {
    console.log('Got intent-ed biatch', event);
  }

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
        <Text>
          Yo
        </Text>
        <Button
          title="Go!"
          onPress={this.login.bind(this)}
          />
      </View>
    );
  }
}
