import { firebaseAuth, facebookProvider } from '~/config/constants'
import { AccessToken } from 'react-native-fbsdk'

export function getAccessToken () {
	return AccessToken.getCurrentAccessToken();
}

export function authWithToken(accessToken) {
	return firebaseAuth
		.signInWithCredential(facebookProvider.credential(accessToken))
}