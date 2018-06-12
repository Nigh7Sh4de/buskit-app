import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	Button,
} from 'react-native'

import { logout } from 'src/actions/UserActions'

class HomeView extends Component {
	render() {
		return (
			<View>
				<Text>Home</Text>
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