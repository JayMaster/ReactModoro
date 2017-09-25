import { combineReducers } from 'redux';

import nav from './nav';
import authentication from './authentication';
import flashNotification from './flashNotification'
import settings from './settings'
import users from './users'

export default combineReducers({
	nav,
	authentication,
	flashNotification,
	settings,
	users
});