import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Image,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import { streams as Style } from 'src/views/web/style'


export default class UserThumb extends Component {
  constructor(props) {
    super(props)
   
    this.gotoStream = this._gotoLogin.bind(this)
  }
  
  _gotoLogin() {
    this.props.redirect(`/users/${this.props.url}`)
  }

  render() {
    const { user } = this.props
    const { display_name } = user
    return (
      <View style={Style.thumb}>
        <View style={Style.thumbInner}>
          <Image 
            style={[Style.thumbImage, { borderRadius: 300 }]}
            source={{ uri: 'https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg' }}
          />
          <Text style={Style.thumbText}>{display_name}</Text>
        </View>
      </View>
    )
  }
}