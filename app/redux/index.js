import { combineReducers } from 'redux';

import nav from './nav';
import authentication from './authentication';
import sample from './sample';

export default combineReducers({
	nav,
	authentication,
	sample
});