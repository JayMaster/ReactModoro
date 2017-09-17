import { combineReducers } from 'redux';

import nav from './nav';
import authentication from './authentication';

export default combineReducers({
	nav,
	authentication
});