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
import { fetchVideos } from 'src/actions/VideosActions.js'

import StreamThumb from 'src/views/web/streams/StreamThumb.js'
import UserThumb from 'src/views/web/streams/UserThumb.js'

class Streams extends Component {
  componentWillMount() {
    this.props.fetchUsers()
    this.props.fetchStreams()
    this.props.fetchVideos()
  }

  render() {
    const { streams, videos, users } = this.props
    let artists, liveStreams, pastVideos

    if (users.length) artists = (
      <View>
        <Text style={Style.title}>Artists</Text>
        <ScrollView horizontal style={Style.section}>
          {
            users.map(u => (
              <UserThumb 
                key={u._id}
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
    
    if (videos.length) pastVideos = (
      <View>
        <Text style={Style.title}>Videos</Text>
        <View style={[Style.section, { flexWrap: 'wrap' }]}>
          {
            videos.map(s => //<Text>{JSON.stringify(s)}</Text>
            (
              <StreamThumb 
                key={s.id}
                stream={s}
                redirect={this.props.history.push}
              />
            )
          )
          }
        </View>
      </View>
    )

    const empty = !artists && !liveStreams && !videos

    return (
      <ScrollView style={Style.container}>
        {artists}
        {liveStreams}
        {pastVideos}
        {
          empty && <Text style={Style.empty}>🤔 No search results</Text>
        }
      </ScrollView>
    )
  }
}

export default connect(
  ({ streams, users, videos }) => ({
    streams: streams.filtered_data || [],
    users: users.filtered_data || [],
    videos: videos.filtered_data || [],
  }),
  dispatch => ({
    fetchStreams: () => dispatch(fetchStreams()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchVideos: () => dispatch(fetchVideos()),
  })
)(Streams)