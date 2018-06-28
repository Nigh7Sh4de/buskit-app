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
			</View>
		)
	}
}

export default connect(
	({ }) => ({

	}),
	(dispatch, ownProps) => ({
		logout: () => {
			dispatch(logout())
			ownProps.history.push('/')
		},
	})
)(HomeView)