import React, { Component } from 'react';

import {
	View,
	Text,
	Button,
} from 'react-native'

export default class HomeView extends Component {
	render() {
		return (
			<View>
				<Text>Home</Text>
        <Button 
          title="Login"
					/>
			</View>
		)
	}
}