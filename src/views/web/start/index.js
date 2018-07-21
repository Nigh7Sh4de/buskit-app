import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import { connect } from 'react-redux'

import { start as Style } from 'src/views/web/style'

import TagSelector from 'src/views/web/start/TagSelector'

class StreamView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
    }
    this.start = this._start.bind(this)
    this.addTag = this._addTag.bind(this)
    this.editTag = this._editTag.bind(this)
    this.renderTags = this._renderTags.bind(this)
  }

  _addTag(tag) {
    if (this.state.tags.indexOf(tag) >= 0) return false
    const tags = [ ...this.state.tags, tag ]
    this.setState({
      tags,
    })
    return true
  }

  _editTag() {
    const tags = [ ...this.state.tags ]
    const previous = tags.pop()
    this.setState({
      tags,
    })
    return previous
  }

  _renderTags() {
    return this.state.tags.map(tag => (
      <Text key={tag} style={Style.tag}>{tag}</Text> 
    ))
  }

  _start() {
    const stream = {
      tags: this.state.tags,
    }
    console.log('Go!', stream)
  }

  render() {
    const { stream } = this.props
    const tags = this.renderTags()

    return (
      <View style={Style.container}>
        <Text style={Style.title}>Start Streaming</Text>
        <View style={Style.section}>
          <Text style={Style.sectionTitle}>✔️ Stream detected</Text>
          <Image 
            style={Style.thumbImage}
            source={{ uri: 'https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg' }}
          />
        </View>
        <View style={Style.section}>
        <Text style={Style.sectionTitle}>✔️ Stream configured</Text>
          <View style={Style.table}>
            <View style={Style.row}>
              <View style={Style.key}>
                <Text style={Style.keyText}>Title</Text>
              </View>
              <View style={Style.value}>
                <Text style={Style.valueText}>My super awesome stream</Text>
              </View>
            </View>
            <View style={Style.row}>
              <View style={Style.key}>
                <Text style={Style.keyText}>Tags</Text>
              </View>
              <View style={Style.value}>
                {tags}
                <TagSelector 
                  onSubmit={this.addTag}
                  onBack={this.editTag}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.start}
          style={Style.button}
        >
          <Text style={Style.buttonText}>Go Live!</Text>
        </TouchableOpacity>
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