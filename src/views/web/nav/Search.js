import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'

import { nav as Style } from 'src/views/web/style'
import { updateFilter } from 'src/actions/NavActions'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  componentDidUpdate() {
    this.props.updateFilter({
      text: this.state.text,
    })
  }

  render() {
    return (
      <View style={Style.search}>
        <TextInput 
          style={Style.searchBox}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Search"
        />
      </View>
    )
  }
}

export default connect(({ }) => ({

}), dispatch => ({
  updateFilter: filter => dispatch(updateFilter(filter)),
}))(Search)