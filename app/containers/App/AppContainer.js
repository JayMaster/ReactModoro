import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components' // why directly from Components? -- when do I need a container?

const isAuthenticating = false;

class AppContainer extends Component {
	static propTypes = {
		isAuthenticating: PropTypes.bool,
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

/*function mapStateToProps ({authentication}) {
	return {
		isAuthenticating: authentication.isAuthenticating
	}
	// what we return from mapStateToProps is an object
	// whatever properties that we add here (in the return), will go in as props to our component
} */

/*export default connect(
	mapStateToProps
)(AppContainer)
*/

export default AppContainer;