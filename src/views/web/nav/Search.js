import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'

import { updateFilter } from 'src/actions/StreamsActions'

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
      <View>
        <TextInput 
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    )
  }
}

export default connect(({ }) => ({

}), dispatch => ({
  updateFilter: filter => dispatch(updateFilter(filter)),
}))(Search)