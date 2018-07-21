import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import { nav as Style } from 'src/views/web/style'
import { purgeStore } from 'src/lib/store'
import { logout } from 'src/actions/UserActions'


class ProfileThumb extends Component {
  constructor(props) {
    super(props)
   
    this.gotoStart = this._gotoStart.bind(this)
    this.gotoLogin = this._gotoLogin.bind(this)
  }
  
  _gotoStart() {
    this.props.redirect('/start')
  }

  _gotoLogin() {
    this.props.redirect('/login')
  }

  render() {
    const { 
      loggedIn, 
      pending,
    } = this.props
    
    let view = (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={this.gotoStart}
        >
          <Image 
            style={{ width: 24, height: 24 }}
            source={require('src/res/images/red_circle.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.button}
          onPress={this.props.logout}
        >
          <Text style={Style.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    )
    
    if (!loggedIn) view = (
      <TouchableOpacity
        style={Style.button}
        onPress={this.gotoLogin}
      >
        <Text style={Style.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    )

    if (pending) view = (
      <View>
        <Image
          source={require('src/res/images/loading_spinner.svg')}
          style={Style.pending}
        />
      </View>
    )

    return view
  }
}



export default connect(
  ({ users }) => ({
    loggedIn: !!users.user,
    pending: users.pending,
  }),
  dispatch => ({
    logout: () => {
      dispatch(logout())
      purgeStore()
    }
  })
)(ProfileThumb)