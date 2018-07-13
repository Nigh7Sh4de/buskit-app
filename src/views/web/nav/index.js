import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Image,
} from 'react-native'
import { nav as Style } from 'src/views/web/style'

import Search from 'src/views/web/nav/Search'
import ProfileThumb from 'src/views/web/nav/ProfileThumb'


export default class NavbarView extends Component {
  constructor(props) {
    super(props)
    this.gotoStreams = this._gotoStreams.bind(this)
  }

  _gotoStreams() {
    this.props.history.push('/streams')
  }

  render() {
    return (
      <View style={Style.container}>
        <TouchableHighlight
          onPress={this.gotoStreams}
        >
          <Image
            style={{ height: 36, width: 126 }}
            source={require('src/res/images/buskit-logo.png')}
          />
        </TouchableHighlight>
        <Search />
        <ProfileThumb redirect={this.props.history.push} />
      </View>
    )
  }
}