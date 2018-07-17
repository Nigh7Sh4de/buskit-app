import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  ScrollView,
} from 'react-native'

import { streams as Style} from 'src/views/web/style'
import { fetchStreams } from 'src/actions/StreamsActions.js'
import { fetchUsers } from 'src/actions/UserActions.js'

import StreamThumb from 'src/views/web/streams/StreamThumb.js'
import UserThumb from 'src/views/web/streams/UserThumb.js'

class Streams extends Component {
  componentWillMount() {
    this.props.fetchStreams()
    this.props.fetchUsers()
  }

  render() {
    const { streams, users } = this.props
    return (
      <View style={Style.container}>
        <ScrollView>
          <Text style={Style.title}>Artists</Text>
          <View style={Style.section}>
            {
              users.map(u => (
                <UserThumb 
                  key={u.id}
                  user={u}
                  />
              ))
            }
          </View>
          <Text style={Style.title}>Streams</Text>
          <View style={[Style.section, { flexWrap: 'wrap' }]}>
            {
              streams.map(s => (
                <StreamThumb 
                  key={s.id}
                  stream={s}
                />
              ))
            }
          </View>
          {
            !this.props.streams.length && <Text>No streams :/</Text>
          }
        </ScrollView>
      </View>
    )
  }
}

export default connect(
  ({ streams, user }) => ({
    streams: streams.filtered_data || [],
    users: user.filtered_data || [],
  }),
  dispatch => ({
    fetchStreams: () => dispatch(fetchStreams()),
    fetchUsers: () => dispatch(fetchUsers()),
  })
)(Streams)