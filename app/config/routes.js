import { StackNavigator, TabNavigator } from 'react-navigation';

import { Splash } from '~/components';
import { Me } from '~/components';
import { Sample } from '~/components';
import { Magnus } from '~/components';
import { Vittel } from '~/components';

/*const Routes = {
	Splash: {
		screen: Splash
	}
}; */

const SampleStack = StackNavigator({
	Magnus: {
		screen: Magnus
	},
	Vittel: {
		screen: Vittel
	}
})


const MyTabNavigator = TabNavigator({
	Me: {
		screen: Me
	},
	Sample: {
		screen: SampleStack
	}
})


const MainNavigator = StackNavigator({
	Splash: {
		screen: Splash
	},
	Home: {
		screen: MyTabNavigator
	}
});


export default MainNavigator;