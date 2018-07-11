import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Button,
} from 'react-native'

import { fetchStreams } from 'src/actions/StreamsActions.js'
import { fetchUsers } from 'src/actions/UserActions.js'

class Streams extends Component {
  componentWillMount() {
    this.props.fetchStreams()
    this.props.fetchUsers()
  }

  render() {
    const { streams, users } = this.props
    return (
      <View>
        <Text>Oh hello there</Text>
        {
          users.map(u => (
            <Button 
              key={u.id}
              title={u.display_name}
              onPress={()=>{}}
              />
          ))
        }
        <Text>Streams</Text>
        {
          streams.map(s => (
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
  ({ streams, user }) => ({
    streams: streams.filtered_data || [],
    users: user.filtered_data || [],
  }),
  dispatch => ({
    fetchStreams: () => dispatch(fetchStreams()),
    fetchUsers: () => dispatch(fetchUsers()),
  })
)(Streams)