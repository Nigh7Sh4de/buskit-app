import React, { PureComponent } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
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
  }

  _followArtist() {
    this.props.follow(this.props.user.id)
  }

  render() {
    const { user, streams } = this.props

    let clips = <Text>Tag 1No clips</Text>
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
            <TouchableHighlight
              onPress={this.followArtist}
              style={Style.button}
            >
              <Text style={Style.buttonText}>+ Follow</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={Style.title}>Clips</Text>
          {clips}
        </View>
      </ScrollView>
    )
  }
}

export default connect(
  ({ users, streams }, ownProps) => ({
      user: users.data.find(i => i.id === ownProps.match.params.id),
      streams: streams.data,
  }),
  dispatch => ({
    follow: user => dispatch(followUser(user)),
  })
)(ProfileView)