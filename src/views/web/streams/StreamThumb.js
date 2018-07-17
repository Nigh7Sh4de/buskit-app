import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Image,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import { streams as Style } from 'src/views/web/style'


export default class StreamThumb extends Component {
  constructor(props) {
    super(props)
   
    this.gotoStream = this._gotoStream.bind(this)
  }
  
  _gotoStream() {
    this.props.redirect(`/streams/${this.props.stream.id}`)
  }

  render() {
    const { stream } = this.props
    const { title, user_id } = stream
    return (
      <View style={Style.thumb}>
        <TouchableHighlight
          onPress={this.gotoStream}
        >
          <View style={Style.thumbInner}>
            <Image 
              style={Style.thumbImage}
              source={{ uri: 'https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg' }}
            />
            <View>
              <Text style={{ fontWeight: '400', fontSize: 16 }}>{title}</Text>
              <Text style={{ fontWeight: '200', fontSize: 16 }}>{user_id}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}