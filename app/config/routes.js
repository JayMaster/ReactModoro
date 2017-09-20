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

const HomeTabs = TabNavigator({
	Home: {
		screen: Home,
		
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-home-outline" type="ionicon" size={35} color={tintColor} />
		} 
	},
	Leaderboard: {
		screen: Leaderboard,
		navigationOptions: {
			tabBarLabel: 'Leaderboard',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-trophy-outline" type="ionicon" size={35} color={tintColor} />
		}
	}
})

const MainNavigator = StackNavigator({
	Splash: {
		screen: SplashContainer
	},
	Home: {
		screen: HomeTabs, 
	}
});

export default MainNavigator;