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
    let artists, liveStreams, clips

    if (users.length) artists = (
      <View>
        <Text style={Style.title}>Artists</Text>
        <ScrollView horizontal style={Style.section}>
          {
            users.map(u => (
              <UserThumb 
                key={u.id}
                user={u}
                redirect={this.props.history.push}
              />
            ))
          }
        </ScrollView>
      </View>
    )

    if (streams.length) liveStreams = (
      <View>
        <Text style={Style.title}>Live Streams</Text>
        <ScrollView horizontal style={Style.section}>
          {
            streams.map(s => (
              <StreamThumb 
                key={s.id}
                stream={s}
                redirect={this.props.history.push}
              />
            ))
          }
        </ScrollView>
      </View>
    )
    
    if (streams.length) clips = (
      <View>
        <Text style={Style.title}>Clips</Text>
        <View style={[Style.section, { flexWrap: 'wrap' }]}>
          {
            streams.map(s => (
              <StreamThumb 
                key={s.id}
                stream={s}
                redirect={this.props.history.push}
              />
            ))
          }
        </View>
      </View>
    )

    const empty = !artists && !liveStreams && !clips

    return (
      <ScrollView style={Style.container}>
        {artists}
        {liveStreams}
        {clips}
        {
          empty && <Text style={Style.empty}>🤔 No search results</Text>
        }
      </ScrollView>
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