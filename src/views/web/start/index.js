import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native'
import { connect } from 'react-redux'

import TagSelector from 'src/views/web/start/TagSelector'

class StreamView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
    }
    this.start = this._start.bind(this)
  }

  _start() {
    const stream = {
      tags: this.state.tags,
    }
    console.log('Go!', stream)
  }

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
        <TagSelector 
          onTagsChanged={tags => this.setState({ tags })} 
        />
        <Button 
          title="Go!"
          onPress={this.start}
        />
      </View>
    )
  }
}

export default connect(
  ({ streams, users }) => {
    const user_id = users.user.id
    const stream = streams.data.find(i => i.user_id === user_id)

    return {
      stream,
    }
  },
  dispatch => ({

  })
)(StreamView)