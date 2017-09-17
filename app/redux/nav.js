import { NavigationActions } from 'react-navigation';
import MainNavigator from '~/config/routes.js';

const initialState = MainNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
	const nextState = MainNavigator.router.getStateForAction(action, state);
	return nextState || state;
};