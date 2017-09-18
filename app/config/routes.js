import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { Splash } from '~/components';
import { Me } from '~/components';
import { Sample } from '~/components';
import { Home } from '~/components';
import { Leaderboard } from '~/components'

/*
const MainNavigator = StackNavigator({
	Splash: {
		screen: Splash
	},
	Sample: {
		screen: Sample
	}
});
*/

const MainNavigator = TabNavigator({
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

export default MainNavigator;