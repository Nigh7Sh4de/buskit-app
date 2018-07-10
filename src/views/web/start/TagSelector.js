import React, { PureComponent } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native'

export default class TagSelector extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      tags: [],
    }
    this.addTagToState = this._addTagToState.bind(this)
  }

  _addTagToState() {
    const tags = [...this.state.tags, this.state.text]
    this.setState({
      text: '',
      tags,
    })
    this.props.onTagsChanged && this.props.onTagsChanged(tags)
  }

  render() {
    const tags = this.state.tags.map((tag, i) => <Text key={i}>{tag}</Text>)

    return (
      <View>
        <View>
          <Text>Add tags</Text>
          <TextInput 
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            onPress={this.addTagToState}
            disabled={!this.state.text}
            title="Add"
          />
        </View>
        <View>
          {tags}
        </View>
      </View>
    )
  }
}