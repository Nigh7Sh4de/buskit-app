import React, { Component } from 'react';

import {
	View,
	Text,
	Button,
} from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class HomeView extends Component {
	render() {
		return (
			<View>
				<Text>Home</Text>
        <Button 
          title="Login"
					onPress={ () => Actions.login() }
					/>
			</View>
		)
	}
}