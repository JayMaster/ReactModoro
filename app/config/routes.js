import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// import { SplashContainer } from '~/containers' // why does this not work
//import Sample from '../../app/components/Sample/Sample.js'
// import SampleContainer from '../containers/Sample/SampleContainer.js'
// import SampleContainer from '~/containers'
import SplashContainer from '../containers/Splash/SplashContainer.js'
import { Me } from '~/components';
import Home from '../containers/Home/HomeContainer.js';
import { Leaderboard } from '~/components'
import Settings from '../containers/Settings/SettingsContainer.js'

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
			header: null
			// headerLeft: null // this would be to disable the back button
		}
	},
	Leaderboard: {
		screen: Leaderboard,
		navigationOptions: {
			tabBarLabel: 'Leaderboard',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-trophy-outline" type="ionicon" size={35} color={tintColor} />,
			header: null
			// headerLeft: null // this would be to disable the back button
		}
	}
})

/* I think I'll have a problem as soon as I add another Route to HomeNav,
because I set the transition mode to modal, but I think every route
that is added to HomeNav will now take this property, meaning that 
everything will swipe up from the bottom. A possible workaround might be to
create something like a 'EverythingButSettings' StackNavigator, which won't
have mode: 'modal' and then refer to EverythingButSettings instead of HomeTabs.

*/
const HomeNav = StackNavigator({
	Home: {
		screen: HomeTabs
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			header: null
		}
	}},
	{
		mode: 'modal'
	}
)

const MainNavigator = StackNavigator({
	Splash: {
		screen: SplashContainer,
	},
	Home: {
		screen: HomeNav,
		navigationOptions: {
			gesturesEnabled: false // disable swipe back to Splash
		}
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
