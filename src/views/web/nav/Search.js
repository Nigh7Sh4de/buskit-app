import React, { PureComponent } from 'react'
import {
  View,
  TextInput,
} from 'react-native'

import { nav as Style } from 'src/views/web/style'

export default class Search extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  componentDidUpdate() {
    this.props.updateSearch(this.state.text)
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