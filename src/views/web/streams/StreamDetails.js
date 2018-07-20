import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'

import { stream as Style } from 'src/views/web/style'

class StreamDetails extends Component {
  constructor(props) {
    super(props)

    this.followArtist = this._followArtist.bind(this)
    this.tipArtist = this._tipArtist.bind(this)
  }

  componentDidMount() {
    if (this.props.stream && this.props.user)
      return new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: "ninja"
      })
  }

  _followArtist() {
    console.log('Follow the artist!')
  }

  _tipArtist() {
    console.log('Tip the artist!')
  }

  render() {
    const { stream, user } = this.props
    if (!stream || !user) return (
      <View style={Style.container}>
        <Text style={Style.title}>Oops doesn't look like there's anything here 😦</Text>
      </View>
    )

    return (
      <View style={Style.container}>
        <View style={Style.info}>
          <Text style={Style.name}>
            Now playing
            <Text style={Style.nameText}> {user.display_name}</Text>
          </Text>
          <Text style={Style.title}>{stream.title}</Text>
          <View style={Style.tagList}>
              <Text style={Style.tag}>Metal</Text>
              <Text style={Style.tag}>Progressive</Text>
              <Text style={Style.tag}>Djent</Text>
            </View>
        </View>
        <View 
          style={Style.stream} 
          id="twitch-embed" 
        />
        <View style={Style.actions}>
          <TouchableHighlight
            onPress={this.followArtist}
            style={Style.buttonFollow}
          >
            <Text style={Style.buttonText}>+ Follow</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.tipArtist}
            style={Style.buttonTip}
          >
            <Text style={Style.buttonText}>$ Tip</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default connect(
  ({ streams, users }, { match }) => {
    const stream = streams.data.find(i => i.id === match.params.id)
    const user = users.data.find(i => i.id === stream.user_id)
    return {
      stream,
      user,
    }
  }
)(StreamDetails)