import { combineReducers } from 'redux';

import nav from './nav';
import authentication from './authentication';
import flashNotification from './flashNotification'

export default combineReducers({
	nav,
	authentication,
	flashNotification
});