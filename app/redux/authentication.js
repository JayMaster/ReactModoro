const initialState = {
	isAuthed: false,
	isAuthenticating: false,
	authedId: '',
}

export default function authentication (state = initialState, action) { // if state = undefined, make it initialState
	switch (action.type) {
		case 'authSuccess':
			return {
				...state,
				isAuthed: true
			}
		default : 
			return state
	}
}