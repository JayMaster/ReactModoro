import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk'
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';
// import reducers from '../reducers';

import reducers from '../redux';


const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk),
	)
);

export default store;