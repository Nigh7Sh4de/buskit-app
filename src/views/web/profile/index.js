import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import { connect } from 'react-redux'

import { followUser } from 'src/actions/UserActions'

class ProfileView extends PureComponent {
  constructor(props) {
    super(props)

    this.followArtist = this._followArtist.bind(this)
  }

  _followArtist() {
    this.props.follow(this.props.user.id)
  }

  render() {
    const { user } = this.props

    return (
      <View>
        <Text>Say hello to {user.display_name}!</Text>
        <Button
          title="Follow"
          onPress={this.followArtist}
          />
      </View>
    )
  }
}

export default connect(
  ({ user }, ownProps) => ({
      user: user.data.find(i => i.id === ownProps.match.params.id),
  }),
  dispatch => ({
    follow: user => dispatch(followUser(user)),
  })
)(ProfileView)