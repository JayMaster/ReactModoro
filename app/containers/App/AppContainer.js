import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components' // why directly from Components? -- when do I need a container?
import { firebaseAuth } from '~/config/constants'
import { onAuthChange } from '~/redux/authentication'

class AppContainer extends Component {
	static PropTypes = { // does this work?
		isAuthenticating: PropTypes.bool.isRequired,
	}
	componentDidMount() {
		firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChange(user)))
	}

	render() {
		return(
			<View style={{flex:1}}>
			{this.props.isAuthenticating === true
				? <PreSplash />
				: <ReactModoroNavigator />
			}
			</View>
		)
	}
}

function mapStateToProps ({authentication}) {
	return {
		// what we return from mapStateToProps is an object
		// whatever properties that we add here (in the return), will go in as props to our component
		isAuthenticating: authentication.isAuthenticating
	}
} 

export default connect(mapStateToProps)(AppContainer)