import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import { connect } from 'react-redux'

import { nav as Style } from 'src/views/web/style'
import { updateFilter } from 'src/actions/NavActions'

import Search from 'src/views/web/nav/Search'
import ProfileThumb from 'src/views/web/nav/ProfileThumb'


class NavbarView extends Component {
  constructor(props) {
    super(props)
    this.gotoStreams = this._gotoStreams.bind(this)
    this.updateSearch = this._updateSearch.bind(this)
  }

  _gotoStreams() {
    this.props.history.push('/streams')
  }

  _updateSearch(text) {
    this.props.updateFilter({ text })
    if (this.props.location.pathname !== '/')
      this.props.history.push('/')
  }

  render() {
    return (
      <View style={Style.container}>
        <TouchableOpacity
          onPress={this.gotoStreams}
        >
          <Image
            style={{ height: 36, width: 126 }}
            source={require('src/res/images/buskit-logo.png')}
          />
        </TouchableOpacity>
        <Search updateSearch={this.updateSearch} />
        <ProfileThumb redirect={this.props.history.push} />
      </View>
    )
  }
}

export default connect(({ }) => ({

}), dispatch => ({
  updateFilter: filter => dispatch(updateFilter(filter)),
}))(NavbarView)