import { StackNavigator } from 'react-navigation';

import { Splash } from '~/components';

/*const Routes = {
	Splash: {
		screen: Splash
	}
}; */

const MainNavigator = StackNavigator({
	Splash: {
		screen: Splash
	}
});

export default MainNavigator;