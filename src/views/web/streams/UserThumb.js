import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
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
    this.props.redirect(`/profile/${this.props.user._id}`)
  }

  render() {
    const { user } = this.props
    const { display_name, profile_image_url } = user.profile
    return (
      <View style={Style.thumb}>
        <TouchableOpacity 
          onPress={this.gotoStream}
        >
          <View style={[Style.thumbInner, { alignItems: 'center' }]}>
            <Image 
              style={[Style.thumbImage, { borderRadius: 1000 }]}
              source={{ uri: profile_image_url }}
            />
            <Text style={Style.thumbText}>{display_name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}