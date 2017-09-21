import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { colors } from '~/styles'

ReactModoroNavbar.propTypes = {
	title: PropTypes.string.isRequired,
	rightButton: PropTypes.element,
	leftButton: PropTypes.element
}

export default function ReactModoroNavbar (props) {
	let optionalAttrs = {};
	props.leftButton && (optionalAttrs.leftButton = React.cloneElement(props.leftButton,
		{style: {marginLeft: 10, justifyContent: 'center'}}
	))
	props.rightButton && (optionalAttrs.rightButton = React.cloneElement(props.rightButton,
		{style: {marginRight: 10, justifyContent: 'center'}}
	))
	return (
    <NavigationBar
    	{...optionalAttrs} // if there are any additional attributes, add them
    	tintColor = {colors.styles}
    	title = {{title: props.title}}/>
  )
}

const styles = StyleSheet.create({

})
