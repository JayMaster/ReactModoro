import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash, FlashNotification } from '~/components' // why directly from Components? -- when do I need a container?
import { firebaseAuth } from '~/config/constants'
import { onAuthChange } from '~/redux/authentication'
import { hideFlashNotification } from '~/redux/flashNotification'

class AppContainer extends Component {
	static PropTypes = { // does this work?
		isAuthenticating: PropTypes.bool.isRequired,
		flashNotificationIsPermanent: PropTypes.bool.isRequired,
		flashNotificationLocation: PropTypes.string.isRequired,
		flashNotificationText: PropTypes.string.isRequired,
		showFlashNotification: PropTypes.bool.isRequired
	}
	
	componentDidMount() {
		firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChange(user)))
	}

	handleHideNotification = () => {
		this.props.dispatch(hideFlashNotification())
	}

	render() {
		return (
			<View style={{flex:1}}>
			{this.props.isAuthenticating === true
				? <PreSplash />
				: <ReactModoroNavigator />
			}
			{this.props.showFlashNotification === true
				? <FlashNotification
					permanent= {this.props.flashNotificationIsPermanent}
					location= {this.props.flashNotificationLocation}
					text= {this.props.flashNotificationText}
					onHideNotification={this.handleHideNotification}
				/>
				: null
			} 
			</View>
		)
	}
}

function mapStateToProps ({authentication, flashNotification}) {
	return {
		// what we return from mapStateToProps is an object
		// whatever properties that we add here (in the return), will go in as props to our component
		isAuthenticating: authentication.isAuthenticating,
		flashNotificationIsPermanent: flashNotification.permanent,
		flashNotificationLocation: flashNotification.location,
		flashNotificationText: flashNotification.text,
		showFlashNotification: flashNotification.showFlashNotification
	}
}

export default connect(mapStateToProps)(AppContainer)