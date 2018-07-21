import React, { PureComponent } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import { connect } from 'react-redux'

import { profile as Style } from 'src/views/web/style'
import StreamThumb from 'src/views/web/streams/StreamThumb'
import UserThumb from 'src/views/web/streams/UserThumb'
import { followUser } from 'src/actions/UserActions'

const spam = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class ProfileView extends PureComponent {
  constructor(props) {
    super(props)

    this.followArtist = this._followArtist.bind(this)
    this.gotoStream = this._gotoStream.bind(this)
  }

  _followArtist() {
    this.props.follow(this.props.user.id)
  }

  _gotoStream() {
    this.props.history.push(`/streams/${this.props.stream.id}`)
  }

  render() {
    const { user, streams } = this.props

    let clips = <Text>No clips</Text>
    if (streams.length) clips = (
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
    )

    const liveNowButton = (
      <TouchableOpacity
        style={Style.live}
        onPress={this.gotoStream}
      >
        <Text style={Style.liveText}>🎵 Live Now</Text>
      </TouchableOpacity>
    )

    return (
      <ScrollView style={Style.container}>
        <View style={Style.info}>
          <Image 
            style={[Style.thumbImage, { borderRadius: 300 }]}
            source={{ uri: 'https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg' }}
          />
          <View style={Style.infoInner}>
            <View style={Style.tagList}>
              <Text style={Style.tag}>Metal</Text>
              <Text style={Style.tag}>Progressive</Text>
              <Text style={Style.tag}>Djent</Text>
            </View>
            <Text style={Style.title}>{user.display_name}</Text>
            <Text style={Style.description}>{user.description || spam}</Text>
            <TouchableOpacity
              onPress={this.followArtist}
              style={Style.button}
            >
              <Text style={Style.buttonText}>+ Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          this.props.stream && liveNowButton
        }
        <View style={{flex: 1}}>
          <Text style={Style.title}>Clips</Text>
          {clips}
        </View>
      </ScrollView>
    )
  }
}

export default connect(
  ({ users, streams }, props) => ({
      user: users.data.find(i => i.id === props.match.params.id),
      stream: streams.data.find(i => i.user_id === props.match.params.id),
      streams: streams.data,
  }),
  dispatch => ({
    follow: user => dispatch(followUser(user)),
  })
)(ProfileView)