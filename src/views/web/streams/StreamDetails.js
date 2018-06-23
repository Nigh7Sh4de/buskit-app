import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

class StreamDetails extends Component {
  componentDidMount() {
    new Twitch.Embed("twitch-embed", {
      width: 854,
      height: 480,
      channel: "ninja"
    })
  }

  render() {
    const { stream } = this.props
    return (
      <View>
        <Text>{stream.title}</Text>
        <View id="twitch-embed"></View>
      </View>
    )
  }
}

export default connect(
  ({ streams, users }, { match }) => {
    const stream = streams.data.find(i => i.id === match.params.id)
    // const user = users.data.find(i => i.id === stream.user_id)
    return {
      stream,
    //   user,
    }
  }
)(StreamDetails)