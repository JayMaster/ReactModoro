import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// import { SplashContainer } from '~/containers' // why does this not work
//import Sample from '../../app/components/Sample/Sample.js'
// import SampleContainer from '../containers/Sample/SampleContainer.js'
// import SampleContainer from '~/containers'
import SplashContainer from '../containers/Splash/SplashContainer.js'
import { Me } from '~/components';
import { Home } from '~/components';
import { Leaderboard } from '~/components'

import { NavigationActions } from 'react-navigation';

/*
const StackConfig = {
	cardStack: {
		gesturesEnabled: false
	}
}
*/
/*
const resetNav = NavigationActions.reset({
	index: 0,
	actions: [Navigations.navigate({ routeName: 'Home'})]
});
*/

const HomeTabs = TabNavigator({
	Home: {
		screen: Home,
		
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-home-outline" type="ionicon" size={35} color={tintColor} />,
			headerLeft: null // disable back button
		}
	},
	Leaderboard: {
		screen: Leaderboard,
		navigationOptions: {
			tabBarLabel: 'Leaderboard',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-trophy-outline" type="ionicon" size={35} color={tintColor} />,
			headerLeft: null // disable back button
		}
	}
})

const MainNavigator = StackNavigator({
	Splash: {
		screen: SplashContainer,
	},
	Home: {
		screen: HomeTabs,
	}}/*, {
		initialRouteName: this.props.isAuthed ? 'Home' : 'Splash',
		// headerMode: 'none'
	}*/
);

const mapStateToProps = authentication => ({
  isAuthenticating: authentication.isAuthenticating,
  isAuthed: authentication.isAuthed
});

// export default connect(mapStateToProps)(MainNavigator);


export default MainNavigator;
