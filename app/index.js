import React from 'react'
import { AppContainer } from '~/containers';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// import * as reducers from './redux'
import store from '~/store';

/* const store = createStore(
	combineReducers(reducers),
	applyMiddleware(thunk)
	// middleware allows you to tie in the time period between dispatching an action and before it hits all reducers
	// dispatch --> applyMiddleware --> reducing
) */

export default function ReactModoro (props) {
  return (
  	<Provider store = {store}>
   	 <AppContainer />
   	</Provider>
  )
}