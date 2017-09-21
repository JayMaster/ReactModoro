import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk'
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';
// import reducers from '../reducers';
import { LOGGING_OUT } from '~/redux/authentication'
import appReducer from '../redux'; // already combined


function rootReducer (state, action) {
	if (action.type === LOGGING_OUT) {
		state = undefined // reset the entire redux store
	}

	return appReducer(state, action)
}

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk),
	)
);

export default store;

