import { NavigationActions } from 'react-navigation';
import MainNavigator from '~/config/routes.js';

const initialState = MainNavigator.router.getStateForAction(NavigationActions.init());

function isAuthed(uid) {
	return {
		type: IS_AUTHED,
		uid
	}
}

export default (state = initialState, action) => {
	let newState;
	switch (action.type) {

		case 'LOGGING_OUT':
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Splash' }),
				state
			);
			break;

		case 'GO_BACK': // this is built manually and has nothing to do with the pre-built back button in iOS
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
			break;

		case 'TO_SETTINGS': // this comes from the auth reducer
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Settings' }),
				state
			);
			break;

		case 'IS_AUTHED': // this comes from the auth reducer
			newState = MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Home' }),
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
