import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Button,
} from 'react-native'

import { fetchStreams } from 'src/actions/StreamsActions.js'

class Streams extends Component {
  componentWillMount() {
    this.props.fetchStreams()
  }

  render() {
    return (
      <View>
        <Text>Oh hello there streams</Text>
        {
          this.props.streams.map(s => (
            <Button 
              key={s.id}
              title={s.title}
				    	onPress={() => this.props.history.push(`/streams/${s.id}`)}
              />
          ))
        }
        {
          !this.props.streams.length && <Text>No streams :/</Text>
        }
      </View>
    )
  }
}

export default connect(
  ({ streams }) => ({
    streams: streams.data
  }),
  dispatch => ({
    fetchStreams: () => dispatch(fetchStreams())
  })
)(Streams)