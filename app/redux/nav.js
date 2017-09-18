import { NavigationActions } from 'react-navigation';
import MainNavigator from '~/config/routes.js';

const initialState = MainNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
	let newState;
	switch (action.type) {

		/* // this is an example of how to do a simple route change
		case 'goToSample':
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Sample' }),
				state
			);
			break;
		*/

		case 'authSuccess':
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Leaderboard' }),
				state
			);
			break;

		case 'Navigation/BACK': // the default dispatch for the back button
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
			break;
		
		case 'Navigation/NAVIGATE':
		console.log(action);
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: action.routeName }),
				state
			);
			break;
		

		default:
			console.log('NavReducer Defaulted')
			console.log(action);
			console.log(action.type)
			return state;
	}

	return newState || state;


	//const nextState = MainNavigator.router.getStateForAction(action, state);
	//return nextState || state;
};
