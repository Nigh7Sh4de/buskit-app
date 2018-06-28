import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

class StreamView extends Component {
  render() {
    const { stream } = this.props

    return (
      <View>
        <Text>Start Stream</Text>
        <View>
          <Text>Detected stream:</Text>
        </View>
        <View>
          <Text>{JSON.stringify(stream) || "Nothing to see here"}</Text>
        </View>
      </View>
    )
  }
}

export default connect(
  ({ streams, user }) => {
    const user_id = user.user.id
    const stream = streams.data.find(i => i.user_id === user_id)

    return {
      stream,
    }
  },
  dispatch => ({

  })
)(StreamView)