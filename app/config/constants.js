import firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBf9l5F_LA-UR9gfD8aXH60ixhfhD8jOXI",
    authDomain: "reactmodoro-68f6a.firebaseapp.com",
    databaseURL: "https://reactmodoro-68f6a.firebaseio.com",
    projectId: "reactmodoro-68f6a",
    storageBucket: "reactmodoro-68f6a.appspot.com",
    messagingSenderId: "621851866357"
})

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
	ref,
	firebaseAuth,
	facebookProvider
}