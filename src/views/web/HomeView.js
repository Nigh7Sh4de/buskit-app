import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	Button,
} from 'react-native'

import { logout } from 'src/actions/UserActions'

class HomeView extends Component {
	_streams() {
		
	}

	render() {
		return (
			<View>
				<Text>Home</Text>
				<Button
					title="Streams"
					onPress={() => this.props.history.push('/streams')}
					/>
				<Button
					title="Logout"
					onPress={this.props.logout}
					/>
			</View>
		)
	}
}

export default connect(
	({ }) => ({

	}),
	dispatch => ({
		logout: () => dispatch(logout()),
	})
)(HomeView)